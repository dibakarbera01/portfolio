// eslint-disable-next-line no-unused-vars
import React from 'react'
import './Hero.css'
import profile_img from '../../assets/me2.jpeg'
import AnchorLink from 'react-anchor-link-smooth-scroll'
import Resume from '../../assets/resume.pdf'
const data = {
  "Heading": "Hi I'm Dibakar Bera"
}

const Hero = () => {
  const onButtonClick = () => {
    fetch(Resume).then((response) => {
      response.blob().then((blob) => {
        const fileURL =
          window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "DibakarResume.pdf";
        alink.click();
      });
    });
  };
  return (
    <div id='home' className='hero'>
      <img src={profile_img} alt="" className='profile-img' />
  
      
      <h1><span>{data.Heading}</span> Full Stack Developer based in India.</h1>
      <p>I am a Full developer from Haldia, India with 1+ years of experience in multiple freelance project and open source contribution.</p>
      <div className="hero-action">
        <div className="hero-connect"><AnchorLink className='anchor-link' offset={50} href='#contact'>Connect with me</AnchorLink></div>
        <div className="hero-resume" onClick={onButtonClick}>My resume</div>
      </div>
    </div>
  )
}

export default Hero
