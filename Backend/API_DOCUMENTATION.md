# GymSaaS Backend API Documentation

## 1. Project Overview

GymSaaS backend is a Node.js + Express REST API with Prisma + PostgreSQL.

- Local base URL: `http://localhost:8080`
- API prefix: `/api`
- Authentication: JWT in HTTP-only cookie `token`
- Roles: `OWNER`, `TRAINER`, `MEMBER`

This document is implementation-verified against current routes, controllers, services, and middleware.

JWT is stored in an HTTP-only cookie (`token`) and is automatically sent with requests.
Frontend must enable `withCredentials: true` for authenticated API calls.

---

## 2. System Flow

1. User signs up with role-specific profile data.
2. Trainer/member sends join request using owner `gymCode`.
3. Owner approves/rejects join requests.
4. Owner assigns trainer to member.
5. Trainer creates workout program and assigns it.
6. Member follows schedule and completes workouts.

### gymStatus Values

- `NONE` -> User is not part of any gym
- `PENDING` -> Join request sent but not yet approved
- `ACTIVE` -> User is part of a gym

---

## 3. Authentication APIs

### POST /api/auth/signup

- Purpose: Register user and create role profile.
- Role: Public
- Authentication Required: No

**Headers**

- `Content-Type: application/json`

**Validation**

- Zod validation middleware is applied.
- Validation error message is flattened into a single string.

**Request Body**

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| name | string | Yes | Min 1 |
| email | string | Yes | Valid email |
| password | string | Yes | Min 6 |
| role | enum | Yes | `OWNER` \| `TRAINER` \| `MEMBER` |
| roleData | object | Yes | Strict by role |

**OWNER roleData**

| Field | Type | Required |
| --- | --- | --- |
| gymName | string | Yes |
| address | string | Yes |
| city | string | Yes |
| phone | string | Yes |
| openingTime | string | Yes |
| closingTime | string | Yes |

**TRAINER roleData**

| Field | Type | Required |
| --- | --- | --- |
| specialization | string | Yes |
| experienceYears | number >= 0 | Yes |
| preferredDays | string[] (min 1) | Yes |
| startTime | string | Yes |
| endTime | string | Yes |
| bio | string | Yes |

**MEMBER roleData**

| Field | Type | Required |
| --- | --- | --- |
| dateOfBirth | string | Yes |
| gender | enum | Yes (`MALE`, `FEMALE`, `OTHER`) |
| heightCm | number > 0 | Yes |
| weightKg | number > 0 | Yes |
| goal | enum | Yes |
| experienceLevel | enum | Yes |

**Example Request**

```json
{
  "name": "Aarav Sharma",
  "email": "aarav.owner@example.com",
  "password": "secret123",
  "role": "OWNER",
  "roleData": {
    "gymName": "Iron Core Fitness",
    "address": "12 Main Street",
    "city": "Delhi",
    "phone": "9876543210",
    "openingTime": "06:00",
    "closingTime": "22:00"
  }
}
```

**Success (201)**

```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "Aarav Sharma",
    "email": "aarav.owner@example.com",
    "role": "OWNER"
  },
  "message": "User signed up successfully"
}
```

For `TRAINER` and `MEMBER`, `data` also includes `gymStatus` and `ownerId`.

**Error Responses**

| Status | Message (actual) |
| --- | --- |
| 400 | Validation messages (for example: `Invalid email`) |
| 400 | `Invalid owner data` / `Invalid trainer data` / `Invalid member data` |
| 400 | `Invalid date of birth` |
| 409 | `Email already exists` |
| 500 | `Internal Server Error` |

**Notes**

- Signup sets cookie `token`.
- Cookie settings: `httpOnly`, `sameSite: lax`, `secure: false`.
- Signup cookie does not set explicit `maxAge`.

---

### POST /api/auth/login

- Purpose: Authenticate and set JWT cookie.
- Role: Public
- Authentication Required: No

**Headers**

- `Content-Type: application/json`

**Request Body**

| Field | Type | Required |
| --- | --- | --- |
| email | string (email) | Yes |
| password | string | Yes |

**Example Request**

```json
{
  "email": "aarav.owner@example.com",
  "password": "secret123"
}
```

**Success (200)**

```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "Aarav Sharma",
    "email": "aarav.owner@example.com",
    "role": "OWNER"
  },
  "message": "Login successful"
}
```

For `TRAINER` and `MEMBER`, `data` also includes `gymStatus`, `ownerId`.

**Error Responses**

| Status | Message |
| --- | --- |
| 400 | Zod validation messages |
| 401 | `Invalid credentials` |
| 500 | `Internal Server Error` |

**Notes**

- Login cookie uses 7-day `maxAge`.

---

### POST /api/auth/logout

- Purpose: Logout user and clear cookie.
- Role: OWNER, TRAINER, MEMBER
- Authentication Required: Yes

**Headers**

- Cookie: `token=<jwt>`

**Success (200)**

```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

**Error Responses**

| Status | Message |
| --- | --- |
| 401 | `Authentication required` |
| 401 | `Invalid or expired token` |

---

### GET /api/auth/me

- Purpose: Return current authenticated identity context.
- Role: OWNER, TRAINER, MEMBER
- Authentication Required: Yes
- Used by frontend to restore user session on page refresh.

**Headers**

- Cookie: `token=<jwt>`

**Success (200)**

```json
{
  "success": true,
  "data": {
    "userId": "uuid",
    "role": "TRAINER",
    "gymStatus": "ACTIVE",
    "ownerId": "uuid"
  }
}
```

For owner, only `userId` and `role` are returned.

**Error Responses**

| Status | Message |
| --- | --- |
| 401 | `Authentication required` |
| 401 | `Invalid or expired token` |

---

## 4. Join Request APIs

### POST /api/join-request

- Purpose: Create gym join request.
- Role: TRAINER, MEMBER
- Authentication Required: Yes

**Headers**

- `Content-Type: application/json`
- Cookie: `token=<jwt>`

**Request Body**

| Field | Type | Required |
| --- | --- | --- |
| gymCode | string | Yes |

**Example Request**

```json
{
  "gymCode": "AB12CD"
}
```

**Success (200)**

```json
{
  "success": true,
  "message": "Join request sent successfully"
}
```

**Error Responses**

| Status | Message |
| --- | --- |
| 400 | `Gym code is required` |
| 400 | `You have already requested to join a gym or are part of a gym` |
| 403 | `Only trainers and members can request to join` |
| 404 | `Profile not found` |
| 404 | `Invalid Gym Code` |
| 409 | `You have already requested to join this gym.` |

**Notes**

- On success, profile `gymStatus` becomes `PENDING`.
- Owner role is not allowed.

---

### GET /api/owner/join-requests

- Purpose: List pending join requests for owner.
- Role: OWNER
- Authentication Required: Yes

**Headers**

- Cookie: `token=<jwt>`

**Success (200)**

```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "ownerId": "uuid",
      "userId": "uuid",
      "role": "TRAINER",
      "status": "PENDING",
      "createdAt": "2026-03-25T10:00:00.000Z",
      "user": {
        "name": "Rohit Kumar",
        "email": "rohit@example.com"
      }
    }
  ]
}
```

**Error Responses**

| Status | Message |
| --- | --- |
| 401 | `Authentication required` / `Invalid or expired token` |
| 403 | `Access denied: Owners only` |
| 403 | `Owner profile not found` |

---

### PATCH /api/owner/join-request/:id

- Purpose: Accept/reject join request.
- Role: OWNER
- Authentication Required: Yes

**Headers**

- `Content-Type: application/json`
- Cookie: `token=<jwt>`

**Path Params**

| Param | Type | Required |
| --- | --- | --- |
| id | string | Yes |

**Request Body**

| Field | Type | Required | Allowed |
| --- | --- | --- | --- |
| action | string | Yes | `ACCEPT`, `REJECT` |

**Example Request**

```json
{
  "action": "ACCEPT"
}
```

**Success (200)**

```json
{
  "success": true,
  "message": "Join request accepted successfully"
}
```

or

```json
{
  "success": true,
  "message": "Join request rejected successfully"
}
```

**Error Responses**

| Status | Message |
| --- | --- |
| 400 | `Invalid action` |
| 403 | `Access denied: Owners only` |
| 403 | `Owner profile not found` |
| 404 | `Join request not found` |

**Notes**

- Accept: sets profile `gymStatus` to `ACTIVE`, links `ownerId`.
- Reject: sets profile `gymStatus` to `NONE`.

---

## 5. Owner APIs

### GET /api/owner/members/unassigned

- Purpose: Get active members without trainer assignment.
- Role: OWNER
- Authentication Required: Yes

**Headers**

- Cookie: `token=<jwt>`

**Success (200)**

```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "userId": "uuid",
      "ownerId": "uuid",
      "gymStatus": "ACTIVE",
      "user": {
        "id": "uuid",
        "name": "Aditya Verma",
        "email": "aditya@example.com"
      }
    }
  ],
  "message": "Unassigned members retrieved successfully"
}
```

**Error Responses**

| Status | Message |
| --- | --- |
| 401 | `Authentication required` / `Invalid or expired token` |
| 403 | `Access denied: Owners only` |
| 404 | `Owner profile not found` |

---

### GET /api/owner/trainers

- Purpose: Get active trainers in owner's gym.
- Role: OWNER
- Authentication Required: Yes

**Headers**

- Cookie: `token=<jwt>`

**Success (200)**

```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "specialization": "Strength",
      "gymStatus": "ACTIVE",
      "user": { "name": "Rahul Singh", "email": "rahul@example.com" },
      "_count": { "trainerMembers": 4 }
    }
  ],
  "message": "Trainers retrieved successfully"
}
```

**Error Responses**

| Status | Message |
| --- | --- |
| 401 | `Authentication required` / `Invalid or expired token` |
| 403 | `Access denied: Owners only` |
| 404 | `Owner profile not found` |

---

### POST /api/owner/assign-trainer

- Purpose: Assign trainer to member.
- Role: OWNER
- Authentication Required: Yes

**Headers**

- `Content-Type: application/json`
- Cookie: `token=<jwt>`

**Request Body**

| Field | Type | Required |
| --- | --- | --- |
| trainerId | string | Yes |
| memberId | string | Yes |

**Example Request**

```json
{
  "trainerId": "uuid-trainer",
  "memberId": "uuid-member"
}
```

**Success (200)**

```json
{
  "success": true,
  "message": "Trainer assigned to members successfully"
}
```

**Error Responses**

| Status | Message |
| --- | --- |
| 401 | `Authentication required` / `Invalid or expired token` |
| 403 | `Access denied: Owners only` |
| 404 | `Owner profile not found` |
| 404 | `Trainer or Member not found` |
| 400 | `Trainer and Member must belong to your gym` |
| 400 | `Trainer or Member not active` |
| 400 | `Member is already assigned to a trainer` |

---

### DELETE /api/owner/unassign-trainer

- Purpose: Remove trainer assignment from member.
- Role: OWNER
- Authentication Required: Yes

**Headers**

- `Content-Type: application/json`
- Cookie: `token=<jwt>`

**Request Body**

| Field | Type | Required |
| --- | --- | --- |
| memberId | string | Yes |

**Example Request**

```json
{
  "memberId": "uuid-member"
}
```

**Success (200)**

```json
{
  "success": true,
  "message": "Trainer unassigned from members successfully"
}
```

**Error Responses**

| Status | Message |
| --- | --- |
| 401 | `Authentication required` / `Invalid or expired token` |
| 403 | `Access denied: Owners only` |
| 404 | `Owner profile not found` |
| 404 | `Member not found` |
| 400 | `Member must belong to your gym` |
| 400 | `Member not active` |
| 400 | `Member is not assigned to any trainer` |

---

## 6. Trainer APIs

### GET /api/trainer/members

- Purpose: Get members assigned to current trainer.
- Role: TRAINER
- Authentication Required: Yes

**Headers**

- Cookie: `token=<jwt>`

**Success (200)**

```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "userId": "uuid",
      "ownerId": "uuid",
      "gymStatus": "ACTIVE",
      "user": {
        "id": "uuid",
        "name": "Sahil Gupta",
        "email": "sahil@example.com"
      }
    }
  ],
  "message": "Assigned members retrieved successfully"
}
```

**Error Responses**

| Status | Message |
| --- | --- |
| 401 | `Authentication required` / `Invalid or expired token` |
| 403 | `Access denied: Trainers only` |
| 404 | `Trainer profile not found` |

---

### POST /api/trainer/programs

- Purpose: Create workout program with days and exercises.
- Role: TRAINER
- Authentication Required: Yes

**Headers**

- `Content-Type: application/json`
- Cookie: `token=<jwt>`

**Request Body**

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| title | string | Yes | Required |
| description | string | No | Optional |
| days | array | Yes | Non-empty |

**Day Item**

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| name | string | Yes | Day label |
| orderIndex | number | Yes | Day order |
| isRestDay | boolean | Yes | Rest flag |
| exercises | array | Yes | Must be array |

**Exercise Item**

| Field | Type | Required |
| --- | --- | --- |
| name | string | Yes |
| sets | number | Yes |
| reps | string | Yes |
| restSeconds | number | Yes |
| notes | string | No |
| orderIndex | number | Yes |

**Example Request**

```json
{
  "title": "Upper Body Strength",
  "days": [
    {
      "name": "Push Day",
      "orderIndex": 1,
      "isRestDay": false,
      "exercises": [
        { "name": "Bench Press", "sets": 4, "reps": "6-8", "restSeconds": 120, "orderIndex": 1 }
      ]
    }
  ]
}
```

**Success (201)**

```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "trainerId": "uuid",
    "title": "Upper Body Strength",
    "days": [{ "name": "Push Day", "orderIndex": 1, "isRestDay": false, "exercises": [{ "name": "Bench Press" }] }]
  },
  "message": "Workout program created successfully"
}
```

**Error Responses**

| Status | Message |
| --- | --- |
| 401 | `Authentication required` / `Invalid or expired token` |
| 403 | `Access denied: Trainers only` |
| 404 | `Trainer profile not found` |
| 400 | `Program must have title and at least one day` |
| 400 | `Invalid workout program structure` |
| 400 | `Rest day cannot have exercises` |
| 400 | `Non-rest day must have exercises` |

---

### GET /api/trainer/programs

- Purpose: List trainer programs.
- Role: TRAINER
- Authentication Required: Yes

**Headers**

- Cookie: `token=<jwt>`

**Success (200)**

```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "title": "Upper Body Strength",
      "days": [{ "name": "Push Day", "orderIndex": 1, "isRestDay": false, "exercises": [{ "name": "Bench Press" }] }]
    }
  ],
  "message": "Workout programs retrieved successfully"
}
```

**Error Responses**

| Status | Message |
| --- | --- |
| 401 | `Authentication required` / `Invalid or expired token` |
| 403 | `Access denied: Trainers only` |
| 404 | `Trainer profile not found` |

---

### POST /api/trainer/assign-program

- Purpose: Assign a program to member from start date.
- Role: TRAINER
- Authentication Required: Yes

**Headers**

- `Content-Type: application/json`
- Cookie: `token=<jwt>`

**Request Body**

| Field | Type | Required | Notes |
| --- | --- | --- | --- |
| memberId | string | Yes | Member ID |
| programId | string | Yes | Program ID |
| startDate | string | Yes | `YYYY-MM-DD` |

**Example Request**

```json
{
  "memberId": "uuid-member",
  "programId": "uuid-program",
  "startDate": "2026-03-28"
}
```

**Success (200)**

```json
{
  "success": true,
  "message": "Program assigned successfully"
}
```

**Error Responses**

| Status | Message |
| --- | --- |
| 401 | `Authentication required` / `Invalid or expired token` |
| 403 | `Access denied: Trainers only` |
| 400 | `Missing required fields: memberId, programId, startDate` |
| 404 | `Trainer profile not found` |
| 400 | `Member is not assigned to this trainer` |
| 404 | `Workout program not found` |
| 400 | `Cannot assign program in the past` |
| 400 | `Assignment overlaps with existing schedule` |

**Notes**

- Assignment creation is transactional.
- Rest days are auto-marked completed.

---

### GET /api/trainer/member/:memberId/calendar

- Purpose: Monthly calendar view for trainer.
- Role: TRAINER
- Authentication Required: Yes

**Headers**

- Cookie: `token=<jwt>`

**Path Params**

| Param | Type | Required |
| --- | --- | --- |
| memberId | string | Yes |

**Query Params**

| Param | Type | Required | Notes |
| --- | --- | --- | --- |
| month | string | Yes | `YYYY-MM` |

**Success (200)**

```json
{
  "success": true,
  "data": [
    {
      "date": "2026-03-01",
      "dayName": null,
      "status": null
    },
    {
      "date": "2026-03-02",
      "dayName": "Push Day",
      "status": "PENDING"
    }
  ],
  "message": "Trainer member calendar fetched successfully"
}
```

**Error Responses**

| Status | Message |
| --- | --- |
| 401 | `Authentication required` / `Invalid or expired token` |
| 403 | `Access denied: Trainers only` |
| 400 | `Month must be in YYYY-MM format` |
| 400 | `Invalid month value` |
| 404 | `Trainer profile not found` |
| 404 | `Member not assigned to this trainer` |

**Notes**

- Full month array is returned.
- Past `PENDING` days are returned as `MISSED`.

---

### GET /api/trainer/member/:memberId/assignment-window

- Purpose: 7-day trainer assignment window.
- Role: TRAINER
- Authentication Required: Yes

**Headers**

- Cookie: `token=<jwt>`

**Path Params**

| Param | Type | Required |
| --- | --- | --- |
| memberId | string | Yes |

**Success (200)**

```json
{
  "success": true,
  "data": [
    {
      "date": "2026-03-26",
      "dayName": "Push Day",
      "status": "PENDING"
    },
    {
      "date": "2026-03-27",
      "dayName": null,
      "status": null
    }
  ],
  "message": "Trainer assignment window retrieved successfully"
}
```

**Error Responses**

| Status | Message |
| --- | --- |
| 401 | `Authentication required` / `Invalid or expired token` |
| 403 | `Access denied: Trainers only` |
| 404 | `Trainer profile not found` |
| 400 | `Member not assigned to this trainer` |

**Notes**

- Exactly 7 days returned (today + next 6).

---

## 7. Member APIs

### GET /api/member/schedule

- Purpose: Member 7-day workout schedule.
- Role: MEMBER
- Authentication Required: Yes

**Headers**

- Cookie: `token=<jwt>`

**Success (200)**

```json
{
  "success": true,
  "data": [
    {
      "date": "2026-03-26",
      "assignmentId": "uuid",
      "dayName": "Push Day",
      "isRestDay": false,
      "status": "PENDING",
      "exercises": [{ "name": "Bench Press", "sets": 4, "reps": "6-8", "restSeconds": 120 }]
    },
    {
      "date": "2026-03-27",
      "assignmentId": null,
      "dayName": null,
      "isRestDay": null,
      "status": null,
      "exercises": []
    }
  ],
  "message": "Member schedule retrieved successfully"
}
```

**Error Responses**

| Status | Message |
| --- | --- |
| 401 | `Authentication required` / `Invalid or expired token` |
| 403 | `Access denied: Members only` |
| 404 | `Member profile not found` |

---

### POST /api/member/complete-workout

- Purpose: Complete today's workout assignment.
- Role: MEMBER
- Authentication Required: Yes

**Headers**

- `Content-Type: application/json`
- Cookie: `token=<jwt>`

**Request Body**

| Field | Type | Required |
| --- | --- | --- |
| assignmentId | string | Yes |

**Example Request**

```json
{
  "assignmentId": "uuid-assignment"
}
```

**Success (200)**

```json
{
  "success": true,
  "message": "Workout assignment marked as completed"
}
```

**Error Responses**

| Status | Message |
| --- | --- |
| 401 | `Authentication required` / `Invalid or expired token` |
| 403 | `Access denied: Members only` |
| 400 | `assignmentId is required` |
| 404 | `Member profile not found` |
| 404 | `Workout assignment not found for this member` |
| 400 | `You can only complete today's workout assignment` |
| 400 | `Rest day does not require completion` |
| 400 | `Workout assignment already completed` |

---

## 8. Additional Implemented APIs

### GET /

- Purpose: Health check
- Role: Public
- Authentication Required: No

**Success (200)**

```json
{
  "status": "Server is running 🚀"
}
```

---

### GET /api/user/gym-info

- Purpose: Role-based gym info summary.
- Role: OWNER, TRAINER, MEMBER
- Authentication Required: Yes

**Headers**

- Cookie: `token=<jwt>`

**Success (200)**

```json
{
  "success": true,
  "data": {
    "gymName": "Iron Core Fitness",
    "gymCode": "AB12CD",
    "name": "Aarav Sharma"
  },
  "message": "Gym info fetched successfully"
}
```

Trainer/member response includes:

- `gymName` (nullable)
- `name`

**Error Responses**

| Status | Message |
| --- | --- |
| 401 | `Authentication required` / `Invalid or expired token` |
| 404 | `Owner not found` / `Trainer not found` / `Member not found` |
| 400 | `Invalid role` |

---

## 9. Common Response Format

### Standard Success (Most Endpoints)

```json
{
  "success": true,
  "data": {},
  "message": "..."
}
```

### Standard Error

```json
{
  "success": false,
  "message": "..."
}
```

### Validation Error

```json
{
  "success": false,
  "message": "Validation error",
  "errors": {
    "field": "Error message"
  }
}
```

`GET /` returns `{ "status": "Server is running 🚀" }` as a health-check response.

---

## 10. Error Handling

- Global middleware returns `{ success: false, message }`.
- HTTP status uses `AppError.statusCode` or defaults to `500`.
- Common auth messages: `Authentication required`, `Invalid or expired token`.
- Common role messages: `Access denied: Owners only`, `Access denied: Trainers only`, `Access denied: Members only`.
- Validation source: Zod for signup/login, service-level validation for other routes.

---

## 11. Notes & Edge Cases

1. Duplicate join requests are blocked by owner-user pair.
2. Invalid `gymCode` returns `404`.
3. Join request allowed only when profile `gymStatus` is `NONE`.
4. Owner cannot use join-request endpoint.
5. Trainer/member assignment must belong to same owner gym.
6. Member can only have one trainer assignment.
7. Program assignment blocks past dates.
8. Program assignment blocks overlapping schedules.
9. Rest day assignments are auto-created as completed.
10. Trainer calendar derives `MISSED` for past pending dates.
11. Member completion is allowed only for today's assignment.
12. Rest days cannot be completed manually.
13. Already completed assignments cannot be completed again.
14. `requireGymActive` middleware exists but is not mounted.

---

## 12. Environment Notes

### Required Variables

| Variable | Purpose |
| --- | --- |
| PORT | Express port |
| DATABASE_URL | PostgreSQL connection string |
| JWT_SECRET | JWT signing secret |

### Runtime Configuration

- CORS origin: `http://localhost:5173`
- CORS credentials: `true`
- Cookie `secure: false` (development)

### Auth Cookie

- Name: `token`
- `httpOnly: true`
- `sameSite: lax`
- `secure: false`
- Login uses 7-day `maxAge`
