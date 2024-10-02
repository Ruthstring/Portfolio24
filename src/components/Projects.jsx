import React from "react";
import Project1 from "./Project1";
import Project2 from "./Project2";

const Projects =()=>{
    return(
        <>
        
        <div className="container pt-20 xl:pt-3">
           
        <Project1 />
        </div>
        <div className="container pt-20" >
        <Project2 />
        </div>
        </>
    )
}

export default Projects;