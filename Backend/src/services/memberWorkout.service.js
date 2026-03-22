import prisma from '../prisma.js';
import { formatDateOnly, startToTodayLocal } from '../utils/date.js';
import AppError from '../utils/AppError.js';

export const getMemberScheduleService = async (data) => {
    const { userId } = data;

    const member = await prisma.member.findUnique({
        where: { userId },
    });
    if(!member) {
        throw new AppError('Member profile not found', 404);
    }

    const today = startToTodayLocal();

    const endDate = new Date(today);
    endDate.setDate(today.getDate() + 6);

    const assignments = await prisma.workoutAssignment.findMany({
        where: {
            memberId: member.id,
            assignedDate: {
                gte: today,
                lte: endDate,
            }
        },
        include: {
            exercises: {
                orderBy: { orderIndex: 'asc' },
            }
        },
        orderBy: { assignedDate: 'asc' },
    });

    const assignmentMap = new Map();
    assignments.forEach(a => {
        assignmentMap.set(formatDateOnly(a.assignedDate), a);
    });

    const schedule = [];
    
    for(let i = 0; i < 7; i++) {
        const date = new Date(today);
        date.setDate(today.getDate() + i);

        const key = formatDateOnly(date);
        const assignment = assignmentMap.get(key);

        if(assignment) {
            schedule.push({
                date: key,
                assignmentId: assignment.id,
                dayName: assignment.dayName,
                isRestDay: assignment.isRestDay,
                status: assignment.status,
                exercises: assignment.exercises
            });
        } else {
            schedule.push({
                date: key,
                assignmentId: null,
                dayName: null,
                isRestDay: null,
                status: null,
                exercises: []
            });
        }
    }

    return schedule;
}

export const completeWorkoutService = async (data) => {
    
    const { userId, assignmentId } = data;

    if (!assignmentId) {
        throw new AppError('assignmentId is required', 400);
    }

    const member = await prisma.member.findUnique({
        where: { userId },
    });
    if(!member) {
        throw new AppError('Member profile not found', 404);
    }

    const assignment = await prisma.workoutAssignment.findUnique({
        where: { id: assignmentId },
    });
    if(!assignment || assignment.memberId !== member.id) {
        throw new AppError('Workout assignment not found for this member', 404);
    }

    const today = startToTodayLocal();

    const assignedDate = new Date(assignment.assignedDate);
    assignedDate.setHours(0, 0, 0, 0);

    if(assignedDate.getTime() !== today.getTime()) {
        throw new AppError('You can only complete today\'s workout assignment', 400);
    }

    if(assignment.isRestDay) {
        throw new AppError('Rest day does not require completion', 400);
    }

    if(assignment.status === 'COMPLETED') {
        throw new AppError('Workout assignment already completed', 400);
    }

    await prisma.workoutAssignment.update({
        where: { id: assignmentId },
        data: {
            status: 'COMPLETED',
            completedDate: new Date(),
        }
    });

    return { message: 'Workout assignment marked as completed' };
}