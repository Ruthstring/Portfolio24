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
              <p>
                Search your countries. Save your pictures. Create and print your personalized World map.
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
  
          {/* Media Column */}
          <div className="project-media relative flex justify-center items-center">
            <div className="relative w-full h-full">
              {/* Image 2 - Background */}
              <img
                src={Img2}
                alt="Image Map"
                className="project-img shadow-md absolute bottom-10 right-0 w-[80%] h-auto transform translate-x-10 -translate-y-10 transition-transform duration-700 ease-in-out z-0"
              />
              {/* Image 1 - Foreground */}
              <img
                src={Img1}
                alt="Image Mobile"
                className="project-img absolute top-20 left-0 w-[50%] h-auto transform -translate-x-10 translate-y-10 transition-transform duration-700 ease-in-out z-10"
              />
            </div>
          </div>
        </div>
      </>
    );
  };
  
  export default Project1;

// const Project1 = () => {


//     return (
//         <>
//           <div className="section-container flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 p-6 h-screen">
//             {/* Text Column */}
//             <div className="project-text">
//               <h1 className="text-3xl font-bold mb-4 text-left">LoveTravel App</h1>
    
//               <div className="flex flex-col space-y-2 text-left">
//                 <p>Search your countries. Save your pictures. Create and print your personalized World map.</p>
//                 <br />
//                 <div className="app-features text-left">
//                   <p className="font-bold">Full-stack app</p>
//                   <p> • SQL Database</p>
//                   <p> • RESTFUL API</p>
//                   <p> • PDF Generator</p>
//                   <p> • SVG</p>
//                   <br />
//                 </div>
//               </div>
    
//               {/* Logos/Links Section */}
//               <div className="logos-container mt-4 flex space-x-4">
//                 <a href="https://github.com/Ruthstring" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
//                   <img src={GitHub_logo} className="max-w-[50px] max-h-[50px]" alt="Logo" />
//                 </a>
//                 <a href="https://your-link.com" className="text-blue-500 underline" target="_blank" rel="noopener noreferrer">
//                   <img src={Link_logo} className="max-w-[50px] max-h-[50px]" alt="Logo" />
//                 </a>
//               </div>
//             </div>
    
//             {/* Media Column */}
//             <div className="project-media relative flex justify-center items-center">
//               <div className="relative w-full h-full">
//                 {/* Image 2 - Background */}
//                 <img
//                   src={Img2}
//                   alt="Image Map"
//                   className="project-img shadow-md absolute bottom-10 right-0 w-[80%] h-auto transform translate-x-10 -translate-y-10 transition-transform duration-700 ease-in-out z-0"
//                 />
//                 {/* Image 1 - Foreground */}
//                 <img
//                   src={Img1}
//                   alt="Image Mobile"
//                   className="project-img absolute top-20 left-0 w-[50%] h-auto transform -translate-x-10 translate-y-10 transition-transform duration-700 ease-in-out z-10"
//                 />
//               </div>
//             </div>
//           </div>

//           <style jsx>{`
//         .project-media {
//           position: relative;
//           width: 100%;
//           height: 100%;
//         }

//         .project-img {
//           transition: all 0.5s ease;
//         }

//         /* Only apply the hover effect when directly hovering over the image */
//         .project-img:hover {
//           z-index: 30;
//           transform: translate(0, 0) scale(1.1); /* Make the hovered image move and scale */
//         }

//         /* Keep the non-hovered image in the background */
//         .project-img:not(:hover) {
//           z-index: 10;
//         }
//       `}</style>
    
//         </>
//       );
      

// };

// export default Project1;


