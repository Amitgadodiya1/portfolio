import React from "react";
import "./about.css";
import { FaAward } from "react-icons/fa";
import AboutmeImg from "../../assets/aboutme.jpg";
import { FaLanguage } from "react-icons/fa";
import { FiActivity } from "react-icons/fi";
const About = () => {
  return (
    <section id="aboutme">
      <h5>Go to Know </h5>
      <h2>About ME</h2>
      <div className="container about__container">
        <div className="about__me">
          <div className="about_me_img">
            <img src={AboutmeImg} alt="myimage" />
          </div>
        </div>
        <div className="about__content">
          <div className="about__cards">
            <article className="about__card">
              <FaAward className="award__icon" />
              <h5>Experience</h5>
              <small>2+ years </small>
            </article>
            <article className="about__card">
              <FaLanguage className="award__icon" />
              <h5>Languages</h5>
              <small>Hindi , English </small>
            </article>
            <article className="about__card">
              <FiActivity className="award__icon" />
              <h5>Hobbies</h5>
              <small>Football Dancing Standup </small>
            </article>
          </div>
          <p>
            Problem solver and strong communicator eager to prove my value and
            talent at an emerging company. Motivated to advance and expand my
            skill set through targeted mentorship and challenging projects.
            Problem solver and strong communicator eager to prove my value and
            talent at an emerging company. Motivated to advance and expand my
            skill set through targeted mentorship and challenging projects.
          </p>

          <a href="#contact" className="btn btn-primary">
            {" "}
            Lets Talk
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
