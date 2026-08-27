import React, { useState, useEffect } from 'react'
import memberDp from '../../media/M.png'
import api from '../../api/axios'

const MemberManagement = () => {

  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await api.get('/owner/members');
        setMembers(response.data.data);
      } catch (err) {
        console.error("Failed to fetch data", err);
      } finally {
        setLoading(false);
      }
    }
    fetchMembers();
  }, []);

  return (
    <div className=''>
      <div className='flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 scroll-smooth'>
        <div className='max-w-300 mx-auto space-y-6 sm:space-y-8 pb-10'>
          {/* Heading */}
          <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
            <div className='flex flex-col items-start justify-center gap-1 sm:gap-2'>
              <h1 className='text-3xl sm:text-4xl font-black tracking-tight'>Member Management</h1>
              <p className='text-[#61896f] text-sm sm:text-base'>Overview of all registered members and their current status.</p>
            </div>
          </div>

          {/* KPI Cards */}
          <div className='grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6'>
            <div className='bg-white p-6 rounded-xl border border-[#dbe6df] shadow-soft flex flex-col justify-between h-32 relative overflow-hidden group'>
              <div className='absolute -top-2.5 -right-2.5 p-6 bg-green-50 rounded-full group-hover:bg-green-100 transition-all'>
                <i className='ri-group-line text-green-400 text-4xl opacity-50'></i>
              </div>
              <span className='text-[#61896f] font-medium z-10'>Total Members</span>
              <div className='flex items-center gap-3 z-10'>
                <span className='text-3xl font-bold'>{loading ? '...' : members.length}</span>
              </div>
            </div>

            <div className='bg-white p-6 rounded-xl border border-[#dbe6df] shadow-soft flex flex-col justify-between h-32 relative overflow-hidden group'>
              <div className='absolute -top-2.5 -right-2.5 p-6 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-all'>
                <i className='ri-bank-card-line text-blue-400 text-4xl opacity-50'></i>
              </div>
              <span className='text-[#61896f] font-medium z-10'>Active Memberships</span>
              <div className='flex items-center gap-3 z-10'>
                <span className='text-3xl font-bold'>{loading ? '...' : members.filter(m => m.gymStatus === 'ACTIVE').length}</span>
              </div>
            </div>

            <div className='bg-white p-6 rounded-xl border border-[#dbe6df] shadow-soft flex flex-col justify-between h-32 relative overflow-hidden group'>
              <div className='absolute -top-2.5 -right-2.5 p-6 bg-orange-50 rounded-full group-hover:bg-orange-100 transition-all'>
                <i className="fa-solid fa-user-check text-orange-400 text-4xl opacity-50"></i>
              </div>
              <span className='text-[#61896f] font-medium z-10'>Assigned to Trainer</span>
              <div className='flex items-center gap-3 z-10'>
                <span className='text-3xl font-bold'>{loading ? '...' : members.filter(m => m.trainerMembers?.length > 0).length}</span>
              </div>
            </div>
          </div>

          {/* Members List */}
          <div className='bg-white border border-[#dbe6df] rounded-xl shadow-soft overflow-hidden flex flex-col'>


            <div className='overflow-x-auto'>
              <table className='w-full text-left border-collapse responsive-table'>
                <thead className='bg-[#f7f8f6] text-[#61896f] text-xs font-semibold uppercase tracking-wider'>
                  <tr>
                    <th className='px-6 py-4'>Member</th>
                    <th className='px-6 py-4'>Contact Info</th>
                    <th className='px-6 py-4'>Trainer</th>
                    <th className='px-6 py-4'>Goal</th>
                    <th className='px-6 py-4'>Status</th>
                  </tr>
                </thead>

                <tbody className='max-md:divide-y-0 divide-y divide-[#f0f4f2]'>
                  {loading ? (
                    <tr>
                      <td colSpan="6" className='px-6 py-8 text-center text-[#61896f]'>
                        <i className="ri-loader-4-line text-2xl animate-spin block mb-2"></i>
                        Loading members...
                      </td>
                    </tr>
                  ) : members.length === 0 ? (
                    <tr>
                      <td colSpan="6" className='px-6 py-8 text-center text-[#61896f]'>
                        No members found.
                      </td>
                    </tr>
                  ) : (
                    members.map(member => {
                      const assignedTrainer = member.trainerMembers?.length > 0 ? member.trainerMembers[0].trainer : null;
                      const goalText = member.goal ? member.goal.split('_').map(word => word.toLowerCase()).join(' ') : 'Not specified';

                      return (
                        <tr key={member.id} className='hover:bg-[#f7f8f6] transitions-color group cursor-pointer'>
                          <td className='px-6 py-4' data-label="Member">
                            <div className='flex items-center gap-3'>
                              <img className='size-10 rounded-full bg-gray-200 bg-center border border-[#dbe6df] object-cover' src={memberDp} alt="Member" />
                              <div className='flex flex-col items-start'>
                                <p className='text-sm font-semibold group-hover:text-[#15ec5b] transition-colors'>{member.user.name}</p>
                                <p className='text-xs text-[#61896f]'>{member.user.email}</p>
                              </div>
                            </div>
                          </td>

                          <td className='px-6 py-4' data-label="Contact Info">
                            <div className='flex flex-col items-start gap-0.5'>
                              <div className='flex items-center gap-1.5 text-[#61896f] text-sm'>
                                <i className="fa-regular fa-envelope text-[14px]"></i>
                                {member.user.email}
                              </div>
                            </div>
                          </td>

                          <td className='px-6 py-4' data-label="Trainer">
                            {assignedTrainer ? (
                              <span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-blue-100 text-blue-700 border border-blue-200'>
                                <i className="fa-solid fa-user-ninja text-[14px]"></i>
                                {assignedTrainer.user.name}
                              </span>
                            ) : (
                              <span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200'>
                                Unassigned
                              </span>
                            )}
                          </td>

                          <td className='px-6 py-4 text-sm text-[#61896f] capitalize' data-label="Goal">
                            {goalText}
                          </td>

                          <td className='px-6 py-4' data-label="Status">
                            <span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 border border-green-200 '>
                              <span className='size-1.5 rounded-full bg-green-500'></span>
                              Active
                            </span>
                          </td>
                        </tr>
                      );
                    })
                  )}
                </tbody>
              </table>
            </div>


          </div>
        </div>
      </div>
    </div>
  )
}

export default MemberManagement
