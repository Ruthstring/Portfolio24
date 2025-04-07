import React from "react";
import Icon1 from "../assets/eye_iconAbout.svg"
 import Icon2 from "../assets/watch_iconAbout.svg"
import Icon3 from "../assets/com_iconAbout.svg"
import Icon4 from "../assets/multi_iconAbout.svg" 



const About = () => {

  return (
    <div id="about" className="about-container pb-12">
      
      <div className="about-grid grid grid-cols-5 md:grid-cols-12 grid-rows-auto md:grid-rows-auto max-h-[850px]  ">

        {/* Title Section */}
        <div className="title row-start-1 items-start col-span-5 md:col-start-2 md:col-span-4 2xl:pt-28">
          <h1 className="about-title text-center md:text-right text-[50px] md:text-[100px] 2xl:text-[125px] leading-[50px] md:leading-[100px] mt-10">
            ABOUT <br /> ME
          </h1>
          <p></p>
        </div>

        {/* Intro Text */}
        <div className="intro-text row-start-2 col-start-2 row-span-2 col-span-7 md:col-span-6 md:col-start-6 2xl:col-span-5 md:row-start-1 md:pb-2 lg:pb-3 2xl:pb-0 ">
          <p className="text-left text-[20px] md:text-[25px] lg:text-[35px] 2xl:text-[40px]  leading-8 2xl:leading-10">
            A hands-on, solution-oriented professional. Willing to keep growing.
          </p>
        </div>
        

        <div className="icons-container col-start-7 row-start-4 row-span-5 mt-16 mr-4 md:col-start-5 md:mt-10 md:items-left   ">
        {/*Multi icon */}
        <div className="icons icon4 row-start-5 col-span-1 md:col-span-3 2xl:w-[100px] ">
          <img src={Icon4} alt="Icon4" />
        </div>
          {/*Eye icon */}
        <div className="icons icon1 row-start-5 col-span-2 md:col-span-3 xl:pb-2 2xl:w-[100px] ">
          <img src={Icon1} alt="Icon1" />
        </div>
          {/*CLock icon */}
        <div className="icons icon2 row-start-5 col-span-3 md:col-span-3 xl:pb-2 2xl:w-[100px]">
          <img src={Icon2} alt="Icon2" />
        </div>
           {/* communication icon*/}
        <div className="icons icon3 row-start-5 col-span-4 md:col-span-3 xl:pb-2 2xl:w-[100px]">
          <img src={Icon3} alt="Icon3" />
        </div>
        </div>


        

        {/* Skills Section: */}
        <div className="skills col-start-2  row-start-4 col-span-5 md:col-span-12 md:col-start-6">
          <p className="text-left text-[18px] md:text-[25px] leading-8 md:leading-[35px] 2xl:leading-[46px] mt-3 2xl:text-[40px] ">
            I bring knowledge and experience in:
            <br/>
            <br /> • Teamwork
            <br /> • Learning
            <br /> • Psychology
            <br /> • Time management
            <br /> • Communication skills
            <br /> • Leading projects
            <br /> • Customer service
          
          </p>
        </div>

        {/* Footer Text */}
        <div className="footer-text row-start-8 col-start-2 col-span-6 md:col-span-6 text-right mr-8 md:mr-8 2xl:mr-60 md:row-start-8 md:mt-10 ">
          <p className="2xl:text-[30px]" >I ALSO LIKE COFFEE, DOGS AND READING 
  <svg
    xmlns="http://www.w3.org/2000/svg"
    fill="black"
    viewBox="0 0 24 24"
    strokeWidth="1.5"
    stroke="currentColor"
    className="ml-2 pb-1 inline w-6 h-6"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
    />
  </svg>
</p>
          
        </div>

      </div>
    </div>
  );
  };
  
  export default About;