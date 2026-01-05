import './App.css'
import { Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Signup from './pages/SignUp'
import Login from './pages/Login'
import OwnerSignup from './pages/owner/OwnerSignup'
import TrainerSignup from './pages/trainer/TrainerSignup'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Welcome />}/>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
        <Route path='/owner/signup' element={<OwnerSignup />} />
        <Route path='/trainer/signup' element={<TrainerSignup />} />
      </Routes>
    </div>
  )
}

export default App
