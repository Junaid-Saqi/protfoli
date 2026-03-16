import { motion } from 'framer-motion';

export default function About() {
  return (
    <section id="about" className="py-24 md:py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-100px' }}
          transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <span className="text-xs font-medium tracking-[0.3em] uppercase text-text-secondary">
            About Me
          </span>

          <h2 className="mt-6 text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold leading-snug tracking-tight">
            Creative designer and developer with experience in visual design, UI/UX, and interactive web experiences.
          </h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ delay: 0.3, duration: 0.7 }}
            className="mt-8 text-text-secondary text-base sm:text-lg leading-relaxed max-w-2xl"
          >
            Passionate about building clean, engaging, and meaningful digital products. 
            I blend design thinking with technical execution to create digital experiences 
            that not only look beautiful but also feel intuitive and purposeful.
          </motion.p>
        </motion.div>

        {/* Stats row */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.5, duration: 0.7 }}
          className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-border pt-10"
        >
          {[
            { num: '4+', label: 'Years Experience' },
            { num: '30+', label: 'Projects Completed' },
            { num: '15+', label: 'Happy Clients' },
            { num: '10+', label: 'Awards & Features' },
          ].map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.6 + i * 0.1, duration: 0.5 }}
            >
              <div className="text-3xl md:text-4xl font-bold">{stat.num}</div>
              <div className="mt-1 text-sm text-text-secondary">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
