import React, { useState } from 'react'
import MemberHeader from '../../components/member/MemberHeader'
import MemberSidebar from '../../components/member/MemberSidebar'
import MemberDashboard from './MemberDashboard'
import MemberWorkout from './MemberWorkout'
import MemberProgress from './MemberProgress'
import MemberAttendance from './MemberAttendance'
import MemberSubscription from './MemberSubscription'
import MemberNotification from './MemberNotification'
import MemberSetting from './MemberSetting'
import MemberSupport from './MemberSupport'

const MemberHome = () => {

    const [activeMenu, setActiveMenu] = useState('dashboard');

  return (
    <div className='font-display bg-[#f7f8f6] text-slate-900 antialiased'>
        <div className='flex h-screen w-full overflow-hidden'>
            {/* Sidebar */}
            <div className='shrink-0'>
                <MemberSidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
            </div>
            

            {/* Main Content */}
            <div className='flex-1 overflow-y-auto'>
                <div className='sticky top-0 z-20 bg-[#f7f8f6]'>
                <MemberHeader />
                </div>

                <div>
                    {activeMenu === 'dashboard' && <MemberDashboard />}
                    {activeMenu === 'workoutPlan' && <MemberWorkout />}
                    {activeMenu === 'progress' && <MemberProgress />}
                    {activeMenu === 'attendance' && <MemberAttendance />}
                    {activeMenu === 'subscription' && <MemberSubscription />}
                    {activeMenu === 'notifications' && <MemberNotification />}
                    {activeMenu === 'settings' && <MemberSetting />}
                    {activeMenu === 'support' && <MemberSupport />}
                </div>
            </div>
        </div>
    </div>
  )
}

export default MemberHome
