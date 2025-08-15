import React from "react";

const Settings = () => {
  return (
    <div className="max-w-xl mx-auto p-8 bg-white dark:bg-gray-900 rounded-xl shadow-lg mt-10">
      <h2 className="text-3xl font-bold mb-8 text-gray-900 dark:text-white">Settings</h2>
      {/* Theme Section */}
      <div className="mb-10 p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">Theme</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm">Switch between light and dark mode for your dashboard.</p>
      </div>
      {/* Profile Section */}
      <div className="p-6 bg-gray-50 dark:bg-gray-800 rounded-lg shadow">
        <h3 className="text-lg font-semibold text-gray-800 dark:text-gray-200 mb-1">Profile</h3>
        <p className="text-gray-500 dark:text-gray-400 text-sm mb-4">Update your personal information.</p>
      </div>
    </div>
  );
};

export default Settings; 