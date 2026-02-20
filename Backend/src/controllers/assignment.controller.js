import { getUnassignedMembersService , getTrainersService , assignTrainerService , unassignTrainerService  } from "../services/assignment.service.js";

export const getUnassignedMembers = async (req, res) => {
    try {
        const { userId } = req.user;
        const data = await getUnassignedMembersService({ userId });

        return res.status(200).json({
            success: true,
            data: data,
            message: "Unassigned members retrieved successfully"
        });
    } catch(err) {
        return res.status(500).json({
            success: false,
            message: err.message || "Failed to retrieve unassigned members"
        });
    }
};

export const getTrainers = async (req, res) => {
    try {
        const { userId } = req.user;
        const data = await getTrainersService({ userId });

        return res.status(200).json({
            success: true,
            data: data,
            message: "Trainers retrieved successfully"
        });
    } catch(err) {
        return res.status(500).json({
            success: false,
            message: err.message || "Failed to retrieve trainers"
        });
    }
};

export const assignTrainer = async (req, res) => {
    try {
        const { userId } = req.user;
        const { trainerId, memberId } = req.body;

        await assignTrainerService({ userId, trainerId, memberId });
        return res.status(200).json({
            success: true,
            message: "Trainer assigned to members successfully"
        });
    } catch(err) {
        return res.status(500).json({
            success: false,
            message: err.message || "Failed to assign trainer to members"
        });
    }
};

export const unassignTrainer = async (req, res) => {
    try {
        const { userId } = req.user;
        const { memberId } = req.body;

        await unassignTrainerService({ userId, memberId });
        return res.status(200).json({
            success: true,
            message: "Trainer unassigned from members successfully"
        });
    } catch(err) {
        return res.status(500).json({
            success: false,
            message: err.message || "Failed to unassign trainer from members"
        });
    }
};

