import React from 'react';

interface CarouselProgressProps {
  total: number;
  current: number;
}

export function CarouselProgress({ total, current }: CarouselProgressProps) {
  return (
    <div className="absolute -bottom-12 left-1/2 -translate-x-1/2 flex items-center gap-3">
      {Array.from({ length: total }).map((_, index) => (
        <div
          key={index}
          className={`
            h-1.5 rounded-full transition-all duration-300
            ${index === current - 1 
              ? 'w-6 bg-gradient-to-r from-indigo-600 to-purple-600' 
              : 'w-1.5 bg-gray-300/50'
            }
          `}
          aria-label={`NFT ${index + 1} of ${total}`}
        />
      ))}
    </div>
  );
}