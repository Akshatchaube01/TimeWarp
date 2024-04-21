import React from 'react';
import '../components/AboutUs.css';
import aboutImage from '../assets/cartoon.png';
import carImage from '../assets/1 1.png';
import Himank from '../assets/Himank.jpg';
import Akshat from '../assets/Akshat.jpg';
import Shreya from '../assets/Shreya.jpg';
import Naman from '../assets/Naman.jpg';

const AboutUs = () => {
  return (
    <div className="about-container">
      <div className="about-content">
        <div className="text-container">
          <h2 className="about-title">About Us</h2>
          <p className="about-text">
            "At Timewarp, we're passionate about understanding history, embracing the present, and envisioning the future. Our team is dedicated to bringing you engaging content that takes you on a journey through time.
            we're not just enthusiasts; we're fervent believers in the power of history to illuminate our understanding of the world around us. Stemming from our roots at VIT Vellore, our team of four individuals is deeply committed to unraveling the mysteries of the past, navigating the complexities of the present, and charting a course towards a brighter future."
          </p>
          <p className="about-text">
          We believe that history is more than just a series of dates and facts; it's a vibrant tapestry of stories waiting to be discovered. Our mission is to unravel these stories and bring them to life in ways that captivate and inspire audiences of all ages.
          </p>
        </div>
        <div className="image-container">
          <img src={aboutImage} alt="About us" className="about-image" />
        </div>
      </div>

      {/* Our Vision section */}
      <div className="our-vision">
        <div className="image-container">
          <img src={carImage} alt="About us" className="about-image" />
        </div>
        <div className="text-container">
          <h2 className="about-title">Our Vision</h2>
          <p className="about-text">
          With innovation as our compass and authenticity as our guide, we are committed to delivering engaging content and immersive experiences that bridge the gap between the past, present, and future. Our mission is to empower individuals to engage with history in meaningful and transformative ways, empowering them to become stewards of their own narratives and architects of a brighter tomorrow.
          </p >
          <p className="about-text">
            Through our passion for exploration and discovery, we seek to inspire curiosity and ignite imaginations, inviting individuals to embark on a journey through time where they can uncover hidden treasures, explore diverse cultures, and witness the remarkable tapestry of human experience.
          </p>
        </div>
      </div>
      <div>
        <div className='middle-boy'>
        <h1>Our Team - "WeShowSpeed"</h1>
        </div>
        <div className="team-container">
          <div className="team-member">
            <img src={Akshat} alt="Chaube ki pic" className="team-image" />
            <p>Akshat Chaube</p>
          </div>
          <div className="team-member">
            <img src={Himank} alt="Gee ki pic" className="team-image" />
            <p>Himank Gupta</p>
          </div>
          <div className="team-member">
            <img src={Naman} alt="Morgan ki pic" className="team-image" />
            <p>Naman Gupta</p>
          </div>
          <div className="team-member">
            <img src={Shreya} alt="Gee ki dost ki pic" className="team-image" />
            <p>Shreya Prasad</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
