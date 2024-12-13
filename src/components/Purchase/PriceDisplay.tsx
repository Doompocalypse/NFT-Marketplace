import React from 'react';
import { Tag } from 'lucide-react';
import { formatEth } from '../../utils/format';
import { calculatePrice } from '../../utils/price';

interface PriceDisplayProps {
  price: number;
}

export function PriceDisplay({ price }: PriceDisplayProps) {
  const { finalPrice, originalPrice, isDiscounted } = calculatePrice(price);

  return (
    <div className="flex flex-col items-center text-center">
      <div className="flex items-center space-x-2 mb-1">
        <div className="p-1.5 rounded-lg bg-indigo-50">
          <Tag className="w-4 h-4 text-indigo-600" />
        </div>
        <div className="flex items-baseline space-x-2">
          <span className="text-xl font-semibold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
            {formatEth(finalPrice)}
          </span>
          {isDiscounted && (
            <span className="text-sm line-through text-gray-400">
              {formatEth(originalPrice)}
            </span>
          )}
        </div>
      </div>
      {isDiscounted && (
        <div className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
          50% OFF - Limited Time!
        </div>
      )}
    </div>
  );
}