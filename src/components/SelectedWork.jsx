import { motion } from 'framer-motion';
import project1 from '../assets/project1.png';
import project2 from '../assets/project2.png';
import project3 from '../assets/project3.png';

const projects = [
  {
    title: 'Brand Identity Project',
    category: 'Branding',
    description: 'A clean and modern branding system for a creative business.',
    image: project1,
  },
  {
    title: 'UI Design Concept',
    category: 'UI/UX',
    description: 'A sleek and interactive interface design for a digital product.',
    image: project2,
  },
  {
    title: 'Landing Page Experience',
    category: 'Web Design',
    description: 'A responsive and animated landing page focused on storytelling.',
    image: project3,
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-medium tracking-[0.3em] uppercase text-text-secondary block"
        >
          Portfolio
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight"
        >
          Selected Work
        </motion.h2>

        <div className="mt-16 space-y-16 md:space-y-20">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, x: i % 2 === 0 ? -60 : 60 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              data-hover
              className={`group flex flex-col ${
                i % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
              } gap-8 md:gap-12 items-center`}
            >
              {/* Thumbnail */}
              <div className="w-full md:w-1/2 overflow-hidden rounded-lg">
                <div className="relative overflow-hidden aspect-[4/3]">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-accent/0 group-hover:bg-accent/5 transition-colors duration-500" />
                </div>
              </div>

              {/* Info */}
              <div className="w-full md:w-1/2 flex flex-col justify-center">
                <span className="text-xs font-medium tracking-[0.2em] uppercase text-text-secondary">
                  {project.category}
                </span>
                <h3 className="mt-3 text-xl sm:text-2xl md:text-3xl font-semibold tracking-tight">
                  {project.title}
                </h3>
                <p className="mt-4 text-text-secondary text-sm sm:text-base leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-6">
                  <span className="inline-flex items-center gap-2 text-sm font-medium group-hover:gap-3 transition-all duration-300">
                    View Project
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                      <path d="M5 12h14" /><path d="m12 5 7 7-7 7" />
                    </svg>
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
