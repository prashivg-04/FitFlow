import React from 'react'
import navjot from '../../media/navjotImg.jpeg'

const TrainerAssignWorkout = () => {
  return (
    // <div className='relative flex min-h-screen bg-[#f7f8f6]'>
    //   <div className='flex-1 overflow-y-auto py-8 px-12 scroll-smooth'>
    //     <div className='max-w-300 mx-auto space-y-8 pb-10'>
    //       {/* Heading */}
    //       <div className='flex items-center justify-between gap-4'>
    //         <div className='flex flex-col items-start justify-center gap-2'>
    //           <h1 className='text-4xl font-black tracking-tight'>Select Member</h1>
    //           <p className='text-[#61896f] text-base'>Choose a member from your assigned list to create a new plan or modify their current routine.</p>
    //         </div>
    //       </div>

    //       {/* Filters */}
    //       <div className='flex items-center justify-between gap-4'>
    //         <div className='relative flex-1 max-w-sm group'>
    //           <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px] group-focus-within:font-bold group-focus-within:text-[#15ec5b] transition-all"></i>
    //           <input className='w-full pl-10 pr-4 py-2 bg-white border border-[#dbe6df] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#15ec5b] transition-all placeholder:text-slate-400' type="text" placeholder='Filter by name...' />
    //         </div>

    //         <div className='flex items-center gap-2 text-xs font-medium text-slate-500'>
    //           <span>Sort by:</span>
    //           <button className='flex items-center gap-1 hover:text-[#15ec5b] transition-colors'>
    //             Recent
    //             <i className="ri-arrow-down-s-fill text-[16px]"></i>
    //           </button>
    //         </div>
    //       </div>

    //       {/* Member Cards */}
    //       <div className='flex flex-col gap-4'>
    //         <div className='group flex items-center justify-between gap-4 px-8 py-6 bg-white border border-[#dbe6df] rounded-xl shadow-sm hover:shadow-md hover:bg-gray-50 transition-all'>
    //           <div className='flex items-center gap-6 flex-1'>
    //             <div className='relative'>
    //               <img className='size-14 rounded-full bg-gray-100 bg-cover bg-center bg-no-repeat border border-slate-100 object-cover' src={navjot} alt="Navjot" />
    //               <div className='absolute -bottom-0.5 -right-0.5 size-4 bg-green-500 border-2 border-white rounded-full'></div>
    //             </div>
    //             <div className='flex flex-col gap-1'>
    //               <div className='flex items-center gap-2'>
    //                 <h3 className='text-lg font-bold leading-tight'>Sarah Jenkins</h3>
    //                 <span className='inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-700 border border-green-200'>Active</span>
    //               </div>
    //               <p className='text-[#61896f] text-sm font-medium flex items-center gap-1'>
    //                 <i className='fa-solid fa-dumbbell text-[16px] text-[#15ec5b]'></i>
    //                 Hypertrophy Phase 2
    //               </p>
    //             </div>
    //           </div>

    //           <div className='flex items-center justify-end w-auto'>
    //             <button className='border border-[#dbe6df] bg-gray-50 px-5 py-2 rounded-lg group-hover:bg-[#15ec5b] text-md font-bold flex items-center gap-2 transition-all'>
    //               <i class="ri-pencil-line text-[18px]"></i>
    //               Change Workout
    //             </button>
    //           </div>
    //         </div>

    //         <div className='group flex items-center justify-between gap-4 px-8 py-6 bg-white border border-[#dbe6df] rounded-xl shadow-sm hover:shadow-md hover:bg-gray-50 transition-all'>
    //           <div className='flex items-center gap-6 flex-1'>
    //             <div className='relative'>
    //               <img className='size-14 rounded-full bg-gray-100 bg-cover bg-center bg-no-repeat border border-slate-100 object-cover' src={navjot} alt="Navjot" />
    //               <div className='absolute -bottom-0.5 -right-0.5 size-4 bg-red-500 border-2 border-white rounded-full'></div>
    //             </div>
    //             <div className='flex flex-col gap-1'>
    //               <div className='flex items-center gap-2'>
    //                 <h3 className='text-lg font-bold leading-tight'>Mike Ross</h3>
    //                 <span className='inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-700 border border-red-200'>No Plan</span>
    //               </div>
    //               <p className='text-[#61896f] text-sm font-medium flex items-center gap-1 italic'>
    //                 <i className='fa-solid fa-ban text-[14px]'></i>
    //                 No active workout plan
    //               </p>
    //             </div>
    //           </div>

    //           <div className='flex items-center justify-end w-auto'>
    //             <button className='border border-[#dbe6df] bg-gray-50 px-5 py-2 rounded-lg group-hover:bg-[#15ec5b] text-md font-bold flex items-center gap-2 transition-all'>
    //               <i class="ri-add-circle-line text-[18px]"></i>
    //               Assign Workout
    //             </button>
    //           </div>
    //         </div>

    //         <div className='group flex items-center justify-between gap-4 px-8 py-6 bg-white border border-[#dbe6df] rounded-xl shadow-sm hover:shadow-md hover:bg-gray-50 transition-all'>
    //           <div className='flex items-center gap-6 flex-1'>
    //             <div className='relative'>
    //               <img className='size-14 rounded-full bg-gray-100 bg-cover bg-center bg-no-repeat border border-slate-100 object-cover' src={navjot} alt="Navjot" />
    //               <div className='absolute -bottom-0.5 -right-0.5 size-4 bg-green-500 border-2 border-white rounded-full'></div>
    //             </div>
    //             <div className='flex flex-col gap-1'>
    //               <div className='flex items-center gap-2'>
    //                 <h3 className='text-lg font-bold leading-tight'>Elara Vance</h3>
    //                 <span className='inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-700 border border-green-200'>Active</span>
    //               </div>
    //               <p className='text-[#61896f] text-sm font-medium flex items-center gap-1'>
    //                 <i className='fa-solid fa-person-running text-[16px] text-[#15ec5b]'></i>
    //                 Cardio Prep & Conditioning
    //               </p>
    //             </div>
    //           </div>

    //           <div className='flex items-center justify-end w-auto'>
    //             <button className='border border-[#dbe6df] bg-gray-50 px-5 py-2 rounded-lg group-hover:bg-[#15ec5b] text-md font-bold flex items-center gap-2 transition-all'>
    //               <i class="ri-pencil-line text-[18px]"></i>
    //               Change Workout
    //             </button>
    //           </div>
    //         </div>

    //         <div className='group flex items-center justify-between gap-4 px-8 py-6 bg-white border border-[#dbe6df] rounded-xl shadow-sm hover:shadow-md hover:bg-gray-50 transition-all opacity-70'>
    //           <div className='flex items-center gap-6 flex-1'>
    //             <div className='relative'>
    //               <img className='size-14 rounded-full bg-gray-100 bg-cover bg-center bg-no-repeat border border-slate-100 object-cover' src={navjot} alt="Navjot" />
    //               <div className='absolute -bottom-0.5 -right-0.5 size-4 bg-gray-500 border-2 border-white rounded-full'></div>
    //             </div>
    //             <div className='flex flex-col gap-1'>
    //               <div className='flex items-center gap-2'>
    //                 <h3 className='text-lg font-bold leading-tight'>David Chen</h3>
    //                 <span className='inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200'>Paused</span>
    //               </div>
    //               <p className='text-[#61896f] text-sm font-medium flex items-center gap-1'>
    //                 <i className='fa-regular fa-circle-pause text-[14px]'></i>
    //                 Plan paused (Injury recovery)
    //               </p>
    //             </div>
    //           </div>

    //           <div className='flex items-center justify-end w-auto'>
    //             <button className='border border-[#dbe6df] bg-gray-50 px-5 py-2 rounded-lg group-hover:bg-[#15ec5b] text-md font-bold flex items-center gap-2 transition-all'>
    //               <i class="ri-play-line text-[18px]"></i>
    //               Resume Plan
    //             </button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>

    <div className='relative flex min-h-screen bg-[#f7f8f6]'>
      <div className='flex-1 overflow-y-auto p-8 scroll-smooth'>
          <div className='max-w-300 mx-auto space-y-8 pb-10'>
            {/* Heading */}
            <div className='flex items-center justify-between gap-4'>
                <div className='flex flex-col items-start justify-center gap-2'>
                    <h1 className='text-4xl font-black tracking-tight'>Assign Workout Plan</h1>
                    <p className='text-[#61896f] text-base'>Design and schedule a hypertrophy block for Sarah.</p>
                </div>
                <div className='flex items-center gap-3'>
                    <button className='flex items-center gap-2 px-5 py-2.5 bg-white border border-[#dbe6df] rounded-lg hover:bg-gray-50 font-bold shadow-lg transition-all'>
                      <i class="ri-save-2-line text-[20px]"></i>
                      Save Draft
                    </button>
                    <button className='flex items-center gap-2 px-5 py-2.5 bg-[#15ec5b] rounded-lg hover:bg-green-500 font-bold shadow-lg shadow-[#15ec5b]/25 transition-all'>
                      <i class="ri-send-plane-2-line text-[20px]"></i>
                      Assign to Member
                    </button>
                </div>
            </div>

            {/* grid grid-cols-3 gap-8 */}
            <div className='grid grid-cols-3 gap-8'>
              {/* Workout Builder */}
              <div className='col-span-2 flex flex-col gap-6'>
                {/* Days */}
                <div className='bg-white rounded-xl p-1 border border-[#dbe6df] shadow-sm flex overflow-x-auto no-scrollbar gap-1'>
                  <button className='flex-1 min-w-25 px-4 py-2.5 rounded-lg bg-[#15ec5b] text-sm font-medium border border-transparent flex flex-col items-center group transition-all'>
                    <span className='group-hover:text-slate-900'>Day 1</span>
                    <span className='text-[10px] opacity-60 mt-2'>Push Focus</span>
                  </button>

                  <button className='flex-1 min-w-25 px-4 py-2.5 rounded-lg text-[#61896f] hover:bg-gray-50 text-sm font-medium border border-transparent flex flex-col items-center group transition-all'>
                    <span className='group-hover:text-slate-900'>Day 2</span>
                    <span className='text-[10px] opacity-60 mt-2'>Pull Focus</span>
                  </button>

                  <button className='flex-1 min-w-25 px-4 py-2.5 rounded-lg text-[#61896f] hover:bg-gray-50 text-sm font-medium border border-transparent flex flex-col items-center group transition-all'>
                    <span className='group-hover:text-slate-900'>Day 3</span>
                    <span className='text-[10px] opacity-60 mt-2'>Legs</span>
                  </button>

                  <button className='flex-1 min-w-25 px-4 py-2.5 rounded-lg text-[#61896f] hover:bg-gray-50 text-sm font-medium border border-transparent flex flex-col items-center group transition-all'>
                    <span className='group-hover:text-slate-900'>Day 4</span>
                    <span className='text-[10px] opacity-60 mt-2'>Full Body</span>
                  </button>

                  <button className='min-w-12.5 flex items-center justify-center rounded-lg text-[#61896f] hover:text-[#15ec5b] hover:bg-[#15ec5b]/10'>
                    <i class="ri-add-circle-line"></i>
                  </button>
                </div>

                {/* Exercises */}
                <div className='flex flex-col gap-4'>
                  {/* Heading */}
                  <div className='flex items-center justify-between px-1'>
                    <div>
                      <h2 className='text-xl font-bold'>Day 1 Configuration</h2>
                      <p className='text-sm text-[#61896f]'>Push focus: Chest, Shoulders, Triceps</p>
                    </div>
                    <div className='flex items-center gap-2'>
                      <button className='p-2 text-[#61896f] hover:text-green-500 rounded hover:bg-slate-200'>
                        <i class="fa-regular fa-copy text-[20px]"></i>
                      </button>
                      <button className='p-2 text-[#61896f] hover:text-red-500 rounded hover:bg-slate-200'>
                        <i class="fa-solid fa-trash text-[20px]"></i>
                      </button>
                    </div>
                  </div>

                  {/* Exercise List */}
                  <div className='bg-white rounded-xl border border-[#dbe6df] shadow-sm p-1 overflow-hidden hover:border-[#15ec5b]/50 transition-colors group'>
                    <div className='p-4 border-b border-[#dbe6df] flex flex-wrap gap-4 items-center justify-between bg-[#fcfdfd] '>
                      <div className='flex items-center gap-3 flex-1 min-w-50'>
                        <i class="fa-solid fa-grip-vertical text-[#61896f] hover:text-slate-900 cursor-grab"></i>
                        <div className='bg-[#15ec5b]/20 text-sm font-bold px-2 py-1 rounded'>A1</div>
                        <div className='relative flex-1'>
                          <input className='w-full bg-transparent border-0 border-b border-transparent hover:border-slate-300 focus:outline-none focus:border-[#15ec5b] px-2 py-1 text-base font-bold placeholder-slate-900 transition-colors' type="text" placeholder='Barbell Bench Press' value='Barbell Bench Press' />
                        </div>
                      </div>
                      <div className='flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity'>
                        <button className='p-1.5 text-[#61896f] hover:text-green-500 hover:bg-white'>
                          <i class="ri-information-line text-[20px]"></i>
                        </button>
                        <button className='p-1.5 text-[#61896f] hover:text-green-500 hover:bg-white'>
                          <i class="fa-regular fa-copy text-[18px]"></i>
                        </button>
                        <button className='p-1.5 text-[#61896f] hover:text-red-500 hover:bg-white'>
                          <i class="fa-solid fa-trash text-[18px]"></i>
                        </button>
                      </div>
                    </div>

                    <div className='p-4 grid grid-cols-4 gap-4'>
                      <div className='space-y-1'>
                        <label className='text-[10px] text-[#61896f] font-bold uppercase tracking-wide'>Sets</label>
                        <div className='flex items-center bg-slate-50 rounded-lg border border-[#dbe6df] overflow-hidden focus-within:outline-none focus-within:ring-1 focus-within:ring-[#15ec5b] focus-within:border-[#15ec5b]'>
                          <input className='w-full bg-transparent border-none text-center text-sm font-semibold p-2 focus:outline-none' type="number" placeholder='4' />
                        </div>
                      </div>
                      <div className='space-y-1'>
                        <label className='text-[10px] text-[#61896f] font-bold uppercase tracking-wide'>Reps</label>
                        <div className='flex items-center bg-slate-50 rounded-lg border border-[#dbe6df] overflow-hidden focus-within:outline-none focus-within:ring-1 focus-within:ring-[#15ec5b] focus-within:border-[#15ec5b]'>
                          <input className='w-full bg-transparent border-none text-center text-sm font-semibold p-2 focus:outline-none' type="text" placeholder='8-10' />
                        </div>
                      </div>
                      <div className='space-y-1'>
                        <label className='text-[10px] text-[#61896f] font-bold uppercase tracking-wide'>Rest</label>
                        <div className='flex items-center bg-slate-50 rounded-lg border border-[#dbe6df] overflow-hidden focus-within:outline-none focus-within:ring-1 focus-within:ring-[#15ec5b] focus-within:border-[#15ec5b] relative'>
                          <i className='ri-timer-line absolute left-3 text-[16px] font-bold text-[#61896f] '></i>
                          <input className='w-full bg-transparent border-none text-center text-sm font-semibold p-2 focus:outline-none' type="text" placeholder='120s' />
                        </div>
                      </div>
                      <div className='space-y-1'>
                        <label className='text-[10px] text-[#61896f] font-bold uppercase tracking-wide'>Weight/RPE</label>
                        <div className='flex items-center bg-slate-50 rounded-lg border border-[#dbe6df] overflow-hidden focus-within:outline-none focus-within:ring-1 focus-within:ring-[#15ec5b] focus-within:border-[#15ec5b]'>
                          <input className='w-full bg-transparent border-none text-center text-sm font-semibold p-2 focus:outline-none' type="text" placeholder='RPE 8' />
                        </div>
                      </div>
                    </div>

                    <div className='px-4 pb-4 '>
                      <div className='relative'>
                        <input className='w-full border-0 border-b border-slate-200 bg-transparent py-2 text-xs text-slate-600 placeholder:text-[#61896f] focus:outline-none focus:ring-0 focus:border-[#15ec5b] transition-all' type="text" placeholder="Add trainer notes (e.g., 'Slow eccentric phase')..." />
                        <i class="ri-edit-box-line absolute right-1 top-2 text-[16px] text-[#61896f]"></i>
                      </div>
                    </div>
                  </div>

                  <div className='bg-white rounded-xl border border-[#dbe6df] shadow-sm p-1 overflow-hidden hover:border-[#15ec5b]/50 transition-colors group'>
                    <div className='p-4 border-b border-[#dbe6df] flex flex-wrap gap-4 items-center justify-between bg-[#fcfdfd] '>
                      <div className='flex items-center gap-3 flex-1 min-w-50'>
                        <i class="fa-solid fa-grip-vertical text-[#61896f] hover:text-slate-900 cursor-grab"></i>
                        <div className='bg-[#15ec5b]/20 text-sm font-bold px-2 py-1 rounded'>B1</div>
                        <div className='relative flex-1'>
                          <input className='w-full bg-transparent border-0 border-b border-transparent hover:border-slate-300 focus:outline-none focus:border-[#15ec5b] px-2 py-1 text-base font-bold placeholder-slate-900 transition-colors' type="text" placeholder='Incline Dumbbell Press' value='Incline Dumbbell Press' />
                        </div>
                      </div>
                      <div className='flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity'>
                        <button className='p-1.5 text-[#61896f] hover:text-green-500 hover:bg-white'>
                          <i class="ri-information-line text-[20px]"></i>
                        </button>
                        <button className='p-1.5 text-[#61896f] hover:text-green-500 hover:bg-white'>
                          <i class="fa-regular fa-copy text-[18px]"></i>
                        </button>
                        <button className='p-1.5 text-[#61896f] hover:text-red-500 hover:bg-white'>
                          <i class="fa-solid fa-trash text-[18px]"></i>
                        </button>
                      </div>
                    </div>

                    <div className='p-4 grid grid-cols-4 gap-4'>
                      <div className='space-y-1'>
                        <label className='text-[10px] text-[#61896f] font-bold uppercase tracking-wide'>Sets</label>
                        <div className='flex items-center bg-slate-50 rounded-lg border border-[#dbe6df] overflow-hidden focus-within:outline-none focus-within:ring-1 focus-within:ring-[#15ec5b] focus-within:border-[#15ec5b]'>
                          <input className='w-full bg-transparent border-none text-center text-sm font-semibold p-2 focus:outline-none' type="number" placeholder='3' />
                        </div>
                      </div>
                      <div className='space-y-1'>
                        <label className='text-[10px] text-[#61896f] font-bold uppercase tracking-wide'>Reps</label>
                        <div className='flex items-center bg-slate-50 rounded-lg border border-[#dbe6df] overflow-hidden focus-within:outline-none focus-within:ring-1 focus-within:ring-[#15ec5b] focus-within:border-[#15ec5b]'>
                          <input className='w-full bg-transparent border-none text-center text-sm font-semibold p-2 focus:outline-none' type="text" placeholder='10-12' />
                        </div>
                      </div>
                      <div className='space-y-1'>
                        <label className='text-[10px] text-[#61896f] font-bold uppercase tracking-wide'>Rest</label>
                        <div className='flex items-center bg-slate-50 rounded-lg border border-[#dbe6df] overflow-hidden focus-within:outline-none focus-within:ring-1 focus-within:ring-[#15ec5b] focus-within:border-[#15ec5b] relative'>
                          <i className='ri-timer-line absolute left-3 text-[16px] font-bold text-[#61896f] '></i>
                          <input className='w-full bg-transparent border-none text-center text-sm font-semibold p-2 focus:outline-none' type="text" placeholder='90s' />
                        </div>
                      </div>
                      <div className='space-y-1'>
                        <label className='text-[10px] text-[#61896f] font-bold uppercase tracking-wide'>Weight/RPE</label>
                        <div className='flex items-center bg-slate-50 rounded-lg border border-[#dbe6df] overflow-hidden focus-within:outline-none focus-within:ring-1 focus-within:ring-[#15ec5b] focus-within:border-[#15ec5b]'>
                          <input className='w-full bg-transparent border-none text-center text-sm font-semibold p-2 focus:outline-none' type="text" placeholder='26kg' />
                        </div>
                      </div>
                    </div>

                    <div className='px-4 pb-4 '>
                      <div className='relative'>
                        <input className='w-full border-0 border-b border-slate-200 bg-transparent py-2 text-xs font-medium text-slate-700 placeholder:text-[#61896f] focus:outline-none focus:ring-0 focus:border-[#15ec5b] transition-all' type="text" placeholder="Add trainer notes (e.g., 'Slow eccentric phase')..." value='Keep elbows tucked at 45 degrees' />
                        <i class="ri-edit-box-line absolute right-1 top-2 text-[16px] text-[#61896f]"></i>
                      </div>
                    </div>
                  </div>

                  <div className='bg-white rounded-xl border border-[#dbe6df] shadow-sm p-1 overflow-hidden hover:border-[#15ec5b]/50 transition-colors group'>
                    <div className='p-4 border-b border-[#dbe6df] flex flex-wrap gap-4 items-center justify-between bg-[#fcfdfd] '>
                      <div className='flex items-center gap-3 flex-1 min-w-50'>
                        <i class="fa-solid fa-grip-vertical text-[#61896f] hover:text-slate-900 cursor-grab"></i>
                        <div className='bg-[#15ec5b]/20 text-sm font-bold px-2 py-1 rounded'>C1</div>
                        <div className='relative flex-1'>
                          <input className='w-full bg-transparent border-0 border-b border-transparent hover:border-slate-300 focus:outline-none focus:border-[#15ec5b] px-2 py-1 text-base font-bold placeholder-slate-900 transition-colors' type="text" placeholder='Cable Flys' value='Cable Flys' />
                        </div>
                      </div>
                      <div className='flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity'>
                        <button className='p-1.5 text-[#61896f] hover:text-green-500 hover:bg-white'>
                          <i class="ri-information-line text-[20px]"></i>
                        </button>
                        <button className='p-1.5 text-[#61896f] hover:text-green-500 hover:bg-white'>
                          <i class="fa-regular fa-copy text-[18px]"></i>
                        </button>
                        <button className='p-1.5 text-[#61896f] hover:text-red-500 hover:bg-white'>
                          <i class="fa-solid fa-trash text-[18px]"></i>
                        </button>
                      </div>
                    </div>

                    <div className='p-4 grid grid-cols-4 gap-4'>
                      <div className='space-y-1'>
                        <label className='text-[10px] text-[#61896f] font-bold uppercase tracking-wide'>Sets</label>
                        <div className='flex items-center bg-slate-50 rounded-lg border border-[#dbe6df] overflow-hidden focus-within:outline-none focus-within:ring-1 focus-within:ring-[#15ec5b] focus-within:border-[#15ec5b]'>
                          <input className='w-full bg-transparent border-none text-center text-sm font-semibold p-2 focus:outline-none' type="number" placeholder='3' />
                        </div>
                      </div>
                      <div className='space-y-1'>
                        <label className='text-[10px] text-[#61896f] font-bold uppercase tracking-wide'>Reps</label>
                        <div className='flex items-center bg-slate-50 rounded-lg border border-[#dbe6df] overflow-hidden focus-within:outline-none focus-within:ring-1 focus-within:ring-[#15ec5b] focus-within:border-[#15ec5b]'>
                          <input className='w-full bg-transparent border-none text-center text-sm font-semibold p-2 focus:outline-none' type="text" placeholder='15' />
                        </div>
                      </div>
                      <div className='space-y-1'>
                        <label className='text-[10px] text-[#61896f] font-bold uppercase tracking-wide'>Rest</label>
                        <div className='flex items-center bg-slate-50 rounded-lg border border-[#dbe6df] overflow-hidden focus-within:outline-none focus-within:ring-1 focus-within:ring-[#15ec5b] focus-within:border-[#15ec5b] relative'>
                          <i className='ri-timer-line absolute left-3 text-[16px] font-bold text-[#61896f] '></i>
                          <input className='w-full bg-transparent border-none text-center text-sm font-semibold p-2 focus:outline-none' type="text" placeholder='60s' />
                        </div>
                      </div>
                      <div className='space-y-1'>
                        <label className='text-[10px] text-[#61896f] font-bold uppercase tracking-wide'>Weight/RPE</label>
                        <div className='flex items-center bg-slate-50 rounded-lg border border-[#dbe6df] overflow-hidden focus-within:outline-none focus-within:ring-1 focus-within:ring-[#15ec5b] focus-within:border-[#15ec5b]'>
                          <input className='w-full bg-transparent border-none text-center text-sm font-semibold p-2 focus:outline-none' type="text" placeholder='RPE 9' />
                        </div>
                      </div>
                    </div>

                    <div className='px-4 pb-4 '>
                      <div className='relative'>
                        <input className='w-full border-0 border-b border-slate-200 bg-transparent py-2 text-xs text-slate-600 placeholder:text-[#61896f] focus:outline-none focus:ring-0 focus:border-[#15ec5b] transition-all' type="text" placeholder="Add trainer notes (e.g., 'Slow eccentric phase')..." />
                        <i class="ri-edit-box-line absolute right-1 top-2 text-[16px] text-[#61896f]"></i>
                      </div>
                    </div>
                  </div>

                  <button className='w-full py-4 rounded-xl border-2 border-slate-300 border-dashed text-[#61896f] hover:border-[#15ec5b] hover:text-[#15ec5b] hover:bg-[#15ec5b]/5 transition-all flex items-center justify-center gap-2 group'>
                    <i class="ri-add-circle-line text-[20px] group-hover:scale-110 transition-transform"></i>
                    <span className='font-semibold'>Add New Exercise</span>
                  </button>
                </div>
              </div>

              {/* Member Context */}
              <div className='col-span-1 flex flex-col gap-6 sticky top-24'>
                {/* Member Card */}
                <div className='bg-white rounded-xl p-5 border border-[#dbe6df] shadow-sm relative overflow-hidden group'>
                  <div className='absolute top-0 left-0 w-1 h-full bg-[#15ec5b]/50'></div>

                  <div className='flex items-start gap-4'>
                    <div>
                      <img className='size-16 rounded-full bg-cover bg-center border-2 border-white shadow-md object-cover' src={navjot} alt="" />
                    </div>
                    <div className='flex-1'>
                      <h3 className='text-lg font-bold leading-tight'>Sarah Jenkins</h3>
                      <p className='text-[#61896f] text-xs mb-2'>Member since Jan 2023</p>
                      <span className='inline-flex items-center px-2 py-0.5 rounded-lg text-xs font-medium bg-[#15ec5b]/20 text-green-700 border border-[#15ec5b]/20'>Goal: Hypertrophy</span>
                    </div>
                  </div>

                  <div className='mt-5 pt-4 border-t border-[#dbe6df] grid grid-cols-2 gap-4'>
                    <div>
                      <p className='text-[11px] text-[#61896f] font-semibold uppercase tracking-wider'>Weight</p>
                      <p className='text-sm font-medium text-slate-700 mt-1'>62 kg</p>
                    </div>
                    <div>
                      <p className='text-[11px] text-[#61896f] font-semibold uppercase tracking-wider'>Last Workout</p>
                      <p className='text-md font-medium text-slate-700 mt-1'>2 days ago</p>
                    </div>
                  </div>
                </div>

                {/* Plan Settings */}
                <div className='bg-white rounded-xl border border-[#dbe6df] shadow-sm p-5'>
                  <div className='flex items-center gap-3 mb-4'>
                    <i class="ri-equalizer-line text-[#15ec5b] text-[20px]"></i>
                    <h3 className='text-lg font-bold'>Plan Settings</h3>
                  </div>
                  <div className='space-y-5'>
                    <div className='space-y-1.5 flex flex-col'>
                      <label className='text-xs font-semibold text-[#61896f] uppercase tracking-wide'>Start Date</label>
                      <input className='w-full px-3 py-2 rounded-lg border border-[#dbe6df] text-sm focus:outline-none focus:ring-2 focus:ring-[#15ec5b] transition-all' type="date" placeholder='2023-10-24' />
                    </div>
                    <div className='space-y-1.5 flex flex-col'>
                      <label className='text-xs font-semibold text-[#61896f] uppercase tracking-wide'>Weekly Frequency</label>
                      <select className='w-full px-3 py-2 rounded-lg border border-[#dbe6df] text-sm focus:outline-none focus:ring-2 focus:ring-[#15ec5b] transition-all'>
                        <option>2 Days / Week</option>
                        <option>3 Days / Week</option>
                        <option selected>4 Days / Week</option>
                        <option>5 Days / Week</option>
                        <option>6 Days / Week</option>
                      </select>
                    </div>
                    <div className='space-y-1.5 flex flex-col'>
                      <label className='text-xs font-semibold text-[#61896f] uppercase tracking-wide'>Duration</label>
                      <select className='w-full px-3 py-2 rounded-lg border border-[#dbe6df] text-sm focus:outline-none focus:ring-2 focus:ring-[#15ec5b] transition-all'>
                        <option>4 Weeks</option>
                        <option selected>8 Weeks</option>
                        <option>12 Weeks</option>
                      </select>
                    </div>

                    <div className='pt-2 flex items-center justify-between'>
                      <span className='text-sm font-medium text-slate-700 pl-2'>Active Status</span>
                      <label className='relative inline-flex items-center cursor-pointer'>
                          <input defaultChecked className='sr-only peer' type="checkbox"/>
                          <div className='w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#15ec5b]'></div>
                      </label>
                    </div>
                  </div>
                </div>

                {/* Stats */}
                <div className='bg-[#15ec5b]/10 rounded-xl border border-[#15ec5b]/40 p-4'>
                  <h4 className='text-xs font-bold text-[#15ec5b] uppercase tracking-wider pb-3'>Plan Summary</h4>
                  <ul className='space-y-2 text-sm'>
                    <li className='flex items-center justify-between'>
                      <span className='text-slate-600 font-medium'>Total Days</span>
                      <span className='font-mono font-medium'>4</span>
                    </li>
                    <li className='flex items-center justify-between'>
                      <span className='text-slate-600 font-medium'>Est. Volume</span>
                      <span className='font-mono font-medium'>High</span>
                    </li>
                    <li className='flex items-center justify-between'>
                      <span className='text-slate-600 font-medium'>Focus</span>
                      <span className='font-mono font-medium'>Upper/Lower</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
      </div>
    </div>
  )
}

export default TrainerAssignWorkout
