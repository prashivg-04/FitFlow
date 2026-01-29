import React, { useState } from 'react'
import TrainerHeader from '../../components/trainer/TrainerHeader'
import TrainerSidebar from '../../components/trainer/TrainerSidebar'
import { Outlet } from 'react-router-dom'

const TrainerLayout = () => {

  return (
    <div className='font-display bg-[#f7f8f6] text-slate-900 antialiased'>
      <div className='flex h-screen w-full overflow-hidden'>
        <div className='shrink-0'>
          <TrainerSidebar />
        </div>
        {/* Sidebar */}
        

        {/* Main Content */}
        <div className='flex-1 overflow-y-auto'>
          <div className='sticky top-0 z-20 bg-[#f7f8f6]'>
            <TrainerHeader />
          </div>

          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrainerLayout
