import prisma from '../prisma.js';

export const assignProgramToMemberService = async (data) => {
    const { userId, memberId, programId, startDate } = data;

    const trainer = await prisma.trainer.findUnique({
        where: { userId },
    });
    if (!trainer) {
        throw new Error('Trainer profile not found');
    }

    const trainerMember = await prisma.trainerMember.findFirst({
        where: {
            trainerId : trainer.id,
            memberId,
        },
    });
    if (!trainerMember) {
        throw new Error('Member is not assigned to this trainer');
    }

    const program = await prisma.workoutProgram.findUnique({
        where: {
            id: programId,
        },
        include: {
            days: {
                orderBy: { orderIndex: 'asc' },
                include: {
                    exercises: {
                        orderBy: { orderIndex: 'asc' },
                    }
                }
            }
        }
    });
    if (!program) {
        throw new Error('Workout program not found');
    }

    const start = new Date(startDate);
    start.setHours(0, 0, 0, 0);

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    if (start < today) {
        throw new Error('Cannot assign program in the past');
    }

    const dateList = program.days.map((_, index) => {
        const d = new Date(start);
        d.setDate(d.getDate() + index);
        return d;
    });

    const existingAssignments = await prisma.workoutAssignment.findMany({
        where: {
            memberId,
            assignedDate: {
                in: dateList,
            }
        },
    });
    if (existingAssignments.length > 0) {
        throw new Error('Assignment overlaps with existing schedule');
    }

    return await prisma.$transaction(async (tx) => {
        for(let i = 0; i < program.days.length; i++) {
            const day = program.days[i];
            const assignedDate = new Date(dateList[i]);

            const assignment = await tx.workoutAssignment.create({
                data: {
                    memberId,
                    programId: program.id,
                    programDayId: day.id,
                    assignedDate: assignedDate,
                    dayName: day.name,
                    isRestDay: day.isRestDay,
                    status: day.isRestDay ? 'COMPLETED' : 'PENDING',
                    completedDate: day.isRestDay ? assignedDate : null,
                }
            });

            if(!day.isRestDay) {
                await tx.workoutAssignmentExercise.createMany({
                    data: day.exercises.map(ex => ({
                        assignmentId: assignment.id,
                        name: ex.name,
                        sets: ex.sets,
                        reps: ex.reps,
                        restSeconds: ex.restSeconds,
                        notes: ex.notes,
                        orderIndex: ex.orderIndex,
                    }))
                });
            }
        }

        return { message: 'Program assigned successfully' };
    });
}