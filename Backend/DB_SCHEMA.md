# Database Schema – Gym Management Platform (MVP)

This document defines the **database schema design** for the Gym Management Platform.
The system uses **PostgreSQL** as the relational database and **Prisma ORM** for schema
definition and migrations.

The schema follows these core principles:
- Centralized authentication
- Role-based separation of concerns
- Strong relational integrity
- MVP-first (no over-engineering)

---

## 1. User Table

### Purpose
The `User` table is the **central authentication and identity table**.
Every person using the platform (Owner, Trainer, or Member) must exist as a User.

It contains only **common login and identity fields**.

---

### Fields (Physical Columns)

| Field Name | Type | Description |
|----------|------|------------|
| id | UUID | Primary key |
| name | String | Full name of the user |
| email | String (Unique) | Login identifier |
| password | String | Hashed password |
| role | Enum (OWNER, TRAINER, MEMBER) | User role |
| createdAt | DateTime | User creation timestamp |

---

### Notes
- Authentication is handled **only** via the User table.
- Role-specific data is **not stored here**.
- Each User can be linked to **only one role table**.
- Role is stored as an enum for authorization and routing.

---

### Relationships

| Related Entity | Relationship |
|---------------|-------------|
| Owner | One-to-One (optional) |
| Trainer | One-to-One (optional) |
| Member | One-to-One (optional) |
| JoinRequest | One-to-Many |

---

## 2. Owner Table

### Purpose
The `Owner` table stores **gym and business-level configuration**.
An Owner is the root entity that manages trainers and members.

Each Owner is always linked to exactly **one User**.

---

### Fields (Physical Columns)

| Field Name | Type | Description |
|----------|------|------------|
| id | UUID | Primary key |
| userId | UUID (Unique, FK) | References User.id |
| gymName | String | Name of the gym |
| city | String | City where gym is located |
| address | String (Optional) | Physical address |
| phone | String | Contact number |
| gymCode | String (Unique) | Unique code for trainers/members to join gym |
| openingTime | String | Daily opening time (e.g., "06:00") |
| closingTime | String | Daily closing time (e.g., "22:00") |
| createdAt | DateTime | Record creation time |
| updatedAt | DateTime | Auto-updated on change |

---

### Relationships (Logical, Not Stored as Columns)

| Related Entity | Relationship | Description |
|---------------|-------------|------------|
| User | One-to-One | Each Owner is linked to one User |
| Trainer | One-to-Many | Owner manages multiple Trainers |
| Member | One-to-Many | Owner manages multiple Members |
| JoinRequest | One-to-Many | Owner receives join requests from trainers/members |

---

### Notes
- Owner does not store authentication data.
- Trainer and Member counts are **derived dynamically**, not stored.
- Opening/closing times are stored as strings to avoid timezone complexity.
- **gymCode** is automatically generated and used by trainers/members to submit join requests.

---

## 3. Trainer Table

### Purpose
The `Trainer` table stores **professional and availability information** for trainers.
Being a trainer is considered a **responsibility**, so profile completeness is enforced.

Each Trainer:
- Is linked to one User
- Belongs to one Owner
- Can train multiple Members

---

### Fields (Physical Columns)

| Field Name | Type | Description |
|----------|------|------------|
| id | UUID | Primary key |
| userId | UUID (Unique, FK) | References User.id |
| ownerId | UUID (Optional, FK) | References Owner.id |
| specialization | String | Trainer specialization |
| experienceYears | Int | Years of experience |
| preferredDays | String | Working days (e.g., "MON,TUE,WED") |
| startTime | String | Daily start time (e.g., "07:00") |
| endTime | String | Daily end time (e.g., "11:00") |
| bio | String | Required professional description |
| gymStatus | Enum (NONE, PENDING, ACTIVE) | Join request and gym association status |
| createdAt | DateTime | Record creation time |
| updatedAt | DateTime | Auto-updated on change |

---

### Relationships

| Related Entity | Relationship |
|---------------|-------------|
| User | One-to-One |
| Owner | Many-to-One |
| Member | Many-to-Many |

---

### Notes
- Certifications are intentionally excluded from MVP.
- Availability is kept simple (single daily time window).
- Bio is mandatory to reflect professional responsibility.
- **ownerId** is optional until the trainer is approved by an owner.
- **gymStatus** defaults to `NONE` and transitions through `PENDING` to `ACTIVE` upon approval.

---

## 4. Member Table

### Purpose
The `Member` table stores **health and fitness context** for gym members.
It captures physical attributes and fitness intent needed for training logic.

Each Member:
- Is linked to one User
- Belongs to one Owner
- Can be trained by multiple Trainers

---

### Fields (Physical Columns)

| Field Name | Type | Description |
|----------|------|------------|
| id | UUID | Primary key |
| userId | UUID (Unique, FK) | References User.id |
| ownerId | UUID (Optional, FK) | References Owner.id |
| dateOfBirth | Date | Used to calculate age dynamically |
| gender | Enum (MALE, FEMALE, OTHER) | Used for fitness calculations |
| heightCm | Float | Height in centimeters |
| weightKg | Float | Current weight in kilograms |
| goal | Enum (WEIGHT_LOSS, MUSCLE_GAIN, ENDURANCE, FLEXIBILITY, GENERAL_FITNESS) | Fitness goal |
| experienceLevel | Enum (BEGINNER, INTERMEDIATE, ADVANCED) | Fitness experience |
| gymStatus | Enum (NONE, PENDING, ACTIVE) | Join request and gym association status |
| createdAt | DateTime | Record creation time |
| updatedAt | DateTime | Auto-updated on change |

---

### Relationships

| Related Entity | Relationship |
|---------------|-------------|
| User | One-to-One |
| Owner | Many-to-One |
| Trainer | Many-to-Many |

---

### Trainer–Member Assignment (Join Relationship)

The relationship between Trainers and Members is **many-to-many**.

This is implemented using a **dedicated join table** at the database level
(e.g., `TrainerMember`), which stores assignment pairs:

- trainerId → references Trainer.id
- memberId → references Member.id

Each row represents a single trainer–member assignment.

This table is considered an **implementation detail** in the MVP and does not
contain additional business fields yet. Future versions may extend it with
fields such as assignment date, status, or notes.

---

### Notes
- Age is derived from date of birth, not stored directly.
- Medical conditions and progress logs are intentionally excluded from MVP.
- Weight history and attendance will be handled in separate tables later.
- **ownerId** is optional until the member is approved by an owner.
- **gymStatus** defaults to `NONE` and transitions through `PENDING` to `ACTIVE` upon approval.

---

## Overall Design Summary

- `User` handles authentication and identity.
- Role-specific data lives in separate tables.
- Relationships are enforced using foreign keys.
- No derived or redundant data is stored.
- Schema is intentionally minimal for MVP, but extensible.

---

## Schema Status

| Table | Status |
|------|--------|
| User | ✅ Finalized |
| Owner | ✅ Finalized |
| Trainer | ✅ Finalized |
| Member | ✅ Finalized |
| JoinRequest | ✅ Finalized |
| Attendance | ⏳ Planned |
| Payments | ⏳ Planned |
| Workout Plans | ⏳ Planned |

---

## 5. GymStatus Enum

### Purpose
The `GymStatus` enum tracks the **join request and gym association lifecycle** for trainers and members.

---

### Values

| Value | Description |
|-------|-------------|
| NONE | User has not requested to join any gym (initial state) |
| PENDING | User has submitted a join request and is awaiting approval |
| ACTIVE | User's join request has been accepted and they are associated with a gym |

---

### State Transitions

```
NONE → PENDING    (when user submits a join request)
PENDING → ACTIVE  (when owner accepts the join request)
PENDING → NONE    (when owner rejects the join request)
```

---

### Notes
- State transitions are enforced at the application layer.
- Users cannot submit multiple join requests while in `PENDING` or `ACTIVE` states.
- Default value is `NONE`.

---

## 6. JoinStatus Enum

### Purpose
The `JoinStatus` enum tracks the **approval state** of join requests submitted by trainers and members.

---

### Values

| Value | Description |
|-------|-------------|
| PENDING | Join request has been submitted and is awaiting owner action (default) |
| ACCEPTED | Owner has approved the join request |
| REJECTED | Owner has declined the join request |

---

### State Transitions

```
PENDING → ACCEPTED  (when owner approves the request)
PENDING → REJECTED  (when owner declines the request)
```

---

### Notes
- Once a request is `ACCEPTED` or `REJECTED`, its status is final.
- Default value is `PENDING`.

---

## 7. JoinRequest Table

### Purpose
The `JoinRequest` table manages **join requests** submitted by trainers and members to associate with a gym owned by an Owner.

It acts as a request queue for owners to review and approve/reject incoming applications.

Each JoinRequest:
- References one Owner (gym)
- References one User (trainer or member requesting to join)
- Stores the requesting user's role
- Tracks approval status

---

### Fields (Physical Columns)

| Field Name | Type | Description |
|----------|------|------------|
| id | UUID | Primary key |
| ownerId | UUID (FK) | References Owner.id |
| userId | UUID (FK) | References User.id |
| role | Enum (OWNER, TRAINER, MEMBER) | Role of the requesting user |
| status | Enum (PENDING, ACCEPTED, REJECTED) | Approval status (default: PENDING) |
| createdAt | DateTime | Request submission time |
| updatedAt | DateTime | Auto-updated on status change |

---

### Relationships

| Related Entity | Relationship |
|---------------|-------------|
| Owner | Many-to-One |
| User | Many-to-One |

---

### Constraints

| Constraint Type | Description |
|----------------|-------------|
| Composite Unique | `@@unique([ownerId, userId])` – A user can only submit one join request per gym |

---

### Notes
- Trainers and members can only request to join **one gym at a time**.
- The composite unique constraint prevents duplicate requests to the same gym.
- When a request is `ACCEPTED`:
  - User's `gymStatus` changes to `ACTIVE`
  - User's `ownerId` is set to the gym owner's ID
- When a request is `REJECTED`:
  - User's `gymStatus` is reset to `NONE`
  - User can request to join a different gym or retry
- OWNER role users cannot create join requests.

---

## 8. Updated Enums

### FitnessGoal (Updated)

The `FitnessGoal` enum has been updated to reflect more specific fitness objectives:

| Value | Description |
|-------|-------------|
| WEIGHT_LOSS | Focus on reducing body weight |
| MUSCLE_GAIN | Focus on building muscle mass |
| ENDURANCE | Focus on cardiovascular and stamina improvement |
| FLEXIBILITY | Focus on mobility and stretching |
| GENERAL_FITNESS | Overall health and wellness |

---

### Gender

| Value | Description |
|-------|-------------|
| MALE | Male |
| FEMALE | Female |
| OTHER | Non-binary or prefer not to specify |

---

### ExperienceLevel

| Value | Description |
|-------|-------------|
| BEGINNER | New to fitness training |
| INTERMEDIATE | Some training experience |
| ADVANCED | Experienced with training programs |

---

### UserRole

| Value | Description |
|-------|-------------|
| OWNER | Gym owner with administrative privileges |
| TRAINER | Fitness trainer employed by a gym |
| MEMBER | Gym member receiving training |