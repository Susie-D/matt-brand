import Image from "next/image";
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
        <h2 className="text-2xl italic text-center font-bold">
          Driving Cloud Projects Forward with Excellence and Strategy
        </h2>
      </div>
      <Home />
      {/* Banner */}
      <section className="bg-secondary h-[200px] w-full flex justify-center text-black">
        <div className="flex content-center justify-center gap-20">
          {/* First */}
          <div className="flex flex-col content-center justify-center items-center m-10">
            <Image width={80} height={80} src="./consulting.svg" alt="matt's photo" />
            <h4 className="font-bold">Consulting 11+ Years</h4>
            <p className="text-center">Work at dozens of corporate clients and international exposure.</p>
          </div>
          {/* Second */}
          <div className="flex flex-col content-center justify-center items-center m-10">
            <Image width={80} height={80} src="./buildings.svg" alt="matt's photo" />
            <h4 className="font-bold">Fortune 500 Exposure</h4>
            <p className="text-center">Effective in some of the highest stakes and chaotic environments.</p>
          </div>
          {/* Third */}
          <div className="flex flex-col content-center justify-center items-center m-10">
            <Image width={70} height={65} src="./ribbon.svg" alt="matt's photo" />
            <h4 className="font-bold">Proven Track Record</h4>
            <p className="text-center">
              Careers at Deloitte (13) and Slalom Consulting (17) <br />
              *Fortune Top Workplaces
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Page; 