import { useEffect, useRef } from 'react';
import gsap from 'gsap';

export default function SpotlightReveal({ image }) {
  const containerRef = useRef(null);
  const maskRef = useRef(null);
  const posRef = useRef({ x: 0, y: 0 });
  const targetRef = useRef({ x: 0, y: 0 });
  const rafRef = useRef(null);

  useEffect(() => {
    // Skip on touch devices
    if (window.matchMedia('(pointer: coarse)').matches) return;

    const container = containerRef.current;
    const mask = maskRef.current;

    const handleMouseMove = (e) => {
      const rect = container.getBoundingClientRect();
      targetRef.current.x = e.clientX - rect.left;
      targetRef.current.y = e.clientY - rect.top;
    };

    const handleMouseEnter = () => {
      gsap.to(mask, {
        opacity: 1,
        duration: 0.4,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(mask, {
        opacity: 0,
        duration: 0.4,
        ease: 'power2.out',
      });
    };

    // Smooth GSAP lerp loop
    const lerp = () => {
      posRef.current.x += (targetRef.current.x - posRef.current.x) * 0.15;
      posRef.current.y += (targetRef.current.y - posRef.current.y) * 0.15;

      if (mask) {
        mask.style.clipPath = `circle(75px at ${posRef.current.x}px ${posRef.current.y}px)`;
      }

      rafRef.current = requestAnimationFrame(lerp);
    };

    container.addEventListener('mousemove', handleMouseMove);
    container.addEventListener('mouseenter', handleMouseEnter);
    container.addEventListener('mouseleave', handleMouseLeave);
    rafRef.current = requestAnimationFrame(lerp);

    return () => {
      container.removeEventListener('mousemove', handleMouseMove);
      container.removeEventListener('mouseenter', handleMouseEnter);
      container.removeEventListener('mouseleave', handleMouseLeave);
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <section className="py-24 md:py-32 px-6">
      <div className="max-w-5xl mx-auto">
        <span className="text-xs font-medium tracking-[0.3em] uppercase text-text-secondary block mb-4">
          Interactive
        </span>
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight mb-14">
          Hover to Reveal
        </h2>

        <div
          ref={containerRef}
          className="relative w-full aspect-[16/9] rounded-xl overflow-hidden select-none"
          style={{ cursor: 'none' }}
        >
          {/* Background base layer — revealed through the mask */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${image})` }}
          />

          {/* Foreground overlay — gets cut by the spotlight mask */}
          <div className="absolute inset-0 bg-accent flex items-center justify-center">
            <div className="text-center px-6">
              <p className="text-bg text-xs sm:text-sm font-medium tracking-[0.3em] uppercase mb-4 opacity-60">
                Move your cursor
              </p>
              <h3 className="text-bg text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight">
                Explore the
                <br />
                Unseen
              </h3>
              <p className="text-bg/50 text-sm mt-6 max-w-md mx-auto">
                Every project starts with a vision. Hover around to discover what lies beneath the surface.
              </p>
            </div>
          </div>

          {/* Mask layer — reveals the image behind via clip-path */}
          <div
            ref={maskRef}
            className="absolute inset-0 bg-cover bg-center opacity-0 transition-none"
            style={{
              backgroundImage: `url(${image})`,
              clipPath: 'circle(75px at -100px -100px)',
              filter: 'none',
            }}
          />

          {/* Subtle edge blur ring around the spotlight
              We overlay a semi-transparent version with a slightly larger clip */}
          <div
            className="absolute inset-0 pointer-events-none"
            style={{
              background: 'radial-gradient(circle 95px at var(--x, -100px) var(--y, -100px), transparent 60%, rgba(0,0,0,0.6) 100%)',
              mixBlendMode: 'multiply',
              opacity: 0,
            }}
          />

          {/* Mobile fallback */}
          <div className="absolute inset-0 flex items-end p-6 md:hidden">
            <p className="text-bg/60 text-xs">
              Best experienced on desktop with a mouse
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
