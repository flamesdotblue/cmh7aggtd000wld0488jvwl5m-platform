import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { Moon, Sun, Phone } from 'lucide-react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [darkMode, setDarkMode] = useState(() => document.documentElement.classList.contains('dark'));

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const toggleTheme = () => {
    const next = !darkMode;
    setDarkMode(next);
    document.documentElement.classList.toggle('dark', next);
    localStorage.setItem('theme', next ? 'dark' : 'light');
  };

  return (
    <motion.header
      initial={{ y: -20, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: 'easeOut' }}
      className={`fixed top-0 inset-x-0 z-50 backdrop-blur-md transition-colors ${
        scrolled ? 'bg-white/70 dark:bg-black/40 shadow-sm' : 'bg-transparent'
      }`}
    >
      <nav className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
        <a href="#home" className="font-serif text-xl tracking-wide">
          <span className="font-semibold">Elegant</span> <span className="text-amber-600">Stitch</span>
        </a>
        <div className="hidden md:flex items-center gap-8 text-sm">
          <a href="#about" className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors">About</a>
          <a href="#services" className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors">Services</a>
          <a href="#portfolio" className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors">Portfolio</a>
          <a href="#contact" className="hover:text-amber-700 dark:hover:text-amber-400 transition-colors">Contact</a>
        </div>
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            className="hidden sm:flex items-center gap-2 rounded-full border border-amber-600/30 bg-amber-600 text-white px-4 py-2 text-sm hover:bg-amber-700 transition-colors"
          >
            <Phone size={16} /> Book a Fitting
          </a>
          <button
            aria-label="Toggle theme"
            onClick={toggleTheme}
            className="p-2 rounded-full border border-neutral-200/60 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 transition"
          >
            {darkMode ? <Sun size={18} /> : <Moon size={18} />}
          </button>
        </div>
      </nav>
    </motion.header>
  );
}
