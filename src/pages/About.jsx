// src/pages/AboutPage.js
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";

const About = () => {
  return (
    <div className="flex flex-col p-4 md:p-8 bg-white text-black min-h-screen justify-center text-center font-roboto">
      <h1 className="text-3xl md:text-6xl font-bold mb-4 text-center font-roboto">
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
       {/* Contact Section */}
       <motion.section
        initial="hidden"
        animate="visible"
        // variants={fadeIn}
        className="mt-16 text-start md:mx-36"
      >
        <h3 className="text-2xl font-semibold mb-4">Contact Me.</h3>
        <p className="text-lg mb-4">
          Reach out to me at{" "}
          <a href="ajaoireoluwa1@gmail.com" className="text-black underline">
            {" "}
            ajaoireoluwa1@gmail.com
          </a>
        </p>
        <div className="flex space-x-4 text-start">
          <a
            href="https://github.com/PaulElisha"
            className="text-black underline flex"
          >
           <p>GitHub</p>
            <GoArrowUpRight
            className="-mb-6 text-xs"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/paul-elisha-659268198"
            className="text-black underline flex"
          >
           <p>LinkedIn</p> 
           <GoArrowUpRight
            className="-mb-6 text-xs"
            />
          </a>
          <a
            href="https://x.com/paulelishaa"
            className="text-black underline flex"
          >
          <p>Twitter</p>
          <GoArrowUpRight
            className="-mb-6 text-xs"
            />
          </a>
        </div>
      </motion.section>
    </div>
  );
};

export default About;
