import { useState } from 'react';
import { Link } from 'react-scroll';
import github from '../assets/github-mark.svg';
import linkedin from '../assets/LI-In-Bug.png';
import { ArrowDownTrayIcon, Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid';
import Tooltip from './Tooltip';
import ThemeToggle from './ThemeToggle';

  // <Link to="projects" smooth={true} duration={500} spy={true} offset={-80} activeClass="text-blue-600 dark:text-blue-400" className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition">
  //   Projects
  // </Link>
export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = (
    <>
      <Link to="hero" smooth={true} duration={500} spy={true} offset={0} activeClass="text-blue-600 dark:text-blue-400" className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition">
        About
      </Link>
      <Link to="toolkit" smooth={true} duration={500} spy={true} offset={-80} activeClass="text-blue-600 dark:text-blue-400" className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition">
        Toolkit
      </Link>
      <Link to="experience" smooth={true} duration={500} spy={true} offset={-80} activeClass="text-blue-600 dark:text-blue-400" className="cursor-pointer hover:text-blue-600 dark:hover:text-blue-400 transition">
        Experience
      </Link>
    </>
  );

  return (
    <header className="bg-white dark:bg-gray-900 shadow-md sticky top-0 z-10">
      <div className="container max-w-screen-lg mx-auto px-6 py-4 flex justify-between items-center">
        <h1 className="text-2xl font-bold text-gray-800 dark:text-gray-200">
          Shivam Ashtikar
        </h1>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center space-x-6 text-lg">
          {navLinks}
          <div className="flex items-center space-x-4">
            <Tooltip text="GitHub" position="bottom">
              <a href="https://github.com/shivamashtikar" target="_blank" rel="noopener noreferrer">
                <img src={github} alt="GitHub" className="h-8 w-8 hover:opacity-75 transition dark:invert" />
              </a>
            </Tooltip>
            <Tooltip text="LinkedIn" position="bottom">
              <a href="https://linkedin.com/in/shivamashtikar" target="_blank" rel="noopener noreferrer">
                <img src={linkedin} alt="LinkedIn" className="h-8 w-8 hover:opacity-75 transition" />
              </a>
            </Tooltip>
            <ThemeToggle />
          </div>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden flex items-center">
          <ThemeToggle />
          <button onClick={() => setIsOpen(!isOpen)} className="ml-4">
            {isOpen ? <XMarkIcon className="h-8 w-8 text-gray-800 dark:text-gray-200" /> : <Bars3Icon className="h-8 w-8 text-gray-800 dark:text-gray-200" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white dark:bg-gray-900">
          <nav className="flex flex-col items-center space-y-4 py-4 text-lg">
            {navLinks}
          </nav>
        </div>
      )}
    </header>
  );
}
