import { useEffect } from 'react';
import Navbar from './components/Navbar.jsx';
import Hero from './components/Hero.jsx';
import Showcases from './components/Showcases.jsx';
import Contact from './components/Contact.jsx';

function App() {
  useEffect(() => {
    // Respect system preference on first load if no stored theme
    const stored = localStorage.getItem('theme');
    if (!stored) {
      const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
      document.documentElement.classList.toggle('dark', prefersDark);
    }
  }, []);

  return (
    <div className="min-h-screen bg-stone-50 text-stone-900 dark:bg-neutral-950 dark:text-neutral-100 selection:bg-yellow-200/60">
      <Navbar />
      <main>
        <Hero />
        <Showcases />
        <Contact />
      </main>
    </div>
  );
}

export default App;
