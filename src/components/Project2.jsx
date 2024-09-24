import React, { useState } from "react";
import GitHub_logo from "../assets/github_logo.png"
import Link_logo from "../assets/Link_logo.png"
import Img2 from "../assets/mobil_proj2.png"
import Img1 from "../assets/laptop_proj2.png"
import Img3 from "../assets/tablet_proj2.png"


const Project2 = () => {
  const [activeIndex, setActiveIndex] = useState(1); // Track the center image index

  // Images array to manage the slider
  const images = [
    { src: Img1, alt: "Phone image" },
    { src: Img2, alt: "Laptop image" },
    { src: Img3, alt: "Tablet image" },
  ];

  // Function to handle hover and set the active image
  const handleHover = (index) => {
    setActiveIndex(index);
  };

  return (
    <div className="section-container flex flex-col md:flex-row justify-between space-y-6 md:space-y-0 lg:mt-40">
      {/* Text Section */}
      <div className="project-text w-full md:w-1/3">
        <h1 className="lg:absolute text-6xl font-bold mb-4 text-left lg:ml-4">Donut e-commerce</h1>

        <div className="flex flex-col space-y-10 text-left lg:ml-4  ">
          <div className="lg:mt-20">
          <p>
            Online store so...Get the menu, search by category. Register and get your cart with personalized recommendations.
          </p>
          </div>
          <br />
          <div className="app-features text-left">
            <p className="font-bold"> • Full-stack app</p>
            <p> • noSql Database. MongoDB</p>
            <p> • Redux</p>
            <p> • JWT Token authentication</p>
            <p> • ...</p>
            <br />
          </div>
        </div>

        {/* Logos Section */}
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

      {/* Slider Section */}
      <div className="project-media w-full md:w-2/3 lg:w-4/5 pt-20 md:pl-12 lg:pl-32 md:pl-20 lg:pl-48 flex justify-center items-center relative md:h-96">
        {/* Map through images and position them */}
        {images.map((image, index) => {
          const isActive = index === activeIndex;
          const isLeft = index === (activeIndex - 1 + images.length) % images.length;
          const isRight = index === (activeIndex + 1) % images.length;

          return (
            <img
              key={index}
              src={image.src}
              alt={image.alt}
              className={`absolute transition-transform transform duration-1000 ease-in-out
                ${isActive ? "scale-125 z-30 opacity-100" : "scale-85 opacity-50"}
                ${isLeft ? "translate-x-[-100px] md:translate-x-[-220px] z-20" : ""}
                ${isRight ? "translate-x-[100px] md:translate-x-[220px] z-20" : ""}
              `}
              style={{
                width: isActive ? "50%" : "40%",
                cursor: "pointer",
              }}
              onMouseEnter={() => handleHover(index)}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Project2;
