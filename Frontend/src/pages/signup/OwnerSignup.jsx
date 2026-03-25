import React, { useContext, useEffect, useState } from 'react'
import SignupContext from './SignupContext';
import { useNavigate } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import api from '../../api/axios';
import { loginSuccess } from '../../store/authSlice';
import { toast } from 'sonner';

const OwnerSignup = () => {

  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { signupData, setSignupData } = useContext(SignupContext);

  useEffect(() => {
    if(!signupData.role || signupData.role !== 'OWNER') {
      navigate('/signup');
    }
  }, []);

  const [gymName, setGymName] = useState('');
  const [city, setCity] = useState('');
  const [address, setAddress] = useState('');
  const [phone, setPhone] = useState('');
  const [openingTime, setOpeningTime] = useState('');
  const [closingTime, setClosingTime] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const updatedData = {
      ...signupData,
      roleData: {
        gymName,
        city,
        address,
        phone,
        openingTime,
        closingTime
      }
    };

    try {
      const response = await api.post('/auth/signup', updatedData);
      dispatch(loginSuccess(response.data.data));
      toast.success('Owner Account Created Successfully!');
      navigate('/owner/dashboard');
    } catch(err) {
      console.error('Signup failed:', err);
    }

    setGymName('');
    setCity('');
    setAddress('');
    setPhone('');
    setOpeningTime('');
    setClosingTime('');
  }

  return (
    <div className='bg-[#f7f8f6] font-display text-slate-900 min-h-screen flex flex-col overflow-x-hidden antialiased'>
      <div className='layout-container flex flex-col items-center h-full py-8 px-4'>
        <div className='w-full max-w-200 flex flex-col gap-6'>
          {/* Header */}
          <div className='flex flex-col gap-4'>
            {/* Progress */}
            <div className='flex flex-col gap-2'>
              <div className='flex justify-between items-end'>
                <p className='text-sm font-semibold uppercase tracking-wider'>
                  Step 2 of 2
                </p>

                <p className='text-xs font-medium text-[#61896f]'>
                  Almost Done
                </p>
              </div>

              <div className='h-0.5 w-full bg-[#15ec5b] rounded-full overflow-hidden'>
              </div>
            </div>

            {/* Heading */}
            <div className='flex flex-col gap-2 mt-4'>
              <h1 className='text-4xl font-black leading-tight tracking-tight'>
                Set Up Your Gym
              </h1>

              <p className='text-[#61896f] text-base font-normal leading-normal max-w-lg'>
                Let’s get your gym ready in under 2 minutes. We just need a few details to customize your dashboard.
              </p>
            </div>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className='bg-white rounded-2xl shadow-soft border border-transparent p-8 flex flex-col gap-8 mt-2'>
            {/* Gym Info */}
            <div className='flex flex-col gap-5'>
              {/* Heading */}
              <div className='flex items-center gap-3 border-b border-gray-100 pb-3'>
                <div className='size-8 rounded-full bg-[#15ec5b]/20 flex items-center justify-center '>
                  <i class="fa-solid fa-dumbbell text-lg text-[#15ec5b]"></i>
                </div>
                <h2 className='text-lg font-bold leading-tight'>Gym Information</h2>
              </div>

              <div className='grid grid-cols-2 gap-5'>
                {/* Gym Name */}
                <div className='col-span-2'>
                  <label className='flex flex-col gap-1 flex-1'>
                    <p className='text-sm font-medium leading-normal'>Gym Name</p>
                    <input 
                      value={gymName}
                      onChange={(e) => setGymName(e.target.value)}
                      className='form-input flex w-full h-12 mt-1 resize-none overflow-hidden rounded-lg focus:outline-0 focus:ring-2 focus:ring-[#15ec5b]/50 border border-[#dbe6df] bg-white focus:border-[#15ec5b] placeholder:text-[#61896f] px-4 text-base font-normal leading-normal transition-all'
                      type="text" 
                      placeholder='e.g. Iron Paradise Gym'
                    />
                  </label>
                </div>

                {/* Address */}
                <div className='col-span-2'>
                  <label className='flex flex-col gap-1 flex-1'>
                    <p className='text-sm font-medium leading-normal'>Gym Address</p>
                    <div className='relative'>
                      <i class="ri-map-pin-2-line absolute left-4 mt-7 -translate-y-1/2 text-[20px] text-[#61896f]"></i>
                      <input 
                        value={address}
                        onChange={(e) => setAddress(e.target.value)}
                        className='form-input flex w-full h-12 mt-1 resize-none overflow-hidden rounded-lg focus:outline-0 focus:ring-2 focus:ring-[#15ec5b]/50 border border-[#dbe6df] bg-white focus:border-[#15ec5b] placeholder:text-[#61896f] pl-11 pr-4 text-base font-normal leading-normal transition-all'
                        type="text" 
                        placeholder='123 Fitness Blvd' 
                      />
                    </div>
                  </label>
                </div>
                
                {/* City */}
                <div>
                  <label className='flex flex-col gap-2 flex-1'>
                    <p className='text-sm font-medium leading-normal'>City</p>
                    <input 
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className='form-input flex w-full h-12 overflow-hidden rounded-lg bg-white border border-[#dbe6df] focus:outline-0 focus:ring-2 focus:ring-[#15ec5b]/50 focus:border-[#15ec5b] placeholder:text-[#61896f] px-4 text-base font-normal leading-normal transition-all' 
                      type="text" 
                      placeholder='New York' 
                    />
                  </label>
                </div>

                {/* Contact Number */}
                <div>
                  <label className='flex flex-col gap-2 flex-1'>
                    <p className='text-sm font-medium leading-normal'>Contact Number</p>
                    <input 
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className='form-input flex w-full h-12 overflow-hidden rounded-lg bg-white border border-[#dbe6df] focus:outline-0 focus:ring-2 focus:ring-[#15ec5b]/50 focus:border-[#15ec5b] placeholder:text-[#61896f] px-4 text-base font-normal leading-normal transition-all' 
                      type="tel" 
                      placeholder='+1 (555) 000-0000' 
                    />
                  </label>
                </div>
              </div>
            </div>

            {/* Business Details */}
            <div className='flex flex-col gap-5'>
              {/* Heading */}
              <div className='flex items-center gap-3 border-b border-gray-100 pb-3'>
                <div className='size-8 rounded-full bg-[#15ec5b]/20 flex items-center justify-center'>
                  <i class="ri-building-line text-lg text-[#15ec5b]"></i>
                </div>
                <h2 className='text-lg font-bold leading-tight'>Business Details</h2>
              </div>

              {/* Form */}
              <div className='grid grid-cols-2 gap-5'>
                <div className='col-span-2'>
                  <label className='flex flex-col flex-1 gap-2'>
                    <p className='text-sm font-medium leading-normal'>Operating Hours</p>
                    <div className='flex items-center gap-3'>
                      {/* Opening Time */}
                      <div className='relative flex-1'>
                        <span className='absolute left-3 top-1/2 -translate-y-1/2 text-[#61896f] text-xs font-semibold uppercase'>OPEN</span>
                        <input 
                          value={openingTime}
                          onChange={(e) => setOpeningTime(e.target.value)}
                          className='w-full h-12 bg-white pl-14 pr-4 rounded-lg border border-[#dbe6df] focus:outline-none focus:ring-2 focus:ring-[#15ec5b]/50 focus:border-[#15ec5b] transition-all' 
                          type="time" 
                        />
                      </div>
                      <span>-</span>
                      {/* Closing Time */}
                      <div className='relative flex-1'>
                        <span className='absolute left-3 top-1/2 -translate-y-1/2 text-[#61896f] text-xs font-semibold uppercase'>CLOSE</span>
                        <input 
                          value={closingTime}
                          onChange={(e) => setClosingTime(e.target.value)}
                          className='w-full h-12 bg-white pl-14 pr-4 rounded-lg border border-[#dbe6df] focus:outline-none focus:ring-2 focus:ring-[#15ec5b]/50 focus:border-[#15ec5b] transition-all' 
                          type="time"
                        />
                      </div>
                    </div>
                  </label>
                </div>
              </div>
            </div>

            {/* Actions */}
            <div className='flex items-center justify-end gap-4 pt-4 mt-2'>
              <button type='submit' className='bg-[#15ec5b] w-full py-3.5 px-8 rounded-lg shadow-lg shadow-[#15ec5b]/25 text-base font-bold transition-all flex items-center justify-center gap-2 hover:bg-[#11d450]'>
                <span>Create Gym & Continue</span>
                <i class="ri-arrow-right-line text-[20px] font-bold"></i>
              </button>
            </div>
          </form>

          {/* Conditions */}
          <p className='text-center text-xs text-gray-400 pb-8'>
            By clicking "Complete Signup", you agree to our
            <a className='text-[#15ec5b] hover:underline' href=""> Terms of Service</a>
            .
          </p>
        </div>
      </div>
    </div>
  )
}

export default OwnerSignup
