import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollText() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a single master timeline for the scroll animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'center center', // Pin when the section reaches the center of the viewport
          end: '+=150%',          // Keep pinned for 150% of the viewport height (creates longer scroll distance)
          pin: true,              // Freeze the section in place
          scrub: 1,               // Smooth scrubbing
        },
      });

      // 1. Horizontal translation across the entire scroll duration
      tl.to(textRef.current, {
        xPercent: -50,
        ease: 'none',
        duration: 1, // Represents 100% of the timeline duration
      });

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
        className="whitespace-nowrap flex items-center justify-center origin-center"
        style={{ willChange: 'transform' }}
      >
        <h2 
          className="text-[15vw] md:text-[20vw] font-bold tracking-tighter leading-none select-none text-transparent"
          style={{ WebkitTextStroke: '2px var(--color-text-primary)' }}
        >
          I'M 26 — AND I'VE BEEN DESIGNING
        </h2>
      </div>
    </section>
  );
}
