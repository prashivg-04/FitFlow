# FitFlow — Role-Based Gym Management Platform

FitFlow is a full-stack SaaS application for gym operations across three roles: Owner, Trainer, and Member.

It focuses on a complete workout lifecycle, from member onboarding and trainer assignment to day-wise workout execution and completion tracking.

Live App: [fit-flow-ten.vercel.app](https://fit-flow-ten.vercel.app/)

---

## Demo Credentials

Pre-seeded accounts to explore all three roles.

**Owner**
- Email: rajesh.kumar@fitflow.com
- Password: FitFlow@2024

**Trainer**
- Email: arjun.mehta@fitflow.com
- Password: Trainer@2024

**Member**
- Email: aditya.bansal@fitflow.com
- Password: Member@2024

---

## Overview

FitFlow replaces manual coordination with role-scoped workflows:

- Owners review join requests and map trainers to members.
- Trainers create reusable workout programs and assign schedules.
- Members consume assigned plans, mark workouts complete, and export mobile-friendly PDFs.

---

## Tech Stack

### Frontend

- React 19 + Vite
- React Router DOM
- Redux Toolkit + React Redux
- Axios
- Zod
- Tailwind CSS v4
- Sonner
- jsPDF + jspdf-autotable

### Backend

- Node.js + Express
- Prisma ORM
- PostgreSQL
- JWT (cookie-based auth)
- Cookie Parser + CORS

### DevOps

- Docker — containerized frontend and backend
- Docker Compose — local multi-service development
- AWS ECR — private container image registry
- AWS EC2 — Kubernetes deployment target
- Kubernetes (Minikube) — container orchestration
- NGINX Ingress Controller — path-based routing
- GitHub Actions — CI/CD pipeline

---

## Architecture

### Application

```
React UI (role routes + guards)
   -> Axios client (withCredentials + response interceptor)
   -> Express routes (/api/*)
   -> Controllers
   -> Services (business rules)
   -> Prisma
   -> PostgreSQL
```

### Kubernetes Deployment

```
Git push to main
      ↓
GitHub Actions (Test → Build → Deploy)
      ↓
Docker images pushed to AWS ECR
      ↓
SSH into EC2
      ↓
Kubernetes pulls latest images
      ↓
EC2 Elastic IP (port 80)
      ↓
Minikube (--ports=80:80)
      ↓
NGINX Ingress Controller
      ↓
/api/*  →  Backend Service  →  Backend Pod (Node.js)
/       →  Frontend Service →  Frontend Pod (React/Nginx)
                                        ↓
                              PostgreSQL StatefulSet
                                        ↓
                              PersistentVolume (/mnt/data/postgres)
```

---

## Implemented Features

### Authentication and Access

- Signup, login, logout, and session restore (`/api/auth/me`).
- JWT in HTTP-only cookies (not localStorage).
- Route gating by role and gym membership status (`NONE`, `PENDING`, `ACTIVE`).

### Owner Workflows

- View pending join requests.
- Approve or reject member/trainer join requests.
- View trainers and unassigned members.
- Assign/unassign trainer-member pairs.

### Trainer Workflows

- View assigned members.
- Create and list workout programs.
- Assign program days to members for specific dates.
- Fetch member calendar and assignment window data.

### Member Workflows

- Join a gym via gym code request flow.
- View day-wise schedule (`/api/member/schedule`).
- Mark workout complete (`/api/member/complete-workout`).
- Download day workout as PDF.

---

## Engineering Decisions

- Cookie auth + `withCredentials: true` to keep auth tokens out of JS-readable storage.
- Service-layer business logic to keep controllers thin and testable.
- Snapshot-based assignment schema so program edits do not mutate already-assigned workouts.
- Global backend error middleware with structured app errors.
- Axios response interceptor for centralized frontend API error handling.
- `entrypoint.sh` runs `prisma migrate deploy` before server start — no manual migration needed in containers.
- `VITE_NODE_SERVER_URL=/api` for K8s so API calls route through Ingress regardless of host or port.

---

## Versioning

| Version | Description |
|---|---|
| v0.1.0 | Baseline — original Vercel/Render deployment |
| v1.0.0 | Production ready — cleanup, responsiveness, seed data |
| v2.0.0 | DevOps — Docker, Kubernetes, GitHub Actions CI/CD |

---

## Repository Structure

```
FitFlow/
   Backend/
      prisma/
         schema.prisma
         migrations/
      src/
         controllers/
         middlewares/
         routes/
         services/
         utils/
         validations/
         app.js
         server.js
      Dockerfile
      entrypoint.sh
      package.json

   Frontend/
      public/
      src/
         api/
         components/
         pages/
         store/
         utils/
         validations/
         App.jsx
         main.jsx
      Dockerfile
      nginx.conf
      package.json

   k8s/
      namespace.yaml
      backend/
      frontend/
      database/
      ingress.yaml

   docs/
      docker.md
      compose.md
      aws-setup.md
      cicd.md
      screenshots/

   docker-compose.yml
   README.md
```

---

## Local Setup

### 1. Clone

```bash
git clone https://github.com/prashivg-04/FitFlow.git
cd FitFlow
```

### 2. Backend

```bash
cd Backend
npm install
```

Create `Backend/.env`:

```env
PORT=8080
NODE_ENV=development
DATABASE_URL=postgresql://USER:PASSWORD@HOST:PORT/DB_NAME
JWT_SECRET=replace_with_strong_secret
JWT_EXPIRES_IN=7d
```

```bash
npx prisma generate
npx prisma migrate deploy
npm run dev
```

### 3. Frontend

```bash
cd Frontend
npm install
npm run dev
```

Create `Frontend/.env`:

```env
VITE_NODE_SERVER_URL=http://localhost:8080/api
```

### 4. Docker Compose (recommended)

Run the full stack locally with a single command:

```bash
docker-compose up --build
```

This starts PostgreSQL, backend, and frontend together. See `docs/compose.md` for details.

---

## Kubernetes Deployment

Full setup documented in `docs/aws-setup.md`.

Quick reference:

```bash
# Start Minikube
minikube start --driver=docker --memory=3000 --cpus=2 --ports=80:80
minikube addons enable ingress

# Create ECR pull secret
kubectl create secret docker-registry ecr-secret \
  --docker-server=<ECR_REGISTRY> \
  --docker-username=AWS \
  --docker-password=$(aws ecr get-login-password --region ap-south-1) \
  --namespace=fitflow

# Deploy
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/database/
kubectl apply -f k8s/backend/
kubectl apply -f k8s/frontend/
kubectl apply -f k8s/ingress.yaml

# Verify
kubectl get pods -n fitflow
```

Access at `http://<ec2-elastic-ip>`

---

## CI/CD Pipeline

Documented in `docs/cicd.md`.

Every push to `main` triggers:
1. **Test** — install dependencies and run tests
2. **Build** — build Docker images and push to AWS ECR
3. **Deploy** — SSH into EC2, refresh ECR secret, restart Kubernetes deployments

---

## Documentation

| Doc | Description |
|---|---|
| `docs/docker.md` | Dockerfile setup and build instructions |
| `docs/compose.md` | Docker Compose local development guide |
| `docs/aws-setup.md` | AWS infrastructure and Kubernetes deployment |
| `docs/cicd.md` | GitHub Actions CI/CD pipeline |
| `Backend/API_DOCUMENTATION.md` | Full API reference |
| `Backend/DB_SCHEMA.md` | Database schema |
| `Frontend/FRONTEND_DOCUMENTATION.md` | Frontend architecture |

---

## Feedback

If you encounter bugs or have suggestions:

👉 [Submit Feedback](https://forms.gle/ezHRjruEpLTuVUY57)

Or open an issue on GitHub.

---

## Author

**Prashiv Goyal**

- GitHub: [prashivg-04](https://github.com/prashivg-04)
- Email: prashivgoyal1504@gmail.com