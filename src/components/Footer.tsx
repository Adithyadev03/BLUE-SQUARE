import { ArrowUpRight, Facebook, Instagram, MessageSquare, Star } from 'lucide-react';
import { STUDIO_INFO } from '../data';

interface FooterProps {
  onNavClick: (sectionId: string) => void;
}

export default function Footer({ onNavClick }: FooterProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-[#1A1A1A] border-t border-neutral-800 py-16 sm:py-20 text-neutral-400 relative overflow-hidden">
      {/* Structural layout coordinate line */}
      <div className="absolute top-0 bottom-0 left-[20%] w-[1px] bg-white/5 hidden lg:block pointer-events-none" />
      <div className="absolute top-0 bottom-0 right-[20%] w-[1px] bg-white/5 hidden lg:block pointer-events-none" />

      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 sm:gap-16 pb-16 border-b border-neutral-800">
          
          {/* Col 1: Studio Identity (5 cols) */}
          <div className="md:col-span-5 space-y-6 text-center md:text-left">
            <button
              onClick={() => onNavClick('hero')}
              className="group flex items-center justify-center md:justify-start space-x-3 text-left focus:outline-none focus:ring-0"
            >
              <div className="relative flex h-10 w-10 items-center justify-center border border-white/20 transition-transform duration-500 group-hover:rotate-45">
                <div className="h-4.5 w-4.5 bg-[#003366] shadow-[0_0_10px_rgba(0,51,102,0.4)]" />
              </div>
              <div>
                <span className="block font-serif text-lg tracking-[0.12em] text-white uppercase font-bold">
                  Blue Square
                </span>
                <span className="block font-mono text-[9px] tracking-[0.3em] text-neutral-500 uppercase leading-none mt-0.5 font-bold">
                  Interiors · കേരളം
                </span>
              </div>
            </button>

            <p className="font-sans text-xs sm:text-sm font-light leading-relaxed max-w-sm text-neutral-300">
              Transforming private residences, elite modular kitchens, and prestige commercial workspaces with custom luxury finishes throughout Kasaragod and Kerala.
            </p>

            {/* Google review indicator */}
            <div className="inline-flex items-center justify-center md:justify-start space-x-2 bg-white/5 border border-white/10 rounded-xl px-4 py-2">
              <Star size={12} className="fill-[#FFB800] text-[#FFB800]" />
              <span className="font-mono text-[10px] text-neutral-300 uppercase tracking-widest font-semibold">
                5.0 Google score ({STUDIO_INFO.reviewCount} Reviews)
              </span>
            </div>
          </div>

          {/* Col 2: Navigation Links (3 cols) */}
          <div className="md:col-span-3 space-y-4 text-center md:text-left">
            <h4 className="font-serif text-sm font-bold text-white tracking-wider uppercase">
              Sections
            </h4>
            <ul className="space-y-2 font-mono text-[11px] tracking-widest uppercase">
              {[
                { label: 'About Us', id: 'about' },
                { label: 'Expertise', id: 'services' },
                { label: 'Showcase', id: 'projects' },
                { label: 'Before/After', id: 'before-after' },
                { label: 'Work Process', id: 'process' },
                { label: 'Testimonials', id: 'testimonials' },
                { label: 'FAQ Accordion', id: 'faq' },
              ].map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavClick(link.id)}
                    className="hover:text-white transition-colors focus:outline-none cursor-pointer text-neutral-400"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Quick Contacts (4 cols) */}
          <div className="md:col-span-4 space-y-4 text-center md:text-left">
            <h4 className="font-serif text-sm font-bold text-white tracking-wider uppercase">
              Connections
            </h4>
            <div className="space-y-3 font-sans text-xs sm:text-sm">
              <p className="leading-relaxed text-neutral-300">
                {STUDIO_INFO.address}
              </p>
              <div className="flex flex-col space-y-1 items-center md:items-start font-mono text-[11px]">
                <a
                  href={`tel:${STUDIO_INFO.phone}`}
                  className="hover:text-white text-neutral-300 transition-all flex items-center space-x-1 font-semibold"
                >
                  <span>TEL: {STUDIO_INFO.phoneFormatted}</span>
                  <ArrowUpRight size={10} className="opacity-50" />
                </a>
                <a
                  href={`mailto:${STUDIO_INFO.email}`}
                  className="hover:text-white text-neutral-300 transition-all flex items-center space-x-1 font-semibold"
                >
                  <span>MAIL: {STUDIO_INFO.email}</span>
                  <ArrowUpRight size={10} className="opacity-50" />
                </a>
              </div>

              {/* Social Channels */}
              <div className="flex justify-center md:justify-start space-x-4 pt-2">
                <a
                  href={STUDIO_INFO.facebook}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:border-white/20 rounded-lg transition-all"
                  aria-label="Follow on Facebook"
                >
                  <Facebook size={14} />
                </a>
                <a
                  href={STUDIO_INFO.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:border-white/20 rounded-lg transition-all"
                  aria-label="Follow on Instagram"
                >
                  <Instagram size={14} />
                </a>
                <a
                  href={STUDIO_INFO.whatsapp}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-white/5 border border-white/10 text-neutral-400 hover:text-white hover:border-white/20 rounded-lg transition-all"
                  aria-label="Inquire via WhatsApp"
                >
                  <MessageSquare size={14} />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Lower row: copyright, credits */}
        <div className="pt-10 flex flex-col sm:flex-row justify-between items-center text-center gap-4 font-mono text-[10px] tracking-widest text-neutral-500 font-semibold">
          <p>© {currentYear} Blue Square Interiors. Handcrafted in Kerala, India.</p>
          <div className="flex space-x-4">
            <span className="hover:text-neutral-300 transition-colors cursor-pointer">PRIVACY POLICY</span>
            <span>·</span>
            <span className="hover:text-zinc-400 transition-colors cursor-pointer">TERMS OF UTILITY</span>
          </div>
        </div>

      </div>
    </footer>
  );
}
