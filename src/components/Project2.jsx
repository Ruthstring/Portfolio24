import React from "react";
import GitHub_logo from "../assets/github_logo.png"
import Link_logo from "../assets/Link_logo.png"
import Img1 from "../assets/mobil_project1.png"
import Img2 from "../assets/map_project1.png"

const Project2 = () => {
    return (
      <>
        <div className="section-container flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 p-6 h-screen">
          {/* Text Column */}
          <div className="project-text">
            <h1 className="text-3xl font-bold mb-4 text-left">Donut e-commmerce</h1>
  
            <div className="flex flex-col space-y-2 text-left">
              <p>
              Online store so...Get the menu, search by cathegory. Register and get your cart with personlaized recommendations.
              </p>
              <br />
              <div className="app-features text-left">
                <p className="font-bold"> • Full-stack app</p>
                <p> • noSql Database. MongoDB</p>
                <p> •  Redux</p>
                <p> • JWT Token authentification</p>
                <p> •  ...</p>
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
  
          {/* Media Column */}
          <div className="project-media relative flex justify-center items-center">
            
          </div>
        </div>
      </>
    );
  };
  
  export default Project2;

