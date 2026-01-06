import React from 'react'
import icon from '../../assets/icon.svg'
import navjot from '../../media/navjotImg.jpeg'
import OwnerSidebar from '../../components/OwnerSidebar'

const OwnerDashboard = () => {
  return (
    <div className='font-display bg-black text-slate-900 antialiased overflow-hidden'>
      <div className='flex min-h-screen w-full'>
        {/* Sidebar */}
        <OwnerSidebar />

        {/* Main Content */}
        <div className='text-white'>Main Content</div>
      </div>
    </div>
  )
}

export default OwnerDashboard
