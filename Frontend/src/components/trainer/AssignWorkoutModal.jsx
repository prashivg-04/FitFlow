import React, { useState, useEffect } from 'react'
import api from '../../api/axios'

const AssignWorkoutModal = ({onClose, member}) => {

    const [programs, setPrograms] = useState([]);

    useEffect(() => {
        const fetchPrograms = async () => {
            try {
                const response = await api.get('/trainer/programs');
                setPrograms(response.data.data);
                console.log(response.data.data);
            } catch(err) {
                console.error("Error fetching programs: ", err);
            }
        }

        fetchPrograms();
    }, []);

    const exerciseCount = (program) => program.days.reduce((total, day) => {
        if (day.isRestDay) return total
        return total + day.exercises.length
    }, 0)
    const restDays = (program) => program.days.filter(day => day.isRestDay).length

  return (
    <div onClick={onClose} className='fixed inset-0 bg-black/40 z-20 backdrop-blur-xs flex items-center justify-center'>
      <div onClick={(e) => e.stopPropagation()} className='bg-[#f7f8f6] rounded-lg w-120 p-6 relative'>
        <div className='flex items-center justify-between'>
            <h2 className='text-lg font-bold'>Assign Workout to {member?.user?.name}</h2>
            <button onClick={onClose} className='text-[20px] cursor-pointer'><i class="fa-solid fa-xmark"></i></button>
        </div>

        <div className='space-y-2 mt-6 overflow-y-auto max-h-72'>
            {programs?.map(program => {
                return (
                    <div key={program.id} className='flex items-center justify-between bg-white p-3 rounded-lg border border-[#dbe6df] hover:border-[#15ec5b]/50 shadow-sm hover:shadow-md transition-all'>
                        <div className='flex flex-col items-start gap-1'>
                            <div className='flex flex-col items-start'>
                                <p className='font-bold text-lg leading-relaxed'>{program.title}</p>
                                <p className='text-xs font-medium'>{program.description}</p>
                            </div>
                            {/* use inline styles */}
                            <div className='flex flex-col items-start gap-1 mt-2'>
                                <div className='inline-flex border border-green-200 bg-green-100 px-2 py-0.5 rounded-full text-xs font-light items-center justify-center text-green-800'>Total Days : {program.days.length}</div>
                                <div className='inline-flex border border-green-200 bg-green-100 px-2 py-0.5 rounded-full text-xs font-light items-center justify-center text-green-800'>No. of Rest Days : {restDays(program)}</div>
                                <div className='inline-flex border border-green-200 bg-green-100 px-2 py-0.5 rounded-full text-xs font-light items-center justify-center text-green-800'>Total Exercises : {exerciseCount(program)}</div>
                            </div>
                        </div>
                        <button className='bg-[#15ec5b] text-black px-4 py-2 rounded-lg hover:bg-green-500 cursor-pointer'>Assign</button>
                    </div>
                )
            })}
        </div>
      </div>
    </div>
  )
}

export default AssignWorkoutModal
