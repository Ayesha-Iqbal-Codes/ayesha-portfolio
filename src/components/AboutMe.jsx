import { useEffect, useRef, useState } from 'react';
import profilePic from '../assets/Image.jpg';
import { FaGithub } from 'react-icons/fa';
import { MdArrowDownward } from 'react-icons/md';
import '../styles/AboutMe.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const aboutRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      });
    }, { threshold: 0.1 });

    if (aboutRef.current) {
      observer.observe(aboutRef.current);
    }

    return () => {
      if (aboutRef.current) {
        observer.unobserve(aboutRef.current);
      }
    };
  }, []);

  return (
    <div className="min-h-screen bg-black text-white py-4 px-4" ref={aboutRef}>
      <div className="max-w-6xl mx-auto md:px-5">
        {/* About Me Heading */}
        <div className="text-center mb-8">
          <h2 className={`text-5xl md:text-6xl font-bold mb-8 text-gray-100 font-cinzel transition-transform duration-300 hover:text-purple-800 transform hover:scale-110'}`}>
            About Me
          </h2>
        </div>
        
        {/* Profile Image and Description Section */}
        <div className="flex flex-col md:flex-row items-center justify-between space-y-8 md:space-y-0">
          {/* Circular Abstract Photo Container */}
          <div className="relative w-full md:w-1/3 lg:w-1/4 flex justify-center items-center">
            {/* Circular gradient background */}
            <div className={`absolute w-[110%] h-[110%] rounded-full bg-gradient-to-br from-purple-900/10 via-purple-800/05 to-purple-900/15 transition-all duration-700 ease-out delay-100 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}></div>
            
            {/* Circular pulse animation */}
            <div className={`absolute w-[105%] h-[105%] rounded-full border-2 border-purple-700/30 animate-border-pulse transition-all duration-700 ease-out delay-100 ${isVisible ? 'opacity-100 scale-100' : 'opacity-0 scale-90'}`}></div>

            {/* Main image container */}
            <div className={`relative w-5/6 h-auto z-10 transition-all duration-700 ease-out delay-100 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <div className="relative group">
                {/* Subtle circular glow effect */}
                <div className="absolute -inset-1 rounded-full bg-gradient-to-br from-purple-900/0 via-purple-700/10 to-purple-900/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                
                <img
                  src={profilePic}
                  alt="Profile"
                  className="relative w-full h-auto object-cover rounded-lg border border-purple-800/30 z-10 shadow-lg hover:shadow-xl hover:shadow-purple-900/20 transition-all duration-300 ease-in-out"
                  loading="lazy"
                />
              </div>
              
              {/* Circular floating accents */}
              <div className="absolute -bottom-3 -right-3 w-4 h-4 bg-gradient-to-br from-purple-700 to-purple-400 rounded-full"></div>
              <div className="absolute -top-3 -left-3 w-3 h-3 bg-gradient-to-br from-purple-600 to-purple-300 rounded-full"></div>
            </div>
          </div>

          {/* About Me Description */}
          <div className="w-full md:w-2/3 lg:w-3/4 flex flex-col">
            <p className={`text-base md:text-xl text-gray-100 leading-relaxed mb-4 px-4 md:px-10 max-w-3xl text-justify transition-all duration-700 ease-out delay-200 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              I'm a web developer with a passion for building responsive, user-friendly websites and applications. I'm always excited to learn new technologies and improve my skills. My focus is on creating functional, and accessible designs that prioritize user experience. Whether it's front-end or back-end development, I enjoy the challenge of turning ideas into reality with clean, efficient code. I'm always exploring new techniques to stay ahead in the fast-evolving world of web development and deliver high-quality solutions.
            </p>

            {/* Buttons & Social Links */}
            <div className={`flex flex-col md:flex-row items-center text-l justify-start px-4 md:px-10 space-y-4 md:space-y-0 md:space-x-6 transition-all duration-700 ease-out delay-300 ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <a
                href="/Ayesha_Iqbal_Resume.pdf"
                download="Ayesha_Iqbal_Resume.pdf"
                className="flex items-center text-center gap-2 bg-gradient-to-r from-purple-800 to-purple-900 text-white font-semibold py-3 px-6 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/30"
              >
                Download CV 
                <MdArrowDownward size={20} className="ml-3 font" />
              </a>

              <div className="flex space-x-4">
                <a
                  href="https://github.com/Ayesha-Iqbal-Codes"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-white flex items-center space-x-2 group"
                >
                  <FaGithub className="text-white text-4xl font-bold" />
                  <span className="hidden group-hover:inline text-sm">GitHub 🔗</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div> 
    </div>
  );
};

export default About;