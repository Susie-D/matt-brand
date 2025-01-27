"use server"

import Navbar from "./components/Navbar";

async function Home() {
  return (
    <div className="app">
      <Navbar />
      <video autoPlay={false} muted={true} loop width="100%" height="600">
        <source src="downtown.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="bg-secondary h-[200px] content-center justify-items-center text-white">
        <h2 className="text-2xl italic font-bold">Driving Cloud Projects Forward with Excellence and Strategy</h2>
      </div>
      {/* Intro */}
      <div className="bg-white h-[400px]">
        <div>
          <h3>{`Hey, I'm Matt`}</h3>
          <h4>{`As a Project Manager with strong technical expertise, I lead cloud projects to from start to finish.`}</h4>
        </div>
      </div>
      {/* Banner */}
      <div className="bg-secondary h-[200px] w-full content-center justify-items-center text-black">
        {/* First */}
        <div>
          <div>
            Icon 1
          </div>
          <div>
            Title
          </div>
          <div>
            SubTitle
          </div>
        </div>
        {/* Second */}
        <div>
          <div>
            Icon 2
          </div>
          <div>
            Title
          </div>
          <div>
            SubTitle
          </div>
        </div>
        {/* Third */}
        <div>
          <div>
            Icon 3
          </div>
          <div>
            Title
          </div>
          <div>
            SubTitle
          </div>
        </div>
      </div>
    </ div>
  );
}

export default Home;