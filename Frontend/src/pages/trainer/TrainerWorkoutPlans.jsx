import React from 'react'
import navjot from '../../media/navjotImg.jpeg'

const TrainerWorkoutPlans = () => {
  return (
    <div className='flex-1 overflow-y-auto p-8 scroll-smooth'>
      {/* KPI Cards */}
      <div className='grid grid-cols-3 gap-8 mb-8'>
        <div className='bg-white rounded-xl p-5 border border-[#dbe6df] shadow-sm flex items-center justify-between'>
            <div className=''>
                <p className='text-sm text-[#61896f] font-medium'>Total Plans</p>
                <p className='text-xl font-black mt-1'>24</p>
            </div>
            <div className='size-12 rounded-lg bg-blue-100 flex items-center justify-center'>
                <i className="ri-file-copy-2-line text-[24px] text-blue-600"></i>
            </div>
        </div>

        <div className='bg-white rounded-xl p-5 border border-[#dbe6df] shadow-sm flex items-center justify-between'>
            <div className=''>
                <p className='text-sm text-[#61896f] font-medium'>Active Assignments</p>
                <p className='text-xl font-black mt-1'>142</p>
            </div>
            <div className='size-12 rounded-lg bg-green-100 flex items-center justify-center'>
                <i className="ri-user-follow-fill text-[24px] text-green-600"></i>
            </div>
        </div>

        <div className='bg-white rounded-xl p-5 border border-[#dbe6df] shadow-sm flex items-center justify-between'>
            <div className=''>
                <p className='text-sm text-[#61896f] font-medium'>Top Performer</p>
                <p className='text-xl font-black mt-1'>Summer Shred</p>
            </div>
            <div className='size-12 rounded-lg bg-orange-100 flex items-center justify-center'>
                <i className="fa-solid fa-arrow-trend-up text-[24px] text-orange-600"></i>
            </div>
        </div>
      </div>

      {/* Workout Plans Table */}
      <div className='grid grid-cols-3 gap-8'>
        {/* Library */}
        <div className='col-span-2 space-y-6'>
            {/* Head */}
            <div className='flex items-center justify-between gap-4'>
                <h3 className='text-lg font-bold'>Plan Library</h3>
                <div className='flex bg-white p-1 rounded-lg border border-[#dbe6df] w-fit'>
                    <button className='px-4 py-1.5 text-xs font-semibold rounded-md bg-slate-900 text-white shadow-md'>All</button>
                    <button className='px-4 py-1.5 text-xs font-semibold rounded-md text-[#61896f] hover:text-slate-900'>Strength</button>
                    <button className='px-4 py-1.5 text-xs font-semibold rounded-md text-[#61896f] hover:text-slate-900'>Cardio</button>
                    <button className='px-4 py-1.5 text-xs font-semibold rounded-md text-[#61896f] hover:text-slate-900'>Flexibility</button>
                </div>
            </div>

            {/* Plans */}
            <div className='grid grid-cols-2 gap-5'>
                <div className='bg-white rounded-xl border border-[#dbe6df] overflow-hidden group hover:border-2 hover:border-[#15ec5b]/50 transition-all shadow-sm hover:shadow-md'>
                    <div className='relative h-40 bg-gray-400'>
                        <div className='absolute inset-0 bg-linear-to-br from-slate-600 to-zinc-900 opacity-90'></div>
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <i class="fa-solid fa-hand-fist text-6xl text-white/50"></i>
                        </div>
                        <div className='absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wide'>Advanced</div>
                    </div>

                    <div className='p-5'>
                        <div className='flex items-center justify-between'>
                            <h4 className='text-lg font-bold'>Hypertrophy Max</h4>
                            <span className='flex items-center gap-1 text-xs font-semibold text-[#61896f]'>
                                <i class="fa-regular fa-clock text-sm"></i>
                                8 Weeks
                            </span>
                        </div>
                        <p className='text-sm text-[#61896f] mb-4 mt-2 line-clamp-4'>High volume training focused on muscle growth. Includes compound movements and isolation work.</p>
                        <div className='flex items-center gap-2 mb-5'>
                            <span className='px-2 py-1 rounded bg-[#f7f8f6] text-[10px] font-medium text-[#61896f]'>Bodybuilding</span>
                            <span className='px-2 py-1 rounded bg-[#f7f8f6] text-[10px] font-medium text-[#61896f]'>5 Days/Week</span>
                        </div>
                        <div className='flex gap-2'>
                            <button className='flex-1 rounded-lg bg-[#15ec5b] py-2 text-md font-bold hover:bg-green-400 shadow-sm transition-colors'>Assign</button>
                            <button className='px-3 border border-[#dbe6df] rounded-lg hover:bg-gray-50 flex items-center justify-center'><i class="ri-pencil-line text-[#61896f] text-[20px]"></i></button>
                        </div>
                    </div>
                </div>

                <div className='bg-white rounded-xl border border-[#dbe6df] overflow-hidden group hover:border-2 hover:border-[#15ec5b]/50 transition-all shadow-sm hover:shadow-md'>
                    <div className='relative h-40 bg-gray-400'>
                        <div className='absolute inset-0 bg-linear-to-br from-blue-600 to-purple-600 opacity-90'></div>
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <i class="ri-heart-pulse-line text-6xl text-white/50"></i>
                        </div>
                        <div className='absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wide'>Beginner</div>
                    </div>

                    <div className='p-5'>
                        <div className='flex items-center justify-between'>
                            <h4 className='text-lg font-bold'>Couch to 5k</h4>
                            <span className='flex items-center gap-1 text-xs font-semibold text-[#61896f]'>
                                <i class="fa-regular fa-clock text-sm"></i>
                                4 Weeks
                            </span>
                        </div>
                        <p className='text-sm text-[#61896f] mb-4 mt-2 line-clamp-4'>A gentle introduction to running for absolute beginners. Mix of walking and jogging.</p>
                        <div className='flex items-center gap-2 mb-5'>
                            <span className='px-2 py-1 rounded bg-[#f7f8f6] text-[10px] font-medium text-[#61896f]'>Cardio</span>
                            <span className='px-2 py-1 rounded bg-[#f7f8f6] text-[10px] font-medium text-[#61896f]'>3 Days/Week</span>
                        </div>
                        <div className='flex gap-2'>
                            <button className='flex-1 rounded-lg bg-[#15ec5b] py-2 text-md font-bold hover:bg-green-400 shadow-sm transition-colors'>Assign</button>
                            <button className='px-3 border border-[#dbe6df] rounded-lg hover:bg-gray-50 flex items-center justify-center'><i class="ri-pencil-line text-[#61896f] text-[20px]"></i></button>
                        </div>
                    </div>
                </div>

                <div className='bg-white rounded-xl border border-[#dbe6df] overflow-hidden group hover:border-2 hover:border-[#15ec5b]/50 transition-all shadow-sm hover:shadow-md'>
                    <div className='relative h-40 bg-gray-400'>
                        <div className='absolute inset-0 bg-linear-to-br from-orange-500 to-red-500 opacity-90'></div>
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <i class="fa-solid fa-dumbbell text-6xl text-white/50"></i>
                        </div>
                        <div className='absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wide'>Intermediate</div>
                    </div>

                    <div className='p-5'>
                        <div className='flex items-center justify-between'>
                            <h4 className='text-lg font-bold'>Full Body Power</h4>
                            <span className='flex items-center gap-1 text-xs font-semibold text-[#61896f]'>
                                <i class="fa-regular fa-clock text-sm"></i>
                                6 Weeks
                            </span>
                        </div>
                        <p className='text-sm text-[#61896f] mb-4 mt-2 line-clamp-4'>Focus on functional strength using kettlebells and bodyweight exercises.</p>
                        <div className='flex items-center gap-2 mb-5'>
                            <span className='px-2 py-1 rounded bg-[#f7f8f6] text-[10px] font-medium text-[#61896f]'>Functional</span>
                            <span className='px-2 py-1 rounded bg-[#f7f8f6] text-[10px] font-medium text-[#61896f]'>4 Days/Week</span>
                        </div>
                        <div className='flex gap-2'>
                            <button className='flex-1 rounded-lg bg-[#15ec5b] py-2 text-md font-bold hover:bg-green-400 shadow-sm transition-colors'>Assign</button>
                            <button className='px-3 border border-[#dbe6df] rounded-lg hover:bg-gray-50 flex items-center justify-center'><i class="ri-pencil-line text-[#61896f] text-[20px]"></i></button>
                        </div>
                    </div>
                </div>

                <div className='bg-white rounded-xl border border-[#dbe6df] overflow-hidden group hover:border-2 hover:border-[#15ec5b]/50 transition-all shadow-sm hover:shadow-md'>
                    <div className='relative h-40 bg-gray-400'>
                        <div className='absolute inset-0 bg-linear-to-br from-green-500 to-teal-500 opacity-90'></div>
                        <div className='absolute inset-0 flex items-center justify-center'>
                            <i class="fa-solid fa-dumbbell text-6xl text-white/50"></i>
                        </div>
                        <div className='absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-2.5 py-1 rounded text-xs font-bold uppercase tracking-wide'>All Levels</div>
                    </div>

                    <div className='p-5'>
                        <div className='flex items-center justify-between'>
                            <h4 className='text-lg font-bold'>Yoga for Mobility</h4>
                            <span className='flex items-center gap-1 text-xs font-semibold text-[#61896f]'>
                                <i class="fa-regular fa-clock text-sm"></i>
                                Ongoing
                            </span>
                        </div>
                        <p className='text-sm text-[#61896f] mb-4 mt-2 line-clamp-4'>Daily 20-minute routines to improve flexibility and reduce injury risk.</p>
                        <div className='flex items-center gap-2 mb-5'>
                            <span className='px-2 py-1 rounded bg-[#f7f8f6] text-[10px] font-medium text-[#61896f]'>Flexibility</span>
                            <span className='px-2 py-1 rounded bg-[#f7f8f6] text-[10px] font-medium text-[#61896f]'>Daily</span>
                        </div>
                        <div className='flex gap-2'>
                            <button className='flex-1 rounded-lg bg-[#15ec5b] py-2 text-md font-bold hover:bg-green-400 shadow-sm transition-colors'>Assign</button>
                            <button className='px-3 border border-[#dbe6df] rounded-lg hover:bg-gray-50 flex items-center justify-center'><i class="ri-pencil-line text-[#61896f] text-[20px]"></i></button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Pagination */}
            <div className='flex justify-center pt-4'>
                <nav className='flex gap-2'>
                    <button className='size-8 flex items-center justify-center h-10 w-10 rounded-lg border border-[#dbe6df] text-[#61896f] hover:bg-gray-200 transition-all'><i class="fa-solid fa-chevron-left text-sm"></i></button>
                    <button className='size-8 flex items-center justify-center h-10 w-10 rounded-lg bg-[#15ec5b] text-lg font-bold transition-all'>1</button>
                    <button className='size-8 flex items-center justify-center h-10 w-10 rounded-lg border border-[#dbe6df] text-lg text-[#61896f] hover:bg-gray-200 transition-all'>2</button>
                    <button className='size-8 flex items-center justify-center h-10 w-10 rounded-lg border border-[#dbe6df] text-lg text-[#61896f] hover:bg-gray-200 transition-all'>3</button>
                    <button className='size-8 flex items-center justify-center h-10 w-10 rounded-lg border border-[#dbe6df] text-[#61896f] hover:bg-gray-200 transition-all'><i class="fa-solid fa-chevron-right text-sm"></i></button>
                </nav>
            </div>
        </div>

        {/* Create New Plan */}
        <div className='w-full shrink-0'>
            <div className='sticky top-0 space-y-6'>
                <div className='bg-white rounded-xl shadow-lg border border-[#dbe6df] overflow-hidden flex flex-col h-[calc(100vh-8rem)]'>
                    {/* Heading */}
                    <div className='p-5 border-b border-[#dbe6df] bg-[#fbfcfb] flex items-center justify-between'>
                        <h3 className='text-lg font-bold'>New Plan Draft</h3>
                        <button className='text-sm font-medium text-[#61896f] hover:text-[#15ec5b]'>Clear</button>
                    </div>

                    {/* Form */}
                    <div className='p-5 overflow-y-auto flex-1 space-y-5'>
                        <div className='space-y-4'>
                            <div className='flex flex-col gap-2'>
                                <label className='block text-xs font-semibold text-[#61896f] uppercase tracking-wide'>Plan Name</label>
                                <input className='w-full rounded-lg border border-[#dbe6df] text-md px-3 py-2.5 focus:outline-0 focus:ring-2 focus:ring-[#15ec5b] transition-all' type="text" placeholder='e.g. Summer Shred' />
                            </div>
                            <div className='grid grid-cols-2 gap-4'>
                                <div className='flex flex-col gap-2'>
                                    <label className='block text-xs font-semibold text-[#61896f] uppercase tracking-wide'>Difficulty</label>
                                    <select className='w-full rounded-lg border border-[#dbe6df] text-md px-3 py-2.5 focus:outline-0 focus:ring-2 focus:ring-[#15ec5b] transition-all'>
                                        <option>Beginner</option>
                                        <option>Intermediate</option>
                                        <option>Advanced</option>
                                    </select>
                                </div>
                                <div className='flex flex-col gap-2'>
                                    <label className='block text-xs font-semibold text-[#61896f] uppercase tracking-wide'>Duration (Wks)</label>
                                    <input className='w-full rounded-lg border border-[#dbe6df] text-md px-3 py-2.5 focus:outline-0 focus:ring-2 focus:ring-[#15ec5b] transition-all' type="text" placeholder='4' />
                                </div>
                            </div>
                            <div className='flex flex-col gap-2'>
                                <label className='block text-xs font-semibold text-[#61896f] uppercase tracking-wide'>Description</label>
                                <textarea className='w-full rounded-lg border border-[#dbe6df] text-md px-3 py-2.5 focus:outline-0 focus:ring-2 focus:ring-[#15ec5b] transition-all resize-none' placeholder='Brief description of the plan goals...' rows='3'></textarea>
                            </div>
                        </div>

                        <div className='h-px bg-[#dbe6df] w-full'></div>

                        <div className='space-y-3'>
                            <div className='flex items-center justify-between'>
                                <label className='block text-xs font-semibold text-[#61896f] uppercase tracking-wide'>Day 1 Exercises</label>
                                <button className='text-xs font-bold text-[#15ec5b] hover:underline flex items-center gap-1'>
                                    <i class="ri-add-line text-sm"></i>
                                    Add
                                </button>
                            </div>

                            <div className='flex items-start gap-2 bg-[#f7f8f6] p-2 rounded-lg group border border-transparent hover:border-[#dbe6df] transition-all'>
                                <div className='text-[#61896f] mt-3'>
                                    <i class="fa-solid fa-grip-vertical text-lg"></i>
                                </div>
                                <div className='flex-1 space-y-1'>
                                    <p className='text-sm font-bold'>Barbell Squat</p>
                                    <div className='flex gap-1 text-xs text-[#61896f] items-end'>
                                        <span>3 Sets</span>
                                        <i class="fa-solid fa-circle text-[4px] mb-1"></i>
                                        <span>10 Reps</span>
                                    </div>
                                </div>
                                <button className='text-[#61896f] hover:text-red-500 transition-colors mt-2'><i class="fa-solid fa-xmark"></i></button>
                            </div>
                            <div className='flex items-start gap-2 bg-[#f7f8f6] p-2 rounded-lg group border border-transparent hover:border-[#dbe6df] transition-all'>
                                <div className='text-[#61896f] mt-3'>
                                    <i class="fa-solid fa-grip-vertical text-lg"></i>
                                </div>
                                <div className='flex-1 space-y-1'>
                                    <p className='text-sm font-bold'>Bench Press</p>
                                    <div className='flex gap-1 text-xs text-[#61896f] items-end'>
                                        <span>3 Sets</span>
                                        <i class="fa-solid fa-circle text-[4px] mb-1"></i>
                                        <span>10 Reps</span>
                                    </div>
                                </div>
                                <button className='text-[#61896f] hover:text-red-500 transition-colors mt-2'><i class="fa-solid fa-xmark"></i></button>
                            </div>
                        </div>
                    </div>

                    {/* Action */}
                    <div className='p-5 border-t border-[#dbe6df] bg-[#fcfdfc]'>
                        <button className='w-full h-12 bg-[#15ec5b] rounded-lg text-md font-bold shadow-md hover:shadow-lg hover:bg-green-400 hover:-translate-y-0.5 transition-all'>Save Plan</button>
                    </div>
                </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default TrainerWorkoutPlans
