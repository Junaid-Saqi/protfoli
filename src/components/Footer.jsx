import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'Twitter', url: '#', icon: '𝕏' },
  { name: 'LinkedIn', url: '#', icon: 'in' },
  { name: 'Dribbble', url: '#', icon: '◉' },
  { name: 'Behance', url: '#', icon: 'Bē' },
];

export default function Footer() {
  return (
    <motion.footer
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
      className="py-20 px-6 border-t border-border mt-20"
    >
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-12 md:gap-0">
        <div>
          <h2 className="text-4xl md:text-5xl font-light tracking-tighter mb-6">
            Let's build <br /> something <span className="font-serif italic italic text-white/50">great</span> together.
          </h2>
          <a
            href="mailto:maskedwolf211@gmail.com"
            className="text-lg md:text-xl font-medium tracking-wide hover:opacity-50 transition-opacity underline underline-offset-8"
          >
            maskedwolf211@gmail.com
          </a>
        </div>

        <div className="grid grid-cols-2 gap-16">
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30">Navigation</span>
            <a href="#about" className="text-sm hover:opacity-100 transition-opacity">About</a>
            <a href="#work" className="text-sm hover:opacity-100 transition-opacity">Work</a>
            <a href="#contact" className="text-sm hover:opacity-100 transition-opacity">Contact</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30">Connect</span>
            <a href="#" className="text-sm hover:opacity-100 transition-opacity">Instagram</a>
            <a href="#" className="text-sm hover:opacity-100 transition-opacity">LinkedIn</a>
            <a href="#" className="text-sm hover:opacity-100 transition-opacity">Twitter</a>
          </div>
        </div>
      </div>

      <div className="mt-32 pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0 text-[10px] font-bold tracking-[0.2em] uppercase text-white/30">
        <p>© 2026 Junaid Mirza — All rights reserved.</p>
        <p className="flex gap-8">
          <span>Visual Designer</span>
          <span>Creative Developer</span>
        </p>
      </div>
    </motion.footer>
  );
}
