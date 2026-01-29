import React from 'react'
import navjot from '../../media/navjotImg.jpeg'

const MemberSettings = () => {
  return (
    <div className='flex-1 overflow-y-auto p-8 scroll-smooth'>
      <div className='max-w-7xl mx-auto space-y-8'>
        {/* Heading */}
        <div className='flex items-center justify-between gap-4'>
          <div className='flex flex-col items-start'>
            <h1 className='text-4xl font-bold tracking-tight'>Settings</h1>
            <p className='text-[#61896f] text-lg mt-1'>Manage your account preferences, security settings, and personal profile.</p>
          </div>
        </div>

        {/* Settings Content */}
        <div className='grid grid-cols-3 gap-8'>
          {/* Left */}
          <div className='col-span-2 space-y-8'>
            {/* Personal Information */}
            <section className='bg-white rounded-xl p-6 border border-[#dbe6df] shadow-sm'>
              <div className='flex items-center mb-6'>
                <h2 className='text-xl font-bold flex items-center gap-2'>
                  <i className='ri-user-line text-[#15ec5b] text-[20px]'></i>
                  Profile Information
                </h2>
              </div>

              <div className='flex gap-8'>
                <div className='flex flex-col items-center gap-4'>
                  <img className='w-32 h-32 rounded-full border-4 border-[#f0f4f5] bg-gray-100 bg-cover bg-center shadow-md object-cover' src={navjot} alt="Profile" />
                  <button className='text-sm font-semibold text-[#15ec5b] hover:text-[#0fd651] transition-colors'>Change Photo</button>
                </div>

                <div className='flex-1 grid grid-cols-2 spacye-y-4 gap-4'>
                  <div className='col-span-2'>
                    <label className='mb-1.5 block text-sm font-medium text-[#61896f]'>Full Name</label>
                    <input className='w-full rounded-lg border border-slate-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#15ec5b] text-sm transition-all' type="text" value='Alex Morgan' />
                  </div>

                  <div className='col-span-2 grid grid-cols-2 gap-4'>
                    <div>
                      <label className='mb-1.5 block text-sm font-medium text-[#61896f]'>Email Address</label>
                      <div className='relative'>
                        <i class="fa-regular fa-envelope absolute left-2 top-1/2 -translate-y-1/2 text-lg"></i>
                        <input className='w-full rounded-lg border border-slate-200 pl-10 pr-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#15ec5b] text-sm transition-all' type="email" value='alex.morgan@example.com' />
                      </div>
                    </div>
                    <div>
                      <label className='mb-1.5 block text-sm font-medium text-[#61896f]'>Phone Number</label>
                      <input className='w-full rounded-lg border border-slate-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#15ec5b] text-sm transition-all' type="tel" value='+1 (555) 123-4567' />
                    </div>
                  </div>

                  <div className='col-span-2 grid grid-cols-2 gap-4'>
                    <div>
                      <label className='mb-1.5 block text-sm font-medium text-[#61896f]'>Date of Birth</label>
                      <input className='w-full rounded-lg border border-slate-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#15ec5b] text-sm transition-all' type="date" value='1995-06-15' />
                    </div>
                    <div>
                      <label className='mb-1.5 block text-sm font-medium text-[#61896f]'>Gender</label>
                      <div className='relative'>
                        <select className='w-full rounded-lg border border-slate-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#15ec5b] text-sm transition-all appearance-none'>
                          <option>Male</option>
                          <option>Female</option>
                          <option>Non-binary</option>
                          <option>Prefer not to say</option>
                        </select>
                        <i className="ri-arrow-down-s-line absolute right-3 top-1/2 -translate-y-1/2 text-lg"></i>
                      </div>
                    </div>
                  </div>

                  <div className='col-span-2 grid grid-cols-2 gap-4'>
                    <div>
                      <label className='mb-1.5 block text-sm font-medium text-[#61896f]'>Height (cm)</label>
                      <input className='w-full rounded-lg border border-slate-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#15ec5b] text-sm transition-all' type="number" value='182' />
                    </div>
                    <div>
                      <label className='mb-1.5 block text-sm font-medium text-[#61896f]'>Weight (kg)</label>
                      <input className='w-full rounded-lg border border-slate-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#15ec5b] text-sm transition-all' type="number" value='78' />
                    </div>
                  </div>
                </div>
              </div>

              <div className='mt-8 flex justify-end border-t border-[#dbe6df] pt-6'>
                <button className='rounded-lg bg-[#15ec5b] px-6 py-2.5 text-sm font-semibold text-black transition-all hover:bg-[#12c94a]'>Save Changes</button>
              </div>
            </section>

            {/* Password Security */}
            <section className='bg-white rounded-xl p-6 border border-[#dbe6df] shadow-sm'>
              <div className='flex items-center mb-3'>
                <h2 className='text-xl font-bold flex items-center gap-2'>
                  <i className='ri-lock-2-line text-[#15ec5b] text-[20px]'></i>
                  Security
                </h2>
              </div>
              <p className='text-sm text-[#61896f] mb-5'>Ensure your account is using a long, random password to stay secure.</p>

              <div className='grid grid-cols-3 gap-5'>
                <div>
                  <label className='mb-1.5 block text-sm font-medium text-[#61896f]'>Current Password</label>
                  <input className='w-full rounded-lg border border-slate-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#15ec5b] text-sm transition-all' type="password" placeholder='••••••••' />
                </div>
                <div>
                  <label className='mb-1.5 block text-sm font-medium text-[#61896f]'>New Password</label>
                  <input className='w-full rounded-lg border border-slate-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#15ec5b] text-sm transition-all' type="password" placeholder='Min 8 characters' />
                </div>
                <div>
                  <label className='mb-1.5 block text-sm font-medium text-[#61896f]'>Confirm Password</label>
                  <input className='w-full rounded-lg border border-slate-200 px-4 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#15ec5b] text-sm transition-all' type="password" placeholder='Repeat password' />
                </div>
              </div>

              <div className='mt-6 flex justify-end'>
                <button className='rounded-lg bg-[#15ec5b] px-6 py-2.5 text-sm font-semibold text-black transition-all hover:bg-[#12c94a]'>Update Password</button>
              </div>
            </section>
          </div>

          {/* Right */}
          <div className='space-y-8'>
            {/* Membership */}
            <section className='bg-white rounded-xl p-6 border border-[#dbe6df] shadow-sm'>
              <div className='flex items-start justify-between mb-4'>
                <h2 className='text-lg font-bold'>Membership</h2>
                <span className='inline-flex items-center justify-center rounded-full bg-green-50 text-green-700 px-2 py-1 text-xs font-medium ring-1 ring-inset ring-green-200'>Active</span>
              </div>
              <div className='mb-6 space-y-4'>
                <div>
                  <p className='text-xs font-medium uppercase tracking-wider text-[#61896f]'>Current Plan</p>
                  <p className='text-xl font-bold text-[#15ec5b]'>Pro Annual</p>
                </div>
                <div>
                  <p className='text-xs font-medium uppercase tracking-wider text-[#61896f]'>Expires On</p>
                  <p className='text-base font-medium'>October 24, 2024</p>
                </div>
                <div>
                  <p className='text-xs font-medium uppercase tracking-wider text-[#61896f]'>Payment Method</p>
                  <div className='flex items-center gap-2 mt-1'>
                    <i class="fa-regular fa-credit-card text-gray-400 text-[18px]"></i>
                    <p className='text-md font-medium'>•••• 4242</p>
                  </div>
                </div>
              </div>
              <button className='w-full rounded-lg border border-[#15ec5b] px-4 py-2.5 text-sm font-bold hover:bg-[#15ec5b] transition-colors'>View Subscription</button>
            </section>

            {/* Alerts */}
            <section className='bg-white rounded-xl p-6 border border-[#dbe6df] shadow-sm overflow-hidden'>
              <div className='flex items-start justify-between mb-4'>
                <h2 className='text-lg font-bold flex items-center gap-2'>
                  <i class="fa-regular fa-bell text-[#15ec5b] text-[20px]"></i>
                  Notifications
                </h2>
              </div>

              <div className='flex flex-col gap-4'>
                <div className='flex items-center justify-between'>
                  <div className='flex flex-col'>
                    <span className='text-sm font-medium'>Workout Reminders</span>
                    <span className='text-xs text-[#61896f]'>Get notified before scheduled sessions</span>
                  </div>

                  <label className='relative inline-flex items-center cursor-pointer'>
                    <input className='sr-only peer' type="checkbox"/>
                    <div className='w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#15ec5b]'></div>
                  </label>
                </div>

                <div className='flex items-center justify-between'>
                  <div className='flex flex-col'>
                    <span className='text-sm font-medium'>Payment Alerts</span>
                    <span className='text-xs text-[#61896f]'>Renewal & invoice updates</span>
                  </div>

                  <label className='relative inline-flex items-center cursor-pointer'>
                    <input defaultChecked className='sr-only peer'type="checkbox" />
                    <div className='w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#15ec5b]'></div>
                  </label>
                </div>

                <div className='flex items-center justify-between'>
                  <div className='flex flex-col'>
                    <span className='text-sm font-medium'>Trainer Messages</span>
                    <span className='text-xs text-[#61896f]'>Direct chats from your coach</span>
                  </div>

                  <label className='relative inline-flex items-center cursor-pointer'>
                    <input className='sr-only peer'type="checkbox" />
                    <div className='w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#15ec5b]'></div>
                  </label>
                </div>
              </div>
            </section>

            {/* Logout */}
            <section className='bg-red-50 rounded-xl p-6 border border-red-200 shadow-sm overflow-hidden'>
              <h2 className='text-lg font-bold text-red-700 mb-4 flex items-center gap-2'>
                <i class="fa-solid fa-triangle-exclamation"></i>
                Danger Zone
              </h2>
              <div className='space-y-3 flex flex-col'>
                <button className='w-full flex items-center gap-2 justify-center border border-red-200 rounded-lg bg-white px-4 py-2.5 text-sm font-bold text-red-600 hover:bg-red-100/50 transition-colors'>
                  <i class="fa-solid fa-arrow-right-from-bracket"></i>
                  Logout
                </button>
                <button className='w-full flex items-center gap-2 justify-center rounded-lg bg-red-600 px-4 py-2.5 text-sm font-bold text-white hover:bg-red-700 transition-colors'>
                  <i class="fa-solid fa-ban"></i>
                  Deactivate Account
                </button>
              </div>
            </section>
          </div>
        </div>

        {/* Footer */}
        <div className='mt-8 flex items-center justify-center'>
          <p className='text-sm text-[#61896f]'>
            FitManager v2.4.0 • © 2024
          </p>
        </div>
      </div>
    </div>
  )
}

export default MemberSettings
