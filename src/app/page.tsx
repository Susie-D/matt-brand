import { images } from '@/shared/images';
import '../app/globals.css';
import CaseStudies from "./components/CaseStudies";
import EmblaCarousel from "./components/EmlaCarousel";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Testimonials from './components/Testimonials';

async function Page() {
  return (
    <div className="app">
      <Navbar />
      <video id="video" muted loop>
        <source src="downtown.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="bg-secondary h-[200px] flex items-center justify-center text-white">
        <h2 className="text-4xl italic text-center font-bold">
          Driving Cloud Projects Forward with Excellence and Strategy
        </h2>
      </div>
      <Home />
      {/* Banner */}
      <CaseStudies />
      <EmblaCarousel images={images} options={{ loop: true }} />
      <Testimonials />
    </div >
  );
}

export default Page; 