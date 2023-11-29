'use client'

import { User } from '@/index.types';
import create from 'zustand';

interface userState {
  user: null | User;
  token: null | string;
  setUser: (user: User) => void;
  setToken: (token: string) => void;
  removeUserAndToken: () => void;
}

const useUserStore = create<userState>((set) => {
  const stringifyUserData = localStorage.getItem('user');
  const initialUser = stringifyUserData ? JSON.parse(stringifyUserData) : null;
  const initialToken = localStorage.getItem('token') || null;

  return ({
    user: initialUser,
    token: initialToken,
    setUser: (user) => {
      localStorage.setItem('user', JSON.stringify(user));
      set({ user });
    },
    setToken: (token) => {
      localStorage.setItem('token', token);
      set({ token });
    },
    removeUserAndToken: () => {
      localStorage.removeItem('user');
      localStorage.removeItem('token');
      set({ user: null, token: null });
    }
  })
});

export default useUserStore;
