import React from 'react'
import OwnerHeader from '../../components/owner/OwnerHeader'
import navjot from '../../media/navjotImg.jpeg'

const Settings = () => {
  return (
    <div className=''>
      <div className='flex-1 overflow-y-auto p-8 scroll-smooth'>
        <div className='max-w-300 mx-auto space-y-8 pb-10'>
          {/* Heading */}
          <div className='flex items-center justify-between gap-4'>
            <div className='flex flex-col items-start justify-center gap-2'>
              <h1 className='text-4xl font-black tracking-tight'>Admin Settings</h1>
              <p className='text-[#61896f] text-base'>Manage your account, gym details, and application preferences.</p>
            </div>
            <div className='flex items-center gap-4'>
              <button className='px-5 py-2.5 bg-white rounded-lg hover:bg-gray-50 font-medium border border-[#dbe6df] transition-all'>Discard</button>
              <button className='flex items-center gap-2 px-5 py-2.5 bg-[#15ec5b] rounded-lg hover:bg-green-500 font-bold shadow-lg shadow-[#15ec5b]/25 transition-all'>
                <i class="ri-add-line text-[20px]"></i>
                Add New Member
              </button>
            </div>
          </div>

          <div>
            {/* Left */}
            <div>
              {/* Personal Information */}
              <section>
                <div>
                  <h3>Account Settings</h3>
                  <i class="ri-user-settings-line"></i>
                </div>

                <div>
                  <div>
                    <div>
                      <img className='size-10' src={navjot} alt="Profile" />
                      <button>Change Photo</button>
                    </div>

                    <div>
                      <div>
                        <label>Full Name</label>
                        <input type="text" placeholder='Enter full name' value='Alex Johnson' />
                      </div>

                      <div>
                        <label>Email Address</label>
                        <input type="email" placeholder='name@example.com' value='alex.j@fitpulse.com' />
                      </div>

                      <div></div>
                      
                      <div>
                        <label>New Password</label>
                        <input type="password" placeholder='••••••••' />
                      </div>

                      <div>
                        <label>Confirm Password</label>
                        <input type="password" placeholder='••••••••' />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Gym Details */}
              <section>
                <div>
                  <h3>Gym Details</h3>
                  <i class="ri-building-line"></i>
                </div>

                <div>
                  <div>
                    <label>Gym Name</label>
                    <input type="text" placeholder="Enter gym name" value='FitPulse Downtown' />
                  </div>

                  <div>
                    <label>Contact Number</label>
                    <div>
                      <i class="ri-phone-line"></i>
                      <input type="tel" placeholder="Enter contact number" value='+1 (555) 000-1234' />
                    </div>
                  </div>

                  <div>
                    <label>Opening Time</label>
                    <input type="time" placeholder="Enter opening time" value='06:00' />
                  </div>

                  <div>
                    <label>Closing Time</label>
                    <input type="time" placeholder="Enter closing time" value='22:00' />
                  </div>

                  <div>
                    <label>Address</label>
                    <textarea placeholder='123 Fitness Blvd, Gym City, GC 90210' rows='3'>123 Fitness Blvd, Suite 100, Metro City, ST 54321</textarea>
                  </div>
                </div>
              </section>
            </div>

            {/* Right */}
            <div>
              <section>
                <div>
                  <h3>Preferences</h3>
                  <i class="ri-equalizer-line"></i>
                </div>

                <div>
                  <div>
                    <p>Notifications</p>
                    <div>
                      <div>
                        <div>
                          <span>Email Alerts</span>
                          <span>Receive weekly summaries</span>
                        </div>
                        <label>
                          <input checked type="checkbox"/>
                          <div></div>
                        </label>
                      </div>

                      <div>
                        <div>
                          <span>In-App Popups</span>
                          <span>New member signups</span>
                        </div>
                        <label>
                          <input checked type="checkbox" />
                          <div></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div></div>

                  <div>
                    <p>Interface Theme</p>
                    <div>
                      <button>
                        <i class="ri-sun-line"></i>
                        <span>Light</span>
                      </button>

                      <button>
                        <i class="ri-moon-line"></i>
                        Dark
                      </button>

                      <button>
                        <i class="ri-mac-line"></i>
                        System
                      </button>
                    </div>
                  </div>

                  <div></div>

                  <div>
                    <p>Danger Zone</p>
                    <button>
                      <i class="fa-solid fa-trash-can"></i>
                      <span>Deactivate Account</span>
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <footer>
            <p>
              © 2024 FitPulse Gym Management System. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </div>
  )
}

export default Settings
