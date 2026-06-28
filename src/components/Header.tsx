import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Menu, X, Phone } from 'lucide-react';
import { STUDIO_INFO } from '../data';

interface HeaderProps {
  onNavClick: (sectionId: string) => void;
  activeSection: string;
}

export default function Header({ onNavClick, activeSection }: HeaderProps) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { label: 'About', id: 'about' },
    { label: 'Services', id: 'services' },
    { label: 'Projects', id: 'projects' },
    { label: 'Before & After', id: 'before-after' },
    { label: 'Process', id: 'process' },
    { label: 'Testimonials', id: 'testimonials' },
    { label: 'FAQ', id: 'faq' },
    { label: 'Contact', id: 'contact' },
  ];

  const handleItemClick = (id: string) => {
    setMobileMenuOpen(false);
    onNavClick(id);
  };

  return (
    <>
      <motion.header
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
        className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
          scrolled
            ? 'py-3'
            : 'py-6'
        }`}
      >
        <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
          <div
            className={`flex items-center justify-between px-6 py-3 rounded-full transition-all duration-500 ${
              scrolled
                ? 'bg-[#FDFCFB]/90 backdrop-blur-md border border-neutral-200/60 shadow-[0_10px_30px_rgba(0,0,0,0.05)]'
                : 'bg-transparent border border-transparent'
            }`}
          >
            {/* Logo */}
            <button
              onClick={() => handleItemClick('hero')}
              className="group flex items-center space-x-3 text-left focus:outline-none"
            >
              <div className="relative flex h-9 w-9 items-center justify-center bg-[#003366] transition-transform duration-500 group-hover:rotate-45">
                <div className="h-4 w-4 bg-white" />
              </div>
              <div>
                <span className="block font-serif text-base tracking-[0.1em] text-[#1A1A1A] uppercase font-bold">
                  Blue Square
                </span>
                <span className="block font-mono text-[9px] tracking-[0.25em] text-neutral-500 uppercase leading-none">
                  Interiors · കേരളം
                </span>
              </div>
            </button>

            {/* Desktop Navigation */}
            <nav className="hidden lg:flex items-center space-x-1">
              {navItems.map((item) => (
                <button
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`px-4 py-2 font-mono text-xs tracking-wider uppercase transition-all duration-300 relative focus:outline-none cursor-pointer ${
                    activeSection === item.id
                      ? 'text-[#003366] font-bold'
                      : 'text-neutral-500 hover:text-[#1A1A1A]'
                  }`}
                >
                  {item.label}
                  {activeSection === item.id && (
                    <motion.span
                      layoutId="navActiveLine"
                      className="absolute bottom-0 left-4 right-4 h-[1.5px] bg-[#003366]"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                </button>
              ))}
            </nav>

            {/* Right Action Button */}
            <div className="hidden sm:flex items-center space-x-4">
              <a
                href={`tel:${STUDIO_INFO.phone}`}
                className="group flex items-center space-x-2 border border-neutral-200 hover:border-[#003366] bg-neutral-50 hover:bg-[#003366]/5 px-5 py-2 rounded-full font-mono text-xs tracking-wider text-[#1A1A1A] hover:text-[#003366] uppercase transition-all duration-300"
              >
                <Phone size={13} className="text-[#003366] animate-pulse group-hover:scale-110 transition-transform" />
                <span>Call Studio</span>
              </a>
            </div>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 text-neutral-500 hover:text-[#1A1A1A] focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Drawer Overlay */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="fixed inset-0 z-30 lg:hidden bg-[#FDFCFB]/98 backdrop-blur-lg flex flex-col justify-center px-6"
          >
            <div className="flex flex-col space-y-6 text-center">
              {navItems.map((item, index) => (
                <motion.button
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: 20, opacity: 0 }}
                  transition={{ delay: index * 0.05, duration: 0.4 }}
                  key={item.id}
                  onClick={() => handleItemClick(item.id)}
                  className={`font-serif text-2xl tracking-widest uppercase focus:outline-none ${
                    activeSection === item.id
                      ? 'text-[#003366] font-bold'
                      : 'text-neutral-400 hover:text-[#1A1A1A]'
                  }`}
                >
                  {item.label}
                </motion.button>
              ))}

              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                transition={{ delay: 0.4, duration: 0.4 }}
                className="pt-8 border-t border-neutral-200/60 flex flex-col items-center space-y-4"
              >
                <a
                  href={`tel:${STUDIO_INFO.phone}`}
                  className="w-full max-w-xs flex items-center justify-center space-x-3 bg-[#1A1A1A] hover:bg-[#003366] text-white py-4 rounded-full font-sans font-semibold text-sm uppercase transition-colors"
                >
                  <Phone size={15} />
                  <span>Call {STUDIO_INFO.phoneFormatted}</span>
                </a>
                <span className="font-mono text-[10px] text-neutral-500 uppercase tracking-widest">
                  {STUDIO_INFO.workingHours}
                </span>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
