import React from 'react'
import navjot from '../../media/navjotImg.jpeg'

const TrainerMemberManagement = () => {
  return (
    <div className=''>
      <div className='flex-1 overflow-y-auto p-8 scroll-smooth'>
        <div className='max-w-300 mx-auto space-y-8 pb-10'>
            {/* Heading */}
            <div className='flex items-center justify-between gap-4'>
                <div className='flex flex-col items-start justify-center gap-2'>
                    <h1 className='text-4xl font-black tracking-tight'>My Members</h1>
                    <p className='text-[#61896f] text-base'>Monitor progress, attendance, and membership health.</p>
                </div>
                <div>
                    <button className='flex items-center gap-2 px-5 py-2.5 bg-[#15ec5b] rounded-lg hover:bg-green-500 font-bold shadow-lg shadow-[#15ec5b]/25 transition-all'>
                    <i class="ri-user-add-line text-[20px]"></i>
                    Add New Member
                    </button>
                </div>
            </div>

                {/* KPI Cards */}
            <div className='grid grid-cols-4 gap-6'>
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
                <div className='p-5 border-b border-[#f0f4f2] flex items-center justify-between gap-4'>
                    <div className='relative max-w-md w-full'>
                    <i class="ri-search-line absolute left-0 top-0 pl-3 pt-2 text-[#61896f] pointer-events-none"></i>
                    <input className='bg-[#f7f8f6] h-10 pl-9 pr-4 py-2 w-full rounded-lg border border-[#dbe6df] text-sm placeholder:text-[#61896f] focus:border-[#15ec5b] focus:outline-0 focus:ring-1 focus:ring-[#15ec5b] transition-all' type="text" placeholder='Search by name, email, or ID...' />
                    </div>

                    <div className='flex items-center gap-3 w-auto'>
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
                    <table className='w-full text-left border-collapse'>
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

                    <tbody className='divide-y divide-[#f0f4f2]'>
                        <tr className='hover:bg-[#f7f8f6] transitions-color group cursor-pointer'>
                            <td className='px-6 py-4'>
                                <div className='flex items-center gap-3'>
                                <img className='size-10 rounded-full bg-gray-200 bg-center border border-[#dbe6df] object-cover' src={navjot} alt="Navjot" />
                                <div className='flex flex-col items-start'>
                                    <p className='text-sm font-semibold group-hover:text-[#15ec5b] transition-colors'>Eleanor Pena</p>
                                    <p className='text-xs text-[#61896f]'>eleanor.pena@example.com</p>
                                </div>
                                </div>
                            </td>

                            <td className='px-6 py-4'>
                                <span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200 '>
                                <span className='size-1.5 rounded-full bg-green-500'></span>
                                Active
                                </span>
                            </td>

                            <td className='px-6 py-4'>
                                <div className='flex flex-col gap-1 w-24'>
                                    <div className='flex justify-between text-xs font-bold text-[#61896f]'>
                                        <span>92%</span>
                                    </div>
                                    <div className='h-1.5 w-full bg-gray-200 rounded-full overflow-hidden'>
                                        <div className='h-1.5 bg-green-400 rounded-full w-[92%]'></div>
                                    </div>
                                </div>
                            </td>

                            <td className='px-6 py-4 text-sm'>
                                Oct 24, 2023
                            </td>

                            <td className='px-6 py-4 text-sm text-[#61896f]'>
                                Dec 31, 2023
                            </td>

                            <td className='px-6 py-4 text-right'>
                                <div className='flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity'>
                                    <button className='size-10 flex items-center justify-center rounded-lg border border-[#dbe6df] hover:bg-[#15ec5b] text-[#61896f] hover:text-white transition-all'>
                                        <i class="ri-eye-line text-[20px]"></i>
                                    </button>
                                    <button className='size-10 flex items-center justify-center rounded-lg border border-[#dbe6df] hover:bg-[#15ec5b] text-[#61896f] hover:text-white transition-all'>
                                        <i class="ri-check-line text-[20px]"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr className='hover:bg-[#f7f8f6] transitions-color group cursor-pointer'>
                            <td className='px-6 py-4'>
                                <div className='flex items-center gap-3'>
                                <img className='size-10 rounded-full bg-gray-200 bg-center border border-[#dbe6df] object-cover' src={navjot} alt="Navjot" />
                                <div className='flex flex-col items-start'>
                                    <p className='text-sm font-semibold group-hover:text-[#15ec5b] transition-colors'>Michael Chen</p>
                                    <p className='text-xs text-[#61896f]'>m.chen@example.com</p>
                                </div>
                                </div>
                            </td>

                            <td className='px-6 py-4'>
                                <span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-yellow-100 text-yellow-700 border border-yellow-200 '>
                                <span className='size-1.5 rounded-full bg-yellow-500'></span>
                                Review
                                </span>
                            </td>

                            <td className='px-6 py-4'>
                                <div className='flex flex-col gap-1 w-24'>
                                    <div className='flex justify-between text-xs font-bold text-[#61896f]'>
                                        <span>45%</span>
                                    </div>
                                    <div className='h-1.5 w-full bg-gray-200 rounded-full overflow-hidden'>
                                        <div className='h-1.5 bg-yellow-400 rounded-full w-[45%]'></div>
                                    </div>
                                </div>
                            </td>

                            <td className='px-6 py-4 text-sm'>
                                Oct 18, 2023
                            </td>

                            <td className='px-6 py-4 text-sm text-[#61896f]'>
                                Nov 15, 2023
                            </td>

                            <td className='px-6 py-4 text-right'>
                                <div className='flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity'>
                                    <button className='size-10 flex items-center justify-center rounded-lg border border-[#dbe6df] hover:bg-[#15ec5b] text-[#61896f] hover:text-white transition-all'>
                                        <i class="ri-eye-line text-[20px]"></i>
                                    </button>
                                    <button className='size-10 flex items-center justify-center rounded-lg border border-[#dbe6df] hover:bg-[#15ec5b] text-[#61896f] hover:text-white transition-all'>
                                        <i class="ri-check-line text-[20px]"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr className='hover:bg-[#f7f8f6] transitions-color group cursor-pointer'>
                            <td className='px-6 py-4'>
                                <div className='flex items-center gap-3'>
                                <img className='size-10 rounded-full bg-gray-200 bg-center border border-[#dbe6df] object-cover' src={navjot} alt="Navjot" />
                                <div className='flex flex-col items-start'>
                                    <p className='text-sm font-semibold group-hover:text-[#15ec5b] transition-colors'>Emma Wilson</p>
                                    <p className='text-xs text-[#61896f]'>emma.w@example.com</p>
                                </div>
                                </div>
                            </td>

                            <td className='px-6 py-4'>
                                <span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700 border border-red-200 '>
                                <span className='size-1.5 rounded-full bg-red-500'></span>
                                Expired
                                </span>
                            </td>

                            <td className='px-6 py-4'>
                                <div className='flex flex-col gap-1 w-24'>
                                    <div className='flex justify-between text-xs font-bold text-[#61896f]'>
                                        <span>12%</span>
                                    </div>
                                    <div className='h-1.5 w-full bg-gray-200 rounded-full overflow-hidden'>
                                        <div className='h-1.5 bg-red-400 rounded-full w-[12%]'></div>
                                    </div>
                                </div>
                            </td>

                            <td className='px-6 py-4 text-sm'>
                                Sep 2, 2023
                            </td>

                            <td className='px-6 py-4 text-sm text-[#61896f]'>
                                Oct 1, 2023
                            </td>

                            <td className='px-6 py-4 text-right'>
                                <div className='flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity'>
                                    <button className='size-10 flex items-center justify-center rounded-lg border border-[#dbe6df] hover:bg-[#15ec5b] text-[#61896f] hover:text-white transition-all'>
                                        <i class="ri-eye-line text-[20px]"></i>
                                    </button>
                                    <button className='size-10 flex items-center justify-center rounded-lg border border-[#dbe6df] hover:bg-[#15ec5b] text-[#61896f] hover:text-white transition-all'>
                                        <i class="ri-check-line text-[20px]"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr className='hover:bg-[#f7f8f6] transitions-color group cursor-pointer'>
                            <td className='px-6 py-4'>
                                <div className='flex items-center gap-3'>
                                <img className='size-10 rounded-full bg-gray-200 bg-center border border-[#dbe6df] object-cover' src={navjot} alt="Navjot" />
                                <div className='flex flex-col items-start'>
                                    <p className='text-sm font-semibold group-hover:text-[#15ec5b] transition-colors'>John Doe</p>
                                    <p className='text-xs text-[#61896f]'>john.doe@example.com</p>
                                </div>
                                </div>
                            </td>

                            <td className='px-6 py-4'>
                                <span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200 '>
                                <span className='size-1.5 rounded-full bg-green-500'></span>
                                Active
                                </span>
                            </td>

                            <td className='px-6 py-4'>
                                <div className='flex flex-col gap-1 w-24'>
                                    <div className='flex justify-between text-xs font-bold text-[#61896f]'>
                                        <span>79%</span>
                                    </div>
                                    <div className='h-1.5 w-full bg-gray-200 rounded-full overflow-hidden'>
                                        <div className='h-1.5 bg-green-400 rounded-full w-[79%]'></div>
                                    </div>
                                </div>
                            </td>

                            <td className='px-6 py-4 text-sm'>
                                Oct 23, 2023
                            </td>

                            <td className='px-6 py-4 text-sm text-[#61896f]'>
                                Jan 15, 2024
                            </td>

                            <td className='px-6 py-4 text-right'>
                                <div className='flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity'>
                                    <button className='size-10 flex items-center justify-center rounded-lg border border-[#dbe6df] hover:bg-[#15ec5b] text-[#61896f] hover:text-white transition-all'>
                                        <i class="ri-eye-line text-[20px]"></i>
                                    </button>
                                    <button className='size-10 flex items-center justify-center rounded-lg border border-[#dbe6df] hover:bg-[#15ec5b] text-[#61896f] hover:text-white transition-all'>
                                        <i class="ri-check-line text-[20px]"></i>
                                    </button>
                                </div>
                            </td>
                        </tr>

                        <tr className='hover:bg-[#f7f8f6] transitions-color group cursor-pointer'>
                            <td className='px-6 py-4'>
                                <div className='flex items-center gap-3'>
                                <img className='size-10 rounded-full bg-gray-200 bg-center border border-[#dbe6df] object-cover' src={navjot} alt="Navjot" />
                                <div className='flex flex-col items-start'>
                                    <p className='text-sm font-semibold group-hover:text-[#15ec5b] transition-colors'>Alice Smith</p>
                                    <p className='text-xs text-[#61896f]'>alice.s@example.com</p>
                                </div>
                                </div>
                            </td>

                            <td className='px-6 py-4'>
                                <span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200 '>
                                <span className='size-1.5 rounded-full bg-green-500'></span>
                                Active
                                </span>
                            </td>

                            <td className='px-6 py-4'>
                                <div className='flex flex-col gap-1 w-24'>
                                    <div className='flex justify-between text-xs font-bold text-[#61896f]'>
                                        <span>88%</span>
                                    </div>
                                    <div className='h-1.5 w-full bg-gray-200 rounded-full overflow-hidden'>
                                        <div className='h-1.5 bg-green-400 rounded-full w-[88%]'></div>
                                    </div>
                                </div>
                            </td>

                            <td className='px-6 py-4 text-sm'>
                                Oct 21, 2023
                            </td>

                            <td className='px-6 py-4 text-sm text-[#61896f]'>
                                Feb 18, 2024
                            </td>

                            <td className='px-6 py-4 text-right'>
                                <div className='flex items-center justify-end gap-2 opacity-0 group-hover:opacity-100 transition-opacity'>
                                    <button className='size-10 flex items-center justify-center rounded-lg border border-[#dbe6df] hover:bg-[#15ec5b] text-[#61896f] hover:text-white transition-all'>
                                        <i class="ri-eye-line text-[20px]"></i>
                                    </button>
                                    <button className='size-10 flex items-center justify-center rounded-lg border border-[#dbe6df] hover:bg-[#15ec5b] text-[#61896f] hover:text-white transition-all'>
                                        <i class="ri-check-line text-[20px]"></i>
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
    </div>
  )
}

export default TrainerMemberManagement
