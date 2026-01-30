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
| phone | String (Optional) | Contact number |
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

---

### Notes
- Owner does not store authentication data.
- Trainer and Member counts are **derived dynamically**, not stored.
- Opening/closing times are stored as strings to avoid timezone complexity.

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
| ownerId | UUID (FK) | References Owner.id |
| specialization | String | Trainer specialization |
| experienceYears | Int | Years of experience |
| preferredDays | String | Working days (e.g., "MON,TUE,WED") |
| startTime | String | Daily start time (e.g., "07:00") |
| endTime | String | Daily end time (e.g., "11:00") |
| bio | String | Required professional description |
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
| ownerId | UUID (FK) | References Owner.id |
| dateOfBirth | Date | Used to calculate age dynamically |
| gender | Enum (MALE, FEMALE, OTHER) | Used for fitness calculations |
| heightCm | Float | Height in centimeters |
| weightKg | Float | Current weight in kilograms |
| goal | Enum (FAT_LOSS, MUSCLE_GAIN, HEART_HEALTH) | Fitness goal |
| experienceLevel | Enum (BEGINNER, INTERMEDIATE, ADVANCED) | Fitness experience |
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

### Notes
- Age is derived from date of birth, not stored directly.
- Medical conditions and progress logs are intentionally excluded from MVP.
- Weight history and attendance will be handled in separate tables later.

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
| Attendance | ⏳ Planned |
| Payments | ⏳ Planned |
| Workout Plans | ⏳ Planned |