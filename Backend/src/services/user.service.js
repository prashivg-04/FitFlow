import prisma from '../prisma.js';
import AppError from '../utils/AppError.js';

export const getGymInfoService = async ({userId, role}) => {

    if(role === 'OWNER') {
        const owner = await prisma.owner.findUnique({
            where: {
                userId,
            },
            include: {
                user: true,
            }
        });
        if(!owner) {
            throw new AppError('Owner not found', 404);
        }

        return {
            gymName: owner.gymName,
            gymCode: owner.gymCode,
            name: owner.user.name,
        };
    }

    if(role === 'TRAINER') {
        const trainer = await prisma.trainer.findUnique({
            where: {
                userId,
            },
            include: {
                owner: true,
                user: true,
            },
        });
        if(!trainer) {
            throw new AppError('Trainer not found', 404);
        }

        return {
            gymName: trainer.owner?.gymName || null,
            name: trainer.user.name,
        }
    }

    if(role === 'MEMBER') {
        const member = await prisma.member.findUnique({
            where: {
                userId,
            },
            include: {
                owner: true,
                user: true,
            },
        });
        if(!member) {
            throw new AppError('Member not found', 404);
        }

        return {
            gymName: member.owner?.gymName || null,
            name: member.user.name,
        }
    }

    throw new AppError('Invalid role', 400);
}