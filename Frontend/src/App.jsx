import './App.css'
import { Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import Signup from './pages/SignUp'
import Login from './pages/Login'

function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<Welcome />}/>
        <Route path='/signup' element={<Signup />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  )
}

export default App
