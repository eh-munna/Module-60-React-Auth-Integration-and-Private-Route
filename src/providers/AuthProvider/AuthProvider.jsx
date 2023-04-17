import React, { createContext, useContext } from 'react';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const user = { displayName: 'Demo' };
  return <AuthContext.Provider value={user}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
