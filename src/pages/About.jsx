// src/pages/AboutPage.js
import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="flex flex-col p-4 md:p-8 bg-white text-black min-h-screen justify-center text-center font-roboto">
      <h1 className="text-3xl md:text-6xl font-bold mb-4 md:ml-40 text-center font-roboto">
        Paul Elisha
      </h1>

      <div className="flex flex-col md:flex-row items-center md:items-start md:justify-center">
        {/* Profile Image */}
        <div className="  md:w-64 md:h-auto mb-6 md:mb-0 md:mr-8">
          <img
            src="/paul.jpeg" // replace with the actual path to your image
            alt="Paul Elisha"
            className="md:w-full rounded-lg md:h-[70vh] h-[30vh] w-88 md:object-cover object-contain" 
            
          />
        </div>

        {/* About Text */}
        <div className=" md:text-left max-w-lg  md:text-lg ">
          <p className="mb-4">
            I am a Software Engineer with a background in computer science.
            <br /> I am currently an undergraduate of Miva Open University,
            <br /> pursuing a Bachelor's degree in <br />
            Software Engineering with a focus on Distributed Softwares.
          </p>
          <p className="mb-4">
            Currently, I mainly work as a core smart contract engineer.
          </p>
          <p className="mb-4">
            Another of many technical skill sets are Technical Research and
            <br />
            Technical Writing crafting API documentations, <br />
            and breaking down the workflow and architecture of protocols.
          </p>
          <p className="mb-4">
            Interested in Open source development and DeFi. <br />I have built
            smart contract modules and tools, <br /> backend SDKs for Blockchain
            platform. <br />
            <a
              href="https://github.com/PaulElisha"
              className="underline text-black hover:text-blue-600"
            >
              Github - @paulelishaa
            </a>
            .
          </p>
          <p className="italic mb-4">Chess player and problem solver.</p>
          <Link to="/Articles">
        <button className=" px-6 py-2 bg-black text-white rounded-full text-lg hover:bg-gray-800 text-center">
          Articles →
        </button>
      </Link>
        </div>
      </div>
    </div>
  );
};

export default About;
