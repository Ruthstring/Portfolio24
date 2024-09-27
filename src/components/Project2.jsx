import React, { useState } from "react";
import GitHub_logo from "../assets/github_logo.png"
import Link_logo from "../assets/Link_logo.png"
import Img2 from "../assets/mobil_proj2.svg"
import Img1 from "../assets/laptop_proj2.svg"
import Img3 from "../assets/tablet_proj2.svg"


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
    <div className="section-container flex flex-col md:flex-row space-y-10  md:space-y-0 lg:mt-30 ">
      
      {/* Empty Column for 2XL Screens */}
      <div className="hidden 2xl:block 2xl:w-1/6"></div>

      {/* Text Section */}
      <div className="project-text w-full md:w-1/3 2xl:w-[40%] h-auto 2xl:pt-28 xl:pt-12">
        <h1 className="lg:absolute text-3xl 2xl:text-6xl font-bold mb-4 text-left lg:ml-4 ">
          Donut e-commerce
        </h1>

        <div className="flex flex-col space-y-2 text-left lg:ml-4">
          <div className="lg:mt-20">
            <p className="2xl:text-2xl">
              Online store so...Get the menu, search by category.<br/> Register and
              get your cart with personalized recommendations.
            </p>
          </div>
          <br />
          <div className="app-features text-left 2xl:text-2xl">
            <p className="font-bold 2xl:text-2xl"> • Full-stack app</p>
            <p className="2xl:text-2xl"> • noSql Database. MongoDB</p>
            <p className="2xl:text-2xl"> • Redux</p>
            <p className="2xl:text-2xl"> • JWT Token authentication</p>
            <p className="2xl:text-2xl"> • ...</p>
            <br />
          </div>
        </div>

        {/* Logos Section */}
        <div className="logos-container mt-4 flex space-x-4 lg:ml-4">
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
              className="max-w-[50px] max-h-[50px] 2xl:w-[70px] hover:shadow-custom-blue hover:rounded-full hover:scale-110"
              alt="Link Logo"
            />
          </a>
        </div>
      </div>

      {/* Slider Section */}
      <div className="project-media pt-20 md:pt-0 md:w-2/3 lg:w-4/5 2xl:w-[55%] md:pl-20 lg:pl-48 flex justify-center items-center 2xl:items-start relative md:h-[100vh] xl:h-[100vh] 2xl:h-[60vh]">
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
              className={`absolute 2xl:-ml-128 lg:-mt-96 xl:mt-2 transition-transform transform duration-1000 ease-in-out
                 ${isActive ? "scale-110 z-30" : "opacity-50"}
                 ${isLeft ? "translate-x-[-100px] md:translate-x-[-120px] lg:translate-x-[-200px] xl:translate-x-[-220px] 2xl:translate-x-[-350px] z-20" : ""}
                 ${isRight ? "translate-x-[100px] md:translate-x-[120px] lg:translate-x-[200px] xl:translate-x-[220px] 2xl:translate-x-[350px] z-20" : ""}
              `}
              style={{
                width: isActive ? "50%" : "40%",
                maxHeight: "80vh", 
                cursor: "pointer",
                objectFit: "cover",
              }}
              onMouseEnter={() => handleHover(index)}
            />
          );
        })}
      </div>
       {/* Bottom Margin on SM to Prevent Overlap */}
       <div className="md:hidden w-full h-20 md:h-32 lg:h-48"></div>
    </div>
  );
};

export default Project2;


