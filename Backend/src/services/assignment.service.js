import prisma from "../prisma.js";
import AppError from '../utils/AppError.js';

export const getUnassignedMembersService = async (data) => {
    const { userId } = data;
    
    const owner = await prisma.owner.findUnique({
        where: { userId },
    })
    if(!owner) {
        throw new AppError("Owner profile not found", 404);
    }

    return await prisma.member.findMany({
        where: {
            ownerId: owner.id,
            gymStatus: 'ACTIVE',
            trainerMembers: {
                none: {}
            }
        },
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                    email: true
                }
            }
        }
    })
}

export const getTrainersService = async (data) => {
    const { userId } = data;
    
    const owner = await prisma.owner.findUnique({
        where: { userId },
    })
    if(!owner) {
        throw new AppError("Owner profile not found", 404);
    }

    return await prisma.trainer.findMany({
        where: {
            ownerId: owner.id,
            gymStatus: 'ACTIVE'
        },
        include: {
            user: {
                select: {
                    id: true,
                    name: true,
                    email: true
                }
            },
            _count: {
                select: {
                    trainerMembers: true
                }
            }
        }
    })
}

export const assignTrainerService  = async (data) => {
    const { userId, trainerId , memberId } = data;

    const owner = await prisma.owner.findUnique({
        where: { userId },
    })
    if(!owner) {
        throw new AppError("Owner profile not found", 404);
    }

    const member = await prisma.member.findUnique({
        where: { id: memberId },
        include: {
            trainerMembers: true
        }
    });

    const trainer = await prisma.trainer.findUnique({
        where: { id: trainerId },
    });

    if(!trainer || !member) {
        throw new AppError("Trainer or Member not found", 404);
    }

    if(trainer.ownerId !== owner.id || member.ownerId !== owner.id) {
        throw new AppError("Trainer and Member must belong to your gym", 400);
    }

    if(trainer.gymStatus !== "ACTIVE" || member.gymStatus !== "ACTIVE") {
        throw new AppError("Trainer or Member not active", 400);
    }

    if(member.trainerMembers.length > 0) {
        throw new AppError("Member is already assigned to a trainer", 400);
    }

    return await prisma.trainerMember.create({
        data: {
            memberId,
            trainerId
        }
    });
}

export const unassignTrainerService  = async (data) => {
    const { userId, memberId } = data;

    const owner = await prisma.owner.findUnique({
        where: { userId },
    })
    if(!owner) {
        throw new AppError("Owner profile not found", 404);
    }

    const member = await prisma.member.findUnique({
        where: { id: memberId },
        include: {
            trainerMembers: true
        }
    });
    if(!member) {
        throw new AppError("Member not found", 404);
    }
    if(member.ownerId !== owner.id) {
        throw new AppError("Member must belong to your gym", 400);
    }
    if(member.gymStatus !== "ACTIVE") {
        throw new AppError("Member not active", 400);
    }
    if(member.trainerMembers.length === 0) {
        throw new AppError("Member is not assigned to any trainer", 400);
    }

    return await prisma.trainerMember.delete({
        where: { memberId }
    });
}