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

const OwnerHome = () => {

    const [activeMenu, setActiveMenu] = useState('dashboard');
    
  return (
    <div className='font-display bg-[#f7f8f6] text-slate-900 antialiased overflow-hidden'>
      <div className='flex min-h-screen w-full'>
        {/* Sidebar */}
        <OwnerSidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />

        {/* Main Content */}
        <div className='flex flex-col flex-1 h-full overflow-hidden bg-amber-500'>
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
  )
}

export default OwnerHome
