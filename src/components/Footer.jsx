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
      className="py-16 px-6 border-t border-border"
    >
      <div className="max-w-5xl mx-auto">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          {/* Left — Name / Brand */}
          <div className="text-center md:text-left">
            <h3 className="text-lg font-semibold tracking-tight">Portfolio</h3>
            <p className="mt-1 text-sm text-text-secondary">
              Visual Designer & Creative Developer
            </p>
          </div>

          {/* Center — Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                data-hover
                aria-label={link.name}
                className="w-10 h-10 flex items-center justify-center border border-border rounded-full
                           text-sm font-semibold text-text-secondary
                           transition-all duration-300
                           hover:bg-accent hover:text-bg hover:border-accent hover:scale-110"
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Right — Email */}
          <div className="text-center md:text-right">
            <a
              href="mailto:hello@portfolio.com"
              data-hover
              className="text-sm text-text-secondary hover:text-accent transition-colors duration-300 underline underline-offset-4 decoration-border hover:decoration-accent"
            >
              hello@portfolio.com
            </a>
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-6 border-t border-border/50 text-center">
          <p className="text-xs text-text-secondary tracking-wider">
            © {new Date().getFullYear()} Portfolio. All rights reserved.
          </p>
        </div>
      </div>
    </motion.footer>
  );
}
