import React from 'react';
import { Link } from 'react-router-dom';

function EasyRegistration() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-extrabold text-indigo-700 mb-4">Easy Registration</h1>
        <p className="text-gray-700 mb-6">
          Our registration process is designed to be as simple and straightforward as possible. Just provide your email and password, and you'll be ready to access all the features of SeekAsylum. No complicated forms, no unnecessary steps—just a quick and secure way to get started on your journey.
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Quick sign-up with minimal information</li>
          <li>Instant access to your dashboard</li>
          <li>Secure data handling from the start</li>
        </ul>
        <Link to="/register" className="btn">Register Now</Link>
      </div>
    </div>
  );
}

export default EasyRegistration; 