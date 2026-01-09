import React from 'react'
import OwnerHeader from '../../components/owner/OwnerHeader'
import navjot from '../../media/navjotImg.jpeg'

const Support = () => {
  return (
    <div className=''>
      <div className='flex-1 overflow-y-auto p-8 scroll-smooth'>
        <div className='max-w-300 mx-auto space-y-8 pb-10'>
          {/* Heading */}
          <div className='flex items-center justify-between gap-4'>
            <div className='flex flex-col items-start justify-center gap-2'>
              <h1 className='text-4xl font-black tracking-tight'>Support Center</h1>
              <p className='text-[#61896f] text-base'>Find answers quickly or get in touch with our team.</p>
            </div>
            <div className='w-96 relative group'>
              <div className='absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none'>
                <i class="fa-solid fa-magnifying-glass text-gray-400 group-focus-within:text-[#15ec5b] transition-colors"></i>
              </div>
              <input className='block w-full pl-10 pr-3 py-3 rounded-xl bg-white shadow-sm ring ring-gray-200 placeholder:text-gray-400 focus:outline-0 focus:ring-2 focus:ring-[#15ec5b] text-sm leading-6 transition-shadow' type="text" placeholder='Search articles, guides, or FAQs...' />
            </div>
          </div>

          {/* FAQs and Contact */}
          <div>
            {/* Left */}
            <div>
              <div>
                <h3>Common Questions</h3>
                <a href="">View all articles</a>
              </div>

              <div>
                <div>
                  <button>
                    <span>How do I add a new trainer?</span>
                    <i class="ri-arrow-up-s-line"></i>
                  </button>
                  <div>
                    <p>
                      Go to the
                      <span> Team Settings </span>
                      page from the sidebar. Click on the "Add New Member" button at the top right corner. You'll need to enter their email address and assign them a role (e.g., Trainer, Admin). They will receive an invitation email to set up their password.
                    </p>
                  </div>
                </div>

                <div>
                  <button>
                    <span>How do I update my billing information?</span>
                    <i class="ri-arrow-down-s-line"></i>
                  </button>
                </div>

                <div>
                  <button>
                    <span>Can I export member data to CSV?</span>
                    <i class="ri-arrow-down-s-line"></i>
                  </button>
                </div>

                <div>
                  <button>
                    <span>How do I create a recurring class schedule?</span>
                    <i class="ri-arrow-down-s-line"></i>
                  </button>
                </div>
              </div>

              <h3>Browse Topics</h3>

              <div>
                <a href="">
                  <div>
                    <i class="fa-solid fa-money-bills"></i>
                  </div>
                  <span>Billing & Plans</span>
                </a>

                <a href="">
                  <div>
                    <i class="ri-user-settings-line"></i>
                  </div>
                  <span>Account Management</span>
                </a>

                <a href="">
                  <div>
                    <i class="ri-webhook-line"></i>
                  </div>
                  <span>Integrations</span>
                </a>
              </div>
            </div>

            {/* Right */}
            <div>
              <div>
                <div>
                  <div>
                    <i class="fa-regular fa-envelope"></i>
                  </div>
                  <h3>Send us a message</h3>
                </div>

                <form>
                  <div>
                    <label>Subject</label>
                    <input type="text" placeholder='Brief description of the issue' />
                  </div>

                  <div>
                    <label>Message</label>
                    <textarea placeholder='Describe your issue in detail...'></textarea>
                  </div>

                  <div>
                    <label>Attachments (Optional)</label>
                    <div>
                      <label>
                        <div>
                          <i class="fa-solid fa-cloud-arrow-up"></i>
                          <p>Click to upload or drag and drop</p>
                        </div>
                        <input type="file" />
                      </label>
                    </div>
                  </div>

                  <button>Submit Request</button>
                </form>
              </div>

              <div>
                <div></div>

                <h4>Direct Support</h4>

                <div>
                  <div>
                    <i class="fa-regular fa-envelope"></i>
                    <div>
                      <p>Email Us</p>
                      <a href="">support@gymsaas.com</a>
                    </div>
                  </div>
                  <div>
                    <i class="fa-regular fa-clock"></i>
                    <div>
                      <p>Response Time</p>
                      <p>Usually replies within 24 hours.</p>
                      <p>Mon-Fri, 9am - 5pm EST</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Support
