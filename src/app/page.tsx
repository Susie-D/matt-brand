import CaseStudies from "./components/CaseStudies";
import Home from "./components/Home";
import Navbar from "./components/Navbar";

async function Page() {
  return (
    <div className="app">
      <Navbar />
      <video muted loop width="100%" height="600">
        <source src="downtown.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="bg-secondary h-[200px] flex items-center justify-center px-5 text-white">
        <h2 className="text-4xl italic text-center font-bold">
          Driving Cloud Projects Forward with Excellence and Strategy
        </h2>
      </div>
      <Home />
      {/* Banner */}
      <CaseStudies />
    </div>
  );
}

export default Page; 