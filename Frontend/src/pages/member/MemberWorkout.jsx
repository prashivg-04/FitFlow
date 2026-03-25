import React, { useState, useEffect } from 'react'
import gymImg from '../../media/gymSignup.jpeg'
import api from '../../api/axios'
import { toast } from 'sonner';
import { useSelector } from 'react-redux';

const MemberWorkout = () => {

  const [program, setProgram] = useState([]);

  const { loading } = useSelector((state) => state.auth);

  useEffect(() => {
    const fetchProgram = async () => {
      try {
        const res = await api.get('/member/schedule');
        setProgram(res.data.data);
        console.log("Program details:", res.data.data);
      } catch(err) {
        console.log("Error fetching program details:", err);
      }
    }

    fetchProgram();
  }, []);

  const handleMarkComplete = async () => {
    try {
      await api.post('/member/complete-workout', {
        assignmentId: acitveDay.assignmentId
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
    } catch(err) {
      console.log("Error marking workout as complete:", err);
    }
  }

  const [activeDayIndex, setactiveDayIndex] = useState(0);
  const acitveDay = program[activeDayIndex];

  const today = new Date().toLocaleDateString('en-CA');
  const isTodaySelected = acitveDay?.date === today;
  const isMarkCompleteDisabled = !isTodaySelected || acitveDay?.status === 'COMPLETED';

  return (
    <div className='flex-1 overflow-y-auto p-8 scroll-smooth'>
      <div className='max-w-7xl mx-auto space-y-8'>
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
        <div className='border-b border-gray-200 bg-white rounded-xl shadow-sm px-4 py-3'>
          <div className='-mb-px space-x-8 overflow-x-auto scrollbar-hide'>
            <div className='relative flex items-center justify-between min-w-max gap-2'>
              <div 
                className='absolute top-0 h-full w-30 rounded-lg bg-[#15ec5b]/10 border border-[#15ec5b]/20 transition-all duration-300 ease-in-out' 
                style={{
                  transform: `translateX(${activeDayIndex * 166.5}px)`
                }}
              />
              {program.map((day, idx) => {
                const isActive = activeDayIndex === idx;

                return (
                  <button 
                    key={idx}
                    onClick={() => setactiveDayIndex(idx)}
                    className={`relative z-10 flex flex-col items-center px-4 py-2 w-30 rounded-lg transition-all cursor-pointer`}
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
          {!acitveDay?.assignmentId ? (
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
            acitveDay?.isRestDay ? (
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
              <div className='grid grid-cols-3 gap-8 items-start'>
                {/* Left */}
                <div className='col-span-2 space-y-4'>
                  <div className='flex items-center justify-between'>
                    <h2 className='text-xl font-bold'>Workout Details</h2>
                    <span className='text-sm text-[#61896f] font-medium bg-[#f3f7f5] px-3 py-1 rounded-full'>
                      6 Exercises
                    </span>
                  </div>

                  <div className='space-y-3'>
                    {acitveDay?.exercises.map((exercise, idx) => (
                      <div className='bg-white rounded-xl border border-[#dbe6df] shadow-sm p-4 hover:shadow-md transition-all'>
                        <div className='flex gap-5'>
                          <img className='w-28 rounded-lg bg-gray-200 bg-cover bg-center shrink-0 object-cover' src={gymImg} alt="" />
                          <div className='flex-1 '>
                            <div className='flex items-start justify-between mb-2'>
                              <div className='flex items-center gap-3'>
                                <div className='bg-[#15ec5b]/15 text-[#15ec5b] text-sm font-bold px-3 py-1 rounded-lg'>
                                  A{idx + 1}
                                </div>
                                <div>
                                  <h3 className='text-lg font-bold text-slate-800'>{exercise.name}</h3>
                                </div>
                              </div>
                            </div>
                            <div className='grid grid-cols-3 gap-3 mt-3'>
                              <div className='bg-[#f7f8f6] rounded-lg p-3 text-center'>
                                <p className='text-[10px] text-[#61896f] font-semibold'>SETS</p>
                                <p className='font-bold text-lg'>{exercise.sets}</p>
                              </div>

                              <div className='bg-[#f7f8f6] rounded-lg p-3 text-center'>
                                <p className='text-[10px] text-[#61896f] font-semibold'>REPS</p>
                                <p className='font-bold text-lg'>{exercise.reps}</p>
                              </div>

                              <div className='bg-[#f7f8f6] rounded-lg p-3 text-center'>
                                <p className='text-[10px] text-[#61896f] font-semibold'>REST (in Seconds)</p>
                                <p className='font-bold text-lg'>{exercise.restSeconds}s</p>
                              </div>
                            </div>
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
                      <button className='w-full border border-[#dbe6df] bg-[#f7f8f6] py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all'>
                        Download Mobile View
                      </button>

                      <button 
                        onClick={handleMarkComplete}
                        disabled={isMarkCompleteDisabled || loading}
                        className={`w-full mt-4 py-3 rounded-lg font-bold transition-all ${
                          isMarkCompleteDisabled
                            ? 'bg-slate-200 text-slate-500 cursor-not-allowed'
                            : 'bg-[#15ec5b] hover:bg-green-500 text-black shadow'
                        }`}
                      >
                        {loading ? 'Marking as Complete...' : acitveDay?.status === 'COMPLETED' ? 'Workout Completed' : 'Mark Workout as Complete' }
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
