import { motion } from 'framer-motion';

// Import certificates
import cybersecFoundations from '../assets/certificates/Foundations of Cybersecurity.pdf';
import htmlCssDepth from '../assets/certificates/HTML CSS in depth.pdf';
import versionControl from '../assets/certificates/Version Control.pdf';
import googleCybersec from '../assets/certificates/google cybersecutrty.pdf';
import ibmNetworking from '../assets/certificates/ibm networking.pdf';
import introFrontend from '../assets/certificates/intro to frontend  development.pdf';
import metaVersionControl from '../assets/certificates/meta version control.pdf';
import programmingJS from '../assets/certificates/programing with js.pdf';

const certificates = [
  { 
    name: 'Foundations of Cybersecurity', 
    issuer: 'Google',
    date: '2023',
    link: cybersecFoundations
  },
  { 
    name: 'HTML & CSS in Depth', 
    issuer: 'Meta',
    date: '2023',
    link: htmlCssDepth
  },
  { 
    name: 'Version Control', 
    issuer: 'Meta',
    date: '2023',
    link: versionControl
  },
  { 
    name: 'Google Cybersecurity Professional', 
    issuer: 'Google',
    date: '2023',
    link: googleCybersec
  },
  { 
    name: 'IBM Networking Essentials', 
    issuer: 'IBM',
    date: '2023',
    link: ibmNetworking
  },
  { 
    name: 'Introduction to Front-End Development', 
    issuer: 'Meta',
    date: '2023',
    link: introFrontend
  },
  { 
    name: 'Meta Version Control', 
    issuer: 'Meta',
    date: '2023',
    link: metaVersionControl
  },
  { 
    name: 'Programming with JavaScript', 
    issuer: 'Meta',
    date: '2023',
    link: programmingJS
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
    },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] },
  },
};

export default function Certificates() {
  return (
    <section id="certificates" className="py-24 md:py-32 px-6 bg-[#0c0c0c]">
      <div className="max-w-4xl mx-auto">
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-xs font-medium tracking-[0.3em] uppercase text-text-secondary block"
        >
          Recognition
        </motion.span>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 0.6 }}
          className="mt-4 text-2xl sm:text-3xl md:text-4xl font-semibold tracking-tight"
        >
          Certificates & Awards
        </motion.h2>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-80px' }}
          className="mt-16 border-t border-border"
        >
          {certificates.map((cert, index) => (
            <motion.div
              key={cert.name}
              variants={itemVariants}
              className="group border-b border-border py-8 flex flex-col md:flex-row md:items-center justify-between gap-4 hover:bg-white/[0.02] transition-colors duration-300 px-4 -mx-4"
            >
              <div className="flex flex-col gap-1">
                <span className="text-[10px] text-accent font-bold tracking-[0.2em] uppercase">
                  {cert.issuer}
                </span>
                <h3 className="text-lg md:text-xl font-medium tracking-tight group-hover:translate-x-2 transition-transform duration-300">
                  {cert.name}
                </h3>
              </div>
              <div className="flex items-center gap-8 justify-between md:justify-end">
                <span className="text-xs font-bold tracking-[0.2em] uppercase text-text-secondary">
                  {cert.date}
                </span>
                <a 
                  href={cert.link} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="w-10 h-10 border border-border flex items-center justify-center rounded-full group-hover:border-accent group-hover:bg-accent group-hover:text-white transition-all duration-300"
                >
                  <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M7 17L17 7M17 7H7M17 7V17" />
                  </svg>
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
