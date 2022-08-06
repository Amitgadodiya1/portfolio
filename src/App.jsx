import React from "react";
import About from "./components/about/About";
import Header from "./components/header/Header";
import Nav from "./components/nav/Nav";
import Skills from "./components/skills/Skills";
import Education from "./components/education/Education";
import Workexperience from "./components/workexpereince/Workexperience";
import Contact from "./components/contact/Contact";
import Footer from "./components/footer/Footer";
const App = () => {
  return (
    <>
      <Header />
      <Nav />
      <About />
      <Skills />
      <Education />
      <Workexperience />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
