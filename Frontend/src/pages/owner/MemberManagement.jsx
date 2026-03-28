import React from 'react'
import OwnerHeader from '../../components/owner/OwnerHeader'
import memberDp from '../../media/M.png'
import ComingSoonWrapper from '../../components/ComingSoonWrapper'

const MemberManagement = () => {
  return (
    <ComingSoonWrapper>
    <div className=''>
      <div className='flex-1 overflow-y-auto p-8 scroll-smooth'>
        <div className='max-w-300 mx-auto space-y-8 pb-10'>
          {/* Heading */}
          <div className='flex items-center justify-between gap-4'>
            <div className='flex flex-col items-start justify-center gap-2'>
              <h1 className='text-4xl font-black tracking-tight'>Member Management</h1>
              <p className='text-[#61896f] text-base'>Overview of all registered members and their current status.</p>
            </div>
            <div>
              <button className='flex items-center gap-2 px-5 py-2.5 bg-[#15ec5b] rounded-lg hover:bg-green-500 font-bold shadow-lg shadow-[#15ec5b]/25 transition-all'>
                <i className="ri-add-line text-[20px]"></i>
                Add New Member
              </button>
            </div>
          </div>

          {/* KPI Cards */}
          <div className='grid grid-cols-3 gap-6'>
            <div className='bg-white p-6 rounded-xl border border-[#dbe6df] shadow-soft flex flex-col justify-between h-32 relative overflow-hidden group'>
              <div className='absolute -top-2.5 -right-2.5 p-6 bg-green-50 rounded-full group-hover:bg-green-100 transition-all'>
                <i className='ri-group-line text-green-400 text-4xl opacity-50'></i>
              </div>
              <span className='text-[#61896f] font-medium z-10'>Total Members</span>
              <div className='flex items-center gap-3 z-10'>
                <span className='text-3xl font-bold'>1240</span>
                <span className='text-sm font-semibold text-green-600 bg-green-100 px-2 py-0.5 rounded-full flex items-center'>
                  <i className="fa-solid fa-arrow-trend-up"></i>
                  5%
                </span>
              </div>
            </div>

            <div className='bg-white p-6 rounded-xl border border-[#dbe6df] shadow-soft flex flex-col justify-between h-32 relative overflow-hidden group'>
              <div className='absolute -top-2.5 -right-2.5 p-6 bg-blue-50 rounded-full group-hover:bg-blue-100 transition-all'>
                <i className='ri-bank-card-line text-blue-400 text-4xl opacity-50'></i>
              </div>
              <span className='text-[#61896f] font-medium z-10'>Active Memberships</span>
              <div className='flex items-center gap-3 z-10'>
                <span className='text-3xl font-bold'>980</span>
                <span className='text-sm font-semibold text-blue-600 bg-blue-100 px-2 py-0.5 rounded-full flex items-center'>
                  <i className="fa-solid fa-arrow-trend-up"></i>
                  2%
                </span>
              </div>
            </div>

            <div className='bg-white p-6 rounded-xl border border-[#dbe6df] shadow-soft flex flex-col justify-between h-32 relative overflow-hidden group'>
              <div className='absolute -top-2.5 -right-2.5 p-6 bg-orange-50 rounded-full group-hover:bg-orange-100 transition-all'>
                <i className="fa-solid fa-triangle-exclamation text-orange-400 text-4xl opacity-50"></i>
              </div>
              <span className='text-[#61896f] font-medium z-10'>Expiring Soon</span>
              <div className='flex items-center gap-3 z-10'>
                <span className='text-3xl font-bold'>12</span>
                <span className='text-sm font-semibold text-orange-600 bg-orange-100 px-2 py-0.5 rounded-full flex items-center'>
                  <i className="fa-solid fa-exclamation"></i>
                  1%
                </span>
              </div>
            </div>
          </div>

          {/* Members List */}
          <div className='bg-white border border-[#dbe6df] rounded-xl shadow-soft overflow-hidden flex flex-col'>
            {/* Toolbar */}
            <div className='p-5 border-b border-[#f0f4f2] flex items-center justify-between gap-4'>
              <div className='relative max-w-md w-full'>
                <i className="ri-search-line absolute left-0 top-0 pl-3 pt-2 text-[#61896f] pointer-events-none"></i>
                <input className='bg-[#f7f8f6] h-10 pl-9 pr-4 py-2 w-full rounded-lg border border-[#dbe6df] text-sm placeholder:text-[#61896f] focus:border-[#15ec5b] focus:outline-0 focus:ring-1 focus:ring-[#15ec5b] transition-all' type="text" placeholder='Search by name, email, or ID...' />
              </div>

              <div className='flex items-center gap-3 w-auto'>
                <div className='relative min-w-30'>
                  <select className='appearance-none w-full px-4 py-2 rounded-lg border border-[#dbe6df] text-sm font-medium focus:outline-0 focus:ring-1 focus:ring-[#15ec5b] transition-all hover:bg-gray-50'>
                    <option>Status: All</option>
                    <option>Active</option>
                    <option>Inactive</option>
                    <option>Pending</option>
                  </select>
                  <i className="absolute right-2 top-2 text-[#61896f] pointer-events-none ri-arrow-down-s-fill"></i>
                </div>

                <div className='relative min-w-30'>
                  <select className='appearance-none w-full px-4 py-2 rounded-lg border border-[#dbe6df] text-sm font-medium focus:outline-0 focus:ring-1 focus:ring-[#15ec5b] transition-all hover:bg-gray-50'>
                    <option>Plan: All</option>
                    <option>Premium</option>
                    <option>Standard</option>
                    <option>Basic</option>
                  </select>
                  <i className="absolute right-2 top-2 text-[#61896f] pointer-events-none ri-arrow-down-s-fill"></i>
                </div>

                <button className='px-3 py-1 border border-[#dbe6df] rounded-lg text-[#61896f] hover:bg-gray-50 transition-all flex items-center gap-2'>
                  <i className="ri-filter-3-line text-xl"></i>
                </button>
              </div>
            </div>

            {/* Members Table */}
            <div className='overflow-x-auto'>
              <table className='w-full text-left border-collapse'>
                <thead className='bg-[#f7f8f6] text-[#61896f] text-xs font-semibold uppercase tracking-wider'>
                  <tr>
                    <th className='px-6 py-4'>Member</th>
                    <th className='px-6 py-4'>Contact Info</th>
                    <th className='px-6 py-4'>Current Plan</th>
                    <th className='px-6 py-4'>Join Date</th>
                    <th className='px-6 py-4'>Status</th>
                    <th className='px-6 py-4 text-right'>Actions</th>
                  </tr>
                </thead>

                <tbody className='divide-y divide-[#f0f4f2]'>
                  <tr className='hover:bg-[#f7f8f6] transitions-color group cursor-pointer'>
                    <td className='px-6 py-4'>
                      <div className='flex items-center gap-3'>
                        <img className='size-10 rounded-full bg-gray-200 bg-center border border-[#dbe6df] object-cover' src={memberDp} alt="Member" />
                        <div className='flex flex-col items-start'>
                          <p className='text-sm font-semibold group-hover:text-[#15ec5b] transition-colors'>Eleanor Pena</p>
                          <p className='text-xs text-[#61896f]'>ID: #4321</p>
                        </div>
                      </div>
                    </td>

                    <td className='px-6 py-4'>
                      <div className='flex flex-col items-start gap-0.5'>
                        <div className='flex items-center gap-1.5 text-[#61896f] text-sm'>
                          <i className="fa-regular fa-envelope text-[14px]"></i>
                          eleanor@example.com
                        </div>

                        <div className='flex items-center gap-1.5 text-[#61896f] text-sm'>
                          <i className="ri-phone-line text-[14px]"></i>
                          (205) 555-0100
                        </div>
                      </div>
                    </td>

                    <td className='px-6 py-4'>
                      <span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs font-medium bg-purple-100 text-purple-700 border border-purple-200 '>
                        <i className="fa-regular fa-gem text-[14px]"></i>
                        Premium
                      </span>
                    </td>

                    <td className='px-6 py-4 text-sm text-[#61896f]'>
                      Oct 24, 2023
                    </td>

                    <td className='px-6 py-4'>
                      <span className='inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700 border border-green-200 '>
                        <span className='size-1.5 rounded-full bg-green-500'></span>
                        Active
                      </span>
                    </td>

                    <td className='px-6 py-4 text-right'>
                      <button className='text-[#61896f] hover:text-[#15ec5b] p-1.5 rounded-lg transition-all'>
                        <i className="fa-solid fa-ellipsis-vertical text-[20px]"></i>
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
                <span className='text-slate-900 font-medium'> 1 </span>
                to 
                <span className='text-slate-900 font-medium'> 5 </span>
                of
                <span className='text-slate-900 font-medium'> 1240 </span>
                members
              </span>

              <div className='flex items-center gap-2'>
                <button className='px-3 py-1.5 border border-[#dbe6df] rounded-md hover:bg-gray-50 text-sm font-semibold transition-colors disabled:opacity-50'>Previous</button>
                <button className='px-3 py-1.5 border border-[#15ec5b] rounded-md text-lg font-bold bg-[#15ec5b] shadow-sm transition-colors'>1</button>
                <button className='px-3 py-1.5 border border-[#dbe6df] rounded-md hover:bg-gray-50 text-sm font-semibold transition-colors'>2</button>
                <button className='px-3 py-1.5 border border-[#dbe6df] rounded-md hover:bg-gray-50 text-sm font-semibold transition-colors'>3</button>
                <span className='px-2 py-1.5 text-[#61896f]'>...</span>
                <button className='px-3 py-1.5 border border-[#dbe6df] rounded-md hover:bg-gray-50 text-sm font-semibold transition-colors'>24</button>
                <button className='px-3 py-1.5 border border-[#dbe6df] rounded-md hover:bg-gray-50 text-sm font-semibold transition-colors'>Next</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    </ComingSoonWrapper>
  )
}

export default MemberManagement
