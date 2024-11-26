import React from "react";
import { motion } from "framer-motion";

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
    <div className="min-h-screen bg-white text-black font-sans p-8">
      <motion.nav
        variants={fadeIn}
        initial="hidden"
        animate="visible"
        className="flex justify-between items-center mb-8"
      ></motion.nav>

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
        <p className="text-lg leading-relaxed max-w-3xl  mb-8">
          As a smart contract engineer, my primary focus is on building trust,
          integrating protocols and automating processes in code leveraging
          distributed platforms. I have a foundation in software engineering
          which enables me to effectively design and implement these
          integrations in a scalable and efficient manner.
          <p> Developer Ambassador/Technical Research @KaiaFoundation</p>
        </p>
        <p className="italic text-gray-700">
          The only way to do great work is to love what you do.
        </p>
      </motion.main>

      {/* Contact Section */}
      <motion.section
        initial="hidden"
        animate="visible"
        variants={fadeIn}
        className="mt-16 "
      >
        <h3 className="text-2xl font-semibold mb-4">Contact Me.</h3>
        <p className="text-lg mb-4">
          Reach out to me at{" "}
          <a
            href="https://x.com/paulelishaa"
            className="text-blue-500 underline"
          >
            @paulelishaa
          </a>
          ,
          <a href="ajaoireoluwa1@gmail.com" className="text-blue-500 underline">
            {" "}
            ajaoireoluwa1@gmail.com
          </a>
        </p>
        <div className="flex  space-x-4">
          <a
            href="https://github.com/PaulElisha"
            className="text-blue-500 underline"
          >
            GitHub
          </a>
          <a
            href="https://www.linkedin.com/in/paul-elisha-659268198"
            className="text-blue-500 underline"
          >
            LinkedIn
          </a>
          <a
            href="https://x.com/paulelishaa"
            className="text-blue-500 underline"
          >
            Twitter
          </a>
        </div>
      </motion.section>
    </div>
  );
}

export default Home;
