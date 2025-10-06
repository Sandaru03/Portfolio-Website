import React from "react";
import Navbar from './components/Navbar/Navbar'
import Footer from './components/Footer/Footer'
import About from './components/About/About'
import Skills from './components/Skills/Skills'
import Work from './components/Work/Work'
import Education from "./components/Education/Education";
import Contact from './components/Contact/Contact'
import BlurBlob from './BlurBlob'
import whatsappIcon from './assets/whatsapp.png';

const App = () => {
  return (
    <div className="bg-[#050414] relative min-h-screen">

      {/* Background blur effect */}
      <BlurBlob position={{ top: '35%', left: '20%' }} size={{ width: '30%', height: '40%' }} />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100px)]"></div>
      
      {/* Main content */}
      <div className="relative pt-20">
        <Navbar />
        <About />
        <Skills />
        <Work />
        <Education />
        <Contact />
        <Footer />
      </div>

      {/* WhatsApp Floating Button with animation + tooltip */}
      <div className="fixed bottom-6 right-6 z-50 group">
        <a
          href="https://wa.me/94702216447"
          target="_blank"
          rel="noopener noreferrer"
          className="relative block"
        >
          {/* Tooltip */}
          <span className="absolute bottom-16 right-1/2 translate-x-1/2 mb-2 text-sm bg-white text-black px-3 py-1 rounded-md opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Contact me!
          </span>

          {/* Animated pulse ring */}
          <span className="absolute inset-0 rounded-full animate-ping bg-green-500 opacity-30"></span>

          {/* WhatsApp icon */}
          <img
            src={whatsappIcon}
            alt="WhatsApp Chat"
            className="w-14 h-14 rounded-full shadow-lg border-2 border-green-500 hover:scale-110 hover:shadow-green-400/70 transition-transform duration-300 relative z-10"
          />
        </a>
      </div>

    </div>
  );
};

export default App;
