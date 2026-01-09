import React from 'react'
import OwnerHeader from '../../components/owner/OwnerHeader'

const NotificationDashboard = () => {
  return (
    <div className=''>
      <div className='flex-1 overflow-y-auto p-8 scroll-smooth'>
        <div className='max-w-300 mx-auto space-y-8 pb-10'>
          {/* Heading */}
          <div className='flex items-center justify-between gap-4'>
            <div className='flex flex-col items-start justify-center gap-2'>
              <h1 className='text-4xl font-black tracking-tight'>Communications</h1>
              <p className='text-[#61896f] text-base'>Manage announcements & member alerts</p>
            </div>
          </div>

          {/* KPI Cards */}
          <div className='grid grid-cols-3 gap-6'>
            <div className='bg-white p-6 rounded-lg border border-[#dbe6df] shadow-sm hover:shadow-md flex flex-col justify-between gap-3 relative overflow-hidden group'>
              <div className='absolute top-4 right-5 p-1.5 rounded-lg transition-all'>
                <i className='ri-calendar-view text-[#15ec5b] text-2xl'></i>
              </div>
              <span className='text-[#61896f] font-medium z-10'>Scheduled This Week</span>
              <span className='text-3xl font-bold'>3</span>
              <span className='text-sm font-semibold text-green-600 px-2 py-0.5 rounded-full flex items-center gap-1'>
                <i class="fa-solid fa-arrow-trend-up"></i>
                 +2% vs last week
              </span>
            </div>

            <div className='bg-white p-6 rounded-lg border border-[#dbe6df] shadow-sm hover:shadow-md flex flex-col justify-between gap-3 relative overflow-hidden group'>
              <div className='absolute top-4 right-5 p-1.5 rounded-lg transition-all'>
                <i className='fa-regular fa-envelope text-[#15ec5b] text-2xl'></i>
              </div>
              <span className='text-[#61896f] font-medium z-10'>Avg Open Rate</span>
              <span className='text-3xl font-bold'>94%</span>
              <span className='text-sm font-semibold text-green-600 px-2 py-0.5 rounded-full flex items-center gap-1'>
                <i class="fa-solid fa-arrow-trend-up"></i>
                +5% vs last month
              </span>
            </div>

            <div className='bg-white p-6 rounded-lg border border-[#dbe6df] shadow-sm hover:shadow-md flex flex-col justify-between gap-3 relative overflow-hidden group'>
              <div className='absolute top-4 right-5 p-1.5 rounded-lg transition-all'>
                <i className='ri-send-plane-2-line text-[#15ec5b] text-2xl'></i>
              </div>
              <span className='text-[#61896f] font-medium z-10'>Total Sent</span>
              <span className='text-3xl font-bold'>1,245</span>
              <span className='text-sm font-semibold text-[#61896f] px-2 py-0.5 rounded-full flex items-center gap-1'>
                Lifetime total
              </span>
            </div>
          </div>

          {/* Main Content */}
          <div className='grid grid-cols-3 gap-4'>
            {/* Compose Message */}
            <div className='col-span-1 flex flex-col gap-6'>
              <div className='bg-white rounded-xl border border-[#dbe6df] shadow-sm p-6 flex flex-col h-fit sticky gap-6'>
                <div>
                  <h3 className='text-lg font-bold'>Quick Compose</h3>
                  <p className='text-[#61896f] text-sm'>Draft a new announcement.</p>
                </div>

                <form className='flex flex-col gap-4'>
                  <div className='flex flex-col gap-1.5'>
                    <label className='text-xs font-bold uppercase tracking-wide'>Subject Line</label>
                    <div className='flex items-center gap-2 px-3 py-2 rounded-lg bg-[#f0f4f2] focus-within:ring-2 ring-[#15ec5b]/50 transition-all'>
                      <i class="fa-regular fa-pen-to-square text-[#61896f] text-[20px]"></i>
                      <input className='bg-transparent border-none text-sm w-full focus:outline-0 placeholder:text-gray-400' type="text" placeholder='e.g. Holiday Hours Update' />
                    </div>
                  </div>

                  <div className='flex flex-col gap-1.5'>
                    <label className='text-xs font-bold uppercase tracking-wide'>Audience</label>
                    <div className='flex items-center gap-2 px-3 py-2 rounded-lg bg-[#f0f4f2] focus-within:ring-2 ring-[#15ec5b]/50 transition-all'>
                      <i class="ri-user-add-line text-[#61896f] text-[20px]"></i>
                      <select className='bg-transparent border-none text-sm w-full focus:outline-0'>
                        <option>All Active Members</option>
                        <option>Trainers Only</option>
                        <option>Leads / Prospects</option>
                      </select>
                    </div>
                  </div>

                  <div className='flex flex-col gap-1.5'>
                    <label className='text-xs font-bold uppercase tracking-wide'>Schedule</label>
                    <div className='flex items-center gap-2 px-3 py-2 rounded-lg bg-[#f0f4f2] focus-within:ring-2 ring-[#15ec5b]/50 transition-all'>
                      <i class="fa-regular fa-calendar-check text-[#61896f] text-[20px]"></i>
                      <input className='bg-transparent border-none text-sm w-full focus:outline-0 placeholder:text-gray-400' type='datetime-local'/>
                    </div>
                  </div>

                  <div className='flex flex-col gap-1.5'>
                    <label className='text-xs font-bold uppercase tracking-wide'>Message</label>
                    <textarea className='w-full rounded-lg bg-[#f0f4f2] text-sm border-none p-3 focus:ring-2 focus:ring-[#15ec5b]/50 focus:outline-0 resize-none' placeholder='Type your announcement here...' rows='4'></textarea>
                  </div>

                  <div className='mt-4'>
                    <button className='bg-[#15ec5b] w-full flex items-center justify-center gap-2 hover:bg-green-400 font-bold py-3 rounded-lg transition-colors shadow-lg shadow-[#15ec5b]/20'>
                      Send Announcement
                      <i className='ri-send-plane-2-line'></i>
                    </button>
                  </div>
                </form>
              </div>
            </div>

            {/* Message List */}
            <div className='col-span-2 flex flex-col gap-6'>
              {/* Tabs */}
              <div className='border-b border-[#dbe6df] '>
                <div className='flex gap-6 overflow-x-auto'>
                  <button className='flex items-center gap-2 pb-3 px-2 border-b-2 border-[#15ec5b]'>
                    <span className='text-sm font-bold whitespace-nowrap'>All Messages</span>
                    <span className='bg-[#15ec5b]/20 text-xs font-medium px-2 py-0.5 rounded-full'>24</span>
                  </button>

                  <button className='flex items-center gap-2 pb-3 px-2 border-b-2 border-transparent hover:border-[#dbe6df] text-[#61896f] transition-colors'>
                    <span className='text-sm font-bold whitespace-nowrap'>Scheduled</span>
                    <span className='bg-[#f0f4f2] text-xs font-medium px-2 py-0.5 rounded-full'>3</span>
                  </button>

                  <button className='flex items-center gap-2 pb-3 px-2 border-b-2 border-transparent hover:border-[#dbe6df] text-[#61896f] transition-colors'>
                    <span className='text-sm font-bold whitespace-nowrap'>Sent</span>
                  </button>

                  <button className='flex items-center gap-2 pb-3 px-2 border-b-2 border-transparent hover:border-[#dbe6df] text-[#61896f] transition-colors'>
                    <span className='text-sm font-bold whitespace-nowrap'>Drafts</span>
                  </button>
                </div>
              </div>

              {/* Cards */}
              <div className='flex flex-col gap-3'>
                <div className='group flex gap-4 p-5 bg-white rounded-xl border border-[#dbe6df] hover:shadow-md transition-shadow'>
                  <div className='flex-1 flex flex-col gap-2'>
                    <div className='flex items-center gap-3 mb-1'>
                      <span className='px-2.5 py-1 rounded-md bg-yellow-100 text-yellow-700 text-xs font-bold uppercase tracking-wider'>Scheduled</span>
                      <span className='text-[#61896f] text-xs flex items-center gap-1'>
                        <i class="ri-error-warning-line text-[14px]"></i>
                        Tomorrow, 9:00 AM
                      </span>
                    </div>
                    <h4 className='text-lg font-bold'>New Year's Resolution Challenge</h4>
                    <p className='text-sm text-[#61896f] line-clamp-2'>
                      Get ready for our annual fitness challenge! Starting January 1st, track your workouts and compete for prizes...
                    </p>
                    <div className='flex items-center gap-4 mt-2'>
                      <div className='flex items-center gap-1.5 text-xs font-medium bg-[#f0f4f2] px-2 py-1 rounded'>
                        <i class="ri-group-line text-[14px]"></i>
                        All Members
                      </div>
                      <div className='flex items-center gap-1.5 text-xs font-medium '>
                        <i class="ri-user-3-line text-[14px]"></i>
                        By Admin
                      </div>
                    </div>
                  </div>

                  <div className='flex flex-col items-end justify-between gap-2 border-l border-[#dbe6df] pt-3 pl-4 min-w-30'>
                    <button className='text-[#61896f] hover:text-[#15ec5b] cursor-pointer'>
                      <i class="fa-solid fa-ellipsis text-[20px]"></i>
                    </button>
                    <button className='text-sm font-bold text-[#15ec5b] hover:underline'>Edit</button>
                  </div>
                </div>

                <div className='group flex gap-4 p-5 bg-white rounded-xl border border-[#dbe6df] hover:shadow-md transition-shadow'>
                  <div className='flex-1 flex flex-col gap-2'>
                    <div className='flex items-center gap-3 mb-1'>
                      <span className='px-2.5 py-1 rounded-md bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider'>Sent</span>
                      <span className='text-[#61896f] text-xs flex items-center gap-1'>
                        <i class="ri-checkbox-circle-line text-[14px]"></i>
                        Tomorrow, 9:00 AM
                      </span>
                    </div>
                    <h4 className='text-lg font-bold'>Gym Maintenance Notice: Pool Closed</h4>
                    <p className='text-sm text-[#61896f] line-clamp-2'>
                      Please be advised that the swimming pool will be closed for routine maintenance on Friday morning from 6am to 10am.
                    </p>
                    <div className='flex items-center gap-4 mt-2'>
                      <div className='flex items-center gap-1.5 text-xs font-medium bg-[#f0f4f2] px-2 py-1 rounded'>
                        <i class="ri-group-line text-[14px]"></i>
                        All Members
                      </div>
                      <div className='flex items-center gap-1.5 text-xs text-green-600 font-bold'>
                        <i class="ri-eye-line text-[14px]"></i>
                        68% Open Rate
                      </div>
                    </div>
                  </div>

                  <div className='flex flex-col items-end justify-between gap-2 border-l border-[#dbe6df] pt-3 pl-4 min-w-30'>
                    <button className='text-[#61896f] hover:text-[#15ec5b] cursor-pointer'>
                      <i class="fa-solid fa-ellipsis text-[20px]"></i>
                    </button>
                    <button className='text-sm font-bold hover:text-[#15ec5b]'>Details</button>
                  </div>
                </div>

                <div className='group flex gap-4 p-5 bg-white rounded-xl border border-[#dbe6df] hover:shadow-md transition-shadow'>
                  <div className='flex-1 flex flex-col gap-2'>
                    <div className='flex items-center gap-3 mb-1'>
                      <span className='px-2.5 py-1 rounded-md bg-gray-100 text-gray-700 text-xs font-bold uppercase tracking-wider'>Draft</span>
                      <span className='text-[#61896f] text-xs flex items-center gap-1'>
                        <i class="ri-pencil-line text-[14px]"></i>
                        Last edited 2h ago
                      </span>
                    </div>
                    <h4 className='text-lg font-bold'>New Yoga Instructor Introduction</h4>
                    <p className='text-sm text-[#61896f] line-clamp-2'>
                      We are thrilled to welcome Sarah to our team! She specializes in Vinyasa and Hatha yoga...
                    </p>
                    <div className='flex items-center gap-4 mt-2'>
                      <div className='flex items-center gap-1.5 text-xs font-medium bg-[#f0f4f2] px-2 py-1 rounded'>
                        <i class="fa-solid fa-dumbbell text-[14px]"></i>
                        Yoga Class Members
                      </div>
                    </div>
                  </div>

                  <div className='flex flex-col items-end justify-between gap-2 border-l border-[#dbe6df] pt-3 pl-4 min-w-30'>
                    <button className='text-[#61896f] hover:text-[#15ec5b] cursor-pointer'>
                      <i class="fa-solid fa-trash-can text-[20px]"></i>
                    </button>
                    <button className='text-sm font-bold text-[#15ec5b] hover:underline'>Resume</button>
                  </div>
                </div>

                <div className='group flex gap-4 p-5 bg-white rounded-xl border border-[#dbe6df] hover:shadow-md transition-shadow'>
                  <div className='flex-1 flex flex-col gap-2'>
                    <div className='flex items-center gap-3 mb-1'>
                      <span className='px-2.5 py-1 rounded-md bg-green-100 text-green-700 text-xs font-bold uppercase tracking-wider'>Sent</span>
                      <span className='text-[#61896f] text-xs flex items-center gap-1'>
                        <i class="ri-checkbox-circle-line text-[14px]"></i>
                        3 Days Ago
                      </span>
                    </div>
                    <h4 className='text-lg font-bold'>Nutrition Workshop Reminder</h4>
                    <p className='text-sm text-[#61896f] line-clamp-2'>
                      Don't forget to sign up for this weekend's nutrition workshop with Dr. Emily.
                    </p>
                    <div className='flex items-center gap-4 mt-2'>
                      <div className='flex items-center gap-1.5 text-xs font-medium bg-[#f0f4f2] px-2 py-1 rounded'>
                        <i class="ri-group-line text-[14px]"></i>
                        All Members
                      </div>
                      <div className='flex items-center gap-1.5 text-xs text-green-600 font-bold'>
                        <i class="ri-eye-line text-[14px]"></i>
                        42% Open Rate
                      </div>
                    </div>
                  </div>

                  <div className='flex flex-col items-end justify-between gap-2 border-l border-[#dbe6df] pt-3 pl-4 min-w-30'>
                    <button className='text-[#61896f] hover:text-[#15ec5b] cursor-pointer'>
                      <i class="fa-solid fa-ellipsis text-[20px]"></i>
                    </button>
                    <button className='text-sm font-bold hover:text-[#15ec5b]'>Details</button>
                  </div>
                </div>
              </div>

              {/* Pagination */}
              <div className='flex items-center justify-between pt-4 border-t border-[#dbe6df]'>
                <p className='text-sm text-[#61896f]'>Showing 1 to 4 of 24 results</p>
                <div className='flex items-center gap-2'>
                  <button className='px-3 py-1 text-sm font-medium bg-white rounded-md border border-[#dbe6df] hover:bg-gray-50'>Previous</button>
                  <button className='px-3 py-1 text-sm font-medium bg-white rounded-md border border-[#dbe6df] hover:bg-gray-50'>Next</button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default NotificationDashboard
