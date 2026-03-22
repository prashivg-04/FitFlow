import { completeWorkoutService, getMemberScheduleService } from "../services/memberWorkout.service.js";

export const getMemberSchedule = async (req, res, next) => {
    const { userId } = req.user;

    const schedule = await getMemberScheduleService({ userId });

    return res.status(200).json({
        success: true,
        data: schedule,
        message: 'Member schedule retrieved successfully'
    });
}

export const completeWorkout = async (req, res, next) => {
    const { userId } = req.user;
    const { assignmentId } = req.body;

    const result = await completeWorkoutService({ userId, assignmentId });

    return res.status(200).json({
        success: true,
        message: result.message || 'Workout completed successfully'
    });
}