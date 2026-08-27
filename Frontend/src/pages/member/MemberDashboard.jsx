import React, { useState, useEffect } from 'react'
import api from '../../api/axios'

const MemberDashboard = () => {
  const [gymInfo, setGymInfo] = useState(null);
  const [schedule, setSchedule] = useState([]);
  const [loading, setLoading] = useState(true);
  const [completing, setCompleting] = useState(false);

  const fetchDashboardData = async () => {
    try {
      const [gymRes, scheduleRes] = await Promise.all([
        api.get('/user/gym-info'),
        api.get('/member/schedule')
      ]);
      setGymInfo(gymRes.data.data);
      setSchedule(scheduleRes.data.data || []);
    } catch (err) {
      console.error("Failed to fetch member dashboard data", err);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchDashboardData();
  }, []);

  const handleCompleteWorkout = async (assignmentId) => {
    try {
      setCompleting(true);
      await api.post('/member/complete-workout', { assignmentId });
      await fetchDashboardData();
    } catch (error) {
      console.error("Failed to complete workout", error);
      alert(error.response?.data?.message || "Failed to complete workout");
    } finally {
      setCompleting(false);
    }
  };

  if (loading) {
    return (
      <div className='flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 flex items-center justify-center'>
        <div className='text-center text-[#61896f] mt-20'>
          <i className="ri-loader-4-line text-4xl animate-spin block mb-4"></i>
          <p className='font-medium'>Loading your dashboard...</p>
        </div>
      </div>
    );
  }

  const todaysWorkout = schedule[0];

  return (
    <div className='flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8'>
      
      {/* Page Heading */}
      <div className='flex flex-col items-start gap-1 sm:gap-2 mb-4'>
        <h1 className='text-3xl sm:text-4xl font-black tracking-tight'>
          Welcome back{gymInfo?.name ? `, ${gymInfo.name.split(' ')[0]}` : ''}! 👋
        </h1>
        <p className='text-[#61896f] text-sm sm:text-base leading-relaxed'>
          Ready to crush your goals today? Here is your gym and trainer information.
        </p>
      </div>

      <div className='grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8'>
        
        {/* Gym Card */}
        <div className='bg-linear-to-br from-slate-900 to-slate-800 p-6 sm:p-8 rounded-2xl shadow-xl text-white relative overflow-hidden group min-h-62.5 flex flex-col'>
          <div className='absolute -bottom-10 -right-10 p-4 opacity-10 group-hover:scale-110 transition-transform duration-500'>
            <i className='fa-solid fa-building text-[140px] rotate-[-10deg]'></i>
          </div>
          
          <div className='relative z-10 flex flex-col h-full flex-1'>
            <div className='flex items-start justify-between mb-8'>
              <div>
                <p className='text-xs font-bold text-slate-400 uppercase tracking-widest mb-1'>Official Gym Pass</p>
                <h2 className='text-3xl sm:text-4xl font-black text-white drop-shadow-md'>
                  {gymInfo?.gymName || 'FitFlow Gym'}
                </h2>
              </div>
              <div className='size-12 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-md'>
                <i className="fa-solid fa-dumbbell text-xl text-green-400"></i>
              </div>
            </div>
            
            <div className='mt-auto pt-8 border-t border-white/10 flex justify-between items-end'>
              <div>
                <p className='text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mb-0.5'>Gym Owner</p>
                <p className='text-base sm:text-lg font-bold text-slate-100'>
                  {gymInfo?.ownerName || 'Not available'}
                </p>
              </div>
              
              <div className='text-right'>
                <p className='text-[10px] sm:text-xs text-slate-400 uppercase tracking-wider mb-0.5'>Location</p>
                <p className='text-sm sm:text-base font-semibold text-slate-200 capitalize'>
                  {gymInfo?.city ? gymInfo.city : 'Local Area'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Trainer Card */}
        <div className='bg-linear-to-br from-[#15ec5b] to-[#0ea341] p-6 sm:p-8 rounded-2xl shadow-xl text-white relative overflow-hidden group min-h-62.5 flex flex-col'>
          <div className='absolute -top-10 -right-10 p-4 opacity-15 group-hover:rotate-12 transition-transform duration-500'>
            <i className='ri-medal-fill text-[140px]'></i>
          </div>

          <div className='relative z-10 flex flex-col h-full flex-1'>
            <div className='mb-8'>
              <p className='text-xs font-bold text-green-100 uppercase tracking-widest mb-1'>Your Personal Trainer</p>
              {gymInfo?.trainerName ? (
                <h2 className='text-3xl sm:text-4xl font-black text-white drop-shadow-md'>
                  {gymInfo.trainerName}
                </h2>
              ) : (
                <h2 className='text-2xl sm:text-3xl font-black text-white drop-shadow-md mt-2'>
                  No Trainer Assigned
                </h2>
              )}
            </div>

            <div className='mt-auto pt-8 border-t border-green-400/30 flex justify-between items-end'>
              {gymInfo?.trainerName ? (
                <>
                  <div>
                    <p className='text-[10px] sm:text-xs text-green-100 uppercase tracking-wider mb-0.5'>Specialization</p>
                    <p className='text-base sm:text-lg font-bold text-white capitalize'>
                      {gymInfo?.trainerSpecialization ? gymInfo.trainerSpecialization.replace(/_/g, ' ') : 'General Fitness'}
                    </p>
                  </div>
                  <div className='text-right'>
                    <p className='text-[10px] sm:text-xs text-green-100 uppercase tracking-wider mb-0.5'>Contact</p>
                    <p className='text-sm sm:text-base font-semibold text-white hover:underline flex items-center gap-1.5'>
                      {gymInfo?.trainerEmail} 
                    </p>
                  </div>
                </>
              ) : (
                <div className='w-full'>
                  <p className='text-sm font-medium text-green-50 bg-black/10 p-3 rounded-lg border border-white/10'>
                    Your gym owner hasn't assigned a trainer to you yet. Check back later!
                  </p>
                </div>
              )}
            </div>
          </div>
        </div>

      </div>

      {/* Today's Workout Section */}
      <div className='mt-8'>
        <h3 className='text-2xl font-bold mb-6'>Today's Mission</h3>
        
        {!todaysWorkout?.assignmentId ? (
          <div className='bg-white border border-[#dbe6df] rounded-2xl p-8 text-center shadow-sm'>
            <div className='w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4'>
              <i className="ri-cup-line text-2xl text-slate-400"></i>
            </div>
            <h4 className='text-xl font-bold text-slate-800 mb-2'>No Workout Assigned</h4>
            <p className='text-slate-500'>You don't have anything on the schedule for today. Take a breather or ask your trainer!</p>
          </div>
        ) : todaysWorkout.isRestDay ? (
          <div className='bg-white border border-[#dbe6df] rounded-2xl p-8 text-center shadow-sm'>
             <div className='w-16 h-16 bg-blue-50 rounded-full flex items-center justify-center mx-auto mb-4'>
              <i className="ri-zzz-line text-2xl text-blue-500"></i>
            </div>
            <h4 className='text-xl font-bold text-slate-800 mb-2'>Rest Day</h4>
            <p className='text-slate-500'>Today is officially a rest day. Let your muscles recover and come back stronger tomorrow.</p>
          </div>
        ) : (
          <div className='bg-white border border-[#dbe6df] rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row items-center gap-6 sm:gap-8'>
            <div className='w-24 h-24 bg-green-50 rounded-2xl flex items-center justify-center shrink-0'>
              <i className="fa-solid fa-fire text-4xl text-[#15ec5b]"></i>
            </div>
            
            <div className='flex-1 text-center sm:text-left'>
              <span className='inline-flex px-2.5 py-1 bg-slate-100 text-slate-600 font-bold text-xs rounded-md uppercase tracking-wide mb-2'>
                {todaysWorkout.exercises?.length || 0} Exercises
              </span>
              <h4 className='text-2xl font-black text-slate-800 mb-1'>{todaysWorkout.dayName || 'Daily Workout'}</h4>
              <p className='text-slate-500 text-sm'>
                {todaysWorkout.status === 'COMPLETED' 
                  ? "Awesome job! You've already smashed today's workout." 
                  : "You've got work to do. Hit the gym and complete your assigned routine."}
              </p>
            </div>

            <div className='w-full sm:w-auto mt-4 sm:mt-0'>
              {todaysWorkout.status === 'COMPLETED' ? (
                <div className='flex items-center justify-center gap-2 px-6 py-3 bg-green-50 border border-green-200 text-green-700 font-bold rounded-xl cursor-default'>
                  <i className="ri-checkbox-circle-fill text-xl"></i>
                  Completed
                </div>
              ) : (
                <button 
                  onClick={() => handleCompleteWorkout(todaysWorkout.assignmentId)}
                  disabled={completing}
                  className='w-full sm:w-auto flex items-center justify-center gap-2 px-8 py-3.5 bg-[#15ec5b] hover:bg-[#12d852] text-slate-900 font-black rounded-xl shadow-md shadow-[#15ec5b]/20 transition-all disabled:opacity-70'
                >
                  {completing ? (
                    <i className="ri-loader-4-line animate-spin text-xl"></i>
                  ) : (
                    <i className="ri-check-line text-xl"></i>
                  )}
                  Mark as Complete
                </button>
              )}
            </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default MemberDashboard
