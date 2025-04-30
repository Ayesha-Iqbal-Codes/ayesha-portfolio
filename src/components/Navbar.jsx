import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import { FaHome, FaUser, FaCode, FaProjectDiagram, FaChartLine, FaBriefcase, FaSchool, FaEnvelope, FaChevronLeft, FaChevronRight } from 'react-icons/fa';

const iconMap = {
  home: <FaHome className="text-lg" />,
  about: <FaUser className="text-lg" />,
  'tech-stack': <FaCode className="text-lg" />,
  projects: <FaProjectDiagram className="text-lg" />,
  skills: <FaChartLine className="text-lg" />,
  'work-experience': <FaBriefcase className="text-lg" />,
  education: <FaSchool className="text-lg" />,
  contact: <FaEnvelope className="text-lg" />
};

const sectionNames = {
  home: 'Home',
  about: 'About Me',
  'tech-stack': 'Tech Stack',
  projects: 'Projects',
  skills: 'Skills',
  'work-experience': 'Work',
  education: 'Education',
  contact: 'Contact'
};

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [hoveredLink, setHoveredLink] = useState(null);
  const [clickedLink, setClickedLink] = useState(null);
  const [collapsed, setCollapsed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'tech-stack', 'projects', 'skills', 'work-experience', 'education', 'contact'];
      let activeSection = 'home';

      const scrollPosition = window.scrollY;
      const scrollBottomPosition = scrollPosition + window.innerHeight;
      const documentHeight = document.body.offsetHeight;

      if (scrollPosition === 0) {
        activeSection = 'home';
      } else {
        sections.forEach((section) => {
          const element = document.getElementById(section);
          if (element) {
            const offsetTop = element.offsetTop;
            const offsetHeight = element.offsetHeight;

            if (scrollBottomPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
              activeSection = section;
            }
          }
        });

        if (scrollBottomPosition >= documentHeight) {
          activeSection = 'contact';
        }
      }

      setActiveLink(activeSection);
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const handleClick = (section) => {
    setActiveLink(section);
    setHoveredLink(section);
    setClickedLink(section);

    setTimeout(() => {
      setHoveredLink(null);
      setClickedLink(null);
    }, 1000);
  };

  const toggleCollapse = () => {
    setCollapsed(!collapsed);
  };

  return (
    <div className="fixed top-1/2 right-2 transform -translate-y-1/2 z-50">
      {/* Floating circular toggle button with glow - now separate from the nav */}
      <div className="flex justify-center w-full mb-2">
        <button
          onClick={toggleCollapse}
          className="bg-black bg-opacity-70 text-purple-300 p-2 rounded-full flex items-center justify-center 
                    shadow-[0_0_10px_2px_rgba(192,132,252,0.7)] hover:shadow-[0_0_15px_3px_rgba(192,132,252,0.9)]
                    transition-all duration-300 hover:scale-110 hover:text-purple-100 border border-purple-500 border-opacity-30"
          style={{ width: '42px', height: '42px' }}
        >
          {collapsed ? <FaChevronLeft className="text-s" /> : <FaChevronRight className="text-s" />}
        </button>
      </div>

      {/* Compact rounded navbar with glow - now separate from the toggle */}
      <nav 
        className={`bg-black bg-opacity-70 w-12 h-auto py-1 rounded-full shadow-lg flex flex-col items-center
                    transition-all duration-300 ${collapsed ? 'opacity-0 pointer-events-none' : 'opacity-100'}
                    shadow-[0_0_15px_3px_rgba(192,132,252,0.4)] hover:shadow-[0_0_20px_5px_rgba(192,132,252,0.6)]`}
      >
        <ul className="flex flex-col space-y-1 items-center">
          {['home', 'about', 'tech-stack', 'projects', 'skills', 'work-experience', 'education', 'contact'].map((section) => (
            <li
              key={section}
              className="relative text-center group"
              onMouseEnter={() => setHoveredLink(section)}
              onMouseLeave={() => setHoveredLink(clickedLink === section ? section : null)}
            >
              <a
                href={`#${section}`}
                className={classNames(
                  'text-white hover:text-purple-300 p-1 rounded-full flex items-center justify-center transition-all duration-300',
                  {
                    'bg-purple-800 shadow-[0_0_8px_1px_rgba(192,132,252,0.8)]': activeLink === section,
                    'scale-110 shadow-[0_0_5px_1px_rgba(192,132,252,0.6)]': hoveredLink === section
                  }
                )}
                style={{ 
                  width: '2.5rem', 
                  height: '2.5rem', 
                  fontSize: '1rem'
                }}
                onClick={() => handleClick(section)}
              >
                {iconMap[section]}
              </a>

              {hoveredLink === section && (
                <span
                  className="absolute right-[3.5rem] top-1/2 transform -translate-y-1/2 text-xs bg-purple-900 text-white py-1 px-2 rounded-lg whitespace-nowrap transition-opacity duration-300"
                  style={{ 
                    boxShadow: '0 0 6px 1px rgba(192, 132, 252, 0.4)'
                  }}
                >
                  {sectionNames[section]}
                </span>
              )}
            </li>
          ))}
        </ul>
      </nav>
    </div>
  );
};

export default Navbar;