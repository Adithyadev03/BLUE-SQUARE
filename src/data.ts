import { Service, Project, Testimonial, ProcessStep, TeamMember, FAQItem, Stat } from './types';

export const STUDIO_INFO = {
  name: "Blue Square Interiors",
  malayalamName: "ബ്ലൂ സ്ക്വയർ ഇൻ്റീരിയർസ്",
  rating: 5.0,
  reviewCount: 81,
  phone: "099460 04994",
  phoneFormatted: "+91 99460 04994",
  address: "F285+2CR, Melparamba, Kalnad, Kerala 671317",
  email: "info@bluesquareinteriors.com",
  workingHours: "Open · Closes 5 pm",
  facebook: "https://facebook.com",
  instagram: "https://instagram.com",
  whatsapp: "https://wa.me/919946004994?text=Hi%20Blue%20Square%20Interiors%2C%20I'd%20like%20to%20inquire%20about%20your%20interior%20design%20services."
};

export const STATS: Stat[] = [
  { value: 8, suffix: "+", label: "Years of Crafting Spaces" },
  { value: 350, suffix: "+", label: "Completed Elite Projects" },
  { value: 100, suffix: "%", label: "Client Delight Rate" },
  { value: 81, suffix: "", label: "5-Star Google Reviews" }
];

export const SERVICES: Service[] = [
  {
    id: "residential",
    title: "Bespoke Residences",
    malayalamTitle: "ഹോം ഇന്റീരിയർ",
    description: "Tailored living spaces, luxury penthouses, and bespoke villas designed to reflect your individual story, combining elevated materials with perfect utility.",
    features: ["Space Optimization & Layouts", "Curated Palette & Material Boards", "Custom Living & Lounge Concepts", "Lighting & Ceiling Design"],
    icon: "Home",
    image: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "kitchen",
    title: "Elite Modular Kitchens",
    malayalamTitle: "മോഡുലാർ കിച്ചൻ",
    description: "Highly functional, state-of-the-art modular kitchens blending innovative soft-close German hardware with Italian-inspired luxury finishes.",
    features: ["Custom Kitchen Islands", "High-Performance Countertops", "Integrated Appliance Housing", "Ergonomic Pull-out Pantries"],
    icon: "ChefHat",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "commercial",
    title: "Prestige Commercials",
    malayalamTitle: "ഓഫീസ് & ഷോപ്പ് ഇന്റീരിയർ",
    description: "High-impact office spaces, premium retail boutiques, and luxury showrooms engineered to cultivate productivity and amplify brand prestige.",
    features: ["Executive Workspace Suites", "Retail Merchandising Layouts", "Acoustic and Partition Planning", "Ergonomic Team Hubs"],
    icon: "Briefcase",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&q=80"
  },
  {
    id: "furniture",
    title: "Artisanal Furniture",
    malayalamTitle: "ഫർണിച്ചർ വർക്കുകൾ",
    description: "Handcrafted modular furniture, premium wardrobes, and bespoke seating designed exclusively for your space with heirloom-grade craftsmanship.",
    features: ["Modular Luxury Wardrobes", "Bespoke Dining Sets", "Statement Media Consoles", "Precision Solid Wood Joining"],
    icon: "Layers",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=800&q=80"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "proj-1",
    title: "The Minimalist Sanctuary",
    category: "Residential",
    location: "Kasaragod, Kerala",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
    description: "An architectural marvel combining warm neutral concrete and light white oak wood paneling to create a deeply relaxing, expansive master hall for a private collector.",
    gallery: [
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "proj-2",
    title: "Cove House Master Suite",
    category: "Residential",
    location: "Kanhangad, Kerala",
    year: "2024",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85",
    description: "A luxury private bedroom utilizing micro-cement coatings, floating custom timber beds, and embedded glowing light tracks to simulate a serene, eye-safe retreat.",
    gallery: [
      "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "proj-3",
    title: "German-Engineering Chef Kitchen",
    category: "Modular Kitchen",
    location: "Melparamba, Kerala",
    year: "2025",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
    description: "A culinary haven crafted with high-performance matte black scratchproof quartz, handles-free smart cabinetry, and hidden LED channel illumination.",
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1200&q=80"
    ]
  },
  {
    id: "proj-4",
    title: "Luminous Corporate Studio",
    category: "Commercial",
    location: "Kalnad, Kerala",
    year: "2024",
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
    description: "A high-end creative agency headquarters designed with spacious shared desks, warm accent light domes, and private acoustic phone booths.",
    gallery: [
      "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=1200&q=85",
      "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1200&q=80"
    ]
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: "test-1",
    name: "shravan sisupalan",
    role: "Client",
    rating: 5.0,
    text: "Well professional one...the one who stands with our idea..and encourage it.",
    date: "4 months ago",
    initials: "SS"
  },
  {
    id: "test-2",
    name: "Irshad TM",
    role: "Local Guide",
    rating: 5.0,
    text: "The work was completely satisfied with the design and the quality of the product were used in designs also unspeakable. The founder of the company is very closely connected with me onwards to inquire about the project which is currently going on.",
    date: "3 years ago",
    initials: "IT",
    isLocalGuide: true
  },
  {
    id: "test-3",
    name: "Gilani Ksd",
    role: "Local Guide",
    rating: 5.0,
    text: "As a client, had a great satisfaction. Good work they had a skilled workers. Keep doing well team blue square.",
    date: "5 years ago",
    initials: "GK",
    isLocalGuide: true
  },
  {
    id: "test-4",
    name: "Anoop K. Nair",
    role: "Villa Owner",
    rating: 5.0,
    text: "Professionalism and experience of workers is highly visible. They completed our living room and custom modular kitchen ahead of time. Highly recommended inside Kasaragod!",
    date: "1 year ago",
    initials: "AN"
  },
  {
    id: "test-5",
    name: "Fathima Razak",
    role: "Client",
    rating: 5.0,
    text: "Best design and the staffs are also punctual. They transformed our home beyond our expectations. Complete luxury finishes.",
    date: "2 years ago",
    initials: "FR"
  }
];

export const PROCESS_TIMELINE: ProcessStep[] = [
  {
    step: "01",
    title: "Cinematic Visioning",
    description: "An elegant primary sit-down to understand your lifestyle, visual benchmarks, functional scope, and desired budget.",
    duration: "1 - 2 Days"
  },
  {
    step: "02",
    title: "Architectural Layouts",
    description: "We map out high-precision 2D floor plans, optimize user traffic flow, and curate custom material selection boards.",
    duration: "1 Week"
  },
  {
    step: "03",
    title: "Luxurious 3D Renders",
    description: "See your exact finishes, custom lighting states, and bespoke furniture placement modeled in cinematic photorealistic 3D details.",
    duration: "10 - 14 Days"
  },
  {
    step: "04",
    title: "Precision Execution",
    description: "Our in-house expert craftsmen and project engineers fabricate, assemble, and curate the physical space with obsessive care.",
    duration: "4 - 6 Weeks"
  },
  {
    step: "05",
    title: "The Grand Reveal",
    description: "A comprehensive deep-clean, final aesthetic styling session, and the magical handover of your pristine, luxurious space.",
    duration: "1 Day"
  }
];

export const TEAM: TeamMember[] = [
  {
    name: "Shabaz Ahmed",
    role: "Founder & Principal Architect",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?auto=format&fit=crop&w=400&q=80",
    experience: "10+ Years"
  },
  {
    name: "Amal Krishnan",
    role: "Lead Modular Kitchen Specialist",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=400&q=80",
    experience: "8 Years"
  },
  {
    name: "Fida Mariyam",
    role: "Senior Architectural Colorist & Stylist",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=400&q=80",
    experience: "6 Years"
  }
];

export const FAQS: FAQItem[] = [
  {
    question: "Do you execute projects outside of Melparamba/Kasaragod?",
    answer: "Yes, we primarily serve Melparamba, Kalnad, and the wider Kasaragod district, but we also undertake premium residential and commercial interior projects across Kannur, Mangalore, and select locations in Kerala."
  },
  {
    question: "What makes Blue Square Interiors' modular kitchens premium?",
    answer: "We source heirloom-grade structural ply, soft-close hardware (such as Blum or Hettich), and premium anti-scratch quartz countertops. Every cabinet is meticulously engineered and edge-banded to resist the high humidity conditions of coastal Kerala."
  },
  {
    question: "Can I inspect the materials before work begins?",
    answer: "Absolutely. We pride ourselves on total transparency. We host material board consultations where you can touch, feel, and approve real samples of laminates, veneer, quartz, multi-wood, and hardware fixtures."
  },
  {
    question: "How long does a full home interior project take?",
    answer: "On average, a comprehensive residential project ranges from 4 to 6 weeks from 3D design sign-off to handover. Modular kitchen installations typically take 15 to 20 business days."
  },
  {
    question: "Is there a warranty on your work?",
    answer: "Yes, we offer up to a 10-year comprehensive warranty on all our high-grade modular kitchen components and structural wardrobe carcasses against manufacturing defects, moisture swelling, and pest issues."
  }
];
