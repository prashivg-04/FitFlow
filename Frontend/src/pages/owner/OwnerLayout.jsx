import React, { useState } from 'react'
import OwnerSidebar from '../../components/owner/OwnerSidebar'
import OwnerHeader from '../../components/owner/OwnerHeader'
import { Outlet } from 'react-router-dom'

const OwnerLayout = () => {
    
  return (
    <div className='font-display bg-[#f7f8f6] text-slate-900 antialiased'>
      <div className='flex h-screen w-full overflow-hidden'>
        <div className='shrink-0'>
          <OwnerSidebar />
        </div>
        {/* Sidebar */}
        

        {/* Main Content */}
        <div className='flex-1 overflow-y-auto'>
          <div className='sticky top-0 z-20 bg-[#f7f8f6]'>
            <OwnerHeader />
          </div>

          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OwnerLayout
