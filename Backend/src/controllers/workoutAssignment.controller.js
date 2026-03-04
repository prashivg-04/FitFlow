import { assignProgramToMemberService } from "../services/workoutAssignment.service.js";


export const assignProgramToMember = async (req, res) => {
    try {
        const { userId } = req.user;
        const { memberId, programId, startDate } = req.body;

        if(!memberId || !programId || !startDate) {
            return res.status(400).json({
                success: false,
                message: 'Missing required fields: memberId, programId, startDate',
            });
        }

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

    } catch (err) {
        console.error('Error assigning program to member:', err);
        res.status(500).json({
            success: false,
            message: err.message || 'Failed to assign program to member',
        });
    }
}