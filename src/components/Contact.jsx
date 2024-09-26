import React, { useState, useEffect, useRef } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'; // Assuming you imported FontAwesome
import { faPhone, faGlobe, faEnvelope, faMapMarkerAlt } from '@fortawesome/free-solid-svg-icons';
import backgroundImage from "../assets/code_img.png"; // Assuming your background image is here





const Contact = () => {
  const [showAnimation, setShowAnimation] = useState(false); // Control when the animation starts
  const contactRef = useRef(null); // Create a reference for the Contact section

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          // Trigger animations when the section becomes visible
          setShowAnimation(true);
        }
      },
      { threshold: 0.2 } // Adjust this threshold to control when the animation should start (20% visible)
    );

    if (contactRef.current) {
      observer.observe(contactRef.current); // Observe the Contact section
    }

    // Cleanup observer
    return () => {
      if (contactRef.current) {
        observer.unobserve(contactRef.current);
      }
    };
  }, []);

  return (
    <div ref={contactRef} className="h-screen container contact-section flex flex-col md:flex-row justify-between">
      
      {/* Animation Section */}
      <div className="text-animation-container flex-1 md:w-1/2 relative 2xl:mt-10">
        {/* "Ready for" Text */}
        {showAnimation && (
          <h2 className={`transition-all duration-1000 text-8xl md:text-8xl font-bold text-gray-800 
            ${showAnimation ? 'final-position-ready slide-in-left' : 'initial-position'}`}>
            Ready for
          </h2>
        )}

        {/* "New Adventures" Text */}
        {showAnimation && (
          <h2
            style={{
              backgroundImage: `url(${backgroundImage})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              color: 'transparent',
              WebkitBackgroundClip: 'text',
              backgroundClip: 'text',
            }}
            className={`transition-all font-bold 2xl:mt-10 duration-1000 text-[40px] md:text-8xl text-white relative 
              ${showAnimation ? 'bg-new-adventures final-position-adventures slide-in-right scale-110' : 'initial-position'}`}>
            New Adventures
          </h2>
        )}
      </div>

      {/* Contact Information Section */}
      <div className="contact-info-container flex-1 md:w-1/2 p-8">
        <div className="contact-header">
          <h1><span>LET'S CONNECT</span> WITH US!</h1>
        </div>
      
        <div className="contact-info mt-6">
          <p><FontAwesomeIcon icon={faPhone} /> +123-456-7890</p>
          <p><FontAwesomeIcon icon={faGlobe} /> www.reallygreatsite.com</p>
          <p><FontAwesomeIcon icon={faEnvelope} /> hello@reallygreatsite.com</p>
          <p><FontAwesomeIcon icon={faMapMarkerAlt} /> 123 Anywhere St., Any City</p>
        </div>
      
        <div className="contact-footer mt-6">
          <p>We're here to assist you on your financial journey!</p>
        </div>
      </div>
      
    </div>
  );
};

export default Contact;


// import React, { useState, useEffect, useRef } from 'react';
// import backgroundImage from "../assets/code_img.png";


// const Contact = () => {
//   const [showAnimation, setShowAnimation] = useState(false); // Control when the animation starts
//   const contactRef = useRef(null); // Create a reference for the Contact section

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const entry = entries[0];
//         if (entry.isIntersecting) {
//           // Trigger animations when the section becomes visible
//           setShowAnimation(true);
//         }
//       },
//       { threshold: 0.2 } // Adjust this threshold to control when the animation should start (20% visible)
//     );

//     if (contactRef.current) {
//       observer.observe(contactRef.current); // Observe the Contact section
//     }

//     // Cleanup observer
//     return () => {
//       if (contactRef.current) {
//         observer.unobserve(contactRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div ref={contactRef} className="h-screen container contact-section flex items-start justify-start">
//       <div className="contact-container flex flex-col md:flex-row w-full h-full justify-start items-start">
        
//         {/* Text Animation */}
//         <div className="relative text-animation-container 2xl:mt-10">
//           {/* "Ready for" Text */}
//           {showAnimation && (
//             <h2 className={`transition-all duration-1000 text-8xl md:text-8xl font-bold text-gray-800 
//               ${showAnimation ? 'final-position-ready slide-in-left' : 'initial-position'}`}>
//               Ready for
//             </h2>
//           )}
          
//           {/* "New Adventures" Text */}
//           {showAnimation && (
//             <h2  style={{ backgroundImage: `url(${backgroundImage})`, backgroundSize: 'cover',
//             backgroundPosition: 'center',
//             color: 'transparent',
//             WebkitBackgroundClip: 'text',
//             backgroundClip: 'text',  }} className={`transition-all font-bold 2xl:mt-10 mr- duration-1000 text-[40px] md:text-8xl  text-white relative 
//               ${showAnimation ? 'bg-new-adventures final-position-adventures slide-in-right scale-110' : 'initial-position'}`}>
//               New Adventures
//             </h2>
//           )}
//         </div>
//       </div>
//       <div class="contact-section">
//   <div class="contact-header">
//     <h1><span>LET'S CONNECT</span> WITH US!</h1>
 
  
//   <div class="contact-info">
//     <p><i class="fa fa-phone"></i> +123-456-7890</p>
//     <p><i class="fa fa-globe"></i> www.reallygreatsite.com</p>
//     <p><i class="fa fa-envelope"></i> hello@reallygreatsite.com</p>
//     <p><i class="fa fa-map-marker"></i> 123 Anywhere St., Any City</p>
//   </div>
  
//   <div class="contact-footer">
//     <p>We're here to assist you on your financial journey!</p>
//   </div>
// </div>
// </div>
//     </div>
//   );
// };

// export default Contact;


// import React, { useState, useEffect, useRef } from 'react';

// const Contact = () => {
//   const [showReadyFor, setShowReadyFor] = useState(false);
//   const [showNewAdventures, setShowNewAdventures] = useState(false);
//   const contactRef = useRef(null); // Create a reference for the Contact section

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         const entry = entries[0];
//         if (entry.isIntersecting) {
//           // Trigger animations when the section becomes visible
//           const timer1 = setTimeout(() => {
//             setShowReadyFor(true);
//           }, 500);

//           const timer2 = setTimeout(() => {
//             setShowNewAdventures(true);
//           }, 2000);

//           // Cleanup timeouts
//           return () => {
//             clearTimeout(timer1);
//             clearTimeout(timer2);
//           };
//         }
//       },
//       { threshold: 0.2 } // Adjust this threshold to control when the animation should start (20% visible)
//     );

//     if (contactRef.current) {
//       observer.observe(contactRef.current); // Observe the Contact section
//     }

//     // Cleanup observer
//     return () => {
//       if (contactRef.current) {
//         observer.unobserve(contactRef.current);
//       }
//     };
//   }, []);

//   return (
//     <div ref={contactRef} className="h-screen container bg-gray-100 flex items-start justify-start">
//       <div className="contact-container flex flex-col md:flex-row w-full h-full justify-start items-start">
        
//         {/* Text Animation */}
//         <div className="relative text-animation-container 2xl:mt-10">
//           {/* "Ready for" Text */}
//           {showReadyFor && (
//             <h2 className={`transition-all duration-1000 text-8xl md:text-8xl font-bold text-gray-800 
//               ${showReadyFor ? 'final-position-ready' : 'initial-position'}`}>
//               Ready for
//             </h2>
//           )}
          
//           {/* "New Adventures" Text */}
//           {showNewAdventures && (
//             <h2 className={`transition-all 2xl:mt-10 duration-1000 text-8xl md:text-8xl font-bold text-white relative 
//               ${showNewAdventures ? 'bg-new-adventures final-position-adventures scale-110' : 'initial-position'}`}>
//               New Adventures
//             </h2>
//           )}
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;

// import React, { useState, useEffect } from 'react';



// const Contact = () => {
//   const [showReadyFor, setShowReadyFor] = useState(false);
//   const [showNewAdventures, setShowNewAdventures] = useState(false);

//   useEffect(() => {
//     // Trigger animations as soon as the component renders
//     const timer1 = setTimeout(() => {
//       setShowReadyFor(true);
//     }, 500); // Show "Ready for" after 0.5 seconds

//     const timer2 = setTimeout(() => {
//       setShowNewAdventures(true);
//     }, 2000); // Show "New Adventures" after 2 seconds

//     return () => {
//       clearTimeout(timer1);
//       clearTimeout(timer2);
//     };
//   }, []);

//   return (
//     <div className="h-screen container bg-gray-100 flex items-start justify-start">
//       <div className="contact-container flex flex-col md:flex-row  md:w-full h-full justify-start items-start">
        
//         {/* Text Animation */}
//         <div className="relative text-animation-container 2xl:mt-10 ">
//           {/* "Ready for" Text */}
//           <h2 className={`transition-all text-8xl md:text-8xl font-bold text-gray-800 absolute 
//               ${showReadyFor ? 'final-position-ready' : 'initial-position-left'}`}>
//             Ready for
//           </h2>

//           {/* "New Adventures" Text */}
//           <h2 className={`transition-all text-8xl md:text-8xl font-bold text-white absolute 
//               ${showNewAdventures ? 'bg-new-adventures final-position-adventures scale-110' : 'initial-position-right'}`}>
//             New Adventures
//           </h2>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Contact;