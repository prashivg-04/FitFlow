import React, { useContext } from 'react'
import SignupContext from './SignupContext';
import { useNavigate } from 'react-router-dom';

const TrainerSignup = () => {

  const { signupData, setSignupData } = useContext(SignupContext);

  // specialization
  // experienceYears
  // preferredDays
  // startTime
  // endTime
  // bio

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

              <div className='h-0.5 w-full bg-[#15ec5b] rounded-full overflow-hidden'>
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
            {/* Professional Information */}
            <div className='flex flex-col gap-5'>
              {/* Heading */}
              <div className='flex items-center gap-3 border-b border-gray-100 pb-3'>
                <div className='size-8 rounded-full bg-[#15ec5b]/20 flex items-center justify-center '>
                  <i class="ri-id-card-line text-lg text-[#15ec5b]"></i>
                </div>
                <h2 className='text-lg font-bold leading-tight'>Professional Information</h2>
              </div>

              {/* Form */}
              <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-2'>
                  <label className='flex flex-col flex-1 gap-2'>
                    <p className='text-sm font-medium leading-normal'>Specialization</p>
                    <div className='relative'>
                      <select className='form-select w-full h-12 bg-white rounded-lg border border-[#dbe6df] focus:outline-0 focus:ring-2 focus:ring-[#15ec5b]/50 focus:border-[#15ec5b] appearance-none cursor-pointer px-4' name="" id="">
                        <option disabled selected value>Select your main expertise...</option>
                        <option>Strength & Conditioning</option>
                        <option>Yoga & Pilates</option>
                        <option>HIIT & Cardio</option>
                        <option>Rehabilitation</option>
                      </select>
                      <div className='pointer-events-none absolute inset-y-0 right-0 top-1/2 flex items-center -translate-y-1/2 px-4'>
                        <i class="ri-arrow-down-s-fill text-m"></i>
                      </div>
                    </div>
                  </label>
                </div>

                <div className='flex flex-col gap-2'>
                  <label className='flex flex-col gap-2 flex-1'>
                    <p className='text-sm font-medium leading-normal'>Years of Experience</p>
                    <div className='grid grid-cols-3 gap-3'>
                        <label className='cursor-pointer'>
                            <input className='peer sr-only' type="radio" name="experience" />
                            <div className='flex flex-col items-center justify-center p-3 rounded-lg border-2 border-[#dbe6df] bg-white peer-checked:border-[#15ec5b] peer-checked:border-2 peer-checked:bg-[#15ec5b]/10 peer-hover:peer-not-checked:bg-gray-50 transition-all'>
                                <span className='text-lg font-bold'>0-2</span>
                                <span className='text-xs text-[#61896f]'>Years</span>
                            </div>
                        </label>
                        <label className='cursor-pointer'>
                            <input className='peer sr-only' type="radio" name="experience" />
                            <div className='flex flex-col items-center justify-center p-3 rounded-lg border-2 border-[#dbe6df] bg-white peer-checked:border-[#15ec5b] peer-checked:border-2 peer-checked:bg-[#15ec5b]/10 peer-hover:peer-not-checked:bg-gray-50 transition-all'>
                                <span className='text-lg font-bold'>3-5</span>
                                <span className='text-xs text-[#61896f]'>Years</span>
                            </div>
                        </label>
                        <label className='cursor-pointer'>
                            <input className='peer sr-only' type="radio" name="experience" />
                            <div className='flex flex-col items-center justify-center p-3 rounded-lg border-2 border-[#dbe6df] bg-white peer-checked:border-[#15ec5b] peer-checked:border-2 peer-checked:bg-[#15ec5b]/10 peer-hover:peer-not-checked:bg-gray-50 transition-all'>
                                <span className='text-lg font-bold'>5+</span>
                                <span className='text-xs text-[#61896f]'>Years</span>
                            </div>
                        </label>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Availability */}
            <div className='flex flex-col gap-5'>
              {/* Heading */}
              <div className='flex items-center gap-3 border-b border-gray-100 pb-3'>
                <div className='size-8 rounded-full bg-[#15ec5b]/20 flex items-center justify-center'>
                  <i class="ri-calendar-schedule-line text-lg text-[#15ec5b]"></i>
                </div>
                <h2 className='text-lg font-bold leading-tight'>Availability</h2>
              </div>

              {/* Form */}
              <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-2'>
                  <label className='flex flex-col gap-2 flex-1'>
                    <p className='text-sm font-medium leading-normal'>Preferred Working Days</p>
                    <div className='flex items-center gap-3'>
                        <label className='cursor-pointer'>
                            <input className='peer sr-only' type="checkbox" name="days" />
                            <div className='flex flex-col items-center justify-center w-10 h-10 rounded-full border-2 border-[#dbe6df] bg-white peer-checked:border-[#15ec5b] peer-checked:border-2 peer-checked:bg-[#15ec5b] peer-hover:peer-not-checked:bg-gray-50 transition-all'>
                            <span className='text-lg font-bold'>M</span>
                            </div>
                        </label>

                        <label className='cursor-pointer'>
                            <input className='peer sr-only' type="checkbox" name="days" />
                            <div className='flex flex-col items-center justify-center w-10 h-10 rounded-full border-2 border-[#dbe6df] bg-white peer-checked:border-[#15ec5b] peer-checked:border-2 peer-checked:bg-[#15ec5b] peer-hover:peer-not-checked:bg-gray-50 transition-all'>
                            <span className='text-lg font-bold'>T</span>
                            </div>
                        </label>

                        <label className='cursor-pointer'>
                            <input className='peer sr-only' type="checkbox" name="days" />
                            <div className='flex flex-col items-center justify-center w-10 h-10 rounded-full border-2 border-[#dbe6df] bg-white peer-checked:border-[#15ec5b] peer-checked:border-2 peer-checked:bg-[#15ec5b] peer-hover:peer-not-checked:bg-gray-50 transition-all'>
                            <span className='text-lg font-bold'>W</span>
                            </div>
                        </label>

                        <label className='cursor-pointer'>
                            <input className='peer sr-only' type="checkbox" name="days" />
                            <div className='flex flex-col items-center justify-center w-10 h-10 rounded-full border-2 border-[#dbe6df] bg-white peer-checked:border-[#15ec5b] peer-checked:border-2 peer-checked:bg-[#15ec5b] peer-hover:peer-not-checked:bg-gray-50 transition-all'>
                            <span className='text-lg font-bold'>T</span>
                            </div>
                        </label>

                        <label className='cursor-pointer'>
                            <input className='peer sr-only' type="checkbox" name="days" />
                            <div className='flex flex-col items-center justify-center w-10 h-10 rounded-full border-2 border-[#dbe6df] bg-white peer-checked:border-[#15ec5b] peer-checked:border-2 peer-checked:bg-[#15ec5b] peer-hover:peer-not-checked:bg-gray-50 transition-all'>
                            <span className='text-lg font-bold'>F</span>
                            </div>
                        </label>

                        <label className='cursor-pointer'>
                            <input className='peer sr-only' type="checkbox" name="days" />
                            <div className='flex flex-col items-center justify-center w-10 h-10 rounded-full border-2 border-[#dbe6df] bg-white peer-checked:border-[#15ec5b] peer-checked:border-2 peer-checked:bg-[#15ec5b] peer-hover:peer-not-checked:bg-gray-50 transition-all'>
                            <span className='text-lg font-bold'>S</span>
                            </div>
                        </label>

                        <label className='cursor-pointer'>
                            <input className='peer sr-only' type="checkbox" name="days" />
                            <div className='flex flex-col items-center justify-center w-10 h-10 rounded-full border-2 border-[#dbe6df] bg-white peer-checked:border-[#15ec5b] peer-checked:border-2 peer-checked:bg-[#15ec5b] peer-hover:peer-not-checked:bg-gray-50 transition-all'>
                            <span className='text-lg font-bold'>S</span>
                            </div>
                        </label>
                    </div>
                  </label>
                </div>

                <div className='col-span-2'>
                  <label className='flex flex-col flex-1 gap-2'>
                    <p className='text-sm font-medium leading-normal'>Operating Hours</p>
                    <div className='flex items-center gap-3'>
                      <div className='relative flex-1'>
                        <input className='w-full h-12 bg-white px-4 rounded-lg border border-[#dbe6df] focus:outline-none focus:ring-2 focus:ring-[#15ec5b]/50 focus:border-[#15ec5b] transition-all' type="time" value='09:00'/>
                      </div>
                      <span className='text-[#61896f]'>to</span>
                      <div className='relative flex-1'>
                        <input className='w-full h-12 bg-white px-4 rounded-lg border border-[#dbe6df] focus:outline-none focus:ring-2 focus:ring-[#15ec5b]/50 focus:border-[#15ec5b] transition-all' type="time" value='17:00'/>
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Tell me about yourself - bio */}
            <div className='flex flex-col gap-5'>
              {/* Heading */}
              <div className='flex items-center gap-3 border-b border-gray-100 pb-3'>
                <div className='size-8 rounded-full bg-[#15ec5b]/20 flex items-center justify-center'>
                  <i class="ri-user-line text-lg text-[#15ec5b]"></i>
                </div>
                <h2 className='text-lg font-bold leading-tight'>Tell me about yourself</h2>
              </div>

              {/* Form */}
              <div className='flex flex-col gap-5'>
                <div className='flex flex-col gap-2'>
                  <label className='flex flex-col gap-1 flex-1'>
                    <p className='text-sm font-medium leading-normal'>Bio </p>
                    <textarea className='form-input flex w-full min-h-30 resize-none overflow-hidden rounded-lg border border-[#dbe6df] focus:outline-0 focus:ring-2 focus:ring-[#15ec5b]/50 focus:border-[#15ec5b] px-4 py-3 text-base font-normal leading-normal transition-all' placeholder='A brief description about you, your training style, and what motivates you as a trainer...'></textarea>
                  </label>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className='flex items-center justify-between gap-4 pt-3'>
              <button className='bg-[#15ec5b] w-full py-3.5 px-8 rounded-lg shadow-lg shadow-[#15ec5b]/25 text-base font-bold transition-all flex items-center justify-center gap-2 hover:bg-[#11d450]'>
                <span>Join Gym & Continue</span>
                <i class="ri-arrow-right-line text-[20px] font-bold"></i>
              </button>
            </div>
          </div>

          {/* Conditions */}
          <p className='text-center text-xs text-gray-400 pb-8'>
            By clicking "Complete Signup", you agree to our
            <a className='text-[#15ec5b] hover:underline' href=""> Terms of Service</a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default TrainerSignup
