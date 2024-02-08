import React from "react";
import FlowerIcon from "../components/Icons/FlowerIcon";

function JoinUs() {
  return (
    <section className="bg-secondary p-10 lg:py-20 text-3xl lg:text-5xl text-center">
      <h3>
        Invite you
        <span className="text-primary italic text-xl lg:text-2xl block">
          to
        </span>
        join the celebration
        <span className="text-primary italic text-xl lg:text-2xl block">
          of
        </span>
        their marriage
        <div className="flex justify-around mb-5">
          <FlowerIcon className="w-10 fill-primary" />
          <FlowerIcon className="w-10 fill-primary [transform:rotateY(180deg)]" />
        </div>
        <p>18th July 2022</p>
      </h3>
    </section>
  );
}

export default JoinUs;
