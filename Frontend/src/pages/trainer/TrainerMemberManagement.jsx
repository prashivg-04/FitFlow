import React from 'react'
import memberDp from '../../media/M.png'
import ComingSoonWrapper from '../../components/ComingSoonWrapper'

const TrainerMemberManagement = () => {
    return (
        <ComingSoonWrapper>
        <div className='relative flex min-h-screen bg-[#f7f8f6]'>
            <div className='flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 scroll-smooth'>
                <div className='max-w-300 mx-auto space-y-8 pb-10'>
                    {/* Heading */}
                    <div className='flex items-center justify-between gap-4'>
                        <div className='flex flex-col items-start justify-center gap-2'>
                            <h1 className='text-4xl font-black tracking-tight'>My Members</h1>
                            <p className='text-[#61896f] text-base'>Monitor progress, attendance, and membership health.</p>
                        </div>
                        <div>
                            <button className='flex items-center gap-2 px-5 py-2.5 bg-[#15ec5b] rounded-lg hover:bg-green-500 font-bold shadow-lg shadow-[#15ec5b]/25 transition-all'>
                            <i className="ri-user-add-line text-[20px]"></i>
                            Add New Member
                            </button>
                        </div>
                    </div>

                        {/* KPI Cards */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6'>
                        <div className='bg-white p-6 rounded-xl border border-[#dbe6df] shadow-soft flex flex-col justify-between h-32 relative overflow-hidden group'>
                            <div className='absolute -top-4 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity'>
                            <i className='ri-group-line text-[#15ec5b] text-[60px]'></i>
                            </div>
                            <span className='text-[#61896f] font-medium z-10'>Total Assigned</span>
                            <div className='flex items-center gap-2 z-10'>
                            <span className='text-3xl font-bold'>42</span>
                            <span className='text-sm font-semibold text-green-600 bg-green-100 px-2 py-0.5 rounded-full flex items-center'>
                                + 3 this month
                            </span>
                            </div>
                        </div>

                        <div className='bg-white p-6 rounded-xl border border-[#dbe6df] shadow-soft flex flex-col justify-between h-32 relative overflow-hidden group'>
                            <div className='absolute top-2 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity'>
                            <i className='fa-solid fa-person-running text-[#15ec5b] text-[60px]'></i>
                            </div>
                            <span className='text-[#61896f] font-medium z-10'>Active Today</span>
                            <div className='flex items-center gap-2 z-10'>
                            <span className='text-3xl font-bold'>18</span>
                            <span className='text-sm text-[#61896f] mt-2 flex items-center'>
                                / 42 total
                            </span>
                            </div>
                        </div>

                        <div className='bg-white p-6 rounded-xl border border-[#dbe6df] shadow-soft flex flex-col justify-between h-32 relative overflow-hidden group'>
                            <div className='absolute top-2 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity'>
                            <i className='fa-solid fa-arrow-trend-up text-[#15ec5b] text-[60px]'></i>
                            </div>
                            <span className='text-[#61896f] font-medium z-10'>Avg. Attendance</span>
                            <div className='flex items-center gap-2 z-10'>
                            <span className='text-3xl font-bold'>85%</span>
                            <span className='text-sm font-semibold text-green-600 bg-green-100 px-2 py-0.5 rounded-full flex items-center'>
                                High
                            </span>
                            </div>
                        </div>

                        <div className='bg-white p-6 rounded-xl border border-[#e73109]/20 shadow-soft flex flex-col justify-between h-32 relative overflow-hidden group'>
                            <div className='absolute top-2 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity'>
                            <i className='fa-solid fa-triangle-exclamation text-[#e73109] text-[60px]'></i>
                            </div>
                            <span className='text-[#e73109] font-medium z-10'>Needs Attention</span>
                            <div className='flex items-center gap-2 z-10'>
                            <span className='text-3xl font-bold'>5</span>
                            <span className='text-sm text-[#61896f] mt-2 tracking-tight flex items-center'>
                                Low attendance risk
                            </span>
                            </div>
                        </div>
                    </div>

                        {/* Members List */}
                    <div className='bg-white border border-[#dbe6df] rounded-xl shadow-soft overflow-hidden flex flex-col'>
                        {/* Toolbar */}
                        <div className='p-5 border-b border-[#f0f4f2] flex flex-col xl:flex-row xl:items-center justify-between gap-4'>
                            <div className='relative max-w-md w-full'>
                            <i className="ri-search-line absolute left-0 top-0 pl-3 pt-2 text-[#61896f] pointer-events-none"></i>
                            <input className='bg-[#f7f8f6] h-10 pl-9 pr-4 py-2 w-full rounded-lg border border-[#dbe6df] text-sm placeholder:text-[#61896f] focus:border-[#15ec5b] focus:outline-0 focus:ring-1 focus:ring-[#15ec5b] transition-all' type="text" placeholder='Search by name, email, or ID...' />
                            </div>

                            <div className='flex flex-wrap items-center gap-2 sm:gap-3 w-auto'>
                                <button className='px-4 py-2 rounded-lg bg-[#15ec5b]/10 text-[#61896f] text-sm font-bold whitespace-nowrap hover:bg-gray-50 transition-all flex items-center gap-2'>
                                    All Members
                                </button>

                                <button className='px-4 py-2 rounded-lg text-[#61896f] text-sm font-bold whitespace-nowrap hover:bg-[#15ec5b]/10 transition-all'>
                                    Active
                                </button>

                                <button className='px-4 py-2 rounded-lg text-[#61896f] text-sm font-bold whitespace-nowrap hover:bg-[#15ec5b]/10 transition-all'>
                                    Expired
                                </button>

                                <button className='px-4 py-2 rounded-lg text-[#e73109] text-sm font-bold whitespace-nowrap hover:bg-[#e73109]/10 transition-all'>
                                    At Risk
                                </button>
                            </div>
                        </div>

                        {/* Members Table */}
                        <div className='overflow-x-auto'>
                            <table className='w-full text-left border-collapse responsive-table'>
                            <thead className='bg-[#f7f8f6] text-[#61896f] text-xs font-semibold uppercase tracking-wider'>
                                <tr>
                                    <th className='px-6 py-4'>Member</th>
                                    <th className='px-6 py-4'>Status</th>
                                    <th className='px-6 py-4'>Attendance</th>
                                    <th className='px-6 py-4'>Last Visit</th>
                                    <th className='px-6 py-4'>Ends On</th>
                                    <th className='px-6 py-4 text-right'>Actions</th>
                                </tr>
                            </thead>

                            <tbody className='max-md:divide-y-0 divide-y divide-[#f0f4f2]'>
                                <tr className='hover:bg-[#f7f8f6] transitions-color group cursor-pointer'>
                                    <td className='px-6 py-4' data-label="Member">
                                        <div className='flex items-center gap-3'>
                                        <img className='size-10 rounded-full bg-gray-200 bg-center border border-[#dbe6df] object-cover' src={memberDp} alt="Member" />
                                        <div className='flex flex-col items-start'>
                                            <p className='text-sm font-semibold group-hover:text-[#15ec5b] transition-colors'>Eleanor Pena</p>
                                            <p className='text-xs text-[#61896f]'>eleanor.pena@example.com</p>
                                        </div>
                                        </div>
                                    </td>

                                    <td className='px-6 py-4' data-label="Status">
                                        <span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200 '>
                                        <span className='size-1.5 rounded-full bg-green-500'></span>
                                        Active
                                        </span>
                                    </td>

                                    <td className='px-6 py-4' data-label="Attendance">
                                        <div className='flex flex-col gap-1 w-24'>
                                            <div className='flex justify-between text-xs font-bold text-[#61896f]'>
                                                <span>92%</span>
                                            </div>
                                            <div className='h-1.5 w-full bg-gray-200 rounded-full overflow-hidden'>
                                                <div className='h-1.5 bg-green-400 rounded-full w-[92%]'></div>
                                            </div>
                                        </div>
                                    </td>

                                    <td className='px-6 py-4 text-sm' data-label="Last Visit">
                                        Oct 24, 2023
                                    </td>

                                    <td className='px-6 py-4 text-sm text-[#61896f]' data-label="Ends On">
                                        Dec 31, 2023
                                    </td>

                                    <td className='px-6 py-4 text-right' data-label="Actions">
                                        <div className='flex items-center justify-end gap-2 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity'>
                                            <button className='size-10 flex items-center justify-center rounded-lg border border-[#dbe6df] hover:bg-[#15ec5b] text-[#61896f] hover:text-white transition-all'>
                                                <i className="ri-eye-line text-[20px]"></i>
                                            </button>
                                            <button className='size-10 flex items-center justify-center rounded-lg border border-[#dbe6df] hover:bg-[#15ec5b] text-[#61896f] hover:text-white transition-all'>
                                                <i className="ri-check-line text-[20px]"></i>
                                            </button>
                                        </div>
                                    </td>
                                </tr>
                            </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        <div className='p-4 border-t border-[#dbe6df] flex items-center justify-between gap-4'>
                            <span className='text-sm text-[#61896f] '>
                            Showing
                            <span className='text-slate-900 font-medium'> 1-5 </span>
                            of
                            <span className='text-slate-900 font-medium'> 42 </span>
                            members
                            </span>

                            <div className='flex items-center gap-2'>
                                <button className='px-3 py-1.5 border border-[#dbe6df] rounded-md hover:bg-gray-50 text-sm font-semibold transition-colors opacity-50'>Previous</button>
                                <button className='px-3 py-1.5 border border-[#dbe6df] rounded-md hover:bg-gray-50 text-sm font-semibold transition-colors'>Next</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
    
            <div className='fixed top-20 bottom-0 right-0 z-30 w-full max-w-md shadow-xl'>
                <div className='bg-white h-full border-l border-[#dbe6df] flex flex-col overflow-hidden'>
                    {/* Header */}
                    <div className='w-full p-6 border-y border-[#dbe6df] flex items-start justify-between bg-[#f5f8f8] shrink-0'>
                        <div className='flex gap-4'>
                            <img className='size-16 rounded-full bg-cover bg-center bg-[#61896f] border-2 border-white shadow-lg object-cover' src={memberDp} alt="" />
                            <div className='flex flex-col items-start pt-1'>
                                <h3 className='text-xl font-bold leading-tight'>Michael Chen</h3>
                                <p className='text-sm text-[#61896f]'>Member since 2021</p>
                                <div className='flex items-center gap-2 mt-2'>
                                    <span className='inline-flex items-center px-2 py-0.5 bg-[#e73109]/10 rounded-lg text-[#e73109] text-[10px] font-bold uppercase tracking-wide'>At Risk</span>
                                    <span className='text-[10px] font-medium text-[#61896f]'>Standard Plan</span>
                                </div>
                            </div>
                        </div>
                        <button><i className="ri-close-fill text-[24px] text-[#61896f] hover:text-slate-900 cursor-pointer"></i></button>
                    </div> 

                    {/* Tabs */}
                    <div className='flex border-b border-[#dbe6df] shrink-0'>
                        <button className='flex-1 py-3 text-sm font-bold text-[#15ec5b] border-b-2 border-[#16ec5b]'>Overview</button>
                        <button className='flex-1 py-3 text-sm font-medium text-[#61896f] hover:text-slate-900 hover:bg-gray-100'>History</button>
                        <button className='flex-1 py-3 text-sm font-medium text-[#61896f] hover:text-slate-900 hover:bg-gray-100'>Notes</button>
                    </div>

                    {/* Content */}
                    <div className='flex-1 overflow-y-auto p-6 flex flex-col gap-6'>
                        <div className='grid grid-cols-2 gap-3'>
                            <button className='flex items-center justify-center gap-2 py-2.5 rounded-lg border border-[#dbe6df] hover:bg-gray-100 text-sm font-bold'>
                                <i className="ri-message-3-line text-[18px]"></i>
                                Message
                            </button>
                            <button className='flex items-center justify-center gap-2 py-2.5 rounded-lg bg-[#15ec5b] hover:bg-[#15ec5b]/90 text-sm font-bold shadow-lg shadow-[#15ec5b]/25'>
                                <i className="ri-checkbox-circle-line text-[18px]"></i>
                                Log Session
                            </button>
                        </div>

                        <div className='flex flex-col items-start gap-3'>
                            <h4 className='text-xs font-bold uppercase text-[#61896f] tracking-wider'>Contact Information</h4>
                            <div className='flex items-center gap-2 text-sm font-medium'>
                                <i className="ri-phone-line text-[16px] text-[#61896f]"></i>
                                +1 (555) 012-3456
                            </div>
                            <div className='flex items-center gap-2 text-sm font-medium'>
                                <i className="fa-regular fa-envelope text-[16px] text-[#61896f]"></i>
                                m.chen@example.com
                            </div>
                        </div>

                        <div className='flex flex-col gap-3'>
                            <div className='flex items-center justify-between'>
                                <h4 className='text-xs font-bold uppercase text-[#61896f] tracking-wider'>Recent Activity</h4>
                                <span className='text-xs text-[#e73109] font-bold tracking-tight'>Missed last 2 sessions</span>
                            </div>

                            <div className='bg-[#f5f8f8] rounded-xl p-4 border border-[#dbe6df] flex items-end gap-2 h-36'>
                                <div className='flex flex-col items-center gap-2 w-full group'>
                                    <div className='bg-[#cadadb] w-full h-10 rounded-t-md group-hover:bg-[#cadadb]/70'></div>
                                    <span className='text-[10px] text-[#61896f] font-medium uppercase'>Mon</span>
                                </div>

                                <div className='flex flex-col items-center gap-2 w-full group'>
                                    <div className='bg-[#cadadb] w-full h-20 rounded-t-md group-hover:bg-[#cadadb]/70'></div>
                                    <span className='text-[10px] text-[#61896f] font-medium uppercase'>Tue</span>
                                </div>

                                <div className='flex flex-col items-center gap-2 w-full group'>
                                    <div className='bg-[#cadadb] w-full h-7 rounded-t-md group-hover:bg-[#cadadb]/70'></div>
                                    <span className='text-[10px] text-[#61896f] font-medium uppercase'>Wed</span>
                                </div>

                                <div className='flex flex-col items-center gap-2 w-full group'>
                                    <div className='bg-[#cadadb] w-full h-21 rounded-t-md group-hover:bg-[#cadadb]/70'></div>
                                    <span className='text-[10px] text-[#61896f] font-medium uppercase'>Thu</span>
                                </div>

                                <div className='flex flex-col items-center gap-2 w-full group'>
                                    <div className='bg-[#e73109] w-full h-3 rounded-t-md group-hover:bg-[#e73109]/70'></div>
                                    <span className='text-[10px] text-[#61896f] font-medium uppercase'>Fri</span>
                                </div>

                                <div className='flex flex-col items-center gap-2 w-full group'>
                                    <div className='bg-[#e73109] w-full h-1 rounded-t-md group-hover:bg-[#e73109]/70'></div>
                                    <span className='text-[10px] text-[#61896f] font-medium uppercase'>Sat</span>
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col gap-3'>
                            <h4 className='text-xs font-bold uppercase text-[#61896f] tracking-wider'>Fitness Goals</h4>
                            <div className='flex flex-wrap gap-2'>
                                <span className='inline-flex px-3 py-1 rounded-full bg-[#f5f8f8] border border-[#dbe6df] text-xs font-medium'>Weight Loss</span>
                                <span className='inline-flex px-3 py-1 rounded-full bg-[#f5f8f8] border border-[#dbe6df] text-xs font-medium'>Cardio</span>
                                <span className='inline-flex px-3 py-1 rounded-full bg-[#f5f8f8] border border-[#dbe6df] text-xs font-medium'>Marathon Prep</span>
                            </div>
                        </div>

                        <div className='flex flex-col gap-3'>
                            <div className='flex items-center justify-between '>
                                <h4 className='text-xs font-bold uppercase text-[#61896f] tracking-wider'>Latest Note</h4>
                                <button className='text-[#15ec5b] text-xs font-bold hover:underline'>View All</button>
                            </div>

                            <div className='bg-yellow-50 rounded-xl p-4 border border-yellow-200 text-sm relative'>
                                <i className="fa-regular fa-note-sticky absolute top-3 right-3 text-yellow-400 text-[16px]"></i>
                                <p className='leading-relaxed mt-2'>"Client struggled with knee pain during squats today. Recommended rest and ice. Adjusted plan to focus on upper body for next session."</p>
                                <p className='text-xs font-medium text-[#61896f] mt-2'>- Added 3 days ago</p>
                            </div>

                            <div className='bg-yellow-50 rounded-xl p-4 border border-yellow-200 text-sm relative'>
                                <i className="fa-regular fa-note-sticky absolute top-3 right-3 text-yellow-400 text-[16px]"></i>
                                <p className='leading-relaxed mt-2'>"Client struggled with knee pain during squats today. Recommended rest and ice. Adjusted plan to focus on upper body for next session."</p>
                                <p className='text-xs font-medium text-[#61896f] mt-2'>- Added 3 days ago</p>
                            </div>
                        </div>
                    </div>

                    {/* Footer */}
                    <div className='p-4 border-t border-[#dbe6df] bg-[#f5f8f8] shrink-0'>
                        <button className='w-full flex items-center justify-center gap-2 py-2.5 rounded-lg bg-red-100 hover:bg-red-200 text-red-700 text-sm font-bold shadow-sm shadow-red-200/50'>
                            <i className="ri-flag-line"></i>
                            Report Issue
                        </button>
                    </div>
                </div>
            </div>
        </div>
        </ComingSoonWrapper>
    )
}

export default TrainerMemberManagement
