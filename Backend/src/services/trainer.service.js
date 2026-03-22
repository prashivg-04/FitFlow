import prisma from "../prisma.js";
import AppError from "../utils/AppError.js";

export const getMyMembersService = async (data) => {
    const { userId } = data;
    
    const trainer = await prisma.trainer.findUnique({
        where: { userId },
    })
    if(!trainer) {
        throw new AppError("Trainer profile not found", 404);
    }

    const assignedMembers = await prisma.trainerMember.findMany({
        where: {
            trainerId: trainer.id
        },
        include: {
            member: {
                include: {
                    user: {
                        select: {
                            id: true,
                            name: true,
                            email: true
                        }
                    }
                }
            }
        }
    });
    return assignedMembers.map(tm => tm.member);
};