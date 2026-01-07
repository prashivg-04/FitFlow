import React from 'react'
import OwnerHeader from '../../components/owner/OwnerHeader'
import navjot from '../../media/navjotImg.jpeg'

const OwnerDashboard = () => {
  return (
    <div className=''>
      <div className='flex-1 overflow-y-auto p-8 scroll-smooth'>
        <div>
          {/* Page Heading */}
          <div>
            <div>
              <h1>Dashboard Overview</h1>
              <p>Here is what is happening with your gym today.</p>
            </div>
          </div>

          {/* KPI Cards */}
          <div>
            <div>
              <p>Total Members</p>
              <div>
                <h3>425</h3>
              </div>
              <div>
                <i class="fa-solid fa-arrow-trend-up"></i>
                <span>+12 this week</span>
              </div>
            </div>
            <div>
              <p>Total Members</p>
              <div>
                <h3>425</h3>
              </div>
              <div>
                <i class="fa-solid fa-arrow-trend-up"></i>
                <span>+12 this week</span>
              </div>
            </div>
            <div>
              <p>Total Members</p>
              <div>
                <h3>425</h3>
              </div>
              <div>
                <i class="fa-solid fa-arrow-trend-up"></i>
                <span>+12 this week</span>
              </div>
            </div>
            <div>
              <p>Total Members</p>
              <div>
                <h3>425</h3>
              </div>
              <div>
                <i class="fa-solid fa-arrow-trend-up"></i>
                <span>+12 this week</span>
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
