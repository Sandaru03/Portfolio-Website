import React from "react";
import { SkillsInfo } from "../../constants";
import Tilt from "react-parallax-tilt";

const Skills = () => (
  <section
    id="skills"
    className="py-24 pb-24 px-[6vw] md:px-[7vw] lg:px-[20vw] font-sans bg-skills-gradient clip-path-custom"
  >
    {/* --- Section Title --- */}
    <div className="text-center mb-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-white">SKILLS</h2>
      <div className="w-24 h-1 bg-[#8245ec] mx-auto mt-2"></div>
      <p className="text-gray-400 mt-4 text-lg font-semibold">
        A collection of my technical skills and expertise honed through various
        projects and experiences
      </p>
    </div>

    {/* --- Skill Categories (Grid Layout for Equal Sizes) --- */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
      {SkillsInfo.map((category) => (
        <Tilt
          key={category.title}
          className="h-full" // Ensures the Tilt component takes full height of the grid cell
          tiltMaxAngleX={10}
          tiltMaxAngleY={10}
          perspective={1000}
          scale={1.02}
          transitionSpeed={1000}
          gyroscope={true}
        >
          <div
            className="h-full flex flex-col bg-gray-900/60 backdrop-blur-xl border border-white/10 rounded-3xl p-6 sm:p-8 
            shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_0_30px_rgba(130,69,236,0.2)] 
            transition-all duration-300 relative overflow-hidden group"
          >
            {/* Background Gradient Glow */}
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-32 h-32 bg-purple-500/20 rounded-full blur-3xl group-hover:bg-purple-500/30 transition-all duration-500"></div>
            
            {/* Title */}
            <h3 className="text-2xl font-bold text-white mb-6 text-center tracking-wide group-hover:text-purple-400 transition-colors">
              {category.title}
            </h3>

            {/* Skill Items Container - Flex grow ensures it fills space evenly */}
            <div className="flex flex-wrap gap-3 justify-center content-start flex-grow">
              {category.skills.map((skill) => (
                <div
                  key={skill.name}
                  className="flex items-center gap-2 px-3 py-2 bg-white/5 border border-white/5 rounded-xl 
                  hover:bg-white/10 hover:border-purple-500/30 hover:-translate-y-1 transition-all duration-300 cursor-default"
                >
                  <img
                    src={skill.logo}
                    alt={`${skill.name} logo`}
                    className="w-5 h-5 object-contain"
                  />
                  <span className="text-sm text-gray-300 font-medium whitespace-nowrap">
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </Tilt>
      ))}
    </div>
  </section>
);

export default Skills;