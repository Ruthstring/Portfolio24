import React from "react";
import Icon1 from "../assets/eye_iconAbout.svg"
 import Icon2 from "../assets/watch_iconAbout.svg"
import Icon3 from "../assets/com_iconAbout.svg"
import Icon4 from "../assets/multi_iconAbout.svg" 






  //original one:



const About = () => {
    return (
      <div className="about-container">
        <div className="about-grid h-screen">
          <div className="title">
            <h1 className="about-title text-right md:text-[100px]  2xl:text-[125px] leading-[100px]">ABOUT <br /> ME</h1>
          </div>
          <div className="intro-text">
            <p className="text-left md:text-[30px] 2xl:text-[40px] leading-10 ">A hands-on, solution oriented professional.<br/> Willing to keep growing.</p>
          </div>
          <div className="icon4" > <img  src={Icon4} /></div>
          {/* <div className="icons "> */}
            <div className="icon1 "><img className="" src={Icon1} /></div>
            <div className="icon2"><img src={Icon2} /> </div>
            <div className="icon3"><img src={Icon3} /> </div>
          {/* </div> */}
          <div className="skills">
            <p className="text-left 2xl:text-[30px] md:leading-[30px] 2xl:leading-[50px]" >
              I bring knowledge and experience in:
             
              <br /> • Teamwork
              <br /> • Learning
              <br /> • Psichology
              <br /> • Time management
              <br /> • Comunication skills
              <br /> • Leading projects
              <br /> • Costumer service
              </p>
           
          </div>
          <div className="footer-text">
            <p>I ALSO LIKE COFFEE, DOGS AND READING</p>
          </div>
        </div>
      </div>
    );
  };
  
  export default About;