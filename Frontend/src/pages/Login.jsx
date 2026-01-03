import React from 'react'
import bgImg from '../media/gymLogin.jpg'
import navjot from '../media/navjotImg.jpeg'
import icon from '../media/icon.png'
import googleLogo from '../media/googleLogo.png'

const Login = () => {
  return (
    <div className='bg-[#f7f8f6] font-display antialiased min-h-screen'>
      <div className='flex w-full'>
        {/* Left */}
        <div className='flex w-1/2 min-h-screen relative overflow-hidden'>
          <img className='absolute inset-0 w-full h-full bg-cover bg-center ' src={bgImg} alt="" />

          <div className='relative z-10 flex flex-col justify-end p-16 w-full h-full'>
            <div className='mb-8'>
              <div className='flex items-center gap-2 mb-6'>
                <img 
                    className='h-10 w-10 rounded-xl'
                    src={icon} 
                    alt="GymFlow Icon" 
                />
                <p className='text-2xl font-bold text-white tracking-tight'>GymFlow</p>
              </div>

              <h2 className='text-5xl font-bold leading-tight text-white mb-4'>
                Elevate your gym 
                <br />
                <span className='text-[#15ec5b]'>management</span>
                <br />
                experience.
              </h2>

              <p className='text-slate-300 text-lg max-w-lg leading-relaxed'>
                Streamline operations, manage trainers, and engage members with our all-in-one platform designed for modern fitness businesses.
              </p>
            </div>

            <div className='flex items-center gap-4 mt-4 bg-white/5 backdrop-blur-md p-4 rounded-xl border border-white/10 max-w-sm'>
              <div className='overflow-hidden  '>
                <img className='size-10 rounded-full bg-slate-300 bg-cover bg-center object-cover border border-[#15ec5b]/50' src={navjot} alt="" />
              </div>

              <div>
                <div className='flex gap-1 mb-1'>
                  <i class="ri-star-line text-[#15ec5b] text-14px leading-none"></i>
                  <i class="ri-star-line text-[#15ec5b] text-14px leading-none"></i>
                  <i class="ri-star-line text-[#15ec5b] text-14px leading-none"></i>
                  <i class="ri-star-line text-[#15ec5b] text-14px leading-none"></i>
                  <i class="ri-star-line text-[#15ec5b] text-14px leading-none"></i>
                </div>
                <p className='text-sm font-medium text-slate-300 italic'>
                  "Changed how we run our business."
                </p>
                <p className='text-xs text-slate-400 mt-1'>Alex J., Owner at Iron Fitness</p>
              </div>
            </div>
          </div>
        </div>

        {/* Right */}
        <div>
          <div>
            <div>
              <h1>Welcome back</h1>
              <p>Please enter your details to sign in.</p>
            </div>

            <form action="">
              <label htmlFor="">
                <span>Email Address</span>
                <input type="email" placeholder='name@company.com' />
              </label>

              <label htmlFor="">
                <span>Password</span>
                <input type="password" placeholder='••••••••' />
                <div>
                  <i class="ri-eye-line"></i>
                </div>
              </label>

              <div>
                <a href="">Forgot password?</a>
              </div>

              <button>
                Sign in
              </button>

              <div>
                <div></div>
                <div>OR</div>
                <div></div>
              </div>

              <button>
                <img src={googleLogo} alt="Google Logo" />
                Sign in with Google
              </button>
            </form>

            <div>
              <p>
                Don't have an account? 
                <a href="">Sign up</a>
              </p>
            </div>

            <div>
              <p>
                <span>Note:</span>
                Supports Admin, Trainer, and Member login.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Login
