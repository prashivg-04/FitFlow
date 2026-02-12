import React, { useEffect, useState } from 'react'
import icon from '../../assets/icon.svg'
import navjot from '../../media/navjotImg.jpeg'
import gym from '../../media/gymJoin.png'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import api from '../../api/axios'
import { loginSuccess } from '../../store/authSlice'

const MemberJoin = () => {

    const { user } = useSelector((state) => state.auth);
    const dispatch = useDispatch();
    const navigate = useNavigate();

    useEffect(() => {
        if(user?.gymStatus === 'ACTIVE') {
            navigate('/member/dashboard', { replace: true });
        }
    }, [user, navigate]);

    const [gymCode, setGymCode] = useState('');
    const [message, setMessage] = useState('');

    const handleJoin = async (e) => {
        e.preventDefault();

        try {
            const response = await api.post('/join-request', {
                gymCode: gymCode
            });
            setMessage('Join request sent successfully! Waiting for approval.');

            const meResponse = await api.get('/auth/me');
            dispatch(loginSuccess(meResponse.data.data));
        } catch(err) {
            setMessage(err.response?.data?.message || "Something went wrong");
        }
    }

  return (
    <div className='bg-[#f7f8f6] min-h-screen'>
      <header className='flex items-center justify-between h-20 px-6 py-4 bg-white border-b border-[#f0f4f2]'>
        <div className='h-20 flex items-center px-8 border-b border-[#f0f4f2]'>
            <div className='flex items-center gap-3'>
                <div className='size-10 flex items-center justify-center'> 
                    <img className='rounded-lg' src={icon} alt="" />
                </div>
                <div className='flex flex-col'>
                    <h1 className='text-xl font-bold tracking-tight leading-none'>GymFlow</h1>
                    <p className='text-xs font-medium text-[#61896f] mt-1'>Gym Member</p>
                </div>
            </div>
        </div>

        <div className='flex items-center gap-4'>
          <button className='p-2 rounded-full hover:bg-slate-100 transition-colors'>
            <i class="text-lg fa-solid fa-bell text-slate-600"></i>
          </button>
          <div>
            <img className='size-12 bg-gray-50 bg-center bg-cover rounded-full object-cover border-2 border-[#15ec5b]/20 aspect-square' src={navjot} alt="" />
          </div>
        </div>
      </header>
      
      <div className='flex-1 max-w-5xl mx-auto w-full px-6 py-12 space-y-12'>
        <section className='text-center space-y-6'>
            <div className='space-y-2'>
                <h1 className='text-slate-900 tracking-tight leading-tight text-5xl font-extrabold font-display'>Welcome to Your Fitness Journey 💪</h1>
                <p className='text-slate-500 text-lg max-w-2xl mx-auto'>We're excited to help you reach your goals. Let's get your profile connected to your local gym.</p>
            </div>
            <div className='inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 border border-slate-200'>
                <span className='size-2 rounded-full bg-amber-400 animate-pulse'></span>
                <p className='text-sm font-medium text-slate-700'>Not part of any gym yet</p>
            </div>
        </section>

        <section className='relative group'>
            <div className='absolute -inset-1 bg-linear-to-r from-[#15ec5b] to-emerald-400 rounded-2xl blur opacity-30 group-hover:opacity-50 transition duration-1000'></div>
            <div className='relative bg-white rounded-2xl shadow-xl overflow-hidden border border-slate-100'>
                <div className='flex'>
                    <img className='w-1/2 bg-center bg-cover bg-no-repeat min-h-75' src={gym} alt="" />
                    <div className='w-1/2 p-12 flex flex-col justify-center space-y-6'>
                        <div className='space-y-2'>
                            <h3 className='text-2xl font-bold text-slate-900 font-display'>Join Your Gym</h3>
                            <p className='text-slate-500 '>Enter the unique access code provided by your fitness center to sync your training plans and track your progress.</p>
                        </div>

                        {/* GymCode */}
                        {
                            user?.gymStatus === 'NONE' && 
                            <form className='space-y-4' onSubmit={handleJoin}>
                                <div className='relative'>
                                    <i class="ri-key-fill absolute left-4 top-1/2 -translate-y-1/2 text-[24px] text-slate-400"></i>
                                    <input 
                                        value={gymCode}
                                        onChange={(e) => setGymCode(e.target.value)}
                                        className='w-full pl-12 pr-4 py-4 rounded-xl border-2 border-slate-100 focus:border-[#15ec5b] focus:ring-0 focus:outline-none transition-all font-mono text-lg tracking-widest uppercase' 
                                        type="text" 
                                        placeholder='Enter Gym Code' />
                                </div>
                                <button className='w-full py-4 bg-[#15ec5b] font-bold rounded-xl hover:scale-[1.02] active:scale-95 shadow-lg shadow-[#15ec5b]/20 transition-all'>Request to Join</button>
                                <p className='text-center text-xs text-slate-400'>Can't find your code? Ask your gym administrator for your FitFlow Member Key.</p>
                            </form>
                        }

                        {   
                            user?.gymStatus === 'PENDING' && 
                            <div className='space-y-4'>
                                <div className='w-full flex items-center justify-center py-4 bg-[#15ec5b] font-bold rounded-xl hover:scale-[1.02] active:scale-95 shadow-lg shadow-[#15ec5b]/20 transition-all'>Request Sent</div>
                                <p className='text-center text-xs text-slate-400'>Waiting for owner approval.</p>
                            </div>
                        }
                    </div>
                </div>
            </div>
        </section>

        <section className='grid grid-cols-3 gap-6'>
            <div className='bg-white p-6 rounded-2xl border border-slate-100 hover:border-[#15ec5b]/50 transition-colors'>
                <div className='size-12 rounded-xl bg-[#15ec5b]/10 flex items-center justify-center text-[#15ec5b] mb-4'>
                    <i class="ri-file-text-line text-[24px]"></i>
                </div>
                <h4 className='text-lg font-bold mb-2 font-display'>Personalized Plans</h4>
                <p className='text-sm text-slate-500'>Tailored workout routines synced directly from your trainer.</p>
            </div>

            <div className='bg-white p-6 rounded-2xl border border-slate-100 hover:border-[#15ec5b]/50 transition-colors'>
                <div className='size-12 rounded-xl bg-[#15ec5b]/10 flex items-center justify-center text-[#15ec5b] mb-4'>
                    <i class="ri-bar-chart-grouped-fill text-[24px]"></i>
                </div>
                <h4 className='text-lg font-bold mb-2 font-display'>Visual Tracking</h4>
                <p className='text-sm text-slate-500'>See your progress through intuitive charts and achievement badges.</p>
            </div>

            <div className='bg-[#15ec5b]/5 p-6 rounded-2xl border-2 border-dashed border-[#15ec5b]/30 flex flex-col justify-between'>
                <div>
                    <h4 className='text-slate-900 font-bold mb-2 flex items-center gap-2 font-display'>
                        <i class="ri-question-line text-[#15ec5b] text-xl"></i>
                        How it works
                    </h4>
                    <p className='text-xs text-[#61896f] leading-relaxed'>Your gym generates a unique code that links your personal profile to their facility management system. This ensures your privacy while allowing trainers to assign programs.</p>
                </div>
                <a className='text-xs font-bold text-[#15ec5b] mt-4 hover:underline flex items-center gap-1 p-1' href="">
                    Learn More <i class="ri-arrow-right-line"></i>
                </a>
            </div>
        </section>

        <section className='py-6'>
            <div className='rounded-3xl bg-linear-to-r from-[#15ec5b]/10 via-[#f6f8f6] to-[#15ec5b]/10 p-8 text-center border border-[#15ec5b]/10'>
                <p className='text-2xl italic font-medium text-slate-700 font-display'>"Small steps every day lead to big results."</p>
                <div className='mt-6 flex justify-center gap-8 grayscale opacity-50 contrast-125'>
                    <i class="fa-solid fa-dumbbell text-2xl"></i>
                    <i class="fa-regular fa-clock text-2xl"></i>
                    <i class="fa-regular fa-heart text-2xl"></i>
                    <i class="fa-solid fa-child-reaching text-2xl"></i>
                </div>
            </div>
            <div className='mt-8 text-center space-y-4'>
                <div className='flex justify-center gap-6 text-sm font-medium text-slate-500'>
                    <a className='hover:text-[#15ec5b] transition-colors' href="">Support</a>
                    <a className='hover:text-[#15ec5b] transition-colors' href="">Privacy</a>
                    <a className='hover:text-[#15ec5b] transition-colors' href="">Terms</a>
                </div>
                <p className='text-xs text-slate-400 tracking-widest'>© 2024 FitFlow SaaS. All rights reserved.</p>
            </div>
        </section>
      </div>
    </div>
  )
}

export default MemberJoin
