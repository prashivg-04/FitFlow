import React, { useState, useEffect } from 'react'
import trainerDp from '../../media/T.png'
import AssignTrainerModal from '../../components/owner/AssignTrainerModal'
import api from '../../api/axios'
import ComingSoonWrapper from '../../components/ComingSoonWrapper'

const TrainerManagement = () => {

  const [showModal, setShowModal] = useState(false);
  const [unassignedMembers, setUnassignedMembers] = useState([]);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    const fetchUnassignedMembers = async () => {
      try {
        const response = await api.get('/owner/members/unassigned');
        setUnassignedMembers(response.data.data);
      } catch(err) {
      }
    }

    fetchUnassignedMembers();
  }, []);

  return (
    <div className=''>
      <div className='flex-1 overflow-y-auto p-8 scroll-smooth'>
        <div className='max-w-300 mx-auto space-y-8 pb-10'>
          {/* Heading */}
          <div className='flex items-center justify-between gap-4'>
            <div className='flex flex-col items-start justify-center gap-2'>
              <h1 className='text-4xl font-black tracking-tight'>Trainer Management</h1>
              <p className='text-[#61896f] text-base max-w-2xl '>Manage your coaching staff, monitor performance metrics, and assign members to trainers effectively.</p>
            </div>
          </div>

          {/* Pending Assignments */}
          <div className='mt-8'>
            <h3 className='text-lg font-bold mb-4'>Pending Assignments</h3>
            <div className='grid grid-cols-3 gap-4'>
              {unassignedMembers.length === 0 ? (
                <p className='text-slate-500'>No pending assignments.</p>
              ) : (
                unassignedMembers.map(member => {
                  return (
                    <div key={member.id} className='bg-white p-4 rounded-xl border border-[#dbe6df] shadow-sm flex items-start gap-4'>
                      <div className='size-12 rounded-lg bg-slate-100 flex items-center justify-center shrink-0'>
                        <i className="fa-solid fa-user-plus text-slate-500"></i>
                    </div>
                    <div className='flex-1 min-w-0'>
                      <h4 className='text-sm font-bold truncate'>Name : {member.user.name}</h4>
                      <p className='text-xs text-slate-500 mt-1 capitalize'>Goal : {(member.goal).split('_')[0].toLowerCase() + ' ' + (member.goal).split('_')[1].toLowerCase()}</p>
                      <p className='text-xs text-slate-500 mt-1 mb-3'>Weight : {member.weightKg} kg</p>
                      <button 
                        onClick={() => {
                          setSelectedMember(member);
                          setShowModal(true)
                        }} 
                        className='w-full text-xs font-bold bg-slate-100 hover:bg-slate-200 py-2 rounded transition'
                      >
                        Assign Trainer
                      </button>
                    </div>
                  </div>
                )
              }))}
            </div>
          </div>

          {/* KPI Cards */}
          <ComingSoonWrapper>
          <div className='grid grid-cols-4 gap-4'>
            <div className='bg-white p-6 rounded-xl border border-[#dbe6df] shadow-soft flex flex-col justify-between h-32 relative overflow-hidden group'>
              <div className='absolute top-0 right-0 p-4 opacity-10  group-hover:opacity-20 transition-opacity'>
                <i className='ri-group-3-line text-green-400 text-6xl'></i>
              </div>
              <span className='text-[#61896f] font-medium z-10'>Total Trainers</span>
              <div className='flex items-center gap-3 z-10'>
                <span className='text-3xl font-bold'>12</span>
                <span className='text-sm font-semibold text-green-600 bg-green-100 px-2 py-0.5 rounded-full flex items-center'>
                  <i className="ri-add-line"></i>
                  5
                </span>
              </div>
            </div>

            <div className='bg-white p-6 rounded-xl border border-[#dbe6df] shadow-soft flex flex-col justify-between h-32 relative overflow-hidden group'>
              <div className='absolute top-0 right-0 p-4 opacity-10  group-hover:opacity-20 transition-opacity'>
                <i className='ri-star-line text-blue-400 text-6xl'></i>
              </div>
              <span className='text-[#61896f] font-medium z-10'>Avg. Rating</span>
              <div className='flex items-center gap-3 z-10'>
                <span className='text-3xl font-bold'>4.8</span>
                <span className='text-sm text-slate-400 pt-2'>/ 5.0</span>
                
              </div>
            </div>

            <div className='bg-white p-6 rounded-xl border border-[#dbe6df] shadow-soft flex flex-col justify-between h-32 relative overflow-hidden group'>
              <div className='absolute top-0 right-0 p-4 opacity-10  group-hover:opacity-20 transition-opacity'>
                <i className="fa-solid fa-triangle-exclamation text-orange-400 text-6xl"></i>
              </div>
              <span className='text-[#61896f] font-medium z-10'>Active Sessions</span>
              <div className='flex items-center gap-3 z-10'>
                <span className='text-3xl font-bold'>342</span>
                <span className='text-sm font-semibold text-green-600 bg-green-100 px-2 py-0.5 rounded-full flex items-center'>
                  <i className="ri-add-line"></i>
                  15%
                </span>
              </div>
            </div>

            <div className='bg-white p-6 rounded-xl border border-[#dbe6df] shadow-soft flex flex-col justify-between h-32 relative overflow-hidden group'>
              <div className='absolute top-0 right-0 p-4 opacity-10  group-hover:opacity-20 transition-opacity'>
                <i className='fa-solid fa-dollar-sign text-purple-400 text-6xl'></i>
              </div>
              <span className='text-[#61896f] font-medium z-10'>Revenue (Mo)</span>
              <div className='flex items-center gap-3 z-10'>
                <span className='text-3xl font-bold'>$12.4k</span>
                <span className='text-sm font-semibold text-green-600 bg-green-100 px-2 py-0.5 rounded-full flex items-center'>
                  10k
                  <i className="ri-check-line"></i>
                </span>
              </div>
            </div>
          </div>

          {/* Members List */}
          <div className='bg-white border border-[#dbe6df] rounded-xl shadow-soft overflow-hidden flex flex-col'>
            {/* Toolbar */}
            <div className='p-5 border-b border-[#f0f4f2] flex items-center justify-between gap-4'>
              <div className='relative max-w-md w-full'>
                <i className="ri-search-line absolute left-0 top-0 pl-3 pt-2 text-[#61896f] pointer-events-none"></i>
                <input className='bg-[#f7f8f6] h-10 pl-9 pr-4 py-2 w-full rounded-lg border border-[#dbe6df] text-sm placeholder:text-[#61896f] focus:border-[#15ec5b] focus:outline-0 focus:ring-1 focus:ring-[#15ec5b] transition-all' type="text" placeholder='Search by name, email, or specialty...' />
              </div>

              <div className='flex items-center gap-3 w-auto'>
                <button className='px-3 py-1 border border-[#dbe6df] rounded-lg hover:bg-gray-50 transition-all flex items-center gap-2'>
                  <i className="ri-filter-3-line text-xl"></i>
                  Filters
                </button>

                <button className='px-3 py-1 border border-[#dbe6df] rounded-lg hover:bg-gray-50 transition-all flex items-center gap-2'>
                  <i className="fa-solid fa-download text-xl"></i>
                  Export
                </button>
              </div>
            </div>

            {/* Members Table */}
            <div className='overflow-x-auto'>
              <table className='w-full text-left border-collapse'>
                <thead className='bg-[#f7f8f6] text-[#61896f] text-xs font-semibold uppercase tracking-wider'>
                  <tr>
                    <th className='px-6 py-4'>Trainer Name</th>
                    <th className='px-6 py-4'>Specialization</th>
                    <th className='px-6 py-4'>Active Clients</th>
                    <th className='px-6 py-4'>Performance</th>
                    <th className='px-6 py-4'>Status</th>
                    <th className='px-6 py-4 text-right'>Actions</th>
                  </tr>
                </thead>

                <tbody className='divide-y divide-[#f0f4f2]'>
                  <tr className='hover:bg-[#f7f8f6] transitions-color group cursor-pointer'>
                    <td className='px-6 py-4'>
                      <div className='flex items-center gap-3'>
                        <img className='size-10 rounded-full bg-gray-200 bg-center border border-[#dbe6df] object-cover' src={trainerDp} alt="Trainer" />
                        <div className='flex flex-col items-start'>
                          <p className='text-sm font-semibold group-hover:text-[#15ec5b] transition-colors'>Eleanor Pena</p>
                          <p className='text-xs text-[#61896f]'>ID: #4321</p>
                        </div>
                      </div>
                    </td>

                    <td className='px-6 py-4'>
                      <span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700 border border-purple-200 '>
                        HIIT & Cardio
                      </span>
                    </td>

                    <td className='px-6 py-4 text-sm font-bold text-center'>
                      24
                    </td>

                    <td className='px-6 py-4'>
                      <div className='flex flex-col gap-1 max-w-35'>
                        <div className='flex items-center text-xs'>
                          <span className='flex items-center gap-1 text-slate-600'>
                            <i className="ri-star-fill text-[14px] text-yellow-500 "></i>
                            4.8
                          </span>
                        </div>
                        <div className='w-full h-1.5 bg-slate-200 rounded-full overflow-hidden'>
                          <div className='w-[96%] h-full rounded-full bg-green-500'></div>
                        </div>
                      </div>
                    </td>
                    

                    <td className='px-6 py-4'>
                      <span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200 '>
                        <span className='size-1.5 rounded-full bg-green-500'></span>
                        Active
                      </span>
                    </td>

                    <td className='px-6 py-4 text-right'>
                      <button className='text-[#61896f] hover:text-[#15ec5b] p-1.5 rounded-lg transition-all'>
                        <i className="fa-solid fa-ellipsis-vertical text-[20px]"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className='p-4 border-t border-[#dbe6df] flex items-center justify-between gap-4'>
              <span className='text-sm text-[#61896f] '>
                Showing
                <span className='text-slate-900 font-medium'> 1-5 </span>
                of
                <span className='text-slate-900 font-medium'> 12 </span>
                members
              </span>

              <div className='flex items-center gap-2'>
                <button className='px-3 py-1.5 border border-[#dbe6df] rounded-md hover:bg-gray-50 text-sm font-semibold transition-colors disabled:opacity-50'>Previous</button>
                <button className='px-3 py-1.5 border border-[#dbe6df] rounded-md hover:bg-gray-50 text-sm font-semibold transition-colors'>Next</button>
              </div>
            </div>
          </div>
          </ComingSoonWrapper>

          {showModal && <AssignTrainerModal member={selectedMember} onClose={() => setShowModal(false)} />}
        </div>
      </div>
    </div>
  )
}

export default TrainerManagement
