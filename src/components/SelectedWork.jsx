import { motion } from 'framer-motion';
import project1 from '..//assets/gifs/broke.gif';
import project2 from '..//assets/gifs/cashwavye.gif';
import project3 from '..//assets/gifs/fatguess.gif';

const projects = [
  {
    title: 'Fatguess',
    category: 'NFTs',
    description: 'A clean and modern branding system for a creative business.',
    image: project1,
  },
  {
    title: 'Cashwavye',
    category: 'WEB3',
    description: 'A sleek and interactive interface design for a digital product.',
    image: project2,
  },
  {
    title: 'Broke-coin',
    category: 'Web3',
    description: 'A responsive and animated landing page focused on storytelling.',
    image: project3,
  },
];

export default function SelectedWork() {
  return (
    <section id="work" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
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

        <div className="mt-16 space-y-24 md:space-y-32">
          {projects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start"
            >
              {/* Thumbnail */}
              <div className="md:col-span-7 overflow-hidden rounded-sm bg-card aspect-[16/10]">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </div>

              {/* Info */}
              <div className="md:col-span-5 pt-2">
                <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-text-secondary">
                  {project.category}
                </span>
                <h3 className="mt-4 text-xl md:text-2xl font-semibold tracking-tight uppercase">
                  {project.title}
                </h3>
                <p className="mt-4 text-text-secondary text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-8">
                   <div className="inline-flex items-center gap-4 text-[10px] font-bold tracking-[0.2em] uppercase cursor-pointer hover:gap-6 transition-all duration-300">
                     Explore Project
                     <div className="w-8 h-[1px] bg-accent" />
                   </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
