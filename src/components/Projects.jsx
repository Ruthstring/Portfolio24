import React from "react";
import Project1 from "./Project1";
import Project2 from "./Project2";

const Projects =()=>{
    return(
        <>
         {/* Title */}
         <h1 className="ml-3 md:ml-28 text-start projects-title col-span-12 xl:col-span-12 xl:col-start-1  text-4xl md:text-5xl mt-10 md:pb-0   ">Projects</h1>
        <div className="container pt-6 lg:pt-20 xl:pt-3">
          
        <Project1 />
        </div>
        <div className="container pt-20" >
        <Project2 />
        </div>
        </>
    )
}

export default Projects;