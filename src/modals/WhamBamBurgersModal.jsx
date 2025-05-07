import React from 'react';

const WhamBamBurgersModal = ({ onClose }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-80 z-50 flex items-center justify-center px-4">
      <div className="bg-gray-900 rounded-xl w-full max-w-3xl p-6 relative shadow-lg overflow-y-auto max-h-[80vh] no-scrollbar">
        <button
          onClick={onClose}
          className="absolute top-2 right-4 text-2xl font-bold text-white hover:text-red-600"
        >
          ×
        </button>

        <h2 className="text-2xl sm:text-3xl font-bold mb-4 text-center text-blue-800 font-serif">
          🍔 Wham Bam Burgers – Fast Food Ordering Website
        </h2>

        <div className="text-gray-100 space-y-4 text-sm leading-6">
          <p>
            Wham Bam Burgers is a fully functional fast food web application designed with a modern UI and powerful admin control. The platform supports protected routes, with separate login functionality for users and admins to ensure a secure and personalized experience.
          </p>

          <h3 className="text-purple-800 font-semibold">👥 User Features:</h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>🍟 Log in to your account to start your fast food journey</li>
            <li>🍔 Browse the full burgerlicious menu</li>
            <li>🛒 Add items to cart and place orders easily</li>
            <li>📜 Check your order history anytime</li>
          </ul>

          <h3 className="text-purple-800 font-semibold">🛠️ Admin Features:</h3>

          <ul className="list-disc pl-6 space-y-2">
            <li>🔒 Access a secure Admin Dashboard</li>
            <li>🧾 Add new menu items with image upload and custom details</li>
            <li>✏️ Edit or delete existing menu items in real time</li>
            <li>📬 View all customer orders in a single panel</li>
            <li>🔄 Update order statuses like Preparing, Ready, or Delivered</li>
          </ul>

          <p className="mt-4">
            📝 Note: The current menu is just a dummy menu to demonstrate admin functionality. You can test the full Manage Menu features by adding, editing, or deleting your own items!
          </p>

          <h3 className="mt-4 text-purple-800 font-semibold">🔑 Admin Login Details:</h3>
          <p>Username: <strong>Admin</strong></p>
          <p>Password: <strong>admin123</strong></p>
        </div>
      </div>
    </div>
  );
};

export default WhamBamBurgersModal;