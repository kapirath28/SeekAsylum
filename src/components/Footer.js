import React from 'react';
import { Link } from 'react-router-dom';

function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="hover:text-indigo-400 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/register" className="hover:text-indigo-400 transition-colors">
                  Register
                </Link>
              </li>
              <li>
                <Link to="/login" className="hover:text-indigo-400 transition-colors">
                  Login
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Resources</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/easy-registration" className="hover:text-indigo-400 transition-colors">
                  Easy Registration
                </Link>
              </li>
              <li>
                <Link to="/support" className="hover:text-indigo-400 transition-colors">
                  Support 24/7
                </Link>
              </li>
              <li>
                <Link to="/asylum-near-you" className="hover:text-indigo-400 transition-colors">
                  Asylum Near You
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold mb-4">Contact Us</h3>
            <ul className="space-y-2">
              <li>
                <a href="mailto:support@seekasylum.com" className="hover:text-indigo-400 transition-colors">
                  support@seekasylum.com
                </a>
              </li>
              <li>
                <a href="tel:+1234567890" className="hover:text-indigo-400 transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li>
                <a href="https://www.seekasylum.com/help" target="_blank" rel="noopener noreferrer" className="hover:text-indigo-400 transition-colors">
                  Help Center
                </a>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 pt-8 border-t border-gray-700 text-center">
          <p>&copy; {new Date().getFullYear()} SeekAsylum. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer; 