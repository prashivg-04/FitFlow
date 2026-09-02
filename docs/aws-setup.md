# AWS & Kubernetes Setup

## 1. Overview

This document covers the AWS infrastructure and Kubernetes deployment setup for FitFlow.

The deployment uses:

* AWS EC2
* AWS ECR
* Minikube
* Kubernetes
* NGINX Ingress Controller
* PostgreSQL
* Docker containers

> Detailed Docker and Docker Compose documentation is available separately in `docs/docker.md` and `docs/compose.md`.

---

## 2. Architecture

```
Browser
    ↓
EC2 Public IP (port 80)
    ↓
NGINX Ingress Controller
    ↓
/api/*  →  Backend Service (port 8080)  →  Backend Pod (Node.js)
/       →  Frontend Service (port 3000) →  Frontend Pod (React/Nginx)
                                                    ↓
                                        PostgreSQL Service (port 5432)
                                                    ↓
                                        PostgreSQL StatefulSet
                                                    ↓
                                        PersistentVolume (/mnt/data/postgres)
```

---

## 3. AWS Resources

### 3.1 Amazon ECR

Two private repositories created in `ap-south-1`:

| Repository | URI |
|---|---|
| fitflow-frontend | 492094933457.dkr.ecr.ap-south-1.amazonaws.com/prashivgoyal/fitflow-frontend |
| fitflow-backend | 492094933457.dkr.ecr.ap-south-1.amazonaws.com/prashivgoyal/fitflow-backend |

Image tag mutability: **Mutable**
Latest tag is overwritten on every push.

### 3.2 EC2 Instance

| Field | Value |
|---|---|
| Instance type | t2.medium |
| AMI | Ubuntu 22.04 LTS |
| Region | ap-south-1 |
| Storage | 20GB gp3 |
| Name | fitflow-k8s |

### 3.3 IAM Role

| Field | Value |
|---|---|
| Role name | fitflow-ec2-role |
| Policy | AmazonEC2ContainerRegistryReadOnly |
| Purpose | Allows EC2 to pull images from ECR |

### 3.4 Security Group

| Port | Protocol | Purpose |
|---|---|---|
| 22 | TCP | SSH access |
| 80 | TCP | HTTP / Ingress |
| 443 | TCP | HTTPS (future) |
| 8443 | TCP | Minikube API server |
| 30000-32767 | TCP | Kubernetes NodePort range |

---

## 4. Container Images

### 4.1 Backend Image

```bash
# Build
docker build -t 492094933457.dkr.ecr.ap-south-1.amazonaws.com/prashivgoyal/fitflow-backend:latest ./Backend

# Login to ECR
aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 492094933457.dkr.ecr.ap-south-1.amazonaws.com

# Push
docker push 492094933457.dkr.ecr.ap-south-1.amazonaws.com/prashivgoyal/fitflow-backend:latest
```

### 4.2 Frontend Image

Frontend must be built with `VITE_NODE_SERVER_URL=/api` so API calls route through the Ingress controller rather than directly to a port.

```bash
# Build with correct API URL for K8s Ingress
docker build \
  --build-arg VITE_NODE_SERVER_URL=/api \
  -t 492094933457.dkr.ecr.ap-south-1.amazonaws.com/prashivgoyal/fitflow-frontend:latest \
  ./Frontend

# Push
docker push 492094933457.dkr.ecr.ap-south-1.amazonaws.com/prashivgoyal/fitflow-frontend:latest
```

> **Important:** Do not build the frontend with `http://localhost:8080/api` for K8s deployment. That URL bypasses Ingress and breaks routing.

---

## 5. EC2 Setup

### 5.1 Connect to EC2

```bash
ssh -i <your-key.pem> ubuntu@<elastic-ip>
```

### 5.2 Install Docker

```bash
sudo apt update
sudo apt install -y docker.io
sudo systemctl start docker
sudo systemctl enable docker
sudo usermod -aG docker ubuntu
newgrp docker
```

### 5.3 Install kubectl

```bash
curl -LO "https://dl.k8s.io/release/$(curl -L -s https://dl.k8s.io/release/stable.txt)/bin/linux/amd64/kubectl"
sudo install -o root -g root -m 0755 kubectl /usr/local/bin/kubectl
kubectl version --client
```

### 5.4 Install Minikube

```bash
curl -LO https://storage.googleapis.com/minikube/releases/latest/minikube-linux-amd64
sudo install minikube-linux-amd64 /usr/local/bin/minikube
minikube version
```

### 5.5 Start Minikube

```bash
minikube start --driver=docker --memory=3000 --cpus=2
minikube status
kubectl get nodes
```

### 5.6 Enable NGINX Ingress

```bash
minikube addons enable ingress
kubectl get pods -n ingress-nginx
```

Wait until all ingress-nginx pods show `Running` before deploying.

---

## 6. Repository Setup & EC2 Configuration

### 6.1 Clone the Repository

```bash
git clone https://github.com/prashivg-04/FitFlow.git
cd FitFlow
```

### 6.2 Configure Kubernetes Secrets

Secret files are not committed to the repository. Create them from templates:

```bash
# Backend secret
cp k8s/backend/secret.template.yaml k8s/backend/secret.yaml

# Database secret
cp k8s/database/secret.template.yaml k8s/database/secret.yaml
```

Then edit each file and replace placeholder values with actual credentials:

```bash
nano k8s/backend/secret.yaml
nano k8s/database/secret.yaml
```

> **Never commit secret.yaml files to Git.**

### 6.3 Update CORS Configuration

Open `k8s/backend/configmap.yaml` and replace the CORS_ORIGIN value with your EC2 Elastic IP:

```bash
nano k8s/backend/configmap.yaml
```

Change:
```yaml
CORS_ORIGIN: http://REPLACE_WITH_EC2_IP
```

To:
```yaml
CORS_ORIGIN: http://<your-elastic-ip>
```

### 6.4 Verify Container Image Configuration

Confirm both deployments use `imagePullPolicy: Always`:

```yaml
imagePullPolicy: Always
```

This ensures EC2 always pulls the latest image from ECR on deployment.

### 6.5 Verify Persistent Storage Path

Confirm `k8s/database/pv.yaml` uses the correct hostPath for EC2 Minikube:

```yaml
hostPath:
  path: /mnt/data/postgres
  type: DirectoryOrCreate
```

### 6.6 Environment Configuration

Confirm `k8s/backend/configmap.yaml` has:

```yaml
NODE_ENV: development
```

This ensures cookies work correctly over HTTP since EC2 deployment does not use HTTPS.

---

## 7. Kubernetes Deployment

### 7.1 Namespace

```bash
kubectl apply -f k8s/namespace.yaml
```

### 7.2 Kubernetes Secrets

```bash
kubectl apply -f k8s/database/secret.yaml
kubectl apply -f k8s/backend/secret.yaml
```

### 7.3 PostgreSQL

```bash
kubectl apply -f k8s/database/pv.yaml
kubectl apply -f k8s/database/pvc.yaml
kubectl apply -f k8s/database/statefulset.yaml
kubectl apply -f k8s/database/service.yaml
```

Wait for PostgreSQL pod to be running before deploying backend:

```bash
kubectl get pods -n fitflow -w
```

### 7.4 Backend

```bash
kubectl apply -f k8s/backend/configmap.yaml
kubectl apply -f k8s/backend/secret.yaml
kubectl apply -f k8s/backend/deployment.yaml
kubectl apply -f k8s/backend/service.yaml
```

### 7.5 Frontend

```bash
kubectl apply -f k8s/frontend/deployment.yaml
kubectl apply -f k8s/frontend/service.yaml
```

### 7.6 Ingress

```bash
kubectl apply -f k8s/ingress.yaml
```

---

## 8. Accessing the Application

Once all pods are running, get the Minikube IP:

```bash
minikube ip
```

Access the application at:
```
http://<minikube-ip>
```

Or use tunnel for clean localhost access:
```bash
minikube tunnel
```

Then access at `http://localhost`

---

## 9. Verification

```bash
# Check all pods
kubectl get pods -n fitflow

# Check deployments
kubectl get deployments -n fitflow

# Check services
kubectl get services -n fitflow

# Check ingress
kubectl get ingress -n fitflow

# Check backend migration logs
kubectl logs <backend-pod-name> -n fitflow

# Describe a pod if something is wrong
kubectl describe pod <pod-name> -n fitflow
```

---

## 10. Environment-Specific Configuration

| Configuration | Local (docker-compose) | K8s EC2 |
|---|---|---|
| VITE_NODE_SERVER_URL | http://localhost:8080/api | /api |
| CORS_ORIGIN | http://localhost:3000 | http://\<elastic-ip\> |
| NODE_ENV | development | development |
| imagePullPolicy | IfNotPresent | Always |
| PV hostPath | N/A | /mnt/data/postgres |

---

## 11. Important Deployment Decisions

**1. VITE_NODE_SERVER_URL as relative path for K8s**
Frontend uses `/api` as base URL instead of an absolute URL. This allows Ingress to route API calls correctly regardless of host or port. Absolute URLs like `http://localhost:8080/api` bypass Ingress and break in K8s.

**2. NODE_ENV set to development despite K8s deployment**
The backend cookie configuration uses `NODE_ENV` to decide `secure` and `sameSite` values. Since EC2 deployment uses HTTP (no SSL), `NODE_ENV=development` is used to avoid secure cookie issues. This is a deliberate decision for this testing deployment.

**3. Secrets not committed to Git**
`secret.yaml` files contain sensitive credentials and are excluded from version control via `.gitignore`. Template files (`secret.template.yaml`) are committed instead with placeholder values.

**4. entrypoint.sh handles database migrations**
The backend container runs `npx prisma migrate deploy` via `entrypoint.sh` before starting the server. No init containers or manual migration steps needed.

---

## 12. Cleanup

```bash
# Stop all K8s resources
kubectl delete namespace fitflow

# Stop Minikube
minikube stop

# Stop EC2 instance from AWS Console
# Do not terminate — stop only to preserve the setup
```