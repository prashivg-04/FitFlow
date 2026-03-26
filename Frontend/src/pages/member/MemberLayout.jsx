import React, { useState, useEffect } from 'react'
import MemberHeader from '../../components/member/MemberHeader'
import MemberSidebar from '../../components/member/MemberSidebar'
import { Outlet } from 'react-router-dom'
import api from '../../api/axios'

const MemberLayout = () => {

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
            {/* Sidebar */}
            <div className='shrink-0'>
                <MemberSidebar username={gym?.name} />
            </div>
            

            {/* Main Content */}
            <div className='flex-1 overflow-y-auto'>
                <div className='sticky top-0 z-20 bg-[#f7f8f6]'>
                    <MemberHeader gym={gym} />
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
