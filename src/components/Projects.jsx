import React, { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';
import ProjectImage1 from '../assets/1.gif'; // Watchlist Diaries
import ProjectImage2 from '../assets/coldstore.gif'; // Cold Storage
import ProjectImage3 from '../assets/newprojectt.gif'; // Bakery
import ProjectImage4 from '../assets/4.gif'; // Wham Bam Burgers
import SmartWorkGif from '../assets/smart.gif'; // Smart Work Portal
import VibinGif from '../assets/vibinn.gif'; // Vibin App

import WhamBamBurgersModal from '../modals/WhamBamBurgersModal';
import ColdStorageModal from '../modals/ColdStorageModal';
import SmartWorkPortalModal from '../modals/SmartWorkPortal';
import VibinModal from '../modals/VibinModal';

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
      case 'smartWorkPortal':
        return <SmartWorkPortalModal onClose={() => setShowModal(false)} />;
      case 'vibin':
        return <VibinModal onClose={() => setShowModal(false)} />;
      default:
        return null;
    }
  };

  const projects = [
    {
      id: 1,
      image: SmartWorkGif,
      title: 'SmartWork Portal ',
      description: 'An onboarding system for team leads to assign and track intern tasks with automated email reminders.',
      tech: 'MERN, Firebase',
      liveLink: 'https://smart-work-portal.vercel.app/',
      githubLink: 'https://github.com/Ayesha-Iqbal-Codes/Smart-Work-Portal.git',
      modalAction: () => openModal('smartWorkPortal'),
    },
    {
      id: 2,
      image: VibinGif,
      title: "Vibin Chatroom",
      description: "A real-time chat-based social app with genre-based chatrooms and song sharing.",
      tech: 'React.js, Node.js, Socket.IO',
      liveLink: 'https://vibin-chatroom-frontend.vercel.app/',
      githubLink: 'https://github.com/Ayesha-Iqbal-Codes/vibin-chatroom-frontend.git',
      modalAction: () => openModal('vibin'),
    },
    {
      id: 3,
      image: ProjectImage1,
      title: 'My Watchlist Diaries',
      description: 'A personal website for writing and reviewing all movies and shows watched.',
      tech: 'React.js, Node.js, Express, MongoDB',
      liveLink: 'https://watchlist-diaries.vercel.app/',
      githubLink: 'https://github.com/Ayesha-Iqbal-Codes/Watchlist-Diaries.git',
    },
    {
      id: 4,
      image: ProjectImage4,
      title: 'Wham Bam Burgers',
      description: 'A fast food website with protected user/admin routes, menu & order management.',
      tech: 'React.js',
      liveLink: 'https://wham-bam-burgers.vercel.app/',
      githubLink: 'https://github.com/Ayesha-Iqbal-Codes/wham-bam-burgers.git',
      modalAction: () => openModal('whamBamBurgers'),
    },
    {
      id: 5,
      image: ProjectImage2,
      title: 'Cold Storage Dashboard',
      description: 'Cold storage management dashboard with real-time rack data, PDF export, and controls.',
      tech: 'React.js',
      liveLink: 'https://madina-cold-storage-dashboard.vercel.app/',
      githubLink: 'https://github.com/Ayesha-Iqbal-Codes/madina-cold-storage-dashboard.git',
      modalAction: () => openModal('coldStorage'),
    },
    {
      id: 6,
      image: ProjectImage3,
      title: 'Ashy Bakes',
      description: 'Responsive bakery website with cart functionality and direct email from contact form.',
      tech: 'React.js',
      liveLink: 'https://bakery-site-phi.vercel.app/',
      githubLink: 'https://github.com/Ayesha-Iqbal-Codes/bakery-site.git',
    },
  ];

  return (
    <div className="min-h-screen bg-black text-white -mt-10 px-[1.5cm] py-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-5xl sm:text-5xl md:text-6xl font-bold mb-10 text-gray-100 font-cinzel transition-transform duration-300 hover:text-purple-800 transform hover:scale-90">
          Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-purple-960 p-4 rounded-2xl border border-purple-900 w-full max-w-md hover:bg-purple-800 hover:scale-105 transition-all duration-300"
            >
              <div className="w-full h-32 mb-4 overflow-hidden flex justify-center items-center">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-contain rounded-lg"
                />
              </div>
              <div className="text-center">
                <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
                <p className="text-purple-500 text-sm mb-2">{project.tech}</p>
                <p className="text-gray-300 text-sm mb-4">{project.description}</p>
                <div className="flex justify-center space-x-4">
                  <a
                    href={project.liveLink}
                    className="text-white flex items-center space-x-2 group"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaExternalLinkAlt className="text-white text-2xl" />
                    <span className="hidden group-hover:inline text-sm">Live Demo</span>
                  </a>
                  {project.modalAction && (
                    <button
                      onClick={project.modalAction}
                      className="text-white flex items-center space-x-2 group"
                    >
                      <FaInfoCircle className="text-white text-2xl" />
                      <span className="hidden group-hover:inline text-sm">More Details</span>
                    </button>
                  )}
                  <a
                    href={project.githubLink}
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
          ))}
        </div>

        {/* Modal */}
        {showModal && renderModal()}
      </div>
    </div>
  );
};

export default Projects;
