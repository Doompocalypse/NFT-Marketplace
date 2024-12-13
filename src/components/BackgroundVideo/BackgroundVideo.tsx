import React from 'react';

export function BackgroundVideo() {
  return (
    <div className="fixed inset-0 -z-10 overflow-hidden">
      {/* Static background image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{
          backgroundImage: 'url(https://ibb.co/Tgrfb24)',
        }}
      />

      {/* Overlay gradient for better text readability */}
      <div className="absolute inset-0 bg-gradient-to-br from-black/70 via-black/50 to-black/60 backdrop-blur-[1px]" />
    </div>
  );
}