import React, { Fragment } from "react";
import "./DemoSection.css";
import { technologyExplanations } from "./DemoConstants";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandThreejs } from "react-icons/tb";
import { FaUnity, FaVrCardboard } from "react-icons/fa";
import { SiWebgl } from "react-icons/si";

const DemoSection = () => {
  const icons = [
    <RiReactjsLine key="react" />,
    <TbBrandThreejs key="three" />,
    <FaUnity key="unity" />,
    <SiWebgl key="webgl" />,
    <FaVrCardboard key="arvr" />,
  ];

  return (
    <div className="demo-container md:px-32">
      <h2 className="text-5xl font-bold my-16">Demo Section</h2>
      <div className="md:w-2/3 mx-auto">
        <div
          className="video-container p-2 md:p-6 my-8 bg-gradient-to-b from-black to-sky-900 via-sky-600
                rounded-2xl shadow-[0px_5px_25px_2px_#2a4365] "
        >
          <iframe
            src="https://www.youtube.com/embed/o9pNopC1BMU?autoplay=1&loop=1&playlist=o9pNopC1BMU&rel=0"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowfullscreen
            className="mx-auto rounded-2xl"
          ></iframe>
        </div>
        <p className="demo-description font-thin text-center">
          Take a sneak peek into our time-traveling adventures! Explore
          simulations, historical reenactments, and futuristic scenarios that
          will transport you through the ages.
        </p>
      </div>
      <div className="technology-explanation">
        {/* Horizontal Line for separation */}
        <hr className="h-0.05 bg-white my-12 opacity-30" />

        {/* Technology Used */}
        <h2 className="font-bold text-4xl mb-6 pt-6">Technology Used</h2>

        <div className="mx-auto px-4 max-w-[69rem] grid grid-cols-1 md:gap-10 md:px-2 lg:grid-cols-2 lg:w-[2/3]">
          {/* Mapping Data from DemoConstant.js into cards */}
          {technologyExplanations.map((explanation, index) => (
            // Cards
            <div
              key={index}
              className={`max-w-lg mx-auto my-16 md:my-8 overflow-hidden
            bg-neutral-100 rounded-lg hover:scale-105 transition
            ${index === 4 ? "lg:mx-[55%] md:w-full " : ""}`}
            >
              <div className="flex items-center justify-center bg-sky-700 py-4">
                <div className="text-3xl text-neutral-200">{icons[index]}</div>
              </div>
              <div className="px-6 py-4">
                <h1 className="font-bold text-xl text-gray-800 mb-2">
                  {explanation.title}
                </h1>
                <p className="text-gray-700">{explanation.context}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="resource-column bg-gradient-to-b from-black to-sky-900 rounded-xl">
        <p>
          <b>Resources</b>
        </p>
        <ul>
          <li>
            <span className="logos--unity"></span>
            <a href="https://docs.unity3d.com/Manual/index.html">Unity Docs</a>
          </li>
          <li>
            <span className="mdi--script"></span>
            <a href="https://docs.unity3d.com/ScriptReference/">
              Script Reference
            </a>
          </li>
          <li>
            <span className="icon-park-outline--api"></span>
            <a href="http://www.google.com">API Reference</a>
          </li>
          <li>
            <span className="logos--unity"></span>
            <a href="https://unity.com/learn/get-started">Unity Learning</a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default DemoSection;
