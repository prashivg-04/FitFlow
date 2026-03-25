import React from 'react'
import { useNavigate } from 'react-router-dom'

const NotFound = () => {

    const navigate = useNavigate()

  return (
    <div className="h-screen flex flex-col items-center justify-center text-center">
      <h1 className="text-4xl font-bold mb-4">404</h1>
      <p className="text-lg mb-6">Page not found</p>

      <button
        onClick={() => navigate('/')}
        className="px-4 py-2 bg-black text-white rounded"
      >
        Go to Home
      </button>
    </div>
  )
}

export default NotFound
