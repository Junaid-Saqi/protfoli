import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import profileImg from '../assets/profile.png';
import resumeFile from '../assets/Resume/Profile.pdf';

gsap.registerPlugin(ScrollTrigger);

const playTickSound = () => {
  const audioContext = new (window.AudioContext || window.webkitAudioContext)();
  const oscillator = audioContext.createOscillator();
  const gainNode = audioContext.createGain();
  
  oscillator.connect(gainNode);
  gainNode.connect(audioContext.destination);
  
  oscillator.frequency.value = 800;
  oscillator.type = 'sine';
  
  gainNode.gain.setValueAtTime(0.1, audioContext.currentTime);
  gainNode.gain.exponentialRampToValueAtTime(0.001, audioContext.currentTime + 0.05);
  
  oscillator.start(audioContext.currentTime);
  oscillator.stop(audioContext.currentTime + 0.05);
};

export default function Hero() {
  const sectionRef = useRef(null);
  const bottomTextRef = useRef(null);
  const imageRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  const scrollIndicatorRef = useRef(null);
  
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  );

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (scrollIndicatorRef.current) {
        const { clientX, clientY } = e;
        const moveX = (clientX - window.innerWidth / 2) * 0.02;
        const moveY = (clientY - window.innerHeight / 2) * 0.02;
        scrollIndicatorRef.current.style.transform = `translate(calc(-50% + ${moveX}px), ${moveY}px)`;
      }
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
      playTickSound();
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Subtle parallax scale on the background image during scroll
      gsap.to(imageRef.current, {
        scale: 0.95,
        yPercent: 10,
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        },
      });

      // Bottom left text reveals from right (off-screen) to left as user scrolls
      // It starts WAY off-screen right
      gsap.fromTo(bottomTextRef.current,
        { x: '100vw' },
        {
          x: '0',
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top top',
            end: 'center top',
            scrub: true,
          },
        }
      );
      
      // Giant name text slides slightly outward horizontally on scroll for parallax effect
      gsap.to(leftTextRef.current, {
        x: '-10vw',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      });
      gsap.to(rightTextRef.current, {
        x: '8vw',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      });

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="hero"
      className="relative w-full h-[100vh] flex flex-col items-center justify-center overflow-hidden bg-bg"
    >
      {/* Absolute Navbar matching layout */}
      <nav className="absolute top-0 left-0 w-full px-6 py-8 flex justify-between items-center z-50 mix-blend-difference text-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
        <div className="flex gap-4 md:gap-8 items-center">
          <div className="group relative flex items-center gap-1.5 cursor-default px-2 py-2">
            <span>Junaid Mirza</span>
            <svg 
              className="w-3 h-3 md:w-3.5 md:h-3.5 text-[#1D9BF0] drop-shadow-[0_0_8px_rgba(29,155,240,0.5)]" 
              viewBox="0 0 24 24" 
              fill="currentColor"
            >
              <path d="M22.5 12.5c0-1.58-.88-2.95-2.18-3.66.54-1.27.43-2.71-.34-3.88-1.07-1.62-2.92-2.31-4.75-1.74-.66-1.32-1.92-2.22-3.39-2.39-1.93-.22-3.71 1.06-4.22 2.87-1.42-.3-2.93.1-3.92 1.09-1.46 1.46-1.59 3.73-.3 5.34-.37.7-.58 1.5-.58 2.37 0 1.58.88 2.95 2.18 3.66-.54 1.27-.43 2.71.34 3.88 1.07 1.62 2.92 2.31 4.75 1.74.66 1.32 1.92 2.22 3.39 2.39 1.93.22 3.71-1.06 4.22-2.87 1.42.3 2.93-.1 3.92-1.09 1.46-1.46 1.59-3.73.3-5.34.37-.7.58-1.5.58-2.37zm-11.5 4.5l-4.5-4.5 1.41-1.41 3.09 3.09 7.09-7.09 1.41 1.41-8.5 8.5z"/>
            </svg>
            
            {/* Tooltip */}
            <div className="absolute left-0 top-full mt-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap">
              <div className="bg-white text-black text-[8px] tracking-[0.1em] px-2 py-1 rounded-sm font-bold uppercase shadow-xl">
                i want this lable on every my socialmedia
              </div>
              <div className="w-2 h-2 bg-white rotate-45 absolute -top-1 left-4" />
            </div>
          </div>
          <a href="#work" className="hidden md:inline-block opacity-70 hover:opacity-100 transition-opacity px-2 py-2">Projects</a>
          <a href={resumeFile} target="_blank" rel="noopener noreferrer" className="hidden md:inline-block opacity-70 hover:opacity-100 transition-opacity px-2 py-2">Resume</a>
          <a href="#contact" className="hidden md:inline-block opacity-70 hover:opacity-100 transition-opacity px-2 py-2">Contact</a>
        </div>
        <div className="flex gap-4 md:gap-8">
          <a href="https://www.linkedin.com/in/junaid-bro/" target="_blank" rel="noopener noreferrer" className="opacity-70 hover:opacity-100 transition-opacity px-2 py-2">LinkedIn</a>
        </div>
      </nav>

      {/* Large Central Image inside a dark mask container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94], delay: 1.5 }}
        className="absolute bottom-0 w-[95vw] sm:w-[85vw] md:w-[75vw] h-[90vh] bg-[#0a0a0a] overflow-hidden rounded-t-sm"
      >
        <div className="absolute inset-0 bg-gradient-to-t from-accent/25 to-transparent z-10 pointer-events-none" />
        <img
          ref={imageRef}
          src={profileImg}
          alt="Portrait"
          className="w-full h-full object-cover object-top grayscale opacity-90 mix-blend-luminosity"
        />
      </motion.div>

      {/* Large Overlapping Split Text */}
      {/* Slightly inward padding from original 12 to 24 */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 flex justify-between items-center px-6 md:px-24 lg:px-32 z-30 pointer-events-none mix-blend-difference text-white">
        
        {/* Left Side Group */}
        <motion.div
          ref={leftTextRef}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 1.6 }}
          className="flex flex-col"
        >
          <span className="text-[8px] md:text-[10px] tracking-[0.2em] font-medium uppercase mb-0 md:mb-1 opacity-80 pl-1 md:pl-2">
            Portfolio Of
          </span>
          <h1 className="text-[12vw] md:text-[9vw] leading-none font-light tracking-tighter">
            JUNAID
          </h1>
        </motion.div>

        {/* Right Side Group */}
        <motion.div
          ref={rightTextRef}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1], delay: 1.8 }}
          className="flex flex-col items-end text-right"
        >
          <span className="text-[8px] md:text-[10px] tracking-[0.2em] font-medium uppercase mb-0 md:mb-1 opacity-80 pr-1 md:pr-2 max-w-[120px] md:max-w-none text-right">
            Visual Designer {'&'} <br className="hidden md:inline-block" />Creative Developer
          </span>
          <h1 className="text-[12vw] md:text-[9vw] leading-none font-light tracking-tighter">
            MIRZA
          </h1>
        </motion.div>
      </div>

      {/* Scroll Down Indicator */}
      <motion.div
        ref={scrollIndicatorRef}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-[25vh] md:bottom-32 left-1/2 z-20 mix-blend-difference text-white text-[9px] md:text-[11px] font-semibold tracking-[0.2em] text-center uppercase pointer-events-none"
      >
        <span className="text-accent">Scroll</span><br /><span>Down</span>
      </motion.div>

      {/* Bottom Text (Left corner and Right corner) */}
      <div className="absolute bottom-8 left-0 w-full z-20 overflow-hidden mix-blend-difference text-white flex justify-between items-end px-6 md:px-8 pointer-events-none">
        <p
          ref={bottomTextRef}
          className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase whitespace-nowrap"
        >
          I HAVE AN ABSTRACT MIND!
        </p>
        <span className="text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase">
          {time}
        </span>
      </div>
    </section>
  );
}
