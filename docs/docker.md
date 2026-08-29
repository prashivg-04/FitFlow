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

### Port

8080

### Status

* ✅ Docker image builds successfully.
* ✅ Container starts successfully.
* ✅ Backend accessible on port 8080.

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

## Next Step

Create `docker-compose.yml` to orchestrate:

* Frontend
* Backend
* PostgreSQL

on a shared Docker network.
