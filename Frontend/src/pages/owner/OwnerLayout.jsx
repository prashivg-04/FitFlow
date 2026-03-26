import React, { useEffect, useState } from 'react'
import OwnerSidebar from '../../components/owner/OwnerSidebar'
import OwnerHeader from '../../components/owner/OwnerHeader'
import { Outlet } from 'react-router-dom'
import api from '../../api/axios'

const OwnerLayout = () => {

  const [gym, setGym] = useState(null);

  useEffect(() => {
    const fetchGymInfo = async () => {
      try {
        const res = await api.get('/user/gym-info');
        setGym(res.data.data);
      } catch (error) {
        console.error('Failed to fetch gym info:', error);
      }
    };

    fetchGymInfo();
  }, []);

    
  return (
    <div className='font-display bg-[#f7f8f6] text-slate-900 antialiased'>
      <div className='flex h-screen w-full overflow-hidden'>
        <div className='shrink-0'>
          <OwnerSidebar username={gym?.name} />
        </div>
        {/* Sidebar */}
        

        {/* Main Content */}
        <div className='flex-1 overflow-y-auto'>
          <div className='sticky top-0 z-20 bg-[#f7f8f6]'>
            <OwnerHeader gym={gym} />
          </div>

          <div>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OwnerLayout
