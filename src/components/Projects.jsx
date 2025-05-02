import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';
import ProjectImage1 from '../assets/1.gif';
import ProjectImage2 from '../assets/coldstore.gif';
import ProjectImage3 from '../assets/newprojectt.gif';
import ProjectImage4 from '../assets/4.gif';
import WhamBamBurgersModal from '../modals/WhamBamBurgersModal';
import ColdStorageModal from '../modals/ColdStorageModal';

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalProject, setModalProject] = useState(null);

  const openModal = (project) => {
    setModalProject(project);
    setShowModal(true);
  };

  const renderModal = () => {
    switch (modalProject) {
      case 'whamBamBurgers':
        return <WhamBamBurgersModal onClose={() => setShowModal(false)} />;
      case 'coldStorage':
        return <ColdStorageModal onClose={() => setShowModal(false)} />;
      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-black text-white -mt-10 px-[1.5cm] py-4">

      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold mb-10 text-gray-100 font-cinzel transition-transform duration-300 hover:text-purple-800 transform hover:scale-90">
          Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {/* Project 1 */}
          <div className="bg-purple-960 p-4 rounded-2xl border border-purple-900 w-full max-w-md hover:bg-purple-800 hover:scale-105 transition-all duration-300">
            <div className="w-full h-32 mb-4 overflow-hidden flex justify-center items-center">
              <img
                src={ProjectImage1}
                alt="Project 1"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">My Watchlist Diaries</h2>
              <p className="text-purple-500 text-sm mb-2">React.js, Node.js, Express, MongoDB</p>
              <p className="text-gray-300 text-sm mb-4">
                A website where I add reviews of all movies and TV shows I've watched, featuring special lists. Built with Tailwind CSS, React, and backend APIs for forms.
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://watchlist-diaries.vercel.app/"
                  className="text-white flex items-center space-x-2 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt className="text-white text-2xl" />
                  <span className="hidden group-hover:inline text-sm">Live Demo</span>
                </a>
                <a
                  href="https://github.com/Ayesha-Iqbal-Codes/Watchlist-Diaries.git"
                  className="text-white flex items-center space-x-2 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-white text-2xl" />
                  <span className="hidden group-hover:inline text-sm">GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Project 2 */}
          <div className="bg-purple-960 p-4 rounded-2xl border border-purple-900 w-full max-w-md hover:bg-purple-800 hover:scale-105 transition-all duration-300">
            <div className="w-full h-32 mb-4 overflow-hidden flex justify-center items-center">
              <img
                src={ProjectImage2}
                alt="Cold Storage Dashboard"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">Cold Storage Dashboard</h2>
              <p className="text-purple-500 text-sm mb-2">React.js</p>
              <p className="text-gray-300 text-sm mb-4">
                A cold storage management dashboard with item management, PDF generation, and real-time tracking across multiple racks.
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://madina-cold-storage-dashboard.vercel.app/"
                  className="text-white flex items-center space-x-2 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt className="text-white text-2xl" />
                  <span className="hidden group-hover:inline text-sm">Live Demo</span>
                </a>
                <button
                  onClick={() => openModal('coldStorage')}
                  className="text-white flex items-center space-x-2 group"
                >
                  <FaInfoCircle className="text-white text-2xl" />
                  <span className="hidden group-hover:inline text-sm">More Details</span>
                </button>
                <a
                  href="https://github.com/Ayesha-Iqbal-Codes/madina-cold-storage-dashboard.git"
                  className="text-white flex items-center space-x-2 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-white text-2xl" />
                  <span className="hidden group-hover:inline text-sm">GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Project 3 */}
          <div className="bg-purple-960 p-4 rounded-2xl border border-purple-900 w-full max-w-md hover:bg-purple-800 hover:scale-105 transition-all duration-300">
            <div className="w-full h-32 mb-4 overflow-hidden flex justify-center items-center">
              <img
                src={ProjectImage3}
                alt="Project 3"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">Ashy Bakes</h2>
              <p className="text-purple-500 text-sm mb-2">React.js</p>
              <p className="text-gray-300 text-sm mb-4">
                A responsive bakery website where users can order products using an Add to Cart feature. Messages from the Contact Us form go directly to the owner's Gmail.
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://bakery-site-phi.vercel.app/"
                  className="text-white flex items-center space-x-2 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt className="text-white text-2xl" />
                  <span className="hidden group-hover:inline text-sm">Live Demo</span>
                </a>
                <a
                  href="https://github.com/Ayesha-Iqbal-Codes/bakery-site.git"
                  className="text-white flex items-center space-x-2 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-white text-2xl" />
                  <span className="hidden group-hover:inline text-sm">GitHub</span>
                </a>
              </div>
            </div>
          </div>

          {/* Project 4 */}
          <div className="bg-purple-960 p-4 rounded-2xl border border-purple-900 w-full max-w-md hover:bg-purple-800 hover:scale-105 transition-all duration-300">
            <div className="w-full h-32 mb-4 overflow-hidden flex justify-center items-center">
              <img
                src={ProjectImage4}
                alt="Wham Bam Burgers"
                className="w-full h-full object-contain rounded-lg"
              />
            </div>
            <div className="text-center">
              <h2 className="text-xl font-semibold mb-2">Wham Bam Burgers</h2>
              <p className="text-purple-500 text-sm mb-2">React.js</p>
              <p className="text-gray-300 text-sm mb-4">
                A fast food website with admin functionality to manage the menu, orders, and user interactions.
              </p>
              <div className="flex justify-center space-x-4">
                <a
                  href="https://wham-bam-burgers.vercel.app/"
                  className="text-white flex items-center space-x-2 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaExternalLinkAlt className="text-white text-2xl" />
                  <span className="hidden group-hover:inline text-sm transition duration-200">
                    Live Demo
                  </span>
                </a>
                <button
                  onClick={() => openModal('whamBamBurgers')}
                  className="text-white flex items-center space-x-2 group"
                >
                  <FaInfoCircle className="text-white text-2xl" />
                  <span className="hidden group-hover:inline text-sm transition duration-200">
                    More Details
                  </span>
                </button>
                <a
                  href="https://github.com/Ayesha-Iqbal-Codes/wham-bam-burgers.git"
                  className="text-white flex items-center space-x-2 group"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <FaGithub className="text-white text-2xl" />
                  <span className="hidden group-hover:inline text-sm transition duration-200">
                    GitHub
                  </span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Modal */}
        {showModal && renderModal()}
      </div>
    </div>
  );
};

export default Projects;