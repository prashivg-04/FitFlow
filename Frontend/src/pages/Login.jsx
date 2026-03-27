import React, { useState, useEffect } from 'react'
import bgImg from '../media/gymLogin.jpg'
import navjot from '../media/navjotImg.jpeg'
import icon from '../media/icon.png'
import googleLogo from '../media/googleLogo.png'
import api from '../api/axios'
import { useDispatch, useSelector } from 'react-redux';
import { loginFailure, loginStart, loginSuccess } from '../store/authSlice'
import { useNavigate } from 'react-router-dom';
import { toast } from 'sonner';
import { loginSchema } from '../validations/auth.validation'
import { set } from 'zod'

const Login = () => {

  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const [errors, setErrors] = useState({});

  const dispatch = useDispatch();
  const navigate = useNavigate();

  const { user, isAuthenticated, loading } = useSelector((state) => state.auth);

  useEffect(() => {
    if(!isAuthenticated || !user?.role) return;
      
    if(user.role === 'OWNER') {
      navigate('/owner/dashboard', { replace: true });
      return;
    } 
    
    if(user.role === 'TRAINER') {
      if(user.gymStatus === 'ACTIVE') {
        navigate('/trainer/dashboard', { replace: true });
      } else {
        navigate('/trainer/join', { replace: true });
      }
      return;
    }

    if(user.role === 'MEMBER') {
      if(user.gymStatus === 'ACTIVE') {
        navigate('/member/dashboard', { replace: true });
      } else {
        navigate('/member/join', { replace: true });
      }
      return;
    }

  }, [isAuthenticated, user, navigate]);

  const handleLogin = async (e) => {
    e.preventDefault();
    dispatch(loginStart());

    const result = loginSchema.safeParse(formData);
    if(!result.success) {
      const fieldErrors = {};

      result.error.issues.forEach((error) => {
        const fieldName = error.path[0];
        fieldErrors[fieldName] = error.message;
      });

      setErrors(fieldErrors);
      dispatch(loginFailure('Validation failed. Please check your input.'));
      return;
    }

    setErrors({});

    try {
      const response = await api.post('/auth/login', {
        email: formData.email,
        password: formData.password
      });
      dispatch(loginSuccess(response.data.data));
      toast.success('Login successful!');
    } catch(err) {
      dispatch(loginFailure(err.response?.data?.message || 'Login failed. Please try again.'));
    }
  }

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
                    alt="FitFlow Icon" 
                />
                <p className='text-2xl font-bold text-white tracking-tight'>FitFlow</p>
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
                  <i className="ri-star-line text-[#15ec5b] text-14px leading-none"></i>
                  <i className="ri-star-line text-[#15ec5b] text-14px leading-none"></i>
                  <i className="ri-star-line text-[#15ec5b] text-14px leading-none"></i>
                  <i className="ri-star-line text-[#15ec5b] text-14px leading-none"></i>
                  <i className="ri-star-line text-[#15ec5b] text-14px leading-none"></i>
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
        <div className='w-1/2 p-6 relative flex items-center justify-center'>
          <div className='w-full flex flex-col max-w-110 gap-6'>
            <div className='flex flex-col gap-2 mb-2'>
              <h1 className='text-slate-900 text-[32px] font-bold leading-tight tracking-tight'>Welcome back</h1>
              <p className='text-slate-400 text-base font-normal'>Please enter your details to login.</p>
            </div>

            <form onSubmit={handleLogin} noValidate className='flex flex-col gap-5'>
              <div className='flex flex-col gap-1.5'>
                <label className='text-base font-medium leading-normal' htmlFor="">Email</label>
                <div className='relative group'>
                  <input 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    className='form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-[#dbe6df] focus:outline-0 focus:ring-2 focus:ring-[#15ec5b]/50 focus:border-[#15ec5b] h-14 p-4 text-base font-normal leading-none transition-all' 
                    type="email" 
                    placeholder='john.doe@example.com'
                  />
                  {errors.email && <p className='text-red-500 text-sm mt-1'>{errors.email}</p>}
                  <i className="ri-mail-line material-symbol-outlined absolute right-4 top-4 group-focus-within:text-[#15ec5b] transition-colors"></i>
                </div>
              </div>

              <div className='flex flex-col gap-1.5'>
                <label className='text-base font-medium leading-normal' htmlFor="">Password</label>
                <div className='relative group'>
                  <input 
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className='form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-[#dbe6df] focus:outline-0 focus:ring-2 focus:ring-[#15ec5b]/50 focus:border-[#15ec5b] h-14 p-4 text-base font-normal leading-none transition-all' 
                    type="password"  
                    placeholder='Enter your password' 
                  />
                  {errors.password && <p className='text-red-500 text-sm mt-1'>{errors.password}</p>}
                  <i className="ri-eye-line material-symbol-outlined absolute right-4 top-4 group-focus-within:text-[#15ec5b] transition-colors"></i>
                </div>
              </div>

              <div className='flex justify-end'>
                <a className='text-sm font-medium text-[#111813] hover:text-[#15ec5b]' href="">Forgot password?</a>
              </div>

              <button 
                disabled={loading}
                className='flex justify-center items-center text-center rounded-lg w-full bg-[#15ec5b] h-14 text-slate-900 text-base font-bold tracking-wide px-5 shadow-lg shadow-[#15ec5b]/20 hover:bg-[#0fdc53] transition-colors'
              >
                {loading ? 'Logging in...' : 'Login'}
              </button>

              <div className='relative flex items-center py-2 mt-2'>
                <div className='grow border-t border-[#dbe6df] '></div>
                <span className='shrink-0 mx-4 text-xs font-medium uppercase tracking-wider text-[#61896f]'>OR</span>
                <div className='grow border-t border-[#dbe6df] '></div>
              </div>

              <div className='flex items-center justify-center bg-white w-full h-14 gap-3 rounded-lg border border-[#dbe6df] px-5 text-[#111813] text-base font-medium hover:bg-gray-50 hover:border-gray-300 transition-colors'>
                <img className='size-6' src={googleLogo} alt="Google Logo" />
                Login with Google
              </div>
            </form>

            <div className='text-center mt-4'>
              <p className='text-[#61896f] text-sm'>
                Don't have an account? 
                <a className='text-[#111813] font-bold ml-2 hover:underline' href="/signup">Sign up</a>
              </p>
            </div>

            <div className='mt-8 p-4 bg-[#15ec5b]/10 rounded-lg border border-[#15ec5b]/20 text-center'>
              <p className='text-xs text-[#61896f] '>
                <span className='text-[#111813] font-bold mr-1'>Note:</span>
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
