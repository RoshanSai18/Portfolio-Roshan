import { ArrowRight, Home, Instagram, Linkedin, Dribbble, ChevronLeft, ChevronRight } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';
import { useState } from 'react';
import AnoAI from './ui/animated-shader-background';

interface ProjectsPageProps {
  onNavigate: () => void;
}

const MOCK_PROJECTS = [
  {
    id: 1,
    title: "Brand\ndesigner",
    subtitle: "We create interesting\nbranding design.",
    desc: "We are an agency that creates visual identities for various brands. Our final results are brilliant. Check out our portfolio.",
    date: "25 March 2026",
    tag: "Blog",
    cardTitle: "Photographs that attract\nattention.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=800&auto=format&fit=crop",
    feature1: "Check office in\nLos Angeles",
    feature2: "Our effective SEO\npositioning"
  },
  {
    id: 2,
    title: "System\nArchitect",
    subtitle: "We engineer high-performance\ndigital experiences.",
    desc: "Implementing cutting edge solutions that scale. We build intelligent systems that adapt and evolve over time.",
    date: "12 April 2026",
    tag: "Project",
    cardTitle: "Self-learning algorithms\nin production.",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=800&auto=format&fit=crop",
    feature1: "Frontend\nArchitecture",
    feature2: "Backend\nSystems"
  },
  {
    id: 3,
    title: "Cloud\nInfrastructure",
    subtitle: "Global scale,\nzero downtime.",
    desc: "Distributed systems architecture designed for maximum reliability and minimum latency across all regions.",
    date: "08 May 2026",
    tag: "DevOps",
    cardTitle: "Seamless deployments\nworldwide.",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=800&auto=format&fit=crop",
    feature1: "Serverless\nComputing",
    feature2: "Edge\nNetwork"
  }
];

export default function ProjectsPage({ onNavigate }: ProjectsPageProps) {
  const [currentIndex, setCurrentIndex] = useState(0);
  const project = MOCK_PROJECTS[currentIndex];

  const nextProject = () => setCurrentIndex((prev) => (prev + 1) % MOCK_PROJECTS.length);
  const prevProject = () => setCurrentIndex((prev) => (prev - 1 + MOCK_PROJECTS.length) % MOCK_PROJECTS.length);

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="w-full min-h-screen bg-[#0f0f0f] z-40 text-white overflow-x-hidden relative"
    >
      {/* Subtle Animated Shader Background */}
      <AnoAI />

      {/* Top Bar */}
      <div className="absolute top-8 left-8 md:top-12 md:left-12 z-50">
        <span className="font-bold text-xl tracking-tight">ROSHAN.</span>
      </div>
      
      <div className="absolute top-6 right-6 md:top-10 md:right-10 z-50">
        <button 
          onClick={onNavigate}
          className="w-14 h-14 md:w-16 md:h-16 bg-orange-500 rounded-full flex items-center justify-center hover:scale-105 transition-transform text-black"
        >
          <Home size={24} />
        </button>
      </div>

      {/* Giant OP Background */}
      <div className="absolute top-1/2 left-[10%] -translate-y-1/2 text-[40vw] font-bold text-white/2 leading-none pointer-events-none select-none tracking-tighter z-0">
        OP
      </div>

      {/* Vertical Texts */}
      <div className="hidden lg:flex absolute left-8 top-1/2 -translate-y-1/2 -rotate-90 items-center gap-4 text-[10px] font-mono tracking-[0.3em] text-white/40 origin-center z-10">
        <span>PORTFOLIO</span>
        <div className="w-12 h-px bg-white/40"></div>
      </div>
      <div className="hidden lg:block absolute right-8 top-1/2 -translate-y-1/2 rotate-90 text-[10px] font-mono tracking-[0.3em] text-white/40 origin-center z-10">
        SCROLL DOWN
      </div>

      {/* Main Content Grid */}
      <div className="max-w-350 mx-auto w-full h-full min-h-screen px-6 md:px-24 pt-32 pb-12 flex flex-col justify-center relative z-10">
        <AnimatePresence mode="wait">
          <motion.div 
            key={currentIndex}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
            className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center"
          >
            {/* Left Side */}
            <div className="lg:col-span-7 flex flex-col">
              <h1 className="text-5xl sm:text-7xl md:text-[5.5rem] leading-[1.05] font-medium tracking-tight mb-12 whitespace-pre-line">
                {project.title}
              </h1>
              
              <h2 className="text-xl md:text-2xl font-medium text-white/90 mb-16 max-w-md whitespace-pre-line">
                {project.subtitle}
              </h2>

              <div className="flex flex-col sm:flex-row gap-8 sm:gap-12">
                <div className="flex-1 border-t-2 border-orange-500 pt-4">
                  <div className="flex gap-4">
                    <span className="text-[10px] font-mono text-white/60 font-bold">01</span>
                    <p className="text-sm text-white/80 leading-snug max-w-35 whitespace-pre-line">
                      {project.feature1}
                    </p>
                  </div>
                </div>
                <div className="flex-1 border-t-2 border-orange-500 pt-4">
                  <div className="flex gap-4">
                    <span className="text-[10px] font-mono text-white/60 font-bold">02</span>
                    <p className="text-sm text-white/80 leading-snug max-w-35 whitespace-pre-line">
                      {project.feature2}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="lg:col-span-5 flex flex-col h-full justify-between lg:pl-12 mt-12 lg:mt-0">
              
              <div className="mb-24 lg:mb-0 lg:mt-12">
                <p className="text-[13px] leading-[1.8] text-white/70 mb-8 max-w-70">
                  {project.desc}
                </p>
                <div className="flex items-center gap-6">
                  <button className="text-[11px] font-bold text-orange-500 tracking-wider hover:text-orange-400 transition-colors uppercase">
                    READ MORE
                  </button>
                  
                  {/* Navigation Arrows */}
                  <div className="flex items-center gap-2 ml-auto">
                    <button onClick={prevProject} className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                      <ChevronLeft size={14} />
                    </button>
                    <button onClick={nextProject} className="w-8 h-8 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/10 transition-colors">
                      <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </div>

              {/* Bottom Right Section */}
              <div className="flex flex-col items-end mt-auto">
                <button onClick={nextProject} className="w-12 h-12 rounded-full bg-white/5 hover:bg-white/10 flex items-center justify-center transition-colors mb-12">
                  <ArrowRight size={16} className="text-white" />
                </button>

                <div className="w-full max-w-90">
                  <div className="flex items-center justify-end gap-3 mb-3">
                    <span className="text-[10px] font-mono text-white/50">{project.date}</span>
                    <span className="w-1 h-1 rounded-full bg-orange-500"></span>
                    <span className="text-[10px] font-mono text-white/50">{project.tag}</span>
                  </div>
                  <h4 className="text-[14px] font-medium text-white leading-normal text-right mb-6 whitespace-pre-line">
                    {project.cardTitle}
                  </h4>
                  
                  <div className="flex h-45 w-full bg-[#1a1a1a]">
                    <div className="w-25 flex items-center justify-center border-r border-white/5">
                      <span className="text-3xl font-light">0{project.id}</span>
                    </div>
                    <div className="flex-1 relative overflow-hidden">
                      <img 
                        src={project.image} 
                        alt={project.title} 
                        className="absolute inset-0 w-full h-full object-cover grayscale opacity-80"
                        referrerPolicy="no-referrer"
                      />
                    </div>
                  </div>
                </div>
              </div>

            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Bottom Left Socials */}
      <div className="absolute bottom-8 left-8 md:bottom-12 md:left-24 flex items-center gap-6 z-50">
        <Instagram size={16} className="text-white/50 hover:text-white transition-colors cursor-pointer" />
        <Linkedin size={16} className="text-white/50 hover:text-white transition-colors cursor-pointer" />
        <Dribbble size={16} className="text-white/50 hover:text-white transition-colors cursor-pointer" />
      </div>

    </motion.div>
  );
}
