import './App.css'
import { Routes, Route } from 'react-router-dom'
import Welcome from './pages/Welcome'
import SignupGeneral from './pages/signup/SignupGeneral'
import Login from './pages/Login'
import OwnerSignup from './pages/signup/OwnerSignup'
import TrainerSignup from './pages/signup/TrainerSignup'
import MemberSignup from './pages/signup/MemberSignup'
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
import MemberDashboard from './pages/member/MemberDashboard'
import MemberWorkout from './pages/member/MemberWorkout'
import MemberProgress from './pages/member/MemberProgress'
import MemberAttendance from './pages/member/MemberAttendance'
import MemberSubscription from './pages/member/MemberSubscription'
import MemberNotification from './pages/member/MemberNotification'
import MemberSettings from './pages/member/MemberSettings'
import MemberSupport from './pages/member/MemberSupport'
import MemberJoin from './pages/member/MemberJoin'
import TrainerJoin from './pages/trainer/TrainerJoin'
import PrivateRoute from './pages/PrivateRoute'
import PublicRoute from './pages/PublicRoute'
import { useDispatch } from 'react-redux'
import { useEffect } from 'react'
import api from './api/axios'
import { loginSuccess, logout } from './store/authSlice'
import SignupLayout from './pages/signup/SignupLayout'

function App() {

  const dispatch = useDispatch();

  useEffect(() => {
    const restoreSession = async () => {
      try {
        const response = await api.get('/auth/me');
        dispatch(loginSuccess(response.data.data));
      } catch(err) {
        dispatch(logout());
      }
    }

    restoreSession();
  }, [dispatch]);

  return (
    <div>
      <Routes>
        <Route element={<PublicRoute />}>
          <Route path='/' element={<Welcome />}/>
          <Route path='/login' element={<Login />} />

          <Route path='/signup' element={<SignupLayout />}>
            <Route index element={<SignupGeneral />} />
            <Route path='owner' element={<OwnerSignup />} />
            <Route path='trainer' element={<TrainerSignup />} />
            <Route path='member' element={<MemberSignup />} />
          </Route>
        </Route>

        <Route element={<PrivateRoute />}>
          <Route path='/trainer/join' element={<TrainerJoin />} />
          <Route path='/member/signup' element={<MemberSignup />} />
          <Route path='/member/join' element={<MemberJoin />} />

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

          <Route path='/member' element={<MemberLayout />} >
            <Route path='dashboard' element={<MemberDashboard />} />
            <Route path='workout' element={<MemberWorkout />} />
            <Route path='progress' element={<MemberProgress />} />
            <Route path='attendance' element={<MemberAttendance />} />
            <Route path='subscription' element={<MemberSubscription />} />
            <Route path='notifications' element={<MemberNotification />} />
            <Route path='settings' element={<MemberSettings />} />
            <Route path='support' element={<MemberSupport />} />
          </Route>
        </Route>
      </Routes>
    </div>
  )
}

export default App
