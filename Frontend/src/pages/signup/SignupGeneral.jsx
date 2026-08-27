import React, { useContext, useState } from 'react'
import ownerDp from '../../media/O.png'
import icon from '../../media/icon.png'
import googleLogo from '../../media/googleLogo.png'
import appleLogo from '../../media/appleLogo.svg'
import gymSignup from '../../media/gymSignup.jpeg'
import SignupContext from './SignupContext'
import { useNavigate } from 'react-router-dom'
import { baseSignupSchema } from '../../validations/auth.validation'

const Signup = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    role: 'OWNER',
  });
  const [errors, setErrors] = useState({});
  const [showPassword, setShowPassword] = useState(false);

  const { signupData, setSignupData } = useContext(SignupContext);
  const navigate = useNavigate();
  
  const handleNext = (e) => {
    e.preventDefault();

    const result = baseSignupSchema.safeParse(formData);

    if(!result.success) {
      const fieldErrors = {};

      result.error.issues.forEach((e) => {
        fieldErrors[e.path[0]] = e.message;
      });

      setErrors(fieldErrors);
      return;
    }

    setSignupData({
      ...signupData,
      name: formData.name,
      email: formData.email,
      password: formData.password,
      role: formData.role
    });
    navigate(`/signup/${formData.role.toLowerCase()}`);
  }
  

  return (
    <div className='font-display bg-[#f7f8f6] text-slate-900 antialiased'> 
      <div className='flex min-h-screen w-full'>
        {/* left */}
        <div className='w-full lg:w-2/5 flex flex-col justify-between p-6 h-full min-h-screen relative z-10 '>
          <div className='flex items-center gap-3 my-4 max-w-md w-full mx-auto'>
            <img className='h-8 w-8 rounded-xl shadow-sm' src={icon} alt="Icon" />
            <h1 className=' text-2xl font-bold tracking-tight text-slate-900'>FitFlow</h1>
          </div>

          <div className='flex-1 flex flex-col justify-center max-w-md w-full mx-auto space-y-8 mt-4'> 
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
                    left: formData.role === 'OWNER' ? '4px' : formData.role === 'TRAINER' ? 'calc(33.333% + 1.33px)' : 'calc(66.666% - 1.33px)'
                  }}
                />

                <label className='flex-1 cursor-pointer relative z-10'>
                  <input 
                    checked={formData.role === 'OWNER'}
                    className='sr-only' 
                    type="radio" 
                    name='role' 
                    value="OWNER"
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                  />
                  <div className={`flex h-full w-full items-center justify-center rounded-md text-sm font-medium transition-colors duration-300 ${
                    formData.role === 'OWNER' ? 'text-slate-900' : 'text-[#61896f]'
                  }`}>
                    Gym Owner
                  </div>
                </label>

                <label className='flex-1 cursor-pointer relative z-10'>
                  <input 
                    checked={formData.role === 'TRAINER'}
                    className='sr-only' 
                    type="radio" 
                    name='role' 
                    value="TRAINER" 
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                  />
                  <div className={`flex h-full w-full items-center justify-center rounded-md text-sm font-medium transition-colors duration-300 ${
                    formData.role === 'TRAINER' ? 'text-slate-900' : 'text-[#61896f]'
                  }`}>
                    Trainer
                  </div>
                </label>

                <label className='flex-1 cursor-pointer relative z-10'>
                  <input 
                    checked={formData.role === 'MEMBER'}
                    className='sr-only' 
                    type="radio" 
                    name='role' 
                    value="MEMBER" 
                    onChange={(e) => setFormData({...formData, role: e.target.value})}
                  />
                  <div className={`flex h-full w-full items-center justify-center rounded-md text-sm font-medium transition-colors duration-300 ${
                    formData.role === 'MEMBER' ? 'text-slate-900' : 'text-[#61896f]'
                  }`}>
                    Member
                  </div>
                </label>
                
              </div>
              {errors.role && <p className='text-red-500 text-sm'>{errors.role}</p>}
            </div>

            <form className='space-y-7' noValidate onSubmit={handleNext}>
              {/* Name */}
              <div className='flex flex-col gap-1.5'>
                <label className='text-base font-medium leading-normal' htmlFor="">Full Name</label>
                <div className='relative group'>
                  <input 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    className='form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-[#dbe6df] focus:outline-0 focus:ring-2 focus:ring-[#15ec5b]/50 focus:border-[#15ec5b] h-14 p-4 text-base font-normal leading-none transition-all' 
                    type="text" 
                    placeholder='John Doe' 
                  />
                  {errors.name && <p className='text-red-500 text-sm mt-1'>{errors.name}</p>}
                  <i className="ri-user-line material-symbol-outlined absolute right-4 top-4 group-focus-within:text-[#15ec5b] transition-colors"></i>
                </div>
              </div>
              
              {/* Email */}
              <div className='flex flex-col gap-1.5'>
                <label className='text-base font-medium leading-normal' htmlFor="">Work Email</label>
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

              {/* Password */}
              <div className='flex flex-col gap-1.5'>
                <label className='text-base font-medium leading-normal' htmlFor="">Password</label>
                <div className='relative group'>
                  <input 
                    value={formData.password}
                    onChange={(e) => setFormData({...formData, password: e.target.value})}
                    className='form-input flex w-full min-w-0 flex-1 resize-none overflow-hidden rounded-lg border border-[#dbe6df] focus:outline-0 focus:ring-2 focus:ring-[#15ec5b]/50 focus:border-[#15ec5b] h-14 p-4 pr-12 text-base font-normal leading-none transition-all' 
                    type={showPassword ? "text" : "password"}
                    placeholder='Create a strong password' 
                  />
                  <button 
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-4 top-4 hover:text-[#15ec5b] group-focus-within:text-[#15ec5b] focus:outline-none transition-colors"
                  >
                    <i className={`text-xl ${showPassword ? 'ri-eye-off-line' : 'ri-eye-line'} material-symbol-outlined`}></i>
                  </button>
                </div>
                {errors.password && <p className='text-red-500 text-sm mt-1'>{errors.password}</p>}
              </div>

              <button type='submit' className='w-full h-14 bg-[#15ec5b] px-4 text-base font-bold rounded-lg shadow-md hover:bg-[#0fd650] hover:shadow-lg hover:-translate-y-0.5 focus:ring-2 focus:outline-none focus:ring-[#15ec5b] focus:ring-offset-2 transition-all transform'>
                Create Account
              </button>
            </form>
          </div>
        </div>

        {/* right */}
        <div className='relative hidden lg:flex w-3/5 bg-[#122317]'>
          <div className='absolute h-full'>  
            <img className="w-full h-full object-cover opacity-50 bg-cover bg-center " src={gymSignup} alt="Gym Signup"  />
          </div>
          

          <div className='text-white relative z-10 flex flex-col justify-end p-16 h-full w-full'>
            <div className='max-w-xl space-y-8'>
              <div className='flex gap-1.5'>
                <i className="ri-star-line text-[#15ec5b] fill-current"></i>
                <i className="ri-star-line text-[#15ec5b] fill-current"></i>
                <i className="ri-star-line text-[#15ec5b] fill-current"></i>
                <i className="ri-star-line text-[#15ec5b] fill-current"></i>
                <i className="ri-star-line text-[#15ec5b] fill-current"></i>
              </div>

              <p className='text-3xl font-semibold leading-tight tracking-tight italic'>
                "FitFlow has centralized our operations. Member retention is up 40% and our trainers love the simplified scheduling."
              </p>

              <div className='flex items-center gap-4 pt-4 border-t border-white/20'>
                <img className='size-14 rounded-full object-cover border-2 border-[#15ec5b] shadow-lg shadow-[#15ec5b]/30' src={ownerDp} alt="" />
                <div className='flex flex-col gap-0.7'>
                  <p className='text-lg font-bold'>Alex Morgan</p>
                  <p className='text-sm font-medium text-gray-300'>Owner, IronFit Studio</p>
                </div>
              </div>

              <div className='flex items-center gap-8 pt-4 opacity-70'>
                <div className='flex items-center gap-2'>
                  <i className="ri-shield-user-fill text-xl"></i>
                  <p className='text-xs font-semibold uppercase tracking-wider'>Enterprise Security</p>
                </div>
                <div className='flex items-center gap-2'>
                  <i className="ri-verified-badge-line text-xl"></i>
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
