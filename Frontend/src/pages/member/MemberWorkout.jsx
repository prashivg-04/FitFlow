import React, { useState, useEffect, use } from 'react'
import gymImg from '../../media/gymSignup.jpeg'
import navjot from '../../media/navjotImg.jpeg'
import api from '../../api/axios'

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
          </div>
        </div>
        
        {/* Day Tabs */}
        <div className='border-b border-gray-200 bg-white rounded-xl shadow-sm px-4 py-3'>
          <nav className='-mb-px flex justify-between space-x-8 overflow-x-auto scrollbar-hide'>
            <a className='flex flex-col items-center justify-center px-4 py-3 rounded-lg bg-[#15ec5b]/10 border border-[#15ec5b]/20 min-w-27.5'>
              <span className='text-xs font-semibold text-[#15ec5b]'>20/03/2026</span>
              <span className='text-sm font-bold text-[#15ec5b]'>Upper Body</span>
            </a>

            <a className='flex flex-col items-center justify-center px-4 py-3 rounded-lg min-w-27.5 hover:bg-[#f3f7f5] transition-all'>
              <span className='text-xs font-semibold text-slate-500'>21/03/2026</span>
              <span className='text-sm font-semibold text-slate-700'>Upper Body</span>
            </a>

            <a className='flex flex-col items-center justify-center px-4 py-3 rounded-lg min-w-27.5 hover:bg-[#f3f7f5] transition-all'>
              <span className='text-xs font-semibold text-slate-500'>21/03/2026</span>
              <span className='text-sm font-semibold text-slate-700'>Upper Body</span>
            </a>

            
            <a className='flex flex-col items-center justify-center px-4 py-3 rounded-lg min-w-27.5 hover:bg-[#f3f7f5] transition-all'>
              <span className='text-xs font-semibold text-slate-500'>21/03/2026</span>
              <span className='text-sm font-semibold text-slate-700'>Upper Body</span>
            </a>

            <a className='flex flex-col items-center justify-center px-4 py-3 rounded-lg min-w-27.5 hover:bg-[#f3f7f5] transition-all'>
              <span className='text-xs font-semibold text-slate-500'>21/03/2026</span>
              <span className='text-sm font-semibold text-slate-700'>Upper Body</span>
            </a>

            <a className='flex flex-col items-center justify-center px-4 py-3 rounded-lg min-w-27.5 hover:bg-[#f3f7f5] transition-all'>
              <span className='text-xs font-semibold text-slate-500'>21/03/2026</span>
              <span className='text-sm font-semibold text-slate-700'>Upper Body</span>
            </a>

            <a className='flex flex-col items-center justify-center px-4 py-3 rounded-lg min-w-27.5 hover:bg-[#f3f7f5] transition-all'>
              <span className='text-xs font-semibold text-slate-500'>21/03/2026</span>
              <span className='text-sm font-semibold text-slate-700'>Upper Body</span>
            </a>
          </nav>
        </div>

        {/* Exercises and Notes */}
        <div className='grid grid-cols-3 gap-8 items-start'>
          {/* Left */}
          <div className='col-span-2 space-y-4'>
            <div className='flex items-center justify-between'>
              <h2 className='text-xl font-bold'>Workout Details</h2>
              <span className='text-sm text-[#61896f] font-medium bg-[#f3f7f5] px-3 py-1 rounded-full'>
                6 Exercises
              </span>
            </div>

            <div className='space-y-3'>
              <div className='bg-white rounded-xl border border-[#dbe6df] shadow-sm p-4 hover:shadow-md transition-all'>
                <div className='flex gap-5 '>
                  <img className='w-28 rounded-lg bg-gray-200 bg-cover bg-center shrink-0 object-cover' src={gymImg} alt="" />
                  <div className='flex-1 '>
                    <div className='flex items-start justify-between mb-2'>
                      <div>
                        <h4 className='text-base font-bold'>Barbell Bench Press</h4>
                      </div>
                    </div>
                    <div className='grid grid-cols-3 gap-3 mt-3'>
                      <div className='bg-[#f7f8f6] rounded-lg p-3 text-center'>
                        <p className='text-[10px] text-[#61896f] font-semibold'>SETS</p>
                        <p className='font-bold text-lg'>4</p>
                      </div>

                      <div className='bg-[#f7f8f6] rounded-lg p-3 text-center'>
                        <p className='text-[10px] text-[#61896f] font-semibold'>REPS</p>
                        <p className='font-bold text-lg'>6-8</p>
                      </div>

                      <div className='bg-[#f7f8f6] rounded-lg p-3 text-center'>
                        <p className='text-[10px] text-[#61896f] font-semibold'>REST</p>
                        <p className='font-bold text-lg'>180s</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='bg-white rounded-xl border border-[#dbe6df] shadow-sm p-4 hover:shadow-md transition-all'>
                <div className='flex gap-5 '>
                  <img className='w-28 rounded-lg bg-gray-200 bg-cover bg-center shrink-0 object-cover' src={gymImg} alt="" />
                  <div className='flex-1 '>
                    <div className='flex items-start justify-between mb-2'>
                      <div>
                        <h4 className='text-base font-bold'>Barbell Bench Press</h4>
                      </div>
                    </div>
                    <div className='grid grid-cols-3 gap-3 mt-3'>
                      <div className='bg-[#f7f8f6] rounded-lg p-3 text-center'>
                        <p className='text-[10px] text-[#61896f] font-semibold'>SETS</p>
                        <p className='font-bold text-lg'>4</p>
                      </div>

                      <div className='bg-[#f7f8f6] rounded-lg p-3 text-center'>
                        <p className='text-[10px] text-[#61896f] font-semibold'>REPS</p>
                        <p className='font-bold text-lg'>6-8</p>
                      </div>

                      <div className='bg-[#f7f8f6] rounded-lg p-3 text-center'>
                        <p className='text-[10px] text-[#61896f] font-semibold'>REST</p>
                        <p className='font-bold text-lg'>180s</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='bg-white rounded-xl border border-[#dbe6df] shadow-sm p-4 hover:shadow-md transition-all'>
                <div className='flex gap-5 '>
                  <img className='w-28 rounded-lg bg-gray-200 bg-cover bg-center shrink-0 object-cover' src={gymImg} alt="" />
                  <div className='flex-1 '>
                    <div className='flex items-start justify-between mb-2'>
                      <div>
                        <h4 className='text-base font-bold'>Barbell Bench Press</h4>
                      </div>
                    </div>
                    <div className='grid grid-cols-3 gap-3 mt-3'>
                      <div className='bg-[#f7f8f6] rounded-lg p-3 text-center'>
                        <p className='text-[10px] text-[#61896f] font-semibold'>SETS</p>
                        <p className='font-bold text-lg'>4</p>
                      </div>

                      <div className='bg-[#f7f8f6] rounded-lg p-3 text-center'>
                        <p className='text-[10px] text-[#61896f] font-semibold'>REPS</p>
                        <p className='font-bold text-lg'>6-8</p>
                      </div>

                      <div className='bg-[#f7f8f6] rounded-lg p-3 text-center'>
                        <p className='text-[10px] text-[#61896f] font-semibold'>REST</p>
                        <p className='font-bold text-lg'>180s</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div className='bg-white rounded-xl border border-[#dbe6df] shadow-sm p-4 hover:shadow-md transition-all'>
                <div className='flex gap-5 '>
                  <img className='w-28 rounded-lg bg-gray-200 bg-cover bg-center shrink-0 object-cover' src={gymImg} alt="" />
                  <div className='flex-1 '>
                    <div className='flex items-start justify-between mb-2'>
                      <div>
                        <h4 className='text-base font-bold'>Barbell Bench Press</h4>
                      </div>
                    </div>
                    <div className='grid grid-cols-3 gap-3 mt-3'>
                      <div className='bg-[#f7f8f6] rounded-lg p-3 text-center'>
                        <p className='text-[10px] text-[#61896f] font-semibold'>SETS</p>
                        <p className='font-bold text-lg'>4</p>
                      </div>

                      <div className='bg-[#f7f8f6] rounded-lg p-3 text-center'>
                        <p className='text-[10px] text-[#61896f] font-semibold'>REPS</p>
                        <p className='font-bold text-lg'>6-8</p>
                      </div>

                      <div className='bg-[#f7f8f6] rounded-lg p-3 text-center'>
                        <p className='text-[10px] text-[#61896f] font-semibold'>REST</p>
                        <p className='font-bold text-lg'>180s</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right */}
          <div className='col-span-1 space-y-6'>
            <div className='bg-white rounded-xl border border-[#dbe6df] p-5 shadow-sm sticky top-24'>
              {/* CTA Action buttons */}
              <h3 className='text-lg font-bold mb-4'>Take Actions</h3>
              <div className='flex flex-col'>
                <button className='w-full border border-[#dbe6df] bg-[#f7f8f6] py-3 rounded-lg font-semibold hover:bg-gray-100 transition-all'>
                  Download Mobile View
                </button>

                <button className='w-full mt-4 bg-[#15ec5b] py-3 rounded-lg font-bold shadow hover:bg-green-500 transition-all'>
                  Mark as Completed
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default MemberWorkout
