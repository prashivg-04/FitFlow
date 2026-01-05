import React from 'react'

const OwnerSignup = () => {
  return (
    <div className='bg-[#f7f8f6] font-display text-slate-900 min-h-screen flex flex-col overflow-x-hidden antialiased'>
      <div className='layout-container flex flex-col items-center h-full py-8 px-4'>
        <div className='w-full max-w-200 flex flex-col gap-6'>
          {/* Header */}
          <div className='flex flex-col gap-4'>
            {/* Progress */}
            <div className='flex flex-col gap-2'>
              <div className='flex justify-between items-end'>
                <p className='text-sm font-semibold uppercase tracking-wider'>
                  Step 2 of 2
                </p>

                <p className='text-xs font-medium text-[#61896f]'>
                  Almost Done
                </p>
              </div>

              <div className='h-2 w-full bg-[#dbe6df] rounded-full overflow-hidden'>
                <div className='h-full bg-[#15ec5b] w-[90%] rounded-l-full shadow-[0_0_10px_#13ec5b]'></div>
              </div>
            </div>

            {/* Heading */}
            <div className='flex flex-col gap-2 mt-4'>
              <h1 className='text-4xl font-black leading-tight tracking-tight'>
                Set Up Your Gym
              </h1>

              <p className='text-[#61896f] text-base font-normal leading-normal max-w-lg'>
                Let’s get your gym ready in under 2 minutes. We just need a few details to customize your dashboard.
              </p>
            </div>
          </div>

          {/* Form */}
          <div className='bg-white rounded-2xl shadow-soft border border-transparent p-8 flex flex-col gap-8 mt-2'>
            {/* Gym Info */}
            <div className='flex flex-col gap-5'>
              {/* Heading */}
              <div className='flex items-center gap-3 border-b border-gray-100 pb-3'>
                <div className='size-8 rounded-full bg-[#15ec5b]/20 flex items-center justify-center '>
                  <i class="fa-solid fa-dumbbell text-lg text-[#15ec5b]"></i>
                </div>
                <h2 className='text-lg font-bold leading-tight'>Gym Information</h2>
              </div>

              {/* Form */}
              <div className='grid grid-cols-2 gap-5'>
                <div className='col-span-2'>
                  <label className='flex flex-col gap-1 flex-1'>
                    <p className='text-sm font-medium leading-normal'>Gym Name</p>
                    <input 
                      className='form-input flex w-full h-12 mt-1 resize-none overflow-hidden rounded-lg focus:outline-0 focus:ring-2 focus:ring-[#15ec5b]/50 border border-[#dbe6df] bg-white focus:border-[#15ec5b] placeholder:text-[#61896f] px-4 text-base font-normal leading-normal transition-all'
                      type="text" 
                      placeholder='e.g. Iron Paradise Gym'
                    />
                  </label>
                </div>

                <div className='col-span-2'>
                  <label className='flex flex-col gap-1 flex-1'>
                    <p className='text-sm font-medium leading-normal'>Gym Address</p>
                    <div className='relative'>
                      <i class="ri-map-pin-2-line absolute left-4 mt-7 -translate-y-1/2 text-[20px] text-[#61896f]"></i>
                      <input 
                        className='form-input flex w-full h-12 mt-1 resize-none overflow-hidden rounded-lg focus:outline-0 focus:ring-2 focus:ring-[#15ec5b]/50 border border-[#dbe6df] bg-white focus:border-[#15ec5b] placeholder:text-[#61896f] pl-11 pr-4 text-base font-normal leading-normal transition-all'
                        type="text" 
                        placeholder='123 Fitness Blvd' 
                      />
                    </div>
                  </label>
                </div>

                <div>
                  <label className='flex flex-col gap-2 flex-1'>
                    <p className='text-sm font-medium leading-normal'>City</p>
                    <input className='form-input flex w-full h-12 overflow-hidden rounded-lg bg-white border border-[#dbe6df] focus:outline-0 focus:ring-2 focus:ring-[#15ec5b]/50 focus:border-[#15ec5b] placeholder:text-[#61896f] px-4 text-base font-normal leading-normal transition-all' type="text" placeholder='New York' />
                  </label>
                </div>

                <div>
                  <label className='flex flex-col gap-2 flex-1'>
                    <p className='text-sm font-medium leading-normal'>Contact Number</p>
                    <input className='form-input flex w-full h-12 overflow-hidden rounded-lg bg-white border border-[#dbe6df] focus:outline-0 focus:ring-2 focus:ring-[#15ec5b]/50 focus:border-[#15ec5b] placeholder:text-[#61896f] px-4 text-base font-normal leading-normal transition-all' type="tel" placeholder='+1 (555) 000-0000' />
                  </label>
                </div>

                <div className='col-span-2'>
                  <label className='flex flex-col gap-2 flex-1'>
                    <div className='flex justify-between'>
                      <p className='text-sm font-medium leading-normal'>Gym Email</p>
                      <span className='text-xs text-gray-400 font-normal'>Optional</span>
                    </div>
                    <input className='form-input flex w-full h-12 overflow-hidden rounded-lg bg-white border border-[#dbe6df] focus:outline-0 focus:ring-2 focus:ring-[#15ec5b]/50 focus:border-[#15ec5b] placeholder:text-[#61896f] px-4 text-base font-normal leading-normal transition-all' type="email" placeholder='contact@ironparadise.com' />
                  </label>
                </div>
              </div>
            </div>

            {/* Business Details */}
            <div className='flex flex-col gap-5'>
              {/* Heading */}
              <div className='flex items-center gap-3 border-b border-gray-100 pb-3'>
                <div className='size-8 rounded-full bg-[#15ec5b]/20 flex items-center justify-center'>
                  <i class="ri-building-line text-lg text-[#15ec5b]"></i>
                </div>
                <h2 className='text-lg font-bold leading-tight'>Business Details</h2>
              </div>

              {/* Form */}
              <div className='grid grid-cols-2 gap-5'>
                <div>
                  <label className='flex flex-col flex-1 gap-2'>
                    <p className='text-sm font-medium leading-normal'>Number of Trainers</p>
                    <div className='relative'>
                      <select className='form-select w-full h-12 bg-white rounded-lg border border-[#dbe6df] focus:outline-0 focus:ring-2 focus:ring-[#15ec5b]/50 focus:border-[#15ec5b] appearance-none cursor-pointer px-4' name="" id="">
                        <option disabled selected value>Select Range</option>
                        <option>1-5 Trainers</option>
                        <option>5-10 Trainers</option>
                        <option>10-20 Trainers</option>
                        <option>20+ Trainers</option>
                      </select>
                      <div className='pointer-events-none absolute inset-y-0 right-0 top-1/2 flex items-center -translate-y-1/2 px-4'>
                        <i class="ri-arrow-down-s-fill text-m"></i>
                      </div>
                    </div>
                  </label>
                </div>

                <div>
                  <label className='flex flex-col flex-1 gap-2'>
                    <p className='text-sm font-medium leading-normal'>Approx. Members</p>
                    <input className='form-input w-full h-12 rounded-lg border border-[#dbe6df] bg-white px-4 text-base font-normal leading-normal placeholder:text-[#61896f] focus:outline-0 focus:ring-2 focus:ring-[#15ec5b]/50 focus:border-[#15ec5b] transition-all' type="number" placeholder='e.g. 150'/>
                  </label>
                </div>

                <div className='col-span-2'>
                  <label className='flex flex-col flex-1 gap-2'>
                    <p className='text-sm font-medium leading-normal'>Operating Hours</p>
                    <div className='flex items-center gap-3'>
                      <div className='relative flex-1'>
                        <span className='absolute left-3 top-1/2 -translate-y-1/2 text-[#61896f] text-xs font-semibold uppercase'>OPEN</span>
                        <input className='w-full h-12 bg-white pl-14 pr-4 rounded-lg border border-[#dbe6df] focus:outline-none focus:ring-2 focus:ring-[#15ec5b]/50 focus:border-[#15ec5b] transition-all' type="time" value='06:00'/>
                      </div>
                      <span>-</span>
                      <div className='relative flex-1'>
                        <span className='absolute left-3 top-1/2 -translate-y-1/2 text-[#61896f] text-xs font-semibold uppercase'>CLOSE</span>
                        <input className='w-full h-12 bg-white pl-14 pr-4 rounded-lg border border-[#dbe6df] focus:outline-none focus:ring-2 focus:ring-[#15ec5b]/50 focus:border-[#15ec5b] transition-all' type="time" value='22:00'/>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Membership Plan */}
            <div className='flex flex-col gap-4 p-5 bg-[#f7f8f6] rounded-xl border border-dashed border-[#dbe6df]'>
              {/* Heading */}
              <div className='flex items-center justify-between'>
                <div className='flex items-center gap-3'>
                  <i class="fa-regular fa-credit-card text-gray-600"></i>
                  <h3 className='text-base font-bold'>Membership Setup</h3>
                </div>

                <span className='text-[10px] tracking-wide font-bold text-gray-500 bg-gray-200 px-2 py-1 rounded-full uppercase'>Optional</span>
              </div>

              {/* Form */}
              <div className='grid grid-cols-3 gap-4'>
                <div className='col-span-1'>
                  <label className='flex flex-col gap-1.5'>
                    <span className='text-xs font-medium text-gray-500 uppercase tracking-wide'>Plan Name</span>
                    <input className='h-10 w-full rounded-md bg-white border border-[#dbe6df] focus:outline-none focus:ring-2 focus:ring-[#15ec5b]/50 focus:border-[#15ec5b] px-3 text-sm transition-all' type="text" placeholder='Standard'/>
                  </label>
                </div>

                <div className='col-span-1'>
                  <label className='flex flex-col gap-1.5'>
                    <span className='text-xs font-medium text-gray-500 uppercase tracking-wide'>Monthly Price</span>
                    <div className='relative'>
                      <span className='absolute left-3 top-1/2 -translate-y-1/2 text-gray-500 text-sm'>$</span>
                      <input className='h-10 w-full rounded-md bg-white border border-[#dbe6df] focus:outline-none focus:ring-2 focus:ring-[#15ec5b]/50 focus:border-[#15ec5b] pl-6 px-3 text-sm transition-all' type="number" placeholder='50'/>
                    </div>
                  </label>
                </div>

                <div className='col-span-1'>
                  <label className='flex flex-col gap-1.5'>
                    <span className='text-xs font-medium text-gray-500 uppercase tracking-wide'>Duration</span>
                    <div className='relative'>
                      <select className='h-10 w-full rounded-md bg-white border border-[#dbe6df] focus:outline-none focus:ring-2 focus:ring-[#15ec5b]/50 focus:border-[#15ec5b] pl-3 pr-8 text-sm transition-all appearance-none' name="" id="">
                        <option>1 Month</option>
                        <option>3 Month</option>
                        <option>6 Month</option>
                        <option>1 Year</option>
                      </select>
                      <i class="ri-arrow-drop-down-fill absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 text-lg pointer-events-none"></i>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className='flex items-center justify-between gap-4 pt-4 mt-2'>
              <button className='px-6 py-3 text-sm font-semibold text-gray-500 hover:text-slate-900 transition-colors'>Skip for now</button>
              <button className='bg-[#15ec5b] py-3.5 px-8 rounded-lg shadow-lg shadow-[#15ec5b]/25 text-base font-bold transition-all flex items-center justify-center gap-2 hover:bg-[#11d450]'>
                <span>Create Gym & Continue</span>
                <i class="ri-arrow-right-line text-[20px] font-bold"></i>
              </button>
            </div>
          </div>

          {/* Conditions */}
          <p className='text-center text-xs text-gray-400 pb-8'>
            By clicking "Create Gym", you agree to our Terms of Service.
          </p>
        </div>
      </div>
    </div>
  )
}

export default OwnerSignup
