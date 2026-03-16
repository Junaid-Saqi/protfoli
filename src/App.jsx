import CustomCursor from './components/CustomCursor';
import Hero from './components/Hero';
import HorizontalScrollText from './components/HorizontalScrollText';
import About from './components/About';
import Skills from './components/Skills';
import Services from './components/Services';
import SpotlightReveal from './components/SpotlightReveal';
import SelectedWork from './components/SelectedWork';
import Experience from './components/Experience';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Preloader from './components/Preloader';
import { useRef } from 'react';

import spotlightImg from './assets/spotlight.png';

export default function App() {
  const mainContentRef = useRef(null);

  return (
    <>
      <CustomCursor />
      <Preloader mainContentRef={mainContentRef} />
      <div ref={mainContentRef} className="origin-center w-full min-h-screen">
        <main>
          <Hero />
          <HorizontalScrollText />
          <About />
          <Skills />
          <Services />
          <SpotlightReveal image={spotlightImg} />
          <SelectedWork />
          <Experience />
          <Testimonials />
          <Contact />
        </main>
        <Footer />
      </div>
    </>
  );
}
