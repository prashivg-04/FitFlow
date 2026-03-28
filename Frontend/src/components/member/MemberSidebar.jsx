import React from 'react'
import icon from '../../assets/icon.svg'
import memberDp from '../../media/M.png'
import { NavLink } from 'react-router-dom'
import LogoutSidebar from '../LogoutSidebar'
import FeedbackButton from '../FeedbackButton'

const MemberSidebar = ({ username }) => {

  return (
    <div className='flex flex-col min-h-screen h-full w-64 bg-white border-r border-[#f0f4f2] z-10'>
        {/* Logo */}
        <div className='h-20 flex items-center px-8 border-b border-[#f0f4f2]'>
            <div className='flex items-center gap-3'>
                <div className='size-10 flex items-center justify-center'> 
                    <img className='rounded-lg' src={icon} alt="" />
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-xl font-bold tracking-tight leading-none'>FitFlow</h1>
                    <p className='text-xs font-medium text-[#61896f] mt-1'>Gym Member</p>
                </div>
            </div>
        </div>

        {/* Navigation */}
        <div className='flex-1 flex flex-col overflow-y-auto px-4 py-2'>
            {/* Main Menu */}
            <div className='flex flex-col pt-2'>
                <div className='px-4 py-2 text-xs font-semibold text-[#61896f] uppercase tracking-wider'>Main Menu</div>
                <NavLink
                    to='/member/dashboard'
                    className={({ isActive }) => `px-4 py-2 flex items-center gap-3 rounded-lg transition-all cursor-pointer ${
                        isActive
                        ? 'bg-[#edfdef] text-[#15ec5b] border-l-4 border-[#15ec5b]' 
                        : 'text-[#61896f] hover:bg-[#f7f8f6] hover:text-[#15ec5b]' 
                    }`}
                >
                    <i className="text-lg ri-dashboard-line"></i>
                    <span className='font-medium'>Dashboard</span>
                </NavLink>

                <NavLink
                    to='/member/workout'
                    className={({ isActive }) => `px-4 py-2 flex items-center gap-3 rounded-lg transition-all cursor-pointer ${
                        isActive
                        ? 'bg-[#edfdef] text-[#15ec5b] border-l-4 border-[#15ec5b]' 
                        : 'text-[#61896f] hover:bg-[#f7f8f6] hover:text-[#15ec5b]' 
                    }`} 
                >
                    <i className="text-lg fa-solid fa-dumbbell"></i>
                    <span className='font-medium'>Workout Plan</span>
                </NavLink>

                <NavLink
                    to='/member/progress'
                    className={({ isActive }) => `px-4 py-2 flex items-center gap-3 rounded-lg transition-all cursor-pointer ${
                        isActive
                        ? 'bg-[#edfdef] text-[#15ec5b] border-l-4 border-[#15ec5b]' 
                        : 'text-[#61896f] hover:bg-[#f7f8f6] hover:text-[#15ec5b]' 
                    }`} 
                >
                    <i className="text-lg ri-progress-3-line"></i>
                    <span className='font-medium'>Progress</span>
                </NavLink>

                <NavLink
                    to='/member/attendance'
                    className={({ isActive }) => `px-4 py-2 flex items-center gap-3 rounded-lg transition-all cursor-pointer ${
                        isActive
                        ? 'bg-[#edfdef] text-[#15ec5b] border-l-4 border-[#15ec5b]' 
                        : 'text-[#61896f] hover:bg-[#f7f8f6] hover:text-[#15ec5b]' 
                    }`} 
                >
                    <i className="text-lg fa-solid fa-circle-check"></i>
                    <span className='font-medium'>Attendance</span>
                </NavLink>

                <NavLink
                    to='/member/subscription'
                    className={({ isActive }) => `px-4 py-2 flex items-center gap-3 rounded-lg transition-all cursor-pointer ${
                        isActive
                        ? 'bg-[#edfdef] text-[#15ec5b] border-l-4 border-[#15ec5b]' 
                        : 'text-[#61896f] hover:bg-[#f7f8f6] hover:text-[#15ec5b]' 
                    }`} 
                >
                    <i className="text-lg fa-solid fa-money-check"></i>
                    <span className='font-medium'>Subscription</span>
                </NavLink>

                <NavLink
                    to='/member/notifications'
                    className={({ isActive }) => `px-4 py-2 flex items-center gap-3 rounded-lg transition-all cursor-pointer ${
                        isActive
                        ? 'bg-[#edfdef] text-[#15ec5b] border-l-4 border-[#15ec5b]' 
                        : 'text-[#61896f] hover:bg-[#f7f8f6] hover:text-[#15ec5b]' 
                    }`} 
                >
                    <i className="text-lg fa-solid fa-bell"></i>
                    <span className='font-medium'>Notifications</span>
                </NavLink>
            </div>

            {/* System Menu */}
            <div className='flex flex-col pt-4 mt-4 border-t border-[#f0f4f2]'>
                <div className='px-4 py-2 text-xs font-semibold text-[#61896f] uppercase tracking-wider'>System</div>
                <NavLink
                    to='/member/settings'
                    className={({ isActive }) => `px-4 py-2 flex items-center gap-3 rounded-lg transition-all cursor-pointer ${
                        isActive
                        ? 'bg-[#edfdef] text-[#15ec5b] border-l-4 border-[#15ec5b]' 
                        : 'text-[#61896f] hover:bg-[#f7f8f6] hover:text-[#15ec5b]' 
                    }`} 
                >
                    <i className="text-lg ri-settings-4-line"></i>
                    <span className='font-medium'>Settings</span>
                </NavLink>

                <NavLink
                    to='/member/support'
                    className={({ isActive }) => `px-4 py-2 flex items-center gap-3 rounded-lg transition-all cursor-pointer ${
                        isActive
                        ? 'bg-[#edfdef] text-[#15ec5b] border-l-4 border-[#15ec5b]' 
                        : 'text-[#61896f] hover:bg-[#f7f8f6] hover:text-[#15ec5b]' 
                    }`} 
                >                    
                    <i className="text-lg fa-regular fa-circle-question"></i>
                    <span className='font-medium'>Support</span>
                </NavLink>

                <br />
                <FeedbackButton />
            </div>
        </div>

        {/* Profile Section */}
        <div className='p-4 border-t border-[#f0f4f2] space-y-2'>
            <LogoutSidebar />
            <a className='flex items-center gap-3 p-2 rounded-lg hover:bg-[#f7f8f6] transition-colors' href=''>
                <div className='flex items-center justify-center bg-cover bg-center'> 
                    <img className='rounded-full w-12 h-12 object-cover border-2 border-[#15ec5b]' src={memberDp} alt="" />
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-sm font-bold truncate tracking-tight leading-none'>{username || 'User Name'}</h1>
                    <p className='text-xs font-medium text-[#61896f] mt-1'>Member</p>
                </div>
            </a>
        </div>
    </div>
  )
}

export default MemberSidebar
