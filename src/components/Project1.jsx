import React from "react";
import GitHub_logo from "../assets/github_logo.png"
import Link_logo from "../assets/Link_logo.png"
import Img1 from "../assets/mobil_project1.png"
import Img2 from "../assets/map_project1.png"

const Project1 = () => {
  return (
    <>
      <div className="section-container flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 p-6 h-screen">
        {/* Text Column */}
        <div className="project-text">
          <h1 className="text-3xl font-bold mb-4 text-left">LoveTravel App</h1>
          
          <div className="flex flex-col space-y-2 text-left">
            <p>Search your countries. Save your pictures. Create and print your personalized World map.</p>
            <br/>
            <div className="app-features text-left">
            <p className="font-bold">Full-stack app</p>
            <p>SQL Database</p>
            <p>RESTFUL API</p>
            <p>PDF Generator</p>
            <p>SVG</p>
            <br/>
            </div>
          </div>

          {/* Logos/Links Section */}
          <div className="logos-container mt-4 flex space-x-4">
            <a href="https://github.com/Ruthstring" className="text-blue-500 underline" target="_blank">
            <img src={GitHub_logo} className="max-w-[50px] max-h-[50px]" alt="Logo" />
            </a>
            <a href="https://your-link.com" className="text-blue-500 underline" target="_blank">
            <img src={Link_logo} className="max-w-[50px] max-h-[50px]" alt="Logo" />
            </a>
          </div>
        </div>

        {/* Media Column */}
        <div className="project-media relative">
                {/* Image 2 - Background */}
                <img
                    src={Img2}
                    alt="Image Map"
                    className="absolute bottom-10 right-0 w-[80%] h-auto transform translate-x-10 -translate-y-10 z-0"
                />
                {/* Image 1 - Foreground */}
                <img
                    src={Img1}
                    alt="Image Mobile"
                    className="relative w-[60%] h-auto z-10 transform -translate-x-10 translate-y-10"
                />
                </div>


      </div>
    </>
  );
};

export default Project1;


