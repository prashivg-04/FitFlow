# Docker

## Overview

FitFlow is containerized using Docker to provide a consistent development and deployment environment.

The application consists of three containers:

* Frontend (React + Vite + Nginx)
* Backend (Node.js + Express + Prisma)
* PostgreSQL (official PostgreSQL image)

---

# Phase 1 — Docker

## Backend

### Base Image

* `node:22-alpine`

### Build Process

1. Copy package files
2. Install dependencies using `npm ci`
3. Copy source code
4. Generate Prisma Client
5. Copy and configure the Docker entrypoint script
6. Run Prisma migrations on container startup
7. Start Express server

### Container Startup

The backend uses a Docker entrypoint script to automatically apply pending Prisma migrations before starting the server.

Startup flow:

```text
Backend container starts
        ↓
docker-entrypoint.sh
        ↓
Prisma migrations are deployed
        ↓
Express server starts
```

The entrypoint script uses `set -e` so the container exits if database migrations fail.

The Node.js server is started using `exec` to ensure proper signal handling inside the container.

### Port

8080

### Status

* ✅ Docker image builds successfully.
* ✅ Container starts successfully.
* ✅ Backend accessible on port 8080.
* ✅ Prisma migrations automatically applied on startup.

---

## Frontend

### Build Strategy

Multi-stage Docker build.

#### Stage 1

* `node:22-alpine`
* Install dependencies
* Build React application using Vite

#### Vite Environment Variables

Vite environment variables prefixed with `VITE_` are evaluated during the frontend build.

Because the React application is built before the Nginx container runs, these variables must be available during `npm run build`.

Docker build arguments are used to provide these values during the image build:

```dockerfile
ARG VITE_NODE_SERVER_URL

ENV VITE_NODE_SERVER_URL=$VITE_NODE_SERVER_URL

RUN npm run build
```

The value is supplied from Docker Compose using:

```yaml
build:
  args:
    VITE_NODE_SERVER_URL: http://localhost:8080/api
```

`ARG` provides the value during the Docker image build, while `ENV` makes it available as an environment variable to the Vite build process.

#### Stage 2

* `nginx:alpine`
* Copy production build (`dist/`)
* Serve static files

### Nginx

* Listening on port 3000
* SPA routing using:

```nginx
try_files $uri $uri/ /index.html;
```

### Port

3000

### Status

* ✅ Docker image builds successfully.
* ✅ React application served successfully.
* ✅ Client-side routing works correctly.
* ✅ Vite build-time environment variable configured correctly.

---

## Docker Compose

Docker Compose is used to run the complete application locally.

The Compose setup includes:

* Frontend
* Backend
* PostgreSQL

Docker Compose automatically creates a shared network for the services, allowing containers to communicate using service names.

The PostgreSQL database uses a named Docker volume to persist database data.

### Service Communication

```text
Browser
   │
   ▼
Frontend (port 3000)
   │
   ▼
Backend (port 8080)
   │
   ▼
PostgreSQL (port 5432)
```

### Status

* ✅ All services start successfully with Docker Compose.
* ✅ Frontend communicates with backend.
* ✅ Backend communicates with PostgreSQL.
* ✅ PostgreSQL data is persisted using a Docker volume.
* ✅ Prisma migrations run automatically during backend startup.

---

## Amazon ECR

The Docker images are pushed to Amazon Elastic Container Registry (ECR) so they can later be pulled by Kubernetes.

### Region

`ap-south-1`

### Repositories

* `prashivgoyal/fitflow-frontend`
* `prashivgoyal/fitflow-backend`

### Repository URIs

```text
492094933457.dkr.ecr.ap-south-1.amazonaws.com/prashivgoyal/fitflow-frontend

492094933457.dkr.ecr.ap-south-1.amazonaws.com/prashivgoyal/fitflow-backend
```

### ECR Authentication

Docker was authenticated with Amazon ECR using:

```bash
aws ecr get-login-password --region ap-south-1 | docker login --username AWS --password-stdin 492094933457.dkr.ecr.ap-south-1.amazonaws.com
```

### Image Tagging

Local Docker images were tagged with their corresponding ECR repository URIs.

Backend:

```bash
docker tag fitflow-backend:latest 492094933457.dkr.ecr.ap-south-1.amazonaws.com/prashivgoyal/fitflow-backend:latest
```

Frontend:

```bash
docker tag fitflow-frontend:latest 492094933457.dkr.ecr.ap-south-1.amazonaws.com/prashivgoyal/fitflow-frontend:latest
```

### Image Push

Backend:

```bash
docker push 492094933457.dkr.ecr.ap-south-1.amazonaws.com/prashivgoyal/fitflow-backend:latest
```

Frontend:

```bash
docker push 492094933457.dkr.ecr.ap-south-1.amazonaws.com/prashivgoyal/fitflow-frontend:latest
```

### Status

* ✅ Backend image pushed successfully to Amazon ECR.
* ✅ Frontend image pushed successfully to Amazon ECR.
* ✅ Both images verified in the AWS Console.
* ✅ Images are available with the `latest` tag.

---

## Phase 1 Status

Dockerization is complete.

The application can:

* Run locally using Docker Compose.
* Run frontend, backend, and PostgreSQL as separate containers.
* Persist PostgreSQL data using Docker volumes.
* Automatically apply Prisma migrations during backend startup.
* Use build-time environment variables for the Vite frontend.
* Store application Docker images in Amazon ECR.

The next phase focuses on Kubernetes deployment and infrastructure.
