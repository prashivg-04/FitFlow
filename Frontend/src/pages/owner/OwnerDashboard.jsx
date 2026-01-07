import React from 'react'
import OwnerHeader from '../../components/owner/OwnerHeader'
import navjot from '../../media/navjotImg.jpeg'

const OwnerDashboard = () => {
  return (
    <div className=''>
      <div className='flex-1 overflow-y-auto p-8 scroll-smooth'>
        <div className='flex flex-col gap-8 max-w-7xl mx-auto'>
          {/* Page Heading */}
          <div className='flex flex-col items-start justify-center gap-2'>
            <h1 className='text-4xl font-black tracking-tight'>Dashboard Overview</h1>
            <p className='text-[#61896f] text-base'>Here is what is happening with your gym today.</p>
          </div>

          {/* KPI Cards */}
          <div className='grid grid-cols-4 gap-4'>
            <div className='p-6 bg-white rounded-xl border border-[#dbe6df] shadow-sm flex flex-col gap-2 relative overflow-hidden group'>
              <div className='absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-40 transition-opacity'>
                <i class="text-4xl text-[#15ec5b] ri-group-line"></i>
              </div>
              <p className='text-[#61896f] text-sm font-medium'>Total Members</p>
              <h3 className='text-3xl font-bold my-1'>425</h3>
              <div className='flex items-center gap-1 text-emerald-600 text-sm font-medium'>
                <i class="fa-solid fa-arrow-trend-up"></i>
                <span>+12 this week</span>
              </div>
            </div>

            <div className='p-6 bg-white rounded-xl border border-[#dbe6df] shadow-sm flex flex-col gap-2 relative overflow-hidden group'>
              <div className='absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-40 transition-opacity'>
                <i class="text-4xl text-[#15ec5b] fa-solid fa-dollar-sign"></i>
              </div>
              <p className='text-[#61896f] text-sm font-medium'>Monthly Revenue</p>
              <h3 className='text-3xl font-bold my-1'>$12,450</h3>
              <div className='flex items-center gap-1 text-emerald-600 text-sm font-medium'>
                <i class="fa-solid fa-arrow-trend-up"></i>
                <span>+8.5% vs last month</span>
              </div>
            </div>

            <div className='p-6 bg-white rounded-xl border border-[#dbe6df] shadow-sm flex flex-col gap-2 relative overflow-hidden group'>
              <div className='absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-40 transition-opacity'>
                <i class="text-4xl text-[#15ec5b] ri-user-follow-line"></i>
              </div>
              <p className='text-[#61896f] text-sm font-medium'>Active Subscriptions</p>
              <h3 className='text-3xl font-bold my-1'>380</h3>
              <div className='flex items-center gap-1 text-emerald-600 text-sm font-medium'>
                <i class="fa-solid fa-circle text-[#15ec5b] text-[10px]"></i>
                <span>89% retention rate</span> 
              </div>
            </div>

            <div className='p-6 bg-white rounded-xl border border-[#dbe6df] shadow-sm flex flex-col gap-2 relative overflow-hidden group'>
              <div className='absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-40 transition-opacity'>
                <i class="text-4xl text-[#15ec5b] ri-login-box-line"></i>
              </div>
              <p className='text-[#61896f] text-sm font-medium'>Check-ins Today</p>
              <h3 className='text-3xl font-bold my-1'>85</h3>
              <div className='flex items-center gap-1 text-emerald-600 text-sm font-medium'>
                <i class="fa-regular fa-clock text-xs"></i>
                <span>Updated 5 mins ago</span>
              </div>
            </div>
          </div>

          {/* Charts and Graphs */}
          <div className='grid grid-cols-3 gap-6'>
            <div className='col-span-2 p-6 rounded-xl bg-white border border-[#dbe6df] shadow-sm flex flex-col'>
              <div className='flex items-center justify-between mb-6'>
                <div>
                  <h3 className='text-lg font-bold'>Revenue Growth</h3>
                  <p className='text-sm text-[#61896f]'>January - June 2025</p>
                </div>
                <div className='text-right'>
                  <p className='text-2xl font-bold'>$145,200</p>
                  <p className='text-sm text-emerald-600 flex items-center justify-end'>
                    <i class="ri-arrow-up-long-line text-sm"></i>
                    15% YTD
                  </p>
                </div>
              </div>

              <div className='flex-1 min-h-62.5 relative w-full pt-4 bg-[#edfdef]'>
                Charts
              </div>

              <div className='flex justify-between mt-3 text-xs font-semibold text-[#61896f] px-2'>
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>
            </div>

            <div className='p-6 rounded-xl bg-white border border-[#dbe6df] shadow-sm flex flex-col'>
              <h3 className='text-lg font-bold mb-2'>Peak Hours</h3>

              <div className='flex items-center gap-2 mb-6'>
                <span className='text-3xl font-bold'>45</span>
                <span className='text-sm text-[#61896f]'>Avg active users/hr</span>
              </div>

              <div className='flex-1 flex items-end justify-between gap-2 h-50'>
                <div className='flex flex-col items-center gap-2 w-full h-full justify-end group'>
                  <div className='w-full bg-[#15ec5b]/20 rounded-t-sm relative transition-all group-hover:bg-[#15ec5b]/40 h-[40%]'></div>
                  <span className='text-xs font-bold text-[#61896f]'>6am</span>
                </div>
              
                <div className='flex flex-col items-center gap-2 w-full h-full justify-end group'>
                  <div className='w-full bg-[#15ec5b]/20 rounded-t-sm relative transition-all group-hover:bg-[#15ec5b]/40 h-[70%]'></div>
                  <span className='text-xs font-bold text-[#61896f]'>9am</span>
                </div>

                <div className='flex flex-col items-center gap-2 w-full h-full justify-end group'>
                  <div className='w-full bg-[#15ec5b]/20 rounded-t-sm relative transition-all group-hover:bg-[#15ec5b]/40 h-[50%]'></div>
                  <span className='text-xs font-bold text-[#61896f]'>12pm</span>
                </div>

                <div className='flex flex-col items-center gap-2 w-full h-full justify-end group'>
                  <div className='w-full bg-[#15ec5b]/20 rounded-t-sm relative transition-all group-hover:bg-[#15ec5b]/40 h-[60%]'></div>
                  <span className='text-xs font-bold text-[#61896f]'>3pm</span>
                </div>

                <div className='flex flex-col items-center gap-2 w-full h-full justify-end group'>
                  <div className='w-full bg-[#15ec5b] rounded-t-sm relative transition-all h-[95%]'></div>
                  <span className='text-xs font-bold text-[#61896f]'>6pm</span>
                </div>

                <div className='flex flex-col items-center gap-2 w-full h-full justify-end group'>
                  <div className='w-full bg-[#15ec5b]/20 rounded-t-sm relative transition-all group-hover:bg-[#15ec5b]/40 h-[30%]'></div>
                  <span className='text-xs font-bold text-[#61896f]'>9pm</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div className='bg-white rounded-xl border border-[#dbe6df] shadow-sm overflow-hidden'>
            <div className='p-6 flex items-center justify-between border-b border-[#f0f4f2]'>
              <h3 className='text-lg font-bold'>Recent Activity</h3>
              <button className='text-sm font-medium text-[#15ec5b] hover:text-green-400'>View All</button>
            </div>

            <div className='overflow-x-auto'>
              <table className='w-full text-left border-collapse'>
                <thead>
                  <tr className='border-b border-[#f0f4f2] bg-[#fbfdfc]'>
                    <th className='py-4 px-6 text-xs font-semibold text-[#61896f] uppercase tracking-wide '>Member</th>
                    <th className='py-4 px-6 text-xs font-semibold text-[#61896f] uppercase tracking-wide '>Activity Type</th>
                    <th className='py-4 px-6 text-xs font-semibold text-[#61896f] uppercase tracking-wide '>Time</th>
                    <th className='py-4 px-6 text-xs font-semibold text-[#61896f] uppercase tracking-wide text-right'>Status</th>
                  </tr>
                </thead>

                <tbody className='divide-y divide-[#f0f4f2]'>
                  <tr className='hover:bg-gray-50 transition-colors'>
                    <td className='py-4 px-6'>
                      <div className='flex items-center gap-3'>
                        <img className='size-8 rounded-full bg-gray-200 bg-center bg-cover object-cover' src={navjot} alt="" />
                        <span>Sarah Jenkins</span>
                      </div>
                    </td>

                    <td className='py-4 px-6'>
                      <div className='flex items-center gap-2'>
                        <i class="ri-login-box-line text-gray-400 text-4.5"></i>
                        <span className='text-sm'>Gym Check-in</span>
                      </div>
                    </td>

                    <td className='py-4 px-6 text-sm text-[#61896f]'>
                      Just now
                    </td>

                    <td className='py-4 px-6 text-right'>
                      <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800'>Confirmed</span>
                    </td>
                  </tr>

                  <tr className='hover:bg-gray-50 transition-colors'>
                    <td className='py-4 px-6'>
                      <div className='flex items-center gap-3'>
                        <img className='size-8 rounded-full bg-gray-200 bg-center bg-cover object-cover' src={navjot} alt="" />
                        <span>Sarah Jenkins</span>
                      </div>
                    </td>

                    <td className='py-4 px-6'>
                      <div className='flex items-center gap-2'>
                        <i class="ri-login-box-line text-gray-400 text-4.5"></i>
                        <span className='text-sm'>Gym Check-in</span>
                      </div>
                    </td>

                    <td className='py-4 px-6 text-sm text-[#61896f]'>
                      Just now
                    </td>

                    <td className='py-4 px-6 text-right'>
                      <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800'>Confirmed</span>
                    </td>
                  </tr>

                  <tr className='hover:bg-gray-50 transition-colors'>
                    <td className='py-4 px-6'>
                      <div className='flex items-center gap-3'>
                        <img className='size-8 rounded-full bg-gray-200 bg-center bg-cover object-cover' src={navjot} alt="" />
                        <span>Sarah Jenkins</span>
                      </div>
                    </td>

                    <td className='py-4 px-6'>
                      <div className='flex items-center gap-2'>
                        <i class="ri-login-box-line text-gray-400 text-4.5"></i>
                        <span className='text-sm'>Gym Check-in</span>
                      </div>
                    </td>

                    <td className='py-4 px-6 text-sm text-[#61896f]'>
                      Just now
                    </td>

                    <td className='py-4 px-6 text-right'>
                      <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800'>Confirmed</span>
                    </td>
                  </tr>

                  <tr className='hover:bg-gray-50 transition-colors'>
                    <td className='py-4 px-6'>
                      <div className='flex items-center gap-3'>
                        <img className='size-8 rounded-full bg-gray-200 bg-center bg-cover object-cover' src={navjot} alt="" />
                        <span>Sarah Jenkins</span>
                      </div>
                    </td>

                    <td className='py-4 px-6'>
                      <div className='flex items-center gap-2'>
                        <i class="ri-login-box-line text-gray-400 text-4.5"></i>
                        <span className='text-sm'>Gym Check-in</span>
                      </div>
                    </td>

                    <td className='py-4 px-6 text-sm text-[#61896f]'>
                      Just now
                    </td>

                    <td className='py-4 px-6 text-right'>
                      <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800'>Confirmed</span>
                    </td>
                  </tr>

                  <tr className='hover:bg-gray-50 transition-colors'>
                    <td className='py-4 px-6'>
                      <div className='flex items-center gap-3'>
                        <img className='size-8 rounded-full bg-gray-200 bg-center bg-cover object-cover' src={navjot} alt="" />
                        <span>Sarah Jenkins</span>
                      </div>
                    </td>

                    <td className='py-4 px-6'>
                      <div className='flex items-center gap-2'>
                        <i class="ri-login-box-line text-gray-400 text-4.5"></i>
                        <span className='text-sm'>Gym Check-in</span>
                      </div>
                    </td>

                    <td className='py-4 px-6 text-sm text-[#61896f]'>
                      Just now
                    </td>

                    <td className='py-4 px-6 text-right'>
                      <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800'>Confirmed</span>
                    </td>
                  </tr>

                  <tr className='hover:bg-gray-50 transition-colors'>
                    <td className='py-4 px-6'>
                      <div className='flex items-center gap-3'>
                        <img className='size-8 rounded-full bg-gray-200 bg-center bg-cover object-cover' src={navjot} alt="" />
                        <span>Sarah Jenkins</span>
                      </div>
                    </td>

                    <td className='py-4 px-6'>
                      <div className='flex items-center gap-2'>
                        <i class="ri-login-box-line text-gray-400 text-4.5"></i>
                        <span className='text-sm'>Gym Check-in</span>
                      </div>
                    </td>

                    <td className='py-4 px-6 text-sm text-[#61896f]'>
                      Just now
                    </td>

                    <td className='py-4 px-6 text-right'>
                      <span className='inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800'>Confirmed</span>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OwnerDashboard
