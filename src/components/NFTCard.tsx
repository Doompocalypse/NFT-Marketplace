import React from 'react';
import type { NFT } from '../types/nft';

interface NFTCardProps {
  nft: NFT;
  onPurchase: (nft: NFT) => void;
}

export function NFTCard({ nft, onPurchase }: NFTCardProps) {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden">
      <div className="relative pb-[100%]">
        <img
          src={nft.image}
          alt={nft.name}
          className="absolute inset-0 w-full h-full object-cover"
        />
      </div>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-gray-900">{nft.name}</h3>
        <p className="mt-1 text-sm text-gray-500">{nft.description}</p>
        <div className="mt-4 flex items-center justify-between">
          <span className="text-lg font-medium text-gray-900">{nft.price} ETH</span>
          <button
            onClick={() => onPurchase(nft)}
            className="px-4 py-2 bg-indigo-600 text-white text-sm font-medium rounded-md hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Purchase
          </button>
        </div>
      </div>
    </div>
  );
}