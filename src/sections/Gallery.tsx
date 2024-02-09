import React from "react";
import Button from "../components/Button";
import googleDriveIcon from "../assets/google-drive.png";

function Gallery() {
  return (
    <section id="gallery" className="relative">
      <section className="relative grid grid-cols-2 lg:grid-cols-3">
        <img
          src="https://images.unsplash.com/photo-1511285560929-80b456fea0bc?q=80&w=3538&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1527529482837-4698179dc6ce?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1595407753234-0882f1e77954?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mzh8fHdlZGRpbmd8ZW58MHwwfDB8fHwy"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1623788452350-4c8596ff40bb?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1519691548119-14735e4a11c8?w=800&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NjB8fHdlZGRpbmclMjBkaW5uZXJ8ZW58MHwwfDB8fHwy"
          alt=""
        />
        <img
          src="https://images.unsplash.com/photo-1625038032515-308ab14d10b9?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
        <div className="absolute top-0 bottom-0 left-0 right-0 bg-black opacity-65" />
        <div className="absolute top-1/2 -translate-y-1/2 lg:left-1/2 lg:center-absolute text-center p-12">
          <h2 className="text-xl lg:text-3xl text-white">
            Don't forget to take a lot of pictures during the ceremony and share
            them all into this link!
          </h2>
          <Button
            className="mt-8 lg:mt-12 px-5 lg:px-12"
            text="Add your photos"
            link=""
          >
            <img
              className="w-8 inline mr-4"
              src={googleDriveIcon}
              alt="Google Drive icon"
            />
          </Button>
        </div>
      </section>
    </section>
  );
}

export default Gallery;
