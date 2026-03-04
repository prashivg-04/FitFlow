import { getTrainerAssignmentWindowService } from "../services/trainerAssignmentWindow.service.js";


export const getTrainerAssignmentWindow = async (req, res) => {
    try {

        const { userId } = req.user;
        const { memberId } = req.params;

        const window = await getTrainerAssignmentWindowService({ userId, memberId });

        return res.status(200).json({
            success: true,
            data: window,
            message: 'Trainer assignment window retrieved successfully'
        })
    } catch(err) {
        console.error('Error in getTrainerAssignmentWindow:', err);
        return res.status(500).json({
            success: false,
            message: err.message || 'Failed to retrieve trainer assignment window'
        });
    }
}