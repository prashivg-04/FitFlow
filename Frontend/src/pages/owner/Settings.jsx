import React, { useState } from 'react'
import ownerDp from '../../media/O.png'
import ComingSoonWrapper from '../../components/ComingSoonWrapper'

const Settings = () => {

  const [theme, setTheme] = useState('light');

  return (
    <ComingSoonWrapper>
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
                <i className="fa-regular fa-floppy-disk text-[20px]"></i>
                Save Changes
              </button>
            </div>
          </div>

          {/* Settings Sections */}
          <div className='grid grid-cols-3 gap-6 items-start'>
            {/* Left */}
            <div className='col-span-2 flex flex-col gap-6'>
              {/* Personal Information */}
              <section className='bg-white rounded-xl border border-[#dbe6df] shadow-sm overflow-hidden'>
                {/* Heading */}
                <div className='p-8 border-b border-[#dbe6df] flex items-center justify-between'>
                  <h3 className='text-lg font-semibold'>Account Settings</h3>
                  <i className="ri-user-settings-line text-[#61896f] text-[20px]"></i>
                </div>

                {/* Info */}
                <div className='p-8'>
                  <div className='flex items-start gap-8'>
                    {/* Profile Photo */}
                    <div className='flex flex-col items-center gap-3'>
                      <img className='size-24 rounded-full bg-gray-200 bg-cover bg-center border-4 border-white shadow-xl object-cover' src={ownerDp} alt="Profile" />
                      <button className='text-xs font-semibold text-[#15ec5b] uppercase tracking-wider hover:text-green-400'>Change Photo</button>
                    </div>

                    {/* Info Form */}
                    <div className='flex-1 w-full grid grid-cols-2 gap-6'>
                      <div className='flex flex-col gap-1.5'>
                        <label className='text-sm font-medium'>Full Name</label>
                        <input className='w-full h-12 px-3 rounded-lg border border-[#dbe6df] bg-white focus:outline-0 focus:ring-2 focus:ring-[#15ec5b] focus:border-transparent text-sm transition-all placeholder:text-lg' type="text" placeholder='Enter full name' value='Alex Johnson' />
                      </div>

                      <div className='flex flex-col gap-1.5'>
                        <label className='text-sm font-medium'>Email Address</label>
                        <input className='w-full h-12 px-3 rounded-lg border border-[#dbe6df] bg-white focus:outline-0 focus:ring-2 focus:ring-[#15ec5b] focus:border-transparent text-sm transition-all placeholder:text-lg' type="email" placeholder='name@example.com' value='alex.j@fitpulse.com' />
                      </div>

                      <div className='col-span-2 border-t border-[#dbe6df] my-2'></div>
                      
                      <div className='flex flex-col gap-1.5'>
                        <label className='text-sm font-medium'>New Password</label>
                        <input className='w-full h-12 px-3 rounded-lg border border-[#dbe6df] bg-white focus:outline-0 focus:ring-2 focus:ring-[#15ec5b] focus:border-transparent text-sm transition-all placeholder:text-lg' type="password" placeholder='••••••••' />
                      </div>

                      <div className='flex flex-col gap-1.5'>
                        <label className='text-sm font-medium'>Confirm Password</label>
                        <input className='w-full h-12 px-3 rounded-lg border border-[#dbe6df] bg-white focus:outline-0 focus:ring-2 focus:ring-[#15ec5b] focus:border-transparent text-sm transition-all placeholder:text-lg' type="password" placeholder='••••••••' />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Gym Details */}
              <section className='bg-white rounded-xl border border-[#dbe6df] shadow-sm overflow-hidden'>
                {/* Heading */}
                <div className='p-8 border-b border-[#dbe6df] flex items-center justify-between'>
                  <h3 className='text-lg font-semibold'>Gym Details</h3>
                  <i className="ri-building-line text-[#61896f] text-[20px]"></i>
                </div>

                {/* Info */}
                <div className='p-8 grid grid-cols-2 gap-6'>
                  <div className='flex flex-col gap-1.5'>
                    <label className='text-sm font-medium'>Gym Name</label>
                    <input className='w-full h-12 px-3 rounded-lg border border-[#dbe6df] bg-white focus:outline-0 focus:ring-2 focus:ring-[#15ec5b] focus:border-transparent text-sm transition-all placeholder:text-lg' type="text" placeholder="Enter gym name" value='FitPulse Downtown' />
                  </div>

                  <div className='flex flex-col gap-1.5'>
                    <label className='text-sm font-medium'>Contact Number</label>
                    <div className='relative'>
                      <i className="ri-phone-line absolute left-3 top-1/2 -translate-y-1/2 text-lg text-gray-400 "></i>
                      <input className='w-full h-12 pl-10 pr-3 rounded-lg border border-[#dbe6df] bg-white focus:outline-0 focus:ring-2 focus:ring-[#15ec5b] focus:border-transparent text-sm transition-all placeholder:text-lg' type="tel" placeholder="Enter contact number" value='+1 (555) 000-1234' />
                    </div>
                  </div>

                  <div className='flex flex-col gap-1.5'>
                    <label className='text-sm font-medium'>Opening Time</label>
                    <input className='w-full h-12 px-3 rounded-lg border border-[#dbe6df] bg-white focus:outline-0 focus:ring-2 focus:ring-[#15ec5b] focus:border-transparent text-sm transition-all placeholder:text-lg' type="time" placeholder="Enter opening time" value='06:00' />
                  </div>

                  <div className='flex flex-col gap-1.5'>
                    <label className='text-sm font-medium'>Closing Time</label>
                    <input className='w-full h-12 px-3 rounded-lg border border-[#dbe6df] bg-white focus:outline-0 focus:ring-2 focus:ring-[#15ec5b] focus:border-transparent text-sm transition-all placeholder:text-lg' type="time" placeholder="Enter closing time" value='22:00' />
                  </div>

                  <div className='col-span-2 flex flex-col gap-1.5'>
                    <label className='text-sm font-medium'>Address</label>
                    <textarea className='w-full px-3 py-3 rounded-lg border border-[#dbe6df] bg-white focus:outline-0 focus:ring-2 focus:ring-[#15ec5b] focus:border-transparent text-sm transition-all placeholder:text-lg resize-none' placeholder='123 Fitness Blvd, Gym City, GC 90210' rows='3'>123 Fitness Blvd, Suite 100, Metro City, ST 54321</textarea>
                  </div>
                </div>
              </section>
            </div>

            {/* Right */}
            <div className='col-span-1 flex flex-col gap-6'>
              <section className='bg-white rounded-xl border border-[#dbe6df] shadow-sm overflow-hidden'>
                {/* Heading */}
                <div className='p-6 border-b border-[#dbe6df] flex items-center justify-between'>
                  <h3 className='text-lg font-semibold'>Preferences</h3>
                  <i className="ri-equalizer-line text-[#61896f] text-[20px]"></i>
                </div>

                {/* Preferences */}
                <div className='p-6 flex flex-col gap-6'>
                  <div>
                    <p className='text-xs font-bold text-[#61896f] uppercase tracking-wider mb-4'>Notifications</p>
                    <div className='flex flex-col gap-4'>
                      <div className='flex items-center justify-between'>
                        <div className='flex flex-col'>
                          <span className='text-sm font-medium'>Email Alerts</span>
                          <span className='text-xs text-[#61896f]'>Receive weekly summaries</span>
                        </div>

                        <label className='relative inline-flex items-center cursor-pointer'>
                          <input defaultChecked className='sr-only peer' type="checkbox"/>
                          <div className='w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#15ec5b]'></div>
                        </label>
                      </div>

                      <div className='flex items-center justify-between'>
                        <div className='flex flex-col'>
                          <span className='text-sm font-medium'>In-App Popups</span>
                          <span className='text-xs text-[#61896f]'>New member signups</span>
                        </div>

                        <label className='relative inline-flex items-center cursor-pointer'>
                          <input className='sr-only peer'type="checkbox" />
                          <div className='w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#15ec5b]'></div>
                        </label>
                      </div>
                    </div>
                  </div>

                  <div className='h-px bg-[#dbe6df] w-full'></div>

                  <div>
                    <p className='text-xs font-bold text-[#61896f] uppercase tracking-wider mb-4'>Interface Theme</p>
                    <div className='grid grid-cols-3 gap-2'>
                      <button 
                        onClick={() => setTheme('light')}
                        className={`flex flex-col items-center gap-2 p-3 rounded-lg transition-all ${
                          theme === 'light' 
                            ? 'border-2 border-[#15ec5b] bg-[#15ec5b]/5' 
                            : 'border border-[#dbe6df] hover:bg-gray-50'
                        }`}
                      >
                        <i className={`ri-sun-line text-xl ${theme === 'light' ? 'text-[#15ec5b]' : 'text-gray-500'}`}></i>
                        <span className='text-xs font-medium'>Light</span>
                      </button>

                      <button 
                        onClick={() => setTheme('dark')}
                        className={`flex flex-col items-center gap-2 p-3 rounded-lg transition-all ${
                          theme === 'dark' 
                            ? 'border-2 border-[#15ec5b] bg-[#15ec5b]/5' 
                            : 'border border-[#dbe6df] hover:bg-gray-50'
                        }`}
                      >
                        <i className={`ri-moon-line text-xl ${theme === 'dark' ? 'text-[#15ec5b]' : 'text-gray-500'}`}></i>
                        <span className='text-xs font-medium'>Dark</span>
                      </button>

                      <button 
                        onClick={() => setTheme('system')}
                        className={`flex flex-col items-center gap-2 p-3 rounded-lg transition-all ${
                          theme === 'system' 
                            ? 'border-2 border-[#15ec5b] bg-[#15ec5b]/5' 
                            : 'border border-[#dbe6df] hover:bg-gray-50'
                        }`}
                      >
                        <i className={`ri-mac-line text-xl ${theme === 'system' ? 'text-[#15ec5b]' : 'text-gray-500'}`}></i>
                        <span className='text-xs font-medium'>System</span>
                      </button>
                    </div>
                  </div>

                  <div className='h-px bg-[#dbe6df] w-full'></div>

                  <div>
                    <p className='text-xs font-bold text-red-500 uppercase tracking-wider mb-4'>Danger Zone</p>
                    <button className='w-full py-2 px-4 border border-red-200 rounded-lg text-red-600 hover:bg-red-50 text-sm font-medium transition-colors flex items-center justify-center gap-2'>
                      <i className="fa-solid fa-trash-can text-md"></i>
                      Deactivate Account
                    </button>
                  </div>
                </div>
              </section>
            </div>
          </div>

          <footer className='mt-12 text-center text-xs text-[#61896f]'>
            <p>
              © 2024 FitPulse Gym Management System. All rights reserved.
            </p>
          </footer>
        </div>
      </div>
    </div>
    </ComingSoonWrapper>
  )
}

export default Settings
