import React from 'react'

const PlanCard = (props) => {

    const { program } = props;

    const exerciseCount = program.days.reduce((total, day) => {
        if (day.isRestDay) return total
        return total + day.exercises.length
    }, 0)
    const restDays = program.days.filter(day => day.isRestDay).length

  return (
    <div className='bg-white rounded-xl border border-[#dbe6df] overflow-hidden group hover:border-[#15ec5b]/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all'>
        <div className='relative h-40 bg-gray-400'>
            <div className='absolute inset-0 bg-linear-to-br from-slate-600 to-zinc-900 opacity-90'></div>
            <div className='absolute inset-0 flex items-center justify-center'>
                <i className="fa-solid fa-hand-fist text-6xl text-white/50"></i>
            </div>
        </div>

        <div className='p-5'>
            <div className='flex items-center justify-between'>
                <h4 className='text-lg font-bold'>{program.title}</h4>
            </div>
            <p className='text-sm text-[#61896f] mb-4 mt-2 line-clamp-4'>{program.description || "No description provided."}</p>
            <div className='flex items-center gap-2 mb-5'>
                <span className='px-2 py-1 rounded bg-[#f7f8f6] text-[10px] font-medium text-[#61896f]'>{program.days.length} Days</span>
                <span className='px-2 py-1 rounded bg-[#f7f8f6] text-[10px] font-medium text-[#61896f]'>{restDays} Rest Days</span>
                <span className='px-2 py-1 rounded bg-[#f7f8f6] text-[10px] font-medium text-[#61896f]'>{exerciseCount} Exercises</span>
            </div>
            <div className='flex gap-2'>
                <button className='flex-1 rounded-lg bg-[#15ec5b] py-2.5 text-md font-bold hover:bg-green-500 shadow-sm transition-colors cursor-pointer'>Assign</button>
            </div>
        </div>
    </div>
  )
}

export default PlanCard
