import { motion } from 'framer-motion';

const skills = [
  { name: 'Figma', icon: '◆' },
  { name: 'Adobe Photoshop', icon: '◆' },
  { name: 'Adobe Illustrator', icon: '◆' },
  { name: 'HTML', icon: '◆' },
  { name: 'CSS', icon: '◆' },
  { name: 'JavaScript', icon: '◆' },
  { name: 'React', icon: '◆' },
  { name: 'GSAP', icon: '◆' },
  { name: 'Framer Motion', icon: '◆' },
  { name: 'Webflow', icon: '◆' },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Skills() {
  return (
    <section id="skills" className="py-24 md:py-32 px-6 bg-white">
      <div className="max-w-5xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-medium tracking-[0.3em] uppercase text-text-secondary block"
        >
          Skills
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight"
        >
          Tools & Technologies
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-14 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              data-hover
              className="group relative px-5 py-6 border border-border rounded-lg text-center
                         transition-all duration-300
                         hover:border-accent hover:shadow-lg hover:scale-105 hover:-translate-y-1"
            >
              <span className="block text-xl mb-3 text-text-secondary group-hover:text-accent transition-colors duration-300">
                {skill.icon}
              </span>
              <span className="text-sm font-medium tracking-wide">{skill.name}</span>
              {/* Glow effect on hover */}
              <div className="absolute inset-0 rounded-lg bg-accent/[0.02] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
