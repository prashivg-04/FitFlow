import { getTrainerMemberCalendarService } from '../services/trainerCalendar.service.js';

export const getTrainerMemberCalendar = async (req, res, next) => {
    const { userId } = req.user;
    const { memberId } = req.params;
    const { month } = req.query;

    const calender = await getTrainerMemberCalendarService({ userId, memberId, month });

    return res.status(200).json({
        success: true,
        data: calender,
        message: 'Trainer member calendar fetched successfully'
    });
}