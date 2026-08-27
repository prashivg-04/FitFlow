import React from 'react'
import ComingSoonWrapper from '../../components/ComingSoonWrapper'

const TrainerSupport = () => {
  return (
    <ComingSoonWrapper>
    <div className=''>
      <div className='flex-1 overflow-y-auto p-4 sm:p-6 lg:p-8 scroll-smooth'>
        <div className='max-w-300 mx-auto space-y-8 pb-10'>
          {/* Heading */}
          <div className='flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4'>
            <div className='flex flex-col items-start justify-center gap-2'>
              <h1 className='text-4xl font-black tracking-tight'>Support Center</h1>
              <p className='text-[#61896f] text-base'>Find answers quickly or get in touch with our team.</p>
            </div>
            <div className='w-full sm:w-96 relative group'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <i className="fa-solid fa-magnifying-glass text-gray-400 group-focus-within:text-[#15ec5b] transition-colors"></i>
              </div>
              <input className='block w-full pl-10 pr-3 py-3 rounded-xl bg-white shadow-sm ring ring-gray-200 placeholder:text-gray-400 focus:outline-0 focus:ring-2 focus:ring-[#15ec5b] text-sm leading-6 transition-shadow' type="text" placeholder='Search articles, guides, or FAQs...' />
            </div>
          </div>

          {/* FAQs and Contact */}
          <div className='grid grid-cols-1 lg:grid-cols-3 gap-6 lg:gap-8 items-start'>
            {/* Left */}
            <div className='col-span-1 lg:col-span-2 flex flex-col gap-6'>
              <div className='flex items-center justify-between'>
                <h3 className='text-xl font-bold'>Common Questions</h3>
                <a className='text-sm font-semibold text-[#15ec5b] hover:underline' href="">View all articles</a>
              </div>

              <div className='flex flex-col gap-4'>
                <div className='bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group'>
                  <button className='w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none'>
                    <span className='text-lg font-semibold'>How do I add a new trainer?</span>
                    <i className="ri-arrow-up-s-line text-gray-400 text-[24px]"></i>
                  </button>
                  <div className='px-6 pb-6 pt-2 border-t border-gray-100'>
                    <p className='text-gray-600 leading-relaxed'>
                      Go to the
                      <span className='text-[#15ec5b] font-medium'> Team Settings </span>
                      page from the sidebar. Click on the "Add New Member" button at the top right corner. You'll need to enter their email address and assign them a role (e.g., Trainer, Admin). They will receive an invitation email to set up their password.
                    </p>
                  </div>
                </div>

                <div className='bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group'>
                  <button className='w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none'>
                    <span className='text-lg font-semibold'>How do I update my billing information?</span>
                    <i className="ri-arrow-down-s-line text-gray-400 text-[24px]"></i>
                  </button>
                </div>

                <div className='bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group'>
                  <button className='w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none'>
                    <span className='text-lg font-semibold'>Can I export member data to CSV?</span>
                    <i className="ri-arrow-down-s-line text-gray-400 text-[24px]"></i>
                  </button>
                </div>

                <div className='bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden group'>
                  <button className='w-full px-6 py-5 flex items-center justify-between text-left focus:outline-none'>
                    <span className='text-lg font-semibold'>How do I create a recurring class schedule?</span>
                    <i className="ri-arrow-down-s-line text-gray-400 text-[24px]"></i>
                  </button>
                </div>
              </div>

              <h3 className='text-lg font-bold mt-4'>Browse Topics</h3>

              <div className='grid grid-cols-1 sm:grid-cols-3 gap-4'>
                <a className='bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-3 hover:shadow-md hover:-translate-y-1 transition-all group' href="">
                  <div className='size-10 rounded-full bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-120 transition-transform'>
                    <i className="fa-solid fa-money-bills text-[20px]"></i>
                  </div>
                  <span className='text-sm font-semibold '>Billing & Plans</span>
                </a>

                <a className='bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-3 hover:shadow-md hover:-translate-y-1 transition-all group' href="">
                  <div className='size-10 rounded-full bg-green-50 flex items-center justify-center text-green-600 group-hover:scale-120 transition-transform'>
                    <i className="ri-user-settings-line text-[20px]"></i>
                  </div>
                  <span className='text-sm font-semibold '>Account Management</span>
                </a>

                <a className='bg-white p-4 rounded-xl shadow-sm border border-gray-100 flex flex-col items-center text-center gap-3 hover:shadow-md hover:-translate-y-1 transition-all group' href="">
                  <div className='size-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 group-hover:scale-120 transition-transform'>
                    <i className="ri-webhook-line text-[20px]"></i>
                  </div>
                  <span className='text-sm font-semibold '>Integrations</span>
                </a>
              </div>
            </div>

            {/* Right */}
            <div className='flex flex-col gap-6'>
              {/* Contact */}
              <div className='bg-white rounded-2xl shadow-lg shadow-gray-200/50 border border-gray-100 p-8'>
                <div className='flex items-center gap-3 mb-6'>
                  <div className='p-2 bg-[#15ec5b]/20 rounded-lg text-green-800'>
                    <i className="fa-regular fa-envelope text-[20px]"></i>
                  </div>
                  <h3 className='text-xl font-bold '>Send us a message</h3>
                </div>

                <form className='flex flex-col gap-5'>
                  <div className='flex flex-col gap-2'>
                    <label className='text-xs font-bold text-gray-500 uppercase tracking-wider'>Subject</label>
                    <input className='w-full rounded-lg bg-gray-50 px-4 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#15ec5b]' type="text" placeholder='Brief description of the issue' />
                  </div>

                  <div className='flex flex-col gap-2'>
                    <label className='text-xs font-bold text-gray-500 uppercase tracking-wider'>Message</label>
                    <textarea className='w-full rounded-lg bg-gray-50 px-4 py-3 text-sm placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#15ec5b] resize-none' placeholder='Describe your issue in detail...' rows='4'></textarea>
                  </div>

                  <div className='flex flex-col gap-2'>
                    <label className='text-xs font-bold text-gray-500 uppercase tracking-wider'>Attachments (Optional)</label>
                    <div className='flex items-center justify-center w-full'>
                      <label className='flex flex-col items-center justify-center w-full h-24 border-2 border-gray-300 border-dashed rounded-lg cursor-pointer bg-gray-50 hover:bg-gray-100 transition-colors' for='dropzone-file'>
                        <div className='flex flex-col items-center justify-center pt-5 pb-6'>
                          <i className="fa-solid fa-cloud-arrow-up text-gray-500 mb-1"></i>
                          <p className='text-xs text-gray-500 '>Click to upload or drag and drop</p>
                        </div>
                        <input className='hidden' id='dropzone-file' type="file" />
                      </label>
                    </div>
                  </div>

                  <button className='mt-2 w-full bg-[#15ec5b] hover:bg-green-400 rounded-lg py-3 text-sm font-bold shadow-md shadow-green-400/20 transition-all active:scale-[0.98]'>Submit Request</button>
                </form>
              </div>

              {/* Info Widget */}
              <div className='bg-gray-900 rounded-xl p-6 text-white relative overflow-hidden'>
                <div className='absolute -top-10 -right-10 size-32 bg-[#15ec5b]/20 rounded-full blur-2xl pointer-events-none'></div>

                <h4 className='text-lg font-bold mb-4 relative z-10'>Direct Support</h4>

                <div className='flex flex-col gap-10 relative z-10'>
                  <div className='flex items-start gap-3'>
                    <i className="fa-regular fa-envelope text-[#15ec5b] text-xl mt-0.5"></i>
                    <div>
                      <p className='text-xs text-gray-400 font-medium uppercase tracking-wide'>Email Us</p>
                      <a className='text-sm font-semibold hover:text-[#15ec5b] transition-colors' href="">support@FitFlow.com</a>
                    </div>
                  </div>

                  <div className='flex items-start gap-3'>
                    <i className="fa-regular fa-clock text-[#15ec5b] text-xl mt-0.5"></i>
                    <div>
                      <p className='text-xs text-gray-400 font-medium uppercase tracking-wide'>Response Time</p>
                      <p className='text-sm font-medium'>Usually replies within 24 hours.</p>
                      <p className='text-xs text-gray-500 mt-1'>Mon-Fri, 9am - 5pm EST</p>
                    </div>
                  </div>
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

export default TrainerSupport
