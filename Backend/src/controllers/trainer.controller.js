import { getMyMembersService } from "../services/trainer.service.js";

export const getMyMembers = async (req, res, next) => {
    const { userId } = req.user;
    const data = await getMyMembersService({ userId });
    
    return res.status(200).json({
        success: true,
        data: data,
        message: "Assigned members retrieved successfully"
    });
}