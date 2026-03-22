import { getJoinRequestsService, updateJoinRequestStatusService } from "../services/join.service.js";

export const getJoinRequests = async (req, res, next) => {
    const { userId } = req.user;
    
    const joinRequest = await getJoinRequestsService(userId);

    return res.status(200).json({
        success: true,
        data: joinRequest
    });
}

export const updateJoinRequestStatus = async (req, res, next) => {
    const { userId } = req.user;
    const { id } = req.params;
    const { action } = req.body; 

    const result = await updateJoinRequestStatusService({ userId, id, action });
    
    return res.status(200).json({
        success: true,
        message: result.message
    });
}