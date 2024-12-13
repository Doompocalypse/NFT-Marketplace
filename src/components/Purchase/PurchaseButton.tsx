import React from 'react';
import { ShoppingCart } from 'lucide-react';
import { useWallet } from '../../hooks/useWallet';

interface PurchaseButtonProps {
  onClick: () => void;
  price: number;
}

export function PurchaseButton({ onClick, price }: PurchaseButtonProps) {
  const { isConnected } = useWallet();

  return (
    <button
      onClick={onClick}
      disabled={!isConnected}
      className="group relative inline-flex items-center px-3.5 py-1.5 rounded-lg text-sm font-medium transition-all duration-200
        text-white bg-gradient-to-r from-indigo-600 to-purple-600 
        hover:from-indigo-700 hover:to-purple-700 
        disabled:from-gray-400 disabled:to-gray-400 disabled:cursor-not-allowed
        shadow-sm hover:shadow-md"
    >
      <ShoppingCart className="w-3.5 h-3.5 mr-1.5 transition-transform group-hover:scale-110" />
      <span className="text-xs">{isConnected ? 'Purchase' : 'Connect Wallet'}</span>
      
      {/* Tooltip for disconnected state */}
      {!isConnected && (
        <div className="absolute -top-8 left-1/2 -translate-x-1/2 px-2 py-1 bg-gray-900 text-white text-xs rounded opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap">
          Connect wallet to purchase
          <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-2 h-2 bg-gray-900 rotate-45" />
        </div>
      )}
    </button>
  );
}