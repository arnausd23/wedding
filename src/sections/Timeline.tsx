import React, { useEffect, useState } from "react";
import preparation from "../assets/preparation.jpg";
import fetchTimeline from "../services/fetchData";

export interface Timeline {
  schedule: string;
  title: string;
  description: string;
  image: string;
}

function Timeline() {
  const [timeline, setTimeline] = useState<Timeline[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchTimeline();
      const timeline = response.results.map((event: Timeline[]) => {
        const { description, image, schedule, title } = event.properties;
        return {
          schedule: schedule.rich_text[0].plain_text,
          title: title.rich_text[0].plain_text,
          description: description.rich_text[0].plain_text,
          image: image.files[0].file.url,
        };
      });

      setTimeline(timeline);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <section className="flex flex-col lg:w-[70%] my-0 mx-auto">
      {/* <section className="grid grid-cols-2 lg:w-[70%] my-0 mx-auto"> */}
      {timeline.map((event: Timeline, index: number) => {
        const { description, image, schedule, title } = event;

        return (
          <div className="grid grid-cols-3 items-center justify-items-center">
            <img
              src={image}
              alt={`${title} wedding`}
              className={
                "w-32 h-32 rounded-full " + (index % 2 == 0 ? "" : " order-3")
              }
            />
            <div className="border-l-2 border-dashed border-primary my-0 mx-auto h-full relative after:content-[''] after:bg-primary after:rounded-full after:h-3 after:w-3 after:absolute after:-left-[0.438rem]"></div>
            <div className={index % 2 == 0 ? "" : "-order-1"}>
              <p className="text-primary italic">{schedule}</p>
              <h3 className="font-bold">{title}</h3>
              <p>{description}</p>
            </div>
          </div>
        );
      })}

      {/* <div>
        <p className="text-primary italic">3pm - 5pm</p>
        <h3 className="font-bold">Preparation</h3>
        <p>
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iste, dolor.
          Quae nesciunt consequuntur ipsa quasi distinctio debitis eum illum,
          fuga, qui sed in obcaecati.
        </p>
      </div>
      <div className="border-l-2 border-dashed border-primary pl-8 mt-[2px]">
        <img
          src={preparation}
          alt="Preparation wedding"
          className="w-32 h-32 rounded-full justify-self-end mr-8"
        />
      </div> */}
    </section>
  );
}

export default Timeline;
