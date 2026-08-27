import React, { useState, useEffect} from 'react'
import api from '../../api/axios'

import { useSelector } from 'react-redux';

const AssignmentWindow = ({member, program, onBack, onAssign}) => {

    const [assignmenetWindow, setAssignmenetWindow] = useState([]);
    const [selectedDate, setSelectedDate] = useState(null);

    const { loading } = useSelector((state) => state.auth);

    useEffect(() => {
        const fetchWindow = async () => {
            try {
                const res = await api.get(`/trainer/member/${member.id}/assignment-window`);
                setAssignmenetWindow(res.data.data);
            } catch(_) {  
            }
        }

        fetchWindow();
    }, [member.id]);

  return (
    <div className='animate-in fade-in slide-in-from-right-4 duration-300'>
      <button
        onClick={onBack}
        className='group text-sm font-bold text-slate-500 hover:text-slate-800 mb-4 flex items-center gap-1 transition-colors'
      >
        <i className="ri-arrow-left-line group-hover:-translate-x-1 transition-transform"></i>
        Back to Programs
      </button>

      <div className='bg-white rounded-xl border border-[#dbe6df] shadow-sm overflow-hidden mb-6'>
        <div className='p-4 border-b border-[#f0f4f2] bg-slate-50'>
          <h3 className='text-base font-bold text-slate-800'>
            {program.title}
          </h3>
          <p className='text-xs text-slate-500 mt-1 flex items-center gap-2'>
            <i className="ri-calendar-event-line"></i>
            {program.days.length} day program
          </p>
        </div>
        
        <div className='p-5'>
          <h4 className='text-sm font-bold text-slate-700 mb-3'>Select Start Date</h4>
          <div className='grid grid-cols-4 sm:grid-cols-7 gap-2'>
            {assignmenetWindow.map((day, idx) => {
                const isDisabled = day.status !== null;
                const isSelected = selectedDate === day.date;
                
                return (
                    <button
                        key={idx}
                        disabled={isDisabled}
                        onClick={() => setSelectedDate(day.date)}
                        className={`
                            p-2 sm:p-3 rounded-xl border flex flex-col items-center text-center gap-1 transition-all relative overflow-hidden
                            ${isDisabled 
                                ? 'bg-slate-50 border-slate-100 opacity-60 cursor-not-allowed' 
                                : isSelected 
                                    ? 'bg-[#15ec5b] border-[#15ec5b] shadow-md shadow-[#15ec5b]/20 scale-105 z-10'
                                    : 'bg-white border-[#dbe6df] hover:border-[#15ec5b]/50 hover:bg-[#15ec5b]/5 cursor-pointer'
                            }
                        `}
                    >
                        <div className={`text-[10px] sm:text-xs font-bold uppercase tracking-wider ${isSelected ? 'text-green-900' : isDisabled ? 'text-slate-400' : 'text-slate-500'}`}>
                            {new Date(day.date).toLocaleDateString('en-US', { weekday: 'short' })}
                        </div>
                        <div className={`text-base sm:text-lg font-black ${isSelected ? 'text-black' : isDisabled ? 'text-slate-400' : 'text-slate-800'}`}>
                            {new Date(day.date).getDate()}
                        </div>

                        {isDisabled && (
                            <div className='absolute inset-0 bg-white/50 backdrop-blur-[1px] flex items-center justify-center'>
                              <span className='text-[10px] font-bold text-slate-500 bg-white px-2 py-0.5 rounded shadow-sm border border-slate-100 transform -rotate-12'>Busy</span>
                            </div>
                        )}
                    </button>
                )
            })}
          </div>
        </div>
      </div>

      <button
        disabled={!selectedDate || loading}
        onClick={() => onAssign(selectedDate)}
        className='w-full flex items-center justify-center gap-2 px-5 py-3.5 bg-[#15ec5b] hover:bg-[#12d852] text-slate-900 text-base font-bold rounded-xl shadow-sm shadow-[#15ec5b]/20 transition-all disabled:opacity-50'
      >
        {loading ? (
          <i className="ri-loader-4-line animate-spin text-xl"></i>
        ) : (
          <i className="ri-calendar-check-line text-xl"></i>
        )}
        Assign Program to {member.user.name.split(' ')[0]}
      </button>
    </div>
  )
}

export default AssignmentWindow
