import React, { useState, useEffect } from 'react'
import api from '../../api/axios'

const TrainerDashboard = () => {

  const [assignedMembers, setAssignedMembers] = useState([]);
  const [stats, setStats] = useState({
    totalMembers: 0,
    totalPrograms: 0,
    gymInfo: null
  });
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchDashboardData = async () => {
      try {
        const [membersRes, programsRes, gymInfoRes] = await Promise.all([
          api.get('/trainer/members'),
          api.get('/trainer/programs'),
          api.get('/user/gym-info')
        ]);
        
        const members = membersRes.data.data || [];
        const programs = programsRes.data.data || [];
        
        setAssignedMembers(members);
        
        setStats({
          totalMembers: members.length,
          totalPrograms: programs.length,
          gymInfo: gymInfoRes.data.data
        });

      } catch(err) {
        console.error("Failed to fetch trainer dashboard data", err);
      } finally {
        setLoading(false);
      }
    }

    fetchDashboardData();
  }, [])

  return (
    <div className='flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 space-y-6 sm:space-y-8'>
      
      {/* Page Heading & Gym Card */}
      <div className='flex flex-col lg:flex-row items-start lg:items-center justify-between gap-6 lg:gap-8'>
        <div className='flex flex-col items-start justify-center gap-2 max-w-xl'>
          <h1 className='text-3xl sm:text-4xl font-black tracking-tight'>Trainer Dashboard</h1>
          <p className='text-[#61896f] text-sm sm:text-base leading-relaxed'>
            Manage your assigned clients, monitor their progress, and track your active workout programs.
          </p>
        </div>
        
        {stats.gymInfo && !loading && (
          <div className='bg-linear-to-br from-[#15ec5b] to-[#0ea341] p-5 sm:p-6 rounded-2xl shadow-lg text-white w-full max-w-sm relative overflow-hidden transition-transform hover:scale-[1.02] cursor-default'>
            <div className='absolute inset-0 bg-linear-to-br from-[#15ec5b]/10 to-transparent'></div>
            <div className='absolute -top-4 -right-4 p-4 opacity-20'>
              <i className='fa-solid fa-dumbbell text-[100px] rotate-[-20deg]'></i>
            </div>
            <div className='flex justify-between items-start mb-6 sm:mb-8'>
              <div className='z-10'>
                <p className='text-xs font-bold opacity-90 uppercase tracking-[0.2em] mb-1 text-green-100'>FitFlow Trainer</p>
                <h2 className='text-2xl sm:text-3xl font-black drop-shadow-sm'>{stats.gymInfo.gymName || 'Gym Name'}</h2>
              </div>
            </div>
            
            <div className='flex justify-between items-end z-10'>
              <div>
                <p className='text-[10px] sm:text-xs opacity-90 uppercase tracking-wider text-green-100'>Trainer</p>
                <p className='text-base sm:text-lg font-bold drop-shadow-sm'>{stats.gymInfo.name}</p>
              </div>
              <div className='text-right'>
                <p className='text-[10px] sm:text-xs opacity-90 uppercase tracking-wider text-green-100'>Gym Owner</p>
                <p className='text-base sm:text-lg font-bold tracking-widest'>{stats.gymInfo.ownerName || 'Unknown'}</p>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* KPI Cards */}
      <div className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
        <div className='p-6 bg-white rounded-xl border border-[#dbe6df] shadow-sm flex flex-col gap-2 relative overflow-hidden group'>
          <div className='absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-40 transition-opacity'>
            <i className="text-4xl text-blue-500 ri-group-line"></i>
          </div>
          <p className='text-[#61896f] text-sm font-medium'>Assigned Members</p>
          <h3 className='text-3xl font-bold my-1'>{loading ? '...' : stats.totalMembers}</h3>
        </div>

        <div className='p-6 bg-white rounded-xl border border-[#dbe6df] shadow-sm flex flex-col gap-2 relative overflow-hidden group'>
          <div className='absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-40 transition-opacity'>
            <i className="text-4xl text-purple-500 ri-file-list-3-line"></i>
          </div>
          <p className='text-[#61896f] text-sm font-medium'>Workout Programs</p>
          <h3 className='text-3xl font-bold my-1'>{loading ? '...' : stats.totalPrograms}</h3>
        </div>
      </div>

      {/* Assigned Members */}
      <div className='bg-white rounded-xl border border-[#dbe6df] shadow-sm overflow-hidden'>
        <div className='p-5 border-b border-[#f0f4f2] flex items-center justify-between gap-4'>
          <h3 className='text-lg font-bold'>Assigned Members</h3>
        </div>

        <div className='overflow-x-auto'>
          <div className='max-h-70 overflow-y-auto'>
            <table className='w-full text-left border-collapse responsive-table'>
              <thead className='bg-[#f7f8f6] text-[#61896f] text-xs font-semibold uppercase tracking-wider sticky top-0 z-10'>
                <tr>
                  <th className='px-6 py-4'>Member Name</th>
                  <th className='px-6 py-4'>Goal</th>
                  <th className='px-6 py-4 text-center'>Gender</th>
                  <th className='px-6 py-4 text-center'>Weight</th>
                </tr>
              </thead>

              <tbody className='max-md:divide-y-0 divide-y divide-[#f0f4f2]'>
                {loading ? (
                  <tr>
                    <td colSpan="4" className='px-6 py-8 text-center text-[#61896f]'>
                      <i className="ri-loader-4-line text-2xl animate-spin block mb-2"></i>
                      Loading members...
                    </td>
                  </tr>
                ) : assignedMembers.length === 0 ? (
                  <tr>
                    <td colSpan="4" className='px-6 py-8 text-center text-[#61896f]'>
                      No members assigned yet.
                    </td>
                  </tr>
                ) : (
                  assignedMembers.map((member) => (
                    <tr key={member.id} className='hover:bg-[#f7f8f6] transition-colors group cursor-pointer'>
                      <td className='px-6 py-4' data-label="Member Name">
                        <div className='flex items-center gap-3'>
                          <div className='size-10 rounded-full bg-purple-50 text-purple-500 flex items-center justify-center shrink-0 border border-purple-100'>
                            <i className="ri-user-smile-line text-lg"></i>
                          </div>
                          <div className='flex flex-col items-start'>
                            <p className='text-sm font-semibold group-hover:text-[#15ec5b] transition-colors'>{member.user.name}</p>
                            <p className='text-xs text-[#61896f]'>{member.user.email}</p>
                          </div>
                        </div>
                      </td>
                      <td className='px-6 py-4' data-label="Goal">
                        <span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-blue-50 text-blue-700 border border-blue-100 capitalize'>
                          {member.goal ? member.goal.replace(/_/g, ' ').toLowerCase() : 'N/A'}
                        </span>
                      </td>
                      <td className='px-6 py-4 text-center capitalize text-sm text-slate-600' data-label="Gender">
                        {member.gender.toLowerCase()}
                      </td>
                      <td className='px-6 py-4 font-bold text-center text-slate-800' data-label="Weight">
                        {member.weightKg} kg
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>

    </div>
  )
}

export default TrainerDashboard
