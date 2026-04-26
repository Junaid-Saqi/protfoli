import { motion } from 'framer-motion';
import { useState, useEffect } from 'react';
import cashwavy from '../assets/screenshots/cashwavye.png';
import cashwavyLong from '../assets/screenshots/cashwvye.png';
import luna from '../assets/screenshots/lunaloto.png';
import cityscape from '../assets/screenshots/cityscape.png';
import chunkyDoge from '../assets/screenshots/chunky-doge.png';
import fatguess from '../assets/screenshots/fatguess.png';
import lunaSite from '../assets/screenshots/lunaloto-site.png';
import cityscapeSite from '../assets/screenshots/cityscape-site.png';
import chunkyDogeSite from '../assets/screenshots/chunky-doges-site.png';
import fatguessSite from '../assets/screenshots/fatguess-site.png';
import blast from '../assets/screenshots/blast.png';
import blastSite from '../assets/screenshots/blast-wheel-racers.png';

const projects = [
  {
    title: 'Blast Wheel Racers',
    category: 'Web3 / Gaming',
    description: 'A high-octane, decentralized racing experience featuring unique digital assets and competitive multiplayer mechanics.',
    image: blast,
    siteImage: blastSite,
    link: 'https://blast-wheel-racers.vercel.app/',
  },
  {
    title: 'Cashwavy',
    category: 'Web3',
    description: 'A crypto payment platform enabling seamless transactions and transfers. Built with focus on user experience and fast settlement times.',
    image: cashwavy,
    siteImage: cashwavyLong,
    link: 'https://cashwavy-three.vercel.app/',
  },
  {
    title: 'Luna',
    category: 'Web3',
    description: 'A decentralized finance protocol offering yield farming and staking opportunities. Features automated strategies and real-time analytics.',
    image: luna,
    siteImage: lunaSite,
    link: 'https://lunaioio.vercel.app',
  },
  {
    title: 'CityScape',
    category: 'Web3',
    description: 'A community-driven meme coin project with playful branding and viral marketing campaigns across social platforms.',
    image: cityscape,
    siteImage: cityscapeSite,
    link: 'https://nft-one-beta.vercel.app',
  },
  {
    title: 'Chunky Doges',
    category: 'Meme Coin',
    description: 'A community-driven meme coin project with playful branding and viral marketing campaigns across social platforms.',
    image: chunkyDoge,
    siteImage: chunkyDogeSite,
    link: 'https://chunky-doges-beta.vercel.app',
  },
  {
    title: 'FatGuess',
    category: 'Web3 Market Place',
    description: 'A decentralized finance protocol offering yield farming and staking opportunities. Features automated strategies and real-time analytics.',
    image: fatguess,
    siteImage: fatguessSite,
    link: 'https://fatguess.vercel.app',
  },
];

export default function SelectedWork() {
  const [showAll, setShowAll] = useState(false);
  const [previewImage, setPreviewImage] = useState(null);
  const displayedProjects = showAll ? projects : projects.slice(0, 3);

  useEffect(() => {
    if (previewImage) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [previewImage]);

  return (
    <>
    {previewImage && (
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="fixed inset-0 z-[100] bg-black/95 flex items-center justify-center p-4 md:p-8"
        onClick={() => setPreviewImage(null)}
      >
        <button
          className="absolute top-6 right-6 text-white text-3xl hover:text-accent transition-colors"
          onClick={() => setPreviewImage(null)}
        >
          &times;
        </button>
        <motion.img
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          src={previewImage}
          alt="Preview"
          className="max-w-full max-h-full object-contain rounded-sm"
          onClick={(e) => e.stopPropagation()}
        />
      </motion.div>
    )}

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
          {displayedProjects.map((project, index) => (
            <motion.div  
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              whileHover={{ y: -10 }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start"
            >
              {/* Thumbnail */}
              <motion.div 
                className="md:col-span-7 overflow-hidden rounded-sm bg-card aspect-[16/10] relative"
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.4 }}
              >
                <div className="absolute inset-0 border border-transparent group-hover:border-accent/50 z-10 rounded-sm transition-all duration-500" />
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-110"
                  loading="lazy"
                />
                <motion.div 
                  className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                  initial={{ opacity: 0 }}
                />
              </motion.div>

              {/* Info */}
              <motion.div 
                className="md:col-span-5 pt-2 px-2 py-2"
                initial={{ x: index % 2 === 0 ? 30 : -30, opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.6 }}
              >
                <motion.span 
                  className="text-[10px] font-bold tracking-[0.2em] uppercase text-text-secondary block"
                  whileHover={{ color: '#ef4444', x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.category}
                </motion.span>
                <motion.h3 
                  className="mt-4 text-xl md:text-2xl font-semibold tracking-tight uppercase"
                  whileHover={{ x: 5 }}
                  transition={{ duration: 0.3 }}
                >
                  {project.title}
                </motion.h3>
                <p className="mt-4 text-text-secondary text-sm leading-relaxed">
                  {project.description}
                </p>
                <div className="mt-8 flex items-center gap-8">
                  <motion.a 
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-4 text-[10px] font-bold tracking-[0.2em] uppercase cursor-pointer hover:gap-6 transition-all duration-300 px-2 py-2"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Explore Project
                    <div className="w-8 h-[1px] bg-accent" />
                  </motion.a>
                  <motion.button
                    onClick={() => setPreviewImage(project.siteImage)}
                    className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] uppercase cursor-pointer hover:text-accent transition-colors duration-300 px-2 py-2"
                    whileHover={{ x: 5 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    Preview
                  </motion.button>
                </div>
              </motion.div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="mt-16 md:mt-24 flex justify-center"
        >
          <button 
            onClick={() => setShowAll(!showAll)}
            className="group px-8 py-4 border border-accent/30 hover:border-accent hover:bg-accent/5 transition-all duration-500"
          >
            <span className="text-xs font-bold tracking-[0.2em] uppercase text-text-secondary group-hover:text-accent transition-colors duration-300">
              {showAll ? 'Show Less' : 'Show More'}
            </span>
          </button>
        </motion.div>
      </div>
    </section>
    </>
  );
}
