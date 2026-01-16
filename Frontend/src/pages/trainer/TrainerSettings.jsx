import React from 'react'
import navjot from '../../media/navjotImg.jpeg'

const TrainerSettings = () => {
  return (
    <div className=''>
      <div className='flex-1 overflow-y-auto p-8 scroll-smooth'>
        <div className='max-w-300 mx-auto space-y-8 pb-10'>
          {/* Heading */}
          <div className='flex items-center justify-between gap-4'>
            <div className='flex flex-col items-start justify-center gap-2'>
              <h1 className='text-4xl font-black tracking-tight'>Account Settings</h1>
              <p className='text-[#61896f] text-base'>Manage your personal details, preferences, and account security.</p>
            </div>
            <div className='flex items-center gap-4'>
              <button className='px-5 py-2.5 bg-white rounded-lg hover:bg-gray-50 font-medium border border-[#dbe6df] transition-all'>Discard</button>
              <button className='flex items-center gap-2 px-5 py-2.5 bg-[#15ec5b] rounded-lg hover:bg-green-500 font-bold shadow-lg shadow-[#15ec5b]/25 transition-all'>
                <i class="fa-regular fa-floppy-disk text-[20px]"></i>
                Save Changes
              </button>
            </div>
          </div>

          {/* Profile Header Card */}
          <div className='bg-white rounded-2xl border border-[#dbe6df] shadow-sm p-8 flex gap-6 items-center'>
            <div className='group'>
              <img className='size-32 bg-cover bg-center rounded-full border-4 border-white shadow-md object-cover' src={navjot} alt="Profile" />
            </div>
            <div className='flex-1 text-left space-y-2'>
              <div className='flex items-center gap-4'>
                <h2 className='text-2xl font-bold'>Alex Johnson</h2>
                <span className='inline-flex items-center px-2 py-0.5 bg-blue-50 border border-blue-200 rounded-md text-sm font-bold text-blue-700'>Trainer</span>
              </div>
              <p className='text-[#61896f] max-w-xl'>Certified Personal Trainer specializing in HIIT and Strength Training. Helping members achieve their fitness goals since 2018.</p>
              <div className='flex flex-wrap justify-start items-center gap-4 mt-4'>
                <span className='inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium'>
                  <i class="ri-map-pin-2-line text-[16px]"></i>
                  San Francisco, CA
                </span>
                <span className='inline-flex items-center gap-1 px-3 py-1 rounded-full bg-slate-100 text-slate-600 text-sm font-medium'>
                  <i class="ri-time-line text-[16px]"></i>
                  Joined Sep 2018
                </span>
              </div>
            </div>
          </div>

          {/* Settings Sections */}
          <div className='grid grid-cols-3 gap-6'>
            {/* Left */}
            <div className='col-span-2 flex flex-col gap-6'>
              {/* Personal Information */}
              <section className='bg-white rounded-xl border border-[#dbe6df] shadow-sm overflow-hidden'>
                <div className='p-8'>
                  <div className='flex flex-col items-start gap-8'>
                    {/* Heading */}
                    <div className='flex items-center justify-between border-b border-[#dbe6df] w-full pb-4'>
                      <h3 className='text-lg font-bold flex items-center gap-3'>
                        <i className="ri-user-line text-[20px] text-[#15ec5b]"></i> 
                        Personal Information
                      </h3>
                      <button className='text-sm font-semibold text-[#15ec5b] transition hover:underline'>Edit</button>
                    </div>

                    {/* Info Form */}
                    <div className='flex-1 w-full grid grid-cols-2 gap-6'>
                      <div className='flex flex-col gap-1.5'>
                        <label className='text-sm font-medium'>First Name</label>
                        <input className='w-full h-12 px-3 rounded-lg border border-[#dbe6df] bg-white focus:outline-0 focus:ring-2 focus:ring-[#15ec5b] focus:border-transparent text-sm transition-all placeholder:text-lg' type="text" placeholder='Enter full name' value='Alex' />
                      </div>

                      <div className='flex flex-col gap-1.5'>
                        <label className='text-sm font-medium'>Last Name</label>
                        <input className='w-full h-12 px-3 rounded-lg border border-[#dbe6df] bg-white focus:outline-0 focus:ring-2 focus:ring-[#15ec5b] focus:border-transparent text-sm transition-all placeholder:text-lg' type="text" placeholder='Enter full name' value='Johnson' />
                      </div>

                      <div className='col-span-2 flex flex-col gap-1.5'>
                        <label className='text-sm font-medium'>Email Address</label>
                        <div className='relative'>
                          <i class="fa-regular fa-envelope absolute left-3 top-1/2 transform -translate-y-1/2 text-[#61896f] text-[20px]"></i>
                          <input className='w-full h-12 pl-12 pr-3 rounded-lg border border-[#dbe6df] bg-white focus:outline-0 focus:ring-2 focus:ring-[#15ec5b] focus:border-transparent text-sm transition-all placeholder:text-lg' type="email" placeholder='name@example.com' value='alex.j@fitpulse.com' />
                        </div>
                      </div>
                      
                      <div className='flex flex-col gap-1.5'>
                        <label className='text-sm font-medium'>Phone Number</label>
                        <input className='w-full h-12 px-3 rounded-lg border border-[#dbe6df] bg-white focus:outline-0 focus:ring-2 focus:ring-[#15ec5b] focus:border-transparent text-sm transition-all placeholder:text-lg' type="tel" value='+1 (555) 123-4567' />
                      </div>

                      <div className='flex flex-col gap-1.5'>
                        <label className='text-sm font-medium'>Date of Birth</label>
                        <input className='w-full h-12 px-3 rounded-lg border border-[#dbe6df] bg-white focus:outline-0 focus:ring-2 focus:ring-[#15ec5b] focus:border-transparent text-sm transition-all placeholder:text-lg' type="date" value='1990-05-15'  />
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              {/* Trainer Details */}
              <section className='bg-white rounded-xl border border-[#dbe6df] shadow-sm overflow-hidden'>
                <div className='p-8'>
                  <div className='flex flex-col items-start gap-8'>
                    {/* Heading */}
                    <div className='flex items-center justify-between border-b border-[#dbe6df] w-full pb-4'>
                      <h3 className='text-lg font-bold flex items-center gap-3'>
                        <i className="fa-solid fa-dumbbell text-[20px] text-[#15ec5b]"></i> 
                        Trainer Details
                      </h3>
                      <button className='text-sm font-semibold text-[#15ec5b] transition hover:underline'>Edit</button>
                    </div>

                    {/* Info Form */}
                    <div className='space-y-6 w-full'>
                      <div className='flex flex-col gap-1.5'>
                        <label className='text-sm font-medium'>Professional Bio</label>
                        <textarea className='w-full px-4 py-3 rounded-lg border border-[#dbe6df] bg-slate-50 focus:outline-0 focus:ring-2 focus:ring-[#15ec5b] focus:border-transparent text-sm transition-all resize-none' rows='4'>Certified Personal Trainer specializing in HIIT and Strength Training. Passionate about helping clients build sustainable healthy habits.</textarea>
                        <p className='text-xs text-[#61896f] text-right'>240/500 characters</p>
                      </div>

                      <div className='flex flex-col gap-1.5'>
                        <label className='text-sm font-medium'>Specialties</label>
                        <div className='flex flex-wrap gap-2'>
                          <div className='flex items-center gap-1 px-3 py-1.5 bg-[#15ec5b]/10 border border-[#15ec5b]/30 rounded-md text-sm font-medium group cursor-pointer hover:bg-[#15ec5b]/30 transition-colors'>
                            HIIT
                            <button className='text-[#61896f] hover:text-red-500'>
                              <i class="ri-close-fill text-[16px]"></i>
                            </button>
                          </div>

                          <div className='flex items-center gap-1 px-3 py-1.5 bg-[#15ec5b]/10 border border-[#15ec5b]/30 rounded-md text-sm font-medium group cursor-pointer hover:bg-[#15ec5b]/30 transition-colors'>
                            Strength Training
                            <button className='text-[#61896f] hover:text-red-500'>
                              <i class="ri-close-fill text-[16px]"></i>
                            </button>
                          </div>

                          <div className='flex items-center gap-1 px-3 py-1.5 bg-[#15ec5b]/10 border border-[#15ec5b]/30 rounded-md text-sm font-medium group cursor-pointer hover:bg-[#15ec5b]/30 transition-colors'>
                            Cardio
                            <button className='text-[#61896f] hover:text-red-500'>
                              <i class="ri-close-fill text-[16px]"></i>
                            </button>
                          </div>

                          <button className='flex items-center gap-1 px-3 py-1.5 bg-slate-50 border border-slate-300 border-dashed rounded-md text-sm font-medium group cursor-pointer hover:text-[#15ec5b] hover:border-[#15ec5b] transition-colors'>
                            <i class="ri-add-fill text-[16px]"></i>
                            Add Specialty
                          </button>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            {/* Right */}
            <div className='col-span-1 flex flex-col gap-6'>
              <section className='bg-white rounded-xl border border-[#dbe6df] shadow-sm overflow-hidden'>
                {/* Heading */}
                <div className='p-6 border-b border-[#dbe6df] flex items-center justify-between'>
                  <h3 className='text-lg font-bold flex items-center gap-3'>
                    <i class="fa-regular fa-bell text-[#15ec5b] text-[20px]"></i>
                    Notifications
                  </h3>
                </div>

                {/* Preferences */}
                <div className='p-6 flex flex-col gap-6'>
                  <div className='flex flex-col gap-4'>
                    <div className='flex items-center justify-between'>
                      <div className='flex flex-col'>
                        <span className='text-sm font-medium'>New Bookings</span>
                        <span className='text-xs text-[#61896f]'>Receive alerts for new sessions.</span>
                      </div>

                      <label className='relative inline-flex items-center cursor-pointer'>
                        <input defaultChecked className='sr-only peer' type="checkbox"/>
                        <div className='w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#15ec5b]'></div>
                      </label>
                    </div>

                    <div className='flex items-center justify-between'>
                      <div className='flex flex-col'>
                        <span className='text-sm font-medium'>Class Cancellations</span>
                        <span className='text-xs text-[#61896f]'>Notify me when a client cancels.</span>
                      </div>

                      <label className='relative inline-flex items-center cursor-pointer'>
                        <input defaultChecked className='sr-only peer'type="checkbox" />
                        <div className='w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#15ec5b]'></div>
                      </label>
                    </div>

                    <div className='flex items-center justify-between'>
                      <div className='flex flex-col'>
                        <span className='text-sm font-medium'>Marketing Emails</span>
                        <span className='text-xs text-[#61896f]'>Receive news and special offers.</span>
                      </div>

                      <label className='relative inline-flex items-center cursor-pointer'>
                        <input className='sr-only peer'type="checkbox" />
                        <div className='w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#15ec5b]'></div>
                      </label>
                    </div>
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
  )
}

export default TrainerSettings
