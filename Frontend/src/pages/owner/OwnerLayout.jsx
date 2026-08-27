import React, { useEffect, useState } from 'react'
import OwnerSidebar from '../../components/owner/OwnerSidebar'
import OwnerHeader from '../../components/owner/OwnerHeader'
import { Outlet, useLocation } from 'react-router-dom'
import api from '../../api/axios'

const OwnerLayout = () => {

  const [gym, setGym] = useState(null);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    // Close sidebar on route change on mobile
    const timer = setTimeout(() => setIsSidebarOpen(false), 0);
    return () => clearTimeout(timer);
  }, [location.pathname]);

  useEffect(() => {
    const fetchGymInfo = async () => {
      try {
        const res = await api.get('/user/gym-info');
        setGym(res.data.data);
      } catch (error) {
        console.error("Failed to fetch gym info", error);
      }
    };

    fetchGymInfo();
  }, []);

    
  return (
    <div className='font-display bg-[#f7f8f6] text-slate-900 antialiased'>
      <div className='flex h-screen w-full overflow-hidden relative'>
        
        {/* Mobile Sidebar Overlay */}
        {isSidebarOpen && (
          <div 
            className='fixed inset-0 bg-black/40 z-40 lg:hidden backdrop-blur-sm transition-opacity'
            onClick={() => setIsSidebarOpen(false)}
          />
        )}

        {/* Sidebar */}
        <div className={`fixed inset-y-0 left-0 z-50 transform ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} lg:relative lg:translate-x-0 transition duration-300 ease-in-out shrink-0`}>
          <OwnerSidebar username={gym?.name} setIsSidebarOpen={setIsSidebarOpen} />
        </div>
        
        {/* Main Content */}
        <div className='flex-1 flex flex-col h-screen overflow-hidden'>
          <div className='sticky top-0 z-20 bg-[#f7f8f6] shrink-0'>
            <OwnerHeader gym={gym} setIsSidebarOpen={setIsSidebarOpen} />
          </div>

          <div className='flex-1 overflow-y-auto'>
            <Outlet />
          </div>
        </div>
      </div>
    </div>
  )
}

export default OwnerLayout
