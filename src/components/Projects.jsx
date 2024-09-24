import React from "react";
import Project1 from "./Project1";
import Project2 from "./Project2";

const Projects =()=>{
    return(
        <>
        <div><h1 className="text-6xl">Projects</h1></div>
        <div className="container pt-20">
           
        <Project1 />
        </div>
        <div>
        <Project2 />
        </div>
        </>
    )
}

export default Projects;