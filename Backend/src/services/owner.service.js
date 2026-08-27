import prisma from "../prisma.js";
import AppError from "../utils/AppError.js";

export const getMembersService = async (userId) => {
    const owner = await prisma.owner.findUnique({
        where: { userId },
    });

    if (!owner) {
        throw new AppError("Owner profile not found", 404);
    }

    return await prisma.member.findMany({
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
            trainerMembers: {
                include: {
                    trainer: {
                        include: {
                            user: {
                                select: { name: true }
                            }
                        }
                    }
                }
            }
        },
        orderBy: {
            createdAt: 'desc'
        }
    });
};
