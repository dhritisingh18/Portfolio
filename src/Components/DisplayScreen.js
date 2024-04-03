import React from "react";
import Navbar from "./Navbar";
import './DisplayScreen.css';
import { Home } from "./Home.js";
import About from "./About.js";
import { Skills } from './Skills';
import { Projects } from "./Projects.js";
import { Contact } from "./Contact.js";

// import { Skill } from "./Skill.js";
const scrollToAbout = () => {
    // Logic to scroll to the About section
    // For example:
    const aboutSection = document.getElementById('about');
    if (aboutSection) {
      window.scrollTo({
        top: aboutSection.offsetTop,
        behavior: 'smooth',
      });
    }
  };
export function DisplayScreen(){
    return(
     
        <div className="display-container">
            <Navbar />
            <div className="content-container">
                <Home  />
                <About  />
                <Skills  />   
                <Projects />
                <Contact />

            </div>
            
        </div>
       
    )
}