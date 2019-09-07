import React from 'react';
import { useDarkMode } from "./useDarkMode.js"; 

const Navbar = () => {
  const [darkMode, setDarkMode] = useDarkMode(false);
 
  const toggleMode = e => {
    e.preventDefault();
    setDarkMode(!darkMode);
  };
  return (
    <nav className={darkMode ? "navbar-dark" : "navbar"}>
      <h1> Toggle that Switch to see the Magic </h1>
      <div className="dark-mode__toggle">
        <div
          onClick={toggleMode}
          className={darkMode ? 'toggle toggled' : 'toggle'}
        />
      </div>
    </nav>
  );
};

export default Navbar;