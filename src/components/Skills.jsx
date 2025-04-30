import { useEffect, useState, useRef } from 'react';
import { FaCss3Alt, FaReact, FaNodeJs, FaPython } from 'react-icons/fa';
import { SiFirebase } from 'react-icons/si'; // Correct Firebase icon

const skillsData = [
  { 
    name: 'CSS', 
    icon: <FaCss3Alt className="text-3xl text-blue-600" />, 
    percentage: 95 
  },
  { 
    name: 'React.js', 
    icon: <FaReact className="text-3xl text-blue-500" />, 
    percentage: 95 
  },
  { 
    name: 'Firebase', 
    icon: (
      <div className="bg-gray-200 p-1 rounded-full">
        <SiFirebase className="text-3xl text-orange-500" />
      </div>
    ), 
    percentage: 80 
  },
  { 
    name: 'Python', 
    icon: <FaPython className="text-3xl text-yellow-500" />, 
    percentage: 85 
  },
  { 
    name: 'Backend (Node.js + Express)', 
    icon: <FaNodeJs className="text-3xl text-green-600" />, 
    percentage: 80 
  },
];

const Skills = () => {
  const [visible, setVisible] = useState(false);
  const skillsRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.2 }
    );

    if (skillsRef.current) {
      observer.observe(skillsRef.current);
    }

    return () => {
      if (skillsRef.current) {
        observer.unobserve(skillsRef.current);
      }
    };
  }, []);

  return (
    <div
      ref={skillsRef}
      className="min-h-screen bg-black text-white flex flex-col items-center justify-start p-4 pt-8 sm:pt-0" 
    >
      <h1 className="text-5xl md:text-6xl font-bold mb-8 text-gray-100 font-cinzel transition-transform duration-300 hover:text-purple-800 transform hover:scale-110">
        Skills & Proficiency
      </h1>
      
      <div className="w-full max-w-4xl">
        {skillsData.map((skill, index) => (
          <div key={index} className="mb-4 sm:mb-2">
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center space-x-2">
                {skill.icon}
                <span className="text-sm md:text-base">{skill.name}</span>
              </div>
              <span className="text-sm md:text-base">{skill.percentage}%</span>
            </div>
            <div className="w-full bg-gray-300 rounded-full h-6">
              <div
                className="bg-purple-800 h-6 rounded-full transition-all duration-1000 ease-out"
                style={{ 
                  width: visible ? `${skill.percentage}%` : '0%',
                  transitionDelay: `${index * 100}ms`
                }}
              ></div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
