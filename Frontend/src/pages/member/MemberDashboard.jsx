import React from 'react'
import gymImg from '../../media/gymSignup.jpeg'
import trainerDp from '../../media/T.png'
import ComingSoonWrapper from '../../components/ComingSoonWrapper'

const MemberDashboard = () => {

  return (
    <ComingSoonWrapper>
    <div className='flex-1 overflow-y-auto p-8 scroll-smooth'>
      <div className='max-w-7xl mx-auto space-y-8'>
        {/* Heading */}
        <div className='flex items-center justify-between gap-4'>
          <div className='flex flex-col items-start'>
            <h1 className='text-4xl font-bold tracking-tight'>Welcome back, Alex! 👋</h1>
            <p className='text-[#61896f] text-lg mt-1'>Let's crush today's goals. You're on a roll!</p>
          </div>
          <div className='flex items-center gap-2'>
            <button className='flex items-center gap-2 px-4 py-2 bg-white border border-[#dbe6df] rounded-xl text-sm font-semibold hover:bg-slate-50'>
              <i className='ri-add-line'></i>
              Log Activity
            </button>
          </div>
        </div>

        {/* Dashboard Grid */}
        <div className='grid grid-cols-3 gap-6'>
          {/* Left */}
          <div className='col-span-2 space-y-6'>
            {/* Today's Mission */}
            <div className='bg-white rounded-2xl p-4 shadow-sm border border-[#dbe6df] group hover:shadow-md transition-shadow'>
              <div className='flex gap-6'>
                <div className='w-1/3 relative rounded-xl bg-gray-100 '>
                  <img className='w-full h-full object-cover bg-cover bg-center rounded-xl ' src={gymImg} alt="Gym" />
                  <div className='absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors rounded-xl'></div>
                  <div className='absolute top-2 left-2 bg-black/60 backdrop-blur-sm text-white px-2 py-1 text-xs font-bold uppercase tracking-wide rounded'>Recommended</div>
                </div>

                <div className='flex-1 flex flex-col justify-center items-start py-2'>
                  <div className='flex items-center gap-2 mb-2'>
                    <span className='inline-flex px-2 py-1 bg-green-100 text-green-700 border border-green-200 text-xs font-semibold rounded-md '>Leg Day</span>
                    <span className='text-slate-500 text-xs font-medium'>• 60 min</span>
                  </div>
                  <h3 className='text-xl font-bold mb-2'>Lower Body Hypertrophy</h3>
                  <p className='text-[#61896f] text-sm mb-6 line-clamp-2'>Focus on controlled eccentric movements for squats today. Keep your core tight and drive through your heels.</p>
                  <div className='flex items-center gap-4 mt-auto'>
                    <button className='bg-[#15ec5b] hover:bg-[#0fd651] px-5 py-2.5 rounded-lg text-sm font-bold shadow-lg shadow-green-500/20 transition-all flex items-center gap-2'>
                      <i className='ri-play-line text-[18px]'></i>
                      Start Workout
                    </button>
                    <div className='flex flex-col items-start gap-1'>
                      <span className='text-[12px] font-semibold text-slate-400 uppercase tracking-wide'>Intensity</span>
                      <div className='flex gap-0.5'>
                        <div className='w-4 h-1.5 bg-red-500 rounded-full'></div>
                        <div className='w-4 h-1.5 bg-red-500 rounded-full'></div>
                        <div className='w-4 h-1.5 bg-red-500/30 rounded-full'></div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Trainer's Note */}
            <div className='bg-blue-50 border border-blue-100 rounded-2xl p-6'>
              <div className='flex  gap-4'>
                <div className='relative'>
                  <img className='size-12 rounded-full bg-cover bg-center border-2 border-white shadow-sm object-cover' src={trainerDp} alt="" />
                  <div className='absolute bottom-11 -right-1 w-5 h-5 flex items-center justify-center  bg-blue-500 text-white rounded-full p-0.5 border-2 border-white'>
                    <i className="ri-message-2-line text-[10px] block"></i>
                  </div>
                </div>

                <div className='flex-1'>
                  <div className='flex items-center justify-between mb-1'>
                    <h4 className='text-sm font-bold'>Coach Mike</h4>
                    <span className='text-xs text-slate-500'>2 hrs ago</span>
                  </div>
                  <div className='bg-white p-3 rounded-lg rounded-tl-none shadow-sm border border-blue-100 inline-block'>
                    <p className='text-sm text-slate-700 leading-relaxed'>
                      Hey Alex! Great form on squats last week. Let's aim for
                      <span className='font-semibold text-blue-600'> 5lbs heavier </span>
                      today. Don't forget to stretch those hamstrings afterwards! 💪
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Schedule */}
            <div className='bg-white rounded-2xl p-6 shadow-sm border border-[#dbe6df]'>
              <div className='flex items-center justify-between mb-6'>
                <h3 className='text-lg font-bold'>Upcoming Schedule</h3>
                <a className='text-sm font-medium text-[#15ec5b] hover:text-[#0fd651] transition-colors' href="">View Calendar</a>
              </div>

              <div className='space-y-4'>
                <div className='flex items-center p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 '>
                  <div className='shrink-0 w-24 h-14 bg-slate-100 rounded-lg flex flex-col items-center justify-center text-center'>
                    <span className='text-xs font-bold text-slate-500 uppercase'>Tomorrow</span>
                    <span className='text-lg font-bold leading-none'>10</span>
                  </div>
                  <div className='ml-10 flex-1'>
                    <h4 className='text-sm font-bold'>Vinyasa Yoga Flow</h4>
                    <p className='text-xs text-slate-500 mt-0.5'>Studio A • with Sarah J.</p>
                  </div>
                  <div className='ml-4'>
                    <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-600 border border-green-100 '>Booked</span>
                  </div>
                </div>

                <div className='flex items-center p-3 rounded-xl hover:bg-slate-50 border border-transparent hover:border-slate-100 '>
                  <div className='shrink-0 w-24 h-14 bg-slate-100 rounded-lg flex flex-col items-center justify-center text-center'>
                    <span className='text-xs font-bold text-slate-500 uppercase'>Friday</span>
                    <span className='text-lg font-bold leading-none'>17</span>
                  </div>
                  <div className='ml-14 flex-1'>
                    <h4 className='text-sm font-bold'>HIIT Bootcamp</h4>
                    <p className='text-xs text-slate-500 mt-0.5'>Outdoor Area • with Coach Mike</p>
                  </div>
                  <div className='ml-4'>
                    <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-50 text-green-600 border border-green-100 '>Booked</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className='space-y-6'>
            {/* Streak Card */}
            <div className='bg-slate-900 rounded-2xl p-6 shadow-lg text-white relative overflow-hidden'>
              <div className='absolute top-0 right-0 -mt-4 -mr-4 w-24 h-24 bg-[#15ec5b]/40 rounded-full blur-2xl'></div>
              <div className='relative z-10 flex flex-col items-center text-center'>
                <div className='w-20 h-20 rounded-full border-4 border-[#15ec5b]/30 flex items-center justify-center relative'>
                  <i className="ri-fire-fill text-4xl text-[#15ec5b]"></i>
                  <svg className='absolute inset-0 w-full h-full -rotate-90 transform' viewBox='0 0 36 36'>
                    <path class='text-transparent' d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831' fill='none' stroke='currentColor' stroke-dasharray='100, 100' stroke-width='2'></path>
                    <path class='text-[#15ec5b]' d='M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831' fill='none' stroke='currentColor' stroke-dasharray='75, 100' stroke-width='2'></path>
                  </svg>
                </div>
                <h3 className='text-3xl font-bold mt-4 mb-1'>12 Days</h3>
                <p className='text-slate-400 text-sm font-medium uppercase tracking-wider'>Current Streak</p>
                <div className='mt-4 bg-white/20 rounded-lg px-3 py-1.5 text-xs font-medium text-green-400'>+2 days vs last month</div>
              </div>
            </div>

            {/* Personal Best */}
            <div className='bg-white rounded-2xl p-6 shadow-sm border border-[#dbe6df]'>
              <div className='flex items-center gap-3 mb-4'>
                <div className='p-2 bg-yellow-100 rounded-lg text-yellow-600'>
                  <i className="fa-solid fa-trophy text-[20px]"></i>
                </div>
                <h3 className='text-lg font-bold'>New Record!</h3>
              </div>
              <div className='flex items-end gap-1 mb-2'>
                <span className='text-3xl font-bold tracking-tight'>185</span>
                <span className='text-sm font-medium text-slate-400 pb-1'>lbs</span>
              </div>
              <p className='text-md text-slate-600 '>Bench Press (1RM)</p>
              <div className='mt-4 w-full h-1.5 bg-slate-200 rounded-full overflow-hidden'>
                <div className='h-full rounded-full bg-[#15ec5b] w-[92%]'></div>
              </div>
              <p className='text-xs text-slate-400 mt-1 text-right'>Goal: 200 lbs</p>
            </div>

            {/* Monthly Stats */}
            <div className='bg-white rounded-2xl p-6 shadow-sm border border-[#dbe6df]'>
              <h3 className='text-lg font-bold mb-4'>This Month</h3>
              <div className='space-y-4'>
                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-3 '>
                    <i className='fa-solid fa-dumbbell text-slate-400 text-[18px]'></i>
                    <span className='text-md text-slate-600'>Workouts</span>
                  </div>
                  <span className='font-bold'>14</span>
                </div>

                <div className='w-full h-px bg-slate-100'></div>

                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-3 '>
                    <i className='fa-regular fa-clock text-slate-400 text-[18px]'></i>
                    <span className='text-md text-slate-600'>Hours</span>
                  </div>
                  <span className='font-bold'>18.5</span>
                </div>

                <div className='w-full h-px bg-slate-100'></div>

                <div className='flex items-center justify-between'>
                  <div className='flex items-center gap-3 '>
                    <i className='fa-solid fa-weight-scale text-slate-400 text-[18px]'></i>
                    <span className='text-md text-slate-600'>Weight</span>
                  </div>
                  <div className='flex flex-col items-end text-right'>
                    <span className='font-bold'>172</span>
                    <span className='text-[12px] text-green-500 font-medium'>-1.2 lbs</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Announcement */}
            <div className='bg-linear-to-br from-purple-600 to-indigo-600 rounded-2xl p-6 shadow-sm text-white'>
              <div className='flex items-center justify-between'>
                <span className='bg-white/20 px-2 py-0.5 rounded text-sm font-medium backdrop-blur-sm'>Info</span>
                <button className='text-white/60 hover:text-white'>
                  <i className='ri-close-line text-[20px]'></i>
                </button>
              </div>
              <h4 className='text-lg font-bold mt-3 mb-1'>Holiday Hours</h4>
              <p className='text-white/80 text-sm leading-relaxed'>We will be closing early at 4 PM this Friday for staff training. Plan your workout accordingly!</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </ComingSoonWrapper>
  )
}

export default MemberDashboard
