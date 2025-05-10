import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';

function Home() {
  const { user } = useAuth();

  return (
    <div className="bg-gradient-to-b from-blue-50 to-white">
      {/* Hero section */}
      <div className="relative overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="relative z-10 pb-8 bg-gradient-to-b from-blue-50 to-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
            <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
              <div className="sm:text-center lg:text-left">
                <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                  <span className="block xl:inline">Welcome to</span>{' '}
                  <span className="block text-indigo-600 xl:inline">SeekAsylum</span>
                </h1>
                <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                  A secure platform for managing asylum applications and providing support to those in need.
                </p>
                <div className="mt-5 sm:mt-8 sm:flex sm:justify-center lg:justify-start">
                  {user ? (
                    <div className="rounded-md shadow">
                      <Link
                        to="/profile"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                      >
                        View Profile
                      </Link>
                    </div>
                  ) : (
                    <div className="rounded-md shadow">
                      <Link
                        to="/register"
                        className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 md:py-4 md:text-lg md:px-10"
                      >
                        Get started
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            </main>
          </div>
        </div>
      </div>

      {/* Asylum Highlights section */}
      <div className="py-12 bg-gradient-to-b from-white to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center mb-10">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Highlighted Asylums</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Trusted Asylum Centers
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Explore some of the most reputable asylums and support centers available for applicants.
            </p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Asylum 1 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80"
                alt="Hope Refuge Center"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-indigo-700">Hope Refuge Center</h3>
                <p className="mt-2 text-gray-600">A leading center providing shelter, legal aid, and counseling for asylum seekers.</p>
                <span className="inline-block mt-4 px-3 py-1 text-xs font-semibold bg-indigo-100 text-indigo-800 rounded-full">Open 24/7</span>
              </div>
            </div>
            {/* Asylum 2 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80"
                alt="Safe Haven Asylum"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-indigo-700">Safe Haven Asylum</h3>
                <p className="mt-2 text-gray-600">Known for its family-friendly environment and comprehensive support services.</p>
                <span className="inline-block mt-4 px-3 py-1 text-xs font-semibold bg-green-100 text-green-800 rounded-full">Family Friendly</span>
              </div>
            </div>
            {/* Asylum 3 */}
            <div className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <img
                src="https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80"
                alt="Unity Support Home"
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-lg font-semibold text-indigo-700">Unity Support Home</h3>
                <p className="mt-2 text-gray-600">Offers medical care, language classes, and job placement for new arrivals.</p>
                <span className="inline-block mt-4 px-3 py-1 text-xs font-semibold bg-yellow-100 text-yellow-800 rounded-full">Comprehensive Care</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Everything You Need section */}
      <div className="py-12 bg-gradient-to-b from-blue-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:text-center">
            <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Everything You Need</h2>
            <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
              Our Features
            </p>
            <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
              Discover the tools and support you need for your asylum application.
            </p>
          </div>

          <div className="mt-10">
            <div className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
              {/* Feature 1 */}
              <Link to="/easy-registration" className="relative group hover:bg-indigo-50 rounded-lg transition-colors block">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                  </svg>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 group-hover:text-indigo-700">Easy Registration</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Simple and straightforward registration process to get started quickly.
                  </p>
                </div>
              </Link>
              {/* Feature 2 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
                  </svg>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Secure Platform</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Your data is protected with state-of-the-art security measures.
                  </p>
                </div>
              </div>
              {/* Feature 3 */}
              <div className="relative">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900">Quick Process</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Streamlined application process to help you get the support you need faster.
                  </p>
                </div>
              </div>
              {/* Feature 4 */}
              <Link to="/support-247" className="relative group hover:bg-indigo-50 rounded-lg transition-colors block">
                <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-indigo-500 text-white">
                  <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
                  </svg>
                </div>
                <div className="ml-16">
                  <h3 className="text-lg leading-6 font-medium text-gray-900 group-hover:text-indigo-700">24/7 Support</h3>
                  <p className="mt-2 text-base text-gray-500">
                    Round-the-clock assistance to help you with any questions or concerns.
                  </p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home; 