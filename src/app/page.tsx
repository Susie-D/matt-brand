"use server"

import Navbar from "./components/Navbar";

async function Home() {
  "use server";
  return (
    <div className="app">
      <Navbar />
    </ div>
  );
}

export default Home;