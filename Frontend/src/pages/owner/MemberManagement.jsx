import React from 'react'
import OwnerHeader from '../../components/owner/OwnerHeader'

const MemberManagement = () => {
  return (
    <div className=''>
      <div className='flex-1 overflow-y-auto p-8 scroll-smooth'>
        <div className='max-w-300 mx-auto space-y-8 pb-10'>
          {/* Heading */}
          <div className='flex items-center justify-between gap-4'>
            <div className='flex flex-col items-start justify-center gap-2'>
              <h1 className='text-4xl font-black tracking-tight'>Member Management</h1>
              <p className='text-[#61896f] text-base'>Overview of all registered members and their current status.</p>
            </div>
            <div>
              <button className='flex items-center gap-2 px-5 py-2.5 bg-[#15ec5b] rounded-lg hover:bg-green-500 font-bold shadow-lg shadow-[#15ec5b]/25 transition-all'>
                <i class="ri-add-line text-[20px]"></i>
                Add New Member
              </button>
            </div>
          </div>

          {/* KPI Cards */}
          <div className='grid grid-cols-3 gap-6'>
            <div className='bg-white p-6 rounded-xl border border-[#dbe6df] shadow-soft flex flex-col justify-between h-32 relative overflow-hidden group'>
              <div className='absolute -top-2.5 -right-2.5 p-6 bg-green-50 rounded-full group-hover:bg-green-100 transition-all'>
                <i className='ri-group-line text-green-400 text-4xl opacity-50'></i>
              </div>
              <span className='text-[#61896f] font-medium z-10'>Total Members</span>
              <div className='flex items-center gap-3 z-10'>
                <span className='text-3xl font-bold'>1240</span>
                <span className='text-sm font-semibold text-green-600 bg-green-100 px-2 py-0.5 rounded-full flex items-center'>
                  <i class="fa-solid fa-arrow-trend-up"></i>
                  5%
                </span>
              </div>
            </div>

            <div className='bg-white p-6 rounded-xl border border-[#dbe6df] shadow-soft flex flex-col justify-between h-32 relative overflow-hidden group'>
              <div className='absolute -top-2.5 -right-2.5 p-6 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-all'>
                <i className='ri-bank-card-line text-blue-400 text-4xl opacity-50'></i>
              </div>
              <span className='text-[#61896f] font-medium z-10'>Active Memberships</span>
              <div className='flex items-center gap-3 z-10'>
                <span className='text-3xl font-bold'>980</span>
                <span className='text-sm font-semibold text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full flex items-center'>
                  <i class="fa-solid fa-arrow-trend-up"></i>
                  2%
                </span>
              </div>
            </div>

            <div className='bg-white p-6 rounded-xl border border-[#dbe6df] shadow-soft flex flex-col justify-between h-32 relative overflow-hidden group'>
              <div className='absolute -top-2.5 -right-2.5 p-6 bg-orange-50 rounded-full group-hover:bg-orange-100 transition-all'>
                <i class="fa-solid fa-triangle-exclamation text-orange-400 text-4xl opacity-50"></i>
              </div>
              <span className='text-[#61896f] font-medium z-10'>Expiring Soon</span>
              <div className='flex items-center gap-3 z-10'>
                <span className='text-3xl font-bold'>12</span>
                <span className='text-sm font-semibold text-orange-600 bg-orange-100 px-2 py-0.5 rounded-full flex items-center'>
                  <i class="fa-solid fa-exclamation"></i>
                  1%
                </span>
              </div>
            </div>
          </div>

          {/* Members List */}
          <div></div>
        </div>
      </div>
    </div>
  )
}

export default MemberManagement
