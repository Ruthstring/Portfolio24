import React from "react";
import Icon1 from "../assets/eye_iconAbout.svg"
 import Icon2 from "../assets/watch_iconAbout.svg"
import Icon3 from "../assets/com_iconAbout.svg"
import Icon4 from "../assets/multi_iconAbout.svg" 





const About = () => {

  return (
    <div className="about-container">
      {/* Define the grid with one column on phones and 12 columns on larger screens */}
      <div className="about-grid grid grid-cols-5 md:grid-cols-12 grid-rows-auto md:grid-rows-auto h-screen 2xl:h-[80vh] ">

        {/* Title Section: This will take the full row on both phone and desktop */}
        <div className="title row-start-1 items-start col-span-5 md:col-span-12 2xl:pt-28">
          <h1 className="about-title text-center md:text-right text-[50px] md:text-[100px] 2xl:text-[125px] leading-[50px] md:leading-[100px] mt-10">
            ABOUT <br /> ME
          </h1>
        </div>

        {/* Intro Text: Spans the full row below the title */}
        <div className="intro-text row-start-2 col-start-2 row-span-2 col-span-7 md:col-span-12">
          <p className="text-left text-[20px] md:text-[30px] 2xl:text-[40px] leading-8 md:leading-10">
            A hands-on, solution-oriented professional. Willing to keep growing.
          </p>
        </div>
        

        <div className="icons-container col-start-7 row-start-4 row-span-5 mt-8 mr-4 ">
        <div className="icons icon4 row-start-5 col-span-1 md:col-span-3">
          <img src={Icon4} alt="Icon4" />
        </div>

        <div className="icons icon1 row-start-5 col-span-2 md:col-span-3">
          <img src={Icon1} alt="Icon1" />
        </div>

        <div className="icons icon2 row-start-5 col-span-3 md:col-span-3">
          <img src={Icon2} alt="Icon2" />
        </div>

        <div className="icons icon3 row-start-5 col-span-4 md:col-span-3">
          <img src={Icon3} alt="Icon3" />
        </div>
        </div>


        {/* Icons (stacked vertically on small screens, in grid layout on larger screens) */}
        {/* <div className="icons icon4 row-start-5 col-span-1 md:col-span-3">
          <img src={Icon4} alt="Icon4" />
        </div>

        <div className="icons icon1 row-start-5 col-span-2 md:col-span-3">
          <img src={Icon1} alt="Icon1" />
        </div>

        <div className="icons icon2 row-start-5 col-span-3 md:col-span-3">
          <img src={Icon2} alt="Icon2" />
        </div>

        <div className="icons icon3 row-start-5 col-span-4 md:col-span-3">
          <img src={Icon3} alt="Icon3" />
        </div> */}

        {/* Skills Section: Full row on both phone and desktop */}
        <div className="skills col-start-2  row-start-4 col-span-5 md:col-span-12">
          <p className="text-left text-[18px] md:text-[30px] leading-8 md:leading-[30px] 2xl:leading-[50px] mt-3">
            I bring knowledge and experience in:
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
        <div className="footer-text row-start-8 col-start-2 col-span-6 md:col-span-12 text-right mr-8">
          <p>I ALSO LIKE COFFEE, DOGS AND READING</p>
        </div>

      </div>
    </div>
  );
    // return (
    //   <div className="about-container">
    //     <div className="about-grid gird grid-cols-1 grid-rows-[auto] md:grid-cols-12 h-screen 2xl:h-[80vh] ">

    //       <div className="title 2xl:pt-28">
    //         <h1 className="about-title grid-rows-1 text-right md:text-[100px]  2xl:text-[125px] leading-[100px]">ABOUT <br /> ME</h1>
    //       </div>

    //       <div className="intro-text">
    //         <p className="text-left grid-rows-2 md:text-[30px] 2xl:text-[40px] leading-10 ">A hands-on, solution oriented professional.<br/> Willing to keep growing.</p>
    //       </div>

    //       <div className="icon4 grid-rows-4 col-span-1 md:col-span-3" > <img  src={Icon4} /></div>
    //       {/* <div className="icons "> */}
    //         <div className="icon1 "><img className="" src={Icon1} /></div>
    //         <div className="icon2"><img src={Icon2} /> </div>
    //         <div className="icon3"><img src={Icon3} /> </div>
    //       {/* </div> */}
    //       <div className="skills">
    //         <p className="text-left grid-rows-3 2xl:text-[30px] md:leading-[30px] 2xl:leading-[50px]" >
    //           I bring knowledge and experience in:
             
    //           <br /> • Teamwork
    //           <br /> • Learning
    //           <br /> • Psichology
    //           <br /> • Time management
    //           <br /> • Comunication skills
    //           <br /> • Leading projects
    //           <br /> • Costumer service
    //           </p>
           
    //       </div>
    //       <div className="footer-text">
    //         <p>I ALSO LIKE COFFEE, DOGS AND READING</p>
    //       </div>
    //     </div>
    //   </div>
    // );
  };
  
  export default About;