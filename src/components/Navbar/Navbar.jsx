import React, { useEffect, useState } from 'react'
import { FiMenu, FiX } from 'react-icons/fi'
import { FaGithub, FaLinkedinIn } from 'react-icons/fa'

export const Navbar = () => {

  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isScrolled, setIsScrolled] = useState(false);

  //Check scroll and Change navbar background
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Smooth Scroll Function
  const handleMenuItemClick = (sectionId) => {
    setActiveSection(sectionId);
    setIsOpen(false);
  };

  const menuItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "work", label: "Work" },
    { id: "contact", label: "Contact" },
    { id: "education", label: "Education" }
  ];

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition duration-300 px-[7vw] md:px-[7vw] lg:px-[20vw] ${
        isScrolled
          ? "bg-[#050414] bg-opacity-50 backdrop-blur-md shadow-md"
          : "bg-transparent"
      }`}
    >
      <div className="text-white flex justify-between items-center py-5">
        <div className="text-lg font-semibold cursor-pointer">
          {/* logo */}
          <span className="text-[#8245ec]">&lt;</span>
          <span className="text-white">Sandaru</span>
          <span className="text-[#8245ec]">/</span>
          <span className="text-white">Dilshan</span>
          <span className="text-[#8245ec]">&gt;</span>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-8 text-gray-300">
          {menuItems.map((item) => (
            <li
              key={item.id}
              className={`cursor-pointer hover:text-[#8245ec] ${
                activeSection === item.id ? "text-[#8245ec]" : ""
              }`}
            >
              <button onClick={() => handleMenuItemClick(item.id)}>
                {item.label}
              </button>
            </li>
          ))}
        </ul>

        {/* Social Media Icons */}
        <div className="hidden md:flex space-x-4">
          <a
            href="https://github.com/Sandaru03"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec] text-xl">
            <FaGithub size = {18} />
            
          </a>

           <a
            href="https://www.linkedin.com/in/sandaru-dilshan-a6b72a318/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-300 hover:text-[#8245ec] text-xl">
            <FaLinkedinIn size={18} />
            
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
