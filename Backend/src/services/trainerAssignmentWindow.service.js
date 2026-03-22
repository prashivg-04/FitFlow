import prisma from '../prisma.js';
import AppError from '../utils/AppError.js';
import { formatDateOnly } from '../utils/date.js';

export const getTrainerAssignmentWindowService = async (data) => {
    
    const { userId, memberId } = data;

    const trainer = await prisma.trainer.findUnique({
        where: {
            userId: userId
        }
    });
    if(!trainer) {
        throw new AppError("Trainer profile not found", 404);
    }

    const trainerMember = await prisma.trainerMember.findUnique({
        where: {
            trainerId: trainer.id,
            memberId
        }
    });
    if(!trainerMember) {
        throw new AppError('Member not assigned to this trainer', 400);
    }

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const endDate = new Date(today);
    endDate.setDate(endDate.getDate() + 6);
    endDate.setHours(23, 59, 59, 999);

    const assignments = await prisma.workoutAssignment.findMany({
        where: {
            memberId,
            assignedDate: {
                gte: today,
                lte: endDate
            }
        },
        orderBy: {
            assignedDate: 'asc'
        }
    });

    const assignmentMap = new Map();
    assignments.forEach(a => {
        const key = formatDateOnly(new Date(a.assignedDate));
        assignmentMap.set(key, a);
    });

    const result = [];
    for(let i = 0; i < 7; i++) {
        const date = new Date(today);
        date.setDate(date.getDate() + i);
        date.setHours(0, 0, 0, 0);

        const key = date.toLocaleDateString('en-CA');

        const assignment = assignmentMap.get(key);

        if(assignment) {
            result.push({
                date: key,
                dayName: assignment.dayName,
                status: assignment.status,
            });
        } else {
            result.push({
                date: key,
                dayName: null,
                status: null
            });
        }
    }
    
    return result;
}