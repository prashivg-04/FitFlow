import prisma from '../prisma.js';
import AppError from '../utils/AppError.js';

export const getTrainerMemberCalendarService = async (data) => {
    
    const { userId, memberId, month } = data;

    if(!month) {
        throw new AppError('Month query parameter is required in YYYY-MM format', 400);
    }
    
    const trainer = await prisma.trainer.findUnique({
        where: {
            userId: userId
        }
    });
    if(!trainer) {
        throw new Error('Trainer profile not found');
    }

    const trainerMember = await prisma.trainerMember.findUnique({
        where: {
            trainerId: trainer.id,
            memberId
        }
    });
    if(!trainerMember) {
        throw new Error('Member not assigned to this trainer');
    }

    const [year, monthNum] = month.split('-').map(Number);
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
        const key = new Date(a.assignedDate).toLocaleDateString('en-CA'); 
        assignmentMap.set(key, a);
    });

    const today = new Date();
    today.setHours(0, 0, 0, 0);

    const daysInMonth = new Date(year, monthIndex + 1, 0).getDate();

    const calender = [];

    for(let day = 1; day <= daysInMonth; day++) {
        const date = new Date(year, monthIndex, day);
        date.setHours(0, 0, 0, 0);

        const key = date.toLocaleDateString('en-CA');
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