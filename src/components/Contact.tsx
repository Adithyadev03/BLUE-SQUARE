import React, { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Phone, Mail, MapPin, Clock, Send, CheckCircle2, Sparkles } from 'lucide-react';
import { STUDIO_INFO } from '../data';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    projectType: 'Residential',
    budget: 'Premium (5L - 10L)',
    message: '',
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const validate = () => {
    const tempErrors: Record<string, string> = {};
    if (!formData.name.trim()) tempErrors.name = 'Full Name is required';
    if (!formData.phone.trim()) {
      tempErrors.phone = 'Phone number is required';
    } else if (!/^\+?[0-9\s-]{10,14}$/.test(formData.phone.trim())) {
      tempErrors.phone = 'Please provide a valid 10-digit phone number';
    }
    if (!formData.email.trim()) {
      tempErrors.email = 'Email address is required';
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      tempErrors.email = 'Please provide a valid email address';
    }
    if (!formData.message.trim()) tempErrors.message = 'Please provide details about your space';

    setErrors(tempErrors);
    return Object.keys(tempErrors).length === 0;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
    // Clear error
    if (errors[name]) {
      setErrors((prev) => {
        const copy = { ...prev };
        delete copy[name];
        return copy;
      });
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulate luxury API submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      // Reset form
      setFormData({
        name: '',
        email: '',
        phone: '',
        projectType: 'Residential',
        budget: 'Premium (5L - 10L)',
        message: '',
      });
    }, 1500);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#FDFCFB] relative overflow-hidden border-t border-neutral-200/60">
      {/* Subtle layout glow shape */}
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-[#003366]/3 rounded-full blur-[100px] pointer-events-none" />

      <div className="mx-auto px-4 sm:px-6 lg:px-8 max-w-7xl relative z-10">
        
        {/* Section Header */}
        <div className="max-w-3xl mb-16 sm:mb-24 space-y-4">
          <span className="font-mono text-xs tracking-[0.3em] text-[#003366] uppercase block font-semibold">
            Commence Your Design
          </span>
          <h2 className="font-serif text-3xl sm:text-5xl font-bold text-[#1A1A1A] tracking-tight">
            Initiate a <span className="italic font-light">Consultation</span>
          </h2>
          <p className="font-sans text-xs sm:text-sm font-light text-neutral-500 leading-relaxed max-w-md">
            Reach out today to discuss your vision board and schedule a professional material evaluation at our Melparamba design studio.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          
          {/* Left Column: Form (7cols) */}
          <div className="lg:col-span-7 bg-white border border-neutral-200/80 rounded-3xl p-6 sm:p-10 shadow-xl relative overflow-hidden">
            <AnimatePresence mode="wait">
              {!isSuccess ? (
                <motion.form
                  key="contact-form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onSubmit={handleSubmit}
                  className="space-y-6"
                >
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Name */}
                    <div className="space-y-2">
                      <label className="block font-mono text-[10px] tracking-widest text-neutral-400 font-semibold uppercase">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        className={`w-full bg-neutral-50 border rounded-xl px-4 py-3 text-sm text-neutral-800 font-sans focus:outline-none focus:border-[#003366] focus:bg-white transition-colors ${
                          errors.name ? 'border-red-500/50' : 'border-neutral-200'
                        }`}
                        placeholder="e.g. Anand Menon"
                      />
                      {errors.name && (
                        <p className="text-[10px] font-sans text-red-500">{errors.name}</p>
                      )}
                    </div>

                    {/* Phone */}
                    <div className="space-y-2">
                      <label className="block font-mono text-[10px] tracking-widest text-neutral-400 font-semibold uppercase">
                        Phone Number *
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className={`w-full bg-neutral-50 border rounded-xl px-4 py-3 text-sm text-neutral-800 font-sans focus:outline-none focus:border-[#003366] focus:bg-white transition-colors ${
                          errors.phone ? 'border-red-500/50' : 'border-neutral-200'
                        }`}
                        placeholder="e.g. 99460 04994"
                      />
                      {errors.phone && (
                        <p className="text-[10px] font-sans text-red-500">{errors.phone}</p>
                      )}
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Email */}
                    <div className="space-y-2">
                      <label className="block font-mono text-[10px] tracking-widest text-neutral-400 font-semibold uppercase">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        className={`w-full bg-neutral-50 border rounded-xl px-4 py-3 text-sm text-neutral-800 font-sans focus:outline-none focus:border-[#003366] focus:bg-white transition-colors ${
                          errors.email ? 'border-red-500/50' : 'border-neutral-200'
                        }`}
                        placeholder="e.g. info@domain.com"
                      />
                      {errors.email && (
                        <p className="text-[10px] font-sans text-red-500">{errors.email}</p>
                      )}
                    </div>

                    {/* Project Type */}
                    <div className="space-y-2">
                      <label className="block font-mono text-[10px] tracking-widest text-neutral-400 font-semibold uppercase">
                        Space Type
                      </label>
                      <select
                        name="projectType"
                        value={formData.projectType}
                        onChange={handleChange}
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-800 font-sans focus:outline-none focus:border-[#003366] focus:bg-white transition-colors cursor-pointer"
                      >
                        <option value="Residential">Residential Villa/Apartment</option>
                        <option value="Kitchen">Modular Kitchen System</option>
                        <option value="Commercial">Office/Retail Boutique</option>
                        <option value="Furniture">Artisanal Custom Furniture</option>
                      </select>
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    {/* Budget Select */}
                    <div className="space-y-2">
                      <label className="block font-mono text-[10px] tracking-widest text-neutral-400 font-semibold uppercase">
                        Investment Bracket
                      </label>
                      <select
                        name="budget"
                        value={formData.budget}
                        onChange={handleChange}
                        className="w-full bg-neutral-50 border border-neutral-200 rounded-xl px-4 py-3 text-sm text-neutral-800 font-sans focus:outline-none focus:border-[#003366] focus:bg-white transition-colors cursor-pointer"
                      >
                        <option value="Luxury (15L+)">Ultra-Luxury (₹15 Lakhs+)</option>
                        <option value="Elite (10L - 15L)">Elite Custom (₹10L - ₹15L)</option>
                        <option value="Premium (5L - 10L)">Premium Craft (₹5L - ₹10L)</option>
                        <option value="Standard (Under 5L)">Standard Modular (Under ₹5L)</option>
                      </select>
                    </div>
                  </div>

                  {/* Message */}
                  <div className="space-y-2">
                    <label className="block font-mono text-[10px] tracking-widest text-neutral-400 font-semibold uppercase">
                      Describe Your Architectural Vision *
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      className={`w-full bg-neutral-50 border rounded-xl px-4 py-3 text-sm text-neutral-800 font-sans focus:outline-none focus:border-[#003366] focus:bg-white transition-colors resize-none ${
                        errors.message ? 'border-red-500/50' : 'border-neutral-200'
                      }`}
                      placeholder="Share specific structural needs, rooms, deadlines, or styling inspirations..."
                    />
                    {errors.message && (
                      <p className="text-[10px] font-sans text-red-500">{errors.message}</p>
                    )}
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full group flex items-center justify-center space-x-3 bg-[#003366] text-white font-sans font-bold text-xs tracking-widest uppercase py-4 rounded-xl shadow-md hover:shadow-lg hover:shadow-[#003366]/15 transition-all duration-500 disabled:opacity-50 cursor-pointer"
                  >
                    {isSubmitting ? (
                      <div className="h-4.5 w-4.5 animate-spin rounded-full border-2 border-white border-t-transparent" />
                    ) : (
                      <>
                        <Send size={13} className="group-hover:translate-x-1 transition-transform" />
                        <span>Send Vision Board</span>
                      </>
                    )}
                  </button>
                </motion.form>
              ) : (
                <motion.div
                  key="contact-success"
                  initial={{ scale: 0.95, opacity: 0 }}
                  animate={{ scale: 1, opacity: 1 }}
                  className="py-12 text-center space-y-6 flex flex-col items-center justify-center"
                >
                  <div className="h-16 w-16 bg-neutral-100 rounded-full border border-neutral-200 flex items-center justify-center text-[#003366]">
                    <CheckCircle2 size={36} className="animate-bounce" />
                  </div>
                  
                  <div className="space-y-2">
                    <span className="font-mono text-[10px] tracking-widest text-[#003366] uppercase flex items-center justify-center space-x-1 font-bold">
                      <Sparkles size={11} />
                      <span>Vision Authenticated</span>
                    </span>
                    <h3 className="font-serif text-2xl font-bold text-[#1A1A1A]">
                      Your Blueprint is Lodged
                    </h3>
                    <p className="font-sans text-xs text-neutral-600 max-w-md mx-auto leading-relaxed">
                      Thank you for submitting your specifications to Blue Square Interiors. An architectural stylist has been assigned to your project and will reach out to you within 24 hours at <strong className="text-[#1A1A1A] font-semibold">{formData.phone || STUDIO_INFO.phoneFormatted}</strong>.
                    </p>
                  </div>

                  <div className="font-mono text-[9px] text-neutral-400 uppercase tracking-widest font-semibold">
                    Reference Ticket: BS-{Math.floor(Math.random() * 90000) + 10000}
                  </div>

                  <button
                    onClick={() => setIsSuccess(false)}
                    className="border border-neutral-200 hover:border-[#003366]/30 px-6 py-2.5 rounded-full font-mono text-[10px] tracking-wider text-neutral-500 hover:text-[#003366] uppercase transition-all duration-300 font-semibold"
                  >
                    Submit Another Inquiry
                  </button>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Right Column: Address, Map (5cols) */}
          <div className="lg:col-span-5 space-y-8 text-neutral-600">
            {/* Quick connection list */}
            <div className="space-y-6 bg-neutral-50 border border-neutral-200/80 rounded-3xl p-6 sm:p-8">
              
              <div className="flex items-start space-x-4">
                <div className="p-3 bg-neutral-100 border border-neutral-200 rounded-xl text-[#003366]">
                  <MapPin size={18} />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#1A1A1A] uppercase tracking-wider">
                    Our Design Studio
                  </h4>
                  <p className="font-sans text-xs sm:text-sm font-light leading-relaxed mt-1 text-neutral-600">
                    {STUDIO_INFO.address}
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-neutral-100 border border-neutral-200 rounded-xl text-[#003366]">
                  <Phone size={18} />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#1A1A1A] uppercase tracking-wider">
                    Call Studio
                  </h4>
                  <a
                    href={`tel:${STUDIO_INFO.phone}`}
                    className="font-sans text-sm font-bold hover:text-[#003366] transition-colors block mt-1 text-[#003366]"
                  >
                    {STUDIO_INFO.phoneFormatted}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-neutral-100 border border-neutral-200 rounded-xl text-[#003366]">
                  <Mail size={18} />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#1A1A1A] uppercase tracking-wider">
                    Email Inquiry
                  </h4>
                  <a
                    href={`mailto:${STUDIO_INFO.email}`}
                    className="font-sans text-sm hover:text-[#003366] transition-colors block mt-1 text-[#003366] font-medium"
                  >
                    {STUDIO_INFO.email}
                  </a>
                </div>
              </div>

              <div className="flex items-start space-x-4">
                <div className="p-3 bg-neutral-100 border border-neutral-200 rounded-xl text-[#003366]">
                  <Clock size={18} />
                </div>
                <div>
                  <h4 className="font-serif text-sm font-bold text-[#1A1A1A] uppercase tracking-wider">
                    Operational Hours
                  </h4>
                  <p className="font-sans text-xs sm:text-sm font-light leading-relaxed mt-1 text-neutral-600">
                    {STUDIO_INFO.workingHours} (Friday Off)
                  </p>
                </div>
              </div>

            </div>

            {/* Google Map Iframe Container */}
            <div className="overflow-hidden rounded-3xl border border-neutral-200/80 shadow-lg bg-neutral-100 aspect-video lg:aspect-square relative group">
              <iframe
                title="Blue Square Interiors Location Map"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3890.3!2d75.0069!3d12.476!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3ba486df287d3a07%3A0xc6c7676e8281f62b!2sBlue%20Square%20Interiors!5e0!3m2!1sen!2sin!4v1719445100000!5m2!1sen!2sin"
                className="w-full h-full border-0 opacity-90 group-hover:opacity-100 transition-all duration-500"
                allowFullScreen={false}
                loading="lazy"
                referrerPolicy="no-referrer"
              />
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
