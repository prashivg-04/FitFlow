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

## 8. Owner Management APIs

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

## 9. Additional Middleware

### `requireGymActive`
- Ensures that trainers and members have an `ACTIVE` gym status before accessing certain routes.
- OWNER role bypasses this check.
- On failure:
  - **403** for TRAINER: `"Trainer is not associated with an active gym."`
  - **403** for MEMBER: `"Member is not associated with an active gym."`
- **Planned / Not Implemented** on routes yet, but available for future use.
