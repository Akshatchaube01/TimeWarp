import React, { useEffect, useMemo } from "react";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadFull } from "tsparticles";
import Tilty from "react-tilty";
import "../components/AboutUs.css";
import aboutImage from "../assets/cartoon.png";
import carImage from "../assets/1 1.png";
import Himank from "../assets/Himank.jpg";
import Akshat from "../assets/Akshat.jpg";
import Shreya from "../assets/Shreya.jpg";
import Naman from "../assets/Naman.jpg";
import Footer from './Footer';
// import Tilty from "react-tilty";
import { particles } from "./Particles.jsx";

const AboutUs = () => {

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    });
  }, []);

  const teamMembers = [
    {
      memberName: "Akshat Chaube",
      imgSrc: Akshat,
      alt: "Chaube ki pic",
    },
    {
      memberName: "Himank Gupta",
      imgSrc: Himank,
      alt: "Gee ki pic",
    },
    {
      memberName: "Naman Gupta",
      imgSrc: Naman,
      alt: "Morgan ki pic",
    },
    {
      memberName: "Shreya Prasad",
      imgSrc: Shreya,
      alt: "Gee ki dost ki pic",
    },
  ];

  const about = {
    topTxt: `"At Timewarp, we're passionate about understanding history, embracing the present, and envisioning the future. Our team is dedicated to bringing you engaging content that takes you on a journey through time.
    we're not just enthusiasts; we're fervent believers in the power of history to illuminate our understanding of the world around us. Stemming from our roots at VIT Vellore, our team of four individuals is deeply committed to unraveling the mysteries of the past, navigating the complexities of the present, and charting a course towards a brighter future."`,

    bottomTxt: `We believe that history is more than just a series of dates and facts; it's a vibrant tapestry of stories waiting to be discovered. Our mission is to unravel these stories and bring them to life in ways that captivate and inspire audiences of all ages.`,
  };

  const vision = {
    topTxt:
      "With innovation as our compass and authenticity as our guide, we are committed to delivering engaging content and immersive experiences that bridge the gap between the past, present, and future. Our mission is to empower individuals to engage with history in meaningful and transformative ways, empowering them to become stewards of their own narratives and architects of a brighter tomorrow.",
    bottomTxt:
      "Through our passion for exploration and discovery, we seek to inspire curiosity and ignite imaginations, inviting individuals to embark on a journey through time where they can uncover hidden treasures, explore diverse cultures, and witness the remarkable tapestry of human experience.",
  };

  return (
    <div className="about-container md:m-16 mt-8 p-8">
      <Particles id="tsparticles" options={useMemo(() => particles, [])} />
      <div className="about-content flex items-center mb-24 gap-x-12">
        <div className="text-container flex-1">
          <h1 className="rounded-md about-title text-4xl text-center italic font-bold p-2 mb-8 mt-[100px] bg-gradient-to-r from-sky-500">
            About Us
          </h1>
          <p className="about-text italic text-lg font-light text-justify mb-4">
            {about.topTxt}
          </p>
          <p className="about-text italic text-lg font-light text-justify">
            {about.bottomTxt}
          </p>
        </div>
        <div className="image-container image-container-one mr-8">
         <Tilty> <img
            src={aboutImage}
            alt="About us"
            className="ml-8 shadow-sm shadow-sky-600 about-image w-[500px] rounded-full hover:scale-[1.1] transition"
          />
          </Tilty>
        </div>
      </div>

      <div className="our-vision flex mb-28">
        <div className="image-container image-container-two">
          <Tilty><img
            src={carImage}
            alt="About us"
            className=" shadow-sm shadow-sky-600 about-image w-[500px] rounded-full hover:scale-[1.1] transition"
          /></Tilty>
        </div>
        <div className="text-container mx-auto flex-1 text-left">
          <h1 className="about-title rounded-md text-4xl text-center italic font-bold p-2  mb-8 bg-gradient-to-l from-sky-500">
            Our Vision
          </h1>
          <p className="about-text italic text-lg font-light text-justify">
            {vision.topTxt}
          </p>
          <p className="about-text italic text-lg font-light text-justify">
            {vision.bottomTxt}
          </p>
        </div>
      </div>

      <div className="w-full">
        <section className="our-team-section max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
          <div className="rounded-md about-title text-4xl text-center italic font-bold p-2 mb-[5%] mt-[100px] bg-gradient-to-r from-sky-500 ">
            <h1 className="our-team-heading font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
              Our Team
            </h1>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-3 ">
            {teamMembers.map((member, index) => (
              <Tilty key={index} className="w-full bg-sky-900/50 backdrop-blur-sm shadow-sky-100 rounded-lg shadow-lg p-12 flex flex-col justify-center items-center" glare scale={1.05} maxGlare={0.5}>
                <div className="mb-8">
                  <img className="object-center object-cover rounded-full h-36 w-36" src={member.imgSrc} alt={member.alt} />
                </div>
                <div className="text-center">
                  <p className="text-xl text-white font-bold mb-2">{member.memberName}</p>
                </div>
              </Tilty>
            ))}
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
