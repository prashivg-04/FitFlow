import React from 'react'
import trainerDp from '../../media/T.png'
import ComingSoonWrapper from '../../components/ComingSoonWrapper'

const TrainerWorkspace = () => {
  return (
    <ComingSoonWrapper>
      <div className='relative flex flex-col min-h-screen bg-[#f7f8f6]'>
        {/* Member Selection */}
        <div className='flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 scroll-smooth'>
          <div className='max-w-300 mx-auto space-y-8 pb-10'>
            {/* Heading */}
            <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
              <div className='flex flex-col items-start justify-center gap-2'>
                <h1 className='text-4xl font-black tracking-tight'>Workspace</h1>
                <p className='text-[#61896f] text-base'>Manage your daily tasks, member notes, and system notifications in one place.</p>
              </div>
              <div className='flex items-center gap-2 bg-white p-2 rounded-lg border border-[#dbe6df] shadow-sm hover:bg-gray-50 transition-colors'>
                <i className="fa-regular fa-calendar text-slate-600 text-[24px]"></i>
                <span className='text-lg font-semibold'>Today, Oct 24</span>
              </div>
            </div>

            <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start'>
              {/* Left */}
              <div className='col-span-1 lg:col-span-2 flex flex-col gap-6 lg:gap-8'>
                {/* Entry */}
                <div className='bg-white rounded-xl border border-[#dbe6df] shadow-sm overflow-hidden group focus-within:ring-2 focus-within:ring-[#15ec5b]/20 focus-within:border-[#15ec5b] transition-all'>
                  <div className='p-5 space-y-5'>
                    <div className='flex items-center justify-between'>
                      <h3 className='text-md font-bold uppercase tracking-wider flex items-center gap-2'>
                        <i className="ri-edit-box-line text-[20px] text-[#15ec5b]"></i>
                        New Entry
                      </h3>
                      <div className='relative'>
                        <select className='appearance-none bg-gray-50 border border-gray-200 text-gray-700 pl-3 pr-8 py-1.5 rounded-md text-sm focus:outline-none focus:border-[#15ec5b] cursor-pointer hover:bg-gray-100 transition-all'>
                          <option disabled selected value="">Select Context...</option>
                          <option>General / Personal</option>
                          <option>John Doe</option>
                          <option>Sarah Jenkins</option>
                          <option>Mike Ross</option>
                        </select>
                        <i className="ri-arrow-down-s-line absolute right-2 top-1/2 -translate-y-1/2 text-gray-700 pointer-events-none"></i>
                      </div>
                    </div>

                    <div className='relative'>
                      <textarea className='w-full bg-transparent text-xl text-gray-800 placeholder:text-gray-300 border-none focus:outline-none focus:ring-0 min-h-30 resize-none leading-relaxed' placeholder='Jot down a session note, workout modification, or internal reminder...'></textarea>
                    </div>
                  </div>

                  <div className='bg-gray-50 px-5 py-3 flex items-center justify-between border-t border-gray-100'>
                    <div className='flex items-center gap-3'>
                      <button className='p-2 text-[#61896f] rounded-full hover:bg-gray-200 transition-colors'>
                        <i className="ri-attachment-line text-[20px]"></i>
                      </button>
                      <button className='p-2 text-[#61896f] rounded-full hover:bg-gray-200 transition-colors'>
                        <i className="ri-image-line text-[20px]"></i>
                      </button>
                      <button className='p-2 text-[#61896f] rounded-full hover:bg-gray-200 transition-colors'>
                        <i className="ri-alarm-line text-[20px]"></i>
                      </button>
                    </div>
                    <button className='bg-[#15ec5b] hover:bg-green-400 px-5 py-2 rounded-lg font-semibold shadow-md shadow-[#15ec5b]/20 transform active:scale-95 transition-all flex items-center gap-2'>
                      <span>Save Note</span>
                      <i className="ri-send-plane-2-line"></i>
                    </button>
                  </div>
                </div>

                {/* Filter Tabs */}
                <div className='flex items-center justify-between border-b border-[#dbe6df]'>
                  <div className='flex items-center gap-6'>
                    <button className='pb-3 text-md font-medium text-[#15ec5b] border-b-2 border-[#15ec5b] hover:text-slate-900 transition-colors'>All Notes</button>
                    <button className='pb-3 text-md font-medium text-[#61896f] hover:text-slate-900 transition-colors'>Client Logs</button>
                    <button className='pb-3 text-md font-medium text-[#61896f] hover:text-slate-900 transition-colors'>Internal</button>
                  </div>

                  <div className=''>
                    <button className='pb-3 flex items-center gap-2 text-md font-medium text-[#61896f] hover:text-[#15ec5b]'>
                      <i className="ri-filter-3-line text-[18px]"></i>
                      Filter
                    </button>
                  </div>
                </div>

                {/* Notes */}
                <div className='space-y-6'>
                  <article className='flex gap-4 group'>
                    <div className='flex flex-col items-center pt-1 min-w-10'>
                      <img className='size-10 rounded-full bg-cover bg-center border-2 border-white shadow-sm object-cover' src={trainerDp} alt="Trainer" />
                      <div className='w-px h-full bg-gray-300 mb-6'></div>
                    </div>

                    <div className='flex-1 pb-6 border-b border-gray-200 group-last:border-0'>
                      <div className='flex items-center justify-between mb-2'>
                        <div className='flex items-center gap-2'>
                          <h4 className='text-md font-bold'>John Doe</h4>
                          <span className='inline-flex px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase border border-blue-200'>Session Log</span>
                          <span className='text-xs text-[#61896f]'>• 2 hours ago</span>
                        </div>
                        <div className='flex items-center gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100'>
                          <button className='p-1 rounded text-[#61896f] hover:text-[#15ec5b]'>
                            <i className="ri-pencil-line text-[20px]"></i>
                          </button>
                          <button className='p-1 rounded text-[#61896f] hover:text-[#e74545]'>
                            <i className="fa-regular fa-trash-can text-[17px]"></i>
                          </button>
                        </div>
                      </div>

                      <div className='bg-white border border-[#dbe6df] rounded-tr-lg rounded-b-lg p-4 shadow-sm relative'>
                        <div className='absolute -left-2 -top-1.5 w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#dbe6df] border-b-8 border-b-transparent rotate-135'></div>
    
                        <p className='text-sm leading-relaxed text-gray-600'>Focus on eccentric loading for squats today. He reported knee pain as 2/10, which is an improvement from last week. We kept the weight moderate (185lbs) but increased time under tension (3-0-1 tempo).</p>
                        <div className='flex items-center gap-3 mt-3'>
                          <span className='inline-flex gap-1 items-center px-2 py-1 bg-gray-50 text-xs text-gray-500 border border-gray-200 rounded-md '>
                            <i className='fa-solid fa-dumbbell'></i>
                            Squats
                          </span>
                          <span className='inline-flex gap-1 items-center px-2 py-1 bg-gray-50 text-xs text-gray-500 border border-gray-200 rounded-md '>
                            <i className='fa-solid fa-arrow-trend-up'></i>
                            Progress
                          </span>
                        </div>
                      </div>
                    </div>
                  </article>

                  <article className='flex gap-4 group'>
                    <div className='flex flex-col items-center pt-1 min-w-10'>
                      <div className='size-10 rounded-full flex items-center justify-center bg-orange-100 border border-orange-200 text-orange-600 shadow-sm object-cover'>
                        <i className="fa-solid fa-square-poll-horizontal"></i>
                      </div>
                      <div className='w-px h-full bg-gray-300 mb-6'></div>
                    </div>

                    <div className='flex-1 pb-6 border-b border-gray-200 group-last:border-0'>
                      <div className='flex items-center justify-between mb-2'>
                        <div className='flex items-center gap-2'>
                          <h4 className='text-md font-bold'>Personal Note</h4>
                          <span className='inline-flex px-2 py-0.5 rounded-full bg-orange-50 text-orange-600 text-[10px] font-bold uppercase border border-orange-200'>Reminder</span>
                          <span className='text-xs text-[#61896f]'>• Yesterday</span>
                        </div>
                        <div className='flex items-center gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100'>
                          <button className='p-1 rounded text-[#61896f] hover:text-[#15ec5b]'>
                            <i className="ri-pencil-line text-[20px]"></i>
                          </button>
                          <button className='p-1 rounded text-[#61896f] hover:text-[#e74545]'>
                            <i className="fa-regular fa-trash-can text-[17px]"></i>
                          </button>
                        </div>
                      </div>

                      <div className='bg-white border border-[#dbe6df] rounded-tr-lg rounded-b-lg p-4 shadow-sm relative'>
                        <div className='absolute -left-2 -top-1.5 w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#dbe6df] border-b-8 border-b-transparent rotate-135'></div>
    
                        <p className='text-sm leading-relaxed text-gray-600'>Remember to renew CPR certification by Friday. Also, check with the front desk about the new towels for the VIP locker room.</p>
                      </div>
                    </div>
                  </article>

                  <article className='flex gap-4 group'>
                    <div className='flex flex-col items-center pt-1 min-w-10'>
                      <img className='size-10 rounded-full bg-cover bg-center border-2 border-white shadow-sm object-cover' src={trainerDp} alt="Trainer" />
                      <div className='w-px h-full bg-gray-300 mb-6'></div>
                    </div>

                    <div className='flex-1 pb-6 border-b border-gray-200 group-last:border-0'>
                      <div className='flex items-center justify-between mb-2'>
                        <div className='flex items-center gap-2'>
                          <h4 className='text-md font-bold'>Jane Smith</h4>
                          <span className='inline-flex px-2 py-0.5 rounded-full bg-blue-50 text-blue-600 text-[10px] font-bold uppercase border border-blue-200'>Dietary</span>
                          <span className='text-xs text-[#61896f]'>• Oct 22</span>
                        </div>
                        <div className='flex items-center gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100'>
                          <button className='p-1 rounded text-[#61896f] hover:text-[#15ec5b]'>
                            <i className="ri-pencil-line text-[20px]"></i>
                          </button>
                          <button className='p-1 rounded text-[#61896f] hover:text-[#e74545]'>
                            <i className="fa-regular fa-trash-can text-[17px]"></i>
                          </button>
                        </div>
                      </div>

                      <div className='bg-white border border-[#dbe6df] rounded-tr-lg rounded-b-lg p-4 shadow-sm relative'>
                        <div className='absolute -left-2 -top-1.5 w-0 h-0 border-t-8 border-t-transparent border-r-8 border-r-[#dbe6df] border-b-8 border-b-transparent rotate-135'></div>
    
                        <p className='text-sm leading-relaxed text-gray-600'>Jane is starting a keto cycle next week. Adjusted her cardio plan to low intensity steady state (LISS) for the first 3 days to help with adaptation.</p>
                      </div>
                    </div>
                  </article>
                </div>
              </div>

              {/* Right */}
              <div className='col-span-1 flex flex-col gap-8'>
                <div className='bg-white rounded-xl border border-[#dbe6df] shadow-sm overflow-hidden flex flex-col h-full max-w-[calc(100vh-140px)] sticky top-24'>
                  {/* Heading */}
                  <div className='p-5 border-b border-gray-100 flex items-center justify-between'>
                    <div className='flex items-center gap-2'>
                      <h3 className='text-lg font-bold'>Notifications</h3>
                      <span className='bg-[#15ec5b] text-[10px] font-bold px-1.5 py-0.5 rounded-md'>2 New</span>
                    </div>
                    <button className='text-xs font-semibold text-[#15ec5b] hover:text-green-400 transition-colors'>Mark all read</button>
                  </div>

                  {/* Notifications */}
                  <div className='overflow-y-auto p-3 space-y-2'>
                    <div className='group flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer relative'>
                      <div className='absolute opacity-0 right-2.5 top-2 group-hover:opacity-100 transition-opacity'>
                        <button className='text-gray-400 hover:text-[#15ec5b]'>
                          <i className='ri-checkbox-circle-line text-[14px]'></i>
                        </button>
                      </div>
                      <div className='shrink-0 mt-1'>
                        <div className='size-8 rounded-full bg-blue-100 flex items-center justify-center text-blue-600'>
                          <i className="ri-user-add-line text-[18px]"></i>
                        </div>
                      </div>
                      <div className='flex-1 pr-6'>
                        <p className='text-sm font-semibold leading-tight mb-1'>New Member Assigned</p>
                        <p className='text-xs text-[#61896f] leading-relaxed'>
                          <span className='font-medium text-gray-700'>Sarah Jenkins </span>
                          was assigned to your roster by the Gym Owner.
                        </p>
                        <span className='text-[12px] font-medium text-[#15ec5b] mt-2 inline-block'>2 mins ago</span>
                      </div>
                      <div className='absolute right-3 top-1/2 -translate-y-1/2 size-2 bg-[#15ec5b] rounded-full'></div>
                    </div>

                    <div className='group flex gap-3 p-3 rounded-lg hover:bg-gray-50 transition-colors cursor-pointer relative'>
                      <div className='absolute opacity-0 right-2.5 top-2 group-hover:opacity-100 transition-opacity'>
                        <button className='text-gray-400 hover:text-[#15ec5b]'>
                          <i className='ri-checkbox-circle-line text-[14px]'></i>
                        </button>
                      </div>
                      <div className='shrink-0 mt-1'>
                        <div className='size-8 rounded-full bg-red-100 flex items-center justify-center text-red-600'>
                          <i className="fa-regular fa-calendar-xmark text-[18px]"></i>
                        </div>
                      </div>
                      <div className='flex-1 pr-6'>
                        <p className='text-sm font-semibold leading-tight mb-1'>Session Canceled</p>
                        <p className='text-xs text-[#61896f] leading-relaxed'>
                          <span className='font-medium text-gray-700'>Mike Ross </span>
                          canceled the 3:00 PM session for today.
                        </p>
                        <span className='text-[12px] font-medium text-[#15ec5b] mt-2 inline-block'>2 mins ago</span>
                      </div>
                      <div className='absolute right-3 top-1/2 -translate-y-1/2 size-2 bg-[#15ec5b] rounded-full'></div>
                    </div>

                    <div className='group flex gap-3 p-3 rounded-lg hover:bg-gray-50 opacity-70 hover:opacity-100 transition-all cursor-pointer relative'>
                      <div className='shrink-0 mt-1'>
                        <div className='size-8 rounded-full bg-green-100 flex items-center justify-center text-green-600'>
                          <i className="fa-solid fa-money-bills text-[18px]"></i>
                        </div>
                      </div>
                      <div className='flex-1 pr-6'>
                        <p className='text-sm font-semibold leading-tight mb-1'>Bonus Received</p>
                        <p className='text-xs text-[#61896f] leading-relaxed'>
                          You received a performance bonus for hitting your Q3 targets.
                        </p>
                        <span className='text-[12px] font-medium text-gray-400 mt-2 inline-block'>Yesterday</span>
                      </div>
                    </div>
                    
                    <div className='group flex gap-3 p-3 rounded-lg hover:bg-gray-50 opacity-70 hover:opacity-100 transition-all cursor-pointer relative'>
                      <div className='shrink-0 mt-1'>
                        <div className='size-8 rounded-full bg-gray-100 flex items-center justify-center text-gray-600'>
                          <i className="ri-information-line text-[18px]"></i>
                        </div>
                      </div>
                      <div className='flex-1 pr-6'>
                        <p className='text-sm font-semibold leading-tight mb-1'>System Update</p>
                        <p className='text-xs text-[#61896f] leading-relaxed'>
                          GymManager will undergo maintenance on Sunday at 2 AM.
                        </p>
                        <span className='text-[12px] font-medium text-gray-400 mt-2 inline-block'>Oct 22</span>
                      </div>
                    </div>
                  </div>

                  {/* Actions */}
                  <div className='p-3 border-t border-gray-100 text-center'>
                    <button className='text-sm font-medium text-[#61896f] hover:text-[#15ec5b] transition-colors flex items-center justify-center w-full gap-1 py-1'>
                      View archived
                      <i className="ri-arrow-right-line text-[16px]"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </ComingSoonWrapper>
  )
}

export default TrainerWorkspace
