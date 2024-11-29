import React, { useState } from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { PiDotBold } from "react-icons/pi";

const projects = [
  {
    id: 1,
    title: "JIT Rebalancer",
    description:
      "The Just in Time Rebalancer is a cutting-edge Uniswap V4 Hook contract designed to optimize liquidity management and enhance trading efficiency. This innovative contract automatically adjusts liquidity positions in response to market conditions, ensuring that users maintain optimal exposure to price movements while minimizing impermanent loss. By leveraging the unique capabilities of Uniswap V4 Hooks, the Just in Time Rebalancer can execute precise liquidity adjustments at critical moments during trading activities. It intelligently monitors price fluctuations and executes rebalancing strategies before or after swaps, allowing for dynamic liquidity allocation tailored to real-time market data.",
    stack: [
      {
        name: "Solidity",
        link: "https://github.com/PaulElisha/JIT-UNISWAP-V4-HOOK",
        color:"bg-[#AA6746]"
      },
      {
        name: "TypeScript",
        link: "",
        color:"bg-[#3178C6]"
      }
    ],
  },
  {
    id: 2,
    title: "Oklink SDKs",
    description:
      "The OKLink SDK is a robust development toolkit designed to simplify the integration of Kaia blockchain data services into your applications. This SDK provides developers with streamlined access to a wide array of on-chain data, including transaction histories, NFT details, and market analysis across various blockchain networks.",
    stack: [
      {
        name: "TypeScript",
        link: "https://github.com/PaulElisha/kaiascan-sdk-ts",
        color:"bg-[#3178C6]"
      },
       {
        name: "Python",
        link: "https://github.com/PaulElisha/oklink-kaiachain-sdk-py",
        color:"bg-[#3572A5]"
      },
       {
       name: "Go",
       link: "https://github.com/PaulElisha/oklink-kaiachain-sdk-go",
       color:"bg-[#00ADD8]"
      }, 
       {
       name: "Rust",
       link:"https://github.com/PaulElisha/oklink-kaiachain-sdk-rs",
       color:"bg-[#DEA584]"
      }
    ],
  },
  {
    id: 4,
    title: "Cross-chain ",
    description:
      "The Optimistic Oracle Price Data Application leverages LayerZero technology to facilitate the cross-chain transmission of real-time price data across multiple blockchain networks, including Kaia. This innovative application utilizes optimistic oracle mechanisms to ensure accurate and timely price feeds, enabling decentralized applications to access reliable market data without the need for centralized intermediaries.",
    stack: [
      {
       name: "Solidity",
       link:"https://github.com/PaulElisha/uma-pricefeed-lz-crosschain",
       color:"bg-[#AA6746]"
      },
      {
       name: "Fountry",
       link:"",
       color:"bg-black"
      },
    ],
  },
  {
    id: 5,
    title: "Secp256k1",
    description:
      "The SECP256K1 Smart Contract is a specialized implementation designed to leverage the widely used SECP256K1 elliptic curve cryptography for secure digital signatures and key management within blockchain applications. This smart contract provides developers with a robust framework for generating, verifying, and managing cryptographic keys and signatures, ensuring high levels of security and integrity for transactions.",
    stack: [
      {
        name:"Solidity",
        link:"https://github.com/PaulElisha/secp256k1",
        color:"bg-[#AA6746]"
      },
      {
        name:"Javascript",
        link:"",
        color:"bg-[#F1E05A]"
      }
    ],
  },
];

const Project = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeTag, setActiveTag] = useState("All");

  // const colors = ["bg-[#3178C6]", "bg-[#DEA584]", "bg-[#00ADD8]", "bg-[#AA6746]", "bg-[#3572A5]"];
  // const colors = ["bg-[#3178C6]", "bg-[#DEA584]", "bg-[#AA6746]", "bg-[#3572A5]", "bg-[#00ADD8]"];

  const filteredProjects = projects.filter((project) => {
    const matchesSearch =
      project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.description.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesTag = activeTag === "All" || project.title === activeTag;

    return matchesSearch && matchesTag;
  });

  return (
    <div className="p-4 md:p-6 max-w-4xl mx-auto font-roboto">
      <div className="text-2xl md:text-6xl text-center font-bold text-gray-800 mb-4 font-Inter">
        Projects
      </div>

      <p className="text-center text-sm md:text-base mb-6">
        Coding is like a puzzle, and sometimes the best way to solve it is to
        take a step back and look at the big picture. <br /> - Paul Elisha
      </p>

      {/* Search Bar */}
      <input
        type="text"
        placeholder="Search Paul's Projects"
        className="w-full border p-2 rounded-lg mb-6 text-sm md:text-base"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />

      {/* Tags */}
      <div className="flex flex-wrap gap-2 mb-8 justify-center">
        {["All", ...projects.map((project) => project.title)].map((tag) => (
          <span
            key={tag}
            className={`px-3 py-1 border rounded-xl text-xs md:text-sm cursor-pointer ${activeTag === tag ? "bg-gray-200" : ""
              }`}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </span>
        ))}
      </div>

      {/* Project List */}
      {filteredProjects.length > 0 ? (
        <div className="space-y-12">
          {filteredProjects.map((project) => (
            <motion.div
              key={project.id}
              className="border-b pb-4 shadow-lg p-6"
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              whileHover={{ scale: 1.05 }}
            >
              
              <h3 className="text-lg font-semibold text-black mb-2">
                {project.title}
              </h3>
              <p className="text-gray-600">{project.description}</p>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.stack.map((tech, index) => (
                  <>
                    {
                      tech.link
                        ? <Link to={tech.link}
                          key={tech.name}
                          className="flex gap-2 items-center "
                        >
                          <PiDotBold
                            className={`rounded-full w-2 h-2  ${tech.color}`} />
                          <p> {tech.name} </p>
                        </Link>
                        : <div
                          key={tech.name}
                          className="flex gap-2 items-center "
                        >
                          <PiDotBold
                            className={`rounded-full w-2 h-2 ${tech.color}`} />
                          <p> {tech.name} </p>
                        </div>
                    }
                  </>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      ) : (
        <p className="text-center text-gray-500">No projects found</p>
      )}
    </div>
  );
};

export default Project;
