import React, { useState, useEffect } from 'react'
import JoinRequests from '../../components/owner/JoinRequests'
import api from '../../api/axios'

const OwnerDashboard = () => {
  const [stats, setStats] = useState({
    totalMembers: 0,
    activeMembers: 0,
    totalTrainers: 0,
    pendingRequests: 0,
    gymInfo: null
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [membersRes, trainersRes, requestsRes, gymInfoRes] = await Promise.all([
          api.get('/owner/members'),
          api.get('/owner/trainers'),
          api.get('/owner/join-requests'),
          api.get('/user/gym-info')
        ]);

        const members = membersRes.data.data || [];
        const trainers = trainersRes.data.data || [];
        const requests = requestsRes.data.data || [];
        const gymInfo = gymInfoRes.data.data || null;

        setStats({
          totalMembers: members.length,
          activeMembers: members.filter(m => m.gymStatus === 'ACTIVE').length,
          totalTrainers: trainers.length,
          pendingRequests: requests.length,
          gymInfo: gymInfo
        });
      } catch (err) {
        console.error("Failed to fetch dashboard data", err);
      } finally {
        setLoading(false);
      }
    };

    fetchDashboardData();
  }, []);

  return (
    <div className=''>
      <div className='flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 scroll-smooth'>
        <div className='flex flex-col gap-6 lg:gap-8 max-w-7xl mx-auto'>
          {/* Page Heading & Gym Card */}
          <div className='flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8'>
            <div className='flex flex-col items-start justify-center gap-2 max-w-xl'>
              <h1 className='text-3xl sm:text-4xl font-black tracking-tight'>Dashboard Overview</h1>
              <p className='text-[#61896f] text-sm sm:text-base leading-relaxed'>
                Monitor your gym's key performance metrics, review staff status, and manage incoming membership requests in real-time.
              </p>
            </div>
            
            {stats.gymInfo && !loading && (
              <div className='bg-linear-to-br from-[#15ec5b] to-[#0ea341] p-5 sm:p-6 rounded-2xl shadow-lg text-white w-full max-w-sm relative overflow-hidden transition-transform hover:scale-[1.02] cursor-default'>
                <div className='absolute -top-4 -right-4 p-4 opacity-20'>
                  <i className='fa-solid fa-dumbbell text-[100px] rotate-[-20deg]'></i>
                </div>
                <div className='flex justify-between items-start mb-6 sm:mb-8'>
                  <div className='z-10'>
                    <p className='text-xs font-bold opacity-90 uppercase tracking-[0.2em] mb-1 text-green-100'>FitFlow Admin</p>
                    <h2 className='text-2xl sm:text-3xl font-black drop-shadow-sm'>{stats.gymInfo.gymName}</h2>
                  </div>
                </div>
                
                <div className='flex justify-between items-end z-10'>
                  <div>
                    <p className='text-[10px] sm:text-xs opacity-90 uppercase tracking-wider text-green-100'>Owner</p>
                    <p className='text-base sm:text-lg font-bold drop-shadow-sm'>{stats.gymInfo.name}</p>
                  </div>
                  <div className='text-right'>
                    <p className='text-[10px] sm:text-xs opacity-90 uppercase tracking-wider text-green-100'>Gym Code</p>
                    <p className='text-base sm:text-lg font-mono font-bold tracking-widest bg-black/10 px-2 py-0.5 rounded'>{stats.gymInfo.gymCode}</p>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* KPI Cards */}
          <div className='grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4'>
            <div className='p-6 bg-white rounded-xl border border-[#dbe6df] shadow-sm flex flex-col gap-2 relative overflow-hidden group'>
              <div className='absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-40 transition-opacity'>
                <i className="text-4xl text-[#15ec5b] ri-group-line"></i>
              </div>
              <p className='text-[#61896f] text-sm font-medium'>Total Members</p>
              <h3 className='text-3xl font-bold my-1'>{loading ? '...' : stats.totalMembers}</h3>
            </div>

            <div className='p-6 bg-white rounded-xl border border-[#dbe6df] shadow-sm flex flex-col gap-2 relative overflow-hidden group'>
              <div className='absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-40 transition-opacity'>
                <i className="text-4xl text-blue-500 fa-solid fa-dumbbell"></i>
              </div>
              <p className='text-[#61896f] text-sm font-medium'>Total Trainers</p>
              <h3 className='text-3xl font-bold my-1'>{loading ? '...' : stats.totalTrainers}</h3>
            </div>

            <div className='p-6 bg-white rounded-xl border border-[#dbe6df] shadow-sm flex flex-col gap-2 relative overflow-hidden group'>
              <div className='absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-40 transition-opacity'>
                <i className="text-4xl text-purple-500 ri-user-follow-line"></i>
              </div>
              <p className='text-[#61896f] text-sm font-medium'>Active Memberships</p>
              <h3 className='text-3xl font-bold my-1'>{loading ? '...' : stats.activeMembers}</h3>
            </div>

            <div className='p-6 bg-white rounded-xl border border-[#dbe6df] shadow-sm flex flex-col gap-2 relative overflow-hidden group'>
              <div className='absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-40 transition-opacity'>
                <i className="text-4xl text-orange-500 ri-user-add-line"></i>
              </div>
              <p className='text-[#61896f] text-sm font-medium'>Pending Requests</p>
              <h3 className='text-3xl font-bold my-1'>{loading ? '...' : stats.pendingRequests}</h3>
            </div>
          </div>

          <JoinRequests />
        </div>
      </div>
    </div>
  )
}

export default OwnerDashboard