import React, { useState, useEffect, use } from 'react'
import navjot from '../../media/navjotImg.jpeg'
import api from '../../api/axios'
import { toast } from 'sonner'
import ComingSoonWrapper from '../../components/ComingSoonWrapper'

const TrainerDashboard = () => {

  const [assignedMembers, setAssignedMembers] = useState([]);

  useEffect(() => {
    const fetchAssignedMembers = async () => {
      try {
        const response = await api.get('/trainer/members');
        setAssignedMembers(response.data.data);
      } catch(err) {
      }
    }

    fetchAssignedMembers();
  }, [])

  return (
    <div className='flex-1 overflow-y-auto p-8 space-y-6'>
      {/* Assigned Members */}
      <div className='bg-white rounded-xl border border-[#dbe6df] shadow-sm overflow-hidden'>
        <div className='p-5 border-b border-[#f0f4f2] flex items-center justify-between gap-4'>
          <h3 className='text-lg font-bold'>Assigned Members</h3>
        </div>

        <div className='overflow-x-auto'>
          <div className='max-h-70 overflow-y-auto'>
            <table className='w-full text-left border-collapse'>
              <thead className='sticky top-0 bg-[#fbfdfc] z-10'>
                <tr className='border-b border-[#f0f4f2]'>
                  <th className='py-4 px-6 text-xs font-semibold text-[#61896f] uppercase tracking-wide'>Member</th>
                  <th className='py-4 px-6 text-xs font-semibold text-[#61896f] uppercase tracking-wide'>Goal</th>
                  <th className='py-4 px-6 text-xs font-semibold text-[#61896f] uppercase tracking-wide'>Gender</th>
                  <th className='py-4 px-6 text-xs font-semibold text-[#61896f] uppercase tracking-wide'>Height</th>
                  <th className='py-4 px-6 text-xs font-semibold text-[#61896f] uppercase tracking-wide'>Weight</th>
                </tr>
              </thead>

              <tbody className='divide-y divide-[#f0f4f2]'>
                {assignedMembers.map((member) => (
                  <tr key={member.id} className='hover:bg-gray-50 transition-colors'>
                    <td className='py-4 px-6'>
                      <div className='flex items-center gap-3'>
                        <span>{member.user.name}</span>
                      </div>
                    </td>
                    <td className='py-4 px-6 text-sm text-slate-600 capitalize'>{member.goal.split('_').join(' ').toLowerCase()}</td>
                    <td className='py-4 px-6 text-sm text-slate-600'>{member.gender}</td>
                    <td className='py-4 px-6 text-sm text-slate-600'>{member.heightCm} cm</td>
                    <td className='py-4 px-6 text-sm text-slate-600'>{member.weightKg} kg</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* KPI Cards */}
      <ComingSoonWrapper>
      <div className='grid grid-cols-3 gap-6'>
        <div className='relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200'>
          <div className='absolute top-5 right-8 bg-blue-50 size-12 flex items-center justify-center rounded-full text-blue-600'>
            <i className="ri-group-line text-[24px]"></i>
          </div>

          <div className='flex flex-col items-start gap-2'>
            <p className='text-sm font-medium text-slate-500'>Assigned Members</p>
            <p className='text-3xl font-bold '>42</p>
          </div>

          <div className='mt-4 flex items-center gap-2 text-sm'>
            <span className='flex items-center gap-1 font-medium text-green-600'>
              <i className="fa-solid fa-arrow-trend-up text-base"></i>
              +12%
            </span>
            <span className='text-slate-400'>vs last month</span>
          </div>
        </div>

        <div className='relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200'>
          <div className='absolute top-5 right-8 bg-green-50 size-12 flex items-center justify-center rounded-full text-green-600'>
            <i className="fa-solid fa-dumbbell text-[24px]"></i>
          </div>

          <div className='flex flex-col items-start gap-2'>
            <p className='text-sm font-medium text-slate-500'>Today's Sessions</p>
            <p className='text-3xl font-bold '>8</p>
          </div>

          <div className='mt-4 flex items-center gap-2 text-sm'>
            <span className='text-slate-400'>3 completed, 5 upcoming</span>
          </div>
          
          <div className='mt-3 h-1.5 w-full rounded-full bg-slate-200'>
            <div className='h-1.5 w-[60%] rounded-full bg-green-500'></div>
          </div>
        </div>

        <div className='relative overflow-hidden rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200'>
          <div className='absolute top-5 right-8 bg-purple-50 size-12 flex items-center justify-center rounded-full text-purple-600'>
            <i className="fa-solid fa-chart-simple text-[24px]"></i>
          </div>

          <div className='flex flex-col items-start gap-2'>
            <p className='text-sm font-medium text-slate-500'>Avg. Attendance</p>
            <p className='text-3xl font-bold '>94%</p>
          </div>

          <div className='mt-4 flex items-center gap-2 text-sm'>
            <span className='flex items-center gap-1 font-medium text-green-600'>
              <i className="fa-solid fa-arrow-up text-base"></i>
              +2.4%
            </span>
            <span className='text-slate-400'>this week</span>
          </div>
        </div>
      </div>
      </ComingSoonWrapper>

      {/* Schedule */}
      <ComingSoonWrapper>
      <div className='grid grid-cols-3 gap-6'>
        <div className='col-span-2 rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200'>
          {/* Heading */}
          <div className='mb-6 flex items-center justify-between'>
            <h3 className='text-lg font-bold'>Today's Schedule</h3>
            <button className='flex items-center gap-1 text-sm font-medium text-[#15ec5b] hover:underline transition-all'>
              View Calendar
              <i className="ri-arrow-right-line"></i>
            </button>
          </div>

          {/* Schedule */}
          <div className='space-y-4'>
            <div className='group flex items-center gap-4 rounded-xl border border-[#dbe6df] p-4 hover:bg-slate-50 border-l-4 border-l-[#15ec5b] transition-all'>
              <div className='flex flex-col items-center justify-center rounded-lg bg-slate-100 p-2 text-center min-w-18'>
                <span className='text-xs font-bold uppercase'>09:00</span>
                <span className='text-xs text-slate-400'>AM</span>
              </div>

              <div className='flex-1'>
                <h4 className='font-semibold'>Sarah Jenkins</h4>
                <p className='text-sm text-slate-500'>HIIT Intensity • 45 mins</p>
              </div>

              <span className='inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20'>Completed</span>
            </div>
            
            <div className='group flex items-center gap-4 rounded-xl border border-[#dbe6df] p-4 hover:bg-slate-50 border-l-4 border-l-[#15ec5b] transition-all'>
              <div className='flex flex-col items-center justify-center rounded-lg bg-slate-100 p-2 text-center min-w-18'>
                <span className='text-xs font-bold uppercase'>10:30</span>
                <span className='text-xs text-slate-400'>AM</span>
              </div>

              <div className='flex-1'>
                <h4 className='font-semibold'>Alex Morgan</h4>
                <p className='text-sm text-slate-500'>Yoga & Pilates • 60 mins</p>
              </div>

              <span className='inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20'>Completed</span>
            </div>

            <div className='group flex items-center gap-4 rounded-xl border border-[#dbe6df] p-4 hover:bg-slate-50 border-l-4 border-l-[#15ec5b] transition-all'>
              <div className='flex flex-col items-center justify-center rounded-lg bg-slate-100 p-2 text-center min-w-18'>
                <span className='text-xs font-bold uppercase'>01:00</span>
                <span className='text-xs text-slate-400'>PM</span>
              </div>

              <div className='flex-1'>
                <h4 className='font-semibold'>Mike Ross</h4>
                <p className='text-sm text-slate-500'>Strenght Training • 90 mins</p>
              </div>

              <span className='inline-flex items-center rounded-full bg-green-50 px-2.5 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20'>Completed</span>
            </div>

            <div className='group flex items-center gap-4 rounded-xl border border-[#dbe6df] p-4 hover:bg-slate-50 transition-all'>
              <div className='flex flex-col items-center justify-center rounded-lg bg-slate-100 p-2 text-center min-w-18'>
                <span className='text-xs font-bold uppercase'>03:00</span>
                <span className='text-xs text-slate-400'>PM</span>
              </div>

              <div className='flex-1'>
                <h4 className='font-semibold'>Jessica Pearson</h4>
                <p className='text-sm text-slate-500'>Cardio & Mobility • 45 mins</p>
              </div>

              <span className='inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20'>Upcoming</span>
            </div>

            <div className='group flex items-center gap-4 rounded-xl border border-[#dbe6df] p-4 hover:bg-slate-50 transition-all'>
              <div className='flex flex-col items-center justify-center rounded-lg bg-slate-100 p-2 text-center min-w-18'>
                <span className='text-xs font-bold uppercase'>06:00</span>
                <span className='text-xs text-slate-400'>PM</span>
              </div>

              <div className='flex-1'>
                <h4 className='font-semibold'>Harvey Specter</h4>
                <p className='text-sm text-slate-500'>Boxing Basics • 60 mins</p>
              </div>

              <span className='inline-flex items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-600/20'>Upcoming</span>
            </div>
          </div>
        </div>

        <div className='col-span-1 space-y-6'>
          {/* Weekly Attendance */}
          <div className='rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200'>
            <h3 className='mb-4 text-lg font-bold'>Weekly Attendance</h3>
            <div className='flex h-48 items-end justify-between gap-2 px-2'>
              <div className='group flex flex-col items-center w-full gap-2'>
                <div className='relative bg-[#15ec5b] w-full h-36 rounded-t-md group-hover:bg-green-600'></div>
                <span className='text-[12px] font-medium text-slate-400 uppercase'>Mon</span>
              </div>

              <div className='group flex flex-col items-center w-full gap-2'>
                <div className='relative bg-[#15ec5b] w-full h-40 rounded-t-md group-hover:bg-green-600'></div>
                <span className='text-[12px] font-medium text-slate-400 uppercase'>Tue</span>
              </div>

              <div className='group flex flex-col items-center w-full gap-2'>
                <div className='relative bg-[#15ec5b] w-full h-32 rounded-t-md group-hover:bg-green-600'></div>
                <span className='text-[12px] font-medium text-slate-400 uppercase'>Wed</span>
              </div>

              <div className='group flex flex-col items-center w-full gap-2'>
                <div className='relative bg-green-600 w-full h-34 rounded-t-md group-hover:bg-green-600'></div>
                <span className='text-[12px] font-medium text-slate-900 uppercase'>Thu</span>
              </div>

              <div className='group flex flex-col items-center w-full gap-2'>
                <div className='relative bg-[#15ec5b] w-full h-30 rounded-t-md group-hover:bg-green-600'></div>
                <span className='text-[12px] font-medium text-slate-400 uppercase'>Fri</span>
              </div>

              <div className='group flex flex-col items-center w-full gap-2'>
                <div className='relative bg-[#15ec5b] w-full h-43 rounded-t-md group-hover:bg-green-600'></div>
                <span className='text-[12px] font-medium text-slate-400 uppercase'>Sat</span>
              </div>

              <div className='group flex flex-col items-center w-full gap-2'>
                <div className='relative bg-[#15ec5b] w-full h-40 rounded-t-md group-hover:bg-green-600'></div>
                <span className='text-[12px] font-medium text-slate-400 uppercase'>Sun</span>
              </div>
            </div>
          </div>

          {/* Requests */}
          <div className='rounded-2xl bg-white p-6 shadow-sm ring-1 ring-slate-200'>
            <h3 className='mb-4 text-lg font-bold'>Recent Requests</h3>

            <div className='space-y-4'>
              <div className='flex items-start gap-5 border border-slate-100 p-3 rounded-lg hover:border-slate-200 transition-all'>
                <div className='flex size-8 shring-0 items-center justify-center rounded-full bg-orange-100 text-orange-600'>
                  <i className="fa-solid fa-exclamation text-sm"></i>
                </div>
                <div className='flex-1'>
                  <p className='text-sm font-medium'>New Dietary Plan</p>
                  <p className='text-xs text-slate-500 '>
                    Requested by
                    <span className='text-slate-700'> Louis Litt</span>
                  </p>
                </div>
                <span className='text-xs text-slate-400 mr-1'>2h</span>
              </div>

              <div className='flex items-start gap-5 border border-slate-100 p-3 rounded-lg hover:border-slate-200 transition-all'>
                <div className='flex size-8 shring-0 items-center justify-center rounded-full bg-blue-100 text-blue-600'>
                  <i className="ri-calendar-todo-fill text-sm"></i>
                </div>
                <div className='flex-1'>
                  <p className='text-sm font-medium'>Reschedule Session</p>
                  <p className='text-xs text-slate-500 '>
                    Requested by
                    <span className='text-slate-700'> Donna Paulsen</span>
                  </p>
                </div>
                <span className='text-xs text-slate-400 mr-1'>5h</span>
              </div>
            </div>

            <button className='mt-4 w-full rounded-lg border border-[#dbe6df] py-2 text-sm font-semibold text-slate-600 hover:bg-slate-50'>View All Requests</button>
          </div>
        </div>
      </div>
      </ComingSoonWrapper>
    </div>
  )
}

export default TrainerDashboard
