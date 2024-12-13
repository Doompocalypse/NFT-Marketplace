import React, { useRef, useState } from 'react';
import { Play } from 'lucide-react';

interface VideoPlayerProps {
  videoUrl: string;
  thumbnailUrl: string;
  title: string;
}

export function VideoPlayer({ videoUrl, thumbnailUrl, title }: VideoPlayerProps) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  const handleMouseEnter = () => {
    if (!hasError && videoRef.current) {
      setIsHovered(true);
      // Preload the video
      videoRef.current.load();
      // Attempt to play only after loading
      videoRef.current.play().catch(() => {
        setHasError(true);
      });
    }
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    if (videoRef.current && !hasError) {
      videoRef.current.pause();
      videoRef.current.currentTime = 0;
    }
  };

  const handleLoadedData = () => {
    setIsLoading(false);
  };

  const handleError = () => {
    setHasError(true);
    setIsLoading(false);
    console.error(`Failed to load video: ${videoUrl}`);
  };

  return (
    <div 
      className="relative pb-[100%] bg-gradient-to-br from-gray-50 to-gray-100"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {!hasError ? (
        <>
          <video
            ref={videoRef}
            className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-300 ${
              isLoading ? 'opacity-0' : 'opacity-100'
            }`}
            poster={thumbnailUrl}
            muted
            playsInline
            loop
            preload="none"
            onError={handleError}
            onLoadedData={handleLoadedData}
            aria-label={`NFT video: ${title}`}
          >
            <source src={videoUrl} type="video/mp4" />
          </video>
          
          {/* Show thumbnail while video is loading */}
          {isLoading && (
            <img
              src={thumbnailUrl}
              alt={title}
              className="absolute inset-0 w-full h-full object-cover"
            />
          )}
        </>
      ) : (
        <img
          src={thumbnailUrl}
          alt={title}
          className="absolute inset-0 w-full h-full object-cover"
        />
      )}
      
      {/* Play button overlay */}
      {!isHovered && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="p-3 rounded-full bg-black/50 backdrop-blur-sm transition-transform hover:scale-110">
            <Play className="w-8 h-8 text-white" />
          </div>
        </div>
      )}

      {/* Loading indicator */}
      {isLoading && !hasError && (
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-8 h-8 border-2 border-indigo-600 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </div>
  );
}