import React, { useState, useEffect } from 'react'
import navjot from '../../media/navjotImg.jpeg'
import api from '../../api/axios'
import AssignWorkoutModal from '../../components/trainer/AssignWorkoutModal';
import ComingSoonWrapper from '../../components/ComingSoonWrapper'

const TrainerAssignWorkout = () => {

  const [members, setMembers] = useState();
  const [showModal, setShowModal] = useState(false);
  const [selectedMember, setSelectedMember] = useState(null);

  useEffect(() => {
    const fetchMembers = async () => {
      try {
        const response = await api.get('/trainer/members');
        setMembers(response.data.data);
      } catch(err) {
        console.error("Error fetching members:", err);
      }
    }

    fetchMembers();
  }, [])

  return (
    <div className='relative flex flex-col min-h-screen bg-[#f7f8f6]'>
      {/* Member Selection */}
      <div className='flex-1 overflow-y-auto py-8 px-12 scroll-smooth'>
        <div className='max-w-300 mx-auto space-y-8 pb-10'>
          {/* Heading */}
          <div className='flex items-center justify-between gap-4'>
            <div className='flex flex-col items-start justify-center gap-2'>
              <h1 className='text-4xl font-black tracking-tight'>Select Member</h1>
              <p className='text-[#61896f] text-base'>Choose a member from your assigned list to create a new plan or modify their current routine.</p>
            </div>
          </div>

          {/* Member Cards */}
          <div className='flex flex-col gap-4'>
            {members?.map((member) => (
              <div key={member.id} className='group flex items-center justify-between gap-4 px-8 py-6 bg-white border border-[#dbe6df] rounded-xl shadow-sm hover:shadow-md hover:bg-gray-50 transition-all'>
                <div className='flex items-center gap-6 flex-1'>
                  <div className='relative'>
                    <img className='size-14 rounded-full bg-gray-100 bg-cover bg-center bg-no-repeat border border-slate-100 object-cover' src={navjot} alt="Navjot" />
                  </div>
                  <div className='flex flex-col gap-1'>
                    <div className='flex items-center gap-2'>
                      <h3 className='text-xl font-bold leading-tight capitalize'>{member.user.name}</h3>
                      <span className='inline-flex items-center px-2 py-0.5 rounded text-xs font-medium bg-red-100 text-red-700 border border-red-200 capitalize'>{member.goal.split('_').join(' ').toLowerCase()}</span>
                    </div>
                    <div className='text-[#61896f] flex items-center gap-2 mt-2'>
                     <div className='inline-flex border border-green-200 bg-green-100 px-2 py-0.5 rounded-full text-xs font-medium items-center justify-center capitalize'>
                      <span className='size-1 rounded-full bg-green-400 inline-block mr-1'></span>
                      {member.gender.toLowerCase()}
                     </div>
                      <div className='inline-flex border border-green-200 bg-green-100 px-2 py-0.5 rounded-full text-xs font-medium items-center justify-center capitalize'>
                      <span className='size-1 rounded-full bg-green-400 inline-block mr-1'></span>
                      {member.weightKg} kg
                     </div>
                      <div className='inline-flex border border-green-200 bg-green-100 px-2 py-0.5 rounded-full text-xs font-medium items-center justify-center capitalize'>
                      <span className='size-1 rounded-full bg-green-400 inline-block mr-1'></span>
                      {member.heightCm} cm
                     </div>
                    </div>
                  </div>
                </div>

                <div className='flex items-center justify-end w-auto'>
                  <button 
                    onClick={() => {
                      setShowModal(true);
                      setSelectedMember(member);
                    }}
                    className='border border-[#dbe6df] bg-gray-50 px-5 py-2 rounded-lg group-hover:bg-[#15ec5b] text-md font-bold flex items-center gap-2 transition-all'
                  >
                    <i class="ri-add-circle-line text-[18px]"></i>
                    Assign Workout
                  </button>
                </div>
              </div>
            ))}
          </div>

          {showModal && <AssignWorkoutModal onClose={() => setShowModal(false)} member={selectedMember} />}
        </div>
      </div>
    </div>
  )
}

export default TrainerAssignWorkout
