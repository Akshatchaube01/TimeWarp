import React from 'react';
import '../components/AboutUs.css';
import aboutImage from '../assets/cartoon.png';
import carImage from '../assets/1 1.png';
import Himank from '../assets/Himank.jpg';
import Akshat from '../assets/Akshat.jpg';
import Shreya from '../assets/Shreya.jpg';
import Naman from '../assets/Naman.jpg';

const AboutUs = () => {

  const teamMembers = [
    {
      memberName: "Akshat Chaube",
      imgSrc: Akshat,
      alt: "Chaube ki pic"
    },
    {
      memberName: "Himank Gupta",
      imgSrc: Himank,
      alt: "Gee ki pic"
    },
    {
      memberName: "Naman Gupta",
      imgSrc: Naman,
      alt: "Morgan ki pic"
    },
    {
      memberName: "Shreya Prasad",
      imgSrc: Shreya,
      alt: "Gee ki dost ki pic"
    }
  ]

  const about = {
    topTxt: `"At Timewarp, we're passionate about understanding history, embracing the present, and envisioning the future. Our team is dedicated to bringing you engaging content that takes you on a journey through time.
    we're not just enthusiasts; we're fervent believers in the power of history to illuminate our understanding of the world around us. Stemming from our roots at VIT Vellore, our team of four individuals is deeply committed to unraveling the mysteries of the past, navigating the complexities of the present, and charting a course towards a brighter future."`,

    bottomTxt: `We believe that history is more than just a series of dates and facts; it's a vibrant tapestry of stories waiting to be discovered. Our mission is to unravel these stories and bring them to life in ways that captivate and inspire audiences of all ages.`
  }


  const vision = {
    topTxt: "With innovation as our compass and authenticity as our guide, we are committed to delivering engaging content and immersive experiences that bridge the gap between the past, present, and future. Our mission is to empower individuals to engage with history in meaningful and transformative ways, empowering them to become stewards of their own narratives and architects of a brighter tomorrow.",
    bottomTxt: "Through our passion for exploration and discovery, we seek to inspire curiosity and ignite imaginations, inviting individuals to embark on a journey through time where they can uncover hidden treasures, explore diverse cultures, and witness the remarkable tapestry of human experience."
  }

  return (
    <div className="about-container md:m-16 mt-8 p-8">
      <div className="about-content flex items-center mb-24 gap-x-12">
        <div className="text-container flex-1">
          <h2 className="rounded-md about-title text-4xl text-center italic font-bold p-2 mb-8 mt-[100px] 
            bg-gradient-to-r from-sky-500">
              About Us
          </h2>
          <p className="about-text italic text-lg font-light text-justify mb-4">
            {about.topTxt}
          </p>
          <p className="about-text italic text-lg font-light text-justify">
            {about.bottomTxt}
          </p>
        </div>
        <div className="image-container mr-8">
          <img src={aboutImage} alt="About us" 
               className="ml-8 shadow-sm shadow-sky-200 about-image w-[500px] rounded-full hover:scale-[1.1] transition"
          />
        </div>
      </div>

      {/* Our Vision section */}
      <div className="our-vision flex mb-28">
        <div className="image-container">
          <img src={carImage} alt="About us" className="mr-8 shadow-sm 
             shadow-sky-200 about-image w-[500px] rounded-full transition" />
        </div>
        <div className="text-container mx-auto flex-1 text-left">
          <h2 className="about-title rounded-md text-4xl text-center italic font-bold p-2  mb-8 
            bg-gradient-to-l from-sky-500">
              Our Vision
          </h2>
          <p className="about-text italic text-lg font-light text-justify">
            {vision.topTxt}
          </p >
          <p className="about-text italic text-lg font-light text-justify">
            {vision.bottomTxt}
          </p>
        </div>
      </div>
      <div className='bg-gradient-to-t from-sky-900 py-4 bg-opacity-15 rounded-lg'>
        <div className='middle-boy'>
        <h1 className='text-xl text-center'>Our Team - <p className='font-bold text-3xl'>{"WeShowSpeed"}</p></h1>
        </div>

        <div className="team-container flex flex-wrap justify-center m-8 ">
          {
            teamMembers.map((member, index)=>(
              <div key={index} className="team-member hover:scale-[1.1] md:w-1/4">
                <img src={member.imgSrc} 
                  alt={member.alt}
                  className="team-image rounded-full aspect-square w-2/3 mx-auto transition duration-100"
                />
                <p className='text-center font-light mt-8 text-xl'>{member.memberName}</p>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  );
}

export default AboutUs;
