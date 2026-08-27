import React, { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import api from '../../api/axios'
import PlanCard from '../../components/trainer/PlanCard'

const TrainerWorkoutPlans = () => {

    const navigate = useNavigate();

    const [programs, setPrograms] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchPrograms = async () => {
            try {
                const response = await api.get('/trainer/programs');
                setPrograms(response.data.data || []);
            } catch(err) {
                console.error("Failed to fetch programs", err);
            } finally {
                setLoading(false);
            }
        }

        fetchPrograms();
    }, [])

  return (
    <div className='flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 scroll-smooth'>
      <div className='max-w-7xl mx-auto mt-2 sm:mt-4'>
        {/* Head */}
        <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8'>
            <div className='flex flex-col gap-1'>
                <h1 className='text-3xl sm:text-4xl font-black tracking-tight'>Plan Library</h1>
                <p className='text-[#61896f] text-sm sm:text-base'>Manage and create your reusable workout plans.</p>
            </div>
            <button onClick={() => navigate('/trainer/workout-builder')} className='flex items-center gap-2 px-5 py-2.5 bg-[#15ec5b] rounded-lg hover:bg-green-500 font-bold shadow-md shadow-[#15ec5b]/25 transition-all text-slate-900'>
                <i className="ri-add-line text-lg"></i>
                Create New Plan
            </button>
        </div>

        {/* Plans */}
        {loading ? (
            <div className='flex flex-col items-center justify-center py-20 text-[#61896f]'>
                <i className="ri-loader-4-line text-4xl animate-spin block mb-4"></i>
                <p className='font-medium'>Loading your plans...</p>
            </div>
        ) : programs.length === 0 ? (
            <div className='flex flex-col items-center justify-center py-20 text-[#61896f] bg-white rounded-xl border border-[#dbe6df] shadow-sm'>
                <i className="ri-file-list-3-line text-6xl opacity-30 mb-4"></i>
                <h3 className='text-xl font-bold mb-1 text-slate-800'>No plans created yet</h3>
                <p className='mb-6'>Get started by building your first workout plan.</p>
                <button onClick={() => navigate('/trainer/workout-builder')} className='px-4 py-2 bg-[#15ec5b] text-slate-900 font-bold rounded-lg hover:bg-green-500 transition-colors shadow-sm'>
                    Create Plan
                </button>
            </div>
        ) : (
            <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5'>
                {programs.map((program) => (
                    <PlanCard key={program.id} program={program} />
                ))}
            </div>
        )}
      </div>
    </div>
  )
}

export default TrainerWorkoutPlans
