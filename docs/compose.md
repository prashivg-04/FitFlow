# Docker Compose

## Overview

Docker Compose is used to run the complete FitFlow application locally as multiple interconnected containers.

The Compose setup consists of three services:

* Frontend
* Backend
* PostgreSQL

Each service runs in its own container and communicates with the other services through the Docker Compose network.

---

## Services

### PostgreSQL

PostgreSQL uses the official:

```text
postgres:17-alpine
```

image.

The database is configured with:

* PostgreSQL user
* PostgreSQL password
* Database name

The database data is stored using a named Docker volume:

```yaml
volumes:
  - postgres-data:/var/lib/postgresql/data
```

This allows PostgreSQL data to persist even if the container is removed and recreated.

PostgreSQL exposes port `5432` for local access.

---

### Backend

The backend is built from:

```text
./Backend
```

The container:

* Runs the Node.js + Express server
* Uses port `8080`
* Receives runtime environment variables through `Backend/.env.docker`
* Depends on the PostgreSQL service

The backend connects to PostgreSQL using the Compose service name:

```env
DATABASE_URL=postgresql://postgres:postgres@postgres:5432/fitflow
```

The important part is:

```text
postgres:5432
```

`postgres` is the Docker Compose service name. Containers on the Compose network can use service names to communicate with each other.

---

### Frontend

The frontend is built from:

```text
./Frontend
```

The container:

* Builds the React application using Vite
* Uses Nginx to serve the production build
* Runs Nginx on port `3000`
* Depends on the backend service

The frontend is accessible from the host at:

```text
http://localhost:3000
```

---

## Service Communication

Docker Compose automatically creates a network for the services in the Compose project.

The containers can communicate using their service names.

The application flow is:

```text
Browser
   │
   │ localhost:3000
   ▼
Frontend / Nginx
   │
   │ localhost:8080
   ▼
Backend / Express
   │
   │ postgres:5432
   ▼
PostgreSQL
```

There is an important distinction between **host access** and **container-to-container communication**.

From the browser:

```text
localhost:3000
```

refers to the host machine and reaches the frontend container through the published port.

The frontend makes its API request from the browser to:

```text
http://localhost:8080/api
```

which reaches the backend through the published backend port.

The backend itself does not use `localhost:5432` to reach PostgreSQL.

Instead, it uses:

```text
postgres:5432
```

because PostgreSQL is another container on the Compose network.

---

## Port Mapping

The services use the following port mappings:

| Service    | Container Port | Host Port |
| ---------- | -------------: | --------: |
| Frontend   |           3000 |      3000 |
| Backend    |           8080 |      8080 |
| PostgreSQL |           5432 |      5432 |

The mappings allow the host machine to access the services using `localhost`.

For example:

```text
Frontend     → http://localhost:3000
Backend      → http://localhost:8080
PostgreSQL   → localhost:5432
```

---

## `depends_on`

The Compose configuration uses `depends_on` to express the basic startup dependency between services.

```yaml
backend:
  depends_on:
    - postgres

frontend:
  depends_on:
    - backend
```

This establishes the startup order:

```text
PostgreSQL
     ↓
Backend
     ↓
Frontend
```

`depends_on` controls the service startup order but does not guarantee that the dependent service is fully ready to accept requests.

---

## Environment Variables

Environment variables are kept outside the Compose file where appropriate.

### Backend

Backend runtime configuration is stored in:

```text
Backend/.env.docker
```

It contains values such as:

```env
PORT=8080
JWT_SECRET=...
JWT_EXPIRES_IN=...
NODE_ENV=development
DATABASE_URL=...
CORS_ORIGIN=http://localhost:3000
```

The file is excluded from Git.

### PostgreSQL

PostgreSQL configuration uses environment variables for:

```env
POSTGRES_USER=...
POSTGRES_PASSWORD=...
POSTGRES_DB=...
```

These values are kept out of the committed Compose configuration.

### Frontend

The frontend API URL is a Vite build-time variable.

Because Vite embeds `VITE_*` variables into the production JavaScript bundle during `npm run build`, the value must be supplied during the Docker image build rather than only when the container starts.

In Docker Compose, the value is set to:

```text
http://localhost:8080/api
```

This differs from a Kubernetes + Ingress deployment, which uses:

```text
/api
```

The reason for this difference is:
* **Docker Compose**: The frontend running in the browser accesses the backend directly through the locally exposed backend port (`http://localhost:8080/api`).
* **Kubernetes + Ingress**: NGINX Ingress handles path-based routing, routing `/api` requests internally to the backend service.

---

## Prisma Database Migration

The PostgreSQL container starts with an empty database when the volume is created for the first time.

The existing Prisma migrations are included in the backend project:

```text
Backend/prisma/migrations/
```

### Automatic Migration on Container Startup

The backend container automatically applies pending Prisma migrations before starting the Express server.

A startup script is used as the Docker entrypoint:

```text
Backend/docker-entrypoint.sh
```

The script runs:

```sh
#!/bin/sh

set -e

echo "Running Prisma migrations..."
npx prisma migrate deploy

echo "Starting server..."
exec node src/server.js
```

Startup flow:

```text
Backend container starts
        ↓
docker-entrypoint.sh
        ↓
Prisma migrations are deployed
        ↓
If successful, Express server starts
```

`set -e` ensures that the script exits immediately if the Prisma migration command fails. This prevents the backend server from starting against a database where required migrations could not be applied.

`exec` replaces the shell process with the Node.js process, allowing the application to properly receive container signals.

The backend Dockerfile configures the script as the container entrypoint:

```dockerfile
COPY docker-entrypoint.sh ./

RUN chmod +x docker-entrypoint.sh

ENTRYPOINT ["./docker-entrypoint.sh"]
```

The script uses:

```sh
#!/bin/sh
```

because the backend image uses Alpine Linux (`node:22-alpine`), which provides `/bin/sh` by default and does not include Bash (`/bin/bash`) by default.

### Previous Manual Approach

Previously, migrations were manually applied using:

```bash
docker exec -it fitflow-backend npx prisma migrate deploy
```

This is no longer required during normal container startup because pending migrations are automatically applied by the backend entrypoint.

---

## Running the Application

Build and start all services:

```bash
docker compose up --build
```

Run in detached mode:

```bash
docker compose up --build -d
```

Check running containers:

```bash
docker ps
```

Stop the Compose application:

```bash
docker compose down
```

The named PostgreSQL volume is not removed by `docker compose down`, so database data remains available when the services are started again.

To remove the database volume as well:

```bash
docker compose down -v
```

This permanently removes the local PostgreSQL data stored in the Compose volume.

---

## Verification

The Compose setup was tested locally.

All three containers were successfully started:

```text
fitflow-frontend
fitflow-backend
fitflow-postgres
```

The application was verified through:

```text
http://localhost:3000
```

The following communication path was confirmed:

```text
Browser
   ↓
Frontend
   ↓
Backend
   ↓
Prisma
   ↓
PostgreSQL
```

Prisma migrations were successfully applied to the PostgreSQL container, and application functionality including user registration and database operations was tested successfully.

---

## Result

Docker Compose provides a reproducible local environment containing the complete FitFlow stack:

```text
┌──────────────────────────────────────────────┐
│              Docker Compose                  │
│                                              │
│  ┌──────────────┐     ┌──────────────┐       │
│  │   Frontend   │────▶│   Backend    │       │
│  │ Nginx :3000 │     │ Express :8080│       │
│  └──────────────┘     └──────┬───────┘       │
│                              │               │
│                              ▼               │
│                       ┌──────────────┐       │
│                       │  PostgreSQL  │       │
│                       │     :5432    │       │
│                       └──────────────┘       │
│                                              │
│              postgres-data volume             │
└──────────────────────────────────────────────┘
```

The complete stack can now be run locally without requiring the previously deployed Neon PostgreSQL database.
