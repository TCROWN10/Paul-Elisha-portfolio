import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

// Dummy data for research projects
const projects = [
  {
    title: "WHAT IS THE ETHEREUM VIRTUAL MACHINE?",
    description:
      "As someone who wished to become an advanced solidity smart contract developer, I took the initiative to begin my journey writing Yul so I could understand how data allocations are made to storage and memory and how to manage those allocations while cutting gas cost under the hood. I want to understand what happens to my solidity code at deployment and whenever a call is made.",
    Link: "https://medium.com/@PaulElisha1/what-is-the-ethereum-virtual-machine-7c639aa94ab4",
    image: "/src/assets/Article 1.png",
  },
  {
    title: "ERC4626 TOKENIZED VAULT SMART CONTRACT SIMPLIFIED.",
    Link: "https://medium.com/@PaulElisha1/building-an-erc4626-smart-contract-on-klaytn-7bbeb4cbb078",
    description:
      "One of the common problems in DeFi is the difference in the smart contract implementation of yield-bearing protocols. For instance, Yearn allows you to deposit tokens into a vault and earn a yield on the tokens while they are deposited, Aave and Compound do similar things with their lending and borrowing contracts.",
    image: "/src/assets/Article 2.png",
  },
  {
    title: "Exploring Precompiled contracts and Its Unique variants on Klaytn.",
    description:
      "Precompiled Contracts are a set of smart contracts that are natively implemented and hardwired into Ethereum for specific cryptographic and memory copying functionality instead of executing as code or bytecode.",
    Link: "https://medium.com/@PaulElisha1/exploring-precompiled-contracts-and-some-klaytn-unique-features-a-deep-dive-950e65c5ac90",
    image: "/src/assets/Article 3.png",
  },
];

const Articles = () => {
  return (
    <div className="bg-gray-100 min-h-screen p-8">
      {/* Research Introduction */}
      <section className="mb-12 text-center max-w-2xl mx-auto">
        <h2 className="text-6xl font-bold text-gray-800 mb-4">Articles</h2>
      </section>

      <section className="grid grid-cols-1 md:grid-cols-2 gap-8 cursor-pointer">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-lg rounded-lg p-6"
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3 }}
          >
            <Link to={project.Link}>
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-48 object-cover rounded-md mb-4"
              />
              <h3 className="text-xl font-bold text-gray-800 mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600">{project.description}</p>
            </Link>
          </motion.div>
        ))}
      </section>
    </div>
  );
};

export default Articles;
