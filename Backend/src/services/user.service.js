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
                owner: {
                    include: {
                        user: {
                            select: { name: true, email: true }
                        }
                    }
                },
                user: true,
            },
        });
        if(!trainer) {
            throw new AppError('Trainer not found', 404);
        }

        return {
            gymName: trainer.owner?.gymName || null,
            ownerName: trainer.owner?.user?.name || null,
            ownerEmail: trainer.owner?.user?.email || null,
            ownerPhone: trainer.owner?.phone || null,
            address: trainer.owner?.address || null,
            city: trainer.owner?.city || null,
            name: trainer.user.name,
        }
    }

    if(role === 'MEMBER') {
        const member = await prisma.member.findUnique({
            where: {
                userId,
            },
            include: {
                owner: {
                    include: {
                        user: {
                            select: { name: true, email: true }
                        }
                    }
                },
                user: true,
                trainerMembers: {
                    include: {
                        trainer: {
                            include: {
                                user: {
                                    select: { name: true, email: true }
                                }
                            }
                        }
                    }
                }
            },
        });
        if(!member) {
            throw new AppError('Member not found', 404);
        }

        const assignedTrainer = member.trainerMembers.length > 0 ? member.trainerMembers[0].trainer : null;

        return {
            gymName: member.owner?.gymName || null,
            ownerName: member.owner?.user?.name || null,
            ownerEmail: member.owner?.user?.email || null,
            ownerPhone: member.owner?.phone || null,
            address: member.owner?.address || null,
            city: member.owner?.city || null,
            name: member.user.name,
            trainerName: assignedTrainer?.user?.name || null,
            trainerEmail: assignedTrainer?.user?.email || null,
            trainerSpecialization: assignedTrainer?.specialization || null,
        }
    }

    throw new AppError('Invalid role', 400);
}