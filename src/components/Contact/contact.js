import React, { useRef } from 'react'
import './contact.css';
import Walmart from '../../assets/walmart.png';
import Adobe from '../../assets/adobe.png';
import Microsoft from '../../assets/microsoft.png';
import Facebook from '../../assets/facebook.png';
import FacebookIcon from '../../assets/facebook-icon.png'
import TwitterIcon from '../../assets/twitter.png'
import YoutubeIcon from '../../assets/youtube.png'
import Instagram from '../../assets/instagram.png'
import emailjs from '@emailjs/browser';

const Contact = () => {

  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_bnelpdg', 'template_p4s9svr', form.current, 'VHRsNtgXPCk4joT3Za6h9')
      .then((result) => {
          console.log(result.text);
          e.target.reset();
          alert('Email Sent !')
      }, (error) => {
          console.log(error.text);
      });
  };


  return (
   <section id="contactPage">
    <div id="clients">
      <h1 className="contactPageTitle">My clients</h1>
      <p className="clientDesc">
        ............................................
      </p>
      <div className="clientImgs">
        <img src={Walmart} alt="Client" className="clientImg" />
        <img src={Adobe} alt="Client" className="clientImg" />
        <img src={Microsoft} alt="Client" className="clientImg" />
        <img src={Facebook} alt="Client" className="clientImg" />
      </div>
    </div>
    <div id="contact">
    <h1 className="contactPageTitle">Contact Me</h1>
    <span className="contactDesc">Please fill out the form below to reach out to me</span>
              
                <form className="contactForm" ref={form} onSubmit={sendEmail}>
                    <input type="text" className="name" placeholder='Your Name' name='your_name'/>
                    <input type="email" className="email" placeholder='Your Email' name='your_email'/>
                    <textarea className="msg" rows="5"name='message' placeholder='Your Message'></textarea>
                <button type='submit'value='Send' className='submitBtn'>Submit</button>
                <div className="links">
                    <img src={FacebookIcon} alt="FacebookIcon" className="link"/>
                    <img src={TwitterIcon}alt="Twitter" className="link"/>
                    <img src={YoutubeIcon} alt="Youtube" className="link"/>
                    <img src={Instagram} alt="Instagram" className="link"/>
                    
                </div>
                
                </form>
    </div>
   </section>
  )
}

export default Contact;
