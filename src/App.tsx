import { useState } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import LoadingScreen from './components/LoadingScreen';
import AboutPage from './components/AboutPage';
import ProjectsPage from './components/ProjectsPage';

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(0);

  return (
    <>
      <AnimatePresence mode="wait">
        {isLoading && <LoadingScreen onComplete={() => setIsLoading(false)} />}
      </AnimatePresence>

      <div style={{ opacity: isLoading ? 0 : 1, transition: "opacity 0.5s ease-out" }}>
        <div className="min-h-screen bg-[#0a0a0a] text-gray-300 font-sans relative overflow-hidden selection:bg-[#b4e650]/30 flex flex-col lg:block">
          {/* Background Video Container */}
          {currentPage === 0 && (
            <motion.div 
              id="background-character-container" 
              className="relative w-full h-[55vh] lg:absolute lg:inset-0 lg:h-auto z-0 pointer-events-none overflow-hidden shrink-0"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.8 }}
            >
              <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute w-full h-full object-cover opacity-100 scale-[1.1] lg:translate-x-[2%] lg:translate-y-[2%]"
                src="/Subtle_Head_Tilt_Animation_Generated.mp4"
              />
              {/* Very subtle gradient to ensure text readability without darkening the bright background */}
              <div className="absolute inset-0 bg-linear-to-b from-transparent via-transparent to-black lg:bg-linear-to-r lg:from-black/30 lg:via-transparent lg:to-transparent"></div>
            </motion.div>
          )}

          {/* Top Right Navigation (Only on Page 0) */}
          <AnimatePresence>
            {currentPage === 0 && (
              <motion.div 
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -10 }}
                transition={{ duration: 0.3 }}
                className="absolute top-6 right-6 md:top-12 md:right-12 flex items-center gap-4 md:gap-6 text-[8px] md:text-[10px] font-mono tracking-[0.2em] text-white/70 z-20"
              >
                <span>1/01</span>
                <div className="w-8 md:w-16 h-px bg-white/30"></div>
                <button 
                  onClick={() => setCurrentPage(1)}
                  className="hover:text-white transition-colors uppercase tracking-[0.2em] relative group overflow-hidden"
                >
                  <span className="inline-block py-1">NEXT PROJECT</span>
                  <span className="absolute bottom-0 left-0 w-0 h-px bg-orange-500 transition-all duration-300 group-hover:w-full"></span>
                </button>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Main Content Container */}
          <div className="relative z-10 flex flex-col lg:block grow h-full min-h-screen">
            <AnimatePresence mode="wait">
              {currentPage === 0 ? (
                <AboutPage />
              ) : (
                <ProjectsPage onNavigate={() => setCurrentPage(0)} />
              )}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </>
  );
}
