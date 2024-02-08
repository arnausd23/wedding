import React from "react";
import information from "../assets/information.jpg";

function Information() {
  return (
    <section className="p-10">
      <div
        className="w-full h-40 lg:h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${information})` }}
      />
      <div className="mt-12 grid gap-14 lg:gap-36 lg:grid-cols-3 max-w-7xl my-0 mx-auto">
        <div className="text-center">
          <p className="text-primary">01</p>
          <h3 className="uppercase font-bold mt-1">Location</h3>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            sed aliquam atque dolorem eligendi voluptate repudiandae sit
            asperiores consequatur. Eius, doloremque nisi saepe libero
            perferendis incidunt vero ut architecto totam.
          </p>
        </div>
        <div className="text-center">
          <p className="text-primary">02</p>
          <h3 className="uppercase font-bold mt-1">Location</h3>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            sed aliquam atque dolorem eligendi voluptate repudiandae sit
            asperiores consequatur. Eius, doloremque nisi saepe libero
            perferendis incidunt vero ut architecto totam.
          </p>
        </div>
        <div className="text-center">
          <p className="text-primary">03</p>
          <h3 className="uppercase font-bold mt-1">Location</h3>
          <p className="mt-4">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            sed aliquam atque dolorem eligendi voluptate repudiandae sit
            asperiores consequatur. Eius, doloremque nisi saepe libero
            perferendis incidunt vero ut architecto totam.
          </p>
        </div>
      </div>
    </section>
  );
}

export default Information;
