import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';

// Custom Section Components
import Header from './components/Header';
import Hero from './components/Hero';
import About from './components/About';
import WhyChooseUs from './components/WhyChooseUs';
import Services from './components/Services';
import Projects from './components/Projects';
import BeforeAfter from './components/BeforeAfter';
import Process from './components/Process';
import Testimonials from './components/Testimonials';
import Team from './components/Team';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import WhatsAppButton from './components/WhatsAppButton';
import Footer from './components/Footer';
import LoadingScreen from './components/LoadingScreen';
import CursorGlow from './components/CursorGlow';

export default function App() {
  const [loading, setLoading] = useState(true);
  const [activeSection, setActiveSection] = useState('hero');

  // Smooth scroll handler to target section ID
  const scrollToSection = (sectionId: string) => {
    if (sectionId === 'hero') {
      window.scrollTo({ top: 0, behavior: 'smooth' });
      setActiveSection('hero');
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      const offset = 80; // Offset for header height
      const bodyRect = document.body.getBoundingClientRect().top;
      const elementRect = element.getBoundingClientRect().top;
      const elementPosition = elementRect - bodyRect;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: 'smooth',
      });
      setActiveSection(sectionId);
    }
  };

  // Observe active sections during scrolling to update the Header links dynamically
  useEffect(() => {
    if (loading) return;

    const sections = ['about', 'services', 'projects', 'before-after', 'process', 'testimonials', 'faq', 'contact'];
    
    const observerOptions = {
      root: null,
      rootMargin: '-30% 0px -60% 0px', // Triggers when section occupies central viewport area
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((id) => {
      const element = document.getElementById(id);
      if (element) observer.observe(element);
    });

    // Special scroll listener for the hero boundary (when right at top of page)
    const handleScroll = () => {
      if (window.scrollY < 100) {
        setActiveSection('hero');
      }
    };
    window.addEventListener('scroll', handleScroll);

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', handleScroll);
    };
  }, [loading]);

  return (
    <div className="relative min-h-screen bg-[#FDFCFB] text-[#1A1A1A] overflow-x-hidden selection:bg-[#003366] selection:text-white">
      <AnimatePresence mode="wait">
        {loading ? (
          <div key="preloader">
            <LoadingScreen onComplete={() => setLoading(false)} />
          </div>
        ) : (
          <motion.div
            key="main-app"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
            className="flex flex-col min-h-screen"
          >
            {/* Custom Interactive Glow Aura */}
            <CursorGlow />

            {/* Sticky Header */}
            <Header onNavClick={scrollToSection} activeSection={activeSection} />

            {/* Main Section Stack */}
            <main className="flex-grow">
              <Hero 
                onExploreClick={() => scrollToSection('projects')} 
                onInquireClick={() => scrollToSection('contact')} 
              />
              <About />
              <WhyChooseUs />
              <Services />
              <Projects />
              <BeforeAfter />
              <Process />
              <Testimonials />
              <Team />
              <FAQ />
              <Contact />
            </main>

            {/* WhatsApp Floating Orb */}
            <WhatsAppButton />

            {/* Premium Footer */}
            <Footer onNavClick={scrollToSection} />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
