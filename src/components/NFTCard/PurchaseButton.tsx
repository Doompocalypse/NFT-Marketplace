import React from 'react';

interface PurchaseButtonProps {
  onClick: () => void;
}

export function PurchaseButton({ onClick }: PurchaseButtonProps) {
  return (
    <button
      onClick={onClick}
      className="px-6 py-2.5 rounded-full text-sm font-medium text-white bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 transition-all shadow-lg shadow-indigo-200/50 hover:shadow-indigo-200/70"
    >
      Purchase
    </button>
  );
}