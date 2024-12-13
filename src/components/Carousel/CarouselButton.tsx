import React from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselButtonProps {
  direction: 'prev' | 'next';
  onClick: () => void;
  disabled: boolean;
  className?: string;
}

export function CarouselButton({ direction, onClick, disabled, className = '' }: CarouselButtonProps) {
  const Icon = direction === 'prev' ? ChevronLeft : ChevronRight;
  
  return (
    <button
      onClick={onClick}
      disabled={disabled}
      className={`
        absolute top-1/2 -translate-y-1/2 z-10
        p-3 rounded-full bg-white shadow-lg
        disabled:opacity-50 disabled:cursor-not-allowed
        hover:bg-gray-50 active:bg-gray-100
        focus:outline-none focus:ring-2 focus:ring-indigo-500
        transition-all duration-200
        ${className}
      `}
      aria-label={`${direction === 'prev' ? 'Previous' : 'Next'} NFT`}
    >
      <Icon className="w-6 h-6 text-gray-800" />
    </button>
  );
}