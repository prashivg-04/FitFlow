import React from 'react'
import icon from '../media/icon.png'
import heroImg from '../media/intro.webp'

const Welcome = () => {
  return (
    <div>
        {/* Navbar */}
        <header className='sticky top-0 z-50 border-b border-slate-200 bg-[#fefefe]'>
            <div className='h-16 flex justify-between items-center mx-auto px-24'>
                <div className='flex items-center gap-2'>
                    <img 
                        className='h-8'
                        src={icon} 
                        alt="GymFlow Icon" 
                    />
                    <p className='text-xl font-bold'>GymFlow</p>
                </div>
                <div className='flex items-center gap-8'>
                    <p className='text-sm font-medium text-slate-600 hover:text-[#15ec5b]'>Features</p>
                    <p className='text-sm font-medium text-slate-600 hover:text-[#15ec5b]'>Solutions</p>
                    <p className='text-sm font-medium text-slate-600 hover:text-[#15ec5b]'>Pricing</p>
                </div>
                <div className='flex items-center gap-4'>
                    <button className='text-sm font-bold text-slate-900 hover:text-[#15ec5b]'>Login</button>
                    <button className='bg-[#15ec5b] flex items-center justify-center px-4 py-2 rounded-lg text-sm font-bold transition-transform hover:scale-105 active:scale-95 shadow-[0_0_15px_#13ec5b4d]'>Get Started</button>
                </div>
            </div>
        </header>

        {/* Hero Section */}
        <section className='bg-[#f7f8f6] h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px] pt-24 pb-28'>
            <div className='px-48'>
                <div className='mx-auto max-w-7xl px-8 text-center'>
                    <h1 className='max-w-4xl mx-auto text-7xl font-extrabold text-slate-900 tracking-tight mb-6'>
                        Manage Your Gym,
                        <br />
                        <span className='text-transparent bg-clip-text bg-linear-to-r from-[#15ec5b] to-emerald-600'>Empower Your Members.</span>
                    </h1>

                    <p className='mx-auto max-w-2xl text-lg text-slate-600 mb-10 leading-relaxed'>
                        The all-in-one platform for scheduling, billing, and member engagement. Bridge the gap between a professional business tool and the energetic atmosphere of fitness.
                    </p>

                    <div className='flex items-center justify-center gap-4 mb-16'>
                        <button className='h-12 px-8 bg-[#15ec5b] rounded-lg text-slate-900 text-base font-bold shadow-lg shadow-primary/25 hover:bg-emerald-400 transitions-color'>Start Free Trial</button>
                        <button className='h-12 px-8 bg-white rounded-lg border border-slate-200 text-slate-900 text-base font-bold hover:bg-slate-50 transition-colors flex items-center justify-center gap-2'><i className="ri-play-circle-line text-xl"></i>Watch Demo</button>
                    </div>

                    <div className='relative mx-auto max-w-5xl rounded-2xl bg-slate-900/5 p-4 ring-1 ring-inset ring-slate-900/10 shadow-2xl'> 
                        <div className='bg-slate-800 rounded-lg overflow-hidden shadow-2xl'>
                            <img className='h-160 aspect-video bg-cover bg-center' src={heroImg} alt="Hero" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Social Proof */}
        <section className='bg-white py-10 border-y border-slate-200'>
            <div className='mx-auto max-w-7xl px-4 text-center'>
                <p className='text-sm font-semibold text-slate-500 mb-8 uppercase tracking-widest'>Trusted by 500+ Gyms & Fitness Centers</p>
                <div className='flex items-center justify-center gap-20 opacity-60'>
                    <div className='flex items-center gap-2 text-xl font-bold text-slate-700'>
                        <i class="ri-flashlight-line"></i>
                        PowerFit
                    </div>

                    <div className='flex items-center gap-2 text-xl font-bold text-slate-700'>
                        <i class="ri-heart-2-line"></i>
                        CardioPulse
                    </div>

                    <div className='flex items-center gap-2 text-xl font-bold text-slate-700'>
                        <i class="ri-flower-line"></i>
                        ZenYoga
                    </div>

                    <div className='flex items-center gap-2 text-xl font-bold text-slate-700'>
                        <i class="fa-solid fa-person-running"></i>
                        IronDojo
                    </div>
                    
                    <div className='flex items-center gap-2 text-xl font-bold text-slate-700'>
                        <i class="fa-solid fa-person-swimming"></i>
                        AquaLife
                    </div>
                </div>
            </div>
        </section>

        {/* Features */}
        <section className='bg-[#f7f8f6] py-20'>
            <div className='mx-auto max-w-7xl'>
                <div className='text-center mb-16'>
                    <h2 className='text-3xl font-bold tracking-tight text-slate-900 mb-4'>Everything you need to run your gym</h2>
                    <p className='text-lg text-slate-600'>Streamline your operations with our comprehensive suite of tools designed for efficiency and growth.</p>
                </div>
                <div className='grid grid-cols-3 gap-8'>
                    <div className='group relative rounded-2xl bg-white p-8 shadow-sm hover:shadow-xl hover:shadow-[#15ec5b]/5 transition-all duration-300 border border-slate-100'>
                        <div className='inline-flex items-center justify-center bg-[#15ec5b]/10 p-3 rounded-lg text-[#15ec5b] mb-6 group-hover:bg-[#15ec5b] group-hover:text-slate-900 transition-colors'><i class="ri-calendar-2-line text-3xl"></i></div>
                        <h3 className='text-xl font-bold text-slate-900 mb-3'>Smart Scheduling</h3>
                        <p className='text-slate-600'>Drag-and-drop calendar for classes and PT sessions. Syncs in real-time with member apps to prevent double bookings.</p>
                    </div>

                    <div className='group relative rounded-2xl bg-white p-8 shadow-sm hover:shadow-xl hover:shadow-[#15ec5b]/5 transition-all duration-300 border border-slate-100'>
                        <div className='inline-flex items-center justify-center bg-[#15ec5b]/10 p-3 rounded-lg text-[#15ec5b] mb-6 group-hover:bg-[#15ec5b] group-hover:text-slate-900 transition-colors'><i class="fa-solid fa-money-bills text-3xl"></i></div>
                        <h3 className='text-xl font-bold text-slate-900 mb-3'>Automated Billing</h3>
                        <p className='text-slate-600'>Never chase a payment again. Automated invoicing, recurring memberships, and failed payment retries.</p>
                    </div>

                    <div className='group relative rounded-2xl bg-white p-8 shadow-sm hover:shadow-xl hover:shadow-[#15ec5b]/5 transition-all duration-300 border border-slate-100'>
                        <div className='inline-flex items-center justify-center bg-[#15ec5b]/10 p-3 rounded-lg text-[#15ec5b] mb-6 group-hover:bg-[#15ec5b] group-hover:text-slate-900 transition-colors'><i class="ri-group-line text-3xl"></i></div>
                        <h3 className='text-xl font-bold text-slate-900 mb-3'>Member Portal</h3>
                        <p className='text-slate-600'>Give members control. They can book classes, track progress, and update payment info from a dedicated app.</p>
                    </div>

                    <div className='group relative rounded-2xl bg-white p-8 shadow-sm hover:shadow-xl hover:shadow-[#15ec5b]/5 transition-all duration-300 border border-slate-100'>
                        <div className='inline-flex items-center justify-center bg-[#15ec5b]/10 p-3 rounded-lg text-[#15ec5b] mb-6 group-hover:bg-[#15ec5b] group-hover:text-slate-900 transition-colors'><i class="ri-bar-chart-2-fill text-3xl"></i></div>
                        <h3 className='text-xl font-bold text-slate-900 mb-3'>Insightful Reporting</h3>
                        <p className='text-slate-600'>Know your numbers. Track attendance, retention rates, and revenue growth with beautiful visual reports.</p>
                    </div>

                    <div className='group relative rounded-2xl bg-white p-8 shadow-sm hover:shadow-xl hover:shadow-[#15ec5b]/5 transition-all duration-300 border border-slate-100'>
                        <div className='inline-flex items-center justify-center bg-[#15ec5b]/10 p-3 rounded-lg text-[#15ec5b] mb-6 group-hover:bg-[#15ec5b] group-hover:text-slate-900 transition-colors'><i class="ri-store-3-line text-3xl"></i></div>
                        <h3 className='text-xl font-bold text-slate-900 mb-3'>Inventory Management</h3>
                        <p className='text-slate-600'>Sell supplements and gear easily. Track stock levels and get alerts when it's time to reorder.</p>
                    </div>
                    
                    <div className='group relative rounded-2xl bg-white p-8 shadow-sm hover:shadow-xl hover:shadow-[#15ec5b]/5 transition-all duration-300 border border-slate-100'>
                        <div className='inline-flex items-center justify-center bg-[#15ec5b]/10 p-3 rounded-lg text-[#15ec5b] mb-6 group-hover:bg-[#15ec5b] group-hover:text-slate-900 transition-colors'><i class="ri-megaphone-line text-3xl"></i></div>
                        <h3 className='text-xl font-bold text-slate-900 mb-3'>Marketing Tools</h3>
                        <p className='text-slate-600'>Built-in email and SMS marketing automation to keep your members engaged and motivated.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Solutions */}
        <section>Solutions</section>

        {/* Reviews */}
        <section>Reviews</section>

        {/* CTA */}
        <section>Ready?</section>

        <footer className='bg-[#f7f8f6] border-t border-slate-200 pt-16 pb-8'>
            <div className='px-24 '>
                <div className='flex justify-between gap-12 mb-12'>
                    <div className='col-span-1 w-[20%]'>
                        <div className='flex items-center gap-2 mb-4'>
                            <img 
                                className='h-6'
                                src={icon} 
                                alt="GymFlow Icon" 
                            />
                            <p className='text-xl font-bold text-slate-900'>GymFlow</p>
                        </div>
                        <p className='text-sm text-slate-500'>
                            Empowering fitness businesses with modern tools for modern growth.
                        </p>
                    </div>
                    <div className='w-[20%]'>
                        <h4 className='text-sm font-bold text-slate-900 mb-4'>Product</h4>
                        <ul className='space-y-2 text-slate-600'>
                            <li><a className='hover:text-[#15ec5b]' href="">Features</a></li>
                            <li><a className='hover:text-[#15ec5b]' href="">Pricing</a></li>
                            <li><a className='hover:text-[#15ec5b]' href="">API</a></li>
                            <li><a className='hover:text-[#15ec5b]' href="">Integrations</a></li>
                        </ul>
                    </div>
                    <div className='w-[20%]'>
                        <h4 className='text-sm font-bold text-slate-900 mb-4'>Company</h4>
                        <ul className='space-y-2 text-slate-600'>
                            <li><a className='hover:text-[#15ec5b]' href="">About Us</a></li>
                            <li><a className='hover:text-[#15ec5b]' href="">Careers</a></li>
                            <li><a className='hover:text-[#15ec5b]' href="">Blog</a></li>
                            <li><a className='hover:text-[#15ec5b]' href="">Contact</a></li>
                        </ul>
                    </div>
                    <div className='w-[20%]'>
                        <h4 className='text-sm font-bold text-slate-900 mb-4'>Subscribe</h4>
                        <p className='text-sm text-slate-500 mb-3'>Get the latest updates and fitness business tips.</p>
                        <div className='flex items-center gap-2'>
                            <input 
                                className='w-full rounded bg-white px-3 py-2 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#15ec5b]'
                                type="email" 
                                placeholder='Email address' 
                            />
                            <button className='rounded bg-[#15ec5b] px-3 py-1.5 hover:bg-emerald-400 transition-colors'>
                                <span><i className="ri-arrow-right-line text-lg"></i></span> 
                            </button>
                        </div>
                    </div>
                </div>

                <div className='border-t border-slate-200 flex justify-between items-center pt-8'>
                    <p className='text-xs text-slate-500'>© 2023 GymFlow Inc. All rights reserved.</p>
                    <div className='flex items-center gap-6 text-xs text-slate-500'>
                        <a className='hover:text-[#15ec5b]' href="">Privacy Policy</a>
                        <a className='hover:text-[#15ec5b]' href="">Terms of Service</a>
                    </div>
                </div>
            </div>
        </footer>
    </div>
  )
}

export default Welcome
