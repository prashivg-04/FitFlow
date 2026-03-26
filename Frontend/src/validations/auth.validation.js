import { z } from 'zod';

export const loginSchema = z.object({
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
});

export const baseSignupSchema = z.object({
  name: z.string().min(1, 'Name is required'),
  email: z.string().email('Invalid email'),
  password: z.string().min(6, 'Password must be at least 6 characters'),
  role: z.enum(['OWNER', 'TRAINER', 'MEMBER'], {
    errorMap: () => ({ message: 'Role is required' }),
  }),
});

export const ownerSchema = z.object({
  gymName: z.string().min(1, 'Gym name is required'),
  address: z.string().min(1, 'Address is required'),
  city: z.string().min(1, 'City is required'),
  phone: z.string().min(1, 'Phone number is required'),
  openingTime: z.string().min(1, 'Opening time is required'),
  closingTime: z.string().min(1, 'Closing time is required'),
});

export const trainerSchema = z.object({
  specialization: z.string().min(1, 'Specialization is required'),
  experienceYears: z
    .number({ invalid_type_error: 'Must be a number' })
    .min(0, 'Must be non-negative'),
  preferredDays: z
    .array(z.string())
    .min(1, 'Select at least one day'),
  startTime: z.string().min(1, 'Start time is required'),
  endTime: z.string().min(1, 'End time is required'),
  bio: z.string().min(1, 'Bio is required'),
});

export const memberSchema = z.object({
  dateOfBirth: z.string().min(1, 'Date of birth is required'),
  gender: z.enum(['MALE', 'FEMALE', 'OTHER'], 'Gender is required'),
  heightCm: z
    .number({ invalid_type_error: 'Must be a number' })
    .positive('Height must be positive'),
  weightKg: z
    .number({ invalid_type_error: 'Must be a number' })
    .positive('Weight must be positive'),
  goal: z.enum([
    'WEIGHT_LOSS',
    'MUSCLE_GAIN',
    'ENDURANCE',
    'FLEXIBILITY',
    'GENERAL_FITNESS',
  ], 'Goal is required'),
  experienceLevel: z.enum(['BEGINNER', 'INTERMEDIATE', 'ADVANCED'], 'Experience level is required'),
});