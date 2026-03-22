import { z } from 'zod';

const baseSchema = {
    name: z.string().min(1, 'Name is required'),
    email: z.string().email('Invalid email'),
    password: z.string().min(6, 'Password must be at least 6 characters')
}

const ownerSchema = z.object({
    role: z.literal('OWNER'),
    roleData: z.object({
        gymName: z.string().min(1, 'Gym name is required'),
        address: z.string().min(1, 'Address is required'),
        city: z.string().min(1, 'City is required'),
        phone: z.string().min(1, 'Phone number is required'),
        openingTime: z.string().min(1, 'Opening time is required'),
        closingTime: z.string().min(1, 'Closing time is required'),
    }).strict(),
});

const trainerSchema = z.object({
    role: z.literal('TRAINER'),
    roleData: z.object({
        specialization: z.string().min(1, 'Specialization is required'),
        experienceYears: z.number().min(0, 'Experience years must be a non-negative number'),
        preferredDays: z.array(z.string()).min(1, 'At least one preferred day is required'),
        startTime: z.string().min(1, 'Start time is required'),
        endTime: z.string().min(1, 'End time is required'),
        bio: z.string().min(1, 'Bio is required'),
    }).strict(),
});

const memberSchema = z.object({
    role: z.literal('MEMBER'),
    roleData: z.object({
        dateOfBirth: z.string().min(1, 'Date of birth is required'),
        gender: z.enum(['MALE', 'FEMALE', 'OTHER']),
        heightCm: z.number().positive('Height must be a positive number'),
        weightKg: z.number().positive('Weight must be a positive number'),
        goal: z.enum([
            'WEIGHT_LOSS',
            'MUSCLE_GAIN',
            'ENDURANCE',
            'FLEXIBILITY',
            'GENERAL_FITNESS',
        ]),
        experienceLevel: z.enum(['BEGINNER', 'INTERMEDIATE', 'ADVANCED']),
    }).strict(),
});

export const signupSchema = z.discriminatedUnion('role', [
    z.object(baseSchema).merge(ownerSchema).strict(),
    z.object(baseSchema).merge(trainerSchema).strict(),
    z.object(baseSchema).merge(memberSchema).strict(),
])

export const loginSchema = z.object({
    email: z.string().email('Invalid email'),
    password: z.string().min(1, 'Password is required'),
}).strict();