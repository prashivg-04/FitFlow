import React, { useState, useEffect } from 'react'
import trainerDp from '../../media/T.png'
import AssignTrainerModal from '../../components/owner/AssignTrainerModal'
import api from '../../api/axios'

const TrainerManagement = () => {

  const [showModal, setShowModal] = useState(false);
  const [unassignedMembers, setUnassignedMembers] = useState([]);
  const [trainers, setTrainers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const [unassignedRes, trainersRes] = await Promise.all([
          api.get('/owner/members/unassigned'),
          api.get('/owner/trainers')
        ]);
        setUnassignedMembers(unassignedRes.data.data);
        setTrainers(trainersRes.data.data);
      } catch (err) {
        console.error("Failed to fetch data", err);
      } finally {
        setLoading(false);
      }
    }

    fetchData();
  }, [showModal]); // Re-fetch when modal closes so the lists update

  return (
    <div className=''>
      <div className='flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 scroll-smooth'>
        <div className='max-w-300 mx-auto space-y-6 sm:space-y-8 pb-10'>
          {/* Heading */}
          <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
            <div className='flex flex-col items-start justify-center gap-1 sm:gap-2'>
              <h1 className='text-3xl sm:text-4xl font-black tracking-tight'>Trainer Management</h1>
              <p className='text-[#61896f] text-sm sm:text-base max-w-2xl '>Manage your coaching staff, monitor performance metrics, and assign members to trainers effectively.</p>
            </div>
          </div>

          {/* Pending Assignments */}
          <div className='mt-8'>
            <h3 className='text-lg font-bold mb-4'>Pending Assignments</h3>
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6'>
              {loading ? (
                <div className='col-span-full py-8 text-center text-[#61896f]'>
                  <i className="ri-loader-4-line text-3xl animate-spin block mb-2"></i>
                  Loading pending assignments...
                </div>
              ) : unassignedMembers.length === 0 ? (
                <div className='col-span-full py-12 flex flex-col items-center justify-center bg-white rounded-xl border border-[#dbe6df] shadow-sm'>
                  <div className='size-16 bg-slate-50 rounded-full flex items-center justify-center mb-4'>
                      <i className="ri-check-double-line text-3xl text-[#15ec5b]"></i>
                  </div>
                  <h4 className='text-lg font-bold text-slate-800 mb-1'>All members assigned!</h4>
                  <p className='text-sm text-slate-500'>Every active member currently has a trainer.</p>
                </div>
              ) : (
                unassignedMembers.map(member => {
                  const goalText = member.goal 
                    ? member.goal.split('_').map(word => word.toLowerCase()).join(' ')
                    : 'Not specified';

                  return (
                    <div key={member.id} className='bg-white p-5 rounded-xl border border-[#dbe6df] shadow-sm flex flex-col justify-between hover:shadow-md transition-all gap-5'>
                      <div className='flex items-start gap-4'>
                        <div className='size-12 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center shrink-0'>
                          <i className="ri-user-smile-line text-2xl"></i>
                        </div>
                        <div className='flex-1 min-w-0 pt-0.5'>
                          <h4 className='text-base font-bold text-slate-800 truncate capitalize'>{member.user.name}</h4>
                          <p className='text-xs text-slate-500 mt-0.5 truncate'>{member.user.email}</p>
                        </div>
                      </div>
                      
                      <div className='grid grid-cols-2 gap-3 bg-[#f7f8f6] p-3.5 rounded-lg border border-[#eef2f0]'>
                        <div>
                          <p className='text-[10px] text-[#61896f] font-semibold uppercase tracking-wider mb-0.5'>Goal</p>
                          <p className='text-xs font-bold text-slate-700 capitalize truncate'>{goalText}</p>
                        </div>
                        <div>
                          <p className='text-[10px] text-[#61896f] font-semibold uppercase tracking-wider mb-0.5'>Weight</p>
                          <p className='text-xs font-bold text-slate-700'>{member.weightKg} kg</p>
                        </div>
                      </div>

                      <button 
                        onClick={() => {
                          setSelectedMember(member);
                          setShowModal(true)
                        }} 
                        className='w-full flex items-center justify-center gap-2 text-sm font-bold bg-[#15ec5b] hover:bg-[#12d852] text-slate-900 py-3 rounded-lg shadow-sm shadow-[#15ec5b]/20 transition-all'
                      >
                        <i className="ri-user-add-line text-lg"></i>
                        Assign Trainer
                      </button>
                    </div>
                  )
                }))}
            </div>
          </div>

          {/* Trainers List */}
          <div className='mt-8'>
            <h3 className='text-lg font-bold mb-4'>All Trainers</h3>
            <div className='bg-white border border-[#dbe6df] rounded-xl shadow-soft overflow-hidden flex flex-col'>
              <div className='overflow-x-auto'>
                <table className='w-full text-left border-collapse responsive-table'>
                  <thead className='bg-[#f7f8f6] text-[#61896f] text-xs font-semibold uppercase tracking-wider'>
                    <tr>
                      <th className='px-6 py-4'>Trainer Name</th>
                      <th className='px-6 py-4'>Specialization</th>
                      <th className='px-6 py-4 text-center'>Active Clients</th>
                      <th className='px-6 py-4'>Status</th>
                    </tr>
                  </thead>

                  <tbody className='max-md:divide-y-0 divide-y divide-[#f0f4f2]'>
                    {loading ? (
                      <tr>
                        <td colSpan="4" className='px-6 py-8 text-center text-[#61896f]'>
                          <i className="ri-loader-4-line text-2xl animate-spin block mb-2"></i>
                          Loading trainers...
                        </td>
                      </tr>
                    ) : trainers.length === 0 ? (
                      <tr>
                        <td colSpan="4" className='px-6 py-8 text-center text-[#61896f]'>
                          No trainers found.
                        </td>
                      </tr>
                    ) : (
                      trainers.map(trainer => (
                        <tr key={trainer.id} className='hover:bg-[#f7f8f6] transitions-color group cursor-pointer'>
                          <td className='px-6 py-4' data-label="Trainer Name">
                            <div className='flex items-center gap-3'>
                              <img className='size-10 rounded-full bg-gray-200 bg-center border border-[#dbe6df] object-cover' src={trainerDp} alt="Trainer" />
                              <div className='flex flex-col items-start'>
                                <p className='text-sm font-semibold group-hover:text-[#15ec5b] transition-colors'>{trainer.user.name}</p>
                                <p className='text-xs text-[#61896f]'>{trainer.user.email}</p>
                              </div>
                            </div>
                          </td>

                          <td className='px-6 py-4' data-label="Specialization">
                            <span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-purple-100 text-purple-700 border border-purple-200 '>
                              {trainer.specialization}
                            </span>
                          </td>

                          <td className='px-6 py-4 text-sm font-bold text-center' data-label="Active Clients">
                            {trainer._count.trainerMembers}
                          </td>

                          <td className='px-6 py-4' data-label="Status">
                            <span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200 '>
                              <span className='size-1.5 rounded-full bg-green-500'></span>
                              Active
                            </span>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>
          </div>

          {showModal && <AssignTrainerModal member={selectedMember} onClose={() => setShowModal(false)} />}
        </div>
      </div>
    </div>
  )
}

export default TrainerManagement
