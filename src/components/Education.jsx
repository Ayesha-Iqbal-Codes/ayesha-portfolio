import SZABISTLogo from '../assets/szabist.png';
import RootsLogo from '../assets/roots.png';
import CitySchoolLogo from '../assets/city-school-pakistan-logo.png';

const Education = () => {
  return (
    <div className="min-h-screen bg-black text-white flex items-center justify-center py-0">
      <div className="max-w-3xl mx-auto px-4">
         <h1 className="text-center text-5xl sm:text-5xl md:text-6xl font-bold mb-10 text-gray-100 font-cinzel transition-transform duration-300 hover:text-purple-800 transform hover:scale-90">
          Education
        </h1>

        {/* SZABIST University */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="flex-shrink-0 w-16 h-16 md:w-24 md:h-24 mb-4 md:mb-0 md:mr-6">
            <img 
              src={SZABISTLogo} 
              alt="SZABIST" 
              className="w-full h-full rounded-lg" 
              loading="lazy"
            />
          </div>
          <div className="text-center md:text-left flex-1">
            <h2 className="text-lg md:text-xl font-semibold">BSCS, SZABIST University, Islamabad</h2>
            <p className="text-lg text-gray-400">2021 – 2025</p>
          </div>
        </div>

        {/* Roots International */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="flex-shrink-0 w-16 h-16 md:w-24 md:h-24 mb-4 md:mb-0 md:mr-6">
            <img 
              src={RootsLogo} 
              alt="Roots International" 
              className="w-full h-full rounded-lg" 
              loading="lazy"
            />
          </div>
          <div className="text-center md:text-left flex-1">
            <h2 className="text-lg md:text-xl font-semibold">ICS, Roots International, Islamabad</h2>
            <p className="text-lg text-gray-400">2019 – 2020</p>
          </div>
        </div>

        {/* The City School */}
        <div className="flex flex-col md:flex-row items-center mb-8">
          <div className="flex-shrink-0 w-16 h-16 md:w-24 md:h-24 mb-4 md:mb-0 md:mr-6">
            <img 
              src={CitySchoolLogo} 
              alt="The City School" 
              className="w-full h-full rounded-lg" 
              loading="lazy"
            />
          </div>
          <div className="text-center md:text-left flex-1">
            <h2 className="text-lg md:text-xl font-semibold">O-Levels, The City School, Islamabad</h2>
            <p className="text-lg text-gray-400">2018</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
