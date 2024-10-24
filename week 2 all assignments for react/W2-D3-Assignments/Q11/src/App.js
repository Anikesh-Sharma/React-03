// src/App.js
import React, { useContext } from 'react';
import { ThemeProvider, ThemeContext } from './contexts/ThemeContext';
import { UserProvider, UserContext } from './contexts/UserContext';
import Navbar from './components/Navbar';
import Profile from './components/Profile';

const App = () => {
  return (
    <ThemeProvider>
      <UserProvider>
        <div>
          <Navbar />
          <Profile />
        </div>
      </UserProvider>
    </ThemeProvider>
  );
};

export default App;
