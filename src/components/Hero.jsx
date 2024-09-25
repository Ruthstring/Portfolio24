import React from "react";
import HeroImg from "../assets/Hero_Img.png"



const Hero=()=>{
  
    return(
     <div style={{ height: 'calc(100vh - 64px)' }} className="container hero-section h-screen bg-primary ">
        
            <p className="best-title md:leading-10 lg:leading-none  absolute  lg:bottom-32 left-0 w-full h-full font-bold text-[30vw] md:text-[40vw] lg:text-[15vw] flex items-center justify-center text-opacity-10 z-0">
                Web
                Developer
                 
            </p>
            <img src={HeroImg} className=" hero-img absolute bottom-0 md:w-[1050px] "/>

             {/* Circular text in the bottom-right corner */}
                <div className="circular-text-container">
                  <svg viewBox="0 0 100 100" className="circular-text-svg">
                    <path
                      id="circlePath"
                      d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
                    />
                    <text>
                      <textPath href="#circlePath" startOffset="">
                        Scroll down • Scroll down • 
                      </textPath>
                    </text>
                  </svg>
                  <div className="dot"></div> 
                </div>
                  </div>
                
        
     
    )
}

export default Hero;