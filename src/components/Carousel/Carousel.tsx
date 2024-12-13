import React, { useState, useEffect, useCallback } from 'react';
import type { NFT } from '../../types/nft';
import { NFTCard } from '../NFTCard/NFTCard';
import { CarouselButton } from './CarouselButton';
import { CarouselProgress } from './CarouselProgress';
import { ITEMS_PER_VIEW, AUTO_SLIDE_INTERVAL } from '../../utils/constants';

interface CarouselProps {
  nfts: NFT[];
  onPurchase: (nft: NFT) => void;
}

export function Carousel({ nfts, onPurchase }: CarouselProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const maxIndex = Math.max(0, nfts.length - ITEMS_PER_VIEW);

  const moveToIndex = useCallback((index: number) => {
    setCurrentIndex(Math.min(Math.max(0, index), maxIndex));
  }, [maxIndex]);

  const handlePrevious = useCallback(() => {
    moveToIndex(currentIndex - 1);
  }, [currentIndex, moveToIndex]);

  const handleNext = useCallback(() => {
    moveToIndex(currentIndex + 1);
  }, [currentIndex, moveToIndex]);

  useEffect(() => {
    const timer = setInterval(() => {
      moveToIndex(currentIndex === maxIndex ? 0 : currentIndex + 1);
    }, AUTO_SLIDE_INTERVAL);

    return () => clearInterval(timer);
  }, [currentIndex, maxIndex, moveToIndex]);

  return (
    <div className="relative max-w-7xl mx-auto px-12 pb-16">
      <CarouselButton
        direction="prev"
        onClick={handlePrevious}
        disabled={currentIndex === 0}
        className="-left-12"
      />
      <CarouselButton
        direction="next"
        onClick={handleNext}
        disabled={currentIndex === maxIndex}
        className="-right-12"
      />

      <div className="overflow-hidden">
        <div 
          className="transition-transform duration-300 ease-out flex"
          style={{ transform: `translateX(-${(currentIndex * (100 / ITEMS_PER_VIEW))}%)` }}
        >
          {nfts.map((nft) => (
            <div 
              key={nft.id} 
              className="w-1/3 flex-shrink-0 px-2"
            >
              <NFTCard nft={nft} onPurchase={onPurchase} />
            </div>
          ))}
        </div>
      </div>

      <CarouselProgress
        total={maxIndex + 1}
        current={currentIndex + 1}
      />
    </div>
  );
}