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
import OwnerDashboard from './pages/owner/OwnerDashboard'
import MemberManagement from './pages/owner/MemberManagement'
import TrainerManagement from './pages/owner/TrainerManagement'
import PaymentDashboard from './pages/owner/PaymentDashboard'
import NotificationDashboard from './pages/owner/NotificationDashboard'
import Settings from './pages/owner/Settings'
import Support from './pages/owner/Support'
import TrainerDashboard from './pages/trainer/TrainerDashboard'
import TrainerMemberManagement from './pages/trainer/TrainerMemberManagement'
import TrainerWorkoutPlans from './pages/trainer/TrainerWorkoutPlans'
import TrainerAssignWorkout from './pages/trainer/TrainerAssignWorkout'
import TrainerWorkspace from './pages/trainer/TrainerWorkspace'
import TrainerSettings from './pages/trainer/TrainerSettings'
import TrainerSupport from './pages/trainer/TrainerSupport'

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

        <Route path='/owner' element={<OwnerLayout />} >
          <Route path='dashboard' element={<OwnerDashboard />} />
          <Route path='members' element={<MemberManagement />} />
          <Route path='trainers' element={<TrainerManagement />} />
          <Route path='payments' element={<PaymentDashboard />} />
          <Route path='notifications' element={<NotificationDashboard />} />
          <Route path='settings' element={<Settings />} />
          <Route path='support' element={<Support />} />
        </Route>

        <Route path='/trainer' element={<TrainerLayout />} >
          <Route path='dashboard' element={<TrainerDashboard />} />
          <Route path='members' element={<TrainerMemberManagement />} />
          <Route path='workouts' element={<TrainerWorkoutPlans />} />
          <Route path='assignments' element={<TrainerAssignWorkout />} />
          <Route path='workspace' element={<TrainerWorkspace />} />
          <Route path='settings' element={<TrainerSettings />} />
          <Route path='support' element={<TrainerSupport />} />
        </Route>

        <Route path='/member/dashboard' element={<MemberLayout />} />
      </Routes>
    </div>
  )
}

export default App
