import React from 'react';
import './skills.css';
import UIDesign from '../../assets/ui-design.png';
import WebDesign from '../../assets/website-design.png';
import AppDesign from '../../assets/app-design.png';
const Skills = () => {
  return (
    
      <section id='skills'>
       <span className="skillTitle">What I do</span><span className="SkillDesc"> Hi, I'm Srinadh, a web design enthusiast who loves making websites look great and work smoothly.
       <br/> I use a bunch of cool tools like Java, HTML, CSS, and more to create awesome online experiences. Let's team up to bring your ideas to life on the web!


       
       </span>


            <div className="skillBar">
                <img src={AppDesign} alt="AppDesign" className="skillBarImg"/>
        <div className="skillBarText">
            <h2>Java</h2>
            <p>Java: Powering seamless web experiences through versatile programming and backend prowess.</p>
        </div>
            </div>

            <div className="skillBar">
                <img src={WebDesign} alt="Webdesign" className="skillBarImg"/>
        <div className="skillBarText">
            <h2>ReactJs</h2>
            <p>Transforming ideas into dynamic, responsive web interfaces with the power of ReactJs.</p>
        </div>
            </div>

            <div className="skillBar">
                <img src={UIDesign} alt="UIDesign" className="skillBarImg"/>

        <div className="skillBarText">
            <h2>AWS</h2>
            <p>Utilizing AWS for seamless, scalable cloud solutions that elevate web experiences.</p>
        </div>
            </div>


      </section>
    
  )
}

export default Skills;
