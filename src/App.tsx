import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import JoinUs from "./sections/JoinUs";
import "./services/fetchData";
import Timeline from "./sections/Timeline";
import Timer from "./sections/Timer";
import fetchHome from "./services/fetchHome";

function App() {
  const [image, setImage] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchHome();

      const timeline = response.results.map((event: any) => {
        const { image } = event.properties;
        return {
          image: image.files[0].external.url,
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
    </main>
  );
}

export default App;
