import React from "react";
import information from "../assets/information.jpg";
import InformationColumn from "../components/InformationColumn";

function Information() {
  return (
    <section className="p-10">
      <div
        className="w-full h-40 lg:h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${information})` }}
      />
      <div className="mt-12 grid gap-14 lg:gap-36 lg:grid-cols-3 max-w-7xl my-0 mx-auto">
        <InformationColumn />
        <InformationColumn />
        <InformationColumn />
      </div>
    </section>
  );
}

export default Information;
