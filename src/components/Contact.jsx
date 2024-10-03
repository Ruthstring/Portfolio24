import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Assuming you imported FontAwesome
import { faPhone, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';

const Contact = () => {
  const [showAnimation, setShowAnimation] = useState(false);
  const contactRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setShowAnimation(true);
        }
      },
      { threshold: 0.2 } // Start animation when 20% of the component is visible
    );

    if (contactRef.current) {
      observer.observe(contactRef.current);
    }

    // Cleanup observer
    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <div ref={contactRef} className="h-screen 2xl:h-[80vh] container contact-section bg-gradient-to-t" style={{ background: 'linear-gradient(to bottom, #eff1f3, #8290f0)' }}  >
      {/* Grid Layout with Empty Columns for 2XL Screens */}
      <div className="flex flex-col md:grid md:grid-cols-2 2xl:grid-cols-12 w-full h-full">
        
        {/* Empty Left Column for 2XL Screens */}
        <div className="hidden 2xl:block 2xl:col-span-2"></div>
        
        {/* Animation Section for 2XL Screens */}
        <div className="text-animation-container   pt-10 md:pt-28 lg:col-span-1  2xl:col-span-5 flex flex-col items-start  relative 2xl:mt-10">
          {showAnimation && (
            <h2 className={`ready-text transition-all duration-1000 text-[40px] md:text-[50px] text-6xl md:text-8xl xl:text-[60px] font-bold text-gray-500
              ${showAnimation ? 'final-position-ready slide-in-left' : 'initial-position'}`}>
              Ready for
            </h2>
          )}
          {showAnimation && (
            <h2
            
              className={`leading-[55px] mt-3 transition-all ready-text text-left font-bold text-[55px] mb-5 md:mt-0 md:text-[60px] xl:text-[90px] 2xl:text-[120px] 2xl:mt-2 2xl:pt-3 duration-1000 md:text-8xl  relative
                ${showAnimation ? 'bg-new-adventures xl:pt-[1.5rem]  final-position-adventures slide-in-right scale-110' : 'initial-position'}`}>
              New Challenges
            </h2>
          )}
        </div>

        {/* Contact Info Section */}
        <div className="contact-info-section flex items-center  2xl:col-span-5 pl-8 md:pl-0 ">
          <div className="contact-icon-column w-full">
            <div className="triangle-left"></div>
            <h1 className="contact-title leading-[50px] pt-8 pb-8">
              LET'S <br />
              CONNECT
            </h1>
            <div className="contact-details pl-8 md:pl-20 flex flex-col justify-center">
              <div className="contact-info">
              <p className="text-4xl font-bold"> RUTH CUÉLLAR </p>
              <p className="text-3xl">
                  <FontAwesomeIcon icon={faEnvelope} /> ruthcllp@gmail.com
                </p>
                <p className="text-3xl">
                  <FontAwesomeIcon icon={faPhone} className="contact-icon" /> +49 1520 6914 334
                </p>
                
                <p className="text-3xl">
                  <FontAwesomeIcon icon={faMapMarkerAlt} /> Berlin
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Empty Right Column for 2XL Screens */}
        <div className="hidden 2xl:block xl:col-span-1 2xl:col-span-2"></div>
      </div>
    </div>
  );
};

export default Contact;


// const Contact = () => {
//   const [showAnimation, setShowAnimation] = useState(false);
//   const contactRef = useRef(null);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const entry = entries[0];
//         if (entry.isIntersecting) {
//           setShowAnimation(true);
//         }
//       },
//       { threshold: 0.2 } // Start animation when 20% of the component is visible
//     );

//     if (contactRef.current) {
//       observer.observe(contactRef.current);
//     }

//     // Cleanup observer
//     return () => {
//       if (contactRef.current) {
//         observer.unobserve(contactRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div ref={contactRef} className="h-screen xl:h-screen 2xl:h-[90%] container contact-section">
//       {/* Grid Layout with Empty Columns for Large Screens */}
//       <div className=" flex flex-row lg:grid lg:grid-cols-2 2xl:grid-cols-12 w-full h-full">
        
//         {/* Empty Left Column for Larger Screens */}
//         <div className="hidden 2xl:block xl:col-span-1 2xl:col-span-2"></div>
        
//         {/* Animation Section (Centered) */}
//         <div className="text-animation-container flex-row lg:col-span-1 2xl:col-span-5 flex items-start relative 2xl:mt-10">
//           {showAnimation && (
//             <h2 className={`transition-all duration-1000 md:text-[40px] text-6xl md:text-8xl xl:text-[60px] font-bold text-white
//               ${showAnimation ? 'final-position-ready slide-in-left' : 'initial-position'}`}>
//               Ready for
//             </h2>
//           )}
//           {showAnimation && (
//             <h2
//               style={{
//                 backgroundColor:"black",
//                 backgroundSize: 'cover',
//                 backgroundPosition: 'center',
//                 color: 'transparent',
//                 WebkitBackgroundClip: 'text',
//                 backgroundClip: 'text',
//               }}
//               className={`transition-all font-bold md:text-[45px] text-[50px] xl:text-[80px] 2xl:mt-12 2xl:pt-3 duration-1000 md:text-8xl text-white relative lg:absolute
//                 ${showAnimation ? 'bg-new-adventures final-position-adventures slide-in-right scale-110' : 'initial-position'}`}>
//               New Challenges
//             </h2>
//           )}
//         </div>

//         {/* Contact Info Section (Centered) */}
//         <div className="contact-info-section col-span-1 2xl:col-span-5 pl-8 md:pl-0 text-white flex items-center">
//           <div className="contact-icon-column w-full">
//             <div className="triangle-left"></div>
//             <h1 className="contact-title">
//               LET'S <br />
//               CONNECT
//             </h1>
//             <div className="contact-details pl-28 flex flex-col justify-center">
//               <div className="contact-info">
//                 <p className="text-3xl">
//                   <FontAwesomeIcon icon={faPhone} className="contact-icon" /> +123-456-7890
//                 </p>
//                 <p className="text-3xl">
//                   <FontAwesomeIcon icon={faEnvelope} /> hello@reallygreatsite.com
//                 </p>
//                 <p className="text-3xl">
//                   <FontAwesomeIcon icon={faMapMarkerAlt} /> Berlin
//                 </p>
//               </div>
//             </div>
//           </div>
//         </div>

//         {/* Empty Right Column for Larger Screens */}
//         <div className="hidden 2xl:block lg:col-span-2 xl:col-span-1 2xl:col-span-2"></div>
//       </div>
//     </div>
//   );
// };

// export default Contact;
