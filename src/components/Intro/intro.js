import React from 'react'
import { Link } from 'react-scroll';
import './intro.css';
import bg from '../../assets/image.png';
import btnImg from '../../assets/hireme.png';
const Intro = () => {
  return (
    <section id="intro">
       <div className="introContent">
     
     <span className="hello">Hello,</span>
     <span className="introText">I'm  
     <span className="introName">  Srinadh
        </span><br /> Full Stack Developer</span>

       <p className="introPara">I am a skilled Full Stack Developer with experience in creating <br />
       visually appealing and user friendly websites </p>
        <Link><button className='btn'><img src={btnImg} alt="Hire Me" className="btnImg" />Hire Me</button></Link>
       </div>
      <img src={bg} alt="Profile" className="bg" />
       
    </section>
  )
}

export default Intro;
