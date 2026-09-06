# CI/CD Pipeline

## 1. Overview

FitFlow uses a GitHub Actions CI/CD pipeline to automate testing, building, and deploying the application to AWS EC2 running Kubernetes (Minikube).

**Stack:**
- GitHub Actions — pipeline orchestration
- Docker — containerization
- Amazon ECR — private image registry
- AWS EC2 — deployment target
- Kubernetes (Minikube) — container orchestration

**Trigger:**
- Push to `main` branch
- Manual trigger via `workflow_dispatch`

---

## 2. Pipeline Flow

```
Git push to main
      ↓
Job 1: Test
      ↓
Job 2: Build & Push Images to ECR
      ↓
Job 3: Deploy to EC2 / Kubernetes
      ↓
Updated FitFlow Application Live
```

---

## 3. Jobs

### Job 1 — Test

- Checks out code
- Sets up Node.js
- Installs backend and frontend dependencies
- Runs test steps for both

### Job 2 — Build & Push Images

- Configures AWS credentials using GitHub Actions IAM user
- Logs into Amazon ECR
- Builds backend Docker image → pushes to ECR
- Builds frontend Docker image with `VITE_NODE_SERVER_URL=/api` → pushes to ECR

> Both images are built for `linux/amd64` architecture to match the EC2 server.
> Frontend is always built with `VITE_NODE_SERVER_URL=/api` so API calls route through the Nginx Ingress Controller.

### Job 3 — Deploy to EC2 / Kubernetes

- SSHs into EC2 using stored private key
- Refreshes the Kubernetes ECR authentication secret (ECR tokens expire every 12 hours)
- Restarts frontend and backend Kubernetes deployments
- Kubernetes pulls latest images from ECR via `imagePullPolicy: Always`
- Waits for rollout to complete with a 180 second timeout
- Verifies pods are running

> The pipeline does not reapply all Kubernetes manifests on every push. Infrastructure is configured separately. CI/CD focuses only on deploying updated application images.

---

## 4. Authentication

Two separate AWS authentication mechanisms are used:

| Entity | Mechanism | Purpose |
|---|---|---|
| GitHub Actions | IAM user credentials | Push Docker images to ECR |
| EC2 instance | IAM role | Generate fresh ECR credentials for Kubernetes image pulls |

---

## 5. GitHub Secrets and Variables

### Secrets
Stored under **Settings → Secrets and variables → Actions → Secrets**

| Secret | Purpose |
|---|---|
| `AWS_ACCESS_KEY_ID` | GitHub Actions IAM user access key |
| `AWS_SECRET_ACCESS_KEY` | GitHub Actions IAM user secret key |
| `FITFLOW_EC2_HOST` | EC2 Elastic IP address |
| `FITFLOW_EC2_USER` | EC2 SSH username (ubuntu) |
| `FITFLOW_EC2_SSH_KEY` | EC2 private key for SSH access |

### Variables
Stored under **Settings → Secrets and variables → Actions → Variables**

| Variable | Value |
|---|---|
| `ECR_REGISTRY` | 492094933457.dkr.ecr.ap-south-1.amazonaws.com |
| `ECR_REPO_BACKEND` | prashivgoyal/fitflow-backend |
| `ECR_REPO_FRONTEND` | prashivgoyal/fitflow-frontend |
| `AWS_REGION` | ap-south-1 |

---

## 6. IAM Permissions

| Entity | Policy |
|---|---|
| GitHub Actions IAM user | `AmazonEC2ContainerRegistryFullAccess` |
| EC2 IAM role | `AmazonEC2ContainerRegistryReadOnly` |

---

## 7. ECR Secret Refresh

Because ECR authentication tokens expire every 12 hours, the deploy job automatically recreates the Kubernetes ECR pull secret on every deployment:

```bash
kubectl delete secret ecr-secret -n fitflow --ignore-not-found

kubectl create secret docker-registry ecr-secret \
  --docker-server=<ECR_REGISTRY> \
  --docker-username=AWS \
  --docker-password=$(aws ecr get-login-password --region <AWS_REGION>) \
  --namespace=fitflow
```

This ensures Kubernetes can always pull the latest images from ECR without manual intervention.

---

## 8. Deployment Strategy

- `imagePullPolicy: Always` on both frontend and backend deployments ensures Kubernetes always pulls the latest image from ECR
- `kubectl rollout restart` triggers a rolling update
- `kubectl rollout status --timeout=180s` waits for the rollout to complete before marking the pipeline as successful

---

## 9. Result

A complete end-to-end deployment flow:

```
Git push
  → GitHub Actions triggered
  → Tests pass
  → Docker images built and pushed to ECR
  → SSH into EC2
  → ECR secret refreshed
  → Kubernetes deployments restarted
  → Latest images pulled from ECR
  → Rolling update completes
  → FitFlow updated and live
```

The pipeline was successfully tested with an actual frontend change, confirming that a code push automatically reaches the live application.