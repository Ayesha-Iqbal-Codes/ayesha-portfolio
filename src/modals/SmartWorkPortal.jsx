import React from 'react';
import SmartWorkDemo from '../assets/smartwork.mp4'; // Replace with your actual video path

const SmartWorkModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center px-4">
      <div className="bg-[#003747] rounded-xl w-full max-w-3xl p-6 relative shadow-lg overflow-y-auto max-h-[80vh] no-scrollbar">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-2xl font-bold text-white hover:text-red-600"
        >
          ×
        </button>

        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-teal-200 font-serif">
          🚀 𝐒𝐦𝐚𝐫𝐭𝐖𝐨𝐫𝐤 𝐏𝐨𝐫𝐭𝐚𝐥 
        </h2>

        <video controls className="w-full rounded-lg mb-6 shadow-md">
          <source src={SmartWorkDemo} type="video/mp4" />
          Your browser does not support the video tag.
        </video>

        <div className="text-gray-100 space-y-4 text-sm leading-6">
          <p>
            The <strong>SmartWork Portal</strong> is an employee onboarding tracker designed to simplify task management and progress tracking for new interns and their team leads. Built with <strong>React, Node.js, Firebase, and MongoDB</strong>, it ensures role-based access and efficient collaboration.
          </p>

          <h3 className="text-green-400 font-semibold">🔹 𝐅𝐞𝐚𝐭𝐮𝐫𝐞𝐬:</h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              ✅ <strong>Role-Based Dashboards</strong> – Three roles: Admin, Team Lead, and New Intern. Each user sees a dashboard tailored to their role.
            </li>
            <li>
              ✅ <strong>Task Assignment System</strong> – Team Leads can assign tasks to specific interns with title, description, deadline, and optional file uploads.
            </li>
            <li>
              ✅ <strong>Progress Tracking</strong> – Team Leads monitor each intern’s task completion status in real time.
            </li>
            <li>
              ✅ <strong>Firestore Integration</strong> – Tasks and roles are managed using Firestore, ensuring dynamic scaling and secure data storage.
            </li>
            <li>
              ✅ <strong>Email Reminders</strong> – Automated email reminders for pending tasks using a backend Node.js cron job.
            </li>
            <li>
              ✅ <strong>Secure Authentication</strong> – Google sign-in and role validation using Firebase Authentication.
            </li>
          </ul>

          <p>
            This system helps streamline intern onboarding and ensure accountability with minimal admin involvement. Ideal for growing teams and remote-first environments.
          </p>
        </div>
      </div>
    </div>
  );
};

export default SmartWorkModal;
