export interface User {
  id: string;
  email: string;
  username: string;
  walletAddress?: string;
  provider?: 'email' | 'google' | 'apple';
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}

export interface SignUpData {
  email: string;
  username: string;
  password: string;
}

export interface SignInData {
  email: string;
  password: string;
}