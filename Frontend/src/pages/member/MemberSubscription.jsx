import React from 'react'
import navjot from '../../media/navjotImg.jpeg'

const MemberSubscription = () => {
  return (
    <div className='flex-1 overflow-y-auto p-8 scroll-smooth'>
      <div className='max-w-7xl mx-auto space-y-8'>
        {/* Heading */}
        <div className='flex items-center justify-between gap-4'>
          <div className='flex flex-col items-start'>
            <h1 className='text-4xl font-bold tracking-tight'>Your Subscription</h1>
            <p className='text-[#61896f] text-lg mt-1'>Manage your plan details, payment methods, and billing history.</p>
          </div>
          <div className='flex items-end gap-2'>
            <button className='flex items-center gap-2 px-4 py-2 bg-white border border-[#dbe6df] rounded-xl text-sm font-semibold hover:bg-slate-50'>
              Pause Membership
            </button>

            <button className='flex items-center gap-2 px-4 py-2 bg-[#15ec5b] rounded-xl text-sm font-semibold hover:bg-[#0fd651]'>
              <i className='ri-upload-line text-[18px]'></i>
              Upgrade Plan
            </button>
          </div>
        </div>

        {/* KPI Cards */}
        <div className='grid grid-cols-3 gap-4'>
          <div className='bg-white rounded-xl p-6 border border-[#dbe6df] shadow-sm hover:shadow-md transition-shadow relative group flex flex-col gap-1 overflow-hidden'>
            <div className='flex items-start justify-between mb-4'>
              <div className='flex flex-col gap-1'>
                <p className='text-sm font-medium text-[#61896f]'>Current Plan</p>
                <h3 className='text-xl font-bold'>Gold Access</h3>
              </div>
              <span className='inline-flex items-center justify-center px-2 py-1 rounded-full bg-green-100 text-green-700 text-xs font-bold'>Active</span>
            </div>
            <div className='flex items-end justify-between'>
              <p className='text-2xl font-bold font-mono'>
                $59
                <span className='text-sm font-medium text-[#61896f]'>/mo</span>
              </p>
              <a className='text-sm font-semibold text-[#15ec5b] hover:underline' href="">View benefits</a>
            </div>
          </div>

          <div className='bg-white rounded-xl p-6 border border-[#dbe6df] shadow-sm hover:shadow-md transition-shadow relative group flex flex-col gap-1 overflow-hidden'>
            <div className='flex items-start justify-between mb-4'>
              <div className='flex flex-col gap-1'>
                <p className='text-sm font-medium text-[#61896f]'>Next Billing Date</p>
                <h3 className='text-xl font-bold'>Oct 24, 2023</h3>
              </div>
              <span className='inline-flex items-center justify-center p-2 rounded-lg bg-slate-50 text-[#61896f] text-xs font-bold'>
                <i className="fa-regular fa-calendar text-[20px]"></i>
              </span>
            </div>
            <div className='flex items-end justify-between mt-3'>
              <p className='text-sm text-[#61896f]'>Auto-renewal is on</p>
              <span className='text-sm font-medium font-mono'>14 days left</span>
            </div>
          </div>

          <div className='bg-white rounded-xl p-6 border border-[#dbe6df] shadow-sm hover:shadow-md transition-shadow relative group flex flex-col gap-1 overflow-hidden'>
            <div className='flex items-start justify-between mb-4'>
              <div className='flex flex-col gap-1'>
                <p className='text-sm font-medium text-[#61896f]'>Payment Method</p>
                <h3 className='text-xl font-bold'>Visa •••• 4242</h3>
              </div>
              <span className='inline-flex items-center justify-center p-2 rounded-lg bg-slate-50 text-[#61896f] text-xs font-bold'>
                <i class="fa-regular fa-credit-card text-[20px]"></i>
              </span>
            </div>
            <div className='flex items-end justify-between'>
              <p className='text-sm text-[#61896f]'>Expires 12/25</p>
              <button className='text-sm font-bold px-3 py-1 border border-[#dbe6df] rounded hover:bg-gray-50 transition-colors'>Update</button>
            </div>
          </div>
        </div>

        {/* Payment History Table */}
        <div className='bg-white border border-[#dbe6df] rounded-xl shadow-soft overflow-hidden flex flex-col'>
          {/* Toolbar */}
          <div className='p-5 border-b border-[#f0f4f2] flex items-center justify-between gap-4'>
            <h2 className='text-2xl font-bold'>Payment History</h2>
            <div className='flex items-center gap-3 w-auto'>
              <div className='relative'>
                <i class="ri-filter-3-line absolute left-2 top-1/2 transform -translate-y-1/2 text-xl"></i>
                <select className='appearance-none pl-10 pr-8 py-1 border border-[#dbe6df] rounded-lg hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-[#15ec5b] cursor-pointer transition-all'>
                  <option>All Time</option>
                  <option>This Year</option>
                  <option>Last Year</option>
                </select>
                <i class='ri-arrow-down-s-line absolute right-2 top-1/2 transform -translate-y-1/2 text-xl pointer-events-none'></i>
              </div>

              <button className='px-3 py-1 border border-[#dbe6df] rounded-lg hover:bg-gray-50 transition-all flex items-center gap-2'>
                <i class="fa-solid fa-download text-xl"></i>
                Export
              </button>
            </div>
          </div>

          {/* Members Table */}
          <div className='overflow-x-auto'>
            <table className='w-full text-left border-collapse'>
              <thead className='bg-[#f7f8f6] text-[#61896f] text-xs font-semibold uppercase tracking-wider'>
                <tr>
                  <th className='px-6 py-4'>Date</th>
                  <th className='px-6 py-4'>Description</th>
                  <th className='px-6 py-4'>Amount</th>
                  <th className='px-6 py-4'>Status</th>
                  <th className='px-6 py-4 text-right'>Invoice</th>
                </tr>
              </thead>

              <tbody className='divide-y divide-[#f0f4f2]'>
                <tr className='hover:bg-[#f7f8f6] transitions-color group cursor-pointer'>
                  <td className='px-6 py-4 text-sm font-medium text-[#334e3c]'>
                    Oct 24, 2023
                  </td>

                  <td className='px-6 py-4'>
                    <div className='flex flex-col'>
                      <span className='text-sm font-medium text-[#334e3c]'>Monthly Subscription - Gold</span>
                      <span className='text-xs text-[#61896f]'>Ref: #INV-2023-001</span>
                    </div>
                  </td>

                  <td className='px-6 py-4 text-sm font-medium font-mono text-[#334e3c]'>
                    $59.00
                  </td>
                  

                  <td className='px-6 py-4'>
                    <span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200 '>
                      <span className='size-1.5 rounded-full bg-green-500'></span>
                      Paid
                    </span>
                  </td>

                  <td className='px-6 py-4 text-right'>
                    <button className='text-[#61896f] hover:text-[#15ec5b] p-1.5 rounded-lg transition-all'>
                      <i class="fa-regular fa-file-lines text-[20px]"></i>
                    </button>
                  </td>
                </tr>

                <tr className='hover:bg-[#f7f8f6] transitions-color group cursor-pointer'>
                  <td className='px-6 py-4 text-sm font-medium text-[#334e3c]'>
                    Sep 24, 2023
                  </td>

                  <td className='px-6 py-4'>
                    <div className='flex flex-col'>
                      <span className='text-sm font-medium text-[#334e3c]'>Monthly Subscription - Gold</span>
                      <span className='text-xs text-[#61896f]'>Ref: #INV-2023-002</span>
                    </div>
                  </td>

                  <td className='px-6 py-4 text-sm font-medium font-mono text-[#334e3c]'>
                    $59.00
                  </td>
                  

                  <td className='px-6 py-4'>
                    <span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200 '>
                      <span className='size-1.5 rounded-full bg-green-500'></span>
                      Paid
                    </span>
                  </td>

                  <td className='px-6 py-4 text-right'>
                    <button className='text-[#61896f] hover:text-[#15ec5b] p-1.5 rounded-lg transition-all'>
                      <i class="fa-regular fa-file-lines text-[20px]"></i>
                    </button>
                  </td>
                </tr>

                <tr className='hover:bg-[#f7f8f6] transitions-color group cursor-pointer'>
                  <td className='px-6 py-4 text-sm font-medium text-[#334e3c]'>
                    Aug 24, 2023
                  </td>

                  <td className='px-6 py-4'>
                    <div className='flex flex-col'>
                      <span className='text-sm font-medium text-[#334e3c]'>Monthly Subscription - Gold</span>
                      <span className='text-xs text-[#61896f]'>Ref: #INV-2023-003</span>
                    </div>
                  </td>

                  <td className='px-6 py-4 text-sm font-medium font-mono text-[#334e3c]'>
                    $59.00
                  </td>
                  

                  <td className='px-6 py-4'>
                    <span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200 '>
                      <span className='size-1.5 rounded-full bg-green-500'></span>
                      Paid
                    </span>
                  </td>

                  <td className='px-6 py-4 text-right'>
                    <button className='text-[#61896f] hover:text-[#15ec5b] p-1.5 rounded-lg transition-all'>
                      <i class="fa-regular fa-file-lines text-[20px]"></i>
                    </button>
                  </td>
                </tr>

                <tr className='hover:bg-[#f7f8f6] transitions-color group cursor-pointer'>
                  <td className='px-6 py-4 text-sm font-medium text-[#334e3c]'>
                    Jul 10, 2023
                  </td>

                  <td className='px-6 py-4'>
                    <div className='flex flex-col'>
                      <span className='text-sm font-medium text-[#334e3c]'>Personal Training (1hr)</span>
                      <span className='text-xs text-[#61896f]'>Add-on Service</span>
                    </div>
                  </td>

                  <td className='px-6 py-4 text-sm font-medium font-mono text-[#334e3c]'>
                    $45.00
                  </td>
                  

                  <td className='px-6 py-4'>
                    <span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-gray-100 text-gray-700 border border-gray-200 '>
                      <span className='size-1.5 rounded-full bg-gray-500'></span>
                      Refunded
                    </span>
                  </td>

                  <td className='px-6 py-4 text-right'>
                    <button className='text-[#61896f] hover:text-[#15ec5b] p-1.5 rounded-lg transition-all'>
                      <i class="fa-regular fa-file-lines text-[20px]"></i>
                    </button>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className='px-6 py-4  border-t border-[#dbe6df] flex items-center justify-center gap-4'>
            <button className='text-sm font-bold text-[#15ec5b] hover:underline transition'>View all transactions</button>
          </div>
        </div>

        {/* Footer */}
        <div className='mt-8 flex items-center justify-center'>
          <p className='text-sm text-[#61896f]'>
            Need help with your billing?
            <a className='text-[#15ec5b] hover:underline transition' href=""> Contact Support</a>
          </p>
        </div>
      </div>
    </div>
  )
}

export default MemberSubscription
