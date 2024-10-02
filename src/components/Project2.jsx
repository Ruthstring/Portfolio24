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
    <div className="section-container grid grid-cols-12 gap-y-10 mb-28">
      {/* Main Content Grid */}
      <div className="col-span-12 xl:col-span-12 md:col-start-1 grid grid-cols-12 grid-rows-[auto] gap-y-10">
        {/* Empty column for margins */}
        <div className="hidden 2xl:block 2xl:col-span-1"></div>

        {/* Text Section (first 4 columns on larger screens, full width on small screens) */}
        <div className="project-text col-span-12 md:col-span-6 lg:col-span-5 lg:ml-[2.5em] xl:mr-[2em] xl:pt-12 2xl:pt-28 row-start-1">
          <h1 className="text-3xl font-bold mb-4 text-left 2xl:text-6xl">Donut e-commerce</h1>

          <div className="flex flex-col text-left">
            <p className="md:text-sm xl:text-lg 2xl:text-2xl xl:leading-6 2xl:leading-8">
              This online store application allows users to browse the menu, search for items by category, and add products to their shopping cart. Upon registering, users can access their personalized cart with product recommendations tailored to their preferences.
            </p>
            <br />
            <div className="app-features text-left 2xl:text-2xl">
              <p className="md:text-sm font-bold xl:text-lg 2xl:text-2xl"> • Full-stack app</p>
              <p className="md:text-sm xl:text-lg 2xl:text-2xl"> • <span className="font-bold">noSql Database (MongoDB)</span> for scalable and flexible data storage</p>
              <p className="md:text-sm xl:text-lg 2xl:text-2xl"> • State management powered by <span className="font-bold">Redux</span> for efficient and responsive user interaction</p>
              <p className="md:text-sm xl:text-lg 2xl:text-2xl"> • <span className="font-bold">JWT</span> token-based authentication for secure user login and session management</p>
              <p className="md:text-sm xl:text-lg 2xl:text-2xl"> • Dynamic product recommendations and personalized shopping cart</p>
              <p className="md:text-sm xl:text-lg 2xl:text-2xl"> • Responsive Design</p>
            </div>
            <br />
          </div>

          {/* Logos Section */}
          <div className="logos-container mt-4 flex space-x-4">
            <a
              href="https://github.com/Ruthstring"
              className="text-blue-500 underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src={GitHub_logo}
                className="max-w-[50px] max-h-[50px] xl:w-[45px] 2xl:w-[70px] hover:shadow-custom-blue hover:rounded-full hover:scale-110"
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
                className="max-w-[50px] max-h-[50px] xl:w-[45px] 2xl:w-[70px] hover:shadow-custom-blue hover:rounded-full hover:scale-110"
                alt="Link Logo"
              />
            </a>
          </div>
        </div>

        {/* Slider Section (full width on small screens, in columns on large screens) */}
        <div className="project-media col-span-12 md:col-span-6 lg:col-span-6 2xl:col-span-7 flex justify-center items-center relative md:h-[100vh] xl:h-[100vh] 2xl:h-[60vh] row-start-2 md:row-start-1 mt-4 md:mt-24 2xl:-mt-10 lg:ml-[2em] 2xl:ml-[16rem]">
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

        {/* Empty column for margins */}
        <div className="hidden xl:block xl:col-span-1"></div>
      </div>
    </div>
  );


  // return (
  //   <div className="section-container grid grid-cols-12 mb-28">
     

  //     {/* Main Content Grid */}
  //     <div className="col-span-12 xl:col-span-12 md:col-start-1 grid grid-cols-12">
  //       {/* Empty column for margins */}
  //       <div className="hidden 2xl:block 2xl:col-span-1"></div>

  //       {/* Text Section (first 4 columns) */}
  //       <div className="project-text col-span-12 md:col-span-6 lg:col-span-5 pb-3 md:col-start-1 lg:ml-[2.5em] xl:mr-[2em] 2xl:pt-28 xl:pt-12  ">
  //         <h1 className="text-3xl  font-bold mb-4 text-left 2xl:text-6xl">Donut e-commerce</h1>

  //         <div className="flex flex-col text-left">
  //           <p className="md:text-sm xl:text-lg 2xl:text-2xl xl:leading-6 2xl:leading-8">
  //             This online store application allows users to browse the menu, search for items by category, and add products to their shopping cart. Upon registering, users can access their personalized cart with product recommendations tailored to their preferences.
  //           </p>
  //           <br />
  //           <div className="app-features text-left 2xl:text-2xl">
  //             <p className="md:text-sm font-bold xl:text-lg 2xl:text-2xl"> • Full-stack app</p>
  //             <p className="md:text-sm xl:text-lg 2xl:text-2xl"> • <span className="font-bold">noSql Database (MongoDB)</span> for scalable and flexible data storage</p>
  //             <p className="md:text-sm xl:text-lg 2xl:text-2xl"> • State management powered by <span className="font-bold">Redux</span> for efficient and responsive user interaction</p>
  //             <p className="md:text-sm xl:text-lg 2xl:text-2xl"> • <span className="font-bold">JWT</span> token-based authentication for secure user login and session management</p>
  //             <p className="md:text-sm xl:text-lg 2xl:text-2xl"> • Dynamic product recommendations and personalized shopping cart</p>
  //             <p className="md:text-sm xl:text-lg 2xl:text-2xl"> • Responsive Design</p>
  //           </div>
  //           <br />
  //         </div>

  //         {/* Logos Section */}
  //         <div className="logos-container mt-4 flex space-x-4 ">
  //           <a
  //             href="https://github.com/Ruthstring"
  //             className="text-blue-500 underline"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //           >
  //             <img
  //               src={GitHub_logo}
  //               className="max-w-[50px] max-h-[50px] xl:w-[45px] 2xl:w-[70px] hover:shadow-custom-blue hover:rounded-full hover:scale-110"
  //               alt="GitHub Logo"
  //             />
  //           </a>
  //           <a
  //             href="https://your-link.com"
  //             className="text-blue-500 underline"
  //             target="_blank"
  //             rel="noopener noreferrer"
  //           >
  //             <img
  //               src={Link_logo}
  //               className="max-w-[50px] max-h-[50px] xl:w-[45px] 2xl:w-[70px] hover:shadow-custom-blue hover:rounded-full hover:scale-110"
  //               alt="Link Logo"
  //             />
  //           </a>
  //         </div>
  //       </div>

  //       {/* Slider Section (next 6 columns) */}
  //       <div className="project-media col-span-12 mt-32  mb-20 xl:-mt-28 md:col-span-6 md:col-start-5 md:ml-20  lg:ml-[2em] lg:col-start-7 2xl:col-start-8 2xl:ml-[16rem] xl:col-start-7 lg:col-span-6 2xl:col-span-7 flex justify-center items-center relative md:h-[100vh] xl:h-[100vh] 2xl:h-[100vh] lg:pr-[6em] ">
  //         {/* Map through images and position them */}
  //         {images.map((image, index) => {
  //           const isActive = index === activeIndex;
  //           const isLeft = index === (activeIndex - 1 + images.length) % images.length;
  //           const isRight = index === (activeIndex + 1) % images.length;

  //           return (
  //             <img
  //               key={index}
  //               src={image.src}
  //               alt={image.alt}
  //               className={`absolute 2xl:-ml-128 lg:-mt-96 xl:mt-2 transition-transform transform duration-1000 ease-in-out
  //                  ${isActive ? "scale-110 z-30" : "opacity-50"}
  //                  ${isLeft ? "translate-x-[-100px] md:translate-x-[-120px] lg:translate-x-[-200px] xl:translate-x-[-220px] 2xl:translate-x-[-350px] z-20" : ""}
  //                  ${isRight ? "translate-x-[100px] md:translate-x-[120px] lg:translate-x-[200px] xl:translate-x-[220px] 2xl:translate-x-[350px] z-20" : ""}
  //               `}
  //               style={{
  //                 width: isActive ? "50%" : "40%",
  //                 maxHeight: "80vh",
  //                 cursor: "pointer",
  //                 objectFit: "cover",
  //               }}
  //               onMouseEnter={() => handleHover(index)}
  //             />
  //           );
  //         })}
  //       </div>

  //       {/* Empty column for margins */}
  //       <div className="hidden xl:block xl:col-span-1"></div>
  //     </div>
  //   </div>
  // );

  // return (
  //   <div className="section-container flex flex-col md:flex-row space-y-10  md:space-y-0 lg:mt-30 ">
      
  //     {/* Empty Column for 2XL Screens */}
  //     <div className="hidden 2xl:block 2xl:w-1/6"></div>

  //     {/* Text Section */}
  //     <div className="project-text w-full md:w-1/3 xl:w-2/5 2xl:w-[40%] h-auto 2xl:pt-28 xl:pt-12">
  //       <h1 className="lg:absolute text-3xl xl:ml-12 2xl:text-6xl font-bold mb-4 text-left lg:ml-4 ">
  //         Donut e-commerce
  //       </h1>

  //       <div className="flex flex-col space-y-2 text-left ">
  //         <div className="lg:mt-20">
  //           <p className="2xl:text-2xl xl:text-lg xl:leading-6 xl:ml-12 xl:-mr-28">
  //           This online store application allows users to browse the menu, search for items by category, and add products to their shopping cart. Upon registering, users can access their personalized cart with product recommendations tailored to their preferences.
  //           </p>
  //         </div>
  //         <br />
  //         <div className="app-features text-left xl:ml-12 2xl:text-2xl xl:-mr-20">
  //           <p className="font-bold xl:text-lg 2xl:text-2xl"> • Full-stack app</p>
  //           <p className=" xl:text-lg xl:leading-6 2xl:text-2xl"> •<span className="font-bold"> noSql Database (MongoDB)</span> for scalable and flexible data storage</p>
  //           <p className="xl:text-lg xl:leading-6  2xl:text-2xl"  > • State management powered by <span className="font-bold"> Redux </span>for efficient and responsive user interaction</p>
  //           <p className="xl:text-lg  xl:leading-6 2xl:text-2xl"> • <span className="font-bold">JWT </span> token-based authentication for secure user login and session management</p>
  //           <p className="xl:text-lg xl:leading-6 2xl:text-2xl"> • Dynamic product recommendations and personalized shopping cart</p>
  //           <p className="xl:text-lg xl:leading-6 2xl:text-2xl"> • Responsive Design </p>
  //           <br />
  //         </div>
  //       </div>

  //       {/* Logos Section */}
  //       <div className="logos-container mt-4 flex space-x-4 lg:ml-4 xl:ml-12">
  //         <a
  //           href="https://github.com/Ruthstring"
  //           className="text-blue-500 underline"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           <img
  //             src={GitHub_logo}
  //             className="max-w-[50px] max-h-[50px] xl:w-[45px] 2xl:w-[70px] hover:shadow-custom-blue hover:rounded-full hover:scale-110"
  //             alt="GitHub Logo"
  //           />
  //         </a>
  //         <a
  //           href="https://your-link.com"
  //           className="text-blue-500 underline"
  //           target="_blank"
  //           rel="noopener noreferrer"
  //         >
  //           <img
  //             src={Link_logo}
  //             className="max-w-[50px] max-h-[50px] xl:w-[45px] 2xl:w-[70px] hover:shadow-custom-blue hover:rounded-full hover:scale-110"
  //             alt="Link Logo"
  //           />
  //         </a>
  //       </div>
  //     </div>

  //     {/* Slider Section */}
  //     <div className="project-media pt-20 md:pt-0 md:w-2/3 lg:w-4/5 2xl:w-[55%] md:pl-20 lg:pl-36 flex justify-center items-center 2xl:items-start relative md:h-[100vh] xl:h-[100vh] 2xl:h-[60vh]">
  //       {/* Map through images and position them */}
  //       {images.map((image, index) => {
  //         const isActive = index === activeIndex;
  //         const isLeft = index === (activeIndex - 1 + images.length) % images.length;
  //         const isRight = index === (activeIndex + 1) % images.length;

  //         return (
  //           <img
  //             key={index}
  //             src={image.src}
  //             alt={image.alt}
  //             className={`absolute 2xl:-ml-128 lg:-mt-96 xl:mt-2 transition-transform transform duration-1000 ease-in-out
  //                ${isActive ? "scale-110 z-30" : "opacity-50"}
  //                ${isLeft ? "translate-x-[-100px] md:translate-x-[-120px] lg:translate-x-[-200px] xl:translate-x-[-220px] 2xl:translate-x-[-350px] z-20" : ""}
  //                ${isRight ? "translate-x-[100px] md:translate-x-[120px] lg:translate-x-[200px] xl:translate-x-[220px] 2xl:translate-x-[350px] z-20" : ""}
  //             `}
  //             style={{
  //               width: isActive ? "50%" : "40%",
  //               maxHeight: "80vh", 
  //               cursor: "pointer",
  //               objectFit: "cover",
  //             }}
  //             onMouseEnter={() => handleHover(index)}
  //           />
  //         );
  //       })}
  //     </div>
  //      {/* Bottom Margin on SM to Prevent Overlap */}
  //      <div className="md:hidden w-full h-20 md:h-32 lg:h-48"></div>
  //   </div>
  // );
};

export default Project2;


