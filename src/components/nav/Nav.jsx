import React,{useState} from "react";
import "./nav.css";
import {AiFillHome} from 'react-icons/ai'
import {SiAboutdotme} from 'react-icons/si'
import {GiSkills} from 'react-icons/gi'
import {FaUserGraduate} from 'react-icons/fa'
import {AiOutlineContacts} from'react-icons/ai';
import {BsBriefcaseFill} from 'react-icons/bs'
const Nav = () => {
  const [activenav,setactivenav] = useState('#')
  return (
    <nav>
      <a href="#head"  onClick={()=> setactivenav('#') }className={activenav === '#' ? 'active' : ''} ><AiFillHome/></a>
      <a href="#aboutme" onClick={()=> setactivenav('#aboutme ') }  className={activenav === '#aboutme' ? 'active' : ''}><SiAboutdotme/></a>
      <a href="#skills"  onClick={()=> setactivenav('#skills ') }  className={activenav === '#skills' ? 'active' : ''}><GiSkills/></a>
      <a href="#education"  onClick={()=> setactivenav('#education ') }  className={activenav === '#education ' ? 'active' : ''}><FaUserGraduate/></a>
      <a href="#experience"  onClick={()=> setactivenav('#experience ') }  className={activenav === '#experience' ? 'active' : ''}><BsBriefcaseFill/></a>
      <a href="#contact"  onClick={()=> setactivenav('#contact ') }  className={activenav === '#contact ' ? 'active' : ''}><AiOutlineContacts/></a>
    </nav>
  );
};

export default Nav;
