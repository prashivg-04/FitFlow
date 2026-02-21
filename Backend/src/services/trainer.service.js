import prisma from "../prisma.js";

export const getMyMembersService = async (data) => {
    const { userId } = data;
    
    const trainer = await prisma.trainer.findUnique({
        where: { userId },
    })
    if(!trainer) {
        throw new Error("Trainer profile not found");
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