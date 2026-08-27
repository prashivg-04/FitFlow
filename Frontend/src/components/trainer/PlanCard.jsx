import React from 'react'
import { useNavigate } from 'react-router-dom'

const getProgramStyle = (title) => {
    const t = title.toLowerCase();
    if (t.includes('hypertrophy') || t.includes('muscle') || t.includes('bodybuilding') || t.includes('strength') || t.includes('power')) {
        return {
            gradient: 'from-orange-500 to-red-600',
            icon: 'fa-dumbbell'
        };
    }
    if (t.includes('cardio') || t.includes('endurance') || t.includes('hiit') || t.includes('stamina') || t.includes('athletic')) {
        return {
            gradient: 'from-blue-500 to-indigo-600',
            icon: 'fa-bolt'
        };
    }
    if (t.includes('flexibility') || t.includes('core') || t.includes('yoga') || t.includes('stretching')) {
        return {
            gradient: 'from-emerald-400 to-teal-600',
            icon: 'fa-leaf'
        };
    }
    if (t.includes('loss') || t.includes('burn') || t.includes('shred') || t.includes('cut')) {
        return {
            gradient: 'from-pink-500 to-rose-600',
            icon: 'fa-fire'
        };
    }
    if (t.includes('rehab') || t.includes('recovery') || t.includes('injury')) {
        return {
            gradient: 'from-violet-500 to-purple-600',
            icon: 'fa-heart-pulse'
        };
    }
    
    // Default fallback styles based on string length to make them consistent but varied
    const defaults = [
        { gradient: 'from-slate-600 to-zinc-900', icon: 'fa-hand-fist' },
        { gradient: 'from-cyan-500 to-blue-700', icon: 'fa-stopwatch' },
        { gradient: 'from-amber-500 to-orange-600', icon: 'fa-fire' },
    ];
    return defaults[title.length % defaults.length];
}

const PlanCard = (props) => {
    const navigate = useNavigate();
    const { program } = props;

    const exerciseCount = program.days.reduce((total, day) => {
        if (day.isRestDay) return total
        return total + day.exercises.length
    }, 0)
    const restDays = program.days.filter(day => day.isRestDay).length

    const style = getProgramStyle(program.title);

  return (
    <div className='bg-white rounded-xl border border-[#dbe6df] overflow-hidden group hover:border-[#15ec5b]/50 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all flex flex-col h-full'>
        <div className={`relative h-40 bg-linear-to-br ${style.gradient} overflow-hidden shrink-0`}>
            {/* Background decoration */}
            <div className='absolute -bottom-8 -right-8 opacity-20 transform group-hover:scale-110 group-hover:-rotate-12 transition-transform duration-500'>
                <i className={`fa-solid ${style.icon} text-9xl text-white`}></i>
            </div>
            
            <div className='absolute inset-0 flex items-center justify-center backdrop-blur-[2px] bg-black/10'>
                <i className={`fa-solid ${style.icon} text-5xl text-white drop-shadow-md transform group-hover:scale-110 transition-transform duration-300`}></i>
            </div>
        </div>

        <div className='p-5 flex flex-col flex-1'>
            <div className='flex items-start justify-between'>
                <h4 className='text-lg font-bold text-slate-800 leading-tight'>{program.title}</h4>
            </div>
            <p className='text-sm text-slate-500 mb-4 mt-2 line-clamp-3 flex-1'>{program.description || "No description provided."}</p>
            
            <div className='flex flex-wrap gap-2 mb-5'>
                <span className='px-2.5 py-1 rounded-md bg-[#f7f8f6] border border-[#eef2f0] text-[10px] font-bold text-[#61896f] uppercase tracking-wider'>{program.days.length} Days</span>
                <span className='px-2.5 py-1 rounded-md bg-[#f7f8f6] border border-[#eef2f0] text-[10px] font-bold text-[#61896f] uppercase tracking-wider'>{restDays} Rest</span>
                <span className='px-2.5 py-1 rounded-md bg-[#f7f8f6] border border-[#eef2f0] text-[10px] font-bold text-[#61896f] uppercase tracking-wider'>{exerciseCount} Exercises</span>
            </div>
            
            <div className='pt-2 mt-auto'>
                <button 
                  onClick={() => navigate('/trainer/assignments')} 
                  className='w-full flex items-center justify-center gap-2 rounded-lg bg-[#15ec5b] hover:bg-[#12d852] py-2.5 text-sm font-bold text-slate-900 shadow-sm shadow-[#15ec5b]/20 transition-colors'
                >
                  <i className="ri-user-add-line text-lg"></i>
                  Assign Program
                </button>
            </div>
        </div>
    </div>
  )
}

export default PlanCard
