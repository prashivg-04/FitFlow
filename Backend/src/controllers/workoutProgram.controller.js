import { createWorkoutProgramService, getWorkoutProgramsService } from "../services/workoutProgram.service.js";

export const createWorkoutProgram = async (req, res, next) => {
    const { userId } = req.user;
    
    const program = await createWorkoutProgramService({
        userId,
        data: req.body
    });

    return res.status(201).json({
        success: true,
        data: program,
        message: "Workout program created successfully"
    });
}

export const getWorkoutPrograms = async (req, res, next) => {
    const { userId } = req.user;

    const programs = await getWorkoutProgramsService({userId});

    return res.status(200).json({
        success: true,
        data: programs,
        message: "Workout programs retrieved successfully"
    });
}