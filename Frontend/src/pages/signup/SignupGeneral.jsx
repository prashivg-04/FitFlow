import React, { useContext, useState } from 'react'
import navjot from '../../media/navjotImg.jpeg'
import icon from '../../media/icon.png'
import googleLogo from '../../media/googleLogo.png'
import appleLogo from '../../media/appleLogo.svg'
import gymSignup from '../../media/gymSignup.jpeg'
import SignupContext from './SignupContext'
import { useNavigate } from 'react-router-dom'

const Signup = () => {

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [selectedRole, setSelectedRole] = useState('OWNER');

  const { signupData, setSignupData } = useContext(SignupContext);
  const navigate = useNavigate();
  
  const handleNext = (e) => {
    e.preventDefault();
    setSignupData({
      ...signupData,
      name,
      email,
      password,
      role: selectedRole
    });
    console.log(signupData)
    console.log(selectedRole.toLowerCase())
    navigate(`/signup/${selectedRole.toLowerCase()}`);
  }
  

  return (
    <div className='font-display bg-[#f7f8f6] text-slate-900 antialiased'> 
      <div className='flex min-h-screen w-full'>
        {/* left */}
        <div className='w-2/5 flex flex-col justify-between p-6 h-full min-h-screen relative z-10 '>
          <div className='flex items-center gap-3 my-4 max-w-md w-full mx-auto'>
            <img className='h-8 w-8 rounded-xl shadow-sm' src={icon} alt="Icon" />
            <h1 className=' text-2xl font-bold tracking-tight text-slate-900'>GymFLow</h1>
          </div>

          <div className='flex-1 flex flex-col justify-center max-w-md w-full mx-auto space-y-8 mt-8'> 
            <div className='space-y-2'>
              <h2 className='text-4xl font-bold tracking-tight leading-tight'>Create your account</h2>
              <p className='text-[#61896f] text-base font-normal leading-normal'>
                Already have an account?
                <a className='font-semibold text-slate-900 ml-1 hover:underline decoration-[#15ec5b] underline-offset-4 decoration-2 transition-all' href="/login">Log in</a>
              </p>
            </div>

            <div>
              <label className='text-sm font-medium mb-3 block'>I am a</label>
              <div className='flex w-full h-14 rounded-lg bg-[#f0f4f2] p-1 relative'>
                {/* Sliding Background */}
                <div 
                  className='absolute h-[calc(100%-8px)] rounded-md bg-white shadow-[0_0_4px_#0000001a] transition-all duration-300 ease-in-out top-1'
                  style={{
                    width: 'calc(33.333% - 5.33px)',
                    left: selectedRole === 'OWNER' ? '4px' : selectedRole === 'TRAINER' ? 'calc(33.333% + 1.33px)' : 'calc(66.666% - 1.33px)'
                  }}
                />

                <label className='flex-1 cursor-pointer relative z-10'>
                  <input 
                    checked={selectedRole === 'OWNER'}
                    className='sr-only' 
                    type="radio" 
                    name='role' 
                    value="OWNER"
                    onChange={(e) => setSelectedRole(e.target.value)}
                  />
                  <div className={`flex h-full w-full items-center justify-center rounded-md text-sm font-medium transition-colors duration-300 ${
                    selectedRole === 'OWNER' ? 'text-slate-900' : 'text-[#61896f]'
                  }`}>
                    Gym Owner
                  </div>
                </label>

                <label className='flex-1 cursor-pointer relative z-10'>
                  <input 
                    checked={selectedRole === 'TRAINER'}
                    className='sr-only' 
                    type="radio" 
                    name='role' 
                    value="TRAINER" 
                    onChange={(e) => setSelectedRole(e.target.value)}
                  />
                  <div className={`flex h-full w-full items-center justify-center rounded-md text-sm font-medium transition-colors duration-300 ${
                    selectedRole === 'TRAINER' ? 'text-slate-900' : 'text-[#61896f]'
                  }`}>
                    Trainer
                  </div>
                </label>

                <label className='flex-1 cursor-pointer relative z-10'>
                  <input 
                    checked={selectedRole === 'MEMBER'}
                    className='sr-only' 
                    type="radio" 
                    name='role' 
                    value="MEMBER" 
                    onChange={(e) => setSelectedRole(e.target.value)}
                  />
                  <div className={`flex h-full w-full items-center justify-center rounded-md text-sm font-medium transition-colors duration-300 ${
                    selectedRole === 'MEMBER' ? 'text-slate-900' : 'text-[#61896f]'
                  }`}>
                    Member
                  </div>
                </label>
              </div>
            </div>

            <form className='space-y-7' onSubmit={handleNext}>
              {/* Name */}
              <div className='flex flex-col gap-1.5'>
                <label className='text-base font-medium leading-normal' htmlFor="">Full Name</label>
                <div className='relative group'>
                  <input 
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className='form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-[#dbe6df] focus:outline-0 focus:ring-2 focus:ring-[#15ec5b]/50 focus:border-[#15ec5b] h-14 p-4 text-base font-normal leading-none transition-all' 
                    type="text" 
                    placeholder='John Doe' 
                  />
                  <i class="ri-user-line material-symbol-outlined absolute right-4 top-4 group-focus-within:text-[#15ec5b] transition-colors"></i>
                </div>
              </div>
              
              {/* Email */}
              <div className='flex flex-col gap-1.5'>
                <label className='text-base font-medium leading-normal' htmlFor="">Work Email</label>
                <div className='relative group'>
                  <input 
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    className='form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-[#dbe6df] focus:outline-0 focus:ring-2 focus:ring-[#15ec5b]/50 focus:border-[#15ec5b] h-14 p-4 text-base font-normal leading-none transition-all' 
                    type="text" 
                    placeholder='john.doe@example.com' 
                  />
                  <i class="ri-mail-line material-symbol-outlined absolute right-4 top-4 group-focus-within:text-[#15ec5b] transition-colors"></i>
                </div>
              </div>

              {/* Password */}
              <div className='flex flex-col gap-1.5'>
                <label className='text-base font-medium leading-normal' htmlFor="">Password</label>
                <div className='relative group'>
                  <input 
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className='form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-[#dbe6df] focus:outline-0 focus:ring-2 focus:ring-[#15ec5b]/50 focus:border-[#15ec5b] h-14 p-4 text-base font-normal leading-none transition-all' 
                    type="password"  
                    placeholder='Min. 8 characters' 
                  />
                  <i class="ri-eye-line material-symbol-outlined absolute right-4 top-4 group-focus-within:text-[#15ec5b] transition-colors"></i>
                </div>
              </div>

              {/* Terms */}
              <div className='flex items-center justify-start gap-3 pt-2'>
                <div className='flex h-6 items-center'>
                  <input className='h-5 w-5 rounded border-[#dbe6df] bg-white accent-[#15ec5b] focus:ring-[#15ec5b] focus:ring-offset-0 cursor-pointer' type="checkbox" />
                </div>
                <label className='text-sm text-[#61896f] leading-relaxed' htmlFor="">
                  I agree to the 
                  <a className='underline decoration-1 underline-offset-2 hover:text-slate-900 transition-all mx-1' href="">Terms of Service</a>
                  and 
                  <a className='underline decoration-1 underline-offset-2 hover:text-slate-900 transition-all ml-1' href="">Privacy Policy</a>
                  .
                </label>
              </div>

              <button type='submit' className='w-full h-14 bg-[#15ec5b] px-4 text-base font-bold rounded-lg shadow-md hover:bg-[#0fd650] hover:shadow-lg hover:-translate-y-0.5 focus:ring-2 focus:outline-none focus:ring-[#15ec5b] focus:ring-offset-2 transition-all transform'>
                Create Account
              </button>

              <div className='relative flex items-center py-2 mt-2'>
                <div className='grow border-t border-[#dbe6df] '></div>
                <span className='shrink-0 mx-4 font-medium tracking-wider text-[#61896f]'>Or sign up with</span>
                <div className='grow border-t border-[#dbe6df] '></div>
              </div>

              <div className='grid grid-cols-2 gap-4'>
                <button className='flex items-center justify-center bg-white w-full h-14 gap-3 rounded-lg border border-[#dbe6df] px-5 text-[#111813] text-base font-medium hover:bg-gray-50 hover:border-gray-300 transition-colors'>
                  <img className='size-6' src={googleLogo} alt="Google Logo" />
                  Google
                </button>

                <button className='flex items-center justify-center bg-white w-full h-14 gap-3 rounded-lg border border-[#dbe6df] px-5 text-[#111813] text-base font-medium hover:bg-gray-50 hover:border-gray-300 transition-colors'>
                  <img className='h-8 w-8' src={appleLogo} alt="Apple Logo" />
                  Apple
                </button>
              </div>
            </form>
          </div>

          <div className='mt-12'>
            <p className='text-xs text-center text-[#61896f]'>
              © 2024 GymFlow Inc. All rights reserved.
            </p>
          </div>
        </div>

        {/* right */}
        <div className='relative flex w-3/5 bg-[#122317]'>
          <div className='absolute h-full'>  
            <img className="w-full h-full object-cover opacity-50 bg-cover bg-center " src={gymSignup} alt="Gym Signup"  />
          </div>
          

          <div className='text-white relative z-10 flex flex-col justify-end p-16 h-full w-full'>
            <div className='max-w-xl space-y-8'>
              <div className='flex gap-1.5'>
                <i class="ri-star-line text-[#15ec5b] fill-current"></i>
                <i class="ri-star-line text-[#15ec5b] fill-current"></i>
                <i class="ri-star-line text-[#15ec5b] fill-current"></i>
                <i class="ri-star-line text-[#15ec5b] fill-current"></i>
                <i class="ri-star-line text-[#15ec5b] fill-current"></i>
              </div>

              <p className='text-3xl font-semibold leading-tight tracking-tight italic'>
                "GymManager has centralized our operations. Member retention is up 40% and our trainers love the simplified scheduling."
              </p>

              <div className='flex items-center gap-4 pt-4 border-t border-white/20'>
                <img className='size-14 rounded-full object-cover border-2 border-[#15ec5b] shadow-lg shadow-[#15ec5b]/30' src={navjot} alt="" />
                <div className='flex flex-col gap-0.7'>
                  <p className='text-lg font-bold'>Alex Morgan</p>
                  <p className='text-sm font-medium text-gray-300'>Owner, IronFit Studio</p>
                </div>
              </div>

              <div className='flex items-center gap-8 pt-4 opacity-70'>
                <div className='flex items-center gap-2'>
                  <i class="ri-shield-user-fill text-xl"></i>
                  <p className='text-xs font-semibold uppercase tracking-wider'>Enterprise Security</p>
                </div>
                <div className='flex items-center gap-2'>
                  <i class="ri-verified-badge-line text-xl"></i>
                  <p className='text-xs font-semibold uppercase tracking-wider'>Verified Partner</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

export default Signup
