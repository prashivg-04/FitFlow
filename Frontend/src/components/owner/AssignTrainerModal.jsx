import React, { useState, useEffect } from 'react'
import api from '../../api/axios'
import { toast } from 'sonner';

const AssignTrainerModal = ({member, onClose}) => {

    const [trainers, setTrainers] = useState([]);
    const [assigningId, setAssigningId] = useState(null);

    useEffect(() => {
        const fetchTrainers = async () => {
            try {
                const response = await api.get('/owner/trainers');
                setTrainers(response.data.data);
            } catch(err) {
            }
        }

        fetchTrainers();
    }, []);

    const assignTrainer = async (trainerId) => {
        try {
            setAssigningId(trainerId);
            await api.post('/owner/assign-trainer', {
                trainerId,
                memberId: member.id
            });
            toast.success('Trainer assigned successfully!');
            onClose();
        } catch(err) {
            toast.error(err.response?.data?.message || 'Failed to assign trainer');
        } finally {
            setAssigningId(null);
        }
    }

  return (
    <div onClick={onClose} className='fixed inset-0 bg-slate-900/40 z-50 backdrop-blur-sm flex items-center justify-center p-4 sm:p-0'>
      <div onClick={(e) => e.stopPropagation()} className='bg-white rounded-2xl w-full max-w-lg shadow-2xl relative flex flex-col max-h-[85vh]'>
        {/* Header */}
        <div className='flex items-center justify-between p-6 border-b border-[#dbe6df] shrink-0'>
            <div>
              <h2 className='text-xl font-bold text-slate-800'>Assign Trainer</h2>
              <p className='text-sm text-slate-500 mt-1'>Select a trainer for <span className='font-semibold text-slate-700 capitalize'>{member?.user?.name}</span></p>
            </div>
            <button onClick={onClose} className='size-8 flex items-center justify-center rounded-full hover:bg-slate-100 text-slate-400 hover:text-slate-600 transition-colors'>
              <i className="ri-close-line text-xl"></i>
            </button>
        </div>

        {/* Content */}
        <div className='p-6 overflow-y-auto space-y-3 bg-[#f7f8f6] rounded-b-2xl'>
            {trainers.length === 0 ? (
              <div className='text-center py-8'>
                <i className="ri-ghost-line text-4xl text-slate-300 mb-2"></i>
                <p className='text-slate-500'>No active trainers available.</p>
              </div>
            ) : (
              trainers.map(trainer => {
                  const isAssigning = assigningId === trainer.id;
                  return (
                      <div key={trainer.id} className='flex flex-col sm:flex-row sm:items-center justify-between bg-white p-4 rounded-xl border border-[#dbe6df] shadow-sm hover:shadow-md transition-shadow gap-4'>
                          <div className='flex items-center gap-3'>
                              <div className='size-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center shrink-0'>
                                <i className="fa-solid fa-dumbbell"></i>
                              </div>
                              <div>
                                  <p className='font-bold text-slate-800'>{trainer.user.name}</p>
                                  <div className='flex items-center gap-2 mt-0.5'>
                                    <span className='text-[10px] font-bold uppercase tracking-wider text-[#61896f] bg-[#f7f8f6] px-2 py-0.5 rounded border border-[#eef2f0]'>
                                      {trainer.specialization}
                                    </span>
                                    <span className='text-xs text-slate-500 flex items-center'>
                                      <i className="ri-user-3-line mr-1"></i>
                                      {trainer._count?.trainerMembers || 0} clients
                                    </span>
                                  </div>
                              </div>
                          </div>
                          <button 
                            onClick={() => assignTrainer(trainer.id)} 
                            disabled={isAssigning} 
                            className='w-full sm:w-auto flex items-center justify-center gap-2 px-5 py-2.5 bg-[#15ec5b] hover:bg-[#12d852] text-slate-900 text-sm font-bold rounded-lg shadow-sm shadow-[#15ec5b]/20 transition-all disabled:opacity-50 shrink-0'
                          >
                              {isAssigning ? (
                                <i className="ri-loader-4-line animate-spin text-lg"></i>
                              ) : (
                                <i className="ri-links-line text-lg"></i>
                              )}
                              Assign
                          </button>
                      </div>
                  )
              })
            )}
        </div>
      </div>
    </div>
  )
}

export default AssignTrainerModal
