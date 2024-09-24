import React, { useState, useEffect } from "react";
import GitHub_logo from "../assets/github_logo.png"
import Link_logo from "../assets/Link_logo.png"
import Img1 from "../assets/mobil_project1.png"
import Img2 from "../assets/map_project1.png"


const Project1 = () => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Renders the layout for small screens
  const renderSmallScreenLayout = () => (
    <div className="flex flex-col items-center p-6">
      <div className="project-text">
        <h1 className="text-3xl font-bold mb-4 text-left">LoveTravel App</h1>

        <div className="flex flex-col space-y-2 text-left">
          <p>
            Search your countries. Save your pictures. Create and print your
            personalized World map.
          </p>
          <br />
          <div className="app-features text-left">
            <p className="font-bold"> • Full-stack app</p>
            <p> • SQL Database</p>
            <p> • RESTFUL API</p>
            <p> • PDF Generator</p>
            <p> • SVG</p>
            <br />
          </div>
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
              className="max-w-[50px] max-h-[50px] hover:shadow-custom-pink hover:rounded-full hover:scale-110"
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

      {/* Image Layout for Small Screens */}
      <div className="relative w-full flex flex-col items-center">
        <img
          src={Img2}
          alt="Image Map"
          className="w-[100%] mt-8 -mb-16 h-auto transform translate-y-2"
        />
        <img
          src={Img1}
          alt="Image Mobile"
          className="w-[70%] h-auto -mt-28 transform translate-x-20"
        />
      </div>
    </div>
  );

  // Renders the layout for MEDIUM SCREEN
  const renderMediumScreenLayout = () => (
    <div className="flex flex-col items-center p-6">
      <div className="project-text">
        <h1 className="text-3xl font-bold mb-4 text-left">LoveTravel App</h1>

        <div className="flex flex-col text-left">
         
          <br />
          <div className="column-left-medium flex p-3">
          <div className="w-1/2">
          <p>
            Search your countries. Save your pictures. Create and print your
            personalized World map.
          </p>
           
            <div className="app-features text-left ">
              <p className="font-bold"> • Full-stack app</p>
              <p> • SQL Database</p>
              <p> • RESTFUL API</p>
              <p> • PDF Generator</p>
              <p> • SVG</p>
              <br />
            </div>
        

        {/* Logos/Links Section */}
        <div className="logos-container mt-4 flex ">
          <a
            href="https://github.com/Ruthstring"
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={GitHub_logo}
              className="max-w-[50px] max-h-[50px] hover:shadow-custom-pink hover:rounded-full hover:scale-110"
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
 {/* Image Layout for Medium Screens */}
 <div className="flex flex-col  mr-4 w-2/3">
      <div className="xl:flex">
        <img
          src={Img2}
          alt="Image Map"
          className="relativew-[80%] -mb-28 transform z-10 "
        />
        <img
          src={Img1}
          alt="Image Mobile"
          className=" w-[60%] -mt-28 transform translate-x-60 -translate-y-14 z-30"
        />
        </div>
      </div>
      </div>
      </div>


      </div>

     
   
    </div>
  );

  // Renders the layout for large screens
  const renderLargeScreenLayout = () => (
    <>
    <div className="section-container flex flex-col md:flex-row  justify-between space-y-6 md:space-y-0 lg:mt-14  ">
    <div className="project-text">
      <h1 className="text-6xl font-bold mb-4 text-left lg:ml-4">LoveTravel App</h1>
      
      
        

        <div className="flex flex-col space-y-2 text-left lg:ml-4 ">
          <p>
            Search your countries. Save your pictures. Create and print your
            personalized World map.
          </p>
          <br />
          <div className="app-features text-left">
            <p className="font-bold"> • Full-stack app</p>
            <p> • SQL Database</p>
            <p> • RESTFUL API</p>
            <p> • PDF Generator</p>
            <p> • SVG</p>
            <br />
          </div>
        </div>

        <div className="logos-container mt-4 flex space-x-4 lg:ml-4 ">
          <a
            href="https://github.com/Ruthstring"
            className="text-blue-500 underline"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src={GitHub_logo}
              className="max-w-[50px] max-h-[50px] hover:shadow-custom-pink hover:rounded-full hover:scale-110"
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
      

      {/* Image Layout for Large Screens */}
      <div className="project-media md:relative flex flex-col md:flex-row  md:justify-center items-center lg:mr-4">
        <div className="relative w-full h-full">
          <img
            src={Img2}
            alt="Image Map"
            className="project-img shadow-md md:absolute  bottom-6 right-0 md:w-[90%] h-auto transform translate-x-10 -translate-y-10 transition-transform duration-700 ease-in-out z-0"
          />
          <img
            src={Img1}
            alt="Image Mobile"
            className="project-img md:relative top-20 left-0 md:w-[50%] h-auto transform -translate-x-10 -translate-y-0 transition-transform duration-700 ease-in-out z-10"
          />
        </div>
      </div>
    </div>
    </>
  );

  // Decides which layout to render based on screen width
  if (windowWidth < 768) {
    return renderSmallScreenLayout();
  } else if (windowWidth >= 768 && windowWidth < 1024) {
    return renderMediumScreenLayout();
  } else {
    return renderLargeScreenLayout();
  }
};


export default Project1;
