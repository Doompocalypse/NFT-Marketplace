import React from 'react';
import { useGoogleLogin } from '@react-oauth/google';
import { useAuth } from '../../hooks/useAuth';

interface GoogleSignInButtonProps {
  onSuccess?: () => void;
}

export function GoogleSignInButton({ onSuccess }: GoogleSignInButtonProps) {
  const { signInWithGoogle } = useAuth();
  const [error, setError] = React.useState<string | null>(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const login = useGoogleLogin({
    onSuccess: async (tokenResponse) => {
      try {
        setIsLoading(true);
        setError(null);
        await signInWithGoogle(tokenResponse);
        onSuccess?.();
      } catch (error) {
        setError('Failed to sign in with Google. Please try again.');
        console.error('Google sign in failed:', error);
      } finally {
        setIsLoading(false);
      }
    },
    onError: () => {
      setError('Google sign in failed. Please ensure popups are enabled and try again.');
    },
    flow: 'auth-code',
    scope: 'email profile',
    ux_mode: 'popup',
  });

  return (
    <div>
      <button
        onClick={() => {
          setError(null);
          login();
        }}
        disabled={isLoading}
        className="w-full flex items-center justify-center gap-2 px-4 py-2 border border-gray-300 rounded-lg shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
      >
        {!isLoading ? (
          <>
            <svg className="w-5 h-5" viewBox="0 0 24 24">
              <path
                fill="#4285F4"
                d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
              />
              <path
                fill="#34A853"
                d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
              />
              <path
                fill="#FBBC05"
                d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z"
              />
              <path
                fill="#EA4335"
                d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
              />
            </svg>
            Continue with Google
          </>
        ) : (
          <div className="flex items-center">
            <div className="w-5 h-5 border-2 border-gray-600 border-t-transparent rounded-full animate-spin mr-2" />
            Signing in...
          </div>
        )}
      </button>
      {error && (
        <div className="mt-2 p-2 text-sm text-red-600 bg-red-50 rounded-lg">
          {error}
        </div>
      )}
    </div>
  );
}