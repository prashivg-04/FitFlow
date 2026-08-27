import React from 'react'

const MemberHeader = (props) => {

  const { gymName, name } = props.gym || {};
  const setIsSidebarOpen = props.setIsSidebarOpen;

  return (
    <div>
      <header className='flex items-center justify-between h-20 px-4 sm:px-6 py-4 bg-white border-b border-[#f0f4f2]'>
        <div className='flex items-center gap-4'>
          <button 
            className='lg:hidden p-2 -ml-2 rounded-lg hover:bg-slate-100 text-slate-600 transition-colors'
            onClick={() => setIsSidebarOpen(true)}
          >
            <i className="ri-menu-2-line text-2xl"></i>
          </button>
          <div className='flex flex-col'>
            <h2 className='text-lg font-bold tracking-tight leading-tight'>{gymName || 'Gym Name'}</h2>
            <p className='text-xs text-[#61896f]'>Welcome back, {name || 'User'}</p>
          </div>
        </div>
      </header>
    </div>
  )
}

export default MemberHeader
