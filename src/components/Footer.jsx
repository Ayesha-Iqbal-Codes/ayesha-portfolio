import { FaWhatsapp, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white">
      {/* Purple bar with content */}
      <div className="bg-purple-800 py-4 px-6">
        <div className="container mx-auto flex flex-col md:flex-row items-center justify-between">
          {/* Copyright text centered on mobile, left on desktop */}
          <div className="w-full md:w-auto text-center md:text-left mb-2 md:mb-0 order-1 md:order-none">
            <p className="text-sm md:text-base">&copy; {new Date().getFullYear()} Ayesha Iqbal. All rights reserved.</p>
          </div>
          
          {/* Icons on right - hidden on mobile, shown on desktop */}
          <div className="hidden md:flex space-x-4 md:space-x-6">
            <ContactLink 
              href="https://wa.me/923110525508?text=Hello!" 
              icon={<FaWhatsapp className="text-2xl" />}
              colorClass="hover:text-green-500"
            />
            
            <ContactLink 
              href="https://www.linkedin.com/in/ayesha-iqbal-87133a309/" 
              icon={<FaLinkedin className="text-2xl" />}
              colorClass="hover:text-blue-400"
            />
            
            <ContactLink 
              href="mailto:ayesha.iqbal2105@gmail.com" 
              icon={<FaEnvelope className="text-2xl" />}
              colorClass="hover:text-red-400"
            />
            
            <ContactLink 
              href="tel:+923110525508" 
              icon={<FaPhone className="text-2xl" />}
              colorClass="hover:text-purple-300"
            />
          </div>
        </div>

        {/* Icons centered and smaller - shown only on mobile */}
        <div className="md:hidden flex justify-center space-x-6 mt-3">
          <ContactLink 
            href="https://wa.me/923110525508?text=Hello!" 
            icon={<FaWhatsapp className="text-xl" />}
            colorClass="hover:text-green-500"
          />
          
          <ContactLink 
            href="https://www.linkedin.com/in/ayesha-iqbal-87133a309/" 
            icon={<FaLinkedin className="text-xl" />}
            colorClass="hover:text-blue-400"
          />
          
          <ContactLink 
            href="mailto:ayesha.iqbal2105@gmail.com" 
            icon={<FaEnvelope className="text-xl" />}
            colorClass="hover:text-red-400"
          />
          
          <ContactLink 
            href="tel:+923110525508" 
            icon={<FaPhone className="text-xl" />}
            colorClass="hover:text-purple-300"
          />
        </div>
      </div>
    </footer>
  );
};

// Contact link component
const ContactLink = ({ href, icon, colorClass }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`transition-colors duration-300 ${colorClass}`}
  >
    {icon}
  </a>
);

export default Footer;