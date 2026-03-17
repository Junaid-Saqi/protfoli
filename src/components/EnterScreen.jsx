import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import gsap from 'gsap';

export default function EnterScreen({ onEnter }) {
  const [isVisible, setIsVisible] = useState(true);
  const [isClicked, setIsClicked] = useState(false);
  const [progress, setProgress] = useState(0);
  const orbRef = useRef(null);

  useEffect(() => {
    // Elegant floating glow orb that follows mouse
    const moveOrb = (e) => {
      gsap.to(orbRef.current, {
        x: e.clientX,
        y: e.clientY,
        duration: 2,
        ease: 'power3.out'
      });
    };

    window.addEventListener('mousemove', moveOrb);
    
    return () => window.removeEventListener('mousemove', moveOrb);
  }, []);

  const handleEnter = () => {
    if (isClicked) return;
    setIsClicked(true);

    // Simulate loading progress
    let currentProgress = 0;
    const interval = setInterval(() => {
      currentProgress += Math.random() * 15;
      if (currentProgress >= 100) {
        currentProgress = 100;
        clearInterval(interval);
        setTimeout(() => {
          setIsVisible(false);
          // Notify parent to start the site flow after a delay for the fade
          setTimeout(onEnter, 1200);
        }, 500);
      }
      setProgress(Math.floor(currentProgress));
    }, 120);
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1.2, ease: [0.43, 0.13, 0.23, 0.96] }}
          onClick={handleEnter}
          className="fixed inset-0 z-[100] bg-[#000000] flex flex-col items-center justify-center overflow-hidden cursor-none"
        >
          {/* Subtle Background Markings */}
          <div className="absolute inset-0 opacity-10 pointer-events-none select-none overflow-hidden">
            <svg width="100%" height="100%" className="w-full h-full">
              <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
                <circle cx="40" cy="40" r="0.5" fill="white" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#grid)" />
            </svg>
            <div className="absolute inset-0 flex items-center justify-center opacity-5">
               <h3 className="text-[40vw] font-black tracking-tighter text-white leading-none">
                 JM
               </h3>
            </div>
          </div>

          {/* Glowing Orb */}
          <div
            ref={orbRef}
            className="fixed top-0 left-0 w-96 h-96 -ml-48 -mt-48 rounded-full bg-accent/20 blur-[100px] pointer-events-none mix-blend-screen"
          />

          {/* Central UI Elements */}
          <div className="relative flex flex-col items-center">
            {/* Concentric Rotating Circles - Only visible before click */}
            <AnimatePresence>
              {!isClicked && (
                <>
                  <motion.div 
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 1 }}
                    className="absolute"
                  >
                    <motion.div 
                      animate={{ rotate: 360 }}
                      transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 border border-accent/20 rounded-full" 
                    />
                    <motion.div 
                      animate={{ rotate: -360 }}
                      transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
                      className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-80 h-80 border border-accent/10 rounded-full" 
                    />
                  </motion.div>
                </>
              )}
            </AnimatePresence>
            
            {/* The Entry Prompt or Loading Progress */}
            <motion.div
              layout
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1.5, delay: 0.5 }}
              className="z-10 text-center"
            >
              {!isClicked ? (
                <>
                  <span className="text-[10px] md:text-[11px] font-bold tracking-[0.5em] uppercase text-white/40 mb-8 block">
                    Sound Required
                  </span>
                  <button className="group relative">
                    <span className="relative z-10 text-[10px] md:text-[12px] font-black tracking-[0.6em] uppercase text-white group-hover:text-white/50 transition-colors">
                      CLICK ANYWHERE
                    </span>
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-48 h-48 border border-accent/40 rounded-full scale-50 group-hover:scale-100 opacity-0 group-hover:opacity-100 transition-all duration-1000 ease-out" />
                    <div className="mt-4 h-[1px] w-0 group-hover:w-full bg-accent/50 mx-auto transition-all duration-700" />
                  </button>
                </>
              ) : (
                <div className="flex flex-col items-center">
                   <div className="text-[40px] md:text-[60px] font-light tracking-tighter text-white/90 mb-2 font-mono">
                     {progress.toString().padStart(3, '0')}%
                   </div>
                   <div className="w-48 h-[1px] bg-white/10 relative overflow-hidden">
                     <motion.div 
                       initial={{ width: 0 }}
                       animate={{ width: `${progress}%` }}
                       className="absolute left-0 top-0 h-full bg-accent shadow-[0_0_15px_rgba(230,57,70,0.5)]"
                     />
                   </div>
                   <span className="mt-6 text-[8px] font-bold tracking-[0.4em] uppercase text-white/30">
                     Loading Experience
                   </span>
                </div>
              )}
            </motion.div>
          </div>

          {/* Bottom Branding */}
          <div className="absolute bottom-12 text-center pointer-events-none">
            <p className="text-[9px] font-bold tracking-[0.3em] uppercase text-white/30">
              Immersive Experience — Junaid Mirza
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
