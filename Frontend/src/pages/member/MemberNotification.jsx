import React from 'react'
import ComingSoonWrapper from '../../components/ComingSoonWrapper'

const MemberNotification = () => {
  return (
    <ComingSoonWrapper>
    <div className='flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 scroll-smooth'>
      <div className='max-w-4xl mx-auto space-y-6 sm:space-y-8'>
        {/* Heading */}
        <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4'>
          <div className='flex flex-col items-start'>
            <h1 className='text-3xl sm:text-4xl font-bold tracking-tight'>Activity Feed</h1>
            <p className='text-[#61896f] text-base sm:text-lg mt-1'>Stay updated with your gym activity, class reminders, and announcements.</p>
          </div>
        </div>

        {/* Filters */}
        <div className='flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-200 pb-4 px-2'>
          <div className='flex flex-wrap gap-3 sm:gap-4'>
            <button className='px-4 py-2 rounded-full bg-slate-900 text-white text-sm font-medium shadow-sm transition-transform hover:scale-105'>All</button>
            <button className='px-4 py-2 rounded-full bg-white border border-[#dbe6df] text-[#61896f] text-sm font-medium hover:bg-slate-50 transition-colors'>Announcements</button>
            <button className='px-4 py-2 rounded-full bg-white border border-[#dbe6df] text-[#61896f] text-sm font-medium hover:bg-slate-50 transition-colors'>Reminders</button>
            <button className='px-4 py-2 rounded-full bg-white border border-[#dbe6df] text-[#61896f] text-sm font-medium hover:bg-slate-50 transition-colors'>Payments</button>
          </div>
          <button className='text-sm font-semibold text-[#61896f] hover:text-[#15ec5b] transition-colors flex items-center gap-1'>
            <i className="ri-check-double-line text-[18px]"></i>
            Mark all as read
          </button>
        </div>

        {/* Notification List */}
        <div className='flex flex-col gap-4 px-2'>
          <div className='group relative flex gap-4 p-5 bg-white rounded-xl shadow-sm border-l-4 border-l-amber-500 border-y border-r border-[#dbe6df] hover:shadow-md transition-all'>
            <div className='absolute top-4 right-4 size-2.5 bg-[#15ec5b] rounded-full animate-pulse shadow-[0_0_8px_rgba(19,236,91,0.6)]'></div>
            <div className='size-12 rounded-full bg-amber-100 flex items-center justify-center shrink-0 text-amber-600 '>
              <i className='ri-megaphone-line text-[20px]'></i>
            </div>
            <div className='flex flex-col flex-1 gap-1'>
              <div className='flex items-start justify-between pr-6'>
                <h3 className='text-lg font-bold'>Gym Maintenance Alert</h3>
                <span className='text-xs font-medium text-[#61896f] whitespace-nowrap'>2 hours ago</span>
              </div>
              <p className='text-sm text-slate-600 leading-relaxed'>The main weight room will be closed for equipment maintenance this Sunday from 8:00 AM to 12:00 PM. We apologize for the inconvenience.</p>
            </div>
          </div>

          <div className='group relative flex gap-4 p-5 bg-white rounded-xl shadow-sm border-l-4 border-l-blue-500 border-y border-r border-[#dbe6df] hover:shadow-md transition-all'>
            <div className='absolute top-4 right-4 size-2.5 bg-[#15ec5b] rounded-full animate-pulse shadow-[0_0_8px_rgba(19,236,91,0.6)]'></div>
            <div className='size-12 rounded-full bg-blue-100 flex items-center justify-center shrink-0 text-blue-600 '>
              <i className='ri-timer-line text-[24px]'></i>
            </div>
            <div className='flex flex-col flex-1 gap-1'>
              <div className='flex items-start justify-between pr-6'>
                <h3 className='text-lg font-bold'>Upcoming Class: HIIT Blast</h3>
                <span className='text-xs font-medium text-[#61896f] whitespace-nowrap'>3 hours ago</span>
              </div>
              <p className='text-sm text-slate-600 leading-relaxed'>Your reserved class starts at 6:00 PM today. Don't forget your water bottle and towel!</p>
              <div className='mt-1'>
                <button className='inline-flex items-center gap-2 px-4 py-2 bg-[#15ec5b] hover:bg-[#0fd651] text-sm font-bold rounded-lg transition-colors'>
                  View Class Details
                  <i className='fa-solid fa-arrow-right text-[14px]'></i>
                </button>
              </div>
            </div>
          </div>

          <div className='group relative flex gap-4 p-5 bg-white rounded-xl shadow-sm border-l-4 border-l-purple-500 border-y border-r border-[#dbe6df] hover:shadow-md transition-all'>
            <div className='size-12 rounded-full bg-purple-100 flex items-center justify-center shrink-0 text-purple-600 '>
              <i className='fa-solid fa-trophy text-[20px]'></i>
            </div>
            <div className='flex flex-col flex-1 gap-1'>
              <div className='flex items-start justify-between pr-6'>
                <h3 className='text-lg font-bold'>Monthly Milestone Reached!</h3>
                <span className='text-xs font-medium text-[#61896f] whitespace-nowrap'>Yesterday</span>
              </div>
              <p className='text-sm text-slate-600 leading-relaxed'>Congratulations, Alex! You've completed 10 workouts this month. Keep up the great work!</p>
            </div>
          </div>

          <div className='group relative flex gap-4 p-5 bg-white rounded-xl shadow-sm border-l-4 border-l-gray-500 border-y border-r border-[#dbe6df] hover:shadow-md transition-all'>
            <div className='size-12 rounded-full bg-gray-100 flex items-center justify-center shrink-0 text-gray-600 '>
              <i className='fa-solid fa-money-check text-[20px]'></i>
            </div>
            <div className='flex flex-col flex-1 gap-1'>
              <div className='flex items-start justify-between pr-6'>
                <h3 className='text-lg font-bold'>Payment Method Updated</h3>
                <span className='text-xs font-medium text-[#61896f] whitespace-nowrap'>2 days ago</span>
              </div>
              <p className='text-sm text-slate-600 leading-relaxed'>Your credit card ending in •••• 4242 has been successfully updated as your primary payment method.</p>
            </div>
          </div>

          <div className='group relative flex gap-4 p-5 bg-white rounded-xl shadow-sm border-l-4 border-l-green-500 border-y border-r border-[#dbe6df] hover:shadow-md transition-all'>
            <div className='size-12 rounded-full bg-green-100 flex items-center justify-center shrink-0 text-green-600 '>
              <i className='ri-checkbox-circle-line text-[24px]'></i>
            </div>
            <div className='flex flex-col flex-1 gap-1'>
              <div className='flex items-start justify-between pr-6'>
                <h3 className='text-lg font-bold'>Booking Confirmed</h3>
                <span className='text-xs font-medium text-[#61896f] whitespace-nowrap'>3 days ago</span>
              </div>
              <p className='text-sm text-slate-600 leading-relaxed'>Your spot for "Yoga Flow" on Friday at 9:00 AM has been confirmed.</p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className='mt-8 flex items-center justify-center'>
          <button className='text-sm font-semibold text-[#61896f] hover:text-[#15ec5b] px-6 py-3 rounded-lg hover:bg-slate-100 transition-all'>
            Need help with your billing?
          </button>
        </div>
      </div>
    </div>
    </ComingSoonWrapper>
  )
}

export default MemberNotification
