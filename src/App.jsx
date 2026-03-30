import CustomCursor from './components/CustomCursor';
import EnterScreen from './components/EnterScreen';
import Hero from './components/Hero';
import HorizontalScrollText from './components/HorizontalScrollText';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import SelectedWork from './components/SelectedWork';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import { useRef, useState, useEffect } from 'react';
import bgMusic from './bg-music/quietphase-calm-ambient-491577.mp3';

export default function App() {
  const mainContentRef = useRef(null);
  const audioRef = useRef(new Audio(bgMusic));
  const [hasEntered, setHasEntered] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    audioRef.current.loop = true;
    audioRef.current.volume = 0.5;
  }, []);

  const toggleMute = () => {
    const newMuted = !isMuted;
    setIsMuted(newMuted);
    audioRef.current.muted = newMuted;
  };

  const startAudio = () => {
    audioRef.current.play().catch(err => console.log("Audio playback failed:", err));
  };

  return (
    <>
      <CustomCursor />
      
      {!hasEntered && <EnterScreen onEnter={() => { startAudio(); setHasEntered(true); }} />}

      {hasEntered && (
        <>
          {/* Global Mute Toggle */}
          <button 
            onClick={toggleMute}
            className="fixed bottom-8 left-8 z-[90] p-4 bg-white/10 backdrop-blur-md rounded-full border border-white/20 text-white text-[10px] font-bold tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300 pointer-events-auto mix-blend-difference"
          >
            {isMuted ? 'Unmute' : 'Mute'}
          </button>

          <Preloader mainContentRef={mainContentRef} />
          <div ref={mainContentRef} className="origin-center w-full min-h-screen">
            <main>
              <Hero />
              <HorizontalScrollText />
              <About />
              <Skills />
              <Services />
              <SelectedWork />
              <Experience />
              <Testimonials />
              <Contact />
            </main>
            <Footer />
          </div>
        </>
      )}
    </>
  );
}
