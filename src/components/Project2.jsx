
import React from "react";
import GitHub_logo from "../assets/github_logo.png"
import Link_logo from "../assets/Link_logo.png"
import Img1 from "../assets/mobil_project1.png"
import Img2 from "../assets/map_project1.png"

const Project1 = () => {
  return (
    <>
      <div className="section-container flex flex-col md:flex-row items-center justify-between space-y-6 md:space-y-0 md:space-x-10 p-6 h-screen">
        {/* Text Column */}
        <div className="project-text md:w-1/2">
          <h1 className="text-3xl font-bold mb-4 text-left">LoveTravel App</h1>
          
          <div className="flex flex-col space-y-2 text-left">
            <p>Search your countries. Save your pictures. Create and print your personalized World map.</p>
            <br/>
            <div className="app-features text-left">
            <p>Full stack-app</p>
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
        <div className="project-media md:w-1/2">
        
          
        </div>
      </div>
    </>
  );
};

export default Project1;


// //Dodonutecommerce project

// import React from "react";

// const Project2 =()=>{
//     return(
//         <>
//         <div className="section-container">
//         <div className="project-text">
//         <h1>Donut e-commerce App</h1>
//         <p> Online store so...Get the menu, search by cathegory. Register and get your cart with personlaized recommendations</p>
//         <div>
//             <p>Full stack-app</p>
//             <p>noSql Database. MongoDB</p>
//             <p>Redux</p>
//             <p> JWT Token authentification</p>
//             <p>...</p>
//         </div>
//         <div className="logos-container">
//             <div>Github here</div>
//             <div>Link to page here</div>
//         </div>
//         </div>
//         <div className="project-media">

//         </div>
//         </div>
//         </>
        
//     )
// }

// export default Project2;