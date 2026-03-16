import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const experiences = [
  {
    role: 'Visual Designer',
    company: 'LQ Agency',
    duration: '2023 — Present',
    description: 'Worked on branding systems, campaign visuals, and digital product interfaces.',
  },
  {
    role: 'UI/UX Designer',
    company: 'IT Park Group',
    duration: '2022 — 2023',
    description: 'Designed user-centered interfaces and improved product usability.',
  },
  {
    role: 'UI/UX Designer',
    company: 'Google Studio',
    duration: '2021 — 2022',
    description: 'Contributed to interface systems, prototypes, and digital experiences.',
  },
];

export default function Experience() {
  const lineRef = useRef(null);
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        lineRef.current,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          scrollTrigger: {
            trigger: sectionRef.current,
            start: 'top 60%',
            end: 'bottom 80%',
            scrub: true,
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={sectionRef} id="experience" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-medium tracking-[0.3em] uppercase text-text-secondary block"
        >
          Experience
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight"
        >
          Where I've Worked
        </motion.h2>

        <div className="mt-16 relative">
          {/* Growing line */}
          <div
            ref={lineRef}
            className="absolute left-0 md:left-6 top-0 bottom-0 w-px bg-accent origin-top hidden md:block"
          />

          <div className="space-y-12 md:space-y-16">
            {experiences.map((exp, i) => (
              <motion.div
                key={exp.company}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-80px' }}
                transition={{ delay: i * 0.15, duration: 0.7, ease: [0.25, 0.46, 0.45, 0.94] }}
                className="relative md:pl-16"
              >
                {/* Timeline dot */}
                <div className="hidden md:block absolute left-[18px] top-2 w-3 h-3 border-2 border-accent bg-bg rounded-full" />

                <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2">
                  <div>
                    <h3 className="text-lg md:text-xl font-semibold">{exp.role}</h3>
                    <p className="text-text-secondary text-sm mt-1">{exp.company}</p>
                  </div>
                  <span className="text-xs font-medium tracking-wider text-text-secondary uppercase shrink-0">
                    {exp.duration}
                  </span>
                </div>
                <p className="mt-3 text-text-secondary text-sm leading-relaxed max-w-xl">
                  {exp.description}
                </p>

                {/* Divider */}
                {i < experiences.length - 1 && (
                  <div className="mt-10 border-b border-border/50" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
