import React, { useState } from 'react'
import SignupContext from './SignupContext';
import { Outlet } from 'react-router-dom';

const SignupLayout = () => {

    const [signupData, setSignupData] = useState({
        name: '',
        email: '',
        password: '',
        role: '',
        roleData: {}
    });

  return (
    <SignupContext.Provider value={{signupData, setSignupData}}>
        <Outlet />
    </SignupContext.Provider>
  )
}

export default SignupLayout
