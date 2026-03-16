import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import profileImg from '../assets/profile.png';

gsap.registerPlugin(ScrollTrigger);

export default function Hero() {
  const sectionRef = useRef(null);
  const bottomTextRef = useRef(null);
  const imageRef = useRef(null);
  const leftTextRef = useRef(null);
  const rightTextRef = useRef(null);
  
  const [time, setTime] = useState(
    new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
  );

  useEffect(() => {
    // Update time every minute
    const interval = setInterval(() => {
      setTime(new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }));
    }, 60000);
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
        x: '-20vw',
        ease: 'none',
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top top',
          end: 'bottom top',
          scrub: true,
        }
      });
      gsap.to(rightTextRef.current, {
        x: '20vw',
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
          <span className="pointer-events-auto">Harry Visuals</span>
          <span className="hidden md:inline-block opacity-70 cursor-pointer pointer-events-auto hover:opacity-100 transition-opacity">Honors</span>
          <a href="#work" className="hidden md:inline-block opacity-70 cursor-pointer pointer-events-auto hover:opacity-100 transition-opacity">Projects</a>
          <span className="hidden md:inline-block opacity-70 cursor-pointer pointer-events-auto hover:opacity-100 transition-opacity">Resume</span>
          <a href="#contact" className="hidden md:inline-block opacity-70 cursor-pointer pointer-events-auto hover:opacity-100 transition-opacity">Contact</a>
        </div>
        <div className="flex gap-4 md:gap-8">
          <span className="hidden md:inline-block opacity-70 cursor-pointer pointer-events-auto hover:opacity-100 transition-opacity">Awwwards</span>
          <span className="opacity-70 cursor-pointer pointer-events-auto hover:opacity-100 transition-opacity">LinkedIn</span>
        </div>
      </nav>

      {/* Large Central Image inside a dark mask container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.5, ease: [0.25, 0.46, 0.45, 0.94], delay: 1.5 }}
        className="absolute bottom-0 w-[95vw] sm:w-[80vw] md:w-[50vw] h-[85vh] bg-[#111] overflow-hidden rounded-t-sm"
      >
        <img
          ref={imageRef}
          src={profileImg}
          alt="Portrait"
          className="w-full h-full object-cover object-top grayscale opacity-80 mix-blend-luminosity"
        />
      </motion.div>

      {/* Large Overlapping Split Text */}
      <div className="absolute top-1/2 left-0 w-full -translate-y-1/2 flex justify-between items-center px-2 sm:px-4 md:px-12 z-20 pointer-events-none mix-blend-difference text-white">
        
        {/* Left Side Group */}
        <motion.div
          ref={leftTextRef}
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 1.6 }}
          className="flex flex-col"
        >
          <span className="text-[9px] md:text-xs tracking-[0.2em] font-medium uppercase mb-0 md:mb-1 opacity-80 pl-1 md:pl-2">
            Portfolio Of
          </span>
          <h1 className="text-[18vw] md:text-[13vw] leading-none font-light tracking-tighter">
            HARRY
          </h1>
        </motion.div>

        {/* Right Side Group */}
        <motion.div
          ref={rightTextRef}
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1, ease: 'easeOut', delay: 1.8 }}
          className="flex flex-col items-end text-right"
        >
          <span className="text-[9px] md:text-xs tracking-[0.2em] font-medium uppercase mb-0 md:mb-1 opacity-80 pr-1 md:pr-2 max-w-[120px] md:max-w-none text-right">
            Visual Designer {'&'} <br className="hidden md:inline-block" />Creative Developer
          </span>
          <h1 className="text-[18vw] md:text-[13vw] leading-none font-light tracking-tighter">
            VISUALS
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
        <span>Scroll</span><br /><span>Down</span>
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
