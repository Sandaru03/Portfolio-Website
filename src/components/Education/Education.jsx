import React from "react";
import { education } from "../../constants";

const Education = () => {
  return (
    <section
      id="education"
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[16vw] font-sans bg-skills-gradient clip-path-custom-3"
    >
      {/* --- Section Title (Original Style Kept) --- */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">EDUCATION</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          My education has been a journey of learning and development. Here are
          the details of my academic background
        </p>
      </div>

      {/* --- Education Timeline (New Modern Style) --- */}
      <div className="relative flex flex-col items-center">
        {/* Vertical Line */}
        <div className="absolute left-4 sm:left-1/2 transform sm:-translate-x-1/2 w-0.5 bg-gradient-to-b from-purple-500 via-purple-400 to-transparent h-full z-0"></div>

        {/* Education Entries */}
        {education.map((edu, index) => (
          <div
            key={edu.id}
            className={`relative flex flex-col sm:flex-row items-center w-full mb-12 z-10 ${
              index % 2 === 0 ? "sm:flex-row-reverse" : ""
            }`}
          >
            {/* Timeline Dot (Center Point) */}
            <div className="absolute left-4 sm:left-1/2 transform -translate-x-1/2 w-4 h-4 bg-purple-500 rounded-full border-4 border-gray-900 shadow-[0_0_10px_rgba(168,85,247,0.8)] hidden sm:block"></div>

            {/* Spacer for alignment (Empty div to push card to side) */}
            <div className="w-full sm:w-1/2"></div>

            {/* Content Card */}
            <div
              className={`w-full sm:w-1/2 pl-12 sm:pl-0 ${
                index % 2 === 0 ? "sm:pr-12" : "sm:pl-12"
              }`}
            >
              <div className="group relative p-6 sm:p-8 rounded-2xl bg-gray-900/80 backdrop-blur-xl border border-white/10 shadow-xl transition-all duration-300 hover:-translate-y-2 hover:shadow-[0_10px_30px_-10px_rgba(130,69,236,0.5)]">
                {/* Gradient Border Glow on Hover */}
                <div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-purple-500/20 to-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                {/* Card Header: Logo + Titles */}
                <div className="relative flex flex-col sm:flex-row gap-6 items-start sm:items-center border-b border-white/10 pb-6 mb-4">
                  {/* Logo Container */}
                  <div className="flex-shrink-0 p-1 rounded-xl bg-gradient-to-br from-purple-500 to-pink-500">
                    <div className="w-16 h-16 bg-white rounded-[10px] overflow-hidden flex items-center justify-center">
                      <img
                        src={edu.img}
                        alt={edu.school}
                        className="w-full h-full object-contain p-1"
                      />
                    </div>
                  </div>

                  {/* Text Info */}
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white group-hover:text-purple-400 transition-colors">
                      {edu.degree}
                    </h3>
                    <h4 className="text-sm font-medium text-gray-300 mt-1">
                      {edu.school}
                    </h4>

                    {/* Date Badge */}
                    <div className="mt-3 inline-block">
                      <span className="px-3 py-1 text-xs font-semibold text-purple-300 bg-purple-500/10 border border-purple-500/20 rounded-full">
                        {edu.date}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Description */}
                <div className="relative text-gray-400 text-sm sm:text-[15px] leading-relaxed text-justify">
                  {edu.desc}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Education;