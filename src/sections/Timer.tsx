import React, { useEffect, useState } from "react";
import leaf from "../assets/b-leaf.png";
import rings from "../assets/rings.png";
import fetchWeddingDate from "../services/fetchWeddingDate";

function Timer() {
  const [date, setDate] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchWeddingDate();

      const date = response.results.map((event: any) => {
        const { date } = event.properties;
        return {
          date: date.date.start,
        };
      });

      const formattedDate = new Date(date[0].date);
      const parsedDate = {
        days: formattedDate.getDay(),
        hours: formattedDate.getHours(),
        minutes: formattedDate.getMinutes(),
        seconds: formattedDate.getSeconds(),
      };

      setDate(parsedDate);
    };
    fetchData().catch(console.error);
  }, []);

  return (
    <section id="timer" className="bg-secondary py-10 px-5 lg:py-20">
      <div className="lg:hidden flex items-baseline justify-center gap-4 mb-8">
        <img className="w-16 -scale-y-100" src={leaf} alt="Decoration leaf" />
        <img className="w-14" src={rings} alt="Decoration rings" />
        <img className="w-16 rotate-180" src={leaf} alt="Decoration leaf" />
      </div>
      {date && (
        <div className="relative grid grid-cols-4 items-center justify-center max-w-2xl my-0 mx-auto">
          <div className="text-center">
            <span className="text-primary mb-4 inline-block lg:text-xl">
              Days
            </span>
            <p className="text-5xl">{date.days}</p>
          </div>
          <div className="text-center">
            <span className="text-primary mb-4 inline-block lg:text-xl">
              Hours
            </span>
            <p className="text-5xl">{date.hours}</p>
          </div>
          <div className="text-center">
            <span className="text-primary mb-4 inline-block lg:text-xl">
              Minutes
            </span>
            <p className="text-5xl">{date.minutes}</p>
          </div>
          <div className="text-center">
            <span className="text-primary mb-4 inline-block lg:text-xl">
              Seconds
            </span>
            <p className="text-5xl">{date.seconds}</p>
          </div>
          <img
            className="absolute hidden lg:block w-16 -top-6 -left-14 -scale-y-100"
            src={leaf}
            alt="Decoration leaf"
          />
          <img
            className="absolute hidden lg:block w-16 -top-6 -right-14 rotate-180"
            src={leaf}
            alt="Decoration leaf"
          />
        </div>
      )}
    </section>
  );
}

export default Timer;
