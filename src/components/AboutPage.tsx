import { Maximize, Zap, ChevronUp, Instagram, Linkedin, Dribbble } from 'lucide-react';
import { motion } from 'motion/react';

export default function AboutPage() {
  return (
    <motion.div 
      initial={{ opacity: 0, filter: 'blur(10px)' }}
      animate={{ opacity: 1, filter: 'blur(0px)' }}
      exit={{ opacity: 0, filter: 'blur(10px)' }}
      transition={{ duration: 0.6, ease: [0.4, 0, 0.2, 1] }}
      className="max-w-350 w-full mx-auto px-6 md:px-12 pt-8 lg:pt-32 relative z-10 flex flex-col lg:block pb-12 lg:pb-0 grow min-h-screen"
    >
      {/* Left Column */}
      <div className="max-w-xl relative z-10">
        <h1 className="font-['Orbitron'] text-[clamp(2.25rem,13vw,5.5rem)] leading-none md:leading-[0.95] font-bold tracking-[0.02em] sm:tracking-wide text-white mb-6 md:mb-8 drop-shadow-lg pr-2">
          ROSHAN// <br />
          PORTFOLIO<br />
        </h1>
        
        <p className="text-[12px] md:text-[13px] leading-[1.8] text-white/80 max-w-95 mb-8 md:mb-10 drop-shadow-md">
          Developed with high-end skills and a pixel-perfect frame for those who don't just browse the web—they build it. Code your dreams...
        </p>

        <div className="flex gap-4">
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer bg-white/5 backdrop-blur-md">
            <ChevronUp size={14} className="text-white" />
          </div>
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer bg-white/5 backdrop-blur-md">
            <Maximize size={14} className="text-white" />
          </div>
          <div className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white/20 transition-colors cursor-pointer bg-white/5 backdrop-blur-md">
            <Zap size={14} className="text-white" />
          </div>
        </div>
      </div>

      {/* Right Column - Specs */}
      <div className="relative mt-12 lg:absolute lg:right-12 lg:top-[35%] lg:mt-0 w-full lg:w-95 z-10">
        <h3 className="text-[11px] font-mono tracking-[0.2em] text-white/90 mb-6 md:mb-8 font-bold">
          TECHNICAL SPECS
        </h3>
        <div className="flex flex-col">
          <SpecRow label="Stack" value="React + Node + SQL" />
          <SpecRow label="Logic" value="V8 - Runtime Logic" />
          <SpecRow label="Uptime" value="99.9% High-Avail" />
          <SpecRow label="Scale" value="Responsive Modern Layout" />
        </div>
      </div>

      {/* Bottom Left Socials */}
      <div className="relative mt-12 lg:absolute lg:bottom-12 lg:left-12 flex items-center gap-6 z-10">
        <Instagram size={18} className="text-white/50 hover:text-white transition-colors cursor-pointer" />
        <Linkedin size={18} className="text-white/50 hover:text-white transition-colors cursor-pointer" />
        <Dribbble size={18} className="text-white/50 hover:text-white transition-colors cursor-pointer" />
      </div>
      
      {/* Decorative Bottom Right Lines (from original image) */}
      <div className="hidden lg:flex absolute bottom-0 right-12 gap-4 opacity-30 z-10">
        <div className="w-16 h-8 border-t border-l border-r rounded-t-lg border-white/40"></div>
        <div className="w-16 h-8 border-t border-l border-r rounded-t-lg border-white/40"></div>
        <div className="w-16 h-8 border-t border-l border-r rounded-t-lg border-white/40"></div>
      </div>
    </motion.div>
  );
}

const SpecRow = ({ label, value }: { label: string, value: string }) => (
  <div className="flex justify-between items-center border-b border-white/10 py-3">
    <span className="text-[12px] text-white/60">{label}</span>
    <span className="text-[12px] text-white/90">{value}</span>
  </div>
);
