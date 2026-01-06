import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const form = useRef();
  const [isSent, setIsSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_7filyag", // Replace with your EmailJS Service ID
        "template_rmq665i", // Replace with your EmailJS Template ID
        form.current,
        "2NB532IWTKpG-6yo9" // Replace with your EmailJS Public Key
      )
      .then(
        () => {
          setIsSent(true);
          form.current.reset(); // Reset form fields after sending
          toast.success("Message sent successfully! ✅", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        },
        (error) => {
          console.error("Error sending message:", error);
          toast.error("Failed to send message. Please try again.", {
            position: "top-right",
            autoClose: 3000,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: true,
            theme: "dark",
          });
        }
      );
  };

  return (
    <section
      id="contact"
      className="flex flex-col items-center justify-center py-24 px-[6vw] md:px-[7vw] lg:px-[20vw] relative overflow-hidden"
    >
      {/* Toast Container */}
      <ToastContainer />

      {/* --- Section Title (Original Style Kept) --- */}
      <div className="text-center mb-16 relative z-10">
        <h2 className="text-4xl font-bold text-white">CONTACT</h2>
        <div className="w-32 h-1 bg-purple-500 mx-auto mt-4"></div>
        <p className="text-gray-400 mt-4 text-lg font-semibold">
          I’d love to hear from you—reach out for any opportunities or questions!
        </p>
      </div>

      {/* --- Contact Form (New Modern Style) --- */}
      <div className="relative w-full max-w-lg z-10">
        {/* Background Glow Effect behind the form */}
        <div className="absolute -inset-2 bg-gradient-to-r from-purple-600 to-pink-600 rounded-2xl blur-xl opacity-20"></div>

        <div className="relative bg-gray-900/80 backdrop-blur-xl p-8 rounded-2xl border border-white/10 shadow-2xl">
          <h3 className="text-2xl font-bold text-white text-center mb-6">
            Let's Connect 
          </h3>

          <form
            ref={form}
            onSubmit={sendEmail}
            className="flex flex-col space-y-5"
          >
            {/* Email Input */}
            <div className="group">
              <input
                type="email"
                name="user_email"
                placeholder="Your Email"
                required
                className="w-full p-4 rounded-xl bg-white/5 text-white border border-white/10 placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:bg-white/10"
              />
            </div>

            {/* Name Input */}
            <div>
              <input
                type="text"
                name="user_name"
                placeholder="Your Name"
                required
                className="w-full p-4 rounded-xl bg-white/5 text-white border border-white/10 placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:bg-white/10"
              />
            </div>

            {/* Subject Input */}
            <div>
              <input
                type="text"
                name="subject"
                placeholder="Subject"
                required
                className="w-full p-4 rounded-xl bg-white/5 text-white border border-white/10 placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:bg-white/10"
              />
            </div>

            {/* Message Input */}
            <div>
              <textarea
                name="message"
                placeholder="Message"
                rows="5"
                required
                className="w-full p-4 rounded-xl bg-white/5 text-white border border-white/10 placeholder-gray-400 transition-all duration-300 focus:outline-none focus:border-purple-500 focus:ring-1 focus:ring-purple-500 focus:bg-white/10 resize-none"
              />
            </div>

            {/* Send Button */}
            <button
              type="submit"
              className="w-full bg-gradient-to-r from-purple-600 to-pink-500 py-4 text-white font-bold text-lg rounded-xl shadow-lg shadow-purple-500/30 hover:shadow-purple-500/50 hover:scale-[1.02] transition-all duration-300 active:scale-95 mt-2"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;