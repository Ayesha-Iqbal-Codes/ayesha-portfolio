// src/components/Footer.jsx
import { FaWhatsapp, FaLinkedin, FaEnvelope, FaPhone } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="flex flex-col items-center space-y-4 md:space-y-0 md:flex-row md:justify-between md:space-x-8 max-w-6xl mx-auto px-6">
        <h1 className="text-2xl md:text-3xl transition-transform duration-300 hover:text-purple-800 transform hover:scale-110 font-bold">
          Contact Me
        </h1>
        
        <div className="flex space-x-6">
          <ContactLink 
            href="https://wa.me/923110525508?text=Hello!" 
            icon={<FaWhatsapp />}
            label="WhatsApp"
            colorClass="hover:text-green-500"
          />
          
          <ContactLink 
            href="https://www.linkedin.com/in/ayesha-iqbal-87133a309/" 
            icon={<FaLinkedin />}
            label="LinkedIn"
            colorClass="hover:text-blue-600"
          />
          
          <ContactLink 
            href="mailto:ayesha.iqbal2105@gmail.com" 
            icon={<FaEnvelope />}
            label="Email"
            colorClass="hover:text-red-500"
          />
          
          <ContactLink 
            href="tel:+923110525508" 
            icon={<FaPhone />}
            label="Phone"
            colorClass="hover:text-purple-600"
          />
        </div>
      </div>
    </footer>
  );
};

// Extracted contact link component for better reusability
const ContactLink = ({ href, icon, label, colorClass }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className={`flex flex-col items-center transition ${colorClass}`}
  >
    <span className="text-3xl md:text-4xl">{icon}</span>
    <span className="text-sm mt-1">{label}</span>
  </a>
);

export default Footer;