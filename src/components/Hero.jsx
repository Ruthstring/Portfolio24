import React, { useState, useEffect } from 'react';
import HeroImg from "../assets/Hero_Img.png"; // Ensure the correct path

const Hero = () => {
  const [showFinalLayout, setShowFinalLayout] = useState(false);
  const [showJuniorText, setShowJuniorText] = useState(false);
  const [showNameAnimation, setShowNameAnimation] = useState(false);
  const [showFullStackText, setShowFullStackText] = useState(false);

  useEffect(() => {
    const nameRevealTimeout = setTimeout(() => {
      setShowNameAnimation(true);
    }, 500);

    const juniorTextTimeout = setTimeout(() => {
      setShowJuniorText(true);
    }, 3000);

    const fullStackTextTimeout = setTimeout(() => {
      setShowFullStackText(true);
    }, 4000);

    const finalLayoutTimeout = setTimeout(() => {
      setShowFinalLayout(true);
    }, 5000);

    return () => {
      clearTimeout(nameRevealTimeout);
      clearTimeout(juniorTextTimeout);
      clearTimeout(fullStackTextTimeout);
      clearTimeout(finalLayoutTimeout);
    };
  }, []);

  return (
    <div
      style={{ height: "calc(100vh - 64px)" }}
      className="container hero-section h-screen bg-primary relative"
    >
      {/* Initial Animation: HELLO, I AM and name */}
      {!showFinalLayout && !showJuniorText && (
        <div className="hero-animation absolute inset-0 flex items-center justify-center">
          <p className={`hello-text text-center text-white text-5xl lg:text-6xl 2xl:text-9xl font-bold`}>
            HELLO, I AM <br/>
            <span className="name-reveal pt-20">
              <span>R</span>
              <span>u</span>
              <span>t</span>
              <span>h</span>
              <br />
              <span className="surname">
                <span>C</span>
                <span>u</span>
                <span>e</span>
                <span>l</span>
                <span>l</span>
                <span>a</span>
                <span>r</span>
              </span>
            </span>
          </p>
        </div>
      )}

      {/* Second Animation: "YOUR JUNIOR" */}
      {showJuniorText && !showFullStackText && (
        <div className="junior-text absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-5xl lg:text-11xl 2xl:text-9xl font-bold">
            YOUR <br/>
            JUNIOR
          </h2>
        </div>
      )}

      {/* Second Animation: "FULL STACK" */}
      {showFullStackText && !showFinalLayout && (
        <div className="junior-text absolute inset-0 flex items-center justify-center">
          <h2 className="text-white text-5xl lg:text-6xl 2xl:text-9xl font-bold">
            FULL <br />
            STACK
          </h2>
        </div>
      )}

      {/* Final Layout */}
      {showFinalLayout && (
        <div style={{ height: "calc(100vh - 64px)" }} className="container hero-section h-screen bg-primary">
          <p className="best-title sliding-down leading-none pb-36 lg:leading-none lg:bottom-32 left-0 w-full h-full font-bold text-[20vw] lg:text-[15vw] flex items-center justify-center md:pt-10 z-0">
            Web
            Developer
          </p>
          <img src={HeroImg} className="hero-img sliding-up absolute bottom-0 w-5/6 md:w-1/2 lg:w-2/6" alt="Hero" />

          {/* Circular text in the bottom-right corner */}
          <div className="circular-text-container hidden md:block md:-mb-16 md:w-[55px] md:ml-2 xl:w-[60px] xl:ml-4 xl:-mb-20 2xl:ml-20 2xl:w-[100px] 2xl:mb-3">
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
      )}
    </div>
  );
};

export default Hero;


// import React, { useState, useEffect, useRef } from 'react';

//  import HeroImg from "../assets/Hero_Img.png"

//  const Hero = () => {
//   const [showFinalLayout, setShowFinalLayout] = useState(false);
//   const [showJuniorText, setShowJuniorText] = useState(false);
//   const [showNameAnimation, setShowNameAnimation] = useState(false);
//   const [showFullStackText,setShowFullStackText]= useState(false)

//   useEffect(() => {
//     // Initial name reveal animation
//     const nameRevealTimeout = setTimeout(() => {
//       setShowNameAnimation(true);
//     }, 500);

//     // Transition to "YOUR JUNIOR" after the name disappears
//     const juniorTextTimeout = setTimeout(() => {
//       setShowJuniorText(true);
//     }, 3000);

// // Transition to "FULL STACK" after the "YOUR JUNIOR"" disappears
// const fullStackTextTimeout = setTimeout(() => {
//   setShowFullStackText(true);
// }, 4000);

//     // Final layout display
//     const finalLayoutTimeout = setTimeout(() => {
//       setShowFinalLayout(true);
//     }, 5000);

//     // Clean up timers
//     return () => {
//       clearTimeout(nameRevealTimeout);
//       clearTimeout(juniorTextTimeout);
//       clearTimeout(fullStackTextTimeout);
//       clearTimeout(finalLayoutTimeout);
//     };
//   }, []);

//   return (
//     <div
//       style={{ height: "calc(100vh - 64px)" }}
//       className="container hero-section h-screen bg-primary relative"
//     >
//      {/* Initial Animation: HELLO, I AM and name */}
//   {!showFinalLayout && !showJuniorText && (
//     <div className="hero-animation absolute inset-0 flex items-center justify-center">
//       <p className={`hello-text text-center text-white text-4xl lg:text-6xl font-bold ${showJuniorText ? "fade-out" : ""}`}>
//         HELLO, I AM <br/>
//         <span className="name-reveal pt-20">
//           <span>R</span>
//           <span>u</span>
//           <span>t</span>
//           <span>h</span>
//           <br />
//           <span className="surname">
//           <span>C</span>
//           <span>u</span>
//           <span>e</span>
//           <span>l</span>
//           <span>l</span>
//           <span>a</span>
//           <span>r</span>
//           </span>
//         </span>
//       </p>
//     </div>
//   )}

//   {/* Second Animation: "YOUR JUNIOR" */}
//   {showJuniorText && !showFullStackText && (
//     <div className="junior-text absolute inset-0 flex items-center justify-center">
//       <h2 className="text-white text-4xl lg:text-6xl font-bold">
//         YOUR <br/>
//         <span className="text-primary"></span>
//         JUNIOR
//       </h2>
//     </div>
//   )}

// {/* Second Animation: "FULL STACK" */}
// {showFullStackText&& !showFinalLayout && (
//         <div className="junior-text absolute inset-0 flex items-center justify-center">
//           <h2 className="text-white text-4xl lg:text-6xl font-bold">
//             FULL
//             <br/>
//             STACK
//           </h2>
//         </div>
//       )}


//       {/* Final Layout */}
//       {showFinalLayout && (
//         <div style={{ height: "calc(100vh - 64px)" }} className="container hero-section h-screen bg-primary">
//           <p className="best-title leading-none pb-36 lg:leading-none lg:bottom-32 left-0 w-full h-full font-bold text-[20vw] lg:text-[15vw] flex items-center justify-center md:pt-10 z-0">
//             Web
//             Developer
//           </p>
//           <img src={HeroImg} className="hero-img absolute bottom-0 w-5/6 md:w-1/2 lg:w-2/6" alt="Hero" />

//           {/* Circular text in the bottom-right corner */}
//           <div className="circular-text-container hidden md:block md:-mb-16 md:w-[55px] md:ml-2 xl:w-[60px] xl:ml-4 xl:-mb-20 2xl:ml-20 2xl:w-[100px] 2xl:mb-3">
//             <svg viewBox="0 0 100 100" className="circular-text-svg">
//               <path
//                 id="circlePath"
//                 d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
//               />
//               <text>
//                 <textPath href="#circlePath" startOffset="">
//                   Scroll down • Scroll down •
//                 </textPath>
//               </text>
//             </svg>
//             <div className="dot"></div>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default Hero;

// import React from "react";
// import HeroImg from "../assets/Hero_Img.png"



// const Hero=()=>{
  
//     return(
//      <div style={{ height: 'calc(100vh - 64px)' }} className="container hero-section h-screen bg-primary ">
        
//             <p className="best-title leading-none pb-36 lg:leading-none  lg:bottom-32 left-0 w-full h-full font-bold text-[20vw] lg:text-[15vw] flex items-center justify-center md:pt-10 z-0">
//                 Web
//                 Developer
                 
//             </p>
//             <img src={HeroImg}  className=" hero-img absolute bottom-0 w-5/6 md:w-1/2 lg:w-2/6 "/>

//              {/* Circular text in the bottom-right corner */}
//                 <div className="circular-text-container hidden md:block md:-mb-16 md:w-[60px] md:ml-10  xl:w-[70px] xl:ml-6 xl:-mb-14 2xl:ml-20">
//                   <svg viewBox="0 0 100 100" className="circular-text-svg">
//                     <path
//                       id="circlePath"
//                       d="M 50, 50 m -40, 0 a 40,40 0 1,1 80,0 a 40,40 0 1,1 -80,0"
//                     />
//                     <text>
//                       <textPath href="#circlePath" startOffset="">
//                         Scroll down • Scroll down • 
//                       </textPath>
//                     </text>
//                   </svg>
//                   <div className="dot"></div> 
//                 </div>
//                   </div>
                
        
     
//     )
// }

// export default Hero;