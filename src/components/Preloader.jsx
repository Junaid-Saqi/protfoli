import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function Preloader({ mainContentRef }) {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const leftHalfRef = useRef(null);
  const rightHalfRef = useRef(null);

  useEffect(() => {
    // Initial state for main content: scaled down and pushed back on Z-axis
    if (mainContentRef.current) {
      gsap.set(mainContentRef.current, {
        scale: 0.8,
        z: -100,
        transformPerspective: 1000,
      });
    }

    const tl = gsap.timeline({
      onComplete: () => {
        if (containerRef.current) {
          containerRef.current.style.display = 'none';
        }
        // Cleanup perspective and all transforms to prevent position: fixed clipping bugs
        if (mainContentRef.current) {
          gsap.set(mainContentRef.current, { clearProps: 'all' });
        }
        // Restore scrollbar which might be blocked by preloader fixed position
        document.body.style.overflow = '';
        
        // Force GSAP to recalculate all trigger positions now that 
        // the scale transform is removed and layout has settled.
        ScrollTrigger.refresh();
      }
    });

    // Disable scroll during preloader
    document.body.style.overflow = 'hidden';

    // Step 1: Preloader Typography (1.5s total)
    // Hold for 0.5s, then fade out over 1s
    tl.to(textRef.current, {
      opacity: 0,
      duration: 1.0,
      delay: 0.5,
      ease: 'power2.inOut',
    })
    
    // Step 2 & 3: The Split & Z-Index Reveal (1.5s duration)
    // Both halves slide outward (horizontal bisection)
    .to(leftHalfRef.current, {
      xPercent: -100,
      duration: 1.5,
      ease: 'expo.inOut',
    }, 'split')
    .to(rightHalfRef.current, {
      xPercent: 100,
      duration: 1.5,
      ease: 'expo.inOut',
    }, 'split')
    
    // Simultaneously scale up the hero main content
    .to(mainContentRef.current, {
      scale: 1.0,
      z: 0,
      duration: 1.5,
      ease: 'expo.inOut',
    }, 'split');

    return () => {
      tl.kill();
      document.body.style.overflow = '';
    };
  }, [mainContentRef]);

  return (
    <div ref={containerRef} className="fixed inset-0 z-[9999] pointer-events-none flex overflow-hidden">
      {/* Step 2: Horizontal Bisection Halves */}
      <div ref={leftHalfRef} className="w-1/2 h-full bg-[#000000]" />
      <div ref={rightHalfRef} className="w-1/2 h-full bg-[#000000]" />
      
      {/* Step 1: Preloader Typography */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h1 ref={textRef} className="text-white text-lg md:text-2xl font-light tracking-[0.3em] uppercase">
          Harry Visuals
        </h1>
      </div>
    </div>
  );
}
