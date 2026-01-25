import { Link, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';
import logo from '../assets/logo.png';

function Navbar() {
  const location = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);
  const menuRef = useRef(null);
  const btnRef = useRef(null);
  
  const navItems = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Portfolio', path: '/portfolio' },
    { name: 'Team', path: '/team' },
    { name: 'Blog', path: '/blog' }
  ];

  // when isOpen toggles, mount/unmount menu to allow close animation
  useEffect(() => {
    let timeout;
    if (isOpen) {
      setIsMounted(true);
    } else {
      // wait for transition to finish before unmounting
      timeout = setTimeout(() => setIsMounted(false), 200);
    }
    return () => clearTimeout(timeout);
  }, [isOpen]);

  // outside click and Escape key handler
  useEffect(() => {
    function handleClick(e) {
      if (!isOpen) return;
      const target = e.target;
      if (menuRef.current && btnRef.current && !menuRef.current.contains(target) && !btnRef.current.contains(target)) {
        setIsOpen(false);
      }
    }

    function handleKey(e) {
      if (e.key === 'Escape') setIsOpen(false);
    }

    document.addEventListener('mousedown', handleClick);
    document.addEventListener('touchstart', handleClick);
    document.addEventListener('keydown', handleKey);
    return () => {
      document.removeEventListener('mousedown', handleClick);
      document.removeEventListener('touchstart', handleClick);
      document.removeEventListener('keydown', handleKey);
    };
  }, [isOpen]);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/70 backdrop-blur-md border-b border-slate-700/40">
      <div className="max-w-7xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center text-xl font-bold text-white hover:text-cyan-400 transition-colors">
            <img src={logo} alt="Abhiram logo" className="h-10 md:h-14 lg:h-16 object-contain mr-3" />
            <span className="sr-only">Build With Abhiram</span>
          </Link>
          
          <div className="hidden md:flex space-x-8">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-cyan-400'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>
          
          {/* Mobile hamburger button */}
          <div className="md:hidden flex items-center">
            <button
              ref={btnRef}
              onClick={() => setIsOpen((v) => !v)}
              aria-controls="mobile-menu"
              aria-expanded={isOpen}
              className="p-2 rounded-md text-slate-200 hover:text-white hover:bg-slate-800/60 transition-colors"
            >
              <span className="sr-only">Open main menu</span>
              <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </button>
          </div>

          <Link to="/contact" className="hidden md:inline-block px-6 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg transition-colors">
            Contact Us
          </Link>
        </div>
      </div>

      {/* Mobile dropdown menu */}
      {isMounted && (
        <div
          id="mobile-menu"
          ref={menuRef}
          className={`md:hidden px-6 pb-4 transform origin-top transition-transform duration-200 ease-out ${isOpen ? 'scale-100 pointer-events-auto' : 'scale-0 pointer-events-none'}`}
        >
          <div className="flex flex-col space-y-3 mt-2 mx-6 p-4 bg-slate-900/95 border border-slate-700/40 rounded-lg">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block font-medium transition-colors ${
                  location.pathname === item.path
                    ? 'text-cyan-400'
                    : 'text-slate-300 hover:text-white'
                }`}
              >
                {item.name}
              </Link>
            ))}

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="mt-2 inline-block px-4 py-2 bg-cyan-600 hover:bg-cyan-700 text-white font-medium rounded-lg text-center"
            >
              Contact Us
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}

// Manage mounting for animation and outside-click / Escape handling
// (kept outside React component to keep file-level helpers minimal)

export default Navbar;