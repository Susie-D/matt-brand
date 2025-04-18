import { images } from '@/shared/images';
import '../app/globals.css';
import AboutMe from './components/AboutMe';
import CaseStudies from "./components/CaseStudies";
import Contact from './components/Contact';
import EmblaCarousel from "./components/EmlaCarousel";
import Footer from './components/Footer';
import Home from "./components/Home";
import Location from './components/Location';
import Navbar from "./components/Navbar";
import Testimonials from './components/Testimonials';

async function Page() {
  return (
    <div className="app">
      <Navbar />
      <video
        id="video"
        autoPlay
        muted
        loop
        aria-label="A downtown scene video playing in the background"
        className="w-full h-auto"
      >
        <source src="downtown.mp4" type="video/mp4" />
        <source src="downtown.webm" type="video/webm" />
        <source src="downtown.ogv" type="video/ogv" />

        <p>Your browser does not support the video tag. Please upgrade your browser or view the video in a supported format.</p>

        <track kind="captions" label="English" srcLang="en" src="downtown-captions-en.vtt" default />
      </video>
      <div className="bg-gradient-to-r from-primary to-secondary min-h-[200px] flex items-center justify-center text-white py-10">
        <h2 className="text-2xl md:text-4xl italic text-center font-bold max-w-[90%] tracking-wide drop-shadow-lg md:drop-shadow-2xl text-shadow-xl text-glow">
          Driving Cloud Projects Forward with Excellence and Strategy
        </h2>
      </div>

      <Home />
      <CaseStudies />
      <EmblaCarousel images={images} duration={2000} options={{ loop: true }} />
      <Testimonials />
      <AboutMe />
      <Contact />
      <Location />
      <Footer />
    </div>
  );
}

export default Page; 