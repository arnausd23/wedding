import React from "react";
import Button from "../components/Button";

function Contact() {
  return (
    <section id="contact" className="relative py-10 px-5 lg:py-20 bg-secondary">
      <form className="relative z-10 bg-white py-14 lg:py-20 px-6 lg:px-10 lg:w-1/2 lg:my-0 lg:mx-auto rounded-lg shadow-2xl">
        <fieldset className="flex flex-col mb-10">
          <label className="mb-2">Add you full name:</label>
          <input
            className="bg-[#f6f6f6] rounded-md p-2 focus-visible:outline-[#eaeaea]"
            type="text"
          />
        </fieldset>
        <fieldset className="flex flex-col mb-10">
          <label className="mb-2">Choose a menu option:</label>
          <select
            defaultValue="default"
            className="cursor-pointer bg-[#f6f6f6] rounded-md p-2 focus-visible:outline-[#eaeaea]"
          >
            <option disabled value="default">
              -- select an option --
            </option>
            <option value="menu1">Menu 1</option>
            <option value="menu2">Menu 2</option>
          </select>
        </fieldset>
        <fieldset className="flex flex-col mb-10">
          <label className="mb-2">Additional comments:</label>
          <input
            className="bg-[#f6f6f6] rounded-md p-2 focus-visible:outline-[#eaeaea]"
            type="text"
          />
        </fieldset>

        <Button
          className="text-center w-full md:w-auto"
          text="Confirm"
          onClick={() => console.log("aa")}
        />
      </form>
    </section>
  );
}

export default Contact;
