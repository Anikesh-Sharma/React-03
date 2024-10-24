// src/components/Navbar.js
import React, { useContext } from 'react';
import { ThemeContext } from '../contexts/ThemeContext';

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <nav style={{ background: theme === 'light' ? '#fff' : '#333', padding: '10px' }}>
      <h1>App Navbar - {theme} mode</h1>
      <button onClick={toggleTheme}>Toggle Theme</button>
    </nav>
  );
};

export default Navbar;
