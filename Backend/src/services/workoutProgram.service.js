import prisma from '../prisma.js';
import AppError from '../utils/AppError.js';

export const createWorkoutProgramService = async ({userId, data}) => {
    
    const trainer = await prisma.trainer.findUnique({
        where: { userId },
    });
    if (!trainer) {
        throw new AppError("Trainer profile not found", 404);
    }

    const { title, description, days } = data;
    if(!title || !days || days.length === 0) {
        throw new AppError("Program must have title and at least one day", 400);
    }

    if (!days || !Array.isArray(days.exercises)) {
        throw new AppError('Invalid workout program structure', 400);
    }

    for(const day of days) {
        if(day.isRestDay && day.exercises.length > 0) {
            throw new AppError("Rest day cannot have exercises", 400);
        } 
        if(!day.isRestDay && (!day.exercises || day.exercises.length === 0)) {
            throw new AppError("Non-rest day must have exercises", 400);
        }
    }

    return await prisma.workoutProgram.create({
        data: {
            trainerId: trainer.id,
            title, 
            description,
            days: {
                create: days.map(day => ({
                    name: day.name,
                    orderIndex: day.orderIndex,
                    isRestDay: day.isRestDay,
                    exercises: {
                        create: day.isRestDay 
                        ? [] 
                        : day.exercises.map(ex => ({
                            name: ex.name,
                            sets: ex.sets,
                            reps: ex.reps,
                            restSeconds: ex.restSeconds,
                            notes: ex.notes,
                            orderIndex: ex.orderIndex,
                        }))
                    }
                }))
            }
        },
        include: {
            days: {
                include: {
                    exercises: true
                }
            }
        }
    });
}

export const getWorkoutProgramsService = async (data) => {
    const { userId } = data;
    
    const trainer = await prisma.trainer.findUnique({
        where: { userId },
    });
    if (!trainer) {
        throw new AppError('Trainer profile not found', 404);
    }

    return await prisma.workoutProgram.findMany({
        where: {
            trainerId: trainer.id
        },
        orderBy: {
            createdAt: 'desc'
        },
        include: {
            days: {
                orderBy: {
                    orderIndex: 'asc'
                },
                include: {
                    exercises: {
                        orderBy: {
                            orderIndex: 'asc'
                        }
                    }
                }
            }
        }
    });
}