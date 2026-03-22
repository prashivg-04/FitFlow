import { createJoinRequestService } from "../services/join.service.js";

export const createJoinRequest = async (req, res, next) => {
    const { userId, role } = req.user;
    const { gymCode } = req.body;

    const result = await createJoinRequestService({
        userId,
        role,
        gymCode
    });

    return res.status(200).json({
        success: true,
        message: result.message
    });
};