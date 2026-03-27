import React from 'react'
import navjot from '../../media/navjotImg.jpeg'
import ComingSoonWrapper from '../../components/ComingSoonWrapper'

const MemberAttendance = () => {
  return (
    <ComingSoonWrapper>
    <div className='flex-1 overflow-y-auto p-8 scroll-smooth'>
      <div className='max-w-7xl mx-auto space-y-8'>
        {/* Heading */}
        <div className='flex items-center justify-between gap-4'>
          <div className='flex flex-col items-start'>
            <h1 className='text-4xl font-bold tracking-tight'>Attendance History</h1>
            <p className='text-[#61896f] text-lg mt-1'>Track your consistency and keep the streak alive.</p>
          </div>
          <div className='flex items-end gap-2'>
            <button className='flex items-center gap-2 px-4 py-2 bg-white border border-[#dbe6df] rounded-xl text-sm font-semibold hover:bg-slate-50'>
              <i className='fa-solid fa-download text-[20px]'></i>
              Export Report
            </button>

            <button className='flex items-center gap-2 px-4 py-2 bg-[#15ec5b] rounded-xl text-sm font-semibold hover:bg-[#0fd651]'>
              <i className='ri-add-line text-[18px]'></i>
              Log Workout
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className='grid grid-cols-4 gap-4'>
          <div className='bg-white rounded-xl p-6 border border-[#dbe6df] shadow-sm hover:shadow-md transition-shadow relative group flex flex-col gap-1 overflow-hidden'>
            <div className='absolute -right-4 -top-4 opacity-5 group-hover:scale-110 transition-transform duration-500'>
              <i className='fa-solid fa-dumbbell text-[100px]'></i>
            </div>
            <p className='text-[#61896f] text-sm font-medium'>Total Workouts</p>
            <div className='flex items-baseline gap-2 mt-1'>
              <span className='text-3xl font-bold'>124</span>
              <span className='text-xs font-medium bg-green-50 text-green-600 px-1.5 py-0.5 rounded-full flex items-center gap-1'>
                <i className='fa-solid fa-arrow-trend-up'></i>
                2%
              </span>
            </div>
          </div>

          <div className='bg-white rounded-xl p-6 border border-[#dbe6df] shadow-sm hover:shadow-md transition-shadow relative group flex flex-col gap-1 overflow-hidden'>
            <div className='absolute -right-8 -top-5 opacity-5 group-hover:scale-110 transition-transform duration-500'>
              <i className='fa-solid fa-fire text-[100px]'></i>
            </div>
            <p className='text-[#61896f] text-sm font-medium'>Current Streak</p>
            <div className='flex items-baseline gap-2 mt-1'>
              <span className='text-3xl font-bold'>5 Days</span>
              <span className='text-xs font-medium bg-orange-50 text-orange-600 px-1.5 py-0.5 rounded-full flex items-center gap-1'>
                <i className='fa-solid fa-fire'></i>
                On Fire
              </span>
            </div>
          </div>

          <div className='bg-white rounded-xl p-6 border border-[#dbe6df] shadow-sm hover:shadow-md transition-shadow relative group flex flex-col gap-1 overflow-hidden'>
            <div className='absolute -right-4 -top-4 opacity-5 group-hover:scale-110 transition-transform duration-500'>
              <i className='fa-solid fa-calendar-days text-[100px]'></i>
            </div>
            <p className='text-[#61896f] text-sm font-medium'>This Month</p>
            <div className='flex items-baseline gap-1 mt-1'>
              <span className='text-3xl font-bold'>12</span>
              <span className='text-xs font-semibold text-gray-500 px-1.5 py-0.5 rounded-full flex items-center gap-1'>
                Visits
              </span>
            </div>
          </div>

          <div className='bg-white rounded-xl p-6 border border-[#dbe6df] shadow-sm hover:shadow-md transition-shadow relative group flex flex-col gap-1 overflow-hidden'>
            <div className='absolute -right-4 -top-4 opacity-5 group-hover:scale-110 transition-transform duration-500'>
              <i className='fa-regular fa-clock text-[100px]'></i>
            </div>
            <p className='text-[#61896f] text-sm font-medium'>Avg. Duration</p>
            <div className='flex items-baseline gap-2 mt-1'>
              <span className='text-3xl font-bold'>55m</span>
              <span className='text-xs font-medium bg-green-50 text-green-600 px-1.5 py-0.5 rounded-full flex items-center gap-1'>
                +2m
              </span>
            </div>
          </div>
        </div>

        {/* Charts */}
        <div className='grid grid-cols-3 gap-6'>
          {/* Left - Creative Liquid Bar Chart */}
          <div className='col-span-2 bg-linear-to-br from-slate-50 via-white to-green-50/30 p-6 rounded-xl border border-[#dbe6df] shadow-sm flex flex-col relative overflow-hidden'>
            {/* Animated Background Blobs */}
            <div className='absolute -right-20 -top-20 size-40 bg-[#15ec5b]/10 rounded-full blur-3xl animate-pulse'></div>
            <div className='absolute -left-16 -bottom-16 size-32 bg-blue-500/5 rounded-full blur-2xl'></div>
            
            <div className='flex items-center justify-between mb-6 relative z-10'>
              <div>
                <h3 className='text-lg font-bold bg-linear-to-r from-slate-900 to-slate-600 bg-clip-text text-transparent'>Weekly Energy Flow</h3>
                <p className='text-xs text-[#61896f] mt-1'>Your training intensity wave</p>
              </div>
              <div className='flex items-center gap-3'>
                <div className='px-3 py-1.5 bg-white rounded-full border border-[#dbe6df] shadow-sm'>
                  <span className='text-[10px] text-slate-500 font-medium'>TOTAL</span>
                  <span className='text-sm font-bold text-slate-900 ml-1.5'>12.8h</span>
                </div>
                <div className='flex items-center gap-1.5 px-2.5 py-1 bg-green-50 rounded-full border border-green-200'>
                  <i className='ri-arrow-up-line text-green-600 text-xs'></i>
                  <span className='text-xs font-bold text-green-600'>+18%</span>
                </div>
              </div>
            </div>

            {/* Creative Liquid Fill Chart */}
            <div className='relative flex-1 flex items-end justify-between gap-8 px-6 pb-8'>
              {/* Connecting trend line */}
              <svg className='absolute inset-0 w-full h-full pointer-events-none' style={{top: '20px'}}>
                <defs>
                  <linearGradient id="lineGradient" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="0%" style={{stopColor: '#15ec5b', stopOpacity: 0.3}} />
                    <stop offset="50%" style={{stopColor: '#15ec5b', stopOpacity: 0.6}} />
                    <stop offset="100%" style={{stopColor: '#15ec5b', stopOpacity: 0.3}} />
                  </linearGradient>
                </defs>
                <path 
                  d="M 50 80 Q 100 100, 150 140 T 250 110 T 350 60 T 450 100 T 550 30 T 650 120" 
                  stroke="url(#lineGradient)" 
                  strokeWidth="2" 
                  fill="none"
                  strokeDasharray="5,5"
                  className='animate-pulse'
                />
              </svg>

              {/* Monday */}
              <div className='flex flex-col items-center gap-3 flex-1 group relative z-10'>
                <div className='w-full flex items-end justify-center h-64'>
                  <div className='relative w-14 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:w-16' style={{height: '70%'}}>
                    {/* Liquid fill effect */}
                    <div className='absolute inset-0 bg-linear-to-t from-[#15ec5b] via-[#2ef368] to-[#15ec5b]/80'></div>
                    <div className='absolute inset-0 bg-linear-to-br from-white/20 to-transparent'></div>
                    {/* Animated wave */}
                    <div className='absolute bottom-0 left-0 right-0 h-8 bg-white/30 rounded-full blur-sm animate-pulse'></div>
                    {/* Value bubble */}
                    <div className='absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-top-12'>
                      <div className='px-2.5 py-1 bg-slate-900 text-white text-xs font-bold rounded-lg shadow-lg'>
                        2.0h
                        <div className='absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45'></div>
                      </div>
                    </div>
                    {/* Shimmer effect */}
                    <div className='absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent -skew-x-12 translate-x-full group-hover:animate-[shimmer_1s_ease-in-out]'></div>
                  </div>
                </div>
                <span className='text-xs font-bold text-slate-700 px-2 py-1 rounded-md group-hover:bg-slate-100 transition-colors'>Mon</span>
              </div>

              {/* Tuesday */}
              <div className='flex flex-col items-center gap-3 flex-1 group relative z-10'>
                <div className='w-full flex items-end justify-center h-64'>
                  <div className='relative w-14 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:w-16' style={{height: '50%'}}>
                    <div className='absolute inset-0 bg-linear-to-t from-[#15ec5b] via-[#2ef368] to-[#15ec5b]/80'></div>
                    <div className='absolute inset-0 bg-linear-to-br from-white/20 to-transparent'></div>
                    <div className='absolute bottom-0 left-0 right-0 h-8 bg-white/30 rounded-full blur-sm animate-pulse'></div>
                    <div className='absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-top-12'>
                      <div className='px-2.5 py-1 bg-slate-900 text-white text-xs font-bold rounded-lg shadow-lg'>
                        1.5h
                        <div className='absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45'></div>
                      </div>
                    </div>
                    <div className='absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent -skew-x-12 translate-x-full group-hover:animate-[shimmer_1s_ease-in-out]'></div>
                  </div>
                </div>
                <span className='text-xs font-bold text-slate-700 px-2 py-1 rounded-md group-hover:bg-slate-100 transition-colors'>Tue</span>
              </div>

              {/* Wednesday - Rest Day */}
              <div className='flex flex-col items-center gap-3 flex-1 group relative z-10'>
                <div className='w-full flex items-end justify-center h-64'>
                  <div className='relative w-14 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:w-16 border-2 border-dashed border-amber-300' style={{height: '12%'}}>
                    <div className='absolute inset-0 bg-linear-to-t from-amber-100 to-amber-50'></div>
                    <div className='absolute inset-0 flex items-center justify-center'>
                      <i className='ri-zzz-line text-amber-500 text-lg opacity-60'></i>
                    </div>
                  </div>
                </div>
                <span className='text-xs font-bold text-amber-600 px-2 py-1 rounded-md group-hover:bg-amber-50 transition-colors'>Rest</span>
              </div>

              {/* Thursday */}
              <div className='flex flex-col items-center gap-3 flex-1 group relative z-10'>
                <div className='w-full flex items-end justify-center h-64'>
                  <div className='relative w-14 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:w-16' style={{height: '85%'}}>
                    <div className='absolute inset-0 bg-linear-to-t from-[#15ec5b] via-[#2ef368] to-[#15ec5b]/80'></div>
                    <div className='absolute inset-0 bg-linear-to-br from-white/20 to-transparent'></div>
                    <div className='absolute bottom-0 left-0 right-0 h-8 bg-white/30 rounded-full blur-sm animate-pulse'></div>
                    {/* Star badge */}
                    <div className='absolute top-2 right-2 text-yellow-400 text-xs animate-bounce'>⭐</div>
                    <div className='absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-top-12'>
                      <div className='px-2.5 py-1 bg-slate-900 text-white text-xs font-bold rounded-lg shadow-lg'>
                        2.5h
                        <div className='absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45'></div>
                      </div>
                    </div>
                    <div className='absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent -skew-x-12 translate-x-full group-hover:animate-[shimmer_1s_ease-in-out]'></div>
                  </div>
                </div>
                <span className='text-xs font-bold text-slate-700 px-2 py-1 rounded-md group-hover:bg-slate-100 transition-colors'>Thu</span>
              </div>

              {/* Friday */}
              <div className='flex flex-col items-center gap-3 flex-1 group relative z-10'>
                <div className='w-full flex items-end justify-center h-64'>
                  <div className='relative w-14 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:w-16' style={{height: '60%'}}>
                    <div className='absolute inset-0 bg-linear-to-t from-[#15ec5b] via-[#2ef368] to-[#15ec5b]/80'></div>
                    <div className='absolute inset-0 bg-linear-to-br from-white/20 to-transparent'></div>
                    <div className='absolute bottom-0 left-0 right-0 h-8 bg-white/30 rounded-full blur-sm animate-pulse'></div>
                    <div className='absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-top-12'>
                      <div className='px-2.5 py-1 bg-slate-900 text-white text-xs font-bold rounded-lg shadow-lg'>
                        1.8h
                        <div className='absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45'></div>
                      </div>
                    </div>
                    <div className='absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent -skew-x-12 translate-x-full group-hover:animate-[shimmer_1s_ease-in-out]'></div>
                  </div>
                </div>
                <span className='text-xs font-bold text-slate-700 px-2 py-1 rounded-md group-hover:bg-slate-100 transition-colors'>Fri</span>
              </div>

              {/* Saturday - Peak Day */}
              <div className='flex flex-col items-center gap-3 flex-1 group relative z-10'>
                <div className='w-full flex items-end justify-center h-64'>
                  <div className='relative w-14 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-110 hover:w-16 ring-2 ring-orange-400/50 ring-offset-2' style={{height: '95%'}}>
                    <div className='absolute inset-0 bg-linear-to-t from-[#15ec5b] via-[#2ef368] to-[#15ec5b]'></div>
                    <div className='absolute inset-0 bg-linear-to-br from-yellow-200/30 to-transparent'></div>
                    <div className='absolute bottom-0 left-0 right-0 h-12 bg-white/40 rounded-full blur-md animate-pulse'></div>
                    {/* Fire badge */}
                    <div className='absolute -top-3 left-1/2 -translate-x-1/2 text-2xl animate-bounce'>
                      🔥
                    </div>
                    <div className='absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-top-16'>
                      <div className='px-2.5 py-1 bg-linear-to-r from-orange-500 to-red-500 text-white text-xs font-bold rounded-lg shadow-xl'>
                        3.0h 🏆
                        <div className='absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-orange-500 rotate-45'></div>
                      </div>
                    </div>
                    <div className='absolute inset-0 bg-linear-to-r from-transparent via-white/50 to-transparent -skew-x-12 translate-x-full group-hover:animate-[shimmer_1s_ease-in-out]'></div>
                    {/* Particles */}
                    <div className='absolute top-1/4 left-1/4 w-1 h-1 bg-yellow-300 rounded-full animate-ping'></div>
                    <div className='absolute top-1/3 right-1/4 w-1 h-1 bg-yellow-300 rounded-full animate-ping animation-delay-150'></div>
                  </div>
                </div>
                <span className='text-xs font-bold text-orange-600 px-2 py-1 rounded-md bg-orange-50 border border-orange-200'>Sat</span>
              </div>

              {/* Sunday */}
              <div className='flex flex-col items-center gap-3 flex-1 group relative z-10'>
                <div className='w-full flex items-end justify-center h-64'>
                  <div className='relative w-14 rounded-2xl overflow-hidden cursor-pointer transition-all duration-500 hover:scale-105 hover:w-16' style={{height: '40%'}}>
                    <div className='absolute inset-0 bg-linear-to-t from-[#15ec5b] via-[#2ef368] to-[#15ec5b]/80'></div>
                    <div className='absolute inset-0 bg-linear-to-br from-white/20 to-transparent'></div>
                    <div className='absolute bottom-0 left-0 right-0 h-8 bg-white/30 rounded-full blur-sm animate-pulse'></div>
                    <div className='absolute -top-10 left-1/2 -translate-x-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 group-hover:-top-12'>
                      <div className='px-2.5 py-1 bg-slate-900 text-white text-xs font-bold rounded-lg shadow-lg'>
                        1.0h
                        <div className='absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-slate-900 rotate-45'></div>
                      </div>
                    </div>
                    <div className='absolute inset-0 bg-linear-to-r from-transparent via-white/40 to-transparent -skew-x-12 translate-x-full group-hover:animate-[shimmer_1s_ease-in-out]'></div>
                  </div>
                </div>
                <span className='text-xs font-bold text-slate-700 px-2 py-1 rounded-md group-hover:bg-slate-100 transition-colors'>Sun</span>
              </div>
            </div>

            {/* Bottom stats bar */}
            <div className='relative z-10 flex items-center justify-between px-4 py-3 bg-linear-to-r from-slate-50 via-white to-slate-50 rounded-xl border border-slate-100'>
              <div className='flex items-center gap-4 text-xs'>
                <div className='flex items-center gap-1.5'>
                  <div className='size-2 rounded-full bg-[#15ec5b] animate-pulse'></div>
                  <span className='text-slate-600'>Active Days: <strong className='text-slate-900'>6</strong></span>
                </div>
                <div className='w-px h-4 bg-slate-200'></div>
                <div className='flex items-center gap-1.5'>
                  <i className='ri-trophy-line text-yellow-500'></i>
                  <span className='text-slate-600'>Best: <strong className='text-slate-900'>Saturday</strong></span>
                </div>
                <div className='w-px h-4 bg-slate-200'></div>
                <div className='flex items-center gap-1.5'>
                  <i className='ri-line-chart-line text-green-500'></i>
                  <span className='text-green-600 font-semibold'>Trending Up</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right - GitHub-style Contribution Graph */}
          <div className='bg-white p-6 rounded-xl border border-[#dbe6df] shadow-sm flex flex-col'>
            <h3 className='text-lg font-bold mb-1'>Consistency</h3>
            <p className='text-sm text-[#61896f] mb-6'>Last 12 Weeks Activity</p>
            
            {/* Heatmap Grid */}
            <div className='flex-1 flex items-center justify-center'>
              <div className='grid grid-cols-7 gap-1.5'>
                {/* Week 1-12 (84 days) with varied intensities */}
                {[
                  1, 0, 2, 1, 3, 0, 1,  // Week 1
                  2, 3, 0, 2, 2, 3, 0,  // Week 2
                  1, 2, 3, 2, 0, 1, 2,  // Week 3
                  0, 1, 2, 3, 2, 3, 1,  // Week 4
                  3, 2, 1, 0, 2, 1, 0,  // Week 5
                  1, 3, 2, 3, 1, 2, 0,  // Week 6
                  2, 1, 3, 2, 3, 0, 1,  // Week 7
                  0, 2, 1, 2, 3, 2, 3,  // Week 8
                  3, 3, 2, 1, 0, 2, 1,  // Week 9
                  1, 2, 3, 3, 2, 3, 0,  // Week 10
                  2, 3, 1, 2, 3, 1, 2,  // Week 11
                  3, 2, 3, 2, 3, 3, 2   // Week 12
                ].map((intensity, i) => (
                  <div 
                    key={i}
                    className={`w-3.5 h-3.5 rounded-sm transition-all hover:scale-125 hover:shadow-md cursor-pointer ${
                      intensity === 0 ? 'bg-slate-100 hover:bg-slate-200' :
                      intensity === 1 ? 'bg-[#15ec5b]/30 hover:bg-[#15ec5b]/40' :
                      intensity === 2 ? 'bg-[#15ec5b]/60 hover:bg-[#15ec5b]/70' :
                      'bg-[#15ec5b] hover:bg-[#15ec5b]/90 shadow-sm shadow-[#15ec5b]/30'
                    }`}
                    title={`${intensity === 0 ? 'No activity' : intensity === 1 ? '1 workout' : intensity === 2 ? '2 workouts' : '3+ workouts'}`}
                  />
                ))}
              </div>
            </div>

            {/* Legend */}
            <div className='flex items-center justify-between mt-6'>
              <div className='flex items-center gap-2 text-xs text-slate-500'>
                <span className='font-medium'>Less</span>
                <div className='w-3 h-3 rounded-sm bg-slate-100 border border-slate-200'></div>
                <div className='w-3 h-3 rounded-sm bg-[#15ec5b]/30'></div>
                <div className='w-3 h-3 rounded-sm bg-[#15ec5b]/60'></div>
                <div className='w-3 h-3 rounded-sm bg-[#15ec5b] shadow-sm'></div>
                <span className='font-medium'>More</span>
              </div>
            </div>

            {/* Quick stats */}
            <div className='mt-4 pt-4 border-t border-slate-100 flex flex-col gap-2'>
              <div className='flex items-center justify-between text-xs'>
                <span className='text-slate-600'>Longest streak</span>
                <span className='font-bold text-[#15ec5b] flex items-center gap-1'>
                  <i className='ri-fire-fill'></i> 12 days
                </span>
              </div>
              <div className='flex items-center justify-between text-xs'>
                <span className='text-slate-600'>Current streak</span>
                <span className='font-bold text-slate-900'>5 days</span>
              </div>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className='bg-white border border-[#dbe6df] rounded-xl shadow-soft overflow-hidden flex flex-col'>
          {/* Toolbar */}
          <div className='p-5 border-b border-[#f0f4f2] flex items-center justify-between gap-4'>
            <div className='flex items-center gap-2'>
              <button className='px-4 py-2 text-sm font-medium bg-slate-100 rounded-lg'>All History</button>
              <button className='px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors'>Classes</button>
              <button className='px-4 py-2 text-sm font-medium text-slate-500 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors'>Gym Visits</button>
            </div>

            <div className='flex items-center gap-3 w-auto'>
              <div className='relative max-w-md w-full'>
                <i className="ri-search-line absolute left-0 top-0 pl-3 pt-2 text-[#61896f] pointer-events-none"></i>
                <input className='bg-[#f7f8f6] h-10 pl-9 pr-4 py-2 w-full rounded-lg border border-[#dbe6df] text-sm placeholder:text-[#61896f] focus:border-[#15ec5b] focus:outline-0 focus:ring-1 focus:ring-[#15ec5b] transition-all' type="text" placeholder='Search...' />
              </div>
              <button className='px-3 py-1 border border-[#dbe6df] rounded-lg hover:bg-gray-50 transition-all flex items-center gap-2'>
                <i className="ri-filter-3-line text-xl"></i>
              </button>
            </div>
          </div>

          {/* Members Table */}
          <div className='overflow-x-auto'>
            <table className='w-full text-left border-collapse'>
              <thead className='bg-[#f7f8f6] text-[#61896f] text-xs font-semibold uppercase tracking-wider'>
                <tr>
                  <th className='px-6 py-4'>Date & Time</th>
                  <th className='px-6 py-4'>Activity</th>
                  <th className='px-6 py-4'>Duration</th>
                  <th className='px-6 py-4'>Instructor</th>
                  <th className='px-6 py-4'>Status</th>
                  <th className='px-6 py-4 text-right'>Actions</th>
                </tr>
              </thead>

              <tbody className='divide-y divide-[#f0f4f2]'>
                <tr className='hover:bg-[#f7f8f6] transitions-color group cursor-pointer'>
                  <td className='px-6 py-4'>
                    <div className='flex flex-col'>
                      <span className='text-sm font-medium'>Sep 24, 2023</span>
                      <span className='text-xs text-slate-500'>07:00 AM</span>
                    </div>
                  </td>

                  <td className='px-6 py-4'>
                    <div className='flex items-center gap-3'>
                      <div className='h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center'>
                        <i className="fa-solid fa-person-running text-[18px]"></i>
                      </div>
                      <span className='text-sm font-medium text-slate-700'>HIIT Cardio</span>
                    </div>
                  </td>

                  <td className='px-6 py-4 text-sm text-slate-600'>45 mins</td>
                  
                  <td className='px-6 py-4'>
                    <div className='flex items-center gap-3'>
                      <img className='size-10 rounded-full bg-gray-200 bg-center border border-[#dbe6df] object-cover' src={navjot} alt="Navjot" />
                      <p className='text-sm font-semibold group-hover:text-[#15ec5b] transition-colors'>Eleanor Pena</p>
                    </div>
                  </td>

                  <td className='px-6 py-4'>
                    <span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200 '>
                      Completed
                    </span>
                  </td>

                  <td className='px-6 py-4 text-right'>
                    <button className='text-[#61896f] hover:text-[#15ec5b] p-1.5 rounded-lg transition-all'>
                      <i className="fa-solid fa-ellipsis-vertical text-[20px]"></i>
                    </button>
                  </td>
                </tr>

                <tr className='hover:bg-[#f7f8f6] transitions-color group cursor-pointer'>
                  <td className='px-6 py-4'>
                    <div className='flex flex-col'>
                      <span className='text-sm font-medium'>Sep 22, 2023</span>
                      <span className='text-xs text-slate-500'>06:30 PM</span>
                    </div>
                  </td>

                  <td className='px-6 py-4'>
                    <div className='flex items-center gap-3'>
                      <div className='h-8 w-8 rounded-full bg-orange-100 text-orange-600 flex items-center justify-center'>
                        <i className="fa-solid fa-dumbbell text-[18px]"></i>
                      </div>
                      <span className='text-sm font-medium text-slate-700'>Hypertrophy</span>
                    </div>
                  </td>

                  <td className='px-6 py-4 text-sm text-slate-600'>60 mins</td>
                  
                  <td className='px-6 py-4'>
                    <div className='flex items-center gap-3'>
                      <img className='size-10 rounded-full bg-gray-200 bg-center border border-[#dbe6df] object-cover' src={navjot} alt="Navjot" />
                      <p className='text-sm font-semibold group-hover:text-[#15ec5b] transition-colors'>Mike Ross</p>
                    </div>
                  </td>

                  <td className='px-6 py-4'>
                    <span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200 '>
                      Completed
                    </span>
                  </td>

                  <td className='px-6 py-4 text-right'>
                    <button className='text-[#61896f] hover:text-[#15ec5b] p-1.5 rounded-lg transition-all'>
                      <i className="fa-solid fa-ellipsis-vertical text-[20px]"></i>
                    </button>
                  </td>
                </tr>

                <tr className='hover:bg-[#f7f8f6] transitions-color group cursor-pointer'>
                  <td className='px-6 py-4'>
                    <div className='flex flex-col'>
                      <span className='text-sm font-medium'>Sep 20, 2023</span>
                      <span className='text-xs text-slate-500'>05:15 AM</span>
                    </div>
                  </td>

                  <td className='px-6 py-4'>
                    <div className='flex items-center gap-3'>
                      <div className='h-8 w-8 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center'>
                        <i className="fa-solid fa-person-praying text-[18px]"></i>
                      </div>
                      <span className='text-sm font-medium text-slate-700'>Vinyasa Yoga</span>
                    </div>
                  </td>

                  <td className='px-6 py-4 text-sm text-slate-600'>50 mins</td>
                  
                  <td className='px-6 py-4'>
                    <div className='flex items-center gap-3'>
                      <img className='size-10 rounded-full bg-gray-200 bg-center border border-[#dbe6df] object-cover' src={navjot} alt="Navjot" />
                      <p className='text-sm font-semibold group-hover:text-[#15ec5b] transition-colors'>Emma Stone</p>
                    </div>
                  </td>

                  <td className='px-6 py-4'>
                    <span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200 '>
                      Completed
                    </span>
                  </td>

                  <td className='px-6 py-4 text-right'>
                    <button className='text-[#61896f] hover:text-[#15ec5b] p-1.5 rounded-lg transition-all'>
                      <i className="fa-solid fa-ellipsis-vertical text-[20px]"></i>
                    </button>
                  </td>
                </tr>

                <tr className='hover:bg-[#f7f8f6] transitions-color group cursor-pointer'>
                  <td className='px-6 py-4'>
                    <div className='flex flex-col'>
                      <span className='text-sm font-medium'>Sep 18, 2023</span>
                      <span className='text-xs text-slate-500'>06:00 PM</span>
                    </div>
                  </td>

                  <td className='px-6 py-4'>
                    <div className='flex items-center gap-3'>
                      <div className='h-8 w-8 rounded-full bg-blue-100 text-blue-600 flex items-center justify-center'>
                        <i className="fa-solid fa-person-running text-[18px]"></i>
                      </div>
                      <span className='text-sm font-medium text-slate-700'>HIIT Cardio</span>
                    </div>
                  </td>

                  <td className='px-6 py-4 text-sm text-slate-600'>60 mins</td>
                  
                  <td className='px-6 py-4'>
                    <div className='flex items-center gap-3'>
                      <img className='size-10 rounded-full bg-gray-200 bg-center border border-[#dbe6df] object-cover' src={navjot} alt="Navjot" />
                      <p className='text-sm font-semibold group-hover:text-[#15ec5b] transition-colors'>Mike Ross</p>
                    </div>
                  </td>

                  <td className='px-6 py-4'>
                    <span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200 '>
                      Late Cancel
                    </span>
                  </td>

                  <td className='px-6 py-4 text-right'>
                    <button className='text-[#61896f] hover:text-[#15ec5b] p-1.5 rounded-lg transition-all'>
                      <i className="fa-solid fa-ellipsis-vertical text-[20px]"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className='p-4 border-t border-[#dbe6df] flex items-center justify-between gap-4'>
            <span className='text-sm text-[#61896f] '>
              Showing 1 to 4 of 124 results
            </span>

            <div className='flex items-center gap-2'>
              <button className='px-3 py-1.5 border border-[#dbe6df] rounded-md hover:bg-gray-50 text-sm font-semibold transition-colors disabled:opacity-50'>Previous</button>
              <button className='px-3 py-1.5 border border-[#dbe6df] rounded-md hover:bg-gray-50 text-sm font-semibold transition-colors'>Next</button>
            </div>
          </div>
        </div>
      </div>
    </div>
    </ComingSoonWrapper>
  )
}

export default MemberAttendance
