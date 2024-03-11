import PropTypes from 'prop-types';
import { createContext, useState } from 'react';
import { getCookie } from '../utils/managerCookie';

export const AuthContext = createContext();

export function AuthProvider({ children }) {
  const [auth, setAuth] = useState(getCookie() ? true : false);

  const login = () => {
    setAuth(true);
  };

  const logout = () => {
    setAuth(false);
  };

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}
AuthProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
