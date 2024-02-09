import React from "react";
import Button from "./Button";

function InformationColumn() {
  return (
    <div className="text-center">
      <span className="text-primary text-2xl">01</span>
      <h3 className="uppercase font-bold mt-1 lg:mt-2 text-3xl">Location</h3>
      <p className="mt-4 lg:mt-6">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci sed
        aliquam atque dolorem eligendi voluptate repudiandae sit asperiores
        consequatur. Eius, doloremque nisi saepe libero perferendis incidunt
        vero ut architecto totam.
      </p>
      <Button className="my-8 lg:mt-14 lg:mb-0" text="Read More" link="" />
    </div>
  );
}

export default InformationColumn;
