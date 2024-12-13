import React, { useState } from 'react';
import { X } from 'lucide-react';
import { SignInForm } from './SignInForm';
import { SignUpForm } from './SignUpForm';

interface AuthModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function AuthModal({ isOpen, onClose }: AuthModalProps) {
  const [mode, setMode] = useState<'signin' | 'signup'>('signin');

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50">
      <div className="min-h-screen px-4 text-center">
        {/* Background overlay */}
        <div 
          className="fixed inset-0 bg-black/50 backdrop-blur-sm" 
          onClick={onClose}
          aria-hidden="true"
        />

        {/* This element is to trick the browser into centering the modal contents. */}
        <span
          className="inline-block h-screen align-middle"
          aria-hidden="true"
        >
          &#8203;
        </span>

        {/* Modal panel */}
        <div className="inline-block w-full max-w-md p-6 my-8 text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
          <div className="absolute right-4 top-4">
            <button
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-500 transition-colors rounded-full hover:bg-gray-100"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
          
          <div className="mt-2">
            <h2 className="text-2xl font-semibold text-gray-900 text-center mb-6">
              Welcome to NFT Market
            </h2>
            
            <div className="flex space-x-4 mb-8">
              <button
                className={`flex-1 py-2.5 text-center border-b-2 transition-colors ${
                  mode === 'signin' 
                    ? 'border-indigo-600 text-indigo-600 font-medium' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setMode('signin')}
              >
                Sign In
              </button>
              <button
                className={`flex-1 py-2.5 text-center border-b-2 transition-colors ${
                  mode === 'signup' 
                    ? 'border-indigo-600 text-indigo-600 font-medium' 
                    : 'border-transparent text-gray-500 hover:text-gray-700'
                }`}
                onClick={() => setMode('signup')}
              >
                Sign Up
              </button>
            </div>
            
            <div className="mt-4">
              {mode === 'signin' ? (
                <SignInForm onClose={onClose} onSwitchToSignUp={() => setMode('signup')} />
              ) : (
                <SignUpForm onClose={onClose} onSwitchToSignIn={() => setMode('signin')} />
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}