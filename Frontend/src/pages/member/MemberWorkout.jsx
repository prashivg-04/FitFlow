import React, { useState, useEffect, useRef } from 'react'
import gymImg from '../../media/gymSignup.jpeg'
import api from '../../api/axios'
import { toast } from 'sonner';
import { generateWorkoutPDF } from '../../utils/generateWorkoutPDF';

const MemberWorkout = () => {

  const [program, setProgram] = useState([]);
  const [isFetching, setIsFetching] = useState(true);
  const [completing, setCompleting] = useState(false);

  useEffect(() => {
    const fetchProgram = async () => {
      try {
        const res = await api.get('/member/schedule');
        setProgram(res.data.data);
      } catch (err) {
        console.error('Failed to fetch schedule:', err);
      } finally {
        setIsFetching(false);
      }
    }

    fetchProgram();
  }, []);

  const [activeDayIndex, setActiveDayIndex] = useState(0);
  const activeDay = program[activeDayIndex];

  const handleMarkComplete = async () => {
    if (!activeDay) return;
    try {
      setCompleting(true);
      await api.post('/member/complete-workout', {
        assignmentId: activeDay.assignmentId
      });
      toast.success('Workout marked as complete!');
      setProgram(prev => 
        prev.map((day, idx) => {
          if (idx === activeDayIndex) {
            return { 
              ...day, 
              status: 'COMPLETED' 
            };
          }
          return day;
        })
      )
    } catch (err) {
      console.error('Failed to mark complete:', err);
      toast.error('Failed to mark complete');
    } finally {
      setCompleting(false);
    }
  }


  const today = new Date().toLocaleDateString('en-CA');
  const isTodaySelected = activeDay?.date === today;
  const isMarkCompleteDisabled = !isTodaySelected || activeDay?.status === 'COMPLETED';

  const tabsRef = useRef([]);
  const [tabStyle, setTabStyle] = useState({ width: 0, left: 0 });

  useEffect(() => {
    const updateTabStyle = () => {
      const activeTab = tabsRef.current[activeDayIndex];
      if (activeTab) {
        setTabStyle({
          width: activeTab.offsetWidth,
          left: activeTab.offsetLeft,
        });
      }
    };
    
    // Timeout ensures DOM has rendered layout before we measure
    const timeoutId = setTimeout(updateTabStyle, 10);
    window.addEventListener('resize', updateTabStyle);
    
    return () => {
      clearTimeout(timeoutId);
      window.removeEventListener('resize', updateTabStyle);
    };
  }, [activeDayIndex, program]);

  if (isFetching) {
    return (
      <div className='flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 flex items-center justify-center'>
        <div className='text-center text-[#61896f] mt-20'>
          <i className="ri-loader-4-line text-4xl animate-spin block mb-4"></i>
          <p className='font-medium'>Loading your schedule...</p>
        </div>
      </div>
    );
  }

  return (
    <div className='flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 scroll-smooth'>
      <div className='max-w-7xl mx-auto space-y-6 sm:space-y-8'>
        {/* Page Top */}
        <div className='flex flex-col gap-6'>
          {/* Heading */}
          <div className='flex items-center justify-between gap-4'>
            <div className='flex flex-col items-start'>
              <h1 className='text-4xl font-bold tracking-tight'>Current Routine</h1>
              <p className='text-[#61896f] text-lg mt-1'>Track your progress and stick to the plan.</p>
            </div>
          </div>
        </div>
        
        {/* Day Tabs */}
        <div className='border-b border-gray-200 bg-white rounded-xl shadow-sm px-4 pt-3 pb-2'>
          <div className='overflow-x-auto pb-2 [&::-webkit-scrollbar]:h-1.5 [&::-webkit-scrollbar]:block [&::-webkit-scrollbar-track]:bg-gray-50 [&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-thumb]:bg-gray-300 [&::-webkit-scrollbar-thumb]:rounded-full'>
            <div className='relative flex items-center min-w-max gap-2 sm:gap-4'>
              <div 
                className='absolute top-0 h-full rounded-lg bg-[#15ec5b]/10 border border-[#15ec5b]/20 transition-all duration-300 ease-in-out' 
                style={{
                  width: `${tabStyle.width}px`,
                  transform: `translateX(${tabStyle.left}px)`
                }}
              />
              {program.map((day, idx) => {
                const isActive = activeDayIndex === idx;

                return (
                  <button 
                    key={idx}
                    ref={el => tabsRef.current[idx] = el}
                    onClick={() => setActiveDayIndex(idx)}
                    className={`relative z-10 flex flex-col items-center px-4 py-2 min-w-30 rounded-lg transition-all cursor-pointer`}
                  >
                    <span 
                      className={`text-xs font-semibold ${isActive ? 'text-[#15ec5b]' : 'text-slate-500'}`}
                    >
                      {new Date(day.date).toLocaleDateString('en-GB')}
                    </span>
                    <span 
                      className={`text-sm font-bold ${isActive ? 'text-[#15ec5b]' : 'text-slate-700'}`}
                    >
                      {day.dayName || 'Yet to be Assigned'}
                    </span>
                  </button>
                )
              })}
            </div>
          </div>
        </div>

        {/* Exercises and Notes */}
        <div className=''>
          {!activeDay?.assignmentId ? (
            <div className='bg-white rounded-xl border border-[#dbe6df] shadow-sm p-10 flex flex-col items-center justify-center text-center'>
              <div className='w-14 h-14 rounded-full bg-slate-100 flex items-center justify-center mb-4'>
                <i className='ri-calendar-schedule-line text-2xl text-slate-500'></i>
              </div>
              <h3 className='text-xl font-bold text-slate-800'>No workout assigned</h3>
              <p className='text-sm text-[#61896f] mt-2 max-w-md'>
                Your trainer has not assigned any workout for this day yet.
              </p>
            </div>
          ) : (
            activeDay?.isRestDay ? (
              <div className='bg-white rounded-xl border border-[#dbe6df] shadow-sm p-10 flex flex-col items-center justify-center text-center'>
                <div className='w-14 h-14 rounded-full bg-[#15ec5b]/10 flex items-center justify-center mb-4'>
                  <i className='ri-hotel-bed-line text-2xl text-[#15ec5b]'></i>
                </div>
                <h3 className='text-xl font-bold text-slate-800'>Rest Day</h3>
                <p className='text-sm text-[#61896f] mt-2 max-w-md'>
                  Today is for recovery. Rest well and get ready for your next session.
                </p>
              </div>
            ) : (
              <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8'>
                {/* Left */}
                <div className='col-span-1 lg:col-span-2 space-y-6'>
                  <div className='flex items-center justify-between'>
                    <h2 className='text-xl font-bold'>Workout Details</h2>
                    <span className='text-sm text-[#61896f] font-medium bg-[#f3f7f5] px-3 py-1 rounded-full'>
                      {activeDay?.exercises.length || 0} Exercises
                    </span>
                  </div>

                  <div className='space-y-4'>
                    {activeDay?.exercises.map((exercise, idx) => (
                      <div key={idx} className='bg-white rounded-2xl border border-[#dbe6df] shadow-sm p-5 hover:shadow-md hover:border-[#15ec5b]/50 transition-all flex flex-col sm:flex-row items-start sm:items-center justify-between gap-5 group'>
                        <div className='flex items-center gap-4 w-full sm:w-auto flex-1 min-w-0'>
                          <div className='size-14 rounded-xl bg-linear-to-br from-[#15ec5b]/10 to-[#0ea341]/10 flex flex-col items-center justify-center shrink-0 border border-[#15ec5b]/20 group-hover:scale-105 transition-transform'>
                            <span className='text-[10px] font-bold text-[#61896f] leading-none mb-1'>EX</span>
                            <span className='text-lg font-black text-[#0ea341] leading-none'>{idx + 1}</span>
                          </div>
                          <div className='flex-1 min-w-0'>
                            <h3 className='text-lg font-bold text-slate-800 leading-tight'>{exercise.name}</h3>
                            <div className='flex items-center gap-2 mt-1.5'>
                              <span className='inline-flex items-center gap-1 text-xs text-slate-500 bg-slate-50 px-2 py-0.5 rounded border border-slate-100'>
                                <i className="fa-solid fa-dumbbell text-[10px]"></i>
                                Exercise {idx + 1} of {activeDay.exercises.length}
                              </span>
                            </div>
                          </div>
                        </div>
                        
                        <div className='grid grid-cols-3 gap-2 w-full sm:w-70 md:w-[320px] shrink-0'>
                          <div className='flex flex-col items-center justify-center bg-[#f7f8f6] border border-[#eef2f0] rounded-xl px-2 py-3'>
                            <span className='text-[9px] text-[#61896f] font-bold uppercase tracking-widest mb-1'>Sets</span>
                            <span className='text-base sm:text-lg font-black text-slate-800 text-center leading-tight'>{exercise.sets}</span>
                          </div>
                          <div className='flex flex-col items-center justify-center bg-[#f7f8f6] border border-[#eef2f0] rounded-xl px-2 py-3'>
                            <span className='text-[9px] text-[#61896f] font-bold uppercase tracking-widest mb-1'>Reps</span>
                            <span className='text-base sm:text-lg font-black text-slate-800 text-center leading-tight'>{exercise.reps}</span>
                          </div>
                          <div className='flex flex-col items-center justify-center bg-[#f7f8f6] border border-[#eef2f0] rounded-xl px-2 py-3'>
                            <span className='text-[9px] text-[#61896f] font-bold uppercase tracking-widest mb-1'>Rest</span>
                            <span className='text-base sm:text-lg font-black text-slate-800 text-center leading-tight'>{exercise.restSeconds}s</span>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Right */}
                <div className='col-span-1 space-y-6'>
                  <div className='bg-white rounded-xl border border-[#dbe6df] p-5 shadow-sm sticky top-24'>
                    {/* CTA Action buttons */}
                    <h3 className='text-lg font-bold mb-4'>Take Actions</h3>
                    <div className='flex flex-col'>
                      <button 
                        onClick={() => generateWorkoutPDF(activeDay)}
                        className='w-full border border-[#dbe6df] bg-[#f7f8f6] py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all'
                      >
                        Download Mobile View
                      </button>

                      <button 
                        onClick={handleMarkComplete}
                        disabled={isMarkCompleteDisabled || completing}
                        className={`w-full mt-4 py-3 rounded-lg font-bold transition-all ${
                          isMarkCompleteDisabled
                            ? 'bg-slate-200 text-slate-500 cursor-not-allowed'
                            : 'bg-[#15ec5b] hover:bg-green-500 text-black shadow'
                        }`}
                      >
                        {completing ? 'Marking as Complete...' : activeDay?.status === 'COMPLETED' ? 'Workout Completed' : 'Mark Workout as Complete' }
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  )
}

export default MemberWorkout
