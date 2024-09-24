import React,{useState,useEffect} from "react";


const TextCarousel = () => {
    return (
      <div className="carousel-container">
        <div className="carousel-text">
          MORE COMING SOON&nbsp;·&nbsp;WORKING HARD&nbsp;·&nbsp;LEARNING FAST&nbsp;·&nbsp;
          MORE COMING SOON&nbsp;·&nbsp;WORKING HARD&nbsp;·&nbsp;LEARNING FAST&nbsp;·&nbsp;
          MORE COMING SOON&nbsp;·&nbsp;WORKING HARD&nbsp;·&nbsp;LEARNING FAST&nbsp;·&nbsp;
          MORE COMING SOON&nbsp;·&nbsp;WORKING HARD&nbsp;·&nbsp;LEARNING FAST&nbsp;·&nbsp;
        </div>
      </div>
    );
  };
  
  export default TextCarousel;
// const MoreText = () => {
//     const [animate, setAnimate] = useState([false, false, false]);

//     useEffect(() => {
//         // Stagger animation with delay for each text item
//         const timers = [
//             setTimeout(() => setAnimate([true, false, false]), 500),
//             setTimeout(() => setAnimate([true, true, false]), 1000),
//             setTimeout(() => setAnimate([true, true, true]), 1500),
//         ];

//         return () => timers.forEach((timer) => clearTimeout(timer));
//     }, []);

//     const splitText = (text) => {
//         return text.split('').map((char, index) => (
//             <span key={index} className="letter">{char}</span>
//         ));
//     };

//     return (
//         <div className="text-container">
//             <span className={`text-item ${animate[0] ? 'animate' : ''}`} data-text="More">
//                 {splitText("More")}
//             </span>
//             <span className={`text-item ${animate[1] ? 'animate' : ''}`} data-text="Coming">
//                 {splitText("Coming")}
//             </span>
//             <span className={`text-item ${animate[2] ? 'animate soon' : ''}`} data-text="SOON">
//                 {splitText("SOON")}
//             </span>
//         </div>
//     );
// };

// export default MoreText;