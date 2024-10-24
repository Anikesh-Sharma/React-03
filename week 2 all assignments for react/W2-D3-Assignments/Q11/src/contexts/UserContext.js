// src/contexts/UserContext.js
import React, { createContext, useState } from 'react';

// Create the UserContext
export const UserContext = createContext();

// Create the UserProvider component
export const UserProvider = ({ children }) => {
  // State to manage user authentication status and user information
  const [user, setUser] = useState({ isAuthenticated: false, name: '', email: '' });

  // Function to simulate user login
  const loginUser = (name, email) => {
    setUser({ isAuthenticated: true, name, email });
  };

  // Function to log out the user
  const logoutUser = () => {
    setUser({ isAuthenticated: false, name: '', email: '' });
  };

  return (
    <UserContext.Provider value={{ user, loginUser, logoutUser }}>
      {children}
    </UserContext.Provider>
  );
};
