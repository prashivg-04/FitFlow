import React, { useState } from 'react'
import icon from '../../assets/icon.svg'
import navjot from '../../media/navjotImg.jpeg'
import OwnerSidebar from '../../components/owner/OwnerSidebar'
import OwnerDashboard from './OwnerDashboard'
import MemberManagement from './MemberManagement'
import TrainerManagement from './TrainerManagement'
import PaymentDashboard from './PaymentDashboard'
import NotificationDashboard from './NotificationDashboard'
import Settings from './Settings'
import Support from './Support'
import OwnerHeader from '../../components/owner/OwnerHeader'

const OwnerHome = () => {

    const [activeMenu, setActiveMenu] = useState('dashboard');
    
  return (
    <div className='font-display bg-[#f7f8f6] text-slate-900 antialiased'>
      <div className='flex h-screen w-full overflow-hidden'>
        <div className='shrink-0'>
          <OwnerSidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        </div>
        {/* Sidebar */}
        

        {/* Main Content */}
        <div className='flex-1 overflow-y-auto'>
          <div className='sticky top-0 z-20 bg-[#f7f8f6]'>
            <OwnerHeader />
          </div>

          <div>
            {activeMenu === 'dashboard' && <OwnerDashboard />}
            {activeMenu === 'members' && <MemberManagement />}
            {activeMenu === 'trainers' && <TrainerManagement />}
            {activeMenu === 'payments' && <PaymentDashboard />}
            {activeMenu === 'notifications' && <NotificationDashboard />}
            {activeMenu === 'settings' && <Settings />}
            {activeMenu === 'support' && <Support />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default OwnerHome
