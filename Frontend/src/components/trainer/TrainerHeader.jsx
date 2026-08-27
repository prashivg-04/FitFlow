import React from 'react'

const TrainerHeader = (props) => {
  const { gymName, name } = props.gym || {};
  const { setIsSidebarOpen } = props;

  return (
    <div>
      <header className='flex items-center justify-between h-20 px-4 sm:px-6 py-4 bg-white border-b border-[#f0f4f2]'>
        <div className='flex items-center gap-3 sm:gap-4'>
          <button 
            className='lg:hidden p-2 -ml-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100'
            onClick={() => setIsSidebarOpen?.(true)}
          >
            <i className="ri-menu-2-line text-2xl"></i>
          </button>
          <div className='flex flex-col'>
            <h2 className='text-base sm:text-lg font-bold tracking-tight leading-tight'>{gymName || 'Gym Name'}</h2>
            <p className='text-[10px] sm:text-xs text-[#61896f]'>Welcome back, {name || 'Trainer'}</p>
          </div>
        </div>
      </header>
    </div>
  )
}

export default TrainerHeader