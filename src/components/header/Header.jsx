import React from "react";
import CTA from "./CTA";
import "./header.css";
import Mypic from '../../assets/self.png'
import Headersocials from "./Headersocials";
const Header = () => {
  return (
    <header id="head">
      <div className="container header__container">
        <h5>Hello. I' Am </h5>
        <h1>Amit Gadodiya</h1>
        <h5 className="text-light">Full Stack Developer</h5>
        <CTA/>
        <Headersocials/>
        <div className="me">
          <img src={Mypic} alt="Mypic" height={550} />
        </div>

        <a href="#contact" className="scroll_down"> Scroll Down</a>
      </div>
    </header>
  );
};

export default Header;
