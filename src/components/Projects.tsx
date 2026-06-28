import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { MapPin, Calendar, ArrowUpRight, X, ChevronLeft, ChevronRight } from 'lucide-react';
import { PROJECTS } from '../data';
import { Project } from '../types';

export default function Projects() {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');
  const [activeLightboxProject, setActiveLightboxProject] = useState<Project | null>(null);
  const [lightboxImageIndex, setLightboxImageIndex] = useState<number>(0);

  const categories = ['All', 'Residential', 'Commercial', 'Modular Kitchen'];

  const filteredProjects = selectedCategory === 'All'
    ? PROJECTS
    : PROJECTS.filter(p => p.category === selectedCategory);

  const openLightbox = (project: Project) => {
    setActiveLightboxProject(project);
    setLightboxImageIndex(0);
    // Disable main body scroll
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setActiveLightboxProject(null);
    document.body.style.overflow = 'unset';
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeLightboxProject) return;
    setLightboxImageIndex((prev) => 
      prev === activeLightboxProject.gallery.length - 1 ? 0 : prev + 1
    );
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (!activeLightboxProject) return;
    setLightboxImageIndex((prev) => 
      prev === 0 ? activeLightboxProject.gallery.length - 1 : prev - 1
    );
  };

  return (
    <section id="projects" className="py-24 sm:py-32 bg-[#FDFCFB] relative border-t border-neutral-200/60">
      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl">
        
        {/* Header and Filter */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 sm:mb-24">
          <div className="space-y-3 max-w-xl">
            <span className="font-mono text-xs tracking-[0.3em] text-[#003366] uppercase block font-semibold">
              Curated Masterpieces
            </span>
            <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1A1A] tracking-tight">
              Featured <span className="italic font-light">Commissions</span>
            </h2>
            <p className="font-sans text-xs sm:text-sm font-light text-neutral-500 leading-relaxed">
              Explore custom-built living rooms, modular culinary islands, and premium workspaces executed across Kerala.
            </p>
          </div>

          {/* Luxury Categories Tabs */}
          <div className="flex flex-wrap gap-2 border-b border-neutral-200/60 pb-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 font-mono text-[10px] sm:text-xs tracking-wider uppercase transition-all duration-300 relative focus:outline-none cursor-pointer ${
                  selectedCategory === cat ? 'text-[#003366] font-bold' : 'text-neutral-400 hover:text-[#1A1A1A]'
                }`}
              >
                {cat}
                {selectedCategory === cat && (
                  <motion.div
                    layoutId="projectActiveTabLine"
                    className="absolute bottom-0 left-0 right-0 h-[2px] bg-[#003366]"
                    transition={{ type: 'spring', stiffness: 350, damping: 25 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        <motion.div 
          layout
          className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12"
        >
          <AnimatePresence mode="popLayout">
            {filteredProjects.map((project) => (
              <motion.div
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
                key={project.id}
                onClick={() => openLightbox(project)}
                className="group cursor-pointer space-y-4"
              >
                {/* Image Wrapper */}
                <div className="relative overflow-hidden rounded-2xl border border-neutral-200/80 bg-neutral-100 aspect-[16/10] shadow-sm">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-[1200ms] group-hover:scale-105"
                    referrerPolicy="no-referrer"
                    loading="lazy"
                  />
                  {/* Subtle dark gradient overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-500" />
                  
                  {/* Hover icon button */}
                  <div className="absolute top-6 right-6 p-3 bg-white/95 border border-neutral-200/50 backdrop-blur-md rounded-full text-[#1A1A1A] shadow-md transform translate-y-3 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
                    <ArrowUpRight size={18} />
                  </div>

                  {/* Metadata inside thumbnail bottom edge */}
                  <div className="absolute bottom-6 left-6 right-6 flex justify-between items-end text-white">
                    <div className="space-y-1">
                      <span className="inline-block bg-[#003366]/90 text-white font-mono text-[9px] tracking-widest uppercase px-2 py-0.5 rounded-md font-bold">
                        {project.category}
                      </span>
                      <h3 className="font-serif text-lg sm:text-xl font-bold text-white tracking-wide">
                        {project.title}
                      </h3>
                    </div>
                  </div>
                </div>

                {/* Caption below */}
                <div className="flex justify-between items-center px-2 text-neutral-500 text-xs font-mono tracking-wider">
                  <div className="flex items-center space-x-1.5 font-medium text-neutral-600">
                    <MapPin size={11} className="text-[#003366]" />
                    <span>{project.location}</span>
                  </div>
                  <span>{project.year}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

      </div>

      {/* Fullscreen Gallery Lightbox Modal */}
      <AnimatePresence>
        {activeLightboxProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/98 backdrop-blur-xl p-4 sm:p-6 lg:p-10"
            onClick={closeLightbox}
          >
            {/* Close button top right */}
            <button
              onClick={closeLightbox}
              className="absolute top-6 right-6 z-50 p-3 bg-white/5 border border-white/10 text-white rounded-full hover:bg-white/10 transition-colors focus:outline-none"
            >
              <X size={20} />
            </button>

            {/* Slider container */}
            <div 
              className="relative w-full max-w-6xl h-full flex flex-col justify-center space-y-6"
              onClick={(e) => e.stopPropagation()}
            >
              {/* Media viewer */}
              <div className="relative flex-1 max-h-[70vh] flex items-center justify-center overflow-hidden rounded-2xl border border-white/5 bg-zinc-950">
                <AnimatePresence mode="wait">
                  <motion.img
                    key={lightboxImageIndex}
                    initial={{ opacity: 0, scale: 0.98 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.98 }}
                    transition={{ duration: 0.5 }}
                    src={activeLightboxProject.gallery[lightboxImageIndex]}
                    alt={`${activeLightboxProject.title} detail ${lightboxImageIndex + 1}`}
                    className="max-w-full max-h-full object-contain"
                    referrerPolicy="no-referrer"
                  />
                </AnimatePresence>

                {/* Left arrow */}
                <button
                  onClick={prevImage}
                  className="absolute left-4 p-3 bg-black/50 hover:bg-black/80 border border-white/5 text-white rounded-full hover:text-[#003366] transition-colors focus:outline-none cursor-pointer"
                >
                  <ChevronLeft size={20} />
                </button>

                {/* Right arrow */}
                <button
                  onClick={nextImage}
                  className="absolute right-4 p-3 bg-black/50 hover:bg-black/80 border border-white/5 text-white rounded-full hover:text-[#003366] transition-colors focus:outline-none cursor-pointer"
                >
                  <ChevronRight size={20} />
                </button>
              </div>

              {/* Lightbox Information Details */}
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start text-white border-t border-white/5 pt-6">
                <div className="md:col-span-2 space-y-2">
                  <span className="inline-block bg-[#003366]/90 text-white font-mono text-[9px] tracking-widest uppercase px-2 py-0.5 rounded-md font-bold">
                    {activeLightboxProject.category} Project
                  </span>
                  <h3 className="font-serif text-2xl font-bold text-white">
                    {activeLightboxProject.title}
                  </h3>
                  <p className="font-sans text-sm font-light text-zinc-400 leading-relaxed">
                    {activeLightboxProject.description}
                  </p>
                </div>

                <div className="space-y-4 font-mono text-xs text-zinc-400 border-l border-white/5 pl-0 md:pl-6">
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-600">Location</span>
                    <span className="text-white flex items-center space-x-1">
                      <MapPin size={11} className="text-[#003366]" />
                      <span>{activeLightboxProject.location}</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-600">Year Completed</span>
                    <span className="text-white flex items-center space-x-1">
                      <Calendar size={11} className="text-[#003366]" />
                      <span>{activeLightboxProject.year}</span>
                    </span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-zinc-600">Image Index</span>
                    <span className="text-white font-semibold">
                      {lightboxImageIndex + 1} of {activeLightboxProject.gallery.length}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
