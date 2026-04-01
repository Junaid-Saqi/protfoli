import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollText() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);
  const charsRef = useRef([]);

  const text = "I am Junaid Mirza—a joyful dreamer and developer who writes code the way a poet writes verses, turning imagination into living digital worlds.";
  // Split into characters for a much smoother, fluid "fisheye" center-scaling effect
  const chars = text.split("");

  useEffect(() => {
    const ctx = gsap.context(() => {
      // 1. Horizontal scroll timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'center center', // Pin when the section reaches the center of the viewport
          end: '+=300%',          // Keep pinned for 300% of the viewport height (creates longer scroll distance)
          pin: true,              // Freeze the section in place
          scrub: 1,               // Smooth scrubbing
        },
      });

      // Horizontal translation: Start centered (first character) and scroll until end is centered (last character)
      tl.fromTo(textRef.current, 
        { xPercent: 50 }, 
        {
          xPercent: -50, 
          ease: 'none',
          duration: 1,
        }
      );

      // 2. Dynamic center-weighted scaling (Fisheye effect)

      const updateScales = () => {
        if (!charsRef.current || charsRef.current.length === 0) return;
        
        const windowCenter = window.innerWidth / 2;
        // The distance at which the character reaches minimum scale
        const maxDist = window.innerWidth / 2; 

        charsRef.current.forEach((char) => {
          if (!char) return;
          const rect = char.getBoundingClientRect();
          const charCenter = rect.left + rect.width / 2;
          
          // Absolute distance from the exact center of the screen
          const dist = Math.abs(windowCenter - charCenter);
          
          // Calculate scale: largest at center (dist = 0), smaller at edges
          const minScale = 0.6;
          const maxScale = 1.5;
          
          // Linear mapping mapped through a subtle easing curve conceptually (just using math)
          let scale = maxScale - (dist / maxDist) * (maxScale - minScale);
          scale = Math.max(minScale, Math.min(maxScale, scale));
          
          // Apply scale and slightly adjust opacity based on distance for depth
          const opacity = Math.max(0.3, 1 - (dist / maxDist) * 0.7);

          gsap.set(char, { 
            scale: scale,
            opacity: opacity
          });
        });
      };

      // Hook into GSAP's ticker to continuously update character scales while animating
      gsap.ticker.add(updateScales);

      return () => {
        gsap.ticker.remove(updateScales);
      };

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-bg flex items-center justify-center"
      style={{
        maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)',
        WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)'
      }}
    >
      <div 
        ref={textRef} 
        className="whitespace-nowrap flex items-center justify-start origin-left"
        style={{ willChange: 'transform' }}
      >
        <h2 
          className="text-[5vw] md:text-[6vw] font-bold tracking-tighter leading-none select-none text-transparent flex items-center"
          style={{ WebkitTextStroke: '1.5px var(--color-text-primary)' }}
        >
          {chars.map((char, i) => (
            <span
              key={i}
              ref={(el) => (charsRef.current[i] = el)}
              className="inline-block origin-center will-change-transform"
              style={{ marginRight: char === " " ? "3vw" : "2px" }}
            >
              {char}
            </span>
          ))}
        </h2>
      </div>
    </section>
  );
}
