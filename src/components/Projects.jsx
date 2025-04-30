// src/components/Projects.jsx
import { useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaInfoCircle } from 'react-icons/fa';
import ProjectImage1 from '../assets/1.gif';
import ProjectImage2 from '../assets/coldstore.gif';
import ProjectImage3 from '../assets/newprojectt.gif';
import ProjectImage4 from '../assets/4.gif';
import ColdStorageVideo from '../assets/colder.mp4';

const PROJECTS = [
  {
    id: 'watchlist',
    title: 'My Watchlist Diaries',
    description: 'A website where I add reviews of all movies and TV shows I\'ve watched, featuring special lists. Built with Tailwind CSS, React, and backend APIs for forms.',
    technologies: 'React.js, Node.js, Express, MongoDB',
    image: ProjectImage1,
    links: {
      demo: 'https://watchlist-diaries.vercel.app/',
      github: 'https://github.com/Ayesha-Iqbal-Codes/Watchlist-Diaries.git'
    }
  },
  {
    id: 'coldStorage',
    title: 'Cold Storage Dashboard',
    description: 'A cold storage management dashboard with item management, PDF generation, and real-time tracking across multiple racks.',
    technologies: 'React.js',
    image: ProjectImage2,
    links: {
      demo: 'https://madina-cold-storage-dashboard.vercel.app/',
      github: 'https://github.com/Ayesha-Iqbal-Codes/madina-cold-storage-dashboard.git',
      hasModal: true
    }
  },
  {
    id: 'bakery',
    title: 'Ashy Bakes',
    description: 'A responsive bakery website where users can order products using an Add to Cart feature. Messages from the Contact Us form go directly to the owner\'s Gmail.',
    technologies: 'React.js',
    image: ProjectImage3,
    links: {
      demo: 'https://bakery-site-phi.vercel.app/',
      github: 'https://github.com/Ayesha-Iqbal-Codes/bakery-site.git'
    }
  },
  {
    id: 'burgers',
    title: 'Wham Bam Burgers',
    description: 'A fast food website with admin functionality to manage the menu, orders, and user interactions.',
    technologies: 'React.js',
    image: ProjectImage4,
    links: {
      demo: 'https://wham-bam-burgers.vercel.app/',
      github: 'https://github.com/Ayesha-Iqbal-Codes/wham-bam-burgers.git',
      hasModal: true,
      modalContent: 'whamBamBurgers'
    }
  }
];

const Modal = ({ onClose, project }) => {
  if (project === "whamBamBurgers") {
    return (
      <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center px-4">
        <div className="bg-black rounded-xl w-full max-w-3xl p-6 relative shadow-lg overflow-y-auto max-h-[80vh] no-scrollbar">
          <button
            onClick={onClose}
            className="absolute top-2 right-4 text-2xl font-bold text-white hover:text-red-600"
          >
            ×
          </button>

          <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-purple-800 font-serif">
            🍔 Wham Bam Burgers – Fast Food Ordering Website
          </h2>

          <div className="text-gray-100 space-y-4 text-sm leading-6">
            <p>
              Wham Bam Burgers is a fully functional fast food web application designed with a modern UI and powerful admin control.
            </p>

            <h3 className="text-purple-800 font-semibold">👥 User Features:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>🍟 Log in to your account</li>
              <li>🍔 Browse the full burgerlicious menu</li>
              <li>🛒 Add items to cart and place orders easily</li>
              <li>📜 Check your order history</li>
            </ul>

            <h3 className="text-purple-800 font-semibold">🛠️ Admin Features:</h3>
            <ul className="list-disc pl-6 space-y-2">
              <li>🔒 Secure Admin Dashboard</li>
              <li>🧾 Add new menu items with image upload</li>
              <li>✏️ Edit or delete existing menu items</li>
              <li>📬 View all customer orders</li>
              <li>🔄 Update order statuses</li>
            </ul>

            <h3 className="mt-4 text-purple-800 font-semibold">🔑 Admin Login:</h3>
            <p>Username: <strong>Admin</strong></p>
            <p>Password: <strong>admin123</strong></p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center px-4">
      <div className="bg-black rounded-xl w-full max-w-3xl p-6 relative shadow-lg overflow-y-auto max-h-[80vh] no-scrollbar">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-2xl font-bold text-white hover:text-red-600"
        >
          ×
        </button>

        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-purple-800 font-serif">
          Cold Storage Management Dashboard
        </h2>

        <video controls className="w-full rounded-lg mb-6 shadow-md">
          <source src={ColdStorageVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="text-gray-100 space-y-4 text-sm leading-6">
          <p>
            I developed a Cold Storage Management Dashboard using <strong>React.js</strong> with <strong>Auth0 authentication</strong>.
          </p>

          <h3 className="text-purple-800 font-semibold">🔹 Features:</h3>
          <ul className="list-disc pl-6 space-y-2">
            <li>✅ Add, edit, and delete items with full details</li>
            <li>✅ Generate printable PDF reports</li>
            <li>✅ Color-coded rack status system (Green/Yellow/Red)</li>
            <li>✅ Complete history of all records</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const ProjectCard = ({ project, openModal }) => {
  return (
    <div className="bg-purple-960 p-4 rounded-2xl border border-purple-900 w-full max-w-md hover:bg-purple-800 hover:scale-105 transition-all duration-300">
      <div className="w-full h-32 mb-4 overflow-hidden flex justify-center items-center">
        <img
          src={project.image}
          alt={project.title}
          className="w-full h-full object-contain rounded-lg"
          loading="lazy"
        />
      </div>
      <div className="text-center">
        <h2 className="text-xl font-semibold mb-2">{project.title}</h2>
        <p className="text-purple-500 text-sm mb-2">{project.technologies}</p>
        <p className="text-gray-300 text-sm mb-4">{project.description}</p>
        <div className="flex justify-center space-x-4">
          <a
            href={project.links.demo}
            className="text-white flex items-center space-x-2 group"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaExternalLinkAlt className="text-white text-2xl" />
            <span className="hidden group-hover:inline text-sm">Live Demo</span>
          </a>

          {project.links.hasModal && (
            <button
              onClick={() => openModal(project.links.modalContent || project.id)}
              className="text-white flex items-center space-x-2 group"
            >
              <FaInfoCircle className="text-white text-2xl" />
              <span className="hidden group-hover:inline text-sm">Details</span>
            </button>
          )}

          <a
            href={project.links.github}
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
  );
};

const Projects = () => {
  const [showModal, setShowModal] = useState(false);
  const [modalProject, setModalProject] = useState(null);

  const openModal = (project) => {
    setModalProject(project);
    setShowModal(true);
  };

  return (
    <div className="min-h-screen bg-black text-white px-4 py-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-center text-4xl sm:text-5xl md:text-6xl font-bold mb-10 text-gray-100 hover:text-purple-800 transition-all">
          Projects
        </h1>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-items-center">
          {PROJECTS.map((project) => (
            <ProjectCard 
              key={project.id} 
              project={project} 
              openModal={openModal} 
            />
          ))}
        </div>

        {showModal && <Modal onClose={() => setShowModal(false)} project={modalProject} />}
      </div>
    </div>
  );
};

export default Projects;