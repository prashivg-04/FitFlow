import React, { useState } from 'react'
import MemberHeader from '../../components/member/MemberHeader'
import MemberSidebar from '../../components/member/MemberSidebar'
import { Outlet } from 'react-router-dom'

const MemberLayout = () => {

  return (
    <div className='font-display bg-[#f7f8f6] text-slate-900 antialiased'>
        <div className='flex h-screen w-full overflow-hidden'>
            {/* Sidebar */}
            <div className='shrink-0'>
                <MemberSidebar />
            </div>
            

            {/* Main Content */}
            <div className='flex-1 overflow-y-auto'>
                <div className='sticky top-0 z-20 bg-[#f7f8f6]'>
                    <MemberHeader />
                </div>

                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    </div>
  )
}

export default MemberLayout
