"use client"

import { User } from "@/index.types";
import useUserStore from "@/stores/userStore";
import React, { useEffect, useState } from "react"
import FlashScreen from "./FlashScreen";

type propTypes = {
  children: React.ReactNode;
}

type UserPromise = { initialToken: string | null; initialUser: User | null };

function UserContextProvider({ children }: propTypes) {
  const { setToken, setUser } = useUserStore();
  const [loading, setLoading] = useState(true);

  const userPromise = (): Promise<UserPromise> => {
    return new Promise((resolve, reject) => {
      const stringifyUserData = localStorage.getItem('user');
      const initialUser = stringifyUserData ? JSON.parse(stringifyUserData) : null;
      const initialToken = localStorage.getItem('token') || null;

      resolve({ initialToken, initialUser });
    });
  };

  useEffect(() => {
    userPromise()
      .then((res) => {
        setToken(res.initialToken);
        setUser(res.initialUser);
        setLoading(false);
      });
  }, []);

  if (loading) return <FlashScreen />;

  return children;
}

export default UserContextProvider