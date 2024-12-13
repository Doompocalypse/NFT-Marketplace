import { useState, useCallback } from 'react';
import type { User, SignUpData, SignInData } from '../types/auth';
import type { TokenResponse } from '@react-oauth/google';

export function useAuth() {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const signInWithGoogle = useCallback(async (response: TokenResponse) => {
    setIsLoading(true);
    setError(null);
    try {
      // In a real app, you would verify the token with your backend
      // For demo purposes, we'll create a mock user
      const mockUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        email: 'google.user@example.com',
        username: 'Google User',
        provider: 'google'
      };
      
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to sign in with Google');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const signInWithApple = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      // Implement Apple Sign In logic here
      const mockUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        email: 'apple.user@example.com',
        username: 'Apple User',
        provider: 'apple'
      };
      
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to sign in with Apple');
      throw err;
    } finally {
      setIsLoading(false);
    }
  }, []);

  const signUp = useCallback(async (data: SignUpData) => {
    setIsLoading(true);
    setError(null);
    try {
      const mockUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        email: data.email,
        username: data.username,
        provider: 'email'
      };
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to sign up');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const signIn = useCallback(async (data: SignInData) => {
    setIsLoading(true);
    setError(null);
    try {
      const mockUser: User = {
        id: Math.random().toString(36).substr(2, 9),
        email: data.email,
        username: data.email.split('@')[0],
        provider: 'email'
      };
      setUser(mockUser);
      localStorage.setItem('user', JSON.stringify(mockUser));
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to sign in');
    } finally {
      setIsLoading(false);
    }
  }, []);

  const signOut = useCallback(() => {
    setUser(null);
    localStorage.removeItem('user');
  }, []);

  return {
    user,
    isAuthenticated: !!user,
    isLoading,
    error,
    signUp,
    signIn,
    signInWithGoogle,
    signInWithApple,
    signOut
  };
}