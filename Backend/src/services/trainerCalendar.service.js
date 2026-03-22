import prisma from '../prisma.js';
import AppError from '../utils/AppError.js';
import { formatDateOnly, startToTodayLocal } from '../utils/date.js';

export const getTrainerMemberCalendarService = async (data) => {
    
    const { userId, memberId, month } = data;

    if (!/^\d{4}-\d{2}$/.test(month)) {
        throw new AppError('Month must be in YYYY-MM format', 400);
    }

    const [year, monthNum] = month.split('-').map(Number);

    if (monthNum < 1 || monthNum > 12) {
        throw new AppError('Invalid month value', 400);
    }
    
    const trainer = await prisma.trainer.findUnique({
        where: {
            userId: userId
        }
    });
    if(!trainer) {
        throw new AppError('Trainer profile not found', 404);
    }

    const trainerMember = await prisma.trainerMember.findUnique({
        where: {
            trainerId: trainer.id,
            memberId
        }
    });
    if(!trainerMember) {
        throw new AppError('Member not assigned to this trainer', 404);
    }

    const monthIndex = monthNum - 1; 

    const start = new Date(year, monthIndex, 1);
    start.setHours(0, 0, 0, 0);

    const end = new Date(year, monthIndex + 1, 0);
    end.setHours(23, 59, 59, 999);

    const assignments = await prisma.workoutAssignment.findMany({
        where: {
            memberId,
            assignedDate: {
                gte: start,
                lte: end
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

    const today = startToTodayLocal();

    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

    const calender = [];

    for(let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, monthIndex, day);
        date.setHours(0, 0, 0, 0);

        const key = formatDateOnly(date);
        const assignment = assignmentMap.get(key);

        if(assignment) {
            let status = assignment.status;
            if(status === 'PENDING' && date < today) {
                status = 'MISSED';
            }

            calender.push({
                date: key,
                dayName: assignment.dayName,
                status
            })
        } else { 
            calender.push({
                date: key,
                dayName: null,
                status: null
            })
        }
    }

    return calender;
}