import React, { useState, useContext } from 'react'
import SignupContext from './SignupContext';
import { useNavigate } from 'react-router-dom';

const MemberSignup = () => {

  const [experienceLevel, setExperienceLevel] = useState('beginner');

  const { signupData, setSignupData } = useContext(SignupContext);

  // dateOfBirth
  // gender
  // heightCm
  // weightKg
  // goal
  // experienceLevel

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
            {/* Basic Fitness Details */}
            <div className='flex flex-col gap-5'>
              {/* Heading */}
              <div className='flex items-center gap-3 border-b border-gray-100 pb-3'>
                <div className='size-8 rounded-full bg-[#15ec5b]/20 flex items-center justify-center '>
                  <i class="ri-user-line text-lg text-[#15ec5b]"></i>
                </div>
                <h2 className='text-lg font-bold leading-tight'>Basic Fitness Details</h2>
              </div>

              {/* Form */}
              <div className='grid grid-cols-2 gap-5'>
                <div>
                  <label className='flex flex-col flex-1 gap-2'>
                    <p className='text-sm font-medium leading-normal'>Date of Birth</p>
                    <input className='form-input w-full h-12 rounded-lg border border-[#dbe6df] bg-white px-4 text-base font-normal leading-normal placeholder:text-[#61896f] focus:outline-0 focus:ring-2 focus:ring-[#15ec5b]/50 focus:border-[#15ec5b] transition-all' type="date" placeholder='Select your date of birth'/>
                  </label>
                </div>

                <div>
                  <label className='flex flex-col flex-1 gap-2'>
                    <p className='text-sm font-medium leading-normal'>Gender</p>
                    <div className='relative'>
                      <select className='form-select w-full h-12 bg-white rounded-lg border border-[#dbe6df] focus:outline-0 focus:ring-2 focus:ring-[#15ec5b]/50 focus:border-[#15ec5b] appearance-none cursor-pointer px-4' name="" id="">
                        <option disabled selected value>Select Gender</option>
                        <option>Male</option>
                        <option>Female</option>
                        <option>Prefer not to say</option>
                      </select>
                      <div className='pointer-events-none absolute inset-y-0 right-0 top-1/2 flex items-center -translate-y-1/2 px-4'>
                        <i class="ri-arrow-down-s-fill text-m"></i>
                      </div>
                    </div>
                  </label>
                </div>

                <div>
                  <label className='flex flex-col flex-1 gap-2'>
                    <p className='text-sm font-medium leading-normal'>Height</p>
                    <div className='flex items-center relative'>
                        <input className='form-input w-full h-12 rounded-lg border border-[#dbe6df] bg-white px-4 text-base font-normal leading-normal placeholder:text-[#61896f] focus:outline-0 focus:ring-2 focus:ring-[#15ec5b]/50 focus:border-[#15ec5b] transition-all' type="number" placeholder='e.g. 175'/>
                        <div className='absolute right-2 top-1/2 -translate-y-1/2 flex bg-[#f7f8f6] rounded-md border border-[#dbe6df] p-0.5 text-sm font-medium'>
                            <span className='text-[#7e9f89] rounded bg-white px-2 py-1 cursor-pointer'>cm</span>
                        </div>
                    </div>
                  </label>
                </div>

                <div>
                  <label className='flex flex-col flex-1 gap-2'>
                    <p className='text-sm font-medium leading-normal'>Weight</p>
                    <div className='flex items-center relative'>
                        <input className='form-input w-full h-12 rounded-lg border border-[#dbe6df] bg-white px-4 text-base font-normal leading-normal placeholder:text-[#61896f] focus:outline-0 focus:ring-2 focus:ring-[#15ec5b]/50 focus:border-[#15ec5b] transition-all' type="number" placeholder='e.g. 82'/>
                        <div className='absolute right-2 top-1/2 -translate-y-1/2 flex bg-[#f7f8f6] rounded-md border border-[#dbe6df] p-0.5 text-sm font-medium'>
                            <span className='text-[#7e9f89] rounded bg-white px-2 py-1 cursor-pointer'>kg</span>
                        </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Fitness Goals */}
            <div className='flex flex-col gap-5'>
              {/* Heading */}
              <div className='flex items-center gap-3 border-b border-gray-100 pb-3'>
                <div className='size-8 rounded-full bg-[#15ec5b]/20 flex items-center justify-center'>
                  <i class="ri-flag-line text-lg text-[#15ec5b]"></i>
                </div>
                <h2 className='text-lg font-bold leading-tight'>Fitness Goals</h2>
              </div>

              {/* Form */}
              <div className='flex flex-col items-center gap-5'>
                <div className='flex flex-col gap-2 w-full'>
                  <label className='flex flex-col gap-2 flex-1'>
                    <div className='grid grid-cols-3 gap-3'>
                        <label className='cursor-pointer '>
                            <input className='peer sr-only' type="radio" name="experience" />
                            <div className='flex flex-col items-center justify-center p-3 rounded-lg border-2 bg-[#f7f8f6] border-[#dbe6df] peer-checked:border-[#15ec5b] peer-checked:border-2 peer-checked:bg-[#15ec5b]/10 peer-hover:peer-not-checked:bg-gray-50 transition-all gap-3'>
                                <div className='size-10 rounded-full bg-white flex items-center justify-center text-[#15ec5b] shadow-sm'>
                                    <i class="fa-solid fa-weight-scale"></i>
                                </div>
                                <span className='text-xs text-slate-900 font-semibold '>Weight Loss</span>
                            </div>
                        </label>

                        <label className='cursor-pointer '>
                            <input className='peer sr-only' type="radio" name="experience" />
                            <div className='flex flex-col items-center justify-center p-3 rounded-lg border-2 bg-[#f7f8f6] border-[#dbe6df] peer-checked:border-[#15ec5b] peer-checked:border-2 peer-checked:bg-[#15ec5b]/10 peer-hover:peer-not-checked:bg-gray-50 transition-all gap-3'>
                                <div className='size-10 rounded-full bg-white flex items-center justify-center text-[#15ec5b] shadow-sm'>
                                    <i class="fa-solid fa-dumbbell"></i>
                                </div>
                                <span className='text-xs text-slate-900 font-semibold '>Muscle Gain</span>
                            </div>
                        </label>

                        <label className='cursor-pointer '>
                            <input className='peer sr-only' type="radio" name="experience" />
                            <div className='flex flex-col items-center justify-center p-3 rounded-lg border-2 bg-[#f7f8f6] border-[#dbe6df] peer-checked:border-[#15ec5b] peer-checked:border-2 peer-checked:bg-[#15ec5b]/10 peer-hover:peer-not-checked:bg-gray-50 transition-all gap-3'>
                                <div className='size-10 rounded-full bg-white flex items-center justify-center text-[#15ec5b] shadow-sm'>
                                    <i class="fa-solid fa-heart-pulse"></i>
                                </div>
                                <span className='text-xs text-slate-900 font-semibold '>Weight Loss</span>
                            </div>
                        </label>
                    </div>
                  </label>
                </div>

                <div className='flex flex-col gap-2 w-full'>
                    <p className='text-sm font-medium leading-normal'>Experience Level</p>
                    <div className='flex w-full h-14 rounded-lg bg-[#f0f4f2] p-1 relative'>
                        {/* Sliding Background */}
                        <div 
                        className='absolute h-[calc(100%-8px)] rounded-md bg-white shadow-[0_0_4px_#0000001a] transition-all duration-300 ease-in-out top-1'
                        style={{
                            width: 'calc(33.333% - 5.33px)',
                            left: experienceLevel === 'beginner' ? '4px' : experienceLevel === 'intermediate' ? 'calc(33.333% + 1.33px)' : 'calc(66.666% - 1.33px)'
                        }}
                        />

                        <label className='flex-1 cursor-pointer relative z-10'>
                        <input 
                            checked={experienceLevel === 'beginner'}
                            className='sr-only' 
                            type="radio" 
                            name='role' 
                            value="beginner"
                            onChange={(e) => setExperienceLevel(e.target.value)}
                        />
                        <div className={`flex h-full w-full items-center justify-center rounded-md text-sm font-medium transition-colors duration-300 ${
                            experienceLevel === 'beginner' ? 'text-slate-900' : 'text-[#61896f]'
                        }`}>
                            Beginner
                        </div>
                        </label>

                        <label className='flex-1 cursor-pointer relative z-10'>
                        <input 
                            checked={experienceLevel === 'intermediate'}
                            className='sr-only' 
                            type="radio" 
                            name='role' 
                            value="intermediate" 
                            onChange={(e) => setExperienceLevel(e.target.value)}
                        />
                        <div className={`flex h-full w-full items-center justify-center rounded-md text-sm font-medium transition-colors duration-300 ${
                            experienceLevel === 'intermediate' ? 'text-slate-900' : 'text-[#61896f]'
                        }`}>
                            Intermediate
                        </div>
                        </label>

                        <label className='flex-1 cursor-pointer relative z-10'>
                        <input 
                            checked={experienceLevel === 'advanced'}
                            className='sr-only' 
                            type="radio" 
                            name='role' 
                            value="advanced" 
                            onChange={(e) => setExperienceLevel(e.target.value)}
                        />
                        <div className={`flex h-full w-full items-center justify-center rounded-md text-sm font-medium transition-colors duration-300 ${
                            experienceLevel === 'advanced' ? 'text-slate-900' : 'text-[#61896f]'
                        }`}>
                            Advanced
                        </div>
                        </label>
                    </div>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className='flex items-center justify-between gap-4 pt-2'>
              <button className='bg-[#15ec5b] w-full py-3.5 px-8 rounded-lg shadow-lg shadow-[#15ec5b]/25 text-base font-bold transition-all flex items-center justify-center gap-2 hover:bg-[#11d450]'>
                <span>Complete Signup</span>
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

export default MemberSignup
