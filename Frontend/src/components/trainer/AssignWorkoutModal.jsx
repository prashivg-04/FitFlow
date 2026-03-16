import React, { useState, useEffect } from 'react'
import api from '../../api/axios'

const AssignWorkoutModal = ({onClose, member}) => {
  return (
    <div onClick={onClose} className='fixed inset-0 bg-black/40 z-20 backdrop-blur-xs flex items-center justify-center'>
      <div onClick={(e) => e.stopPropagation()} className='bg-[#f7f8f6] rounded-lg w-105 p-6 relative'>
        <div className='flex items-center justify-between'>
            <h2 className='text-lg font-bold'>Assign Trainer to </h2>
            <button onClick={onClose} className='text-[20px] cursor-pointer'><i class="fa-solid fa-xmark"></i></button>
        </div>

        <div className='space-y-2 mt-6 overflow-y-auto max-h-72'>
            {/* {trainers?.map(trainer => {
                return (
                    <div key={trainer.id} className='flex items-center justify-between bg-white p-3 rounded-lg'>
                        <div className=''>
                            <p className='font-medium '>{trainer.user.name}</p>
                            <p className='text-sm font-light'>{trainer.specialization}</p>
                        </div>
                        <button onClick={() => assignTrainer(trainer.id)} className='bg-[#15ec5b] text-black px-4 py-2 rounded-lg hover:bg-[#15ec5b]/80'>Assign</button>
                    </div>
                )
            })} */}
        </div>
      </div>
    </div>
  )
}

export default AssignWorkoutModal
