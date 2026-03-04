# GymSaaS Backend API Documentation

## 1. Project Overview

This backend is a Node.js + Express.js REST API for the GymSaaS platform. It handles authentication, user onboarding, and role-based access control.

**Authentication mechanism**
- JWT-based authentication.
- JWT is stored in an **HTTP-only cookie** named `token`.

**Cookie-based auth behavior**
- Cookie name: `token`
- `httpOnly: true`
- `sameSite: lax`
- `secure: false` (development setting)
- Max age: **7 days**

**Base API URL**
- Local development: `http://localhost:8080`
- All routes are prefixed with `/api`

---

## 2. Authentication APIs

### POST /api/auth/signup

**Purpose**
- Create a new user (OWNER, TRAINER, or MEMBER) and store role-specific data.

**Authentication Required**
- No

**Request Headers**
- `Content-Type: application/json`

**Request Body**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| name | string | Yes | User full name. |
| email | string | Yes | Unique email address. |
| password | string | Yes | Plain text password (hashed server-side). |
| role | string | Yes | One of: `OWNER`, `TRAINER`, `MEMBER`. |
| roleData | object | Yes | Role-specific profile data (see below). |

**Role-specific `roleData`**

**OWNER roleData**
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| gymName | string | Yes | Gym name. |
| address | string | Yes | Gym address. |
| city | string | Yes | Gym city. |
| phone | string | Yes | Contact phone number. |
| openingTime | string | Yes | Opening time (string format). |
| closingTime | string | Yes | Closing time (string format). |

**TRAINER roleData**
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| specialization | string | Yes | Trainer specialization. |
| experienceYears | number | Yes | Years of experience. |
| preferredDays | string | Yes | Preferred working days. |
| startTime | string | Yes | Start time (string format). |
| endTime | string | Yes | End time (string format). |
| bio | string | Yes | Short trainer bio. |

**MEMBER roleData**
| Field | Type | Required | Description |
| --- | --- | --- | --- |
| dateOfBirth | string | Yes | Date of birth (parsable by `new Date()` on server). |
| gender | string | Yes | One of: `MALE`, `FEMALE`, `OTHER`. |
| heightCm | number | Yes | Height in centimeters. |
| weightKg | number | Yes | Weight in kilograms. |
| goal | string | Yes | One of: `WEIGHT_LOSS`, `MUSCLE_GAIN`, `ENDURANCE`, `FLEXIBILITY`, `GENERAL_FITNESS`. |
| experienceLevel | string | Yes | One of: `BEGINNER`, `INTERMEDIATE`, `ADVANCED`. |

**Success Response (201)**
```json
{
  "success": true,
  "data": {
    "userId": "uuid",
    "role": "OWNER"
  },
  "message": "User signed up successfully"
}
```

**Error Responses**
- **409 Conflict** (email already exists)
```json
{
  "success": false,
  "message": "Email already exists"
}
```

- **500 Internal Server Error**
```json
{
  "success": false,
  "message": "Internal Server Error"
}
```

**Notes / Edge Cases**
- On success, a cookie named `token` is set with a 7-day expiry (same as login).
- Ensure your frontend sends requests with `credentials: "include"` so cookies are stored.
- If `role` is not one of `OWNER`, `TRAINER`, `MEMBER`, signup fails internally (currently returns **500** due to an unhandled `INVALID_ROLE`).
- Validation is **Planned / Not Implemented**. Missing or invalid fields may cause server errors.

---

### POST /api/auth/login

**Purpose**
- Authenticate a user and set a JWT cookie.

**Authentication Required**
- No

**Request Headers**
- `Content-Type: application/json`

**Request Body**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| email | string | Yes | User email address. |
| password | string | Yes | User password. |

**Success Response (200)**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "name": "Full Name",
    "email": "user@example.com",
    "role": "OWNER"
  },
  "message": "Login successfull"
}
```

**Error Responses**
- **401 Unauthorized** (invalid credentials)
```json
{
  "success": false,
  "message": "Invalid credentials"
}
```

- **500 Internal Server Error**
```json
{
  "success": false,
  "message": "Internal Server Error"
}
```

**Notes / Edge Cases**
- On success, a cookie named `token` is set with a 7-day expiry.
- Ensure your frontend sends requests with `credentials: "include"` so cookies are stored.

---

### POST /api/auth/logout

**Purpose**
- Clear the authentication cookie.

**Authentication Required**
- Yes (JWT cookie)

**Request Headers**
- `Content-Type: application/json`
- Cookie: `token=<jwt>`

**Request Body**
- None

**Success Response (200)**
```json
{
  "success": true,
  "message": "Logged out successfully"
}
```

**Error Responses**
- **401 Unauthorized** (missing or invalid token)
```json
{
  "success": false,
  "message": "Authentication required"
}
```

```json
{
  "success": false,
  "message": "Invalid or expired token"
}
```

**Notes / Edge Cases**
- Cookie is cleared with the same options: `httpOnly`, `sameSite: lax`, `secure: false`.

---

### GET /api/auth/me

**Purpose**
- Retrieve the currently authenticated user's basic information.

**Authentication Required**
- Yes (JWT cookie)

**Request Headers**
- Cookie: `token=<jwt>`

**Request Body**
- None

**Success Response (200)**
```json
{
  "success": true,
  "data": {
    "userId": "uuid",
    "role": "OWNER"
  }
}
```

**Error Responses**
- **401 Unauthorized** (missing or invalid token)
```json
{
  "success": false,
  "message": "Authentication required"
}
```

```json
{
  "success": false,
  "message": "Invalid or expired token"
}
```

**Notes / Edge Cases**
- Returns the user data stored in JWT (`userId` and `role`).
- Does not fetch full user profile from database; only returns JWT payload.

---

## 3. Authorization & Middleware Overview

### `requireAuth`
- Reads JWT from `req.cookies.token`.
- Verifies the token using `JWT_SECRET`.
- On success, adds `req.user = { userId, role }`.
- On failure:
  - **401** if no token: `"Authentication required"`
  - **401** if token invalid/expired: `"Invalid or expired token"`

### Role-based middleware
- **OWNER**: `requireOwner` — returns **403** if user is not an OWNER.
- **TRAINER**: `requireTrainer` — returns **403** if user is not a TRAINER.
- **MEMBER**: `requireMember` — returns **403** if user is not a MEMBER.

**Current usage**
- Role middleware exists but is **Planned / Not Implemented** on any routes yet.

### Cookie validation
- JWT is validated via `jwt.verify(token, JWT_SECRET)`.

### Common authorization errors
- **401 Unauthorized**: Not authenticated or invalid/expired token.
- **403 Forbidden**: Authenticated but insufficient role.

---

## 4. User Roles & Access Rules

**OWNER**
- Currently no protected OWNER-only routes are implemented.
- Role middleware exists and can be attached to future routes.

**TRAINER**
- Currently no protected TRAINER-only routes are implemented.
- Role middleware exists and can be attached to future routes.

**MEMBER**
- Currently no protected MEMBER-only routes are implemented.
- Role middleware exists and can be attached to future routes.

**Public vs Protected Routes**

| Route | Access | Notes |
| --- | --- | --- |
| `GET /` | Public | Health-style response. |
| `POST /api/auth/signup` | Public | Creates a new user. |
| `POST /api/auth/login` | Public | Logs in and sets cookie. |
| `POST /api/auth/logout` | Protected | Requires valid JWT cookie. |
| `GET /api/auth/me` | Protected | Returns current user info from JWT. |
| `POST /api/join-request` | Protected (TRAINER/MEMBER) | Send join request to gym. |
| `GET /api/owner/join-requests` | Protected (OWNER) | List pending join requests. |
| `PATCH /api/owner/join-request/:id` | Protected (OWNER) | Accept/reject join request. |

---

## 5. Common Error Response Format

All error responses follow a consistent shape:

```json
{
  "success": false,
  "message": "Human-readable error message"
}
```

**Validation errors**
- **Planned / Not Implemented** (no active request validation).

**Authentication errors**
- `401 Authentication required`
- `401 Invalid or expired token`

**Authorization errors**
- `403 Owner access required`
- `403 Trainer access required`
- `403 Member access required`

**Server errors**
- `500 Internal Server Error`

---

## 6. Environment & Setup Notes

### Required environment variables
| Variable | Purpose | Example |
| --- | --- | --- |
| PORT | Express server port | `8080` |
| JWT_SECRET | JWT signing key | `my-jwt-secret` |
| DATABASE_URL | PostgreSQL connection string | `postgresql://user@localhost:5432/gymflow` |

> Note: `JWT_EXPIRES_IN` exists in `.env` but is **not used** by the current code.

### Cookie behavior
- `httpOnly: true`
- `sameSite: lax`
- `secure: false`
- Max age: **7 days**

### CORS expectations
- CORS is configured to allow:
  - `origin: http://localhost:5173`
  - `credentials: true`
- Frontend must send requests with credentials to receive/set cookies.

### Local development notes
- Ensure PostgreSQL is running and `DATABASE_URL` is valid.
- Start backend server on `PORT` (default 8080).
- The frontend should run at `http://localhost:5173` for cookie-based auth to work.

---

## 7. Join Request APIs

### POST /api/join-request

**Purpose**
- Create a join request for a trainer or member to join a gym using a gym code.

**Authentication Required**
- Yes (JWT cookie)

**Required Role**
- TRAINER or MEMBER

**Request Headers**
- `Content-Type: application/json`
- Cookie: `token=<jwt>`

**Request Body**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| gymCode | string | Yes | Unique gym code from the owner. |

**Example Request Body**
```json
{
  "gymCode": "ABC12345"
}
```

**Success Response (200)**
```json
{
  "success": true,
  "message": "Join request sent successfully"
}
```

**Error Responses**
- **400 Bad Request** (missing gym code)
```json
{
  "success": false,
  "message": "Gym code is required"
}
```

- **400 Bad Request** (already requested or joined)
```json
{
  "success": false,
  "message": "You have already requested to join a gym or are part of a gym"
}
```

- **403 Forbidden** (role not allowed)
```json
{
  "success": false,
  "message": "Only trainers and members can request to join"
}
```

- **404 Not Found** (invalid gym code)
```json
{
  "success": false,
  "message": "Invalid Gym Code"
}
```

- **404 Not Found** (profile not found)
```json
{
  "success": false,
  "message": "Profile not found"
}
```

- **500 Internal Server Error**
```json
{
  "success": false,
  "message": "Internal Server Error"
}
```

**Notes / Edge Cases**
- User's `gymStatus` is updated to `PENDING` after creating a join request.
- Only users with `gymStatus: NONE` can send join requests.
- OWNER role cannot create join requests.

---

## 8. Trainer Management APIs

### GET /api/trainer/members

**Purpose**
- Retrieve the list of members assigned to the current trainer.

**Authentication Required**
- Yes (JWT cookie)

**Required Role**
- TRAINER

**Request Headers**
- Cookie: `token=<jwt>`

**Request Body**
- None

**Success Response (200)**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "userId": "uuid",
      "ownerId": "uuid",
      "dateOfBirth": "1995-05-15T00:00:00.000Z",
      "gender": "MALE",
      "heightCm": 180,
      "weightKg": 75,
      "goal": "MUSCLE_GAIN",
      "experienceLevel": "INTERMEDIATE",
      "gymStatus": "ACTIVE",
      "createdAt": "2026-02-12T10:30:00.000Z",
      "updatedAt": "2026-02-12T10:30:00.000Z",
      "user": {
        "id": "uuid",
        "name": "John Doe",
        "email": "john@example.com"
      }
    }
  ],
  "message": "Assigned members retrieved successfully"
}
```

**Error Responses**
- **401 Unauthorized** (missing or invalid token)
```json
{
  "success": false,
  "message": "Authentication required"
}
```

- **403 Forbidden** (not a trainer)
```json
{
  "success": false,
  "message": "Trainer access required"
}
```

- **500 Internal Server Error**
```json
{
  "success": false,
  "message": "Failed to retrieve assigned members"
}
```

**Notes / Edge Cases**
- Returns all members currently assigned to this trainer.
- Includes user details (name, email) with each member.

---

### POST /api/trainer/programs

**Purpose**
- Create a new workout program for the trainer.

**Authentication Required**
- Yes (JWT cookie)

**Required Role**
- TRAINER

**Request Headers**
- `Content-Type: application/json`
- Cookie: `token=<jwt>`

**Request Body**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| title | string | Yes | Workout program title. |
| description | string | No | Program description. |
| days | array | Yes | Array of workout days (see below). |

**Days array structure**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| name | string | Yes | Day name (e.g., "Monday", "Rest Day"). |
| orderIndex | number | Yes | Order of the day in the program. |
| isRestDay | boolean | No | Whether this is a rest day (default: false). |
| exercises | array | Conditional | Array of exercises (required if not a rest day). |

**Exercises array structure**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| name | string | Yes | Exercise name. |
| sets | number | Yes | Number of sets. |
| reps | string | Yes | Number of reps (e.g., "8-12", "10"). |
| restSeconds | number | Yes | Rest time in seconds between sets. |
| notes | string | No | Additional exercise notes. |
| orderIndex | number | Yes | Order of the exercise in the day. |

**Example Request Body**
```json
{
  "title": "Upper Body Strength",
  "description": "4-week upper body program",
  "days": [
    {
      "name": "Chest & Triceps",
      "orderIndex": 1,
      "isRestDay": false,
      "exercises": [
        {
          "name": "Bench Press",
          "sets": 4,
          "reps": "6-8",
          "restSeconds": 120,
          "orderIndex": 1
        },
        {
          "name": "Barbell Rows",
          "sets": 4,
          "reps": "8-10",
          "restSeconds": 90,
          "orderIndex": 2
        }
      ]
    },
    {
      "name": "Rest Day",
      "orderIndex": 2,
      "isRestDay": true
    }
  ]
}
```

**Success Response (201)**
```json
{
  "success": true,
  "data": {
    "id": "uuid",
    "trainerId": "uuid",
    "title": "Upper Body Strength",
    "description": "4-week upper body program",
    "createdAt": "2026-03-04T12:00:00.000Z",
    "updatedAt": "2026-03-04T12:00:00.000Z"
  },
  "message": "Workout program created successfully"
}
```

**Error Responses**
- **400 Bad Request** (invalid data)
```json
{
  "success": false,
  "message": "Failed to create workout program"
}
```

- **401 Unauthorized** (missing or invalid token)
```json
{
  "success": false,
  "message": "Authentication required"
}
```

- **403 Forbidden** (not a trainer)
```json
{
  "success": false,
  "message": "Trainer access required"
}
```

- **500 Internal Server Error**
```json
{
  "success": false,
  "message": "Internal Server Error"
}
```

**Notes / Edge Cases**
- Program is created with related days and exercises in a nested structure.
- Days must have unique `orderIndex` values within the program.
- Exercises must have unique `orderIndex` values within each day.

---

### GET /api/trainer/programs

**Purpose**
- Retrieve all workout programs created by the current trainer.

**Authentication Required**
- Yes (JWT cookie)

**Required Role**
- TRAINER

**Request Headers**
- Cookie: `token=<jwt>`

**Request Body**
- None

**Success Response (200)**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "trainerId": "uuid",
      "title": "Upper Body Strength",
      "description": "4-week upper body program",
      "createdAt": "2026-03-04T12:00:00.000Z",
      "updatedAt": "2026-03-04T12:00:00.000Z"
    }
  ],
  "message": "Workout programs retrieved successfully"
}
```

**Error Responses**
- **401 Unauthorized** (missing or invalid token)
```json
{
  "success": false,
  "message": "Authentication required"
}
```

- **403 Forbidden** (not a trainer)
```json
{
  "success": false,
  "message": "Trainer access required"
}
```

- **500 Internal Server Error**
```json
{
  "success": false,
  "message": "Failed to retrieve workout programs"
}
```

**Notes / Edge Cases**
- Returns all programs created by the trainer.
- Does not include detailed day/exercise information (use program details endpoint if needed).

---

### POST /api/trainer/assign-program

**Purpose**
- Assign a workout program to a member, creating daily workout assignments.

**Authentication Required**
- Yes (JWT cookie)

**Required Role**
- TRAINER

**Request Headers**
- `Content-Type: application/json`
- Cookie: `token=<jwt>`

**Request Body**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| memberId | string | Yes | UUID of the member to assign the program to. |
| programId | string | Yes | UUID of the workout program to assign. |
| startDate | string | Yes | Start date in ISO format (YYYY-MM-DD). |

**Example Request Body**
```json
{
  "memberId": "uuid-of-member",
  "programId": "uuid-of-program",
  "startDate": "2026-03-05"
}
```

**Success Response (200)**
```json
{
  "success": true,
  "message": "Program assigned to member successfully"
}
```

**Error Responses**
- **400 Bad Request** (missing required fields)
```json
{
  "success": false,
  "message": "Missing required fields: memberId, programId, startDate"
}
```

- **401 Unauthorized** (missing or invalid token)
```json
{
  "success": false,
  "message": "Authentication required"
}
```

- **403 Forbidden** (not a trainer)
```json
{
  "success": false,
  "message": "Trainer access required"
}
```

- **500 Internal Server Error**
```json
{
  "success": false,
  "message": "Failed to assign program to member"
}
```

**Notes / Edge Cases**
- Creates individual `WorkoutAssignment` records for each day of the program.
- Assignments are created for the member starting from the provided date.
- Trainer must have the member assigned before assigning a program.

---

### GET /api/trainer/member/:memberId/calendar

**Purpose**
- Retrieve a member's workout calendar for a specific month (trainer view).

**Authentication Required**
- Yes (JWT cookie)

**Required Role**
- TRAINER

**Request Headers**
- Cookie: `token=<jwt>`

**URL Parameters**

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| memberId | string | Yes | UUID of the member. |

**Query Parameters**

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| month | string | Yes | Month in YYYY-MM format (e.g., "2026-03"). |

**Example Request**
```
GET /api/trainer/member/uuid-of-member/calendar?month=2026-03
```

**Success Response (200)**
```json
{
  "success": true,
  "data": [
    {
      "date": "2026-03-05",
      "dayName": "Monday",
      "isRestDay": false,
      "status": "PENDING",
      "exercises": [
        {
          "name": "Bench Press",
          "sets": 4,
          "reps": "6-8",
          "restSeconds": 120
        }
      ]
    },
    {
      "date": "2026-03-06",
      "dayName": "Rest Day",
      "isRestDay": true,
      "status": "PENDING"
    }
  ],
  "message": "Trainer member calendar fetched successfully"
}
```

**Error Responses**
- **400 Bad Request** (missing month parameter)
```json
{
  "success": false,
  "message": "Month query parameter is required in YYYY-MM format"
}
```

- **401 Unauthorized** (missing or invalid token)
```json
{
  "success": false,
  "message": "Authentication required"
}
```

- **403 Forbidden** (not a trainer)
```json
{
  "success": false,
  "message": "Trainer access required"
}
```

- **500 Internal Server Error**
```json
{
  "success": false,
  "message": "An error occurred while fetching trainer member calendar"
}
```

**Notes / Edge Cases**
- Returns all workout assignments for the member in the specified month.
- Includes exercise details for non-rest days.
- Status can be `PENDING` or `COMPLETED`.

---

### GET /api/trainer/member/:memberId/assignment-window

**Purpose**
- Retrieve the member's current assignment window (active and upcoming assignments).

**Authentication Required**
- Yes (JWT cookie)

**Required Role**
- TRAINER

**Request Headers**
- Cookie: `token=<jwt>`

**URL Parameters**

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| memberId | string | Yes | UUID of the member. |

**Request Body**
- None

**Success Response (200)**
```json
{
  "success": true,
  "data": {
    "currentAssignment": {
      "id": "uuid",
      "memberId": "uuid",
      "programId": "uuid",
      "assignedDate": "2026-03-05T00:00:00.000Z",
      "dayName": "Monday",
      "isRestDay": false,
      "status": "PENDING",
      "exercises": [
        {
          "id": "uuid",
          "name": "Bench Press",
          "sets": 4,
          "reps": "6-8",
          "restSeconds": 120,
          "orderIndex": 1
        }
      ]
    },
    "upcomingAssignments": [
      {
        "id": "uuid",
        "assignedDate": "2026-03-06T00:00:00.000Z",
        "dayName": "Rest Day",
        "isRestDay": true
      }
    ]
  },
  "message": "Trainer assignment window retrieved successfully"
}
```

**Error Responses**
- **401 Unauthorized** (missing or invalid token)
```json
{
  "success": false,
  "message": "Authentication required"
}
```

- **403 Forbidden** (not a trainer)
```json
{
  "success": false,
  "message": "Trainer access required"
}
```

- **500 Internal Server Error**
```json
{
  "success": false,
  "message": "Failed to retrieve trainer assignment window"
}
```

**Notes / Edge Cases**
- Returns the current pending assignment and upcoming assignments.
- Useful for trainers to track member progress and upcoming workouts.

---

## 9. Member Workout APIs

### GET /api/member/schedule

**Purpose**
- Retrieve the member's complete workout schedule (all assigned workouts).

**Authentication Required**
- Yes (JWT cookie)

**Required Role**
- MEMBER

**Request Headers**
- Cookie: `token=<jwt>`

**Request Body**
- None

**Success Response (200)**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "memberId": "uuid",
      "programId": "uuid",
      "assignedDate": "2026-03-05T00:00:00.000Z",
      "dayName": "Monday",
      "isRestDay": false,
      "status": "PENDING",
      "completedDate": null,
      "exercises": [
        {
          "id": "uuid",
          "name": "Bench Press",
          "sets": 4,
          "reps": "6-8",
          "restSeconds": 120,
          "notes": "Control the descent",
          "orderIndex": 1
        }
      ]
    }
  ],
  "message": "Member schedule retrieved successfully"
}
```

**Error Responses**
- **401 Unauthorized** (missing or invalid token)
```json
{
  "success": false,
  "message": "Authentication required"
}
```

- **403 Forbidden** (not a member)
```json
{
  "success": false,
  "message": "Member access required"
}
```

- **500 Internal Server Error**
```json
{
  "success": false,
  "message": "Failed to retrieve member schedule"
}
```

**Notes / Edge Cases**
- Returns all assigned workouts (past, current, and future).
- Includes detailed exercise information for each assignment.
- Status is either `PENDING` or `COMPLETED`.

---

### POST /api/member/complete-workout

**Purpose**
- Mark a workout assignment as completed.

**Authentication Required**
- Yes (JWT cookie)

**Required Role**
- MEMBER

**Request Headers**
- `Content-Type: application/json`
- Cookie: `token=<jwt>`

**Request Body**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| assignmentId | string | Yes | UUID of the workout assignment to complete. |

**Example Request Body**
```json
{
  "assignmentId": "uuid-of-assignment"
}
```

**Success Response (200)**
```json
{
  "success": true,
  "message": "Workout completed successfully"
}
```

**Error Responses**
- **400 Bad Request** (missing assignmentId)
```json
{
  "success": false,
  "message": "assignmentId is required"
}
```

- **401 Unauthorized** (missing or invalid token)
```json
{
  "success": false,
  "message": "Authentication required"
}
```

- **403 Forbidden** (not a member)
```json
{
  "success": false,
  "message": "Member access required"
}
```

- **500 Internal Server Error**
```json
{
  "success": false,
  "message": "Failed to complete workout"
}
```

**Notes / Edge Cases**
- Sets the assignment status to `COMPLETED` and records the completion date.
- Member can only complete their own assignments.

---

## 10. Owner Management APIs

### GET /api/owner/join-requests

**Purpose**
- Retrieve all pending join requests for the owner's gym.

**Authentication Required**
- Yes (JWT cookie)

**Required Role**
- OWNER

**Request Headers**
- Cookie: `token=<jwt>`

**Request Body**
- None

**Success Response (200)**
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
      "createdAt": "2026-02-12T10:30:00.000Z",
      "user": {
        "name": "John Doe",
        "email": "john@example.com"
      }
    }
  ]
}
```

**Error Responses**
- **401 Unauthorized** (missing or invalid token)
```json
{
  "success": false,
  "message": "Authentication required"
}
```

- **403 Forbidden** (not an owner)
```json
{
  "success": false,
  "message": "Owner access required"
}
```

- **403 Forbidden** (owner profile not found)
```json
{
  "success": false,
  "message": "Owner profile not found"
}
```

- **500 Internal Server Error**
```json
{
  "success": false,
  "message": "Internal server error"
}
```

**Notes / Edge Cases**
- Only returns join requests with `status: PENDING`.
- Includes basic user details (name and email) with each request.

---

### PATCH /api/owner/join-request/:id

**Purpose**
- Accept or reject a pending join request.

**Authentication Required**
- Yes (JWT cookie)

**Required Role**
- OWNER

**Request Headers**
- `Content-Type: application/json`
- Cookie: `token=<jwt>`

**URL Parameters**

| Parameter | Type | Required | Description |
| --- | --- | --- | --- |
| id | string | Yes | Join request ID (UUID). |

**Request Body**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| action | string | Yes | One of: `ACCEPT`, `REJECT`. |

**Example Request Body**
```json
{
  "action": "ACCEPT"
}
```

**Success Response (200)**
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
- **400 Bad Request** (invalid action)
```json
{
  "success": false,
  "message": "Invalid action"
}
```

- **401 Unauthorized** (missing or invalid token)
```json
{
  "success": false,
  "message": "Authentication required"
}
```

- **403 Forbidden** (not an owner)
```json
{
  "success": false,
  "message": "Owner access required"
}
```

- **403 Forbidden** (owner profile not found)
```json
{
  "success": false,
  "message": "Owner profile not found"
}
```

- **404 Not Found** (join request not found)
```json
{
  "success": false,
  "message": "Join request not found"
}
```

- **500 Internal Server Error**
```json
{
  "success": false,
  "message": "Internal server error"
}
```

**Notes / Edge Cases**
- `ACCEPT`: Sets user's `gymStatus` to `ACTIVE` and links them to the owner's gym.
- `REJECT`: Sets user's `gymStatus` to `NONE` (allows them to request again).
- Join request status is updated to `ACCEPTED` or `REJECTED` accordingly.
- Owner can only manage join requests belonging to their gym.

---

### GET /api/owner/members/unassigned

**Purpose**
- Retrieve all active members in the gym who are not assigned to any trainer.

**Authentication Required**
- Yes (JWT cookie)

**Required Role**
- OWNER

**Request Headers**
- Cookie: `token=<jwt>`

**Request Body**
- None

**Success Response (200)**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "userId": "uuid",
      "ownerId": "uuid",
      "dateOfBirth": "1995-05-15T00:00:00.000Z",
      "gender": "MALE",
      "heightCm": 180,
      "weightKg": 75,
      "goal": "MUSCLE_GAIN",
      "experienceLevel": "INTERMEDIATE",
      "gymStatus": "ACTIVE",
      "createdAt": "2026-02-12T10:30:00.000Z",
      "updatedAt": "2026-02-12T10:30:00.000Z",
      "user": {
        "id": "uuid",
        "name": "Jane Smith",
        "email": "jane@example.com"
      }
    }
  ],
  "message": "Unassigned members retrieved successfully"
}
```

**Error Responses**
- **401 Unauthorized** (missing or invalid token)
```json
{
  "success": false,
  "message": "Authentication required"
}
```

- **403 Forbidden** (not an owner)
```json
{
  "success": false,
  "message": "Owner access required"
}
```

- **403 Forbidden** (owner profile not found)
```json
{
  "success": false,
  "message": "Owner profile not found"
}
```

- **500 Internal Server Error**
```json
{
  "success": false,
  "message": "Failed to retrieve unassigned members"
}
```

**Notes / Edge Cases**
- Returns only members with `gymStatus: ACTIVE` who have no trainer assigned.
- Includes user details (name, email) with each member.

---

### GET /api/owner/trainers

**Purpose**
- Retrieve all active trainers in the gym.

**Authentication Required**
- Yes (JWT cookie)

**Required Role**
- OWNER

**Request Headers**
- Cookie: `token=<jwt>`

**Request Body**
- None

**Success Response (200)**
```json
{
  "success": true,
  "data": [
    {
      "id": "uuid",
      "userId": "uuid",
      "ownerId": "uuid",
      "specialization": "Strength Training",
      "experienceYears": 5,
      "preferredDays": ["Monday", "Wednesday", "Friday"],
      "startTime": "09:00",
      "endTime": "17:00",
      "bio": "Certified Personal Trainer",
      "gymStatus": "ACTIVE",
      "createdAt": "2026-02-12T10:30:00.000Z",
      "updatedAt": "2026-02-12T10:30:00.000Z",
      "user": {
        "id": "uuid",
        "name": "Mike Johnson",
        "email": "mike@example.com"
      },
      "_count": {
        "trainerMembers": 5
      }
    }
  ],
  "message": "Trainers retrieved successfully"
}
```

**Error Responses**
- **401 Unauthorized** (missing or invalid token)
```json
{
  "success": false,
  "message": "Authentication required"
}
```

- **403 Forbidden** (not an owner)
```json
{
  "success": false,
  "message": "Owner access required"
}
```

- **403 Forbidden** (owner profile not found)
```json
{
  "success": false,
  "message": "Owner profile not found"
}
```

- **500 Internal Server Error**
```json
{
  "success": false,
  "message": "Failed to retrieve trainers"
}
```

**Notes / Edge Cases**
- Returns only trainers with `gymStatus: ACTIVE`.
- Includes count of assigned members (`_count.trainerMembers`).
- Includes user details (name, email) with each trainer.

---

### POST /api/owner/assign-trainer

**Purpose**
- Assign a trainer to a member.

**Authentication Required**
- Yes (JWT cookie)

**Required Role**
- OWNER

**Request Headers**
- `Content-Type: application/json`
- Cookie: `token=<jwt>`

**Request Body**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| trainerId | string | Yes | UUID of the trainer. |
| memberId | string | Yes | UUID of the member. |

**Example Request Body**
```json
{
  "trainerId": "uuid-of-trainer",
  "memberId": "uuid-of-member"
}
```

**Success Response (200)**
```json
{
  "success": true,
  "message": "Trainer assigned to members successfully"
}
```

**Error Responses**
- **400 Bad Request** (missing required fields)
```json
{
  "success": false,
  "message": "Missing required fields"
}
```

- **401 Unauthorized** (missing or invalid token)
```json
{
  "success": false,
  "message": "Authentication required"
}
```

- **403 Forbidden** (not an owner)
```json
{
  "success": false,
  "message": "Owner access required"
}
```

- **403 Forbidden** (owner profile not found)
```json
{
  "success": false,
  "message": "Owner profile not found"
}
```

- **500 Internal Server Error**
```json
{
  "success": false,
  "message": "Failed to assign trainer to members"
}
```

**Notes / Edge Cases**
- Creates a relationship between trainer and member.
- Both trainer and member must belong to the same gym.
- Constraint: Each member can only have one trainer assigned.

---

### DELETE /api/owner/unassign-trainer

**Purpose**
- Remove the trainer assignment from a member.

**Authentication Required**
- Yes (JWT cookie)

**Required Role**
- OWNER

**Request Headers**
- `Content-Type: application/json`
- Cookie: `token=<jwt>`

**Request Body**

| Field | Type | Required | Description |
| --- | --- | --- | --- |
| memberId | string | Yes | UUID of the member. |

**Example Request Body**
```json
{
  "memberId": "uuid-of-member"
}
```

**Success Response (200)**
```json
{
  "success": true,
  "message": "Trainer unassigned from members successfully"
}
```

**Error Responses**
- **400 Bad Request** (missing memberId)
```json
{
  "success": false,
  "message": "Missing required fields"
}
```

- **401 Unauthorized** (missing or invalid token)
```json
{
  "success": false,
  "message": "Authentication required"
}
```

- **403 Forbidden** (not an owner)
```json
{
  "success": false,
  "message": "Owner access required"
}
```

- **403 Forbidden** (owner profile not found)
```json
{
  "success": false,
  "message": "Owner profile not found"
}
```

- **500 Internal Server Error**
```json
{
  "success": false,
  "message": "Failed to unassign trainer from members"
}
```

**Notes / Edge Cases**
- Removes the trainer-member relationship.
- Member remains in the gym but has no assigned trainer.
- Can be used to reassign a member to a different trainer.

---

## 11. Additional Middleware

### `requireGymActive`
- Ensures that trainers and members have an `ACTIVE` gym status before accessing certain routes.
- OWNER role bypasses this check.
- On failure:
  - **403** for TRAINER: `"Trainer is not associated with an active gym."`
  - **403** for MEMBER: `"Member is not associated with an active gym."`
- **Planned / Not Implemented** on routes yet, but available for future use.

---

## 12. API Summary by Role

### Public Routes (No authentication required)
| Endpoint | Method | Purpose |
| --- | --- | --- |
| `/api/auth/signup` | POST | User registration |
| `/api/auth/login` | POST | User login |

### Trainer Routes (Authentication + TRAINER role required)
| Endpoint | Method | Purpose |
| --- | --- | --- |
| `/api/trainer/members` | GET | List assigned members |
| `/api/trainer/programs` | GET | List created programs |
| `/api/trainer/programs` | POST | Create new program |
| `/api/trainer/assign-program` | POST | Assign program to member |
| `/api/trainer/member/:memberId/calendar` | GET | View member calendar |
| `/api/trainer/member/:memberId/assignment-window` | GET | View member assignment window |

### Member Routes (Authentication + MEMBER role required)
| Endpoint | Method | Purpose |
| --- | --- | --- |
| `/api/member/schedule` | GET | View workout schedule |
| `/api/member/complete-workout` | POST | Mark workout as completed |

### Owner Routes (Authentication + OWNER role required)
| Endpoint | Method | Purpose |
| --- | --- | --- |
| `/api/owner/join-requests` | GET | View pending join requests |
| `/api/owner/join-request/:id` | PATCH | Accept/reject join request |
| `/api/owner/members/unassigned` | GET | View unassigned members |
| `/api/owner/trainers` | GET | View trainers in gym |
| `/api/owner/assign-trainer` | POST | Assign trainer to member |
| `/api/owner/unassign-trainer` | DELETE | Remove trainer from member |

### Trainer/Member Routes (Authentication required, flexible role)
| Endpoint | Method | Purpose |
| --- | --- | --- |
| `/api/join-request` | POST | Request to join a gym |
| `/api/auth/logout` | POST | User logout |
| `/api/auth/me` | GET | Get current user info |
