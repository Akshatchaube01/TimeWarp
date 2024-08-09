import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import axios from "axios";
import React, { useEffect, useMemo, useState } from "react";
import Tilty from "react-tilty";
import { loadFull } from "tsparticles";
import carImage from "../assets/1 1.png";
import Akshat from "../assets/Akshat.jpg";
import aboutImage from "../assets/cartoon.png";
import Himank from "../assets/Himank.jpg";
import Naman from "../assets/Naman.jpg";
import Shreya from "../assets/Shreya.jpg";
import "../components/AboutUs.css";
import Footer from "./Footer";
// import Tilty from "react-tilty";
import BackToTop from "./BottomToTop";
import { particles } from "./Particles.jsx";

const AboutUs = () => {
  const [contributors, setContributors] = useState([]);

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadFull(engine);
    });
  }, []);

  useEffect(() => {
    const fetchContributors = async () => {
      try {
        const response = await axios.get(
          "https://api.github.com/repos/Akshatchaube01/TimeWarp/contributors"
        );
        setContributors(response.data);
      } catch (error) {
        console.error("Error fetching contributors:", error);
      }
    };

    fetchContributors();
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
    topTxt: `"At Timewarp, we are passionate about understanding history, embracing the present, and envisioning the future. Our team is dedicated to bringing you engaging content that takes you on a journey through time.
    we're not just enthusiasts; we're fervent believers in the power of history to illuminate our understanding of the world around us. Stemming from our roots at VIT Vellore, our team of four individuals is deeply committed to unraveling the mysteries of the past, navigating the complexities of the present, and charting a course towards a brighter future."`,

    bottomTxt: `We believe that history is more than just a series of dates and facts; it's a vibrant tapestry of stories waiting to be discovered. Our mission is to unravel these stories and bring them to life in ways that captivate and inspire audiences of all ages.`,
  };

  const vision = {
    topTxt:
      "With innovation as our compass and authenticity as our guide, we are committed to delivering engaging content and immersive experiences that bridge the gap between the past, present, and future. Our mission is to empower individuals to engage with history in meaningful and transformative ways, empowering them to become stewards of their own narratives and architects of a brighter tomorrow.",
    bottomTxt:
      "Through our passion for exploration and discovery, we seek to inspire curiosity and ignite imaginations, inviting individuals to embark on a journey through time where they can uncover hidden treasures, explore diverse cultures, and witness the remarkable tapestry of human experience.",
  };
  const handlehover = (e) => {
    e.currentTarget.querySelector(".hovereffect").style.transform = "scale(1)";
  };
  const hanleleave = (e) => {
    e.currentTarget.querySelector(".hovereffect").style.transform = "scale(0)";
  };
  return (
    <div className="about-container md:m-16 mt-8 p-25 ">
      <Particles id="tsparticles" options={useMemo(() => particles, [])} />
      <BackToTop />
      <div className="about-content  items-center mb-24 ">
        <span className="image-container image-container-one grid justify-center">
          <Tilty>
            <img
              src={aboutImage}
              alt="About us"
              className="ml-10 shadow-sm shadow-sky-600 about-image w-[350px] rounded-full hover:scale-[0.9] transition"
            />
          </Tilty>
        </span>
        <div className="text-container flex-1">
          <h1 className="rounded-md about-title text-4xl text-center italic font-bold p-2 mb-8 mt-[100px] bg-gradient-to-r from-sky-500">
            About Us
          </h1>

          <p className="about-text italic text-lg font-light text-justify mb-4 p-6">
            {about.topTxt}
          </p>
          <p className="about-text italic text-lg font-light text-justify p-6">
            {about.bottomTxt}
          </p>
        </div>
      </div>

      <div className="our-vision  mb-28 ">
        <div className="image-container image-container-two grid justify-center ml-25">
          <Tilty>
            <img
              src={carImage}
              alt="About us"
              className="shadow-sm shadow-sky-600 about-image w-[350px] rounded-full hover:scale-[0.9] transition mb-10"
            />
          </Tilty>
        </div>
        <div className="text-container mx-auto flex-1 text-left">
          <h1 className="about-title rounded-md text-4xl text-center italic font-bold p-2 mb-8 bg-gradient-to-l from-sky-500">
            Our Vision
          </h1>
          <p className="about-text italic text-lg font-light text-justify p-6">
            {vision.topTxt}
          </p>
          <p className="about-text italic text-lg font-light text-justify p-6">
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
              <Tilty
                key={index}
                className="w-full bg-sky-900/50 backdrop-blur-sm shadow-sky-100 rounded-lg shadow-lg p-12 flex flex-col justify-center items-center"
                glare
                scale={1.05}
                maxGlare={0.5}
                onMouseEnter={handlehover}
                onMouseLeave={hanleleave}
              >
                <div className="hovereffect absolute bg-black/50 w-full h-full flex justify-center flex-col items-center gap-3 scale-0">
                  <div className="flex flex-col items-center">
                    <p className="text-xl text-white font-bold">
                      {member.memberName}
                    </p>
                    <p className="text-xl text-white font-thin mb-2">Member</p>
                  </div>
                  <p className="text-xl text-gray-400 font-semibold mb-2">
                    Tech Stack
                  </p>
                  <div className="flex gap-8 justify-center items-center flex-wrap">
                    <a href="https://google.com" target="_blank">
                      <FontAwesomeIcon
                        icon={faLinkedin}
                        size="lg"
                        className="text-white text-3xl"
                      />
                    </a>
                    <a href="https://github.com" target="_blank">
                      {" "}
                      <FontAwesomeIcon
                        icon={faGithub}
                        size="lg"
                        className="text-white text-3xl"
                      />
                    </a>
                  </div>
                </div>
                <div className="mb-8">
                  <img
                    className="object-center object-cover rounded-lg h-40 w-40"
                    src={member.imgSrc}
                    alt={member.alt}
                  />
                </div>
                <div className="text-center"></div>
              </Tilty>
            ))}
          </div>
        </section>
      </div>

      {/* OUR CONTRIBUTORS */}
      <div className="w-full">
        <section className="our-team-section max-w-6xl mx-auto px-4 sm:px-6 lg:px-4 py-12">
          <div className="rounded-md about-title text-4xl text-center italic font-bold p-2 mb-[5%] mt-[100px] bg-gradient-to-r from-sky-500 ">
            <h1 className="our-team-heading font-bold text-3xl md:text-4xl lg:text-5xl font-heading text-white">
              Our Contributors
            </h1>
          </div>
          <div className="marquee">
            <div className="marquee-content">
              {contributors.map((contributor, index) => (
                <Tilty
                  key={index}
                  className="inline-block bg-sky-900/50 backdrop-blur-sm shadow-sky-100 rounded-lg shadow-lg p-12 flex flex-col justify-center items-center m-2"
                  glare
                  scale={1.05}
                  maxGlare={0.5}
                >
                  <div className="mb-8">
                    <img
                      className="object-center object-cover rounded-full h-36 w-36"
                      src={contributor.avatar_url}
                      alt={contributor.login}
                    />
                  </div>
                  <div className="text-center">
                    <p className="text-xl text-white font-bold mb-2">
                      {contributor.login}
                    </p>
                  </div>
                </Tilty>
              ))}
            </div>
          </div>
        </section>
      </div>

      <Footer />
    </div>
  );
};

export default AboutUs;
