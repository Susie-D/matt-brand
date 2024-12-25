"use server"

import Navbar from "./components/Navbar";

async function Home() {
  "use server";
  return (
    <div className="app">
      <Navbar />
      <video autoPlay={false} muted={true} loop width="100%" height="600">
        <source src="downtown.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </ div>
  );
}

export default Home;