import { completeWorkoutService, getMemberScheduleService } from "../services/memberWorkout.service.js";

export const getMemberSchedule = async (req, res) => {
    try {
        const { userId } = req.user;

        const schedule = await getMemberScheduleService({ userId });

        return res.status(200).json({
            success: true,
            data: schedule,
            message: 'Member schedule retrieved successfully'
        });
    } catch(err) {
        console.error('Error in getMemberSchedule:', err);
        return res.status(500).json({
            success: false,
            message: err.message || 'Failed to retrieve member schedule'
        });
    }
}

export const completeWorkout = async (req, res) => {
    try {

        const { userId } = req.user;
        const { assignmentId } = req.body;

        if(!assignmentId) {
            return res.status(400).json({
                success: false,
                message: 'assignmentId is required'
            })
        };

        const result = await completeWorkoutService({ userId, assignmentId });

        return res.status(200).json({
            success: true,
            message: result.message || 'Workout completed successfully'
        });
    } catch(err) {
        console.error('Error in completeWorkout:', err);
        return res.status(500).json({
            success: false,
            message: err.message || 'Failed to complete workout'
        });
    }
}