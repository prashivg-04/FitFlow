import React, { useState } from 'react'
import navjot from '../../media/navjotImg.jpeg'
import api from '../../api/axios'
import { toast } from 'sonner';
import { useNavigate } from 'react-router-dom';

const WorkoutBuilder = () => {

  const [program, setProgram] = useState({
    title: '',
    description: '',
    days: [
      {
        name: 'Push Day',
        isRestDay: false,
        exercises: [
          {
            name: 'Bench Press',
            sets: '3',
            reps: '10',
            rest: '120'
          }
        ]
      }
    ]
  });

  const navigate = useNavigate();

  const [activeDayIndex, setActiveDayIndex] = useState(0);

  const addDay = () => {
    setProgram((prev) => ({
      ...prev,
      days: [
        ...prev.days,
        {
          name: '',
          isRestDay: false,
          exercises: []
        }
      ]
    }))

    setActiveDayIndex(program.days.length);
  }

  const removeDay = (index) => {
    setProgram((prev) => ({
      ...prev,
      days: prev.days.filter((_, idx) => idx !== index)
    }))

    if (activeDayIndex === index) {
      setActiveDayIndex(0);
    } else if(activeDayIndex > index) {
      setActiveDayIndex((prev) => prev - 1);
    } else {
      setActiveDayIndex((prev) => prev);
    }
  }

  const addExercise = () => {
    setProgram((prev) => {
      const updatedDays = prev.days.map((day, idx) => {
        if(idx !== activeDayIndex) return day;

        return {
          ...day,
          exercises: [
            ...day.exercises,
            {
              name: '',
              sets: '',
              reps: '',
              rest: ''
            }
          ]
        }
      })

      return {
        ...prev,
        days: updatedDays
      }
    });
  }

  const deleteExercise = (exerciseIndex) => {
    setProgram((prev) => {
      const updatedDays = prev.days.map((day, idx) => {
        if(idx !== activeDayIndex) return day;

        return {
          ...day,
          exercises: day.exercises.filter((_, i) => i !== exerciseIndex)
        }
      })

      return {
        ...prev,
        days: updatedDays
      };
    })
  }

  const toggleRestDay = () => {
    setProgram((prev) => {
      const updatedDays = prev.days.map((day, idx) => {
        if(idx !== activeDayIndex) return day;

        return {
          ...day,
          isRestDay: !day.isRestDay
        }
      })
      
      return {
        ...prev,
        days: updatedDays
      }
    })
  }

  const totalExercises = program.days.reduce((total, day) => {
    if(day.isRestDay) return total;
    return total + day.exercises.length
  }, 0)


  // update exercise's fields 
  const updateExercise = (exerciseIndex, value) => {
    setProgram((prev) => {
      const updatedDays = prev.days.map((day, dayIdx) => {
        if(dayIdx !== activeDayIndex) return day;

        return {
          ...day, 
          exercises: day.exercises.map((exercise, idx) => {
            if(idx !== exerciseIndex) return exercise;

            return {
              ...exercise,
              name: value
            }
          })
        }
      })

      return {
        ...prev,
        days: updatedDays
      }
    })
  }

  const updateExerciseField = (exerciseIndex, field, value) => {
    setProgram((prev) => {
      const updatedDays = prev.days.map((day, dayIdx) => {
        if(dayIdx !== activeDayIndex) return day;

        return {
          ...day,
          exercises: day.exercises.map((exercise, idx) => {
            if(idx !== exerciseIndex) return exercise;

            return {
              ...exercise,
              [field]: value
            }
          })
        }
      })

      return {
        ...prev,
        days: updatedDays
      }
    })
  }

  const updateDayName = (value) => {
    setProgram((prev) => {
      const updatedDays = prev.days.map((day, idx) => {
        if(idx !== activeDayIndex) return day;

        return {
          ...day,
          name: value
        }
      })

      return {
        ...prev,
        days: updatedDays
      }
    })
  }

  const updateTitle = (value) => {
    setProgram((prev) => ({
      ...prev,
      title: value
    }))
  }

  const updateDescription = (value) => {
    setProgram((prev) => ({
      ...prev,
      description: value
    }))
  }


  // save and publish 
  const saveProgram = async () => {
    try {
      const payload = {
        ...program,
        days: program.days.map((day, idx) => ({
          name: day.name,
          orderIndex: idx, 
          isRestDay: day.isRestDay,
          exercises: day.isRestDay ? [] : day.exercises.map((ex, i) => ({
            name: ex.name,
            sets: Number(ex.sets),
            reps: ex.reps,
            restSeconds: Number(ex.rest),
            orderIndex: i
          }))
        }))
      }

      const response = await api.post('/trainer/programs', payload);
      toast.success('Workout plan saved successfully!');
      navigate('/trainer/workouts');
    } catch(err) {
      console.error("Error saving program: ", err);
    }
  }

  return (
    <div className='flex-1 overflow-y-auto p-8 scroll-smooth'>
      <div className='max-w-300 mx-auto space-y-8 pb-10'>
        {/* Heading */}
        <div className='flex items-center justify-between gap-4'>
            <div className='flex flex-col items-start justify-center gap-2'>
                <h1 className='text-4xl font-black tracking-tight'>Create a Workout Plan</h1>
                <p className='text-[#61896f] text-base'>Design a custom workout plan for your clients.</p>
            </div>
            <div className='flex items-center gap-3'>
              <button 
                className='flex items-center gap-2 px-5 py-2.5 bg-[#15ec5b] rounded-lg hover:bg-green-500 font-bold shadow-lg shadow-[#15ec5b]/25 transition-all'
                onClick={saveProgram}
              >
                <i class="ri-save-2-line text-[20px]"></i>
                Save & Publish Plan
              </button>
            </div>
        </div>

        {/* grid grid-cols-3 gap-8 */}
        <div className='grid grid-cols-3 gap-8'>
          {/* Workout Builder */}
          <div className='col-span-2 flex flex-col gap-6'>
            {/* Days */}
            <div className='bg-white rounded-xl p-1 border border-[#dbe6df] shadow-sm flex overflow-x-auto no-scrollbar gap-1'>
              {program.days.map((day, idx) => (
                <button 
                  key={idx}
                  onClick={() => setActiveDayIndex(idx)}
                  className={`relative flex-1 min-w-25 px-4 py-2.5 rounded-lg text-sm font-medium border flex flex-col items-center group transition-all 
                    ${activeDayIndex === idx 
                    ? 'bg-[#15ec5b] border-transparent' 
                    : 'text-[#61896f] hover:bg-gray-50'
                  }`}
                >
                  <div className="absolute -top-1 -right-1 opacity-0 group-hover:opacity-100 transition">
                    <div 
                      onClick={(e) => {
                        e.stopPropagation()
                        removeDay(idx)
                      }}
                      className="flex items-center justify-center w-4 h-4 bg-green-200 border border-green-400 rounded-full shadow cursor-pointer hover:text-red-500"
                    >
                      <i className="fa-solid fa-xmark text-[10px]"></i>
                    </div>
                  </div>

                  <span>Day {idx + 1}</span>
                  <span className='text-[10px] opacity-60 mt-2'>
                    {day.name || "Unnamed"}
                  </span>
                </button>
              ))}

              <button onClick={addDay} className='min-w-12.5 flex items-center justify-center rounded-lg text-[#61896f] hover:text-[#15ec5b] hover:bg-[#15ec5b]/10'>
                <i class="ri-add-circle-line"></i>
              </button>
            </div>

            {/* Exercises */}
            <div className='flex flex-col gap-4'>
              {/* Heading */}
              <div className='flex items-center justify-between px-1'>
                <div className='flex items-center gap-1'>
                  <h2 className='text-xl font-bold'>Day {activeDayIndex+1} -</h2>
                  <input 
                    type="text" 
                    value={program.days[activeDayIndex].name}
                    onChange={(e) => updateDayName(e.target.value)}
                    placeholder='Enter Day Name' 
                    className='bg-transparent border-b border-[#dbe6df] focus:outline-none focus:border-b-2 focus:border-[#15ec5b] px-1 py-1 text-xl font-bold placeholder-slate-600 transition-colors capitalize' 
                  />
                </div>
                <div className='flex items-center gap-2'>
                  <span className='text-md font-bold'>Rest Day</span>
                  <label className='relative inline-flex items-center cursor-pointer'>
                    <input
                      className='sr-only peer' 
                      type="checkbox"
                      checked={program.days[activeDayIndex].isRestDay}
                      onChange={toggleRestDay}
                    />
                    <div className='w-11 h-6 bg-gray-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[""] after:absolute after:top-0.5 after:left-0.5 after:bg-white after:border after:border-gray-300 after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-[#15ec5b]'></div>
                  </label>
                </div>
              </div>

              <div className='relative'>
                <div className={program.days[activeDayIndex].isRestDay ? 'blur-xs pointer-events-none opacity-70' : ''}>
                  {/* Exercise List */}
                  {program.days[activeDayIndex].exercises.map((exercise, idx) => (
                    <div key={idx} className='bg-white rounded-xl border border-[#dbe6df] shadow-sm p-1 mb-3 overflow-hidden hover:border-[#15ec5b]/50 transition-colors group'>
                      <div className='p-4 border-b border-[#dbe6df] flex flex-wrap gap-4 items-center justify-between bg-[#fcfdfd] '>
                        <div className='flex items-center gap-3 flex-1 min-w-50'>
                          <div className='bg-[#15ec5b]/20 text-sm font-bold px-2 py-1 rounded'>A{idx+1}</div>
                          <div className='relative flex-1'>
                            <input 
                              className='w-full bg-transparent border-0 border-b border-transparent hover:border-slate-300 focus:outline-none focus:border-b-2 focus:border-[#15ec5b] px-2 py-1 text-base font-bold placeholder-slate-600 transition-colors' 
                              type="text" 
                              placeholder='Exercise Name' 
                              value={exercise.name} 
                              onChange={(e) => updateExercise(idx, e.target.value)}
                            />
                          </div>
                        </div>
                        <div className='flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity'>
                          <button onClick={() => deleteExercise(idx)} className='p-1.5 text-[#61896f] hover:text-red-500 hover:bg-white'>
                            <i class="fa-solid fa-trash text-[18px]"></i>
                          </button>
                        </div>
                      </div>

                      <div className='p-4 grid grid-cols-3 gap-4'>
                        <div className='space-y-1'>
                          <label className='text-[10px] text-[#61896f] font-bold uppercase tracking-wide'>Sets</label>
                          <div className='flex items-center bg-slate-50 rounded-lg border border-[#dbe6df] overflow-hidden focus-within:outline-none focus-within:ring-1 focus-within:ring-[#15ec5b] focus-within:border-[#15ec5b]'>
                            <input 
                              className='w-full bg-transparent border-none text-center text-sm font-semibold p-2 focus:outline-none' 
                              type="number" 
                              placeholder='4' 
                              value={exercise.sets} 
                              onChange={(e) => updateExerciseField(idx, 'sets', e.target.value)}
                            />
                          </div>
                        </div>
                        <div className='space-y-1'>
                          <label className='text-[10px] text-[#61896f] font-bold uppercase tracking-wide'>Reps (Range)</label>
                          <div className='flex items-center bg-slate-50 rounded-lg border border-[#dbe6df] overflow-hidden focus-within:outline-none focus-within:ring-1 focus-within:ring-[#15ec5b] focus-within:border-[#15ec5b]'>
                            <input 
                              className='w-full bg-transparent border-none text-center text-sm font-semibold p-2 focus:outline-none' 
                              type="text" 
                              placeholder='8-10' 
                              value={exercise.reps} 
                              onChange={(e) => updateExerciseField(idx, 'reps', e.target.value)}
                            />
                          </div>
                        </div>
                        <div className='space-y-1'>
                          <label className='text-[10px] text-[#61896f] font-bold uppercase tracking-wide'>Rest (in Seconds)</label>
                          <div className='flex items-center bg-slate-50 rounded-lg border border-[#dbe6df] overflow-hidden focus-within:outline-none focus-within:ring-1 focus-within:ring-[#15ec5b] focus-within:border-[#15ec5b] relative'>
                            <i className='ri-timer-line absolute left-3 text-[16px] font-bold text-[#61896f] '></i>
                            <input 
                              className='w-full bg-transparent border-none text-center text-sm font-semibold p-2 focus:outline-none' 
                              type="number" 
                              placeholder='120' 
                              value={exercise.rest} 
                              onChange={(e) => updateExerciseField(idx, 'rest', Number(e.target.value))}
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}

                  <button 
                    onClick={addExercise}
                    className='w-full py-4 rounded-xl border-2 border-slate-300 border-dashed text-[#61896f] hover:border-[#15ec5b] hover:text-[#15ec5b] hover:bg-[#15ec5b]/5 transition-all flex items-center justify-center gap-2 group'
                  >
                    <i class="ri-add-circle-line text-[20px] group-hover:scale-110 transition-transform"></i>
                    <span className='font-semibold'>Add Exercise</span>
                  </button>
                </div>

                {program.days[activeDayIndex].isRestDay && (
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="bg-white/80 backdrop-blur-md px-6 py-4 rounded-lg shadow text-center">
                      <p className="text-lg font-bold text-[#61896f]">Rest Day</p>
                      <p className="text-sm text-slate-500">No exercises scheduled</p>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Context */}
          <div className='col-span-1 flex flex-col gap-6 sticky top-24'>
            {/* Plan Settings */}
            <div className='bg-white rounded-xl border border-[#dbe6df] shadow-sm p-5'>
              <div className='flex items-center gap-3 mb-4'>
                <i class="ri-equalizer-line text-[#15ec5b] text-[20px]"></i>
                <h3 className='text-lg font-bold'>Plan Settings</h3>
              </div>
              <div className='space-y-5'>
                <div className='space-y-1.5 flex flex-col'>
                  <label className='text-xs font-semibold text-[#61896f] uppercase tracking-wide'>Title</label>
                  <input 
                    className='w-full px-3 py-2 rounded-lg border border-[#dbe6df] text-sm focus:outline-none focus:ring-2 focus:ring-[#15ec5b] transition-all'
                    type="text" 
                    placeholder='Workout Plan Title' 
                    value={program.title}
                    onChange={(e) => updateTitle(e.target.value)}
                  />
                </div>
                <div className='space-y-1.5 flex flex-col'>
                  <label className='text-xs font-semibold text-[#61896f] uppercase tracking-wide'>Description</label>
                  <textarea 
                    className='w-full px-3 py-2 rounded-lg border border-[#dbe6df] text-sm focus:outline-none focus:ring-2 focus:ring-[#15ec5b] transition-all resize-none' 
                    placeholder='Workout Plan Description' 
                    value={program.description}
                    onChange={(e) => updateDescription(e.target.value)}
                  />
                </div>
              </div>
            </div>

            {/* Stats */}
            <div className='bg-[#15ec5b]/10 rounded-xl border border-[#15ec5b]/40 p-4'>
              <h4 className='text-xs font-bold text-[#15ec5b] uppercase tracking-wider pb-3'>Plan Summary</h4>
              <ul className='space-y-2 text-sm'>
                <li className='flex items-center justify-between'>
                  <span className='text-slate-600 font-medium'>Total Days</span>
                  <span className='font-mono font-medium'>{program.days.length}</span>
                </li>
                <li className='flex items-center justify-between'>
                  <span className='text-slate-600 font-medium'>Total Exercises</span>
                  <span className='font-mono font-medium'>{totalExercises}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default WorkoutBuilder
