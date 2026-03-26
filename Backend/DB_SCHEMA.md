# Database Schema Documentation - GymSaaS

## 1. Overview

This document describes the current database design for GymSaaS, based on Prisma + PostgreSQL.

Primary source of truth:
- `prisma/schema.prisma` (authoritative)

Behavioral rules (not directly encoded as DB constraints) are validated in service layer logic.

Design summary:
- Central auth identity in `User`
- Role profiles in `Owner`, `Trainer`, `Member`
- Gym onboarding via `JoinRequest`
- Trainer-member assignment via `TrainerMember`
- Program templates via `WorkoutProgram -> WorkoutProgramDay -> WorkoutExercise`
- Member schedule via `WorkoutAssignment -> WorkoutAssignmentExercise`

### Data Flow Summary

- User creates account -> role profile created
- Trainer/Member joins gym via JoinRequest
- Owner approves -> relationship established
- Trainer creates program -> assigns to member
- System generates dated WorkoutAssignments
- Member interacts only with assignments (not program templates)

---

## 2. Models

## User

| Field | Type | Required | Description |
| ----- | ---- | -------- | ----------- |
| id | String (UUID) | Yes | Primary key |
| name | String | Yes | User full name |
| email | String | Yes | Unique login email |
| password | String | Yes | Hashed password |
| role | UserRole enum | Yes | `OWNER`, `TRAINER`, `MEMBER` |
| createdAt | DateTime | Yes | Created timestamp (default now) |

Relationships:
- One-to-One (optional) with `Owner`
- One-to-One (optional) with `Trainer`
- One-to-One (optional) with `Member`
- One-to-Many with `JoinRequest`

---

## Owner

| Field | Type | Required | Description |
| ----- | ---- | -------- | ----------- |
| id | String (UUID) | Yes | Primary key |
| userId | String (UUID) | Yes | FK to `User.id`, unique |
| gymName | String | Yes | Gym name |
| address | String | Yes | Gym address |
| city | String | Yes | Gym city |
| phone | String | Yes | Contact number |
| gymCode | String | Yes | Unique code used for join requests |
| openingTime | String | Yes | Opening time text |
| closingTime | String | Yes | Closing time text |
| createdAt | DateTime | Yes | Created timestamp |
| updatedAt | DateTime | Yes | Auto-updated timestamp |

Relationships:
- One-to-One with `User`
- One-to-Many with `Trainer`
- One-to-Many with `Member`
- One-to-Many with `JoinRequest`

---

## JoinRequest

| Field | Type | Required | Description |
| ----- | ---- | -------- | ----------- |
| id | String (UUID) | Yes | Primary key |
| ownerId | String (UUID) | Yes | FK to `Owner.id` |
| userId | String (UUID) | Yes | FK to `User.id` |
| role | UserRole enum | Yes | Requesting user role |
| status | JoinStatus enum | Yes | Request status (default `PENDING`) |
| createdAt | DateTime | Yes | Created timestamp |
| updatedAt | DateTime | Yes | Auto-updated timestamp |

Relationships:
- Many-to-One with `Owner`
- Many-to-One with `User`

---

## Trainer

| Field | Type | Required | Description |
| ----- | ---- | -------- | ----------- |
| id | String (UUID) | Yes | Primary key |
| userId | String (UUID) | Yes | FK to `User.id`, unique |
| ownerId | String (UUID) | No | FK to `Owner.id` |
| specialization | String | Yes | Professional specialization |
| experienceYears | Int | Yes | Experience years |
| preferredDays | String[] | Yes | Preferred working days |
| startTime | String | Yes | Availability start |
| endTime | String | Yes | Availability end |
| bio | String | Yes | Profile bio |
| gymStatus | GymStatus enum | Yes | Gym association state (default `NONE`) |
| createdAt | DateTime | Yes | Created timestamp |
| updatedAt | DateTime | Yes | Auto-updated timestamp |

Relationships:
- One-to-One with `User`
- Many-to-One (optional) with `Owner`
- One-to-Many with `TrainerMember`
- One-to-Many with `WorkoutProgram`

---

## Member

| Field | Type | Required | Description |
| ----- | ---- | -------- | ----------- |
| id | String (UUID) | Yes | Primary key |
| userId | String (UUID) | Yes | FK to `User.id`, unique |
| ownerId | String (UUID) | No | FK to `Owner.id` |
| dateOfBirth | DateTime | Yes | Date of birth |
| gender | Gender enum | Yes | Member gender |
| heightCm | Float | Yes | Height in cm |
| weightKg | Float | Yes | Weight in kg |
| goal | FitnessGoal enum | Yes | Fitness goal |
| experienceLevel | ExperienceLevel enum | Yes | Training level |
| gymStatus | GymStatus enum | Yes | Gym association state (default `NONE`) |
| createdAt | DateTime | Yes | Created timestamp |
| updatedAt | DateTime | Yes | Auto-updated timestamp |

Relationships:
- One-to-One with `User`
- Many-to-One (optional) with `Owner`
- One-to-Many with `TrainerMember`
- One-to-Many with `WorkoutAssignment`

---

## TrainerMember

| Field | Type | Required | Description |
| ----- | ---- | -------- | ----------- |
| trainerId | String (UUID) | Yes | FK to `Trainer.id` |
| memberId | String (UUID) | Yes | FK to `Member.id`, unique |

Relationships:
- Many-to-One with `Trainer`
- Each `Member` can be linked to only one `Trainer` at a time (enforced by unique `memberId`)

---

## WorkoutProgram

| Field | Type | Required | Description |
| ----- | ---- | -------- | ----------- |
| id | String (UUID) | Yes | Primary key |
| trainerId | String (UUID) | Yes | FK to `Trainer.id` |
| title | String | Yes | Program title |
| description | String | No | Program description |
| createdAt | DateTime | Yes | Created timestamp |
| updatedAt | DateTime | Yes | Auto-updated timestamp |

Relationships:
- Many-to-One with `Trainer`
- One-to-Many with `WorkoutProgramDay`
- One-to-Many with `WorkoutAssignment`

---

## WorkoutProgramDay

| Field | Type | Required | Description |
| ----- | ---- | -------- | ----------- |
| id | String (UUID) | Yes | Primary key |
| programId | String (UUID) | Yes | FK to `WorkoutProgram.id` |
| name | String | Yes | Day name |
| orderIndex | Int | Yes | Day sequence within program |
| isRestDay | Boolean | Yes | Rest-day flag (default `false`) |

Relationships:
- Many-to-One with `WorkoutProgram`
- One-to-Many with `WorkoutExercise`
- One-to-Many with `WorkoutAssignment`

---

## WorkoutExercise

| Field | Type | Required | Description |
| ----- | ---- | -------- | ----------- |
| id | String (UUID) | Yes | Primary key |
| programDayId | String (UUID) | Yes | FK to `WorkoutProgramDay.id` |
| name | String | Yes | Exercise name |
| sets | Int | Yes | Set count |
| reps | String | Yes | Rep notation |
| restSeconds | Int | Yes | Rest interval in seconds |
| notes | String | No | Optional notes |
| orderIndex | Int | Yes | Exercise sequence in day |

Relationships:
- Many-to-One with `WorkoutProgramDay`

---

## WorkoutAssignment

| Field | Type | Required | Description |
| ----- | ---- | -------- | ----------- |
| id | String (UUID) | Yes | Primary key |
| memberId | String (UUID) | Yes | FK to `Member.id` |
| programId | String (UUID) | Yes | FK to `WorkoutProgram.id` |
| programDayId | String (UUID) | Yes | FK to `WorkoutProgramDay.id` |
| assignedDate | DateTime | Yes | Scheduled workout date |
| dayName | String | Yes | Snapshot of day name |
| isRestDay | Boolean | Yes | Snapshot rest-day flag |
| status | AssignmentStatus enum | Yes | Assignment status (default `PENDING`) |
| completedDate | DateTime | No | Completion timestamp |

Relationships:
- Many-to-One with `Member`
- Many-to-One with `WorkoutProgram`
- Many-to-One with `WorkoutProgramDay`
- One-to-Many with `WorkoutAssignmentExercise`

---

## WorkoutAssignmentExercise

| Field | Type | Required | Description |
| ----- | ---- | -------- | ----------- |
| id | String (UUID) | Yes | Primary key |
| assignmentId | String (UUID) | Yes | FK to `WorkoutAssignment.id` |
| name | String | Yes | Exercise name snapshot |
| sets | Int | Yes | Set count snapshot |
| reps | String | Yes | Rep notation snapshot |
| restSeconds | Int | Yes | Rest interval snapshot |
| notes | String | No | Notes snapshot |
| orderIndex | Int | Yes | Exercise order in assignment |

Relationships:
- Many-to-One with `WorkoutAssignment`

---

## 3. Database Relationships Overview

Core ER-level flow:
- `User` is the identity root. A user can have one role profile: `Owner` or `Trainer` or `Member`.
- `Owner` is the gym root. One owner can manage many trainers and many members.
- `Trainer` and `Member` are linked through `TrainerMember`.
  - Trainer side: one trainer can have many members.
  - Member side: one member can have only one trainer at a time.
- `WorkoutProgram` belongs to a trainer.
- `WorkoutProgram` has many `WorkoutProgramDay` rows.
- Each `WorkoutProgramDay` has many `WorkoutExercise` rows.
- Assigning a program creates dated `WorkoutAssignment` rows for a member.
- Each `WorkoutAssignment` stores exercise snapshots in `WorkoutAssignmentExercise`.

---

## 4. Enums

## UserRole
- `OWNER`
- `TRAINER`
- `MEMBER`

## JoinStatus
- `PENDING`
- `ACCEPTED`
- `REJECTED`

## GymStatus
- `NONE`
- `PENDING`
- `ACTIVE`

## Gender
- `MALE`
- `FEMALE`
- `OTHER`

## FitnessGoal
- `WEIGHT_LOSS`
- `MUSCLE_GAIN`
- `ENDURANCE`
- `FLEXIBILITY`
- `GENERAL_FITNESS`

## ExperienceLevel
- `BEGINNER`
- `INTERMEDIATE`
- `ADVANCED`

## AssignmentStatus
- `PENDING`
- `COMPLETED`

---

## 5. Constraints and Rules

Database-level constraints (schema):
1. User email must be unique (`User.email @unique`).
2. One owner/trainer/member profile per user (`userId @unique` in each role table).
3. One join request per gym per user (`JoinRequest @@unique([ownerId, userId])`).
4. One trainer per member at a time (`TrainerMember.memberId @unique`).
5. Trainer-member pair uniqueness (`TrainerMember @@id([trainerId, memberId])`).
6. Unique day order per program (`WorkoutProgramDay @@unique([programId, orderIndex])`).
7. Unique exercise order per day (`WorkoutExercise @@unique([programDayId, orderIndex])`).
8. At most one assignment per member per date (`WorkoutAssignment @@unique([memberId, assignedDate])`).
9. Unique exercise order per assignment (`WorkoutAssignmentExercise @@unique([assignmentId, orderIndex])`).

Application-level enforced rules (services):
1. Trainers/members can send join request only when `gymStatus = NONE`.
2. Owner role cannot create join requests.
3. Program assignment is blocked for past start dates.
4. Program assignment is blocked if any target date already has an assignment (overlap check).
5. Program assignment is transactional (all assignment rows succeed or rollback).
6. Member can complete only today's assignment.
7. Rest-day assignments cannot be completed manually.
8. Completed assignments cannot be completed again.

---

## 6. Derived Logic

These behaviors are runtime-derived and not stored as separate DB fields:

1. `MISSED` assignment status:
- Not part of `AssignmentStatus` enum.
- Derived in trainer calendar response when an assignment is `PENDING` and date is in the past.

2. Rest-day auto-completion:
- During program assignment, rest-day rows are created with:
  - `status = COMPLETED`
  - `completedDate = assignedDate`

3. `gymStatus` lifecycle:
- `NONE -> PENDING` when join request is created.
- `PENDING -> ACTIVE` when owner accepts request.
- `PENDING -> NONE` when owner rejects request.

4. Schedule window shaping:
- Member schedule endpoint returns a fixed 7-day window with null placeholders for days without assignments.

---

## 7. Notes

1. `WorkoutAssignment` stores `dayName` and `isRestDay` snapshots so assignment display is stable even if the source program later changes.
2. `WorkoutAssignmentExercise` stores full exercise snapshots for immutable historical assignment details.
3. `preferredDays` is stored as PostgreSQL array (`String[]`).
4. Snapshot design (`WorkoutAssignment` and `WorkoutAssignmentExercise`): data is duplicated intentionally to preserve historical accuracy even if the original program changes.
5. Time fields (`openingTime`, `closingTime`, `startTime`, `endTime`) are strings in current design.
6. Current schema and services are aligned with MVP goals: clear ownership boundaries, enforceable assignment rules, and predictable schedule generation.

Naming Note:
`WorkoutProgramDay` refers to a day template inside a program, not a real calendar date.
