import { getUnassignedMembersService , getTrainersService , assignTrainerService , unassignTrainerService  } from "../services/assignment.service.js";

export const getUnassignedMembers = async (req, res, next) => {
    const { userId } = req.user;
    const data = await getUnassignedMembersService({ userId });

    return res.status(200).json({
        success: true,
        data: data,
        message: "Unassigned members retrieved successfully"
    });
};

export const getTrainers = async (req, res, next) => {
    const { userId } = req.user;
    const data = await getTrainersService({ userId });

    return res.status(200).json({
        success: true,
        data: data,
        message: "Trainers retrieved successfully"
    });
};

export const assignTrainer = async (req, res, next) => {
    const { userId } = req.user;
    const { trainerId, memberId } = req.body;

    await assignTrainerService({ userId, trainerId, memberId });
    return res.status(200).json({
        success: true,
        message: "Trainer assigned to members successfully"
    });
};

export const unassignTrainer = async (req, res, next) => {
    const { userId } = req.user;
    const { memberId } = req.body;

    await unassignTrainerService({ userId, memberId });
    return res.status(200).json({
        success: true,
        message: "Trainer unassigned from members successfully"
    });
};

