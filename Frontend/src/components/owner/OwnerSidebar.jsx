import React, { useState } from 'react'
import icon from '../../assets/icon.svg'
import navjot from '../../media/navjotImg.jpeg'

const OwnerSidebar = (props) => {

    const { activeMenu, setActiveMenu } = props;

  return (
    <div className='flex flex-col min-h-screen h-full w-72 bg-white border-r border-[#f0f4f2] z-10'>
        {/* Logo */}
        <div className='h-20 flex items-center px-8 border-b border-[#f0f4f2]'>
            <div className='flex items-center gap-3'>
                <div className='size-10 flex items-center justify-center'> 
                    <img className='rounded-lg' src={icon} alt="" />
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-xl font-bold tracking-tight leading-none'>GymFlow</h1>
                    <p className='text-xs font-medium text-[#61896f] mt-1'>Gym Owner</p>
                </div>
            </div>
        </div>

        {/* Navigation */}
        <div className='flex-1 flex flex-col overflow-y-auto px-4 py-2'>
            {/* Main Menu */}
            <div className='flex flex-col pt-2'>
                <div className='px-4 py-2 text-xs font-semibold text-[#61896f] uppercase tracking-wider'>Main Menu</div>
                <button
                    onClick={() => setActiveMenu('dashboard')} 
                    className={`px-4 py-2 flex items-center gap-3 rounded-lg transition-all cursor-pointer ${
                        activeMenu === 'dashboard' 
                        ? 'bg-[#edfdef] text-[#15ec5b] border-l-4 border-[#15ec5b]' 
                        : 'text-[#61896f] hover:bg-[#f7f8f6] hover:text-[#15ec5b]' 
                    }`}
                >
                    <i class="text-lg ri-dashboard-line"></i>
                    <span className='font-medium'>Dashboard</span>
                </button>

                <button
                    onClick={() => setActiveMenu('members')} 
                    className={`px-4 py-2 flex items-center gap-3 rounded-lg transition-all cursor-pointer ${
                        activeMenu === 'members' 
                        ? 'bg-[#edfdef] text-[#15ec5b] border-l-4 border-[#15ec5b]' 
                        : 'text-[#61896f] hover:bg-[#f7f8f6] hover:text-[#15ec5b]' 
                    }`} 
                >
                    <i class="text-lg ri-group-line"></i>
                    <span className='font-medium'>Members</span>
                </button>

                <button
                    onClick={() => setActiveMenu('trainers')} 
                    className={`px-4 py-2 flex items-center gap-3 rounded-lg transition-all cursor-pointer ${
                        activeMenu === 'trainers' 
                        ? 'bg-[#edfdef] text-[#15ec5b] border-l-4 border-[#15ec5b]' 
                        : 'text-[#61896f] hover:bg-[#f7f8f6] hover:text-[#15ec5b]' 
                    }`} 
                >
                    <i class="text-lg ri-group-3-line"></i>
                    <span className='font-medium'>Trainers</span>
                </button>

                <button
                    onClick={() => setActiveMenu('payments')} 
                    className={`px-4 py-2 flex items-center gap-3 rounded-lg transition-all cursor-pointer ${
                        activeMenu === 'payments' 
                        ? 'bg-[#edfdef] text-[#15ec5b] border-l-4 border-[#15ec5b]' 
                        : 'text-[#61896f] hover:bg-[#f7f8f6] hover:text-[#15ec5b]' 
                    }`} 
                >
                    <i class="text-lg fa-solid fa-money-check"></i>
                    <span className='font-medium'>Payments</span>
                </button>

                <button
                    onClick={() => setActiveMenu('notifications')} 
                    className={`px-4 py-2 flex items-center gap-3 rounded-lg transition-all cursor-pointer ${
                        activeMenu === 'notifications' 
                        ? 'bg-[#edfdef] text-[#15ec5b] border-l-4 border-[#15ec5b]' 
                        : 'text-[#61896f] hover:bg-[#f7f8f6] hover:text-[#15ec5b]' 
                    }`} 
                >
                    <i class="text-lg fa-solid fa-bell"></i>
                    <span className='font-medium'>Notifications</span>
                </button>
            </div>

            {/* System Menu */}
            <div className='flex flex-col pt-4 mt-4 border-t border-[#f0f4f2]'>
                <div className='px-4 py-2 text-xs font-semibold text-[#61896f] uppercase tracking-wider'>System</div>
                <button
                    onClick={() => setActiveMenu('settings')} 
                    className={`px-4 py-2 flex items-center gap-3 rounded-lg transition-all cursor-pointer ${
                        activeMenu === 'settings' 
                        ? 'bg-[#edfdef] text-[#15ec5b] border-l-4 border-[#15ec5b]' 
                        : 'text-[#61896f] hover:bg-[#f7f8f6] hover:text-[#15ec5b]' 
                    }`} 
                >
                    <i class="text-lg ri-settings-4-line"></i>
                    <span className='font-medium'>Settings</span>
                </button>

                <button
                    onClick={() => setActiveMenu('support')} 
                    className={`px-4 py-2 flex items-center gap-3 rounded-lg transition-all cursor-pointer ${
                        activeMenu === 'support' 
                        ? 'bg-[#edfdef] text-[#15ec5b] border-l-4 border-[#15ec5b]' 
                        : 'text-[#61896f] hover:bg-[#f7f8f6] hover:text-[#15ec5b]' 
                    }`} 
                >                    
                    <i class="text-lg fa-regular fa-circle-question"></i>
                    <span className='font-medium'>Support</span>
                </button>
            </div>
        </div>

        {/* Profile Section */}
        <div className='p-4 border-t border-[#f0f4f2]'>
            <a className='flex items-center gap-3 p-2 rounded-lg hover:bg-[#f7f8f6] transition-colors' href=''>
                <div className='flex items-center justify-center bg-cover bg-center'> 
                    <img className='rounded-full w-12 h-12 object-cover border-2 border-[#15ec5b]' src={navjot} alt="" />
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-sm font-bold truncate tracking-tight leading-none'>Alex Johnson</h1>
                    <p className='text-xs font-medium text-[#61896f] mt-1'>Owner</p>
                </div>
            </a>
        </div>
    </div>
  )
}

export default OwnerSidebar
