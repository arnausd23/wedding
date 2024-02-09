import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import JoinUs from "./sections/JoinUs";
import "./services/fetchData";
import Timeline from "./sections/Timeline";
import Timer from "./sections/Timer";
import Information from "./sections/Information";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";
import Home from "./sections/Home";

function App() {
  return (
    <main>
      <Navbar />
      <Home />
      <JoinUs />
      <Timeline />
      <Timer />
      <Information />
      <Contact />
      <Gallery />
    </main>
  );
}

export default App;
