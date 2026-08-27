import React from 'react'
import { useDispatch } from 'react-redux'
import { logout } from '../store/authSlice'
import { useNavigate } from 'react-router-dom'
import api from '../api/axios'
import { toast } from 'sonner'

const LogoutSidebar = () => {

    const dispatch = useDispatch()
    const navigate = useNavigate()

    const handleLogout = async () => {
        try {
            await api.post('/auth/logout');
        } finally {
            dispatch(logout())
            toast.success('Logged out successfully!');
            navigate('/login', { replace: true });
        }
    }

  return (
    <button 
        onClick={handleLogout} 
        className='w-full px-4 py-2 flex items-center gap-3 rounded-lg transition-all cursor-pointer text-[#61896f] hover:bg-[#fef2f2] hover:text-red-500'
    >
        <i className="text-lg ri-logout-circle-line"></i>
        <span className='font-medium text-base'>Logout</span>
    </button>
  )
}

export default LogoutSidebar
