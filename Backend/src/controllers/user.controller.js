import { getGymInfoService } from "../services/user.service.js";

export const getGymInfo = async (req, res) => {
    const { userId, role } = req.user;

    const gymInfo = await getGymInfoService({ userId, role });

    return res.status(200).json({
        status: 'success',
        data: gymInfo,
    });
};