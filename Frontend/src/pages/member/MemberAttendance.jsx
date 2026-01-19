import React from 'react'
import navjot from '../../media/navjotImg.jpeg'

const MemberAttendance = () => {
  return (
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
          {/* Left */}
          <div className='col-span-2 bg-white p-6 rounded-xl border border-[#dbe6df] shadow-sm flex flex-col relative overflow-hidden'>
            <div className='flex items-center justify-between mb-6 relative z-10'>
              <div>
                <h3 className='text-lg font-bold'>Activity Overview</h3>
                <p className='text-xs text-[#61896f] mt-1'>Weekly comparison</p>
              </div>
              <div className='flex items-center gap-4'>
                <div className='flex items-center gap-2 font-semibold'>
                  <div className='size-2 rounded-full bg-[#15ec5b]'></div>
                  <span className='text-xs text-[#61896f]'>This Week</span>
                </div>
                <div className='flex items-center gap-2 font-medium'>
                  <div className='size-2 rounded-full bg-slate-200'></div>
                  <span className='text-xs text-slate-400'>Last Week</span>
                </div>
              </div>
            </div>

            {/* Chart placeholder */}
            <div></div>

            {/* Timeline dots */}
            <div className='flex justify-between items-center mt-4 px-2 relative z-10'>
              <span className='text-sm font-medium text-slate-500'>Mon</span>
              <span className='text-sm font-medium text-slate-500'>Tue</span>
              <span className='text-sm font-medium text-slate-500'>Wed</span>
              <span className='text-sm font-medium text-slate-500'>Thu</span>
              <span className='text-sm font-medium text-slate-500'>Fri</span>
              <span className='text-sm font-medium text-slate-500'>Sat</span>
              <span className='text-sm font-medium text-slate-500'>Sun</span>
            </div>
          </div>

          {/* Right */}
          <div className='bg-white p-6 rounded-xl border border-[#dbe6df] shadow-sm flex flex-col'>
            <h3 className='text-lg font-bold mb-1'>Consistency</h3>
            <p className='text-sm text-[#61896f] mb-6'>Last 3 Months Activity</p>
            <div></div>
            <div className='flex items-center justify-end gap-2 mt-4 text-slate-500'>
              <span>Less</span>
              <div className='w-2 h-2 rounded-xs bg-[#15ec5b]/20'></div>
              <div className='w-2 h-2 rounded-xs bg-[#15ec5b]/50'></div>
              <div className='w-2 h-2 rounded-xs bg-[#15ec5b]'></div>
              <span>More</span>
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
                <i class="ri-search-line absolute left-0 top-0 pl-3 pt-2 text-[#61896f] pointer-events-none"></i>
                <input className='bg-[#f7f8f6] h-10 pl-9 pr-4 py-2 w-full rounded-lg border border-[#dbe6df] text-sm placeholder:text-[#61896f] focus:border-[#15ec5b] focus:outline-0 focus:ring-1 focus:ring-[#15ec5b] transition-all' type="text" placeholder='Search...' />
              </div>
              <button className='px-3 py-1 border border-[#dbe6df] rounded-lg hover:bg-gray-50 transition-all flex items-center gap-2'>
                <i class="ri-filter-3-line text-xl"></i>
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
                        <i class="fa-solid fa-person-running text-[18px]"></i>
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
                      <i class="fa-solid fa-ellipsis-vertical text-[20px]"></i>
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
                        <i class="fa-solid fa-dumbbell text-[18px]"></i>
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
                      <i class="fa-solid fa-ellipsis-vertical text-[20px]"></i>
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
                        <i class="fa-solid fa-person-praying text-[18px]"></i>
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
                      <i class="fa-solid fa-ellipsis-vertical text-[20px]"></i>
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
                        <i class="fa-solid fa-person-running text-[18px]"></i>
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
                      <i class="fa-solid fa-ellipsis-vertical text-[20px]"></i>
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
  )
}

export default MemberAttendance
