import React, { useContext } from 'react';
import { ThemeContext } from './ThemeProvider';
import { SunIcon, MoonIcon } from '@heroicons/react/24/solid';

const ThemeToggle = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <button 
      onClick={toggleTheme} 
      className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-600 transition"
    >
      {theme === 'light' ? 
        <MoonIcon className="h-6 w-6 text-gray-800" /> : 
        <SunIcon className="h-6 w-6 text-yellow-400" />
      }
    </button>
  );
};

export default ThemeToggle;
