import './App.css'
import { Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Signup from './pages/SignUp'
import Login from './pages/Login'
import OwnerSignup from './pages/owner/OwnerSignup'
import TrainerSignup from './pages/trainer/TrainerSignup'
import MemberSignup from './pages/member/MemberSignup'
import OwnerLayout from './pages/owner/OwnerLayout'
import TrainerLayout from './pages/trainer/TrainerLayout'
import MemberLayout from './pages/member/MemberLayout'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Welcome />}/>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/owner/signup' element={<OwnerSignup />} />
        <Route path='/trainer/signup' element={<TrainerSignup />} />
        <Route path='/member/signup' element={<MemberSignup />} />

        <Route path='/owner/dashboard' element={<OwnerLayout />} />

        <Route path='/trainer/dashboard' element={<TrainerLayout />} />

        <Route path='/member/dashboard' element={<MemberLayout />} />
      </Routes>
    </div>
  )
}

export default App
