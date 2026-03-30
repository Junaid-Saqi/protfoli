import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import profileImg from '../assets/profile.png';
import resumeFile from '../assets/Resume/Profile.pdf';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const bottomTextRef = useRef(null);
  const imageRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' })
  );
  const tickAudioRef = useRef(null);

  useEffect(() => {
    const AudioContext = window.AudioContext || window.webkitAudioContext;
    const audioCtx = new AudioContext();
    const oscillator = audioCtx.createOscillator();
    const gainNode = audioCtx.createGain();
    
    oscillator.connect(gainNode);
    gainNode.connect(audioCtx.destination);
    
    oscillator.frequency.value = 800;
    oscillator.type = 'sine';
    gainNode.gain.value = 0;
    
    oscillator.start();
    tickAudioRef.current = { audioCtx, oscillator, gainNode };

    return () => {
      oscillator.stop();
      audioCtx.close();
    };
  }, []);

  useEffect(() => {
    const playTick = () => {
      if (tickAudioRef.current && tickAudioRef.current.audioCtx) {
        const { audioCtx, gainNode } = tickAudioRef.current;
        const now = audioCtx.currentTime;
        gainNode.gain.cancelScheduledValues(now);
        gainNode.gain.setValueAtTime(0.05, now);
        gainNode.gain.exponentialRampToValueAtTime(0.001, now + 0.05);
      }
    };

    playTick();

    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' }));
      playTick();
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
      <nav className="absolute top-0 left-0 w-full px-6 py-8 flex justify-between items-center z-50 mix-blend-difference text-white text-[10px] md:text-xs font-bold tracking-[0.2em] uppercase pointer-events-none">
        <div className="flex gap-4 md:gap-8">
          <span className="pointer-events-auto">Junaid Mirza</span>
          <a href="#work" className="hidden md:inline-block opacity-70 cursor-pointer pointer-events-auto hover:opacity-100 transition-opacity">Projects</a>
          <a href={resumeFile} target="_blank" rel="noopener noreferrer" className="hidden md:inline-block opacity-70 cursor-pointer pointer-events-auto hover:opacity-100 transition-opacity">Resume</a>
          <a href="#contact" className="hidden md:inline-block opacity-70 cursor-pointer pointer-events-auto hover:opacity-100 transition-opacity">Contact</a>
        </div>
        <div className="flex gap-4 md:gap-8">
          <a href="https://www.linkedin.com/in/junaid-bro/" target="_blank" rel="noopener noreferrer" className="opacity-70 cursor-pointer pointer-events-auto hover:opacity-100 transition-opacity">LinkedIn</a>
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
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.2, duration: 1 }}
        className="absolute bottom-[25vh] md:bottom-32 left-1/2 -translate-x-1/2 z-20 mix-blend-difference text-white text-[9px] md:text-[11px] font-semibold tracking-[0.2em] text-center uppercase pointer-events-none"
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
