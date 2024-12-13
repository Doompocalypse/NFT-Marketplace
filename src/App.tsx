import React, { useState } from 'react';
import { Header } from './components/Header';
import { Carousel } from './components/Carousel/Carousel';
import { SaleTimer } from './components/SaleTimer/SaleTimer';
import { BackgroundVideo } from './components/BackgroundVideo/BackgroundVideo';
import { nfts } from './data/nfts';
import type { NFT } from './types/nft';

export function App() {
  const [selectedNFT, setSelectedNFT] = useState<NFT | null>(null);

  const handlePurchase = (nft: NFT) => {
    if (!window.ethereum) {
      alert('Please install MetaMask to purchase NFTs!');
      return;
    }
    setSelectedNFT(nft);
    alert(`Initiating purchase of ${nft.name} for ${nft.price} ETH`);
  };

  return (
    <>
      <BackgroundVideo />
      <div className="min-h-screen">
        <Header />
        <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold text-white mb-4">Featured NFTs</h2>
            <p className="text-lg text-gray-200">Discover and collect extraordinary NFTs</p>
          </div>
          <SaleTimer />
          <Carousel nfts={nfts} onPurchase={handlePurchase} />
        </main>
      </div>
    </>
  );
}