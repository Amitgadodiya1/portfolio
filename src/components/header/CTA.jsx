import React from "react";
import Cv from "../../assets/AmitGadodiya2023.pdf";
const CTA = () => {
  return (
    <div className="cta">
      <a href={Cv} className="btn">
        {" "}
        Download CV
      </a>
      <a href="#contact" className="btn btn-primary">
        {" "}
        Lets Talk
      </a>
    </div>
  );
};

export default CTA;
