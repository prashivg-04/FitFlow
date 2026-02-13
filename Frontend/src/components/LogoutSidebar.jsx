import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../store/authSlice'
import { useNavigate } from 'react-router-dom'
import api from '../api/axios'

const LogoutSidebar = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await api.post('/auth/logout');
        } catch(err) {
            console.error('Logout failed:', err);
        } finally {
            dispatch(logout())
            navigate('/login', { replace: true });
        }
    }

  return (
    <div className='flex items-center justify-start rounded-lg text-[#61896f] hover:text-red-500 hover:bg-[#f7f8f6]'>
        <button onClick={handleLogout} className='p-2 pl-8 flex items-center gap-2 text-md font-medium  transition-colors'>
            <i class="fa-solid fa-arrow-right-from-bracket"></i>
            Logout
        </button>
    </div>
  )
}

export default LogoutSidebar
