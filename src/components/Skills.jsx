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
    <section id="skills" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
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
          className="mt-16 border-t border-border pt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-y-10 gap-x-12"
        >
          {skills.map((skill) => (
            <motion.div
              key={skill.name}
              variants={cardVariants}
              className="flex items-center gap-6 group"
            >
              <div className="w-10 h-10 border border-border flex items-center justify-center rounded-sm text-text-secondary group-hover:border-accent group-hover:text-accent transition-all duration-300">
                {skill.icon}
              </div>
              <div>
                <span className="text-xs font-bold tracking-[0.2em] uppercase block">{skill.name}</span>
                <span className="text-[10px] text-text-secondary uppercase tracking-widest mt-1 block">Proficiency</span>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
