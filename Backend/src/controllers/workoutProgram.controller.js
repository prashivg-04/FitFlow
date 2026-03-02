import { use } from "react";
import { createWorkoutProgramService, getWorkoutProgramsService } from "../services/workoutProgram.service.js";


export const createWorkoutProgram = async (req, res) => {
    try {
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
    } catch(err) {
        console.error("Error creating workout program:", err);
        return res.status(400).json({
            success: false,
            message: err.message || "Failed to create workout program"
        });
    }
}

export const getWorkoutPrograms = async (req, res) => {
    try {
        const { userId } = req.user;

        const programs = await getWorkoutProgramsService({userId});

        return res.status(200).json({
            success: true,
            data: programs,
            message: "Workout programs retrieved successfully"
        });
    } catch(err) {
        console.error("Error retrieving workout programs:", err);
        return res.status(400).json({
            success: false,
            message: err.message || "Failed to retrieve workout programs"
        });
    }
}