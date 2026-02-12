import { join } from "@prisma/client/runtime/client";
import prisma from "../prisma.js";

export const getJoinRequests = async (req, res) => {
    try {
        const { userId } = req.user;
        
        const owner = await prisma.owner.findUnique({
            where: { userId }
        });

        if(!owner) {
            return res.status(403).json({
                success: false,
                message: 'Owner profile not found'
            });
        }

        const joinRequests = await prisma.joinRequest.findMany({
            where: {
                ownerId: owner.id,
                status: 'PENDING'
            },
            include: {
                user: {
                    select: {
                        name: true,
                        email: true,
                    }
                }
            }
        });

        return res.status(200).json({
            success: true,
            data: joinRequests
        });
    } catch(err) {
        console.log('Fetch join requests error: ', err);
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
}

export const updateJoinRequestStatus = async (req, res) => {
    try {
        const { userId } = req.user;
        const { id } = req.params;
        const { action } = req.body; //Accept or Reject

        if(!action || !['ACCEPT', 'REJECT'].includes(action)) {
            return res.status(400).json({
                success: false,
                message: 'Invalid action' 
            });
        }

        const owner = await prisma.owner.findUnique({
            where: { userId }
        });
        if(!owner) {
            return res.status(403).json({
                success: false,
                message: 'Owner profile not found'
            });
        }

        const joinRequest = await prisma.joinRequest.findUnique({
            where: { id }
        });

        if(!joinRequest || joinRequest.ownerId !== owner.id) {
            return res.status(404).json({
                success: false,
                message: 'Join request not found'
            });
        }

        if(action == 'ACCEPT') {
            if(joinRequest.role === 'TRAINER') {
                await prisma.trainer.update({
                    where: { userId: joinRequest.userId },
                    data: {
                        gymStatus: 'ACTIVE',
                        ownerId: owner.id
                    }
                });
            }

            if(joinRequest.role === 'MEMBER') {
                await prisma.member.update({
                    where: { userId: joinRequest.userId },
                    data: {
                        gymStatus: 'ACTIVE',
                        ownerId: owner.id
                    }
                });
            }

            await prisma.joinRequest.update({
                where: { id },
                data: {
                    status: 'ACCEPTED'
                }
            })
        } else if(action == 'REJECT') {
            if(joinRequest.role === 'TRAINER') {
                await prisma.trainer.update({
                    where: { userId: joinRequest.userId },
                    data: {
                        gymStatus: 'NONE',
                        ownerId: owner.id
                    }
                });
            }

            if(joinRequest.role === 'MEMBER') {
                await prisma.member.update({
                    where: { userId: joinRequest.userId },
                    data: {
                        gymStatus: 'NONE',
                        ownerId: owner.id
                    }
                });
            }

            await prisma.joinRequest.update({
                where: { id },
                data: {
                    status: 'REJECTED'
                }
            })
        }

        return res.status(200).json({
            success: true,
            message: `Join request ${action.toLowerCase()}ed successfully`
        })
    } catch(err) {
        console.log('Update join request status error: ', err);
        return res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
}