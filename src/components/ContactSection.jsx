import ContactForm from './ContactForm';

const ContactSection = () => {
  return (
    <section className="bg-black text-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col items-center space-y-10">
        <h1 className="text-3xl md:text-4xl font-bold hover:text-purple-800 transition-transform transform hover:scale-110">
          Contact Me
        </h1>

     

        {/* Contact Form */}
        <ContactForm />
      </div>
    </section>
  );
};

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

export default ContactSection;
