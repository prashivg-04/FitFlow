import React from 'react'
import navjot from '../../media/navjotImg.jpeg'

const TrainerAssignWorkout = () => {
  return (
    <div className='relative flex min-h-screen bg-[#f7f8f6]'>
      <div className='flex-1 overflow-y-auto py-8 px-12 scroll-smooth'>
        <div className='max-w-300 mx-auto space-y-8 pb-10'>
          {/* Heading */}
          <div className='flex items-center justify-between gap-4'>
            <div className='flex flex-col items-start justify-center gap-2'>
              <h1 className='text-4xl font-black tracking-tight'>Select Member</h1>
              <p className='text-[#61896f] text-base'>Choose a member from your assigned list to create a new plan or modify their current routine.</p>
            </div>
          </div>

          {/* Filters */}
          <div className='flex items-center justify-between gap-4'>
            <div className='relative flex-1 max-w-sm group'>
              <i className="ri-search-line absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-[18px] group-focus-within:font-bold group-focus-within:text-[#15ec5b] transition-all"></i>
              <input className='w-full pl-10 pr-4 py-2 bg-white border border-[#dbe6df] rounded-lg focus:outline-none focus:ring-2 focus:ring-[#15ec5b] transition-all placeholder:text-slate-400' type="text" placeholder='Filter by name...' />
            </div>

            <div className='flex items-center gap-2 text-xs font-medium text-slate-500'>
              <span>Sort by:</span>
              <button className='flex items-center gap-1 hover:text-[#15ec5b] transition-colors'>
                Recent
                <i className="ri-arrow-down-s-fill text-[16px]"></i>
              </button>
            </div>
          </div>

          {/* Member Cards */}
          <div className='flex flex-col gap-4'>
            <div className='group flex items-center justify-between gap-4 px-8 py-6 bg-white border border-[#dbe6df] rounded-xl shadow-sm hover:shadow-md hover:bg-gray-50 transition-all'>
              <div className='flex items-center gap-6 flex-1'>
                <div className='relative'>
                  <img className='size-14 rounded-full bg-gray-100 bg-cover bg-center bg-no-repeat border border-slate-100 object-cover' src={navjot} alt="Navjot" />
                  <div className='absolute -bottom-0.5 -right-0.5 size-4 bg-green-500 border-2 border-white rounded-full'></div>
                </div>
                <div className='flex flex-col gap-1'>
                  <div className='flex items-center gap-2'>
                    <h3 className='text-lg font-bold leading-tight'>Sarah Jenkins</h3>
                    <span className='inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-700 border border-green-200'>Active</span>
                  </div>
                  <p className='text-[#61896f] text-sm font-medium flex items-center gap-1'>
                    <i className='fa-solid fa-dumbbell text-[16px] text-[#15ec5b]'></i>
                    Hypertrophy Phase 2
                  </p>
                </div>
              </div>

              <div className='flex items-center justify-end w-auto'>
                <button className='border border-[#dbe6df] bg-gray-50 px-5 py-2 rounded-lg group-hover:bg-[#15ec5b] text-md font-bold flex items-center gap-2 transition-all'>
                  <i class="ri-pencil-line text-[18px]"></i>
                  Change Workout
                </button>
              </div>
            </div>

            <div className='group flex items-center justify-between gap-4 px-8 py-6 bg-white border border-[#dbe6df] rounded-xl shadow-sm hover:shadow-md hover:bg-gray-50 transition-all'>
              <div className='flex items-center gap-6 flex-1'>
                <div className='relative'>
                  <img className='size-14 rounded-full bg-gray-100 bg-cover bg-center bg-no-repeat border border-slate-100 object-cover' src={navjot} alt="Navjot" />
                  <div className='absolute -bottom-0.5 -right-0.5 size-4 bg-red-500 border-2 border-white rounded-full'></div>
                </div>
                <div className='flex flex-col gap-1'>
                  <div className='flex items-center gap-2'>
                    <h3 className='text-lg font-bold leading-tight'>Mike Ross</h3>
                    <span className='inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-700 border border-red-200'>No Plan</span>
                  </div>
                  <p className='text-[#61896f] text-sm font-medium flex items-center gap-1 italic'>
                    <i className='fa-solid fa-ban text-[14px]'></i>
                    No active workout plan
                  </p>
                </div>
              </div>

              <div className='flex items-center justify-end w-auto'>
                <button className='border border-[#dbe6df] bg-gray-50 px-5 py-2 rounded-lg group-hover:bg-[#15ec5b] text-md font-bold flex items-center gap-2 transition-all'>
                  <i class="ri-add-circle-line text-[18px]"></i>
                  Assign Workout
                </button>
              </div>
            </div>

            <div className='group flex items-center justify-between gap-4 px-8 py-6 bg-white border border-[#dbe6df] rounded-xl shadow-sm hover:shadow-md hover:bg-gray-50 transition-all'>
              <div className='flex items-center gap-6 flex-1'>
                <div className='relative'>
                  <img className='size-14 rounded-full bg-gray-100 bg-cover bg-center bg-no-repeat border border-slate-100 object-cover' src={navjot} alt="Navjot" />
                  <div className='absolute -bottom-0.5 -right-0.5 size-4 bg-green-500 border-2 border-white rounded-full'></div>
                </div>
                <div className='flex flex-col gap-1'>
                  <div className='flex items-center gap-2'>
                    <h3 className='text-lg font-bold leading-tight'>Elara Vance</h3>
                    <span className='inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-700 border border-green-200'>Active</span>
                  </div>
                  <p className='text-[#61896f] text-sm font-medium flex items-center gap-1'>
                    <i className='fa-solid fa-person-running text-[16px] text-[#15ec5b]'></i>
                    Cardio Prep & Conditioning
                  </p>
                </div>
              </div>

              <div className='flex items-center justify-end w-auto'>
                <button className='border border-[#dbe6df] bg-gray-50 px-5 py-2 rounded-lg group-hover:bg-[#15ec5b] text-md font-bold flex items-center gap-2 transition-all'>
                  <i class="ri-pencil-line text-[18px]"></i>
                  Change Workout
                </button>
              </div>
            </div>

            <div className='group flex items-center justify-between gap-4 px-8 py-6 bg-white border border-[#dbe6df] rounded-xl shadow-sm hover:shadow-md hover:bg-gray-50 transition-all opacity-70'>
              <div className='flex items-center gap-6 flex-1'>
                <div className='relative'>
                  <img className='size-14 rounded-full bg-gray-100 bg-cover bg-center bg-no-repeat border border-slate-100 object-cover' src={navjot} alt="Navjot" />
                  <div className='absolute -bottom-0.5 -right-0.5 size-4 bg-gray-500 border-2 border-white rounded-full'></div>
                </div>
                <div className='flex flex-col gap-1'>
                  <div className='flex items-center gap-2'>
                    <h3 className='text-lg font-bold leading-tight'>David Chen</h3>
                    <span className='inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200'>Paused</span>
                  </div>
                  <p className='text-[#61896f] text-sm font-medium flex items-center gap-1'>
                    <i className='fa-regular fa-circle-pause text-[14px]'></i>
                    Plan paused (Injury recovery)
                  </p>
                </div>
              </div>

              <div className='flex items-center justify-end w-auto'>
                <button className='border border-[#dbe6df] bg-gray-50 px-5 py-2 rounded-lg group-hover:bg-[#15ec5b] text-md font-bold flex items-center gap-2 transition-all'>
                  <i class="ri-play-line text-[18px]"></i>
                  Resume Plan
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrainerAssignWorkout
