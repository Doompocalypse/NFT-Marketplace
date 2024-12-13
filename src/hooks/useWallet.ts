import { useState, useCallback } from 'react';

export function useWallet() {
  const [address, setAddress] = useState('');
  const [isConnected, setIsConnected] = useState(false);

  const connectWallet = useCallback(async () => {
    if (typeof window.ethereum !== 'undefined') {
      try {
        const accounts = await window.ethereum.request({
          method: 'eth_requestAccounts',
        });
        setAddress(accounts[0]);
        setIsConnected(true);
      } catch (error) {
        console.error('Error connecting wallet:', error);
      }
    } else {
      alert('Please install MetaMask to use this feature!');
    }
  }, []);

  return { connectWallet, address, isConnected };
}