import React, { useState, useEffect } from 'react'
import MemberHeader from '../../components/member/MemberHeader'
import MemberSidebar from '../../components/member/MemberSidebar'
import { Outlet } from 'react-router-dom'
import api from '../../api/axios'

const MemberLayout = () => {

    const [gym, setGym] = useState(null);
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    useEffect(() => {
        const fetchGymInfo = async () => {
        try {
            const res = await api.get('/user/gym-info');
            setGym(res.data.data);
        } catch (error) {
          console.error("Failed to fetch user:", error);
        }
        };

        fetchGymInfo();
    }, []);

  return (
    <div className='font-display bg-[#f7f8f6] text-slate-900 antialiased'>
        <div className='flex h-screen w-full overflow-hidden relative'>
            {/* Sidebar */}
            <div className={`
                fixed inset-y-0 left-0 z-40 transform transition-transform duration-300 ease-in-out lg:relative lg:translate-x-0
                ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'}
            `}>
                <MemberSidebar username={gym?.name} setIsSidebarOpen={setIsSidebarOpen} />
            </div>
            
            {/* Overlay for mobile */}
            {isSidebarOpen && (
                <div 
                    className='fixed inset-0 bg-black/40 z-30 lg:hidden backdrop-blur-xs'
                    onClick={() => setIsSidebarOpen(false)}
                />
            )}

            {/* Main Content */}
            <div className='flex-1 overflow-y-auto'>
                <div className='sticky top-0 z-20 bg-[#f7f8f6]'>
                    <MemberHeader gym={gym} setIsSidebarOpen={setIsSidebarOpen} />
                </div>

                <div>
                    <Outlet />
                </div>
            </div>
        </div>
    </div>
  )
}

export default MemberLayout
