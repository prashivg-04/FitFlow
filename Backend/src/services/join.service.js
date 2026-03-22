import AppError from '../utils/AppError.js';
import prisma from '../prisma.js';

export const createJoinRequestService = async ({ userId, role, gymCode }) => {

    if (!gymCode) {
        throw new AppError('Gym code is required', 400);
    }

    if (role !== 'TRAINER' && role !== 'MEMBER') {
        throw new AppError('Only trainers and members can request to join', 403);
    }

    let currentProfile;

    if (role === 'TRAINER') {
        currentProfile = await prisma.trainer.findUnique({
            where: { userId }
        });
    }

    if (role === 'MEMBER') {
        currentProfile = await prisma.member.findUnique({
            where: { userId }
        });
    }

    if (!currentProfile) {
        throw new AppError('Profile not found', 404);
    }

    const owner = await prisma.owner.findUnique({
        where: { gymCode }
    });

    if (!owner) {
        throw new AppError('Invalid Gym Code', 404);
    }

    const existingRequest = await prisma.joinRequest.findUnique({
        where: {
            ownerId_userId: {
                ownerId: owner.id,
                userId,
            }
        }
    });

    if (existingRequest) {
        throw new AppError('You have already requested to join this gym.', 409);
    }

    if (currentProfile.gymStatus !== 'NONE') {
        throw new AppError(
            'You have already requested to join a gym or are part of a gym',
            400
        );
    }

    await prisma.joinRequest.create({
        data: {
            ownerId: owner.id,
            userId,
            role
        }
    });

    if (role === 'TRAINER') {
        await prisma.trainer.update({
            where: { userId },
            data: { gymStatus: 'PENDING' }
        });
    }

    if (role === 'MEMBER') {
        await prisma.member.update({
            where: { userId },
            data: { gymStatus: 'PENDING' }
        });
    }

    return { message: 'Join request sent successfully' };
};

export const getJoinRequestsService = async (userId) => {

    const owner = await prisma.owner.findUnique({
        where: { userId }
    });

    if (!owner) {
        throw new AppError('Owner profile not found', 403);
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

    return joinRequests;
};

export const updateJoinRequestStatusService = async ({ userId, id, action }) => {

    if (!action || !['ACCEPT', 'REJECT'].includes(action)) {
        throw new AppError('Invalid action', 400);
    }

    const owner = await prisma.owner.findUnique({
        where: { userId }
    });

    if (!owner) {
        throw new AppError('Owner profile not found', 403);
    }

    const joinRequest = await prisma.joinRequest.findUnique({
        where: { id }
    });

    if (!joinRequest || joinRequest.ownerId !== owner.id) {
        throw new AppError('Join request not found', 404);
    }

    if (action === 'ACCEPT') {

        if (joinRequest.role === 'TRAINER') {
            await prisma.trainer.update({
                where: { userId: joinRequest.userId },
                data: {
                    gymStatus: 'ACTIVE',
                    ownerId: owner.id
                }
            });
        }

        if (joinRequest.role === 'MEMBER') {
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
            data: { status: 'ACCEPTED' }
        });

    } else {

        if (joinRequest.role === 'TRAINER') {
            await prisma.trainer.update({
                where: { userId: joinRequest.userId },
                data: {
                    gymStatus: 'NONE',
                    ownerId: owner.id
                }
            });
        }

        if (joinRequest.role === 'MEMBER') {
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
            data: { status: 'REJECTED' }
        });
    }

    return {
        message: `Join request ${action.toLowerCase()}ed successfully`
    };
};