import React, { useState, useEffect } from 'react'
import api from '../../api/axios'
import AssignmentWindow from './AssignmentWindow';
import { toast } from 'sonner';

const AssignWorkoutModal = ({onClose, member}) => {

    const [programs, setPrograms] = useState([]);
    const [selectedProgram, setSelectedProgram] = useState(null);

    useEffect(() => {
        const fetchPrograms = async () => {
            try {
                const response = await api.get('/trainer/programs');
                setPrograms(response.data.data);
            } catch(_) {
            }
        }

        fetchPrograms();
    }, []);

    const exerciseCount = (program) => program.days.reduce((total, day) => {
        if (day.isRestDay) return total
        return total + day.exercises.length
    }, 0)
    const restDays = (program) => program.days.filter(day => day.isRestDay).length

    const handleAssign = async (date) => {
        try {
            await api.post('/trainer/assign-program', {
                memberId: member.id,
                programId: selectedProgram.id,
                startDate: date
            });
            toast.success('Workout assigned successfully!');
            onClose();
        } catch(_) {
        }
    }

  return (
    <div onClick={onClose} className='fixed inset-0 bg-slate-900/40 z-50 backdrop-blur-sm flex items-center justify-center p-4 sm:p-0'>
      <div onClick={(e) => e.stopPropagation()} className='bg-white rounded-2xl w-full max-w-2xl shadow-2xl relative flex flex-col max-h-[85vh]'>
        {/* Header */}
        <div className='flex items-center justify-between p-6 border-b border-[#dbe6df] shrink-0'>
            <div>
              <h2 className='text-xl font-bold text-slate-800'>Assign Workout</h2>
              <p className='text-sm text-slate-500 mt-1'>Select a program for <span className='font-semibold text-slate-700 capitalize'>{member?.user?.name}</span></p>
            </div>
            <button onClick={onClose} className='size-8 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors'>
              <i className="ri-close-line text-xl"></i>
            </button>
        </div>

        {/* Content */}
        <div className='p-6 overflow-y-auto space-y-4 bg-[#f7f8f6] rounded-b-2xl'>
            {!selectedProgram ? ( 
                programs.length === 0 ? (
                    <div className='text-center py-12'>
                        <i className="ri-folder-open-line text-5xl text-slate-300 mb-3 block"></i>
                        <h4 className='text-lg font-bold text-slate-700 mb-1'>No Programs Available</h4>
                        <p className='text-sm text-slate-500'>Create a workout program first before assigning.</p>
                    </div>
                ) : (
                    programs?.map(program => {
                        return (
                            <div key={program.id} className='flex flex-col sm:flex-row sm:items-center justify-between bg-white p-5 rounded-xl border border-[#dbe6df] shadow-sm hover:shadow-md transition-shadow gap-4'>
                                <div className='flex items-start gap-4'>
                                    <div className='size-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center shrink-0 border border-green-100'>
                                        <i className="ri-file-list-3-line text-xl"></i>
                                    </div>
                                    <div>
                                        <p className='font-bold text-slate-800 text-lg leading-tight'>{program.title}</p>
                                        <p className='text-xs text-slate-500 mt-1 line-clamp-2 max-w-sm'>{program.description || "No description provided."}</p>
                                        
                                        <div className='flex flex-wrap items-center gap-2 mt-3'>
                                            <span className='px-2.5 py-1 rounded-md bg-[#f7f8f6] border border-[#eef2f0] text-[10px] font-bold text-[#61896f] uppercase tracking-wider'>{program.days.length} Days</span>
                                            <span className='px-2.5 py-1 rounded-md bg-[#f7f8f6] border border-[#eef2f0] text-[10px] font-bold text-[#61896f] uppercase tracking-wider'>{restDays(program)} Rest</span>
                                            <span className='px-2.5 py-1 rounded-md bg-[#f7f8f6] border border-[#eef2f0] text-[10px] font-bold text-[#61896f] uppercase tracking-wider'>{exerciseCount(program)} Exercises</span>
                                        </div>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setSelectedProgram(program)}
                                    className='w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 text-slate-700 hover:text-slate-900 text-sm font-bold rounded-lg transition-all shrink-0 shadow-sm'
                                >
                                    Select
                                    <i className="ri-arrow-right-line"></i>
                                </button>
                            </div>
                        )
                    })
                )
            ) : (
                <AssignmentWindow  
                    member={member} 
                    program={selectedProgram} 
                    onBack={() => setSelectedProgram(null)}
                    onAssign={handleAssign}
                />
            )}
        </div>
      </div>
    </div>
  )
}

export default AssignWorkoutModal
