import React, { useState } from 'react'
import TrainerHeader from '../../components/trainer/TrainerHeader'
import TrainerSidebar from '../../components/trainer/TrainerSidebar'
import TrainerDashboard from './TrainerDashboard'
import TrainerMemberManagement from './TrainerMemberManagement'
import TrainerAssignWorkout from './TrainerAssignWorkout'
import TrainerWorkoutPlans from './TrainerWorkoutPlans'
import TrainerWorkspace from './TrainerWorkspace'
import TrainerSettings from './TrainerSettings'
import TrainerSupport from './TrainerSupport'

const TrainerHome = () => {

  const [activeMenu, setActiveMenu] = useState('dashboard');

  return (
    <div className='font-display bg-[#f7f8f6] text-slate-900 antialiased'>
      <div className='flex h-screen w-full overflow-hidden'>
        <div className='shrink-0'>
          <TrainerSidebar activeMenu={activeMenu} setActiveMenu={setActiveMenu} />
        </div>
        {/* Sidebar */}
        

        {/* Main Content */}
        <div className='flex-1 overflow-y-auto'>
          <div className='sticky top-0 z-20 bg-[#f7f8f6]'>
            <TrainerHeader />
          </div>

          <div>
            {activeMenu === 'dashboard' && <TrainerDashboard />}
            {activeMenu === 'members' && <TrainerMemberManagement />}
            {activeMenu === 'workoutPlans' && <TrainerWorkoutPlans />}
            {activeMenu === 'assignWorkouts' && <TrainerAssignWorkout />}
            {activeMenu === 'workspace' && <TrainerWorkspace />}
            {activeMenu === 'settings' && <TrainerSettings />}
            {activeMenu === 'support' && <TrainerSupport />}
          </div>
        </div>
      </div>
    </div>
  )
}

export default TrainerHome
