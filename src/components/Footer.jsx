import { motion } from 'framer-motion';

const socialLinks = [
  { name: 'Twitter', url: 'https://x.com/Junaid_Aly_', icon: '𝕏' },
  { name: 'GitHub', url: 'https://github.com/Junaid-Saqi', icon: '⌂' },
  { name: 'Upwork', url: 'https://www.upwork.com/freelancers/~01a4412bb455767646', icon: '↗' },
  { name: 'WhatsApp', url: 'https://wa.me/03555622899', icon: '◈' },
  { name: 'LinkedIn', url: 'https://www.linkedin.com/in/junaid-bro/', icon: 'in' },
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
            Let's build <br /> something <span className="font-serif italic text-red-500">great</span> together.
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
            <a href="#about" className="text-sm hover:opacity-100 transition-opacity px-2 py-2 -mx-2">About</a>
            <a href="#work" className="text-sm hover:opacity-100 transition-opacity px-2 py-2 -mx-2">Work</a>
            <a href="#contact" className="text-sm hover:opacity-100 transition-opacity px-2 py-2 -mx-2">Contact</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-white/30">Connect</span>
            <a href="https://www.upwork.com/freelancers/~01a4412bb455767646" target="_blank" rel="noopener noreferrer" className="text-sm hover:opacity-100 transition-opacity px-2 py-2 -mx-2">Upwork</a>
            <a href="https://x.com/Junaid_Aly_" target="_blank" rel="noopener noreferrer" className="text-sm hover:opacity-100 transition-opacity px-2 py-2 -mx-2">Twitter</a>
            <a href="https://github.com/Junaid-Saqi" target="_blank" rel="noopener noreferrer" className="text-sm hover:opacity-100 transition-opacity px-2 py-2 -mx-2">GitHub</a>
            <a href="https://wa.me/03555622899" target="_blank" rel="noopener noreferrer" className="text-sm hover:opacity-100 transition-opacity px-2 py-2 -mx-2">WhatsApp</a>
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
