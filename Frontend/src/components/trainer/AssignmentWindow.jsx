import React, { useState, useEffect} from 'react'
import api from '../../api/axios'

const AssignmentWindow = ({member, program, onBack, onAssign}) => {

    const [assignmenetWindow, setAssignmenetWindow] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);

    useEffect(() => {
        const fetchWindow = async () => {
            try {
                const res = await api.get(`/trainer/member/${member.id}/assignment-window`);
                setAssignmenetWindow(res.data.data);
            } catch(err) {  
                console.error("Error fetching assignment window data: ", err);
            }
        }

        fetchWindow();
    }, []);

  return (
    <div className='mt-1 p-3 border border-[#dbe6df] rounded-lg bg-white'>
      <button
        onClick={onBack}
        className='text-sm text-[#61896f] mb-4 flex items-center gap-1'
      >
        <i class="ri-arrow-left-s-line text-[18px]"></i>
        Back
      </button>

      <h3 className='text-md font-bold mb-2'>
        Select Start Date for {program.title} for {member.user.name}
      </h3>

      <div className='text-sm text-gray-500 mb-4'>
        {program.days.length} days
      </div>

      <div className='grid grid-cols-7 gap-2'>
        {assignmenetWindow.map((day, idx) => {
            const isDisabled = day.status !== null;

            return (
                <button
                    key={idx}
                    disabled={isDisabled}
                    onClick={() => setSelectedDate(day.date)}
                    className={`
                        p-3 rounded-lg border border-[#dbe6df] flex flex-col items-center text-center gap-1 transition-all
                        ${isDisabled 
                            ? 'bg-gray-100 text-gray-400 cursor-not-allowed' 
                            : selectedDate === day.date 
                                ? 'bg-[#15ec5b] text-black border-[#15ec5b]'
                                : 'bg-white hover:bg-[#15ec5b]/50 cursor-pointer'
                        }
                    `}
                >
                    <div className='text-xs font-medium'>
                        {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
                    </div>
                    <div className='text-lg font-bold'>
                        {new Date(day.date).getDate()}
                    </div>

                    {isDisabled && (
                        <div className='text-[10px] mt-1'>Busy</div>
                    )}
                </button>
            )
        })}
      </div>

      <button
        disabled={!selectedDate}
        onClick={() => onAssign(selectedDate)}
        className='mt-6 w-full bg-[#15ec5b] py-3 rounded-lg font-bold disabled:opacity-50'
      >
        Assign Program
      </button>
    </div>
  )
}

export default AssignmentWindow
