import React, { useState, useEffect } from "react";
import GitHub_logo from "../assets/github_logo.png"
import Link_logo from "../assets/Link_logo.png"
import Img1 from "../assets/mobil_project1.svg"
import Img2 from "../assets/map_project1.svg"

const Project1 = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="section-container">
      {/* Title */}
      <h1 className="text-6xl pb-10 md:pb-0 ">Projects</h1>

      <div className="flex flex-col md:flex-row items-center">

         {/* Empty Column for 2XL Screens */}
      <div className="hidden 2xl:block 2xl:w-1/6"></div> 

        {/* Project Text */}
        <div className="project-text w-full md:w-1/2  xl:w-1/2  2xl:w-[40%] pb-3 ">
          <h1 className="text-3xl  font-bold mb-4 text-left 2xl:text-6xl">LoveTravel App</h1>

          <div className="flex flex-col space-y-2 text-left">
            <p className="2xl:text-2xl">
              Search your countries. Save your pictures.<br/> Create and print your
              personalized World map.
            </p>
            <br />
            <div className="app-features text-left 2xl:text-2xl">
              <p className="font-bold 2xl:text-2xl"> • Full-stack app</p>
              <p className="2xl:text-2xl"> • SQL Database</p>
              <p  className="2xl:text-2xl" > • RESTFUL API</p>
              <p  className="2xl:text-2xl"  > • PDF Generator</p>
              <p  className="2xl:text-2xl"  > • SVG</p>
            </div>
            <br />
          </div>

          {/* Logos/Links Section */}
          <div className="logos-container mt-4 flex space-x-4">
            <a
              href="https://github.com/Ruthstring"
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={GitHub_logo}
                className="max-w-[50px] max-h-[50px] 2xl:w-[70px] hover:shadow-custom-pink hover:rounded-full hover:scale-110"
                alt="GitHub Logo"
              />
            </a>
            <a
              href="https://your-link.com"
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={Link_logo}
                className="max-w-[50px] max-h-[50px] hover:shadow-custom-blue hover:rounded-full hover:scale-110 "
                alt="Link Logo"
              />
            </a>
          </div>
        </div>

        {/* Image Section for Medium and Large Screens */}
        <div className="w-full md:w-1/2 mt-8 relative">
          <div className="relative w-full h-auto">
            {/* Map Image */}
            <img
              src={Img2}
              alt="Image Map"
              className=" w-[90%] md:w-[100%]  pr-3 z-10 relative transition-transform duration-500 ease-in-out hover:scale-110 hover:z-40"
            />
            {/* Phone Image */}
            <img
              src={Img1}
              alt="Image Mobile"
              className="absolute w-52 md:w-[60%] 2xl:w-[50%] -bottom-6 md:ml-10 left-60 md:-left-36 -ml-16 2xl:mt-8 lg:pb-28 2xl:pb-48 2xl:-left-96 transform z-20 transition-transform duration-500 ease-in-out hover:scale-125 hover:z-50"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Project1;

