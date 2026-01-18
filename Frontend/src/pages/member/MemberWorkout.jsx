import React from 'react'
import gymImg from '../../media/gymSignup.jpeg'
import navjot from '../../media/navjotImg.jpeg'

const MemberWorkout = () => {
  return (
    <div className='flex-1 overflow-y-auto p-8 scroll-smooth'>
          <div className='max-w-7xl mx-auto space-y-8'>
            {/* Page Top */}
            <div className='flex flex-col gap-6'>
              {/* Heading */}
              <div className='flex items-center justify-between gap-4'>
                <div className='flex flex-col items-start'>
                  <h1 className='text-4xl font-bold tracking-tight'>Current Routine</h1>
                  <p className='text-[#61896f] text-lg mt-1'>Track your progress and stick to the plan.</p>
                </div>
                <div className='flex items-center gap-2'>
                  <button className='flex items-center gap-2 px-4 py-2 bg-white border border-[#dbe6df] rounded-xl text-sm font-semibold hover:bg-slate-50'>
                    <i className='ri-printer-line text-[18px]'></i>
                    Print Plan
                  </button>

                  <button className='flex items-center gap-2 px-4 py-2 bg-[#15ec5b] rounded-xl text-sm font-semibold hover:bg-[#0fd651]'>
                    <i className='ri-play-line text-[18px]'></i>
                    Log Activity
                  </button>
                </div>
              </div>

              {/* Hero Card */}
              <div className='bg-white rounded-2xl p-6 border border-[#dbe6df] shadow-sm group overflow-hidden'>
                <div className='flex gap-8 relative'>
                  <div className='flex-1 flex flex-col justify-between min-h-35'>
                    <div>
                      <div className='flex items-center gap-3 mb-2'>
                        <span className='inline-flex items-center justify-center text-sm font-bold bg-green-50 text-green-700 px-2 py-1 border border-green-200 rounded uppercase tracking-wider'>Active Plan</span>
                        <span className='text-[#61896f] text-xs font-semibold flex items-center gap-1'>
                          <i class="fa-regular fa-calendar text-[14px]"></i>
                          Updated 2 days ago
                        </span>
                      </div>
                      <h2 className='text-3xl font-bold mb-2'>Summer Shred: Phase 1</h2>
                      <div className='flex items-center gap-2 text-[#61896f]'>
                        <img className='size-8 rounded-full bg-gray-100 bg-cover bg-center object-cover' src={navjot} alt="" />
                        <span>Assigned by Coach Sarah</span>
                      </div>
                    </div>

                    <div className='mt-6'>
                      <div className='flex items-center justify-between text-sm font-medium mb-2'>
                        <span>Program Progress</span>
                        <span>Week 3 of 8</span>
                      </div>
                      <div className='w-full h-2 bg-slate-200 rounded-full overflow-hidden'>
                        <div className='h-full rounded-full bg-[#15ec5b] w-[37%]'></div>
                      </div>
                    </div>
                  </div>

                  <div className='grid grid-cols-4 gap-4 w-auto border-l border-gray-100 pl-8'>
                    <div className='bg-gray-50 rounded-xl p-4 flex flex-col items-center justify-center text-center min-h-25'>
                      <span className='text-2xl font-black'>4</span>
                      <span className='text-xs font-medium text-[#61896f] mt-1'>Workouts / Wk</span>
                    </div>

                    <div className='bg-gray-50 rounded-xl p-4 flex flex-col items-center justify-center text-center min-h-25'>
                      <span className='text-2xl font-black'>60</span>
                      <span className='text-xs font-medium text-[#61896f] mt-1'>Min / Session</span>
                    </div>

                    <div className='bg-gray-50 rounded-xl p-4 flex flex-col items-center justify-center text-center min-h-25'>
                      <span className='text-2xl font-black'>Hyper</span>
                      <span className='text-xs font-medium text-[#61896f] mt-1'>Focus Type</span>
                    </div>

                    <div className='bg-gray-50 rounded-xl p-4 flex flex-col items-center justify-center text-center min-h-25'>
                      <span className='text-2xl font-black'>Int</span>
                      <span className='text-xs font-medium text-[#61896f] mt-1'>Difficulty</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Day Tabs */}
            <div className='border-b border-gray-200 overflow-x-auto'>
              <nav aria-label='Tabs' className='-mb-px flex space-x-8'>
                <a className='border-b-3 border-[#15ec5b] text-sm font-bold text-[#15ec5b] py-4 px-1 whitespace-nowrap' href="">Day 1: Upper Power</a>
                <a className='border-b-3 border-transparent text-[#61896f] hover:text-slate-900 hover:border-gray-300 whitespace-nowrap py-4 px-1 text-sm font-medium' href="">Day 2: Lower Power</a>
                <a className='border-b-3 border-transparent text-[#61896f] hover:text-slate-900 hover:border-gray-300 whitespace-nowrap py-4 px-1 text-sm font-medium' href="">Day 3: Rest / Cardio</a>
                <a className='border-b-3 border-transparent text-[#61896f] hover:text-slate-900 hover:border-gray-300 whitespace-nowrap py-4 px-1 text-sm font-medium' href="">Day 4: Upper Hypertrophy</a>
              </nav>
            </div>

            {/* Exercises and Notes */}
            <div className='grid grid-cols-3 gap-8 items-start'>
              {/* Left */}
              <div className='col-span-2 space-y-4'>
                <div className='flex items-center justify-between mb-2'>
                  <h3 className='text-lg font-bold'>Workout Details</h3>
                  <span className='text-xs font-semibold px-2 py-1 text-[#61896f] bg-slate-100 rounded'>6 Exercises</span>
                </div>

                <div className='bg-white border border-[#dbe6df] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow'>
                  <div className='flex gap-5 '>
                    <img className='w-28 rounded-lg bg-gray-200 bg-cover bg-center shrink-0 object-cover' src={gymImg} alt="" />
                    <div className='flex-1 '>
                      <div className='flex items-start justify-between mb-2'>
                        <div>
                          <h4 className='text-base font-bold'>Barbell Bench Press</h4>
                          <p className='text-sm text-[#61896f]'>Primary Compound Movement</p>
                        </div>
                        <button className='text-[#61896f] hover:text-[#15ec5b] transition-colors'>
                          <i class="ri-information-line text-[18px]"></i>
                        </button>
                      </div>
                      <div className='grid grid-cols-4 gap-2 mt-4'>
                        <div className='bg-gray-50 p-2 rounded text-center'>
                          <span className='block text-[10px] text-[#61896f] font-bold uppercase tracking-wider'>Sets</span>
                          <span className='block text-sm font-bold'>4</span>
                        </div>
                        <div className='bg-gray-50 p-2 rounded text-center'>
                          <span className='block text-[10px] text-[#61896f] font-bold uppercase tracking-wider'>Reps</span>
                          <span className='block text-sm font-bold'>6-8</span>
                        </div>
                        <div className='bg-gray-50 p-2 rounded text-center'>
                          <span className='block text-[10px] text-[#61896f] font-bold uppercase tracking-wider'>RPE</span>
                          <span className='block text-sm font-bold'>8</span>
                        </div>
                        <div className='bg-gray-50 p-2 rounded text-center'>
                          <span className='block text-[10px] text-[#61896f] font-bold uppercase tracking-wider'>Rest</span>
                          <span className='block text-sm font-bold'>3m</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='bg-white border border-[#dbe6df] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow'>
                  <div className='flex gap-5 '>
                    <img className='w-28 rounded-lg bg-gray-200 bg-cover bg-center shrink-0 object-cover' src={gymImg} alt="" />
                    <div className='flex-1 '>
                      <div className='flex items-start justify-between mb-2'>
                        <div>
                          <h4 className='text-base font-bold'>Weighted Pull-Ups</h4>
                          <p className='text-sm text-[#61896f]'>Vertical Pull</p>
                        </div>
                        <button className='text-[#61896f] hover:text-[#15ec5b] transition-colors'>
                          <i class="ri-information-line text-[18px]"></i>
                        </button>
                      </div>
                      <div className='grid grid-cols-4 gap-2 mt-4'>
                        <div className='bg-gray-50 p-2 rounded text-center'>
                          <span className='block text-[10px] text-[#61896f] font-bold uppercase tracking-wider'>Sets</span>
                          <span className='block text-sm font-bold'>3</span>
                        </div>
                        <div className='bg-gray-50 p-2 rounded text-center'>
                          <span className='block text-[10px] text-[#61896f] font-bold uppercase tracking-wider'>Reps</span>
                          <span className='block text-sm font-bold'>8-10</span>
                        </div>
                        <div className='bg-gray-50 p-2 rounded text-center'>
                          <span className='block text-[10px] text-[#61896f] font-bold uppercase tracking-wider'>RPE</span>
                          <span className='block text-sm font-bold'>8.5</span>
                        </div>
                        <div className='bg-gray-50 p-2 rounded text-center'>
                          <span className='block text-[10px] text-[#61896f] font-bold uppercase tracking-wider'>Rest</span>
                          <span className='block text-sm font-bold'>2m</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='bg-white border border-[#dbe6df] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow'>
                  <div className='flex gap-5 '>
                    <img className='w-28 rounded-lg bg-gray-200 bg-cover bg-center shrink-0 object-cover' src={gymImg} alt="" />
                    <div className='flex-1 '>
                      <div className='flex items-start justify-between mb-2'>
                        <div>
                          <h4 className='text-base font-bold'>Seated Dumbbell Press</h4>
                          <p className='text-sm text-[#61896f]'>Vertical Push</p>
                        </div>
                        <button className='text-[#61896f] hover:text-[#15ec5b] transition-colors'>
                          <i class="ri-information-line text-[18px]"></i>
                        </button>
                      </div>
                      <div className='grid grid-cols-4 gap-2 mt-4'>
                        <div className='bg-gray-50 p-2 rounded text-center'>
                          <span className='block text-[10px] text-[#61896f] font-bold uppercase tracking-wider'>Sets</span>
                          <span className='block text-sm font-bold'>3</span>
                        </div>
                        <div className='bg-gray-50 p-2 rounded text-center'>
                          <span className='block text-[10px] text-[#61896f] font-bold uppercase tracking-wider'>Reps</span>
                          <span className='block text-sm font-bold'>10-12</span>
                        </div>
                        <div className='bg-gray-50 p-2 rounded text-center'>
                          <span className='block text-[10px] text-[#61896f] font-bold uppercase tracking-wider'>RPE</span>
                          <span className='block text-sm font-bold'>9</span>
                        </div>
                        <div className='bg-gray-50 p-2 rounded text-center'>
                          <span className='block text-[10px] text-[#61896f] font-bold uppercase tracking-wider'>Rest</span>
                          <span className='block text-sm font-bold'>90s</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                <div className='bg-white border border-[#dbe6df] rounded-xl p-5 shadow-sm hover:shadow-md transition-shadow'>
                  <div className='flex gap-5 '>
                    <img className='w-28 rounded-lg bg-gray-200 bg-cover bg-center shrink-0 object-cover' src={gymImg} alt="" />
                    <div className='flex-1 '>
                      <div className='flex items-start justify-between mb-2'>
                        <div>
                          <h4 className='text-base font-bold'>Cable Tricep Pushdowns</h4>
                          <p className='text-sm text-[#61896f]'>Accessory Isolation</p>
                        </div>
                        <button className='text-[#61896f] hover:text-[#15ec5b] transition-colors'>
                          <i class="ri-information-line text-[18px]"></i>
                        </button>
                      </div>
                      <div className='grid grid-cols-4 gap-2 mt-4'>
                        <div className='bg-gray-50 p-2 rounded text-center'>
                          <span className='block text-[10px] text-[#61896f] font-bold uppercase tracking-wider'>Sets</span>
                          <span className='block text-sm font-bold'>3</span>
                        </div>
                        <div className='bg-gray-50 p-2 rounded text-center'>
                          <span className='block text-[10px] text-[#61896f] font-bold uppercase tracking-wider'>Reps</span>
                          <span className='block text-sm font-bold'>12-15</span>
                        </div>
                        <div className='bg-gray-50 p-2 rounded text-center'>
                          <span className='block text-[10px] text-[#61896f] font-bold uppercase tracking-wider'>RPE</span>
                          <span className='block text-sm font-bold'>9</span>
                        </div>
                        <div className='bg-gray-50 p-2 rounded text-center'>
                          <span className='block text-[10px] text-[#61896f] font-bold uppercase tracking-wider'>Rest</span>
                          <span className='block text-sm font-bold'>60s</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className='space-y-6'>
                {/* Coach Note */}
                <div className='bg-[#eefcf2] border border-[#15ec5b]/20 rounded-xl p-6 relative overflow-hidden'>
                  <div className='absolute -top-10 -right-2 rotate-12 text-[#15ec5b]/10'>
                    <i class="ri-double-quotes-r text-[120px]"></i>
                  </div>
                  <h3 className='text-lg font-bold mb-4 z-10 flex items-center gap-4'>
                    <i class="fa-regular fa-pen-to-square text-[#15ec5b]"></i>
                    Coach's Notes
                  </h3>
                  <p className='text-md leading-relaxed'>
                    "Hey Alex! For this week's Upper Power session, I want you to really focus on the
                    <strong> eccentric (lowering) phase </strong>
                    of your bench press. Control the weight for 3 seconds on the way down. Don't sacrifice form for weight!"
                  </p>
                  <div className='mt-4 pt-4 border-t border-[#15ec5b]/10 flex items-center gap-3'>
                    <img className='size-8 rounded-full bg-gray-50 bg-center bg-cover object-cover' src={navjot} alt="" />
                    <span className='text-sm font-semibold text-green-600'>Sarah J.</span>
                  </div>
                </div>

                {/* Last Session Stats */}
                <div className='bg-white border border-[#dbe6df] rounded-xl p-6 shadow-sm'>
                  <h3 className='text-lg font-bold mb-4'>Last Session Stats</h3>
                  <div className='space-y-4'>
                    <div className='flex justify-between items-center border-b border-gray-100 pb-3 last:border-0 last:pb-0'>
                      <div>
                        <p className='text-sm font-semibold'>Bench Press</p>
                        <p className='text-xs text-[#61896f]'>Last Week</p>
                      </div>
                      <div className='text-right'>
                        <p className='text-sm font-bold'>185 lbs</p>
                        <p className='text-xs text-green-600 font-medium'>+5lbs</p>
                      </div>
                    </div>

                    <div className='flex justify-between items-center border-b border-gray-100 pb-3 last:border-0 last:pb-0'>
                      <div>
                        <p className='text-sm font-semibold'>Pull Ups</p>
                        <p className='text-xs text-[#61896f]'>Last Week</p>
                      </div>
                      <div className='text-right'>
                        <p className='text-sm font-bold'>BW + 25lbs</p>
                        <p className='text-xs text-[#61896f] font-medium'>No change</p>
                      </div>
                    </div>

                    <div className='flex justify-between items-center border-b border-gray-100 pb-3 last:border-0 last:pb-0'>
                      <div>
                        <p className='text-sm font-semibold'>Bench Press</p>
                        <p className='text-xs text-[#61896f]'>Last Week</p>
                      </div>
                      <div className='text-right'>
                        <p className='text-sm font-bold'>55lbs</p>
                        <p className='text-xs text-green-600 font-medium'>+2.5lbs</p>
                      </div>
                    </div>
                  </div>
                  <button className='w-full mt-5 py-2 text-[#15ec5b] text-sm font-bold hover:bg-[#15ec5b]/5 rounded-lg border border-transparent hover:border-[#15ec5b]/20 transition-all'>View Full History</button>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}

export default MemberWorkout
