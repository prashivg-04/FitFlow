import React, { useState, useEffect } from 'react'
import api from '../../api/axios'
import { toast } from 'sonner';
import { useSelector } from 'react-redux';

const AssignTrainerModal = ({member, onClose}) => {

    const [trainers, setTrainers] = useState([]);

    const { loading } = useSelector((state) => state.auth);

    useEffect(() => {
        const fetchTrainers = async () => {
            try {
                const response = await api.get('/owner/trainers');
                setTrainers(response.data.data);
            } catch(err) {
                console.log('Failed to fetch trainers: ', err);
            }
        }

        fetchTrainers();
    }, []);

    const assignTrainer = async (trainerId) => {
        try {
            await api.post('/owner/assign-trainer', {
                trainerId,
                memberId: member.id
            });
            toast.success('Trainer assigned successfully!');
            onClose();
        } catch(err) {
            console.log('Failed to assign trainer: ', err);
        }
    }

  return (
    <div onClick={onClose} className='fixed inset-0 bg-black/40 z-20 backdrop-blur-xs flex items-center justify-center'>
      <div onClick={(e) => e.stopPropagation()} className='bg-[#f7f8f6] rounded-lg w-105 p-6 relative'>
        <div className='flex items-center justify-between'>
            <h2 className='text-lg font-bold'>Assign Trainer to {member?.user?.name}</h2>
            <button onClick={onClose} className='text-[20px] cursor-pointer'><i class="fa-solid fa-xmark"></i></button>
        </div>

        <div className='space-y-2 mt-6 overflow-y-auto max-h-72'>
            {trainers.map(trainer => {
                return (
                    <div key={trainer.id} className='flex items-center justify-between bg-white p-3 rounded-lg'>
                        <div className=''>
                            <p className='font-medium '>{trainer.user.name}</p>
                            <p className='text-sm font-light'>{trainer.specialization}</p>
                        </div>
                        <button onClick={() => assignTrainer(trainer.id)} disabled={loading} className='bg-[#15ec5b] text-black px-4 py-2 rounded-lg hover:bg-[#15ec5b]/80'>{loading ? 'Assigning...' : 'Assign'}</button>
                    </div>
                )
            })}
        </div>
      </div>
    </div>
  )
}

export default AssignTrainerModal
