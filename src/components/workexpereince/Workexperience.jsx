import React from "react";
import "./workexperience.css";
import WiproIcon from "../../assets/wiproicon.png";
import CuboisIcon from "../../assets/cubois.png";
const Workexperience = () => {
  return (
    <section id="experience">
      <h5>What Experience I have</h5>
      <h2>My Work Experience</h2>

      <div className="container experience__container">
        <div className="container__Wipro">
          {/* <FaSchool className="experience__details-icon" /> */}
          <div className="company__details-icon">
            <img src={WiproIcon} alt="wipro" />
          </div>
          <h3>Wipro Technologies</h3>
          <div className="experience__content">
            <h2>Project Engineer</h2>
            <h5>Banglore</h5>
            <h3>2021 - Present</h3>
          </div>
        </div>
        <div className="container__Cubois">
          {/* <FaUniversity className="experience__details-icon" /> */}
          <div className="company__details-icon ">
            <img
              src={CuboisIcon}
              alt="cubois"
              
            />
          </div>
          <h3>Cubois Technology Pvt Ltd.</h3>
          <div className="experience__content">
            <h2>React /React Native Appication and Website Developer</h2>
            <h5>Pune</h5>
            <h3>Nov/2020 - Apr/2021 </h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workexperience;
