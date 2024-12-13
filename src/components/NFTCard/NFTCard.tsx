import React from 'react';
import type { NFT } from '../../types/nft';
import { VideoPlayer } from './VideoPlayer';
import { PurchaseInfo } from '../Purchase/PurchaseInfo';

interface NFTCardProps {
  nft: NFT;
  onPurchase: (nft: NFT) => void;
}

export function NFTCard({ nft, onPurchase }: NFTCardProps) {
  return (
    <div className="glass-effect rounded-2xl overflow-hidden card-shadow hover-scale h-full">
      <VideoPlayer
        videoUrl={nft.videoUrl}
        thumbnailUrl={nft.thumbnailUrl}
        title={nft.name}
      />
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 truncate mb-2">{nft.name}</h3>
        <p className="text-sm text-gray-600 line-clamp-2 mb-3">{nft.description}</p>
        <div className="text-sm text-gray-500 mb-4">
          Created by <span className="font-medium text-gray-900">{nft.creator}</span>
        </div>
        <PurchaseInfo nft={nft} onPurchase={onPurchase} />
      </div>
    </div>
  );
}