import React from 'react';
import VibinDemo from '../assets/vibin.mp4'; 

const VibinModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center px-4">
      <div className="bg-pink-900/90 rounded-xl w-full max-w-3xl p-6 relative shadow-lg overflow-y-auto max-h-[80vh] no-scrollbar">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-2xl font-bold text-white hover:text-red-600"
        >
          ×
        </button>

        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-pink-500 font-serif">
          🎧 𝐕𝐢𝐛𝐢𝐧' – 𝐂𝐡𝐚𝐭 𝐑𝐨𝐨𝐦 𝐒𝐨𝐜𝐢𝐚𝐥 𝐀𝐩𝐩
        </h2>

        <video controls className="w-full rounded-lg mb-6 shadow-md">
          <source src={VibinDemo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="text-gray-100 space-y-4 text-sm leading-6">
          <p>
            <strong>Vibin'</strong> is a real-time chatroom social media app built using the <strong>MERN stack</strong> with <strong>Socket.IO</strong>. Users can join themed rooms like music, books, and movies, chat instantly, and switch between light and dark modes.
          </p>

          <h3 className="text-pink-500 font-semibold">🔹 𝐅𝐞𝐚𝐭𝐮𝐫𝐞𝐬:</h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              💬 <strong>Genre-Based Chatrooms</strong> – Users can join rooms like Music, Books, or Movies to discuss their interests.
            </li>
            <li>
              🎨 <strong>Light/Dark Theme Toggle</strong> – Easily switch between light and dark UI for a personalized experience.
            </li>
            <li>
              ⚡ <strong>Real-Time Messaging</strong> – Instant communication powered by Socket.IO.
            </li>
            <li>
              👤 <strong>Nicknames</strong> – Join any room by just entering a nickname – no sign-in required.
            </li>
            <li>
              🔒 <strong>Clean & Responsive UI</strong> – Built with Tailwind CSS and React for a seamless, modern look.
            </li>
          </ul>

          <p>
            Vibin' offers a fun and fast way to connect with others over shared interests through live conversation rooms. Ideal for casual discussions and topic-based group chats.
          </p>
        </div>
      </div>
    </div>
  );
};

export default VibinModal;
