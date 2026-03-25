import React from 'react';

const ComingSoonWrapper = ({ children, label = 'Coming Soon...' }) => {
  return (
    <div className="relative rounded-xl overflow-hidden">
      {/* Dimmed content underneath */}
      <div className="pointer-events-none select-none opacity-40 blur-[1px]">
        {children}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 rounded-xl bg-white/50 backdrop-blur-[2px]">
        
        {/* SVG cross lines — drawn corner to corner, no layout side effects */}
        <svg
          className="absolute inset-0 w-full h-full"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="none"
        >
          <line
            x1="0" y1="0" x2="100%" y2="100%"
            stroke="#d1d5db"
            strokeWidth="1.5"
            strokeDasharray="6 4"
          />
          <line
            x1="100%" y1="0" x2="0" y2="100%"
            stroke="#d1d5db"
            strokeWidth="1.5"
            strokeDasharray="6 4"
          />
        </svg>

        {/* Centered pill label */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="flex items-center gap-2 px-5 py-2 bg-white border border-gray-200 rounded-full shadow-md shadow-black/5">
            <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
            <span className="text-sm font-semibold text-gray-700 tracking-wide font-mono">
              {label}
            </span>
          </div>
        </div>

      </div>
    </div>
  );
};

export default ComingSoonWrapper;