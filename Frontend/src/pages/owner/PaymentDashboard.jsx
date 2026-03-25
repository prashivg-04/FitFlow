import React, { useState } from 'react'
import OwnerHeader from '../../components/owner/OwnerHeader'
import navjot from '../../media/navjotImg.jpeg'
import ComingSoonWrapper from '../../components/ComingSoonWrapper';

const PaymentDashboard = () => {

  const [activeTab, setActiveTab] = useState('monthly');

  return (
    <ComingSoonWrapper>
    <div className=''>
      <div className='flex-1 overflow-y-auto p-8 scroll-smooth'>
        <div className='max-w-300 mx-auto space-y-8 pb-10'>
          {/* Heading */}
          <div className='flex items-center justify-between gap-4'>
            <div className='flex flex-col items-start justify-center gap-2'>
              <h1 className='text-4xl font-black tracking-tight'>Payments & Billing</h1>
              <p className='text-[#61896f] text-base'>View payment history, manage invoices, and keep track of your gym’s revenue in one place..</p>
            </div>
            <div>
              <button className='flex items-center gap-2 px-5 py-2.5 bg-[#15ec5b] rounded-lg hover:bg-green-500 font-bold shadow-lg shadow-[#15ec5b]/25 transition-all'>
                <i class="ri-add-line text-[20px]"></i>
                Add Payment
              </button>
            </div>
          </div>

          {/* KPI Cards */}
          <div className='grid grid-cols-3 gap-6'>
            <div className='bg-white p-6 rounded-lg border border-[#dbe6df] shadow-sm hover:shadow-md flex flex-col justify-between gap-3 relative overflow-hidden group'>
              <div className='absolute h-full w-1 top-0 right-0 bg-green-400'></div>
              <div className='absolute top-5 right-5 p-1.5 rounded-lg bg-green-100 transition-all'>
                <i className='fa-solid fa-dollar-sign text-green-700 text-xl'></i>
              </div>
              <span className='text-[#61896f] font-medium z-10'>Total Revenue (This Month)</span>
              <span className='text-3xl font-bold'>$12,450</span>
              <span className='text-sm font-semibold text-green-600 px-2 py-0.5 rounded-full flex items-center gap-1'>
                <i class="fa-solid fa-arrow-trend-up"></i>
                +12% vs last month
              </span>
            </div>

            <div className='bg-white p-6 rounded-lg border border-[#dbe6df] shadow-sm hover:shadow-md flex flex-col justify-between gap-3 relative overflow-hidden group'>
              <div className='absolute h-full w-1 top-0 right-0 bg-amber-400'></div>
              <div className='absolute top-5 right-5 p-1.5 rounded-lg bg-amber-100 transition-all'>
                <i className='ri-calendar-schedule-line text-amber-700 text-xl'></i>
              </div>
              <span className='text-[#61896f] font-medium z-10'>Pending Payments</span>
              <span className='text-3xl font-bold'>$840</span>
              <span className='text-sm font-semibold text-amber-600 px-2 py-0.5 rounded-full flex items-center gap-1 group-hover:underline cursor-pointer'>
                View details
                <i class="fa-solid fa-arrow-right text-sm"></i>
              </span>
            </div>

            <div className='bg-white p-6 rounded-lg border border-[#dbe6df] shadow-sm hover:shadow-md flex flex-col justify-between gap-3 relative overflow-hidden group'>
              <div className='absolute h-full w-1 top-0 right-0 bg-red-400'></div>
              <div className='absolute top-5 right-5 p-1.5 rounded-lg bg-red-100 transition-all'>
                <i className='ri-error-warning-line text-red-700 text-xl'></i>
              </div>
              <span className='text-[#61896f] font-medium z-10'>Failed Transactions</span>
              <span className='text-3xl font-bold'>3</span>
              <span className='text-sm font-semibold text-red-600 px-2 py-0.5 rounded-full flex items-center gap-1'>
                Action required
              </span>
            </div>
          </div>
          
          {/* Revenue Chart */}
          <div className='p-6 rounded-xl bg-white border border-[#dbe6df] shadow-sm flex flex-col'>
            <div className='flex items-center justify-between mb-6'>
              <div>
                <h3 className='text-lg font-bold'>Revenue Overview</h3>
                <p className='text-sm text-[#61896f]'>Income vs Expenses over last 6 months</p>
              </div>
              <div className='relative flex items-center gap-2 bg-[#f7f8f6] p-1 rounded-lg border border-[#dbe6df]'>
                {/* window */}
                <div 
                  className='absolute  h-[calc(100%-8px)] w-[calc(50%-4px)] bg-white z-10 shadow-sm rounded transition-all duration-300 ease-in-out top-1'
                  style={{
                    left: activeTab === 'monthly' ? '4px' : 'calc(50% + 4px)'
                  }}
                />

                {/* Buttons */}
                <button 
                  onClick={() => setActiveTab('monthly')}
                  className={`relative z-10 flex-1 px-3 py-1 text-xs font-semibold rounded cursor-pointer transition-colors ${
                    activeTab === 'monthly' ? 'text-slate-900' : 'text-slate-500'
                  }`}
                >
                  Monthly
                </button>
                
                <button 
                  onClick={() => setActiveTab('weekly')}
                  className={`relative z-10 flex-1 px-3 py-1 text-xs font-semibold rounded cursor-pointer transition-colors ${
                    activeTab === 'weekly' ? 'text-slate-900' : 'text-slate-500'
                  }`}
                >
                  Weekly
                </button>
              </div>
            </div>

            {/* Temporary Basis */}
            <div className='relative w-full aspect-3/1 max-h-75 min-h-50'>
              <svg className='w-full h-full' fill='none' preserveAspectRatio='none' viewBox='0 0 478 150' xmlns='http://www.w3.org/2000/svg'>
                <defs>
                  <linearGradient gradientUnits='userSpaceOnUse' id='chartGradient' x1='236' x2='236' y1='1' y2='149'>
                    <stop stopColor='#13ec5b' stopOpacity='0.2' />
                    <stop offset='1' stopColor='#13ec5b' stopOpacity='0' />
                  </linearGradient>
                </defs>
                
                {/* Fill Area */}
                <path 
                  d='M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25V149H326.769H0V109Z' 
                  fill='url(#chartGradient)' 
                />
                
                {/* Chart Line */}
                <path 
                  d='M0 109C18.1538 109 18.1538 21 36.3077 21C54.4615 21 54.4615 41 72.6154 41C90.7692 41 90.7692 93 108.923 93C127.077 93 127.077 33 145.231 33C163.385 33 163.385 101 181.538 101C199.692 101 199.692 61 217.846 61C236 61 236 45 254.154 45C272.308 45 272.308 121 290.462 121C308.615 121 308.615 149 326.769 149C344.923 149 344.923 1 363.077 1C381.231 1 381.231 81 399.385 81C417.538 81 417.538 129 435.692 129C453.846 129 453.846 25 472 25' 
                  stroke='#13ec5b' 
                  strokeLinecap='round' 
                  strokeWidth='3' 
                />
              </svg>
            </div>

            <div className='flex justify-between mt-3 text-xs font-semibold text-[#61896f] px-2'>
              <span>May</span>
              <span>Jun</span>
              <span>Jul</span>
              <span>Aug</span>
              <span>Sep</span>
              <span>Oct</span>
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
                <button className='px-3 py-1 border border-[#dbe6df] rounded-lg hover:bg-gray-50 transition-all flex items-center gap-2'>
                  <i class="ri-filter-3-line text-xl"></i>
                  Filters
                </button>

                <button className='px-3 py-1 border border-[#dbe6df] rounded-lg hover:bg-gray-50 transition-all flex items-center gap-2'>
                  <i class="fa-regular fa-calendar"></i>
                  Oct 1 - Oct 31
                </button>

                <button className='px-3 py-2 text-[#15ec5b] text-sm font-bold border border-[#dbe6df] rounded-lg hover:bg-gray-50 transition-all flex items-center gap-2'>
                  <i class="fa-solid fa-download"></i>
                  Export CSV
                </button>
              </div>
            </div>

            {/* Members Table */}
            <div className='overflow-x-auto'>
              <table className='w-full text-left border-collapse'>
                <thead className='bg-[#f7f8f6] text-[#61896f] text-xs font-semibold uppercase tracking-wider'>
                  <tr>
                    <th className='px-6 py-4'>Member</th>
                    <th className='px-6 py-4'>Date</th>
                    <th className='px-6 py-4'>Plan / Description</th>
                    <th className='px-6 py-4'>Amount</th>
                    <th className='px-6 py-4'>Status</th>
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
                          <p className='text-xs text-[#61896f]'>ID: #4321</p>
                        </div>
                      </div>
                    </td>

                    <td className='px-6 py-4 text-sm text-slate-600'>
                      Oct 24, 2023
                    </td>

                    <td className='px-6 py-4 text-sm text-slate-600'>
                      Gold Monthly Membership
                    </td>

                    <td className='px-6 py-4 text-sm text-slate-900 font-medium font-mono'>
                      $50.00
                    </td>

                    <td className='px-6 py-4'>
                      <span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 border border-green-200 '>
                        <span className='size-1.5 rounded-full bg-green-500'></span>
                        Paid
                      </span>
                    </td>

                    <td className='px-6 py-4 text-right'>
                      <button className='text-[#61896f] hover:text-[#15ec5b] p-1.5 rounded-lg transition-all'>
                        <i class="fa-solid fa-ellipsis-vertical text-[20px]"></i>
                      </button>
                    </td>
                  </tr>

                  <tr className='hover:bg-[#f7f8f6] transitions-color group cursor-pointer'>
                    <td className='px-6 py-4'>
                      <div className='flex items-center gap-3'>
                        <img className='size-10 rounded-full bg-gray-200 bg-center border border-[#dbe6df] object-cover' src={navjot} alt="Navjot" />
                        <div className='flex flex-col items-start'>
                          <p className='text-sm font-semibold group-hover:text-[#15ec5b] transition-colors'>Eleanor Pena</p>
                          <p className='text-xs text-[#61896f]'>ID: #4321</p>
                        </div>
                      </div>
                    </td>

                    <td className='px-6 py-4 text-sm text-slate-600'>
                      Oct 24, 2023
                    </td>

                    <td className='px-6 py-4 text-sm text-slate-600'>
                      Personal Training (5 Pack)
                    </td>

                    <td className='px-6 py-4 text-sm text-slate-900 font-medium font-mono'>
                      $250.00
                    </td>

                    <td className='px-6 py-4'>
                      <span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 border border-green-200 '>
                        <span className='size-1.5 rounded-full bg-green-500'></span>
                        Paid
                      </span>
                    </td>

                    <td className='px-6 py-4 text-right'>
                      <button className='text-[#61896f] hover:text-[#15ec5b] p-1.5 rounded-lg transition-all'>
                        <i class="fa-solid fa-ellipsis-vertical text-[20px]"></i>
                      </button>
                    </td>
                  </tr>

                  <tr className='hover:bg-[#f7f8f6] transitions-color group cursor-pointer'>
                    <td className='px-6 py-4'>
                      <div className='flex items-center gap-3'>
                        <img className='size-10 rounded-full bg-gray-200 bg-center border border-[#dbe6df] object-cover' src={navjot} alt="Navjot" />
                        <div className='flex flex-col items-start'>
                          <p className='text-sm font-semibold group-hover:text-[#15ec5b] transition-colors'>Eleanor Pena</p>
                          <p className='text-xs text-[#61896f]'>ID: #4321</p>
                        </div>
                      </div>
                    </td>

                    <td className='px-6 py-4 text-sm text-slate-600'>
                      Oct 24, 2023
                    </td>

                    <td className='px-6 py-4 text-sm text-slate-600'>
                      Silver Membership
                    </td>

                    <td className='px-6 py-4 text-sm text-slate-900 font-medium font-mono'>
                      $35.00
                    </td>

                    <td className='px-6 py-4'>
                      <span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-yellow-100 text-yellow-700 border border-yellow-200 '>
                        <span className='size-1.5 rounded-full bg-yellow-500'></span>
                        Pending
                      </span>
                    </td>

                    <td className='px-6 py-4 text-right'>
                      <button className='text-green-600 hover:text-green-800 text-sm font-bold mr-2'>Remind</button>
                      <button className='text-[#61896f] hover:text-[#15ec5b] p-1.5 rounded-lg transition-all'>
                        <i class="fa-solid fa-ellipsis-vertical text-[20px]"></i>
                      </button>
                    </td>
                  </tr>

                  <tr className='hover:bg-[#f7f8f6] transitions-color group cursor-pointer'>
                    <td className='px-6 py-4'>
                      <div className='flex items-center gap-3'>
                        <img className='size-10 rounded-full bg-gray-200 bg-center border border-[#dbe6df] object-cover' src={navjot} alt="Navjot" />
                        <div className='flex flex-col items-start'>
                          <p className='text-sm font-semibold group-hover:text-[#15ec5b] transition-colors'>Eleanor Pena</p>
                          <p className='text-xs text-[#61896f]'>ID: #4321</p>
                        </div>
                      </div>
                    </td>

                    <td className='px-6 py-4 text-sm text-slate-600'>
                      Oct 24, 2023
                    </td>

                    <td className='px-6 py-4 text-sm text-slate-600'>
                      Drop-in Classes
                    </td>

                    <td className='px-6 py-4 text-sm text-slate-900 font-medium font-mono'>
                      $20.00
                    </td>

                    <td className='px-6 py-4'>
                      <span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700 border border-red-200 '>
                        <span className='size-1.5 rounded-full bg-red-500'></span>
                        Failed
                      </span>
                    </td>

                    <td className='px-6 py-4 text-right'>
                      <button className='text-red-600 hover:text-red-800 text-sm font-bold mr-2'>Retry</button>
                      <button className='text-[#61896f] hover:text-[#15ec5b] p-1.5 rounded-lg transition-all'>
                        <i class="fa-solid fa-ellipsis-vertical text-[20px]"></i>
                      </button>
                    </td>
                  </tr>

                  <tr className='hover:bg-[#f7f8f6] transitions-color group cursor-pointer'>
                    <td className='px-6 py-4'>
                      <div className='flex items-center gap-3'>
                        <img className='size-10 rounded-full bg-gray-200 bg-center border border-[#dbe6df] object-cover' src={navjot} alt="Navjot" />
                        <div className='flex flex-col items-start'>
                          <p className='text-sm font-semibold group-hover:text-[#15ec5b] transition-colors'>Eleanor Pena</p>
                          <p className='text-xs text-[#61896f]'>ID: #4321</p>
                        </div>
                      </div>
                    </td>

                    <td className='px-6 py-4 text-sm text-slate-600'>
                      Oct 24, 2023
                    </td>

                    <td className='px-6 py-4 text-sm text-slate-600'>
                      Platinum Membership
                    </td>

                    <td className='px-6 py-4 text-sm text-slate-900 font-medium font-mono'>
                      $800.00
                    </td>

                    <td className='px-6 py-4'>
                      <span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-bold bg-green-100 text-green-700 border border-green-200 '>
                        <span className='size-1.5 rounded-full bg-green-500'></span>
                        Active
                      </span>
                    </td>

                    <td className='px-6 py-4 text-right'>
                      <button className='text-[#61896f] hover:text-[#15ec5b] p-1.5 rounded-lg transition-all'>
                        <i class="fa-solid fa-ellipsis-vertical text-[20px]"></i>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* Pagination */}
            <div className='p-4 border-t border-[#dbe6df] flex items-center justify-between gap-4'>
              <span className='text-sm text-[#61896f] '>
                Showing
                <span className='text-slate-900 font-bold'> 1-5 </span>
                of
                <span className='text-slate-900 font-bold'> 42 </span>
                members
              </span>

              <div className='flex items-center gap-2'>
                <button className='px-3 py-1.5 border border-[#dbe6df] rounded-md hover:bg-gray-50 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors disabled:opacity-50'>
                  <i class="ri-arrow-left-s-fill"></i>
                </button>
                <button className='px-3 py-1.5 border border-[#dbe6df] rounded-md hover:bg-gray-50 text-sm font-semibold text-slate-500 hover:text-slate-900 transition-colors'>
                  <i class="ri-arrow-right-s-fill"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </ComingSoonWrapper>
  )
}

export default PaymentDashboard
