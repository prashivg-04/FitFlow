import React from 'react'

const TrainerHeader = () => {
  return (
    <div className=''>
      <header className='flex items-center justify-between h-20 px-6 py-4 bg-white border-b border-[#f0f4f2]'>
        <div className='flex flex-col'>
          <h2 className='text-lg font-bold tracking-tight leading-tight'>Power Zone Gym</h2>
          <p className='text-xs text-[#61896f]'>Welcome back, Alex</p>
        </div>

        <div className='flex flex-col'>
          <button className='flex items-center gap-3 justify-center bg-[#15ec5b] px-4 py-2 rounded-lg hover:bg-[#13c74a] shadow-sm shadow-[#15ec5b]/30'>
            <i class="ri-reset-left-line text-sm font-bold"></i>
            <h1 className='text-lg font-bold'>61A9XT</h1>
          </button>
        </div>
      </header>
    </div>
  )
}

export default TrainerHeader
