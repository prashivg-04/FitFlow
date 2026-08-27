import React, { useState } from 'react'
import { toast } from 'sonner'

const OwnerHeader = (props) => {
  const { gymName, gymCode, name } = props.gym || {};
  const { setIsSidebarOpen } = props;
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    if (gymCode) {
      navigator.clipboard.writeText(gymCode);
      setCopied(true);
      toast.success('Gym Code copied!');
      setTimeout(() => setCopied(false), 2000);
    }
  };

  return (
    <div>
      <header className='flex items-center justify-between h-20 px-4 sm:px-6 py-4 bg-white border-b border-[#f0f4f2]'>
        <div className='flex items-center gap-3 sm:gap-4'>
          <button 
            className='lg:hidden p-2 -ml-2 text-gray-600 hover:text-gray-900 rounded-lg hover:bg-gray-100'
            onClick={() => setIsSidebarOpen?.(true)}
          >
            <i className="ri-menu-2-line text-2xl"></i>
          </button>
          <div className='flex flex-col'>
            <h2 className='text-base sm:text-lg font-bold tracking-tight leading-tight'>{gymName || 'Gym Name'}</h2>
            <p className='text-[10px] sm:text-xs text-[#61896f]'>Welcome back, {name || 'User'}</p>
          </div>
        </div>

        <div className='flex flex-col'>
          <button 
            onClick={handleCopy}
            title="Copy Gym Code"
            className='group flex items-center gap-2 sm:gap-3 justify-center bg-[#15ec5b] px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg hover:bg-[#13c74a] shadow-sm shadow-[#15ec5b]/30 transition-colors'
          >
            <h1 className='text-sm sm:text-lg font-bold'>{gymCode || 'Gym Code'}</h1>
            {copied ? (
              <i className="ri-check-line text-base sm:text-lg"></i>
            ) : (
              <i className="ri-file-copy-line text-base sm:text-lg opacity-70 group-hover:opacity-100 transition-opacity"></i>
            )}
          </button>
        </div>
      </header>
    </div>
  )
}

export default OwnerHeader
