import React, { useState, useEffect } from 'react'
import memberDp from '../../media/M.png'
import api from '../../api/axios'
import AssignWorkoutModal from '../../components/trainer/AssignWorkoutModal';

const TrainerAssignWorkout = () => {

  const [members, setMembers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await api.get('/trainer/members');
        setMembers(response.data.data || []);
      } catch(err) {
        console.error("Failed to fetch assigned members", err);
      } finally {
        setLoading(false);
      }
    }

    fetchMembers();
  }, [])

  return (
    <div className='relative flex flex-col min-h-screen bg-[#f7f8f6]'>
      {/* Member Selection */}
      <div className='flex-1 overflow-y-auto p-4 sm:p-6 lg:py-8 lg:px-12 scroll-smooth'>
        <div className='max-w-4xl mx-auto space-y-8 pb-10 mt-2 sm:mt-4'>
          {/* Heading */}
          <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
            <div className='flex flex-col items-start justify-center gap-2'>
              <h1 className='text-3xl sm:text-4xl font-black tracking-tight'>Assign Workout</h1>
              <p className='text-[#61896f] text-sm sm:text-base'>Choose a member from your assigned list to give them a new workout routine.</p>
            </div>
          </div>

          {/* Member Cards */}
          {loading ? (
            <div className='flex flex-col items-center justify-center py-20 text-[#61896f]'>
                <i className="ri-loader-4-line text-4xl animate-spin block mb-4"></i>
                <p className='font-medium'>Loading your assigned members...</p>
            </div>
          ) : members.length === 0 ? (
            <div className='flex flex-col items-center justify-center py-20 text-[#61896f] bg-white rounded-xl border border-[#dbe6df] shadow-sm'>
                <i className="ri-group-line text-6xl opacity-30 mb-4"></i>
                <h3 className='text-xl font-bold mb-1 text-slate-800'>No Members Assigned</h3>
                <p>You don't have any members assigned to you right now.</p>
            </div>
          ) : (
            <div className='flex flex-col gap-4'>
              {members.map((member) => (
                <div key={member.id} className='group flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 px-4 sm:px-8 py-4 sm:py-6 bg-white border border-[#dbe6df] rounded-xl shadow-sm hover:shadow-md hover:border-green-300 transition-all cursor-pointer' onClick={() => { setShowModal(true); setSelectedMember(member); }}>
                  <div className='flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 flex-1 w-full'>
                    <div className='relative'>
                      <img className='size-14 rounded-full bg-gray-100 bg-cover bg-center bg-no-repeat border border-slate-100 object-cover' src={memberDp} alt="Member" />
                    </div>
                    <div className='flex flex-col gap-1'>
                      <div className='flex items-center gap-2'>
                        <h3 className='text-xl font-bold leading-tight capitalize group-hover:text-green-600 transition-colors'>{member.user.name}</h3>
                        <span className='inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-green-100 text-green-700 border border-green-200 capitalize'>
                          {member.goal ? member.goal.replace(/_/g, ' ').toLowerCase() : 'Unspecified'}
                        </span>
                      </div>
                      <div className='text-[#61896f] flex flex-wrap items-center gap-2 mt-2'>
                      <div className='inline-flex border border-gray-200 bg-gray-50 px-2 py-0.5 rounded-full text-xs font-medium items-center justify-center capitalize'>
                        <span className='size-1.5 rounded-full bg-slate-400 inline-block mr-1.5'></span>
                        {member.gender.toLowerCase()}
                      </div>
                        <div className='inline-flex border border-gray-200 bg-gray-50 px-2 py-0.5 rounded-full text-xs font-medium items-center justify-center capitalize'>
                        <span className='size-1.5 rounded-full bg-slate-400 inline-block mr-1.5'></span>
                        {member.weightKg} kg
                      </div>
                        <div className='inline-flex border border-gray-200 bg-gray-50 px-2 py-0.5 rounded-full text-xs font-medium items-center justify-center capitalize'>
                        <span className='size-1.5 rounded-full bg-slate-400 inline-block mr-1.5'></span>
                        {member.heightCm} cm
                      </div>
                      </div>
                    </div>
                  </div>

                  <div className='flex items-center justify-end w-full sm:w-auto mt-2 sm:mt-0'>
                    <button 
                      onClick={(e) => {
                        e.stopPropagation();
                        setShowModal(true);
                        setSelectedMember(member);
                      }}
                      className='border border-[#dbe6df] bg-gray-50 px-5 py-2 rounded-lg group-hover:bg-[#15ec5b] group-hover:border-transparent text-slate-700 group-hover:text-slate-900 text-sm sm:text-md font-bold flex items-center justify-center gap-2 transition-all w-full sm:w-auto shadow-sm'
                    >
                      <i className="ri-add-circle-line text-[18px]"></i>
                      Select
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {showModal && <AssignWorkoutModal onClose={() => setShowModal(false)} member={selectedMember} />}
        </div>
      </div>
    </div>
  )
}

export default TrainerAssignWorkout
