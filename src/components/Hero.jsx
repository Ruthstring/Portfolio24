import React from "react"



const Hero=()=>{
  
    return(
     <div className="heroContainer mb-28 mt-19">
        <div className="mb-8">
            <p className="best-title text-6xl md:text-8xl font-bold leading-tight mb-12">
                Web
                <br/>
                 Developer
                 
            </p>

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
       
       <div className="mb-8">
       
       </div>
       
     </div>
    )
}

export default Hero;