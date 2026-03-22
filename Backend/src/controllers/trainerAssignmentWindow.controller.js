import { getTrainerAssignmentWindowService } from "../services/trainerAssignmentWindow.service.js";

export const getTrainerAssignmentWindow = async (req, res, next) => {
    const { userId } = req.user;
    const { memberId } = req.params;

    const window = await getTrainerAssignmentWindowService({ userId, memberId });

    return res.status(200).json({
        success: true,
        data: window,
        message: 'Trainer assignment window retrieved successfully'
    })
}