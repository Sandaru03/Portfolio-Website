/* eslint-disable no-unused-vars */

import React from 'react';
import { Typewriter } from "react-simple-typewriter";
import Tilt from 'react-parallax-tilt';
import { motion } from "framer-motion";
import ProfileImage from '../../assets/profile.png';

export const About = () => {
  return (
    <section 
      id='about'
      className='py-4 px-6 md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32 overflow-hidden'
    >
      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>

        {/* ==== LEFT SIDE (TEXT CONTENT) ==== */}
        <motion.div 
          className='w-full md:w-1/2 text-center md:text-left mt-8 md:mt-0'
          initial={{ opacity: 0, x: -80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.h1 
            className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1.2 }}
          >
            Hi, I'm
          </motion.h1>

          <motion.h2 
            className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 1.2 }}
          >
            Sandaru Dilshan
          </motion.h2>

          <motion.h3 
            className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 1 }}
          >
            <span className="text-white mr-2">I am a</span>
            <span className="text-[#8245ec]">
              <Typewriter
                words={["Fullstack Developer", "UI/UX Designer"]}
                loop={0}
                cursor
                cursorStyle="|"
                typeSpeed={100}
                deleteSpeed={80}
                delaySpeed={2000}
              />
            </span>
          </motion.h3>

          <motion.p 
            className='text-gray-400 text-base sm:text-lg md:text-lg mb-10 mt-8 leading-relaxed'
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7, duration: 1.2 }}
            viewport={{ once: true }}
          >
            I am a full-stack developer skilled in both front-end and back-end development.
            I specialize in the MERN stack and other modern technologies to create seamless user experiences and efficient solutions.
          </motion.p>

          <motion.a
            href="https://drive.google.com/file/d/1QWc8XqugqC0EB9l4d4qwv075GYDqHcwH/view?usp=drive_link"
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block bg-[#8245ec] text-white px-6 py-3 rounded-full transform hover:scale-105 transition duration-300'
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 5px #8245ec, 0 0 10px #8245ec, 0 0 25px #8245ec',
            }}
            whileHover={{ scale: 1.1, boxShadow: "0 0 25px #a855f7" }}
            whileTap={{ scale: 0.95 }}
          >
            Download CV
          </motion.a>
        </motion.div>

        {/* ==== RIGHT SIDE (IMAGE) ==== */}
        <motion.div 
          className='w-full md:w-1/2 flex justify-center md:justify-end mt-8 md:mt-0'
          initial={{ opacity: 0, x: 80 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <motion.div 
            animate={{
              y: [0, -10, 0],
              scale: [1, 1.03, 1],
              boxShadow: [
                "0 0 25px rgba(130,69,236,0.4)",
                "0 0 50px rgba(130,69,236,0.6)",
                "0 0 25px rgba(130,69,236,0.4)"
              ]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              ease: "easeInOut"
            }}
            className="rounded-full"
          >
            <Tilt 
              className='w-48 h-48 sm:w-52 sm:h-56 md:w-96 md:h-96 rounded-full'
              tiltMaxAngleX={20}
              tiltMaxAngleY={20}
              perspective={1000}
              transitionSpeed={1000}
              scale={1.05}
              gyroscope={true}
            >
             <img 
              src={ProfileImage} 
              alt='Sandaru Dilshan'
              className='w-full h-full rounded-full object-cover object-[center_35%] shadow-[0_0_40px_rgba(130,69,236,0.6)] hover:shadow-[0_0_60px_rgba(130,69,236,0.8)] transition-shadow duration-700'
            />

            </Tilt>
          </motion.div>
        </motion.div>

      </div>
    </section>
  );
};

export default About;
