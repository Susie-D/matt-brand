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
      <div className="bg-secondary h-[200px] content-center justify-center px-5 text-white px-5">
        <h2 className="text-2xl italic text-center font-bold">Driving Cloud Projects Forward with Excellence and Strategy</h2>
      </div>
      {/* Intro */}
      <section id="home" className="bg-white h-[400px] mx-auto w-[80%] pt-24 pb-32">
        <div>
          <div className="md:w-4/5">
            <h3>{`Hey, I'm Matt`}</h3>
            <h4>{`As a Project Manager with strong technical expertise, I lead cloud projects to from start to finish.`}</h4>
            <button>{`Work with Me`}</button>
          </div>
          <div className="mt-5 justify-between gap-24 md:flex">
            <div className="mt-10 basis-3/5 md:mt-0">
              <img src="matt.svg" alt="matt's photo" />
            </div>
          </div>
        </div>
      </section>
      {/* Banner */}
      <section className="bg-secondary h-[200px] w-full content-center justify-items-center text-black">
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
      </section>
    </div>
  );
}

export default Home;