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
    <section id="testimonials" className="py-24 md:py-32 overflow-hidden">
      <div className="max-w-4xl mx-auto px-6 mb-16">
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
          Client Stories
        </motion.h2>
      </div>

      {/* Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <div
          className="flex gap-8"
          style={{
            animation: 'marquee 40s linear infinite',
            width: 'max-content',
          }}
        >
          {doubledTestimonials.map((t, i) => (
            <div
              key={i}
              className="flex-shrink-0 w-80 md:w-[400px] p-10 border border-border rounded-sm bg-card transition-colors duration-300 hover:border-accent/40"
            >
              <p className="text-sm md:text-base leading-relaxed text-text-primary font-medium italic">
                "{t.quote}"
              </p>
              <div className="mt-8 flex items-center justify-between">
                <div>
                  <p className="text-xs font-bold tracking-widest uppercase">{t.author}</p>
                  <p className="text-[10px] text-text-secondary uppercase tracking-[0.2em] mt-1">{t.role}</p>
                </div>
                <div className="text-accent/20">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C20.1216 16 21.017 16.8954 21.017 18V21H14.017ZM14.017 21H7.01701V18C7.01701 16.8954 7.91244 16 9.01701 16H12.017C13.1216 16 14.017 16.8954 14.017 18V21ZM14.017 21V18C14.017 16.8954 13.1216 16 12.017 16H9.01701C7.91244 16 7.01701 16.8954 7.01701 18V21" opacity="0.1" />
                    <path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1z" />
                    <path d="M15 21c3 0 7-1 7-8V5c0-1.25-.757-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2h.75c0 2.25.25 4-2.75 4v3c0 1 0 1 1 1z" />
                  </svg>
                </div>
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
