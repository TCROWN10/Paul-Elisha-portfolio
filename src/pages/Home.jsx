import React from "react";
import { motion } from "framer-motion";
import { GoArrowUpRight } from "react-icons/go";
import { FaGithub } from "react-icons/fa";
import { FaLinkedinIn } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";


function Home() {
  // Define animation variants
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
  };

  const slideIn = {
    hidden: { opacity: 0, x: -50 },
    visible: { opacity: 1, x: 0, transition: { duration: 0.7 } },
  };

  return (
    <div className="min-h-screen bg-white text-black font-sans p-8 text-center">
      {/* <motion.nav
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="flex justify-between items-center mb-8"
      ></motion.nav> */}

      {/* Main Content */}
      <motion.main
        initial="hidden"
        animate="visible"
        variants={slideIn}
        className=""
      >
        <motion.h2
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="md:text-6xl text-3xl font-semibold mb-6"
        >
          Engineering Trust through Automation
        </motion.h2>
        <p className="text-lg mb-8 text-center md:mx-48">
          As a smart contract engineer, my primary focus is on building trust,
          integrating protocols and automating processes in code leveraging
          distributed platforms. I have a foundation in software engineering
          which enables me to effectively design and implement these
          integrations in a scalable and efficient manner.
          <p> Developer Ambassador/Technical Research <br /> @KaiaFoundation</p>
        </p>
        <p className="italic text-gray-700">
          The only way to do great work is to love what you do.
        </p>
      </motion.main>
        <div
         className="flex gap-10 mt-8 md:mx-48"> 
          <a
            href="https://github.com/PaulElisha"
            className="text-black underline flex"
          >
         <motion.div
           whileHover={{
          scale: 1.2, // Scale up on hover
          rotate: 15, // Rotate slightly
          color: "#1B3A5F", // Change color on hover
        }}
        transition={{
          type: "spring", // Spring animation
          stiffness: 300, // Stiffness for bouncy effect
          damping: 15, // Smooth damping
        }}
      >
        <FaGithub className="font-extrabold w-10 h-10 text-gray-500" />
      </motion.div>
          </a>
          <a
            href="https://www.linkedin.com/in/paul-elisha-659268198"
            className="text-black underline flex"
          >
            <motion.div 
             whileHover={{
              scale: 1.2, // Scale up on hover
              rotate: 15, // Rotate slightly
              color: "#1B3A5F", // Change color on hover
            }}
            transition={{
              type: "spring", // Spring animation
              stiffness: 300, // Stiffness for bouncy effect
              damping: 15, // Smooth damping
            }}
            >
            <FaLinkedinIn 
            className="font-extrabold w-10 h-10 text-gray-500"
            />
            </motion.div>
          </a>
          <a
            href="https://x.com/paulelishaa"
            className="text-black underline flex"
          >
            <motion.div 
             whileHover={{
              scale: 1.2, // Scale up on hover
              rotate: 15, // Rotate slightly
              color: "#1B3A5F", // Change color on hover
            }}
            transition={{
              type: "spring", // Spring animation
              stiffness: 300, // Stiffness for bouncy effect
              damping: 15, // Smooth damping
            }}
            >
               <FaTwitter 
           className="font-extrabold w-10 h-10 text-gray-500"
           />
            </motion.div>
          </a>
          <a
            href="ajaoireoluwa1@gmail.com"
            className="text-black underline flex"
          >
            <motion.div
            whileHover={{
              scale: 1.2, // Scale up on hover
              rotate: 15, // Rotate slightly
              color: "", // Change color on hover
            }}
            transition={{
              type: "spring", // Spring animation
              stiffness: 300, // Stiffness for bouncy effect
              damping: 15, // Smooth damping
            }}
            >
            <IoMdMail 
           className="font-extrabold w-10 h-10 text-gray-500"
           />
            </motion.div>
          </a>
        </div>
      {/* Contact Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="mt-16 text-start md:mx-48"
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
}

export default Home;
