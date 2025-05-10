import React from 'react';
import { Link } from 'react-router-dom';

function AsylumNearYou() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-2xl w-full bg-white p-8 rounded-xl shadow-lg">
        <h1 className="text-3xl font-extrabold text-indigo-700 mb-4">Asylum Near You</h1>
        <p className="text-gray-700 mb-6">
          Find the nearest asylum centers and support services in your area. Our platform provides detailed information about each center, including contact details, services offered, and user reviews. We're here to help you connect with the right resources quickly and efficiently.
        </p>
        <ul className="list-disc pl-6 text-gray-600 mb-6">
          <li>Interactive map to locate nearby asylums</li>
          <li>Detailed profiles of each center</li>
          <li>User reviews and ratings</li>
        </ul>
        <Link to="/" className="btn">Back to Home</Link>
      </div>
    </div>
  );
}

export default AsylumNearYou; 