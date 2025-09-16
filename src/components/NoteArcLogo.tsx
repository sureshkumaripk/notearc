import React from 'react';

interface NoteArcLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg';
  showText?: boolean;
}

export default function NoteArcLogo({ className = '', size = 'md', showText = true }: NoteArcLogoProps) {
  const sizeClasses = {
    sm: 'w-6 h-6',
    md: 'w-8 h-8',
    lg: 'w-12 h-12'
  };

  const textSizes = {
    sm: 'text-sm',
    md: 'text-xl',
    lg: 'text-2xl'
  };

  return (
    <div className={`flex items-center space-x-2 ${className}`}>
      {/* Icon */}
      <div className={`${sizeClasses[size]} bg-gradient-to-br from-orange-400 to-orange-600 rounded-lg flex items-center justify-center shadow-sm`}>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          className="w-3/4 h-3/4"
        >
          {/* Document shape */}
          <path
            d="M6 4C6 3.44772 6.44772 3 7 3H14L18 7V20C18 20.5523 17.5523 21 17 21H7C6.44772 21 6 20.5523 6 20V4Z"
            fill="white"
            stroke="white"
            strokeWidth="0.5"
            transform="rotate(5 12 12)"
          />
          {/* Text lines */}
          <rect x="8" y="7" width="6" height="1" fill="white" transform="rotate(5 12 12)" />
          <rect x="8" y="9" width="4" height="1" fill="white" transform="rotate(5 12 12)" />
          <rect x="8" y="11" width="5" height="1" fill="white" transform="rotate(5 12 12)" />
        </svg>
      </div>
      
      {/* Text */}
      {showText && (
        <span className={`font-bold text-gray-900 ${textSizes[size]}`}>
          NoteArc
        </span>
      )}
    </div>
  );
}
