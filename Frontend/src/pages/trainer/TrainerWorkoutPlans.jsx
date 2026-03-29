import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../api/axios'
import PlanCard from '../../components/trainer/PlanCard'
import ComingSoonWrapper from '../../components/ComingSoonWrapper'

const TrainerWorkoutPlans = () => {

    const navigate = useNavigate();

    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        const fetchPrograms = async () => {
            try {
                const response = await api.get('/trainer/programs');
                setPrograms(response.data.data);
            } catch(err) {
            }
        }

        fetchPrograms();
    }, [])

  return (
    <div className='flex-1 overflow-y-auto p-8 scroll-smooth'>
      {/* KPI Cards */}
      <ComingSoonWrapper>
      <div className='grid grid-cols-3 gap-8 mb-8'>
        <div className='bg-white rounded-xl p-5 border border-[#dbe6df] shadow-sm flex items-center justify-between'>
            <div className=''>
                <p className='text-sm text-[#61896f] font-medium'>Total Plans</p>
                <p className='text-xl font-black mt-1'>{programs.length}</p>
            </div>
            <div className='size-12 rounded-lg bg-blue-100 flex items-center justify-center'>
                <i className="ri-file-copy-2-line text-[24px] text-blue-600"></i>
            </div>
        </div>

        <div className='bg-white rounded-xl p-5 border border-[#dbe6df] shadow-sm flex items-center justify-between'>
            <div className=''>
                <p className='text-sm text-[#61896f] font-medium'>Active Assignments</p>
                <p className='text-xl font-black mt-1'>142</p>
            </div>
            <div className='size-12 rounded-lg bg-green-100 flex items-center justify-center'>
                <i className="ri-user-follow-fill text-[24px] text-green-600"></i>
            </div>
        </div>

        <div className='bg-white rounded-xl p-5 border border-[#dbe6df] shadow-sm flex items-center justify-between'>
            <div className=''>
                <p className='text-sm text-[#61896f] font-medium'>Top Performer</p>
                <p className='text-xl font-black mt-1'>Summer Shred</p>
            </div>
            <div className='size-12 rounded-lg bg-orange-100 flex items-center justify-center'>
                <i className="fa-solid fa-arrow-trend-up text-[24px] text-orange-600"></i>
            </div>
        </div>
      </div>
      </ComingSoonWrapper>

      {/* Workout Plans Table */}
      <div className='grid grid-cols-3 gap-8 mt-6'>
        {/* Library */}
        <div className='col-span-3 space-y-6'>
            {/* Head */}
            <div className='flex items-center justify-between gap-4'>
                <h3 className='text-2xl font-bold'>Plan Library</h3>
                <button onClick={() => navigate('/trainer/workout-builder')} className='flex items-center gap-2 px-5 py-2.5 bg-[#15ec5b] rounded-lg hover:bg-green-500 font-bold shadow-lg shadow-[#15ec5b]/25 transition-all'>Create New Plan</button>
            </div>

            {/* Plans */}
            <div className='grid grid-cols-3 gap-5'>
                {programs.map((program) => (
                    <PlanCard key={program.id} program={program} />
                ))}
            </div>
        </div>
      </div>
    </div>
  )
}

export default TrainerWorkoutPlans
