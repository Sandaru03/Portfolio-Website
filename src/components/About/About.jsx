/* eslint-disable no-unused-vars */

import React from "react";
import { Typewriter } from "react-simple-typewriter";
import Tilt from "react-parallax-tilt";
import { motion } from "framer-motion";
import ProfileImage from "../../assets/profile2.png";

export const About = () => {
  return (
    <section
      id="about"
      className="relative py-10 px-6 md:px-[7vw] lg:px-[14vw] font-sans mt-16 md:mt-24 lg:mt-32 overflow-hidden"
    >
      {/* --- Background Ambient Glows --- */}
      <div className="absolute top-[-20%] left-[-10%] w-[500px] h-[500px] bg-purple-600/20 rounded-full blur-[120px] -z-10"></div>
      <div className="absolute bottom-[-20%] right-[-10%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px] -z-10"></div>

      <div className="flex flex-col-reverse md:flex-row justify-between items-center gap-10">
        
        {/* ==== LEFT SIDE (TEXT CONTENT) ==== */}
        <motion.div
          className="w-full md:w-3/5 text-center md:text-left z-10"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
         

          <motion.h1
            className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-white mb-4 leading-tight"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Hi, I'm <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
              Sandaru Dilshan
            </span>
          </motion.h1>

          <motion.h3
            className="text-xl sm:text-2xl md:text-3xl font-semibold mt-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 1 }}
          >
            <span className="text-gray-300 mr-2">I am a</span>
            <span className="text-[#8245ec] underline decoration-wavy decoration-purple-500/50 underline-offset-8">
              <Typewriter
                words={["Fullstack Developer", "UI/UX Designer"]}
                loop={0}
                cursor
                cursorStyle="_"
                typeSpeed={80}
                deleteSpeed={50}
                delaySpeed={2000}
              />
            </span>
          </motion.h3>

          <motion.p
            className="text-gray-400 text-base sm:text-lg md:text-lg mb-8 mt-6 leading-relaxed max-w-2xl mx-auto md:mx-0"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 1 }}
            viewport={{ once: true }}
          >
            I craft high-performance web applications with a focus on seamless
            user experiences. Specializing in the <span className="text-white font-semibold">MERN stack</span>, I bridge the gap between
            powerful backend logic and elegant frontend design.
          </motion.p>

          <motion.a
            href="https://drive.google.com/file/d/1B2cVfVsV1ugQIe4I60hpoyzqWaUzD9AA/view?usp=drive_link"
            target="_blank"
            rel="noopener noreferrer"
            className="relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-purple-600 font-pj rounded-xl focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900"
            role="button"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
              <div className="absolute -inset-3 rounded-xl bg-gradient-to-r from-yellow-300 via-purple-500 to-pink-500 opacity-30 blur-lg transition duration-200 group-hover:opacity-100 group-hover:duration-200 animate-tilt"></div>
              <span className="relative">Download CV</span>
              <svg className="relative w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"></path></svg>
          </motion.a>
        </motion.div>

        {/* ==== RIGHT SIDE (IMAGE) ==== */}
        <motion.div
          className="w-full md:w-2/5 flex justify-center md:justify-end relative z-10"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          {/* Decorative Circle behind image */}
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-[280px] h-[280px] sm:w-[350px] sm:h-[350px] md:w-[450px] md:h-[450px] bg-gradient-to-b from-purple-500/20 to-transparent rounded-full border border-white/5 z-0"></div>

          <Tilt
            className="relative z-10"
            tiltMaxAngleX={15}
            tiltMaxAngleY={15}
            perspective={1000}
            transitionSpeed={1500}
            scale={1.05}
            gyroscope={true}
          >
             {/* Image Container with Glow Border */}
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-96 md:h-96 rounded-full p-2 bg-gradient-to-b from-purple-500 via-purple-500/20 to-transparent">
                <div className="w-full h-full rounded-full overflow-hidden bg-gray-900 back">
                    <img
                    src={ProfileImage}
                    alt="Sandaru Dilshan"
                    className="w-full h-full object-cover object-[center_35%] opacity-90 hover:opacity-100 transition-opacity duration-500"
                    />
                </div>
            </div>
          </Tilt>
        </motion.div>
      </div>
    </section>
  );
};

export default About;