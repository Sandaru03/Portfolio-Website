import React, { useState } from "react";
import { projects } from "../../constants";
import { motion, AnimatePresence } from "framer-motion";

const Work = () => {
  const [selectedProject, setSelectedProject] = useState(null);

  return (
    <section
      id="work"
      // Section Header Styles (UNCHANGED)
      className="py-24 pb-24 px-[12vw] md:px-[7vw] lg:px-[20vw] font-sans relative"
    >
      {/* --- Section Title (UNCHANGED) --- */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-white">PROJECTS</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          A showcase of the projects I have worked on, highlighting my skills
          and experience in various technologies
        </p>
      </div>

      {/* --- Projects Grid (NEW STYLE) --- */}
      <div className="grid gap-10 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <motion.div
            key={project.id}
            layoutId={`project-${project.id}`}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            viewport={{ once: true }}
            onClick={() => setSelectedProject(project)}
            className="group relative bg-[#0a0a0f] rounded-xl overflow-hidden cursor-pointer border border-gray-800 hover:border-purple-500 transition-colors duration-300"
          >
            {/* Image Area */}
            <div className="relative h-56 overflow-hidden">
              <div className="absolute inset-0 bg-black/40 group-hover:bg-transparent transition-all duration-500 z-10" />
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
              {/* Floating Icon on Hover */}
              <div className="absolute top-3 right-3 z-20 opacity-0 group-hover:opacity-100 transform translate-x-4 group-hover:translate-x-0 transition-all duration-300">
                <div className="bg-purple-600 p-2 rounded-full shadow-lg">
                   <svg className="w-4 h-4 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z" />
                   </svg>
                </div>
              </div>
            </div>

            {/* Content Area */}
            <div className="p-6 relative">
              <h3 className="text-xl font-bold text-white mb-3 group-hover:text-purple-400 transition-colors">
                {project.title}
              </h3>
              <p className="text-gray-400 text-sm line-clamp-2 mb-5 leading-relaxed font-light">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-800">
                {project.tags.slice(0, 3).map((tag, idx) => (
                  <span
                    key={idx}
                    className="text-[10px] uppercase tracking-wider font-semibold text-gray-400 border border-gray-700 px-2 py-1 rounded hover:text-purple-400 hover:border-purple-500 transition-colors"
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* --- Modal (NEW STYLE) --- */}
      <AnimatePresence>
        {selectedProject && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelectedProject(null)}
              className="absolute inset-0 bg-black/90 backdrop-blur-sm"
            />

            <motion.div
              layoutId={`project-${selectedProject.id}`}
              className="relative bg-[#111111] w-full max-w-5xl rounded-xl overflow-hidden border border-gray-800 shadow-2xl flex flex-col md:flex-row max-h-[90vh] z-10"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedProject(null)}
                className="absolute top-4 right-4 z-50 p-2 bg-black/50 text-gray-400 rounded-full hover:bg-white hover:text-black transition-all"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                </svg>
              </button>

              {/* Modal Image */}
              <div className="md:w-3/5 h-64 md:h-auto bg-gray-900 relative">
                <img
                  src={selectedProject.image}
                  alt={selectedProject.title}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Modal Details */}
              <div className="md:w-2/5 p-8 flex flex-col bg-[#0f0f13] border-l border-gray-800 overflow-y-auto">
                <div className="mb-6">
                    <h3 className="text-3xl font-bold text-white mb-2">
                    {selectedProject.title}
                    </h3>
                    <div className="h-1 w-20 bg-gradient-to-r from-purple-600 to-blue-600 rounded"></div>
                </div>

                <p className="text-gray-300 leading-7 mb-8 text-sm">
                  {selectedProject.description}
                </p>

                <div className="flex flex-wrap gap-2 mb-10">
                  {selectedProject.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-xs font-medium text-purple-300 bg-purple-900/10 border border-purple-500/30 px-3 py-1 rounded"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons (New Style) */}
                <div className="mt-auto grid grid-cols-2 gap-4">
                  {selectedProject.github && (
                    <a
                      href={selectedProject.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 rounded-lg font-medium text-white border border-gray-600 hover:bg-white hover:text-black transition-all duration-300"
                    >
                      GitHub
                    </a>
                  )}
                  {selectedProject.webapp && (
                    <a
                      href={selectedProject.webapp}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2 py-3 rounded-lg font-medium text-white bg-purple-600 hover:bg-purple-700 hover:shadow-[0_0_15px_rgba(147,51,234,0.5)] transition-all duration-300"
                    >
                      Live View
                    </a>
                  )}
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Work;