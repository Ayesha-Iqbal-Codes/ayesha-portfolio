// src/components/WorkExperience.jsx
import ITSOLERAImage from '../assets/2.png';
import { MdArrowDownward } from 'react-icons/md';

const WorkExperience = () => {
  const projects = [
    'Earthquake Prediction Model with Machine Learning',
    'Fake News Detection with Machine Learning',
    'AI-Enhanced Detection of Fake and Bot Profiles on Social Media',
    'Image Segmentation with Machine Learning',
    'URL Classification and Analysis: Categorizing and Analyzing 1 Million URLs',
    'Outfit Recommendation System'
  ];

  return (
    <section id="work-experience" className="min-h-screen bg-black text-white pt-0 py-12 px-4 md:px-8">
  <div className="max-w-6xl mx-auto">
    <h1 className="text-center text-4xl md:text-5xl font-bold mb-6 text-gray-100 font-cinzel transition-transform duration-300 hover:text-purple-800 transform hover:scale-110">
      Work Experience
    </h1>
    
    <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
      {/* Image */}
      <div className="w-full md:w-72 flex-shrink-0 rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/50 transition-shadow">
        <img 
          src={ITSOLERAImage} 
          alt="ITSOLERA" 
          className="w-full h-auto object-cover"
          loading="lazy"
        />
      </div>

      {/* Text Section */}
      <div className="flex-1 pr-4">
        <h2 className="text-xl md:text-2xl font-semibold mb-2 text-purple-300">AI/ML Intern</h2>
        <p className="text-base md:text-sm text-gray-400 mb-3">ITSOLERA - 3-Month Internship in Machine Learning</p>
        <p className="text-base md:text-sm text-gray-300 mb-4 leading-relaxed">
          Developed multiple AI/ML projects focusing on data preprocessing, model development, and evaluation using TensorFlow and Scikit-learn.
        </p>
        
        <div className="bg-gray-800/50 p-4 rounded-lg border border-gray-700 mb-5 max-w-2xl"> {/* Adjusted padding and width */}
          <h3 className="text-lg md:text-base font-semibold mb-3 text-purple-300">Key Projects:</h3>
          <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
            {projects.map((project, index) => (
              <li key={index} className="flex items-start text-sm md:text-xs">
                <span className="text-purple-400 mr-2">•</span>
                <span className="text-gray-300">{project}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <div className="flex justify-center">
          <a
            href="/Internship_Letter_Itsolera.pdf"
            download="Internship_Letter_Itsolera.pdf"
            className="flex items-center text-center gap-2 bg-gradient-to-r from-purple-800 to-purple-900 text-white font-semibold py-2 px-4 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/30"
            aria-label="Download internship letter"
          >
            Download Internship Letter
            <MdArrowDownward className="text-lg" />
          </a>
        </div>
      </div>
    </div>
  </div>
</section>

  

  
  );
};

export default WorkExperience;