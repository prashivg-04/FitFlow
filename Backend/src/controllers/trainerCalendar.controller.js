import { getTrainerMemberCalendarService } from '../services/trainerCalendar.service.js';

export const getTrainerMemberCalendar = async (req, res) => {
    try {

        const { userId } = req.user;
        const { memberId } = req.params;
        const { month } = req.query;

        if(!month) {
            return res.status(400).json({ 
                success: false,
                message: 'Month query parameter is required in YYYY-MM format'
            });
        }

        const calender = await getTrainerMemberCalendarService({ userId, memberId, month });

        return res.json({
            success: true,
            data: calender,
            message: 'Trainer member calendar fetched successfully'
        });
    } catch(err) {
        console.error('Error fetching trainer member calendar:', err);
        return res.status(500).json({
            success: false,
            message: err.message || 'An error occurred while fetching trainer member calendar'
        });
    }
}