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
          <div>
            <div>
              <div>
                <div>
                  <h3>Revenue Growth</h3>
                  <p>January - June 2025</p>
                </div>
                <div>
                  <p>$145,200</p>
                  <p>
                    <i class="ri-arrow-up-long-line"></i>
                    15% YTD
                  </p>
                </div>
              </div>

              <div>Charts</div>

              <div>
                <span>Jan</span>
                <span>Feb</span>
                <span>Mar</span>
                <span>Apr</span>
                <span>May</span>
                <span>Jun</span>
              </div>
            </div>

            <div>
              <h3>Peak Hours</h3>

              <div>
                <span>45</span>
                <span>Avg active users/hr</span>
              </div>

              <div>
                <div>
                  <div></div>
                  <span>6am</span>
                </div>
                <div>
                  <div></div>
                  <span>6am</span>
                </div>
                <div>
                  <div></div>
                  <span>6am</span>
                </div>
                <div>
                  <div></div>
                  <span>6am</span>
                </div>
                <div>
                  <div></div>
                  <span>6am</span>
                </div>
                <div>
                  <div></div>
                  <span>6am</span>
                </div>
              </div>
            </div>
          </div>

          {/* Recent Activities */}
          <div>
            <div>
              <h3>Recent Activity</h3>
              <button>View All</button>
            </div>

            <div>
              <table>
                <thead>
                  <tr>
                    <th>Member</th>
                    <th>Activity Type</th>
                    <th>Time</th>
                    <th>Status</th>
                  </tr>
                </thead>

                <tbody>
                  <tr>
                    <td>
                      <div>
                        <img className='size-8' src={navjot} alt="" />
                        <span>Sarah Jenkins</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <i class="ri-login-box-line"></i>
                        <span>Gym Check-in</span>
                      </div>
                    </td>
                    <td>
                      Just now
                    </td>
                    <td>
                      <span>Confirmed</span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div>
                        <img className='size-8' src={navjot} alt="" />
                        <span>Sarah Jenkins</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <i class="ri-login-box-line"></i>
                        <span>Gym Check-in</span>
                      </div>
                    </td>
                    <td>
                      Just now
                    </td>
                    <td>
                      <span>Confirmed</span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div>
                        <img className='size-8' src={navjot} alt="" />
                        <span>Sarah Jenkins</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <i class="ri-login-box-line"></i>
                        <span>Gym Check-in</span>
                      </div>
                    </td>
                    <td>
                      Just now
                    </td>
                    <td>
                      <span>Confirmed</span>
                    </td>
                  </tr>

                  <tr>
                    <td>
                      <div>
                        <img className='size-8' src={navjot} alt="" />
                        <span>Sarah Jenkins</span>
                      </div>
                    </td>
                    <td>
                      <div>
                        <i class="ri-login-box-line"></i>
                        <span>Gym Check-in</span>
                      </div>
                    </td>
                    <td>
                      Just now
                    </td>
                    <td>
                      <span>Confirmed</span>
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
