import React from "react";
import FlowerIcon from "../components/Icons/FlowerIcon";

function JoinUs() {
  return (
    <section className="bg-secondary py-10 lg:py-20 text-5xl text-center">
      <p>Invite you</p>
      <span className="text-primary italic text-2xl">to</span>
      <p>join the celebration</p>
      <span className="text-primary italic text-2xl">of</span>
      <p>their marriage</p>
      <div className="flex justify-center">
        <FlowerIcon className="w-10 fill-primary" />
        <FlowerIcon className="w-10 fill-primary [transform:rotateY(180deg)]" />
      </div>
      <p>18th July 2022</p>
    </section>
  );
}

export default JoinUs;
