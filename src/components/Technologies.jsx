import React from "react";
import Img_Bento_js from "../assets/bento_JS.png"
import Img_Bento_React from "../assets/bento_react.png"
import Img_Bento_html from "../assets/bento_html.png"
import Img_Bento_css from "../assets/bento_css.png"
import Img_Bento_mongo from "../assets/bento_mongo.png"
import Img_Bento_express from "../assets/bento_express.png"
import Img_Bento_sql from "../assets/bento_sql.png"
import Img_Bento_node from "../assets/bento_node.png"
import Img_Bento_tailwind from "../assets/bento_tailwind.png"


const Technologies = () => {
  return (
    <>
     <h1 className="tech-title ml-3 md:ml-28 xl:text-5xl xl:pb-2"> Technologies </h1>
      <div className="container flex h-screen bg-primary items-center justify-center">
        {/* Grid Layout */}
        <div className="grid h-full w-full gap-4 p-2 md:p-4 lg:p-6 md:ml-20 md:mr-20 lg:ml-32 lg:mr-32 ml-3 mr-3
              grid-cols-2 grid-rows-auto md:grid-cols-12 md:grid-rows-12 scale-90 md:scale-80 lg:scale-75">
          
          {/* Grid Item 1 */}
          <div className="md:col-span-6 md:row-span-5 col-span-1 row-span-2 flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front bg-gray-200 rounded-lg shadow-custom-blue flex items-center justify-center">
                <img src={Img_Bento_js} alt="Image JavaScript" className="object-contain w-full h-full" />
              </div>
              <div className="flip-card-back bg-gray-200 rounded-lg shadow-custom-blue flex items-center justify-center">
                <h3>JavaScript</h3>
              </div>
            </div>
          </div>
          
          {/* Grid Item 2 */}
          <div className="col-span-1 row-span-2 md:col-span-6 md:row-span-5 flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front bg-gray-200 rounded-lg shadow-custom-blue flex items-center justify-center">
                <img src={Img_Bento_React} alt="Image React" className="object-contain w-full h-full slow-spin" />
              </div>
              <div className="flip-card-back bg-gray-200 rounded-lg shadow-custom-blue flex items-center justify-center">
                <h3>React</h3>
              </div>
            </div>
          </div>
          
          {/* Grid Item 3 */}
          <div className="md:col-span-3 md:row-span-3 col-span-1 row-span-1 flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front bg-gray-200 rounded-lg shadow-custom-blue flex items-center justify-center">
                <img src={Img_Bento_html} alt="Image HTML5" className="object-contain w-full h-full" />
              </div>
              <div className="flip-card-back bg-gray-200 rounded-lg shadow-custom-blue flex items-center justify-center">
                <h3>HTML5</h3>
              </div>
            </div>
          </div>
          
          {/* Grid Item 4 */}
          <div className="md:col-span-3 md:row-span-2 col-span-1 row-span-1 flip-card">
            <div className="flip-card-inner">
              <div className="flip-other flip-card-front rounded-lg shadow-custom-blue flex items-center justify-center">
                <img src={Img_Bento_tailwind} alt="Image Tailwind" className="object-contain w-full h-full" />
              </div>
              <div className=" flip-card-back rounded-lg shadow-custom-blue flex items-center justify-center">
                <h3>Tailwind</h3>
              </div>
            </div>
          </div>
          
          {/* Grid Item 5 */}
          <div className="md:col-span-2 md:row-span-7 col-span-1 row-span-2 flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front bg-gray-200 rounded-lg shadow-custom-blue flex items-center justify-center">
                <img src={Img_Bento_mongo} alt="Image MongoDB" className="h-full pt-12 pb-12" />
              </div>
              <div className="flip-card-back bg-gray-200 rounded-lg shadow-custom-blue flex items-center justify-center">
                <h3>MongoDB</h3>
              </div>
            </div>
          </div>
          
          {/* Grid Item 6 */}
          <div className="md:col-span-4 md:row-span-5 col-span-1 row-span-1 flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front bg-gray-200 rounded-lg shadow-custom-blue flex items-center justify-center">
                <img src={Img_Bento_node} alt="Image NodeJS" className="object-contain w-full h-full" />
              </div>
              <div className="flip-card-back bg-gray-200 rounded-lg shadow-custom-blue flex items-center justify-center">
                <h3>NodeJS</h3>
              </div>
            </div>
          </div>
          
          {/* Grid Item 7 */}
          <div className="md:col-span-3 md:row-span-5 col-span-1 row-span-1 flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front bg-gray-200 rounded-lg shadow-custom-blue flex items-center justify-center">
                <img src={Img_Bento_sql} alt="Image SQL" className="object-contain w-full h-full" />
              </div>
              <div className="flip-card-back bg-gray-200 rounded-lg shadow-custom-blue flex items-center justify-center">
                <h3>SQL</h3>
              </div>
            </div>
          </div>
          
          {/* Grid Item 8 */}
          <div className="md:col-span-3 md:row-span-4 col-span-1 row-span-1 flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front bg-custom-gradient2 rounded-lg shadow-custom-blue flex items-center justify-center">
                <img src={Img_Bento_css} alt="Image CSS3" className="object-contain w-full h-full" />
              </div>
              <div className="flip-card-back bg-gray-200 rounded-lg shadow-custom-blue flex items-center justify-center">
                <h3>CSS3</h3>
              </div>
            </div>
          </div>
          
          {/* Grid Item 9 */}
          <div className="md:col-span-4 md:row-span-2 col-span-1 row-span-1 flip-card">
            <div className="flip-card-inner">
              <div className="flip-card-front flip-other rounded-xl shadow-custom-blue flex items-center justify-center">
                <img src={Img_Bento_express} alt="Image Express" className="object-contain w-full h-full" />
              </div>
              <div className="flip-card-back bg-gray-200 rounded-lg shadow-custom-blue flex items-center justify-center">
                <h3>Express</h3>
              </div>
            </div>
          </div>
          
        </div>
      </div>
    </>
  );
};

export default Technologies;

// const Technologies = () => {
//     return (
//       <>
      
//         <div className="container flex h-screen bg-primary items-center justify-center">
//           {/* Grid Layout */}
//           <div className="grid h-full w-full gap-4 p-2 md:p-4 lg:p-6 md:ml-20 md:mr-20 lg:ml-32 lg:mr-32 ml-3 mr-3
//                 grid-cols-2 grid-rows-auto md:grid-cols-12 md:grid-rows-12 scale-90 md:scale-80 lg:scale-75">
            
//             {/* Grid Item 1 */}
//             <div className="md:col-span-6 md:row-span-5 col-span-1 row-span-2 flip-card">
//               <div className="flip-card-inner">
//                 <div className="flip-card-front bg-gray-200 rounded-lg shadow-custom-blue flex items-center justify-center">
//                   <img src={Img_Bento_js} alt="Image JavaScript" className="object-contain w-full h-full" />
//                 </div>
//                 <div className="flip-card-back bg-gray-200 rounded-lg shadow-custom-blue flex items-center justify-center">
//                   <h3>JavaScript</h3>
//                 </div>
//               </div>
//             </div>
            
//             {/* Grid Item 2 */}
//             <div className="col-span-1 row-span-2 md:col-span-6 md:row-span-5 flip-card">
//               <div className="flip-card-inner">
//                 <div className="flip-card-front bg-gray-200 rounded-lg shadow-custom-blue flex items-center justify-center">
//                   <img src={Img_Bento_React} alt="Image React" className="object-contain w-full h-full slow-spin" />
//                 </div>
//                 <div className="flip-card-back bg-gray-200 rounded-lg shadow-custom-blue flex items-center justify-center">
//                   <h3>React</h3>
//                 </div>
//               </div>
//             </div>
            
//             {/* Grid Item 3 */}
//             <div className="md:col-span-3 md:row-span-3 col-span-1 row-span-1 flip-card">
//               <div className="flip-card-inner">
//                 <div className="flip-card-front bg-gray-200 rounded-lg shadow-custom-blue flex items-center justify-center">
//                   <img src={Img_Bento_html} alt="Image HTML5" className="object-contain w-full h-full" />
//                 </div>
//                 <div className="flip-card-back bg-gray-200 rounded-lg shadow-custom-blue flex items-center justify-center">
//                   <h3>HTML5</h3>
//                 </div>
//               </div>
//             </div>
            
//             {/* Grid Item 4 */}
//             <div className="md:col-span-3 md:row-span-2 col-span-1 row-span-1 flip-card">
//               <div className="flip-card-inner">
//                 <div className="flip-other flip-card-front rounded-lg shadow-custom-blue flex items-center justify-center">
//                   <img src={Img_Bento_tailwind} alt="Image Tailwind" className="object-contain w-full h-full" />
//                 </div>
//                 <div className="flip-card-back rounded-lg shadow-custom-blue flex items-center justify-center">
//                   <h3>Tailwind</h3>
//                 </div>
//               </div>
//             </div>
            
//             {/* Grid Item 5 */}
//             <div className="md:col-span-2 md:row-span-7 col-span-1 row-span-2 flip-card">
//               <div className="flip-card-inner">
//                 <div className="flip-card-front bg-gray-200 rounded-lg shadow-custom-blue flex items-center justify-center">
//                   <img src={Img_Bento_mongo} alt="Image MongoDB" className="h-full pt-12 pb-12" />
//                 </div>
//                 <div className="flip-card-back bg-gray-200 rounded-lg shadow-custom-blue flex items-center justify-center">
//                   <h3>MongoDB</h3>
//                 </div>
//               </div>
//             </div>
            
//             {/* Grid Item 6 */}
//             <div className="md:col-span-4 md:row-span-5 col-span-1 row-span-1 flip-card">
//               <div className="flip-card-inner">
//                 <div className="flip-card-front bg-gray-200 rounded-lg shadow-custom-blue flex items-center justify-center">
//                   <img src={Img_Bento_node} alt="Image NodeJS" className="object-contain w-full h-full" />
//                 </div>
//                 <div className="flip-card-back bg-gray-200 rounded-lg shadow-custom-blue flex items-center justify-center">
//                   <h3>NodeJS</h3>
//                 </div>
//               </div>
//             </div>
            
//             {/* Grid Item 7 */}
//             <div className="md:col-span-3 md:row-span-5 col-span-1 row-span-1 flip-card">
//               <div className="flip-card-inner">
//                 <div className="flip-card-front bg-gray-200 rounded-lg shadow-custom-blue flex items-center justify-center">
//                   <img src={Img_Bento_sql} alt="Image SQL" className="object-contain w-full h-full" />
//                 </div>
//                 <div className="flip-card-back bg-gray-200 rounded-lg shadow-custom-blue flex items-center justify-center">
//                   <h3>SQL</h3>
//                 </div>
//               </div>
//             </div>
            
//             {/* Grid Item 8 */}
//             <div className="md:col-span-3 md:row-span-4 col-span-1 row-span-1 flip-card">
//               <div className="flip-card-inner">
//                 <div className="flip-card-front bg-custom-gradient rounded-lg shadow-custom-blue flex items-center justify-center">
//                   <img src={Img_Bento_css} alt="Image CSS3" className="object-contain w-full h-full" />
//                 </div>
//                 <div className="flip-card-back bg-gray-200 rounded-lg shadow-custom-blue flex items-center justify-center">
//                   <h3>CSS3</h3>
//                 </div>
//               </div>
//             </div>
            
//             {/* Grid Item 9 */}
//             <div className="md:col-span-4 md:row-span-2 col-span-1 row-span-1 flip-card">
//               <div className="flip-card-inner">
//                 <div className="flip-card-front flip-other rounded-xl shadow-custom-blue flex items-center justify-center">
//                   <img src={Img_Bento_express} alt="Image Express" className="object-contain w-full h-full" />
//                 </div>
//                 <div className="flip-card-back bg-gray-200 rounded-lg shadow-custom-blue flex items-center justify-center">
//                   <h3>Express</h3>
//                 </div>
//               </div>
//             </div>
            
//           </div>
//         </div>
//       </>
//     );
//   };
  
//   export default Technologies;

