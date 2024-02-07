import { useEffect } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import JoinUs from "./sections/JoinUs";
import "./services/fetchData";
import Timeline from "./sections/Timeline";

function App() {
  useEffect(() => {}, []);

  return (
    <main>
      <Navbar />
      <section className="h-screen w-screen bg-[url('./assets/hero.png')] bg-cover bg-center bg-no-repeat"></section>
      <JoinUs />
      <Timeline />
    </main>
  );
}

export default App;
