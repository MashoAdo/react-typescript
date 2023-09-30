import React, { createContext, useState } from 'react';

type AuthUser = {
  name: string;
  email: string;
};

type UserContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
};

type UserContextProps = {
  children: React.ReactNode;
};

export const UserContext = createContext<UserContextType>({} as UserContextType);

function UserContextProvider({ children }: UserContextProps) {
  const [user, setUser] = useState<AuthUser | null>(null);

  const values = {
    user,
    setUser,
  };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}

export default UserContextProvider;
