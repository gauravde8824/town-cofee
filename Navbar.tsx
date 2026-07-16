import { motion, useScroll, useTransform } from 'motion/react';
import { Coffee, MapPin, Menu as MenuIcon, X } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    return scrollY.on('change', (latest) => {
      setIsScrolled(latest > 50);
    });
  }, [scrollY]);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Menu', href: '#menu' },
    { name: 'Amenities', href: '#amenities' },
    { name: 'Locations', href: '#locations' },
  ];

  return (
    <>
      <motion.nav
        className={`fixed top-0 inset-x-0 z-50 transition-colors duration-500 border-b ${
          isScrolled ? 'bg-stone-50/90 backdrop-blur-md border-stone-200 shadow-sm text-stone-900' : 'bg-transparent border-transparent text-white'
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
          <a href="#" className="flex items-center gap-2 font-serif text-xl font-bold tracking-wide">
            <Coffee className="w-6 h-6" />
            <span>Town Coffee</span>
          </a>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                className="text-sm uppercase tracking-widest font-medium hover:text-coffee-500 transition-colors"
              >
                {link.name}
              </a>
            ))}
            <a 
              href="#locations"
              className={`px-5 py-2 border flex items-center gap-2 text-sm uppercase tracking-widest font-medium transition-colors ${
                isScrolled ? 'border-stone-900 hover:bg-stone-900 hover:text-stone-50' : 'border-white hover:bg-white hover:text-stone-900'
              }`}
            >
              <MapPin className="w-4 h-4" />
              Visit Us
            </a>
          </div>

          <button 
            className="md:hidden p-2"
            onClick={() => setMobileMenuOpen(true)}
          >
            <MenuIcon className="w-6 h-6" />
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-[60] bg-stone-900 text-stone-50 flex flex-col">
          <div className="flex justify-end p-6 h-20 items-center">
            <button onClick={() => setMobileMenuOpen(false)} className="p-2">
              <X className="w-8 h-8" />
            </button>
          </div>
          <div className="flex-1 flex flex-col items-center justify-center gap-8 text-2xl font-serif">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href}
                onClick={() => setMobileMenuOpen(false)}
                className="hover:text-coffee-200 transition-colors"
              >
                {link.name}
              </a>
            ))}
          </div>
        </div>
      )}
    </>
  );
}
