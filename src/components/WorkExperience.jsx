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
    <section id="work-experience" className="min-h-screen bg-black text-white py-12 px-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl md:text-5xl font-bold mb-8 text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
          Work Experience
        </h1>
        
        <div className="flex flex-col md:flex-row items-center gap-8 mb-12">
          {/* Image */}
          <div className="w-full md:w-80 flex-shrink-0 rounded-xl overflow-hidden shadow-lg hover:shadow-purple-500/50 transition-shadow">
            <img 
              src={ITSOLERAImage} 
              alt="ITSOLERA" 
              className="w-full h-auto object-cover"
              loading="lazy"
            />
          </div>

          {/* Text Section */}
          <div className="flex-1">
            <h2 className="text-2xl md:text-3xl font-semibold mb-2 text-purple-300">AI/ML Intern</h2>
            <p className="text-lg text-gray-400 mb-4">ITSOLERA - 3-Month Internship in Machine Learning</p>
            <p className="text-lg text-gray-300 mb-6 leading-relaxed">
              Developed multiple AI/ML projects focusing on data preprocessing, model development, and evaluation using TensorFlow and Scikit-learn.
            </p>
            
            <div className="bg-gray-800/50 p-6 rounded-lg border border-gray-700 mb-6">
              <h3 className="text-xl font-semibold mb-4 text-purple-300">Key Projects:</h3>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {projects.map((project, index) => (
                  <li key={index} className="flex items-start">
                    <span className="text-purple-400 mr-2">•</span>
                    <span className="text-gray-300">{project}</span>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="flex justify-center md:justify-start">
              <a
                href="/Internship_Letter_Itsolera.pdf"
                download="Internship_Letter_Itsolera.pdf"
                className="flex items-center gap-2 bg-gradient-to-r from-purple-600 to-pink-600 text-white py-3 px-6 rounded-full hover:from-purple-700 hover:to-pink-700 transition-all duration-300 shadow-lg hover:shadow-purple-500/30"
                aria-label="Download internship letter"
              >
                Download Internship Letter
                <MdArrowDownward className="text-xl" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WorkExperience;