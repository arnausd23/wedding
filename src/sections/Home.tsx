import React, { useState, useEffect } from "react";
import fetchHome from "../services/fetchHome";
import bgImage from "../assets/bg.png";
import leaf from "../assets/b-leaf.png";

function Home() {
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
    <section className="lg:mt-24 h-screen w-screen flex flex-col lg:grid lg:grid-cols-2">
      <img
        className="align-top h-full"
        src={image}
        alt="wedding couple image"
      />
      <div className="bg-green h-full lg:relative max-lg:-order-1 ">
        <div className="lg:absolute lg:top-1/2 lg:left-1/2 lg:center-absolute text-center text-white border-2 border-yellow-500 lg:p-10 relative">
          <div className="border-2 border-yellow-500 rotate-12 absolute top-0 left-0 right-0 bottom-0" />
          <h3 className="text-4xl uppercase leading-relaxed">
            Welcome and join us to celebrate
          </h3>
          <h2 className="text-5xl my-6 uppercase">
            Arnau <span className="text-yellow-500 text-2xl block">&</span>{" "}
            Diana
          </h2>
          <h3 className="text-4xl uppercase leading-relaxed">
            wedding on that special day
          </h3>
          <img
            className="w-28 mt-14 mb-0 mx-auto absolute -top-14 -left-6"
            src={leaf}
            alt="Decoration leaf"
          />
          <img
            className="w-28 mt-14 mb-0 mx-auto absolute -bottom-10 -right-6 rotate-180"
            src={leaf}
            alt="Decoration leaf"
          />
        </div>
      </div>
    </section>
  );
}

export default Home;
