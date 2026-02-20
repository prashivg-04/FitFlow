import prisma from "../prisma.js";

export const getUnassignedMembersService = async (data) => {
    const { userId } = data;
    
    const owner = await prisma.owner.findUnique({
        where: { userId },
    })
    if(!owner) {
        throw new Error("Owner profile not found");
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
        throw new Error("Owner profile not found");
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
        throw new Error("Owner profile not found");
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
        throw new Error("Trainer or Member not found");
    }

    if(trainer.ownerId !== owner.id || member.ownerId !== owner.id) {
        throw new Error("Trainer and Member must belong to your gym");
    }

    if(trainer.gymStatus !== "ACTIVE" || member.gymStatus !== "ACTIVE") {
        throw new Error("Trainer or Member not active");
    }

    if(member.trainerMembers.length > 0) {
        throw new Error("Member is already assigned to a trainer");
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
        throw new Error("Owner profile not found");
    }

    const member = await prisma.member.findUnique({
        where: { id: memberId },
        include: {
            trainerMembers: true
        }
    });
    if(!member) {
        throw new Error("Member not found");
    }
    if(member.ownerId !== owner.id) {
        throw new Error("Member must belong to your gym");
    }
    if(member.gymStatus !== "ACTIVE") {
        throw new Error("Member not active");
    }
    if(member.trainerMembers.length === 0) {
        throw new Error("Member is not assigned to any trainer");
    }

    return await prisma.trainerMember.delete({
        where: { memberId }
    });
}