"use client"

import { usePathname, useRouter } from 'next/navigation';
import { Menu } from 'lucide-react';
import { useState } from 'react';

export default function Header() {
  const pathname = usePathname();
  const router = useRouter();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleNavClick = (section: string) => {
    setIsMenuOpen(false);
    
    if (pathname !== '/home' && section !== 'Projects') {
      router.push('/home');
      // Wait for navigation to complete before scrolling
      setTimeout(() => {
        const element = document.getElementById(section.toLowerCase());
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
      return;
    }

    if (section === 'Projects') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      return;
    }

    const element = document.getElementById(section.toLowerCase());
    element?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-50">
      <div className="relative bg-primary-brown-dark/70 backdrop-filter backdrop-blur-lg py-6 px-4 md:px-12">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl md:text-4xl font-bold text-primary-red font-pp-mori-semibold absolute left-1/2 transform -translate-x-1/2">
            VENTURES, UNHINGED
          </h1>
          <button 
            className="md:hidden ml-auto z-20 text-text-headline hover:text-primary-red"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <Menu className="w-6 h-6" />
          </button>
          <nav className={`
            md:ml-auto
            ${isMenuOpen 
              ? 'absolute top-full left-0 right-0 bg-primary-brown-dark/95 backdrop-blur-lg p-4' 
              : 'hidden md:block'}
          `}>
            <ul className="flex md:space-x-6 flex-col md:flex-row space-y-4 md:space-y-0">
              {['Projects', 'About', 'Contact'].map((item) => (
                <li key={item}>
                  <button 
                    onClick={() => handleNavClick(item)}
                    className={`text-xl font-medium transition-colors hover:text-primary-red block w-full text-left
                      ${pathname === `/${item.toLowerCase()}` 
                        ? 'text-primary-red' 
                        : 'text-text-headline'}`}
                  >
                    {item}
                  </button>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </div>
    </header>
  );
}
