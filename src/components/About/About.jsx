import React from 'react';
import { Typewriter } from "react-simple-typewriter";
import Tilt from 'react-parallax-tilt';
import ProfilePhoto from '../../assets/profilephoto.png';

export const About = () => {
  return (
    <section 
      id='about'
      className='py-4 px-[7vw] md:px-[7vw] lg:px-[20vw] font-sans mt-16 md:mt-24 lg:mt-32'
    >
      <div className='flex flex-col-reverse md:flex-row justify-between items-center'>
        {/* Left Side */}
        <div className='md:w-1/2 text-center md:text-left mt-8 md:mt-0'>
          {/* Greeting */}
          <h1 className='text-3xl sm:text-5xl md:text-6xl font-bold text-white mb-2 leading-tight'>
            Hi, I'm
          </h1>

          {/* Name */}
          <h2 className='text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 leading-tight'>
            Sandaru Dilshan
          </h2>

          {/* Skills */}
          <h3 className="text-xl sm:text-2xl md:text-3xl font-semibold leading-tight">
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
          </h3>

          {/* About Me Paragraph */}
          <p className='text-gray-400 text-base sm:text-lg md:text-lg mb-10 mt-8 leading-relaxed'>
            I am a full-stack developer skilled in both front-end and back-end development.
            I specialize in the MERN stack and other modern technologies to create seamless user experiences and efficient solutions.
          </p>

          {/* CV Button */}
          <a
            href="https://drive.google.com/file/d/1QWc8XqugqC0EB9l4d4qwv075GYDqHcwH/view?usp=drive_link"
            target='_blank'
            rel='noopener noreferrer'
            className='inline-block bg-[#8245ec] text-white px-6 py-3 rounded-full transform hover:scale-105 transition duration-300'
            style={{
              background: 'linear-gradient(90deg, #8245ec, #a855f7)',
              boxShadow: '0 0 2px #8245ec, 0 0 2px #8245ec, 0 0 40px #8245ec',
            }}
          >
            Download CV
          </a>
        </div>

        {/* Right Side */}
        <div className='md:w-1/2 flex justify-center md:justify-end mt-[-2rem]'>
          <Tilt 
            className='w-40 h-40 sm:w-52 sm:h-52 md:w-80 md:h-80 border-4 border-purple-700 rounded-full'
            tiltMaxAngleX={20}
            tiltMaxAngleY={20}
            perspective={1000}
            transitionSpeed={1000}
            scale={1.05}
            gyroscope={true}
          >
            <img 
              src={ProfilePhoto} 
              alt='Sandaru Dilshan'
              className='w-full h-full rounded-full object-cover drop-shadow-[0_10px_20px_rgba(130,69,236,0.5)]'
            />
          </Tilt>
        </div>
      </div>
    </section>
  );
};

export default About;
