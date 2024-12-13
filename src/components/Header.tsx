import React, { useState } from 'react';
import { Wallet, User } from 'lucide-react';
import { useWallet } from '../hooks/useWallet';
import { useAuth } from '../hooks/useAuth';
import { AuthModal } from './Auth/AuthModal';

export function Header() {
  const { connectWallet, address, isConnected } = useWallet();
  const { user, isAuthenticated, signOut } = useAuth();
  const [isAuthModalOpen, setIsAuthModalOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 right-0 bg-black/20 backdrop-blur-md z-40 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center">
              <svg className="w-6 h-6 text-white" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
              </svg>
            </div>
            <h1 className="text-2xl font-bold text-white">NFT Market</h1>
          </div>
          
          <div className="flex items-center space-x-4">
            {isAuthenticated ? (
              <div className="flex items-center space-x-4">
                <span className="text-sm text-gray-300">
                  Welcome, <span className="font-medium text-white">{user?.username}</span>
                </span>
                <button
                  onClick={signOut}
                  className="text-sm text-gray-300 hover:text-white transition-colors"
                >
                  Sign Out
                </button>
              </div>
            ) : (
              <button
                onClick={() => setIsAuthModalOpen(true)}
                className="inline-flex items-center px-4 py-2 rounded-full text-sm font-medium text-white hover:bg-white/10 transition-all"
              >
                <User className="h-5 w-5 mr-2" />
                Sign In
              </button>
            )}

            <button
              onClick={connectWallet}
              className="inline-flex items-center px-6 py-2.5 rounded-full text-sm font-medium text-white bg-white/10 hover:bg-white/20 transition-all"
            >
              <Wallet className="h-5 w-5 mr-2" />
              {isConnected ? `${address.slice(0, 6)}...${address.slice(-4)}` : 'Connect Wallet'}
            </button>
          </div>
        </div>
      </div>

      <AuthModal
        isOpen={isAuthModalOpen}
        onClose={() => setIsAuthModalOpen(false)}
      />
    </header>
  );
}