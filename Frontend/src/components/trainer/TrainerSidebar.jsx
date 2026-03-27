import React from 'react'
import icon from '../../assets/icon.svg'
import navjot from '../../media/navjotImg.jpeg'
import { Link, NavLink } from 'react-router-dom'
import LogoutSidebar from '../LogoutSidebar'
import FeedbackButton from '../FeedbackButton'

const TrainerSidebar = ({ username }) => {

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
                    <p className='text-xs font-medium text-[#61896f] mt-1'>Gym Trainer</p>
                </div>
            </div>
        </div>

        {/* Navigation */}
        <div className='flex-1 flex flex-col overflow-y-auto px-4 py-2'>
            {/* Main Menu */}
            <div className='flex flex-col pt-2'>
                <div className='px-4 py-2 text-xs font-semibold text-[#61896f] uppercase tracking-wider'>Main Menu</div>
                <NavLink
                    to='/trainer/dashboard'
                    className={({ isActive }) => `px-4 py-2 flex items-center gap-3 rounded-lg transition-all cursor-pointer ${
                        isActive
                        ? 'bg-[#edfdef] text-[#15ec5b] border-l-4 border-[#15ec5b]' 
                        : 'text-[#61896f] hover:bg-[#f7f8f6] hover:text-[#15ec5b]' 
                    }`}
                >
                    <i class="text-lg ri-dashboard-line"></i>
                    <span className='font-medium'>Dashboard</span>
                </NavLink>

                <NavLink
                    to='/trainer/members'
                    className={({ isActive }) => `px-4 py-2 flex items-center gap-3 rounded-lg transition-all cursor-pointer ${
                        isActive
                        ? 'bg-[#edfdef] text-[#15ec5b] border-l-4 border-[#15ec5b]' 
                        : 'text-[#61896f] hover:bg-[#f7f8f6] hover:text-[#15ec5b]' 
                    }`} 
                >
                    <i class="text-lg ri-group-line"></i>
                    <span className='font-medium'>Members</span>
                </NavLink>

                <NavLink
                    to='/trainer/workouts'
                    className={({ isActive }) => `px-4 py-2 flex items-center gap-3 rounded-lg transition-all cursor-pointer ${
                        isActive
                        ? 'bg-[#edfdef] text-[#15ec5b] border-l-4 border-[#15ec5b]' 
                        : 'text-[#61896f] hover:bg-[#f7f8f6] hover:text-[#15ec5b]' 
                    }`} 
                >
                    <i class="text-lg fa-solid fa-book"></i>
                    <span className='font-medium'>Workout Plans</span>
                </NavLink>

                <NavLink
                    to='/trainer/workout-builder'
                    className={({ isActive }) => `px-4 py-2 flex items-center gap-3 rounded-lg transition-all cursor-pointer ${
                        isActive
                        ? 'bg-[#edfdef] text-[#15ec5b] border-l-4 border-[#15ec5b]' 
                        : 'text-[#61896f] hover:bg-[#f7f8f6] hover:text-[#15ec5b]' 
                    }`} 
                >
                    <i class="text-lg fa-solid fa-dumbbell"></i>
                    <span className='font-medium'>Workout Builder</span>
                </NavLink>

                <NavLink
                    to='/trainer/assignments'
                    className={({ isActive }) => `px-4 py-2 flex items-center gap-3 rounded-lg transition-all cursor-pointer ${
                        isActive
                        ? 'bg-[#edfdef] text-[#15ec5b] border-l-4 border-[#15ec5b]' 
                        : 'text-[#61896f] hover:bg-[#f7f8f6] hover:text-[#15ec5b]' 
                    }`} 
                >
                    <i class="text-lg fa-solid fa-square-pen"></i>
                    <span className='font-medium'>Assign Workout</span>
                </NavLink>

                <NavLink
                    to='/trainer/workspace'
                    className={({ isActive }) => `px-4 py-2 flex items-center gap-3 rounded-lg transition-all cursor-pointer ${
                        isActive
                        ? 'bg-[#edfdef] text-[#15ec5b] border-l-4 border-[#15ec5b]' 
                        : 'text-[#61896f] hover:bg-[#f7f8f6] hover:text-[#15ec5b]' 
                    }`} 
                >
                    <i class="text-lg ri-booklet-line"></i>
                    <span className='font-medium'>Workspace</span>
                </NavLink>
            </div>

            {/* System Menu */}
            <div className='flex flex-col pt-4 mt-4 border-t border-[#f0f4f2]'>
                <div className='px-4 py-2 text-xs font-semibold text-[#61896f] uppercase tracking-wider'>System</div>
                <NavLink
                    to='/trainer/settings'
                    className={({ isActive }) => `px-4 py-2 flex items-center gap-3 rounded-lg transition-all cursor-pointer ${
                        isActive
                        ? 'bg-[#edfdef] text-[#15ec5b] border-l-4 border-[#15ec5b]' 
                        : 'text-[#61896f] hover:bg-[#f7f8f6] hover:text-[#15ec5b]' 
                    }`} 
                >
                    <i class="text-lg ri-settings-4-line"></i>
                    <span className='font-medium'>Settings</span>
                </NavLink>

                <NavLink
                    to='/trainer/support'
                    className={({ isActive }) => `px-4 py-2 flex items-center gap-3 rounded-lg transition-all cursor-pointer ${
                        isActive
                        ? 'bg-[#edfdef] text-[#15ec5b] border-l-4 border-[#15ec5b]' 
                        : 'text-[#61896f] hover:bg-[#f7f8f6] hover:text-[#15ec5b]' 
                    }`} 
                >                    
                    <i class="text-lg fa-regular fa-circle-question"></i>
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
                    <img className='rounded-full w-12 h-12 object-cover border-2 border-[#15ec5b]' src={navjot} alt="" />
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-sm font-bold truncate tracking-tight leading-none'>{username}</h1>
                    <p className='text-xs font-medium text-[#61896f] mt-1'>Trainer</p>
                </div>
            </a>
        </div>
    </div>
  )
}

export default TrainerSidebar
