import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import JoinUs from "./sections/JoinUs";
import "./services/fetchData";
import Timeline from "./sections/Timeline";
import Timer from "./sections/Timer";
import fetchHome from "./services/fetchHome";
import Information from "./sections/Information";
import Gallery from "./sections/Gallery";
import Contact from "./sections/Contact";

function App() {
  const [image, setImage] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchHome();

      const timeline = response.results.map((event: any) => {
        const { image } = event.properties;
        return {
          image: image.files[0].file.url,
        };
      });
      setImage(timeline[0].image);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <main>
      <Navbar />
      <section
        className="h-screen w-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      />
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
