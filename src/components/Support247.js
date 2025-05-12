import React from 'react';
import { Link } from 'react-router-dom';

function Support247() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-200">
      <div className="max-w-2xl w-full bg-white dark:bg-gray-800 p-8 rounded-xl shadow-lg transition-colors duration-200">
        <h1 className="text-3xl font-extrabold text-indigo-700 dark:text-indigo-400 mb-4">24/7 Support</h1>
        <p className="text-gray-700 dark:text-gray-300 mb-6">
          We understand that questions and concerns can arise at any time. That's why our support team is available around the clock to assist you. Whether you need help with your application, have technical issues, or just need someone to talk to, we're here for you—day or night.
        </p>
        <ul className="list-disc pl-6 text-gray-600 dark:text-gray-400 mb-6">
          <li>Live chat and email support available 24/7</li>
          <li>Comprehensive FAQ and help center</li>
          <li>Dedicated support for urgent cases</li>
        </ul>
        <Link to="/" className="btn">Back to Home</Link>
      </div>
    </div>
  );
}

export default Support247; 