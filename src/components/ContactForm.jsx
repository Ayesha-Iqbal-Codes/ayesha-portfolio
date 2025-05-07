import { useState } from 'react';
import { db } from '../firebase';
import { collection, addDoc, Timestamp } from 'firebase/firestore';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await addDoc(collection(db, "contactMessages"), {
        ...formData,
        createdAt: Timestamp.now()
      });

      const templateParams = {
        name: formData.name,
        email: formData.email,
        message: formData.message
      };

      await emailjs.send(
        'service_jbl15ak',
        'template_i1ss76x',
        templateParams,
        'HO2l7MAlWTUHtKPvB'
      );

      toast.success("Thanks for your message! We'll get back to you soon.");
      setFormData({ name: '', email: '', message: '' });

    } catch (error) {
      console.error("Error submitting message:", error);
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <Toaster
        position="top-center"
        toastOptions={{
          style: {
            background: '#2C1A15',  // dark purple-black
            color: 'white',
            border: '1px solid #8a2be2',
            fontFamily: 'system-ui, sans-serif',
            fontSize: '13px',  // Reduced font size
            padding: '10px 20px',
            borderRadius: '8px',
          },
          success: {
            iconTheme: {
              primary: '#8a2be2',
              secondary: '#ffffff',
            },
          },
          error: {
            iconTheme: {
              primary: '#ff4c4c',
              secondary: '#ffffff',
            },
          },
        }}
      />

      <form 
        onSubmit={handleSubmit} 
        className="w-full max-w-sm -mt-2 bg-gradient-to-br from-purple-900 to-black p-4 rounded-xl shadow-2xl space-y-6 border border-purple-500/20"
      >
        <div className="space-y-4">
          <div>
            <label htmlFor="name" className="block text-purple-300 text-sm font-medium mb-1">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              placeholder="John Doe"
              value={formData.name}
              onChange={handleChange}
              required
              className="w-full bg-black/50 text-white border border-purple-900/50 focus:border-purple-500 p-2 rounded-lg focus:ring-2 focus:ring-purple-600 outline-none transition-all"
            />
          </div>

          <div>
            <label htmlFor="email" className="block text-purple-300 text-sm font-medium mb-1">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              required
              className="w-full bg-black/50 text-white border border-purple-900/50 focus:border-purple-500 p-2 rounded-lg focus:ring-2 focus:ring-purple-600 outline-none transition-all"
            />
          </div>

          <div>
            <label htmlFor="message" className="block text-purple-300 text-sm font-medium mb-1">Message</label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message here..."
              value={formData.message}
              onChange={handleChange}
              required
              className="w-full bg-black/50 text-white border border-purple-900/50 focus:border-purple-500 p-2 rounded-lg focus:ring-2 focus:ring-purple-600 outline-none transition-all min-h-[120px]"
            />
          </div>
        </div>

        <button 
          type="submit" 
          disabled={isSubmitting}
          className={`w-full bg-gradient-to-r from-purple-600 to-purple-800 text-white px-4 py-2 rounded-lg font-medium hover:from-purple-700 hover:to-purple-900 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 focus:ring-offset-black transition-all ${isSubmitting ? 'opacity-70 cursor-not-allowed' : ''}`}
        >
          {isSubmitting ? (
            <span className="flex items-center justify-center">
              <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
              </svg>
              Sending...
            </span>
          ) : 'Send Message'}
        </button>
      </form>
    </>
  );
};

export default ContactForm;
