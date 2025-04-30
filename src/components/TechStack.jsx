import { FaPython, FaJs, FaHtml5, FaCss3Alt, FaBootstrap, FaReact, FaNodeJs, FaDatabase, FaUnity } from 'react-icons/fa';
import { SiTailwindcss, SiMongodb, SiExpress, SiCisco, SiNextdotjs, SiCplusplus } from 'react-icons/si';

const techItems = [
  { icon: <FaPython className="text-6xl sm:text-7xl text-yellow-500" />, name: 'Python' },
  { icon: <SiCplusplus className="text-6xl sm:text-7xl text-blue-500" />, name: 'C++' },
  { icon: <FaJs className="text-6xl sm:text-7xl text-yellow-400" />, name: 'JavaScript' },
  { icon: <FaHtml5 className="text-6xl sm:text-7xl text-orange-500" />, name: 'HTML' },
  { icon: <FaCss3Alt className="text-6xl sm:text-7xl text-blue-600" />, name: 'CSS' },
  { icon: <FaBootstrap className="text-6xl sm:text-7xl text-purple-700" />, name: 'Bootstrap' },
  { icon: <FaReact className="text-6xl sm:text-7xl text-blue-500" />, name: 'React' },
  { icon: <SiTailwindcss className="text-6xl sm:text-7xl text-blue-400" />, name: 'Tailwind CSS' },
  { 
    icon: (
      <div className="bg-gray-200 p-2 rounded-full">
        <SiNextdotjs className="text-6xl sm:text-7xl text-black" />
      </div>
    ), 
    name: 'Next.js' 
  },
  { icon: <FaNodeJs className="text-6xl sm:text-7xl text-green-600" />, name: 'Node.js' },
  { 
    icon: (
      <div className="bg-gray-200 p-2 rounded-full">
        <FaUnity className="text-6xl sm:text-7xl text-black" />
      </div>
    ), 
    name: 'Unity' 
  },
  { icon: <SiMongodb className="text-6xl sm:text-7xl text-green-700" />, name: 'MongoDB' },
  { icon: <SiExpress className="text-6xl sm:text-7xl text-gray-800" />, name: 'Express.js' },
  { icon: <FaDatabase className="text-6xl sm:text-7xl text-blue-800" />, name: 'MySQL' },
  { icon: <SiCisco className="text-6xl sm:text-7xl text-blue-500" />, name: 'Cisco' },
];

const TechStack = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-black text-white -mt-8">
      <style jsx>{`
        @keyframes floatIn {
          0% {
            opacity: 0;
            transform: translateY(40px) scale(0.7);
          }
          30% {
            opacity: 0.5;
            transform: translateY(-8px) scale(1.1);
          }
          60% {
            opacity: 0.8;
            transform: translateY(4px) scale(0.95);
          }
          100% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .tech-item {
          animation: floatIn 3s ease-in-out forwards;
          opacity: 0;
        }
      `}</style>
      
      <div className="w-full p-4 sm:px-4 md:px-32 lg:px-48 text-center">
        <h1 
          className="text-5xl md:text-6xl font-bold mb-10 text-gray-100 font-cinzel"
          style={{
            animation: 'floatIn 3.5s ease-out 0.5s forwards',
            opacity: 0
          }}
        >
          Tech Stack
        </h1>
        <div className="grid grid-cols-3 gap-2 sm:grid-cols-3 md:grid-cols-5 lg:grid-cols-5 xl:gap-3">
          {techItems.map((item, index) => (
            <div 
              key={index}
              className="tech-item flex flex-col items-center hover:scale-125 transform transition duration-700 ease-in-out"
              style={{ 
                animationDelay: `${index * 0.3 + 1}s`,
                transitionDelay: `${index * 0.05}s` 
              }}
            >
              {item.icon}
              <p className="mt-2 text-sm md:text-base">{item.name}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default TechStack;
