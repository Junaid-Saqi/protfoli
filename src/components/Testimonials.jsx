import { motion } from 'framer-motion';

const testimonials = [
  {
    quote: "Working with them was an incredible experience. The attention to detail and creative vision exceeded all expectations.",
    author: "Sarah Mitchell",
    role: "CEO, Nexon Studio"
  },
  {
    quote: "They transformed our brand identity into something truly exceptional. Every deliverable was polished and purposeful.",
    author: "James Rodriguez",
    role: "Founder, PixelCraft"
  },
  {
    quote: "A rare talent who combines stunning visual design with flawless technical execution. Highly recommended.",
    author: "Emma Chen",
    role: "Product Lead, TechFlow"
  },
  {
    quote: "The landing page they designed drove a 200% increase in conversions. Outstanding creative direction.",
    author: "Michael Park",
    role: "Marketing Director, Elevate"
  },
  {
    quote: "Their design sensibility is unmatched. They have a gift for making complex ideas feel simple and beautiful.",
    author: "Olivia Foster",
    role: "Creative Director, Bloom"
  },
];

// Duplicate for seamless loop
const doubledTestimonials = [...testimonials, ...testimonials];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-24 md:py-32 overflow-hidden bg-white">
      <div className="max-w-5xl mx-auto px-6 mb-14">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-medium tracking-[0.3em] uppercase text-text-secondary block"
        >
          Testimonials
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight"
        >
          What Clients Say
        </motion.h2>
      </div>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="group"
      >
        <div
          className="flex gap-6 hover:[animation-play-state:paused]"
          style={{
            animation: 'marquee 40s linear infinite',
            width: 'max-content',
          }}
        >
          {doubledTestimonials.map((t, i) => (
            <div
              key={i}
              data-hover
              className="flex-shrink-0 w-80 md:w-96 p-8 border border-border rounded-xl
                         transition-all duration-300 hover:shadow-lg hover:border-accent/20 hover:-translate-y-1
                         bg-bg"
            >
              <svg width="24" height="24" viewBox="0 0 24 24" fill="none" className="text-accent/20 mb-4">
                <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" fill="currentColor"/>
                <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" fill="currentColor"/>
              </svg>
              <p className="text-sm leading-relaxed text-text-primary">
                "{t.quote}"
              </p>
              <div className="mt-6 pt-4 border-t border-border/50">
                <p className="text-sm font-semibold">{t.author}</p>
                <p className="text-xs text-text-secondary mt-0.5">{t.role}</p>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      <style>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
      `}</style>
    </section>
  );
}
