import './App.css'
import { Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Signup from './pages/SignUp'
import Login from './pages/Login'
import OwnerSignup from './pages/owner/OwnerSignup'
import TrainerSignup from './pages/trainer/TrainerSignup'
import MemberSignup from './pages/member/MemberSignup'
import OwnerHome from './pages/owner/OwnerHome'
import TrainerHome from './pages/trainer/TrainerHome'
import MemberHome from './pages/member/MemberHome'

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

        <Route path='/owner/dashboard' element={<OwnerHome />} />

        <Route path='/trainer/dashboard' element={<TrainerHome />} />

        <Route path='/member/dashboard' element={<MemberHome />} />

      </Routes>
    </div>
  )
}

export default App
