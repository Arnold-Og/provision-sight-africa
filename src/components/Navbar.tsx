import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import provisionLogo from '@/assets/provision-logo.png';

const navLinks = [
  { to: '/', label: 'Home' },
  { to: '/about', label: 'About' },
  { to: '/technology', label: 'Technology' },
  { to: '/how-it-works', label: 'How It Works' },
  { to: '/impact', label: 'Impact' },
  { to: '/research', label: 'Research' },
  { to: '/team', label: 'Team' },
  { to: '/partners', label: 'Partners' },
  { to: '/join', label: 'Join the Mission' },
  { to: '/contact', label: 'Contact' },
];

const Navbar = () => {
  const [open, setOpen] = useState(false);
  const location = useLocation();

  return (
    <header className="fixed top-0 left-0 right-0 z-40 bg-background/80 backdrop-blur-lg border-b border-border" role="banner">
      <nav className="container flex items-center justify-between h-16" aria-label="Main navigation">
        <Link to="/" className="flex items-center gap-2 focus-visible-ring rounded-sm" aria-label="Provision Sight Africa home">
          <img src={provisionLogo} alt="" className="h-10 w-auto" aria-hidden="true" />
          <span className="text-lg font-bold text-foreground hidden sm:inline">
            <span className="text-gradient-primary">Provision</span> Sight Africa
          </span>
        </Link>

        {/* Desktop */}
        <ul className="hidden lg:flex items-center gap-1" role="menubar">
          {navLinks.map(link => (
            <li key={link.to} role="none">
              <Link
                to={link.to}
                role="menuitem"
                className={`px-3 py-2 text-sm rounded-md transition-colors focus-visible-ring ${
                  location.pathname === link.to
                    ? 'text-primary bg-primary/10'
                    : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                }`}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          onClick={() => setOpen(!open)}
          className="lg:hidden p-2 text-foreground focus-visible-ring rounded-md"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-background border-b border-border overflow-hidden"
          >
            <ul className="container py-4 flex flex-col gap-1" role="menu">
              {navLinks.map(link => (
                <li key={link.to} role="none">
                  <Link
                    to={link.to}
                    role="menuitem"
                    onClick={() => setOpen(false)}
                    className={`block px-4 py-3 rounded-md transition-colors focus-visible-ring ${
                      location.pathname === link.to
                        ? 'text-primary bg-primary/10'
                        : 'text-muted-foreground hover:text-foreground hover:bg-muted'
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};

export default Navbar;
