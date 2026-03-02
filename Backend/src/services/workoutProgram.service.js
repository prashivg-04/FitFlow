import prisma from '../prisma.js';

export const createWorkoutProgramService = async ({userId, data}) => {
    
    const trainer = await prisma.trainer.findUnique({
        where: { userId },
    });
    if (!trainer) {
        throw new Error("Trainer profile not found");
    }

    const { title, description, days } = data;
    if(!title || !days || days.length === 0) {
        throw new Error("Program must have title and at least one day");
    }

    for(const day of days) {
        if(day.isRestDay && day.exercises.length > 0) {
            throw new Error("Rest day cannot have exercises");
        } 
        if(!day.isRestDay && (!day.exercises || day.exercises.length === 0)) {
            throw new Error("Non-rest day must have exercises");
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
        throw new Error("Trainer profile not found");
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