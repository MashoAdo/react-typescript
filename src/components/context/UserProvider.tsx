import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';

type AuthUser = {
  name: string;
  email: string;
};

type UserContextType = {
  user: AuthUser | null;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
  isLoading: boolean;
  toggleLoading: () => void;
};

type UserContextProps = {
  children: React.ReactNode;
};

const UserContext = createContext({} as UserContextType);

function UserContextProvider({ children }: UserContextProps) {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const toggleLoading = () => setIsLoading(!isLoading);

  const values = {
    user,
    isLoading,
    setUser,
    toggleLoading,
  };
  return <UserContext.Provider value={values}>{children}</UserContext.Provider>;
}

UserContextProvider.propTypes = {
  children: PropTypes.node.isRequired,
};

export { UserContext, UserContextProvider };
