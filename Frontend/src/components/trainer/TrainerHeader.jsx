import React from 'react'

const TrainerHeader = (props) => {

  const { gymName, name } = props.gym || {};

  return (
    <div className=''>
      <header className='flex items-center justify-between h-20 px-6 py-4 bg-white border-b border-[#f0f4f2]'>
        <div className='flex flex-col'>
          <h2 className='text-lg font-bold tracking-tight leading-tight'>{gymName}</h2>
          <p className='text-xs text-[#61896f]'>Welcome back, {name}</p>
        </div>
      </header>
    </div>
  )
}

export default TrainerHeader