# FitFlow Frontend Documentation

## 1. Project Overview

FitFlow frontend is a React SPA for three roles: Owner, Trainer, and Member. It handles authentication, role-based routing, gym-join flow, and role-specific dashboards/features.

### Tech Stack

- React 19
- React Router DOM 7
- Redux Toolkit + React Redux
- Axios
- Sonner (toast notifications)
- Zod (client-side validation)
- Tailwind CSS 4
- Remix Icons
- jsPDF + jspdf-autotable (PDF utility)
- Vite

### Backend Connection and Auth Transport

- API client base URL: `http://localhost:8080/api`
- `withCredentials: true` is enabled globally in Axios.
- Backend auth uses cookie-based session (`token` cookie), so cookies are automatically sent with requests.

---

## 2. Folder Structure

This section explains intent, not only paths.

## src/api/

- Contains HTTP client setup.
- `axios.js` centralizes:
  - base URL
  - credentials behavior
  - response interceptor
  - global unauthorized handler bridge

## src/store/

- Redux Toolkit store and slices.
- `store.js`: registers reducers.
- `authSlice.js`: auth/session state and reducers.

## src/pages/

- Route-level screens.
- Includes:
  - Public screens (`Welcome`, `Login`, signup flow)
  - Route guards (`PrivateRoute`, `PublicRoute`)
  - Role areas (`owner/`, `trainer/`, `member/`)
  - Error page (`error/NotFound.jsx`)

## src/pages/*Layout.jsx (layout pattern)

There is no separate `layouts/` folder. Layout responsibilities are implemented as route layout pages:

- `pages/owner/OwnerLayout.jsx`
- `pages/trainer/TrainerLayout.jsx`
- `pages/member/MemberLayout.jsx`

These layouts fetch gym info, render role sidebar/header, and host nested routes via `<Outlet />`.

## src/components/

- Shared UI components and role-specific reusable pieces.
- Subfolders:
  - `components/owner/`
  - `components/trainer/`
  - `components/member/`
- Includes special wrappers and boundaries:
  - `ErrorBoundary.jsx`
  - `ComingSoonWrapper.jsx`
  - `LogoutSidebar.jsx`

## src/validations/

- Zod schemas used by forms (login/signup flows).
- Maps schema errors to inline field errors.

## src/utils/

- Utility functions.
- Includes `generateWorkoutPDF.js` for workout export.

## src/assets/ and src/media/

- Static visual assets and images.

## Routing location

There is no separate `routes/` directory. Route definitions live in:

- `src/App.jsx`

---

## 3. Routing System

Routing is implemented with React Router using nested layouts and two route guards.

### PublicRoute behavior

`PublicRoute` allows unauthenticated users to access public pages.

If user is authenticated:

- `OWNER` -> redirect `/owner/dashboard`
- `TRAINER`:
  - `gymStatus === ACTIVE` -> `/trainer/dashboard`
  - otherwise -> `/trainer/join`
- `MEMBER`:
  - `gymStatus === ACTIVE` -> `/member/dashboard`
  - otherwise -> `/member/join`

### PrivateRoute behavior

`PrivateRoute` blocks unauthenticated users.

- If not authenticated -> redirect `/login`
- If authenticated -> render nested protected route via `<Outlet />`

### Route Map (Implemented)

### Public

- `/` -> Welcome
- `/login` -> Login
- `/signup` -> SignupLayout
  - index -> SignupGeneral
  - `/signup/owner` -> OwnerSignup
  - `/signup/trainer` -> TrainerSignup
  - `/signup/member` -> MemberSignup

### Private (Role/GymStatus-sensitive)

Shared protected entries:

- `/trainer/join`
- `/member/join`
- `/member/signup` (present in route config)

Owner area (`/owner` + OwnerLayout):

- `/owner/dashboard`
- `/owner/members`
- `/owner/trainers`
- `/owner/payments`
- `/owner/notifications`
- `/owner/settings`
- `/owner/support`

Trainer area (`/trainer` + TrainerLayout):

- `/trainer/dashboard`
- `/trainer/members`
- `/trainer/workouts`
- `/trainer/workout-builder`
- `/trainer/assignments`
- `/trainer/workspace`
- `/trainer/settings`
- `/trainer/support`

Member area (`/member` + MemberLayout):

- `/member/dashboard`
- `/member/workout`
- `/member/progress`
- `/member/attendance`
- `/member/subscription`
- `/member/notifications`
- `/member/settings`
- `/member/support`

Fallback:

- `*` -> NotFound

---

## 4. Authentication Flow

### Step-by-step implementation flow

1. User submits login/signup form.
2. Frontend calls auth API (`/auth/login` or `/auth/signup`) via Axios.
3. Backend sets HTTP-only cookie token.
4. Frontend stores returned user object in Redux (`loginSuccess`).
5. App startup calls `/auth/me` to restore session.
6. If `/auth/me` succeeds, Redux auth state is restored.
7. Navigation is resolved using `role + gymStatus`.

### Session restoration on app boot

`App.jsx` runs a `restoreSession` effect:

- `GET /auth/me`
- success -> `dispatch(loginSuccess(response.data.data))`
- failure -> `dispatch(logout())`

### Role + gymStatus navigation logic

- Owner goes directly to owner dashboard.
- Trainer/member with ACTIVE gymStatus go to dashboards.
- Trainer/member with non-ACTIVE gymStatus are sent to join flow pages.

### Data Flow

How data moves in day-to-day frontend operations:

1. UI event triggers action (form submit, page mount, button click).
2. Component calls API via shared Axios client (`src/api/axios.js`).
3. Backend returns response (typically `{ success, data, message }`).
4. Component updates Redux for shared auth/session state when needed.
5. Updated Redux state re-renders route guards, layouts, and pages.
6. UI reflects latest state (navigation changes, headers, lists, cards, or error states).

Typical example (`/auth/login`):

1. Login form submit -> `loginStart`
2. `POST /auth/login`
3. success -> `loginSuccess(response.data.data)`
4. Route guard/public redirect logic reads `auth.user` and navigates by role + gymStatus

---

## 5. Redux State Management

Auth state is managed in `authSlice`.

### State shape

```js
{
  user: null | object,
  isAuthenticated: boolean,
  loading: boolean,
  error: null | string
}
```

### Implemented actions

- `loginStart`
  - sets `loading = true`, clears error
- `loginSuccess(payload)`
  - sets authenticated user and clears loading
- `loginFailure(payload)`
  - stores error message, clears loading
- `logout`
  - clears user and auth flag

### Store setup

- `configureStore` with single reducer key: `auth`

---

## 6. API Layer (Axios)

All API traffic goes through `src/api/axios.js`.

### Configuration

- `baseURL: http://localhost:8080/api`
- `withCredentials: true`

### Response Shape Contract

Most frontend API handlers assume this structure:

```json
{
  "success": true,
  "data": {},
  "message": "..."
}
```

The UI depends on consistent `data` and `message` fields for predictable rendering and toast messaging.
When backend responses drift from this shape, frontend components usually need endpoint-specific handling.

### Interceptor behavior

Response success:

- Returns response unchanged.

Response error:

- Extracts status + backend message.
- Skips special handling for `/auth/me` errors.
- For 401 (non-/auth/me):
  - calls registered unauthorized handler
  - app handler logs out Redux auth and redirects `/login`
- Shows `toast.error(message)` for API errors.

### Unauthorized plumbing

- Axios exports `setUnauthorizedHandler(handler)`.
- `App.jsx` registers handler inside effect.

---

## 7. Error Handling

### Toast notifications (Sonner)

- `Toaster` mounted in `App.jsx`.
- API interceptor emits `toast.error(...)` for HTTP errors.
- Forms can emit `toast.success(...)` (for example login success).

### Global API error handling

- Centralized in Axios response interceptor.
- Prevents repetitive try/catch error messaging in each component.

### Inline form validation (Zod mapping)

Pattern used in forms:

1. `schema.safeParse(formData)`
2. On failure, map `issues` to field-keyed error object
3. Render inline message below the corresponding input

This keeps input-level feedback immediate and consistent.

### Form Handling Pattern

Most forms follow the same pattern:

1. Keep form values in local component state (`useState`).
2. Validate client-side using Zod (`safeParse`).
3. Map Zod issues to field-level inline errors.
4. Stop API call if validation fails.
5. On API error, show toast feedback from interceptor and/or local catch block.

This pattern is used in login and signup flows and keeps validation UX consistent.

---

## 8. UI Flow by Role

## Owner flow

Primary behavior:

- Lands on dashboard after authentication.
- Uses join requests UI to approve/reject trainer/member gym requests.
- Assigns trainers to members via management pages.

Key pages:

- Dashboard
- Members
- Trainers
- Payments
- Notifications
- Settings
- Support

## Trainer flow

Primary behavior:

- If not in ACTIVE gym status, enters gym code on join page.
- Once ACTIVE, manages members and workout operations.

Key pages:

- Dashboard
- Members
- Workout plans
- Workout builder
- Assignments
- Workspace
- Settings
- Support

## Member flow

Primary behavior:

- If not ACTIVE, uses join page with gym code.
- Once ACTIVE, consumes assignments/workout UI and tracks progress.

Key pages:

- Dashboard
- Workout
- Progress
- Attendance
- Subscription
- Notifications
- Settings
- Support

---

## 9. Special Components

## PrivateRoute

- Auth gate for protected route tree.
- Redirects unauthenticated users to login.

## PublicRoute

- Gate for public route tree.
- Redirects authenticated users to role/gymStatus destination.

## ErrorBoundary

- Class-based error boundary wrapping entire app UI.
- Catches render/lifecycle errors in descendant React components.
- Shows fallback UI with reload action.
- Does NOT catch:
  - async errors from event handlers/promises unless re-thrown in render flow
  - network/API failures (handled by Axios + toasts)
  - errors outside React tree (for example script load failures)

## ComingSoonWrapper

- Visual wrapper for unfinished modules.
- Dims/overlays child content with “Coming Soon” indicator while preserving layout context.

---

## 10. Notes

1. Auth is fully client-driven with cookie session checks (no SSR auth layer).
2. UI routing and access depend heavily on backend-provided `role` and `gymStatus`.
3. Frontend validation mirrors backend request expectations using Zod schemas.
4. Role layouts fetch `/user/gym-info` for header/sidebar personalization.
5. Most incomplete sections are intentionally scaffolded with ComingSoonWrapper instead of being removed.

### Gym Info Fetching

`/user/gym-info` is fetched in all three role layouts:

- `OwnerLayout`
- `TrainerLayout`
- `MemberLayout`

Returned data is used to personalize shell UI:

- `gym?.name` -> sidebar username
- `gym` object -> header props (gym context)

If the request fails, layouts currently log the error and continue rendering without personalized gym metadata.

---

## 11. Loading Strategy

Current loading handling is lightweight and local:

1. Auth flow uses Redux `auth.loading` (for example login button state).
2. Session restoration (`/auth/me`) does not have a dedicated global splash/skeleton state.
3. Layout gym-info fetching does not expose explicit loading placeholders.

Implications:

- Some screens can render before personalization data arrives.
- UX feedback is strongest in form submissions, weaker in initial app bootstrap/layout metadata fetch.

---

## 12. Known Limitations

1. API base URL is hardcoded in Axios (`http://localhost:8080/api`) instead of environment-driven config.
2. API response handling assumes consistent backend payload shape; inconsistent endpoints require special handling.
3. Unauthorized handler gate flag (`isHandlingUnauthorized`) is set once and not reset in current implementation.
4. No centralized loading overlay for app bootstrap or layout-level data fetches.
5. Many feature pages are scaffolded with `ComingSoonWrapper`, so navigation breadth is greater than functional depth.
6. ErrorBoundary fallback is global and generic; no route-scoped recovery UX yet.

---

## 13. Feedback Integration

- A reusable `FeedbackButton` component is added to the sidebar UI.
- Clicking the button opens a Google Form in a new browser tab.
- The form collects:
  - Bug reports
  - Feature suggestions
  - General feedback

