import { useEffect, useState } from "react";
import information from "../assets/information.jpg";
import InformationColumn from "../components/InformationColumn";
import fetchInformation from "../services/fetchInformation";

function Information() {
  const [information, setInformation] = useState<any>({});

  useEffect(() => {
    const fetchData = async () => {
      const response = await fetchInformation();
      const unFormattedInformation = response.results.reduce(
        (accumulator: any, event: any) => {
          const { Name, column1, column2, column3 } = event.properties;
          return {
            ...accumulator,
            [Name.title[0].plain_text]: [
              column1.rich_text[0].plain_text,
              column2.rich_text[0].plain_text,
              column3.rich_text[0].plain_text,
            ],
          };
        },
        {}
      );
      setInformation(unFormattedInformation);
    };

    fetchData().catch(console.error);
  }, []);

  console.log(information);
  return (
    <section id="information" className="p-10">
      <div
        className="w-full h-40 lg:h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${information})` }}
      />
      <div className="mt-12 grid gap-14 lg:gap-36 lg:grid-cols-3 max-w-7xl my-0 mx-auto">
        {information.length > 0 && <p>lflflflfl</p>}
        {/* <InformationColumn
          number={1}
          title="Location"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci sed
        aliquam atque dolorem eligendi voluptate repudiandae sit asperiores
        consequatur. Eius, doloremque nisi saepe libero perferendis incidunt
        vero ut architecto totam."
        />
        <InformationColumn
          number={2}
          title="Hotels"
          text="Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci sed
        aliquam atque dolorem eligendi voluptate repudiandae sit asperiores
        consequatur. Eius, doloremque nisi saepe libero perferendis incidunt
        vero ut architecto totam."
        />
        <InformationColumn
          number={3}
          title="Contribution"
          text="IBAN: ES0621002611382885243152"
        /> */}
      </div>
    </section>
  );
}

export default Information;
