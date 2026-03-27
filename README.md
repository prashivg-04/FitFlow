# GymSaaS - Role-Based Gym Management Platform

GymSaaS is a full-stack SaaS application for gym operations across three roles: Owner, Trainer, and Member.

It focuses on a complete workout lifecycle, from member onboarding and trainer assignment to day-wise workout execution and completion tracking.

## Overview

GymSaaS replaces manual coordination with role-scoped workflows:

- Owners review join requests and map trainers to members.
- Trainers create reusable workout programs and assign schedules.
- Members consume assigned plans, mark workouts complete, and export mobile-friendly PDFs.

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

## Architecture

```text
React UI (role routes + guards)
   -> Axios client (withCredentials + response interceptor)
   -> Express routes (/api/*)
   -> Controllers
   -> Services (business rules)
   -> Prisma
   -> PostgreSQL
```

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

## Engineering Decisions (Implementation-Based)

- Cookie auth + `withCredentials: true` to keep auth tokens out of JS-readable storage.
- Service-layer business logic to keep controllers thin and testable.
- Snapshot-based assignment schema so program edits do not mutate already-assigned workouts.
- Global backend error middleware with structured app errors.
- Axios response interceptor for centralized frontend API error handling.

## API and Runtime Defaults

- Frontend dev server: `http://localhost:5173`
- Backend API: `http://localhost:8080/api`
- Backend CORS origin (current config): `http://localhost:5173`
- Backend server fallback port (if `PORT` is missing): `8000`

## Repository Structure

```text
GymSaaS/
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
      package.json

   README.md
```

## Setup

### 1. Clone and install

```bash
git clone https://github.com/prashivg-04/GymSaaS.git
cd GymSaaS
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

Start backend:

```bash
npm run dev
```

### 3. Frontend

Open a new terminal:

```bash
cd Frontend
npm install
npm run dev
```

Optional `Frontend/.env` value currently present:

```env
NODE_SERVER_URL=http://localhost:8080/api
```

Note: current Axios client is configured with a hardcoded base URL (`http://localhost:8080/api`) in source.

## Documentation

- API reference: `Backend/API_DOCUMENTATION.md`
- Database schema: `Backend/DB_SCHEMA.md`
- Frontend architecture: `Frontend/FRONTEND_DOCUMENTATION.md`

## Current Limitations

- No automated test suite yet (manual verification in place).
- No pagination/caching for list-heavy endpoints.
- No websocket-based realtime updates.
- Some dashboard sections are intentionally marked as coming soon in UI.

## Future Improvements

- Add integration and unit tests.
- Move frontend API base URL fully to environment configuration.
- Add realtime notifications for assignment/join-request events.
- Add billing/subscription and attendance modules.
- Add analytics and reporting dashboards.

## Author

- Name: Prashiv Goyal
- GitHub: https://github.com/prashivg-04
- Email: prashivgoyal1504@gmail.com
