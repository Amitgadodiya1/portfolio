import React from "react";
import { FaSchool } from "react-icons/fa";
import { GiGraduateCap } from "react-icons/gi";
import { FaUniversity } from "react-icons/fa";
import "./education.css";
const Education = () => {
  return (
    <section id="education">
      <h5>What Qualification I have</h5>
      <h2>My Qualification</h2>
      <div className="container qualify__container">
        <div className="container__School">
          <FaSchool className="qualify__details-icon" />
          <h3>High School</h3>
          <div className="qualify__content">
            <article className="qualify__content">
              <h2>Saraswati Vidyalaya School</h2>
              <h5>Nagpur</h5>
              <h3>2014 - 2015</h3>
            </article>
          </div>
        </div>
        <div className="container__backend">
          <FaUniversity className="qualify__details-icon" />
          <h3>Junior College</h3>
          <div className="qualify__content">
            <h2>Saraswati Vidyalaya Jr. College</h2>
            <h5>Nagpur</h5>
            <h3>2015 - 2017</h3>
          </div>
        </div>
        <div className="container__Engg">
          <GiGraduateCap className="qualify__details-icon" />
          <h3>Bachlor's Degree</h3>
          <div className="qualify__content">
            <h2>G.H. Raisoni College Of Engineering</h2>
            <h5>Nagpur</h5>
            <h3>2017 - 2021</h3>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
