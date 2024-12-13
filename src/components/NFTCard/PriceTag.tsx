import React from 'react';
import { calculatePrice } from '../../utils/price';

interface PriceTagProps {
  price: number;
}

export function PriceTag({ price }: PriceTagProps) {
  const { finalPrice, originalPrice, isDiscounted } = calculatePrice(price);

  return (
    <div className="flex flex-col">
      <div className="flex items-center space-x-2">
        <svg
          className="w-4 h-4 text-gray-600"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M20 12h-4l-2 3h-3.5L9 18H5"
          />
        </svg>
        <span className="text-lg font-medium text-gray-900">
          {finalPrice} ETH
        </span>
        {isDiscounted && (
          <span className="text-sm line-through text-gray-500">
            {originalPrice} ETH
          </span>
        )}
      </div>
      {isDiscounted && (
        <span className="text-xs text-green-600 font-medium">
          50% OFF - Limited Time!
        </span>
      )}
    </div>
  );
}