import { motion, AnimatePresence } from 'framer-motion';
import { useState } from 'react';
import gif1 from '../assets/gifs/broke.gif';
import gif2 from '../assets/gifs/chashwavy.gif';
import gif3 from '../assets/gifs/bueran.gif';

const projects = [
  {
    title: 'Rebroke',
    category: 'Meme Coin',
    description: 'Rebranded meme coin platform with community-driven tokenomics and engaging social presence.',
    image: gif1,
    link: 'https://rebroke-main.vercel.app/',
  },
  {
    title: 'Cashwavye',
    category: 'WEB3',
    description: 'Crypto payment dashboard enabling seamless transactions with real-time analytics and fast settlements.',
    image: gif2,
    link: 'https://cashwavy-three.vercel.app/',
  },
  {
    title: 'Bueran',
    category: 'Web3',
    description: 'DeFi protocol offering yield farming and staking with automated strategies and real-time analytics.',
    image: gif3,
    link: 'https://buearn-seven.vercel.app/',
  },
  {
    title: 'NFT One',
    category: 'NFTs',
    description: 'NFT marketplace platform for trading and collecting digital assets with seamless minting experience.',
    image: gif1,
    link: 'https://nft-one-beta.vercel.app/',
  },
  {
    title: 'Chunky Doges',
    category: 'Meme Coin',
    description: 'Playful meme coin project featuring adorable dog-themed NFTs and community events.',
    image: gif2,
    link: 'https://chunky-doges-beta.vercel.app/',
  },
  {
    title: 'Fatguess',
    category: 'Gaming',
    description: 'NFT prediction game where players compete on crypto market movements with custom tokenomics.',
    image: gif3,
    link: 'https://fatguess.vercel.app/',
  },
  {
    title: 'Pyjama',
    category: 'WEB3',
    description: 'Web3 platform combining creative branding with blockchain technology for unique digital experiences.',
    image: gif1,
    link: 'https://pyjama-12w.vercel.app/',
  },
  {
    title: 'Luna',
    category: 'Web3',
    description: 'Decentralized platform focused on innovative blockchain solutions and community growth.',
    image: gif2,
    link: 'https://lunaioio.vercel.app/',
  },
];

export default function SelectedWork() {
  const [showAll, setShowAll] = useState(false);
  const visibleProjects = showAll ? projects : projects.slice(0, 3);

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
          {visibleProjects.map((project, i) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 60 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.8, ease: [0.25, 0.46, 0.45, 0.94] }}
              className="group grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 items-start"
            >
              {/* Thumbnail */}
              <a 
                href={project.link} 
                target="_blank" 
                rel="noopener noreferrer"
                className="md:col-span-7 overflow-hidden rounded-sm bg-card aspect-[16/10] block"
              >
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover grayscale opacity-80 group-hover:opacity-100 group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                  loading="lazy"
                />
              </a>

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
                   <a 
                     href={project.link}
                     target="_blank"
                     rel="noopener noreferrer"
                     className="inline-flex items-center gap-4 text-[10px] font-bold tracking-[0.2em] uppercase cursor-pointer hover:gap-6 transition-all duration-300"
                   >
                     Explore Project
                     <div className="w-8 h-[1px] bg-accent" />
                   </a>
                </div>
              </div>
            </motion.div>
          ))}

          {!showAll && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center pt-8"
            >
              <button
                onClick={() => setShowAll(true)}
                className="group flex items-center gap-4 text-[10px] font-bold tracking-[0.3em] uppercase cursor-pointer hover:gap-6 transition-all duration-300"
              >
                <span>Show More</span>
                <div className="w-12 h-[1px] bg-accent group-hover:w-24 transition-all duration-500" />
              </button>
            </motion.div>
          )}

          {showAll && (
            <motion.div
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="flex justify-center pt-8"
            >
              <button
                onClick={() => setShowAll(false)}
                className="group flex items-center gap-4 text-[10px] font-bold tracking-[0.3em] uppercase cursor-pointer hover:gap-6 transition-all duration-300"
              >
                <span>Show Less</span>
                <div className="w-12 h-[1px] bg-accent group-hover:w-24 transition-all duration-500" />
              </button>
            </motion.div>
          )}
        </div>
      </div>
    </section>
  );
}
