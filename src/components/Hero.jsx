"use client";
import React, { useMemo } from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";

// Seeded random number generator
function seededRandom(seed) {
  const x = Math.sin(seed++) * 10000;
  return x - Math.floor(x);
}

const iconVariants = {
  initial: { y: 0 },
  hover: {
    y: -5,
    transition: {
      duration: 0.3,
      ease: "easeOut"
    }
  }
};

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.2
    }
  }
};

const buttonVariants = {
  hidden: {
    opacity: 0,
    y: 20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  },
  hover: {
    scale: 1.05,
    transition: {
      duration: 0.3,
      ease: "easeInOut"
    }
  },
  tap: {
    scale: 0.95
  }
};

const textVariants = {
  hidden: {
    opacity: 0,
    y: -20
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.6,
      ease: "easeOut"
    }
  }
};

const socialIconsVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      staggerChildren: 0.1,
      ease: "easeOut"
    }
  }
};

const emojis = ['🧪', '🔬', '⚗️', '🧬', '📡', '🌡️', '🔭'];

const generateRandomStyles = (count, seed) => {
  return Array.from({ length: count }, (_, index) => {
    const randomTop = seededRandom(seed + index) * 100;
    const randomLeft = seededRandom(seed + index + 1) * 100;
    const randomRotation = seededRandom(seed + index + 2) * 360;

    return {
      emoji: emojis[index % emojis.length],
      top: `${randomTop}%`,
      left: `${randomLeft}%`,
      transform: `rotate(${randomRotation}deg)`
    };
  });
};

const Hero = () => {
  // Use a fixed seed for consistent rendering
  const seed = 1234;
  const emojiStyles = useMemo(() => generateRandomStyles(50, seed), [seed]);

  return (
    <div className="grainy-effect home-background text-white bg-no-repeat h-full w-full overflow-hidden relative">
      <video
        className="absolute  w-full h-full object-cover z-0 mix-blend-overlay pointer-events-none"
        src="/assets/bggg2.mp4" // Place your video in public/assets/your-video.mp4
        autoPlay
        loop
        muted
        playsInline
      />

      {/* Laboratory Emojis Background */}
      <div className="absolute inset-1 h-full z-0 pointer-events-none">
        {emojiStyles.map((style, index) => (
          <span
            key={index}
            className="absolute text-3xl opacity-10"
            style={{
              top: style.top,
              left: style.left,
              transform: style.transform
            }}
          >
            {style.emoji}
          </span>
        ))}
      </div>

      <motion.main
        className="relative z-10 flex flex-col items-center justify-center gap-4 sm:gap-6 lg:gap-8 min-h-screen h-full text-center p-4 sm:p-6 lg:p-8 max-w-[95%] sm:max-w-[90%] lg:max-w-7xl mx-auto"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Logo Section */}
        <motion.div variants={textVariants} className="mb-4 sm:mb-6 lg:mb-8 w-full max-w-[90vw] sm:max-w-[80vw] lg:max-w-[1000px]">
          <img
            className="w-full h-auto max-h-[100px] sm:max-h-[150px] lg:max-h-[300px] object-contain"
            src="https://dexterix.technojam.in/dexLogo.png"
            alt="logo"
          />
        </motion.div>

        {/* Cards Container */}
        <div className="flex flex-col lg:flex-row justify-around w-full gap-4 sm:gap-6 lg:gap-8 px-2 sm:px-4 lg:px-6">
          {/* First Card */}
          <div className="flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 rounded-lg border-2 border-green-300 bg-[rgba(0,0,0,0.3)] w-full lg:w-auto
            hover:shadow-[0_0_40px_4px_rgba(0,255,0,0.25)] transition-all duration-300 ease-in-out min-h-full">
            <motion.div
              className="flex flex-col items-center gap-3"
              variants={textVariants}
            >
              <p className="text-lg sm:text-xl lg:text-2xl text-gray-300">Organised by,</p>
              <p className="text-xl sm:text-2xl lg:text-2xl font-bold">Team TechnoJam</p>
            </motion.div>
            {/* Social Icons */}
            <motion.ul
              className="flex gap-3 sm:gap-4 lg:gap-6 mt-3"
              variants={socialIconsVariants}
            >
              <motion.div variants={iconVariants}>
                <Link href="https://www.linkedin.com/company/technojam/posts/?feedView=all" target="_blank" className="text-2xl sm:text-3xl lg:text-4xl hover:text-blue-700 transition-colors">
                  <motion.div whileHover="hover" variants={iconVariants}>
                    <FaLinkedin />
                  </motion.div>
                </Link>
              </motion.div>
              <motion.div variants={iconVariants}>
                <Link href="https://www.facebook.com/teamtechnojam" target="_blank" className="text-2xl sm:text-3xl lg:text-4xl hover:text-blue-500 transition-colors">
                  <motion.div whileHover="hover" variants={iconVariants}>
                    <FaFacebook />
                  </motion.div>
                </Link>
              </motion.div>
              <motion.div variants={iconVariants}>
                <Link href="https://www.instagram.com/teamtechnojam/" target="_blank" className="text-2xl sm:text-3xl lg:text-4xl hover:text-pink-600 transition-colors">
                  <motion.div whileHover="hover" variants={iconVariants}>
                    <FaInstagram />
                  </motion.div>
                </Link>
              </motion.div>
              <motion.div variants={iconVariants}>
                <Link href="https://x.com/technojam_gu" target="_blank" className="text-2xl sm:text-3xl lg:text-4xl hover:text-blue-400 transition-colors">
                  <motion.div whileHover="hover" variants={iconVariants}>
                    <FaTwitter />
                  </motion.div>
                </Link>
              </motion.div>
              <motion.div variants={iconVariants}>
                <Link href="https://discord.com/invite/S5GhBJYNVg" target="_blank" className="text-2xl sm:text-3xl lg:text-4xl hover:text-indigo-500 transition-colors">
                  <motion.div whileHover="hover" variants={iconVariants}>
                    <FaDiscord />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.ul>
          </div>
          <div className='flex flex-col items-center justify-center p-4 sm:p-6 lg:p-8 rounded-lg border-2 border-red-300 bg-[rgba(0,0,0,0.3)] w-full lg:w-auto
            hover:shadow-[0_0_40px_4px_rgba(255,0,0,0.25)] transition-all duration-300 ease-in-out'>
            <motion.div
              className="flex flex-col gap-1 mt-2 mb-2"
              variants={textVariants}
            >
              <p className="text-xl sm:text-2xl lg:text-3xl text-yellow-400 text-shadow-lg/30 font-semibold">May 20 </p>
              <p className="text-base sm:text-lg lg:text-xl sm:mt-2">Galgotias University, Greater Noida</p>
            </motion.div>
            {/* Buttons */}
            <motion.div
              className="flex flex-col sm:flex-row gap-4 sm:gap-6 mt-4 sm:mt-5"
              variants={containerVariants}
            >
              <motion.button
                className="w-full sm:w-auto bg-white text-black hover:border-2 outline-0 border-black backdrop-brightness-110 px-4 sm:px-6 lg:px-8 py-2 lg:py-4 backdrop-blur-lg rounded-full text-base sm:text-lg lg:text-xl font-semibold shadow-md cursor-pointer"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Register Now
              </motion.button>

              <motion.button
                className="w-full sm:w-auto text-white border-2 border-white backdrop-blur-2xl px-4 sm:px-6 lg:px-8 py-2 lg:py-4 rounded-full text-base sm:text-lg lg:text-xl font-semibold cursor-pointer"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                <i className="fab fa-discord"></i> Join Discord
              </motion.button>
            </motion.div>
          </div>
        </div>
      </motion.main>
    </div>
  );
};

export default Hero;