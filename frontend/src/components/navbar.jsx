import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

export default function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Search', path: '/main' },
    { name: 'Audio', path: '/audio-search' },
    { name: 'Add Song', path: '/form' },
    { name: 'About', path: '/about' },
  ];

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-[#F7F6F3] border-b border-[#E2E1DC] h-[52px]">
      <div className="flex justify-between items-center h-full px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="flex items-center gap-6">
          <Link 
            to="/main" 
            className="font-headline-md text-headline-md text-primary tracking-tighter hover:opacity-85 transition-opacity"
          >
            Lyricist
          </Link>
          <nav className="hidden md:flex gap-6 items-center">
            {navLinks.map((link) => {
              const isActive = location.pathname === link.path;
              return (
                <Link
                  key={link.name}
                  to={link.path}
                  className={`font-label-caps text-label-caps uppercase pb-0.5 transition-colors duration-100 hover:text-primary ${
                    isActive
                      ? 'text-primary border-b border-primary'
                      : 'text-secondary'
                  }`}
                >
                  {link.name}
                </Link>
              );
            })}
          </nav>
        </div>

        <div className="flex items-center gap-4">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden text-primary hover:text-secondary transition-colors focus:outline-none"
            aria-label="Toggle navigation menu"
          >
            <span className="material-symbols-outlined flex items-center">
              {isOpen ? 'close' : 'menu'}
            </span>
          </button>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isOpen && (
        <nav className="md:hidden absolute top-[52px] left-0 w-full bg-[#F7F6F3] border-b border-[#E2E1DC] flex flex-col py-4 px-margin-mobile gap-4 z-40">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.path;
            return (
              <Link
                key={link.name}
                to={link.path}
                onClick={() => setIsOpen(false)}
                className={`font-label-caps text-label-caps uppercase py-1 border-b border-transparent transition-colors duration-100 hover:text-primary ${
                  isActive
                    ? 'text-primary font-medium'
                    : 'text-secondary'
                }`}
              >
                {link.name}
              </Link>
            );
          })}
        </nav>
      )}
    </header>
  );
}
