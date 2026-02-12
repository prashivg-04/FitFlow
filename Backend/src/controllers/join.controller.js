import prisma from "../prisma.js";

export const createJoinRequest = async (req, res) => {
    try {
        const { userId, role } = req.user;
        const { gymCode } = req.body;

        if(!gymCode) {
            return res.status(400).json({ 
                success: false,
                message: 'Gym code is required' 
            });
        }

        if(role !== 'TRAINER' && role !== 'MEMBER') {
            return res.status(403).json({
                success: false,
                message: 'Only trainers and members can request to join'
            });
        }

        let currentProfile;

        if(role === 'TRAINER') {
            currentProfile = await prisma.trainer.findUnique({
                where: { userId }
            });
        }
        if(role === 'MEMBER') {
            currentProfile = await prisma.member.findUnique({
                where: { userId }
            });
        }

        if(!currentProfile) {
            return res.status(404).json({
                success: false,
                message: 'Profile not found'
            });
        }

        const owner = await prisma.owner.findUnique({
            where: {
                gymCode
            }
        });

        if(!owner) {
            return res.status(404).json({
                success: false,
                message: 'Invalid Gym Code'
            });
        }

        const existingRequest = await prisma.joinRequest.findUnique({
            where: {
                ownerId_userId: {
                    ownerId: owner.id,
                    userId,
                }
            }
        })

        if(existingRequest) {
            return res.status(400).json({
                success: false,
                message: 'You have already requested to join this gym.'      
            })
        }

        if(currentProfile.gymStatus !== 'NONE') {
            return res.status(400).json({
                success: false,
                message: 'You have already requested to join a gym or are part of a gym'
            });
        }

        await prisma.joinRequest.create({
            data: {
                ownerId: owner.id,
                userId,
                role
            }
        });

        if(role === 'TRAINER') {
            await prisma.trainer.update({
                where: { userId },
                data: { gymStatus: 'PENDING' }
            });
        }
        if(role === 'MEMBER') {
            await prisma.member.update({
                where: { userId },
                data: { gymStatus: 'PENDING' }
            });
        }

        return res.status(200).json({   
            success: true,
            message: 'Join request sent successfully'
        });
    } catch(err) {
        console.error('Error creating join request:', err);
        return res.status(500).json({
            success: false,
            message: 'Internal Server Error'
        });
    }
}