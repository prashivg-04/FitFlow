import React, { useState } from 'react'
import icon from '../media/icon.png'
import trainer1 from '../media/trainer1.png'
import trainer2 from '../media/trainer2.jpg'
import ownerDp from '../media/O.png'
import trainerDp from '../media/T.png'
import memberDp from '../media/M.png'
import { Link, Links } from 'react-router-dom'
import FeedbackButton from '../components/FeedbackButton'


const Welcome = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    
  return (
    <div>
        {/* Navbar */}
        <header className='sticky top-0 z-50 border-b border-slate-200 bg-[#fefefe]'>
            <div className='h-16 flex justify-between items-center mx-auto px-4 md:px-8 lg:px-24'>
                <div className='flex items-center gap-2'>
                    <img 
                        className='h-8'
                        src={icon} 
                        alt="FitFlow Icon" 
                    />
                    <p className='text-xl font-bold'>FitFlow</p>
                </div>
                
                {/* Desktop Nav */}
                <div className='hidden md:flex items-center gap-8'>
                    <p className='text-sm font-medium text-slate-600 hover:text-[#15ec5b] cursor-pointer'>Features</p>
                    <p className='text-sm font-medium text-slate-600 hover:text-[#15ec5b] cursor-pointer'>Solutions</p>
                    <p className='text-sm font-medium text-slate-600 hover:text-[#15ec5b] cursor-pointer'>Pricing</p>
                </div>
                <div className='hidden md:flex items-center gap-4'>
                    <Link to="/login" className='text-sm font-bold text-slate-900 hover:text-[#15ec5b]'>Login</Link>
                    <Link to='/signup' className='bg-[#15ec5b] flex items-center justify-center px-4 py-2 rounded-lg text-sm font-bold transition-transform hover:scale-105 active:scale-95 shadow-[0_0_15px_#13ec5b4d]'>Get Started</Link>
                </div>

                {/* Mobile Menu Button */}
                <div className='md:hidden flex items-center'>
                    <button onClick={() => setIsMenuOpen(!isMenuOpen)} className='text-slate-600 hover:text-slate-900 focus:outline-none'>
                        <i className={isMenuOpen ? "ri-close-line text-2xl" : "ri-menu-2-line text-2xl"}></i>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div className={`md:hidden bg-white border-t border-slate-200 overflow-hidden transition-all duration-300 ease-in-out origin-top ${isMenuOpen ? 'max-h-100 opacity-100' : 'max-h-0 opacity-0'}`}>
                <div className='px-4 pt-2 pb-4 space-y-1 shadow-lg'>
                    <p className='block px-3 py-2 text-base font-medium text-slate-700 hover:text-[#15ec5b] hover:bg-slate-50 rounded-md cursor-pointer'>Features</p>
                    <p className='block px-3 py-2 text-base font-medium text-slate-700 hover:text-[#15ec5b] hover:bg-slate-50 rounded-md cursor-pointer'>Solutions</p>
                    <p className='block px-3 py-2 text-base font-medium text-slate-700 hover:text-[#15ec5b] hover:bg-slate-50 rounded-md cursor-pointer'>Pricing</p>
                    <div className='px-3 py-2'>
                        <FeedbackButton></FeedbackButton>
                    </div>
                    <Link to="/login" className='block px-3 py-2 text-base font-bold text-slate-900 hover:bg-slate-50 rounded-md'>Login</Link>
                    <Link to='/signup' className='block px-3 py-2 text-base font-bold text-white bg-[#15ec5b] hover:bg-emerald-500 rounded-md text-center mt-4'>Get Started</Link>
                </div>
            </div>
        </header>

        {/* Hero Section */}
        <section className='bg-[#f7f8f6] h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-size-[14px_24px] pt-16 md:pt-24 pb-16 md:pb-20'>
            <div className='px-4 sm:px-8 md:px-16 lg:px-48'>
                <div className='mx-auto max-w-7xl px-4 sm:px-8 text-center'>
                    <h1 className='max-w-4xl mx-auto text-4xl sm:text-5xl lg:text-7xl font-extrabold text-slate-900 tracking-tight mb-6'>
                        Manage Your Gym,
                        <br />
                        <span className='text-transparent bg-clip-text bg-linear-to-r from-[#15ec5b] to-emerald-600'>Empower Your Members.</span>
                    </h1>

                    <p className='mx-auto max-w-2xl text-base sm:text-lg text-slate-600 mb-10 leading-relaxed'>
                        The all-in-one platform for scheduling, billing, and member engagement. Bridge the gap between a professional business tool and the energetic atmosphere of fitness.
                    </p>

                    <div className='flex flex-col sm:flex-row items-center justify-center gap-4 mb-8'>
                        <Link to="/signup" className='w-full sm:w-auto h-12 px-8 flex justify-center items-center bg-[#15ec5b] rounded-lg text-slate-900 text-base font-bold shadow-lg shadow-primary/25 hover:bg-green-500 transition-colors'>Start Free Trial</Link>
                        <button className='w-full sm:w-auto h-12 px-8 bg-white rounded-lg border border-slate-200 text-slate-900 text-base font-bold hover:bg-slate-100 transition-colors flex items-center justify-center gap-2'><i className="ri-play-circle-line text-xl"></i>Watch Demo</button>
                    </div>
                </div>
            </div>
        </section>

        {/* Social Proof */}
        <section className='bg-white py-10 border-y border-slate-200'>
            <div className='mx-auto max-w-7xl px-4 text-center'>
                <p className='text-sm font-semibold text-slate-500 mb-8 uppercase tracking-widest'>Trusted by 500+ Gyms & Fitness Centers</p>
                <div className='flex flex-wrap items-center justify-center gap-8 md:gap-20 opacity-60'>
                    <div className='flex items-center gap-2 text-lg md:text-xl font-bold text-slate-700'>
                        <i className="ri-flashlight-line"></i>
                        PowerFit
                    </div>

                    <div className='flex items-center gap-2 text-lg md:text-xl font-bold text-slate-700'>
                        <i className="ri-heart-2-line"></i>
                        CardioPulse
                    </div>

                    <div className='flex items-center gap-2 text-lg md:text-xl font-bold text-slate-700'>
                        <i className="ri-flower-line"></i>
                        ZenYoga
                    </div>

                    <div className='flex items-center gap-2 text-lg md:text-xl font-bold text-slate-700'>
                        <i className="fa-solid fa-person-running"></i>
                        IronDojo
                    </div>

                    <div className='flex items-center gap-2 text-lg md:text-xl font-bold text-slate-700'>
                        <i className="fa-solid fa-person-swimming"></i>
                        AquaLife
                    </div>
                </div>
            </div>
        </section>

        {/* Features Grid*/}
        <section className='bg-[#f7f8f6] py-16 md:py-20'>
            <div className='mx-auto max-w-7xl px-4 md:px-8'>
                <div className='text-center mb-12 md:mb-16'>
                    <h2 className='text-3xl font-bold tracking-tight text-slate-900 mb-4'>Everything you need to run your gym</h2>
                    <p className='text-lg text-slate-600'>Streamline your operations with our comprehensive suite of tools designed for efficiency and growth.</p>
                </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8'>
                    <div className='group relative rounded-2xl bg-white p-6 md:p-8 shadow-sm hover:shadow-xl hover:shadow-[#15ec5b]/5 transition-all duration-300 border border-slate-100'>
                        <div className='inline-flex items-center justify-center bg-[#15ec5b]/10 p-3 rounded-lg text-[#15ec5b] mb-6 group-hover:bg-[#15ec5b] group-hover:text-slate-900 transition-colors'><i className="ri-calendar-2-line text-3xl"></i></div>
                        <h3 className='text-xl font-bold text-slate-900 mb-3'>Smart Scheduling</h3>
                        <p className='text-slate-600'>Drag-and-drop calendar for classes and PT sessions. Syncs in real-time with member apps to prevent double bookings.</p>
                    </div>

                    <div className='group relative rounded-2xl bg-white p-6 md:p-8 shadow-sm hover:shadow-xl hover:shadow-[#15ec5b]/5 transition-all duration-300 border border-slate-100'>
                        <div className='inline-flex items-center justify-center bg-[#15ec5b]/10 p-3 rounded-lg text-[#15ec5b] mb-6 group-hover:bg-[#15ec5b] group-hover:text-slate-900 transition-colors'><i className="fa-solid fa-money-bills text-3xl"></i></div>
                        <h3 className='text-xl font-bold text-slate-900 mb-3'>Automated Billing</h3>
                        <p className='text-slate-600'>Never chase a payment again. Automated invoicing, recurring memberships, and failed payment retries.</p>
                    </div>

                    <div className='group relative rounded-2xl bg-white p-6 md:p-8 shadow-sm hover:shadow-xl hover:shadow-[#15ec5b]/5 transition-all duration-300 border border-slate-100'>
                        <div className='inline-flex items-center justify-center bg-[#15ec5b]/10 p-3 rounded-lg text-[#15ec5b] mb-6 group-hover:bg-[#15ec5b] group-hover:text-slate-900 transition-colors'><i className="ri-group-line text-3xl"></i></div>
                        <h3 className='text-xl font-bold text-slate-900 mb-3'>Member Portal</h3>
                        <p className='text-slate-600'>Give members control. They can book classes, track progress, and update payment info from a dedicated app.</p>
                    </div>

                    <div className='group relative rounded-2xl bg-white p-6 md:p-8 shadow-sm hover:shadow-xl hover:shadow-[#15ec5b]/5 transition-all duration-300 border border-slate-100'>
                        <div className='inline-flex items-center justify-center bg-[#15ec5b]/10 p-3 rounded-lg text-[#15ec5b] mb-6 group-hover:bg-[#15ec5b] group-hover:text-slate-900 transition-colors'><i className="ri-bar-chart-2-fill text-3xl"></i></div>
                        <h3 className='text-xl font-bold text-slate-900 mb-3'>Insightful Reporting</h3>
                        <p className='text-slate-600'>Know your numbers. Track attendance, retention rates, and revenue growth with beautiful visual reports.</p>
                    </div>

                    <div className='group relative rounded-2xl bg-white p-6 md:p-8 shadow-sm hover:shadow-xl hover:shadow-[#15ec5b]/5 transition-all duration-300 border border-slate-100'>
                        <div className='inline-flex items-center justify-center bg-[#15ec5b]/10 p-3 rounded-lg text-[#15ec5b] mb-6 group-hover:bg-[#15ec5b] group-hover:text-slate-900 transition-colors'><i className="ri-store-3-line text-3xl"></i></div>
                        <h3 className='text-xl font-bold text-slate-900 mb-3'>Inventory Management</h3>
                        <p className='text-slate-600'>Sell supplements and gear easily. Track stock levels and get alerts when it's time to reorder.</p>
                    </div>
                    
                    <div className='group relative rounded-2xl bg-white p-6 md:p-8 shadow-sm hover:shadow-xl hover:shadow-[#15ec5b]/5 transition-all duration-300 border border-slate-100'>
                        <div className='inline-flex items-center justify-center bg-[#15ec5b]/10 p-3 rounded-lg text-[#15ec5b] mb-6 group-hover:bg-[#15ec5b] group-hover:text-slate-900 transition-colors'><i className="ri-megaphone-line text-3xl"></i></div>
                        <h3 className='text-xl font-bold text-slate-900 mb-3'>Marketing Tools</h3>
                        <p className='text-slate-600'>Built-in email and SMS marketing automation to keep your members engaged and motivated.</p>
                    </div>
                </div>
            </div>
        </section>

        {/* Role Based Section */}
        <section className='py-16 md:py-20'>
            <div className='mx-auto max-w-7xl px-4 md:px-8'>
                <div className='text-center mb-12 md:mb-16'>
                    <h2 className='text-3xl font-bold tracking-tight text-slate-900'>Built for every role in your gym</h2>
                </div>
                <div className='flex flex-col gap-16 md:gap-20'>
                    <div className='flex flex-col md:flex-row items-center gap-8 md:gap-12'>
                        <div className='w-full md:w-1/2 order-2 md:order-1'>
                            <span className='text-[#15ec5b] text-sm font-bold tracking-wide uppercase mb-2 block'>For Owners</span>
                            <h3 className='text-3xl font-bold text-slate-900 mb-4'>Complete Control & Overview</h3>
                            <p className='text-lg text-slate-600 mb-6'>Stop juggling spreadsheets. Get a bird's eye view of your business health, revenue streams, and staff performance in one dashboard.</p>
                            <ul className='space-y-3 mb-8'>
                                <li className='flex items-center gap-3 text-slate-700'>
                                    <i className="ri-checkbox-circle-line text-[#15ec5b]"></i>
                                    Real-time revenue tracking
                                </li>
                                <li className='flex items-center gap-3 text-slate-700'>
                                    <i className="ri-checkbox-circle-line text-[#15ec5b]"></i>
                                    Staff payroll management
                                </li>
                                <li className='flex items-center gap-3 text-slate-700'>
                                    <i className="ri-checkbox-circle-line text-[#15ec5b]"></i>
                                    Automated retention workflows
                                </li>
                            </ul>
                            <a className='text-[#15ec5b] font-bold hover:underline inline-flex items-center gap-1' href="">Learn more<i className="ri-arrow-right-line text-sm"></i></a>
                        </div>
                        <div className='w-full md:w-1/2 bg-slate-100 rounded-2xl p-6 aspect-video flex items-center justify-center overflow-hidden order-1 md:order-2'>
                            <img className='w-full h-full bg-cover bg-center rounded-lg shadow-lg' src={trainer1} alt="" />
                        </div>
                    </div>
                    <div className='flex flex-col md:flex-row-reverse items-center gap-8 md:gap-12'>
                        <div className='w-full md:w-1/2 order-2 md:order-1'>
                            <span className='text-[#15ec5b] text-sm font-bold tracking-wide uppercase mb-2 block'>For Trainers</span>
                            <h3 className='text-3xl font-bold text-slate-900 mb-4'>Focus on Training, Not Admin</h3>
                            <p className='text-lg text-slate-600 mb-6'>Empower your trainers with tools to manage their schedules and clients without the back-and-forth messaging.</p>
                            <ul className='space-y-3 mb-8'>
                                <li className='flex items-center gap-3 text-slate-700'>
                                    <i className="ri-checkbox-circle-line text-[#15ec5b]"></i>
                                    Mobile schedule management
                                </li>
                                <li className='flex items-center gap-3 text-slate-700'>
                                    <i className="ri-checkbox-circle-line text-[#15ec5b]"></i>
                                    Client progress tracking
                                </li>
                                <li className='flex items-center gap-3 text-slate-700'>
                                    <i className="ri-checkbox-circle-line text-[#15ec5b]"></i>
                                    Easy availability setting
                                </li>
                            </ul>
                            <a className='text-[#15ec5b] font-bold hover:underline inline-flex items-center gap-1' href="">Learn more<i className="ri-arrow-right-line text-sm"></i></a>
                        </div>
                        <div className='w-full md:w-1/2 bg-slate-100 rounded-2xl p-6 aspect-video flex items-center justify-center overflow-hidden order-1 md:order-2'>
                            <img className='w-full h-full bg-cover bg-center rounded-lg shadow-lg' src={trainer2} alt="" />
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* Testimonials */}
        <section className='py-16 md:py-20 bg-white border-t border-slate-200'>
            <div className='mx-auto max-w-7xl px-4 md:px-8'>
                <h2 className='text-center text-3xl font-bold tracking-tight text-slate-900 mb-12'>Loved by Fitness Professionals</h2>
                <div className='grid grid-cols-1 lg:grid-cols-3 gap-8'>
                    <div className='bg-[#f7f8f6] p-6 rounded-xl'>
                        <div className='flex text-[#15ec5b] mb-4'>
                            <i className="ri-star-line text-sm"></i>
                            <i className="ri-star-line text-sm"></i>
                            <i className="ri-star-line text-sm"></i>
                            <i className="ri-star-line text-sm"></i>
                            <i className="ri-star-line text-sm"></i>
                        </div>
                        <p className='text-slate-600 mb-6 italic'>
                            "FitFlow completely transformed how we manage our studio. The automated billing alone saved us 10 hours a week."
                        </p>
                        <div className='flex items-center gap-4 overflow-hidden'>
                            <img className='size-10 rounded-full bg-slate-300 bg-cover bg-center object-cover' src={ownerDp} alt="" />
                            <div className='ml-1'>
                                <h4 className='text-sm font-bold text-slate-900'>John Doe</h4>
                                <p className='text-xs text-slate-500'>Owner, MotionX Calisthenics</p>
                            </div>
                        </div>
                    </div>

                    <div className='bg-[#f7f8f6] p-6 rounded-xl'>
                        <div className='flex text-[#15ec5b] mb-4'>
                            <i className="ri-star-line text-sm"></i>
                            <i className="ri-star-line text-sm"></i>
                            <i className="ri-star-line text-sm"></i>
                            <i className="ri-star-line text-sm"></i>
                            <i className="ri-star-line text-sm"></i>
                        </div>
                        <p className='text-slate-600 mb-6 italic'>
                            "The member app is fantastic. Our clients love being able to book their spots instantly. Retention is up 20%."
                        </p>
                        <div className='flex items-center gap-4 overflow-hidden'>
                            <img className='size-10 rounded-full bg-slate-300 bg-cover bg-center object-cover' src={trainerDp} alt="" />
                            <div className='ml-1'>
                                <h4 className='text-sm font-bold text-slate-900'>Jane Smith</h4>
                                <p className='text-xs text-slate-500'>Director, InnerStill Studio</p>
                            </div>
                        </div>
                    </div>

                    <div className='bg-[#f7f8f6] p-6 rounded-xl'>
                        <div className='flex text-[#15ec5b] mb-4'>
                            <i className="ri-star-line text-sm"></i>
                            <i className="ri-star-line text-sm"></i>
                            <i className="ri-star-line text-sm"></i>
                            <i className="ri-star-line text-sm"></i>
                            <i className="ri-star-line text-sm"></i>
                        </div>
                        <p className='text-slate-600 mb-6 italic'>
                            "Finally, a software that doesn't feel like it was built in the 90s. Clean, fast, and does exactly what we need." 
                        </p>
                        <div className='flex items-center gap-4 overflow-hidden'>
                            <img className='size-10 rounded-full bg-slate-300 bg-cover bg-center object-cover' src={memberDp} alt="" />
                            <div className='ml-1'>
                                <h4 className='text-sm font-bold text-slate-900'>John Doe</h4>
                                <p className='text-xs text-slate-500'>Founder, Atlas Strength Club</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        {/* CTA Strip*/}
        <section className='py-16 md:py-20 bg-[#192b20] relative overflow-hidden before:absolute before:inset-[-50%] before:bg-[radial-gradient(circle,#0506051a_0.8px,transparent_0.8px)] before:bg-size-[4px_4px] before:rotate-45 before:scale-200'>
            <div className='absolute top-0 right-0 -mr-20 -mt-20 h-75 w-75 rounded-full bg-[#15ec5b]/25 blur-[80px]'></div>
            <div className='relative mx-auto max-w-4xl text-center px-4'>
                <h2 className='text-3xl font-bold tracking-tight text-white mb-6'>Ready to transform your gym?</h2>
                <p className='text-lg text-slate-300 mb-10'>Join 500+ gym owners who are scaling their business with FitFlow. Start your 14-day free trial today.</p>
                <div className='flex flex-col sm:flex-row items-center justify-center gap-4'>
                    <Link to="/signup" className='w-full sm:w-auto h-12 px-8 flex justify-center items-center rounded-lg bg-[#15ec5b] font-bold text-base hover:bg-emerald-400 transition-colors'>Get Started for Free</Link>
                    <button className='w-full sm:w-auto h-12 px-8 rounded-lg bg-transparent border border-slate-600 text-white font-bold text-base hover:bg-white/10 transition-colors'>Schedule a Call</button>
                </div>
            </div>
        </section>

        <footer className='bg-[#f7f8f6] border-t border-slate-200 pt-16 pb-8'>
            <div className='px-4 md:px-8 lg:px-24 max-w-7xl mx-auto'>
                <div className='flex flex-col lg:flex-row justify-between gap-12 mb-12'>
                    <div className='w-full lg:w-1/4'>
                        <div className='flex items-center gap-2 mb-4'>
                            <img 
                                className='h-6'
                                src={icon} 
                                alt="FitFlow Icon" 
                            />
                            <p className='text-xl font-bold text-slate-900'>FitFlow</p>
                        </div>
                        <p className='text-sm text-slate-500'>
                            Empowering fitness businesses with modern tools for modern growth.
                        </p>
                    </div>
                    <div className='w-full lg:w-auto'>
                        <h4 className='text-sm font-bold text-slate-900 mb-4'>Product</h4>
                        <ul className='space-y-2 text-slate-600'>
                            <li><a className='hover:text-[#15ec5b]' href="">Features</a></li>
                            <li><a className='hover:text-[#15ec5b]' href="">Pricing</a></li>
                            <li><a className='hover:text-[#15ec5b]' href="">API</a></li>
                            <li><a className='hover:text-[#15ec5b]' href="">Integrations</a></li>
                        </ul>
                    </div>
                    <div className='w-full lg:w-auto'>
                        <h4 className='text-sm font-bold text-slate-900 mb-4'>Company</h4>
                        <ul className='space-y-2 text-slate-600'>
                            <li><a className='hover:text-[#15ec5b]' href="">About Us</a></li>
                            <li><a className='hover:text-[#15ec5b]' href="">Careers</a></li>
                            <li><a className='hover:text-[#15ec5b]' href="">Blog</a></li>
                            <li><a className='hover:text-[#15ec5b]' href="">Contact</a></li>
                        </ul>
                    </div>
                    <div className='w-full lg:w-1/4'>
                        <h4 className='text-sm font-bold text-slate-900 mb-4'>Subscribe</h4>
                        <p className='text-sm text-slate-500 mb-3'>Get the latest updates and fitness business tips.</p>
                        <div className='flex items-center gap-2'>
                            <input 
                                className='w-full rounded bg-white px-3 py-2 border border-slate-300 text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-[#15ec5b]'
                                type="email" 
                                placeholder='Email address' 
                            />
                            <button className='rounded bg-[#15ec5b] px-3 py-1.5 hover:bg-emerald-400 transition-colors shrink-0'>
                                <span><i className="ri-arrow-right-line text-lg"></i></span> 
                            </button>
                        </div>
                    </div>
                </div>

                <div className='border-t border-slate-200 flex flex-col sm:flex-row justify-between items-center pt-8 gap-4 sm:gap-0'>
                    <p className='text-xs text-slate-500'>© 2023 FitFlow Inc. All rights reserved.</p>
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
