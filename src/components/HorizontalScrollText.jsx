import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

export default function HorizontalScrollText() {
  const sectionRef = useRef(null);
  const textRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      // Create a timeline for the scroll animation
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: sectionRef.current,
          start: 'top bottom', // Start when the top of the section hits the bottom of the viewport
          end: 'bottom top',   // End when the bottom of the section hits the top of the viewport
          scrub: 1,            // Smooth scrubbing
        },
      });

      // Horizontal translation
      tl.to(textRef.current, {
        xPercent: -50, // Move the text to the left
        ease: 'none',
      }, 0);

      // Scale up and then down based on proximity to center
      // We use a scrollTrigger on the specific text element for scale to peak at center
      gsap.fromTo(textRef.current,
        { scale: 0.8 },
        {
          scale: 1.2,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top center',
            end: 'center center',
            scrub: true,
          }
        }
      );

      gsap.fromTo(textRef.current,
        { scale: 1.2 },
        {
          scale: 0.8,
          ease: 'power1.inOut',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'center center',
            end: 'bottom center',
            scrub: true,
          }
        }
      );

    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-[50vh] flex items-center overflow-hidden bg-bg"
    >
      <div 
        ref={textRef} 
        className="whitespace-nowrap flex items-center origin-center"
        style={{ willChange: 'transform' }}
      >
        <h2 className="text-[12vw] md:text-[15vw] font-light tracking-tighter text-text-primary leading-none select-none">
          I'M 26 — AND I'VE BEEN DESIGNING
        </h2>
      </div>
    </section>
  );
}
