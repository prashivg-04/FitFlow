import { assignProgramToMemberService } from "../services/workoutAssignment.service.js";

export const assignProgramToMember = async (req, res, next) => {
    const { userId } = req.user;
    const { memberId, programId, startDate } = req.body;

    const result = await assignProgramToMemberService({
        userId,
        memberId,
        programId,
        startDate,
    });

    return res.status(200).json({
        success: true,
        message: result.message || 'Program assigned to member successfully',
    });
}