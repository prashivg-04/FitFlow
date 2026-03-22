import prisma from "../prisma";

export const requireGymActive = async (req, res, next) => {
    try {
        const { userId, role } = req.user;

        if(role === 'OWNER') {
            return next();
        }

        if(role === 'TRAINER') {
            const trainer = await prisma.trainer.findUnique({
                where: {
                    userId: userId
                },
                select: {
                    gymStatus: true,
                }
            });

            if(!trainer || trainer.gymStatus !== 'ACTIVE') {
                return res.status(403).json({
                    success: false,
                    message: 'Trainer is not associated with an active gym.',
                })
            };
        }

        if(role === 'MEMBER') {
            const member = await prisma.member.findUnique({
                where: { 
                    userId: userId 
                },
                select: {
                    gymStatus: true,
                }
            });

            if(!member || member.gymStatus !== 'ACTIVE') {
                return res.status(403).json({
                    success: false,
                    message: 'Member is not associated with an active gym.',
                })
            };
        }

        next();
    } catch(err) {
        return res.status(500).json({
            success: false,
            message: 'Internal server error',
        })
    }
}