import React, { useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaLinkedin } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { FaDiscord } from "react-icons/fa";
import bggg1 from '../assets/bggg1.png';

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

const Home = () => {


 ;

  return (
    <div className="home-background bg-black text-white bg-no-repeat"
      style={{ backgroundImage: `url(${bggg1})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <motion.main 
        className="relative z-10 flex sm:flex-wrap flex-col sm:flex-row items-center justify-around   min-h-screen text-center p-5"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <motion.div variants={textVariants} className="mb-12">
         <img className='mt-5 md:h-[250px] md:w-[500px] h-[150px] w-[350px]' src="https://dexterix.technojam.in/dexLogo.png" alt="logo" />
        </motion.div>

        <div className='flex flex-col justify-around sm:gap-4 items-center max-w-7xl'>
          <div className="flex flex-col space-x-4 sm:gap-5 mt-4">
            <motion.div 
              className="flex flex-col items-center sm:mt-8"
              variants={textVariants}
            >
              <p className="text-xl mr-2 text-gray-300">Organised by,</p>
              <p className="text-2xl font-bold">Team TechnoJam</p>
            </motion.div>
            <motion.ul 
              className='flex gap-6 mt-3'
              variants={socialIconsVariants}
            >
              <motion.div variants={iconVariants}>
                <Link to="https://www.linkedin.com/company/technojam/posts/?feedView=all" target='_blank' className="text-4xl hover:text-blue-700 transition-colors">
                  <motion.div whileHover="hover" variants={iconVariants}>
                    <FaLinkedin />
                  </motion.div>
                </Link>
              </motion.div>
              <motion.div variants={iconVariants}>
                <Link to="https://www.facebook.com/teamtechnojam" target='_blank' className="text-4xl hover:text-blue-500 transition-colors">
                  <motion.div whileHover="hover" variants={iconVariants}>
                    <FaFacebook />
                  </motion.div>
                </Link>
              </motion.div>
              <motion.div variants={iconVariants}>
                <Link to="https://www.instagram.com/teamtechnojam/" target='_blank' className="text-4xl hover:text-pink-600 transition-colors">
                  <motion.div whileHover="hover" variants={iconVariants}>
                  <FaInstagram />
                  </motion.div>
                </Link>
              </motion.div>
              <motion.div variants={iconVariants}>
                <Link to="https://x.com/technojam_gu" target='_blank' className="text-4xl hover:text-blue-400 transition-colors">
                  <motion.div whileHover="hover" variants={iconVariants}>
                    <FaTwitter />
                  </motion.div>
                </Link>
              </motion.div>
              <motion.div variants={iconVariants}>
                <Link to="https://discord.com/invite/S5GhBJYNVg" target='_blank' className="text-4xl hover:text-indigo-500 transition-colors">
                  <motion.div whileHover="hover" variants={iconVariants}>
                    <FaDiscord />
                  </motion.div>
                </Link>
              </motion.div>
            </motion.ul>
          </div>

          <div>
            <motion.div 
              className=" flex flex-col gap-1 mt-2 mb-2"
              variants={textVariants}
            >
              <p className="text-2xl text-yellow-400 text-shadow-lg/30 font-semibold">May 20 </p>
              <p className="text-xl sm:mt-2">Galgotias University, Greater Noida</p>
            </motion.div>
            <motion.div 
              className="flex space-x-6  sm:mt-12"
              variants={containerVariants}
            >
              <motion.button 
                className=" hover:border-pink-600 hover:border-2 backdrop-brightness-110 lg:px-8 px-3 py-2 lg:py-4 backdrop-blur-lg text-glow rounded-full  text-xl font-semibold shadow-md cursor-pointer"
                variants={buttonVariants}
                whileHover="hover"
                whileTap="tap"
              >
                Register Now
              </motion.button>
              <motion.button 
                className="border-2 border-pink-600 backdrop-blur-2xl text-white  lg:px-8 px-3 py-2 lg:py-4 rounded-full text-xl font-semibold  cursor-pointer"
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

export default Home;