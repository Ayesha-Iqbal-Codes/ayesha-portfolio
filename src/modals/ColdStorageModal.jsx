import React from 'react';
import ColdStorageVideo from '../assets/colder.mp4';

const ColdStorageModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center px-4">
      <div className="bg-[#0a021c] rounded-xl w-full max-w-3xl p-6 relative shadow-lg overflow-y-auto max-h-[80vh] no-scrollbar">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-2xl font-bold text-white hover:text-red-600"
        >
          ×
        </button>

        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-purple-800 font-serif">
          𝐂𝐨𝐥𝐝 𝐒𝐭𝐨𝐫𝐚𝐠𝐞 𝐌𝐚𝐧𝐚𝐠𝐞𝐦𝐞𝐧𝐭 𝐃𝐚𝐬𝐡𝐛𝐨𝐚𝐫𝐝
        </h2>

        <video controls className="w-full rounded-lg mb-6 shadow-md">
          <source src={ColdStorageVideo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="text-gray-100 space-y-4 text-sm leading-6">
          <p>
            I developed a Cold Storage Management Dashboard using <strong>𝐑𝐞𝐚𝐜𝐭.𝐣𝐬</strong> with <strong>Auth0 authentication</strong> ensuring that only authorized users can log in. The dashboard streamlines inventory tracking and provides real-time storage status.
          </p>

          <h3 className="text-purple-800 font-semibold">🔹 𝐅𝐞𝐚𝐭𝐮𝐫𝐞𝐬:</h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              ✅ <strong>𝐀𝐝𝐝 𝐈𝐭𝐞𝐦𝐬 𝐏𝐚𝐠𝐞</strong> – Users can add, edit, and delete item details like Serial No, Company Name, Item Name,
              Quantity, Packaging Type, Vehicle No, Storage Location (Room, Floor, Rack). Data is displayed in a table below with an option
              to generate a printable PDF report.
            </li>
            <li>
              ✅ <strong>𝐒𝐞𝐧𝐝 𝐈𝐭𝐞𝐦𝐬 𝐏𝐚𝐠𝐞</strong> – Entering a Serial No automatically fills in the item's details, allowing quick dispatch with additional input fields.
            </li>
            <li>
              ✅ <strong>𝐒𝐭𝐨𝐫𝐚𝐠𝐞 𝐑𝐨𝐨𝐦 𝐌𝐚𝐧𝐚𝐠𝐞𝐧𝐭</strong> – 
              <ul className="list-disc pl-6 mt-1">
                <li>Three rooms, each with five floors and multiple racks.</li>
                <li>Color-coded rack status for quick identification:</li>
                <ul className="pl-4 mt-1">
                  <li>🟢 <strong>Green</strong> – Empty</li>
                  <li>🟡 <strong>Yellow</strong> – Half-Full</li>
                  <li>🔴 <strong>Red</strong> – Full</li>
                </ul>
              </ul>
            </li>
            <li>
              ✅ <strong>𝐀𝐥𝐥 𝐑𝐞𝐜𝐨𝐫𝐝𝐬 𝐏𝐚𝐠𝐞</strong> – Displays a complete history of added and sent items for easy tracking.
            </li>
          </ul>

          <p>
            With secure access, real-time inventory tracking, and an intuitive storage management system, this dashboard optimizes cold storage operations.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ColdStorageModal;