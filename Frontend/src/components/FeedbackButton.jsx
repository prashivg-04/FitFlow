import React from 'react';

const FeedbackButton = ({ className = '' }) => {
  const handleClick = () => {
    window.open(import.meta.env.VITE_FEEDBACK_FORM_URL, '_blank');
  };

  return (
    <button
      onClick={handleClick}
      className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium 
      bg-slate-200 hover:bg-slate-300 transition-colors ${className}`}
    >
      📝 Feedback
    </button>
  );
};

export default FeedbackButton;