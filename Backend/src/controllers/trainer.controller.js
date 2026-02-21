import { getMyMembersService } from "../services/trainer.service.js";

export const getMyMembers = async (req, res) => {
    try {
        const { userId } = req.user;
        const data = await getMyMembersService({ userId });
        
        return res.status(200).json({
            success: true,
            data: data,
            message: "Assigned members retrieved successfully"
        });
    } catch(err) {
        return res.status(500).json({
            success: false,
            message: err.message || "Failed to retrieve assigned members"
        });
    }
}