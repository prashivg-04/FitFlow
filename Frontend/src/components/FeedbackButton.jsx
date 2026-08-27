import React from 'react';

const FeedbackButton = ({ className = '' }) => {
  const handleClick = () => {
    window.open(import.meta.env.VITE_FEEDBACK_FORM_URL, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={`w-full px-4 py-2 flex items-center gap-3 rounded-lg transition-all cursor-pointer text-[#61896f] hover:bg-[#f7f8f6] hover:text-[#15ec5b] ${className}`}
    >
      <i className="text-lg ri-chat-smile-3-line"></i>
      <span className='font-medium text-base'>Feedback</span>
    </button>
  );
};

export default FeedbackButton;