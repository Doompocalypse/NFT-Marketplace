import React from 'react';
import { PriceDisplay } from './PriceDisplay';
import { PurchaseButton } from './PurchaseButton';
import type { NFT } from '../../types/nft';

interface PurchaseInfoProps {
  nft: NFT;
  onPurchase: (nft: NFT) => void;
}

export function PurchaseInfo({ nft, onPurchase }: PurchaseInfoProps) {
  return (
    <div className="flex flex-col items-center space-y-4 mt-6 pt-4 border-t border-gray-100">
      <PriceDisplay price={nft.price} />
      <PurchaseButton 
        price={nft.price} 
        onClick={() => onPurchase(nft)} 
      />
    </div>
  );
}