import React from 'react';
import { Link } from 'react-router-dom';

function AsylumNearYou() {
  const asylumCenters = [
    {
      id: 1,
      name: "Hope Refuge Center",
      location: "123 Main Street, New York, NY",
      services: ["Legal Aid", "Medical Care", "Counseling", "Language Classes"],
      contact: "+1 (555) 123-4567",
      hours: "24/7",
      image: "https://images.unsplash.com/photo-1506744038136-46273834b3fb?auto=format&fit=crop&w=600&q=80",
      description: "A leading center providing comprehensive support for asylum seekers, including legal assistance, medical care, and counseling services."
    },
    {
      id: 2,
      name: "Safe Haven Asylum",
      location: "456 Oak Avenue, Los Angeles, CA",
      services: ["Family Support", "Education", "Job Training", "Housing Assistance"],
      contact: "+1 (555) 234-5678",
      hours: "Mon-Sun 8:00 AM - 8:00 PM",
      image: "https://images.unsplash.com/photo-1464983953574-0892a716854b?auto=format&fit=crop&w=600&q=80",
      description: "Known for its family-friendly environment and comprehensive support services, including education and job training programs."
    },
    {
      id: 3,
      name: "Unity Support Home",
      location: "789 Pine Road, Chicago, IL",
      services: ["Medical Care", "Language Classes", "Job Placement", "Mental Health Support"],
      contact: "+1 (555) 345-6789",
      hours: "24/7",
      image: "https://images.unsplash.com/photo-1519125323398-675f0ddb6308?auto=format&fit=crop&w=600&q=80",
      description: "Offers medical care, language classes, and job placement services for new arrivals, with a focus on mental health support."
    },
    {
      id: 4,
      name: "New Horizons Center",
      location: "321 Elm Street, Miami, FL",
      services: ["Legal Aid", "Education", "Cultural Integration", "Emergency Shelter"],
      contact: "+1 (555) 456-7890",
      hours: "Mon-Sun 7:00 AM - 10:00 PM",
      image: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=600&q=80",
      description: "Provides emergency shelter and comprehensive support services, with a strong focus on cultural integration and education."
    },
    {
      id: 5,
      name: "Freedom House",
      location: "654 Maple Drive, Seattle, WA",
      services: ["Legal Aid", "Medical Care", "Education", "Community Support"],
      contact: "+1 (555) 567-8901",
      hours: "24/7",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
      description: "A community-focused center offering legal aid, medical care, and educational support for asylum seekers."
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-white dark:from-gray-900 dark:to-gray-800 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-extrabold text-gray-900 dark:text-white sm:text-5xl sm:tracking-tight lg:text-6xl">
            Asylum Centers Near You
          </h1>
          <p className="mt-5 max-w-xl mx-auto text-xl text-gray-500 dark:text-gray-400">
            Find the nearest asylum centers and support services in your area. Each center offers unique services to help you on your journey.
          </p>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {asylumCenters.map((center) => (
            <div key={center.id} className="bg-white dark:bg-gray-800 rounded-lg shadow-lg overflow-hidden hover:shadow-2xl transition-shadow">
              <img
                src={center.image}
                alt={center.name}
                className="w-full h-48 object-cover"
              />
              <div className="p-6">
                <h3 className="text-xl font-semibold text-indigo-700 dark:text-indigo-400 mb-2">
                  {center.name}
                </h3>
                <p className="text-gray-600 dark:text-gray-300 mb-4">
                  {center.description}
                </p>
                <div className="mb-4">
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Location:</span> {center.location}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Hours:</span> {center.hours}
                  </p>
                  <p className="text-gray-700 dark:text-gray-300">
                    <span className="font-semibold">Contact:</span> {center.contact}
                  </p>
                </div>
                <div className="flex flex-wrap gap-2">
                  {center.services.map((service, index) => (
                    <span
                      key={index}
                      className="inline-block px-3 py-1 text-xs font-semibold bg-indigo-100 text-indigo-800 dark:bg-indigo-900 dark:text-indigo-200 rounded-full"
                    >
                      {service}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link
            to="/"
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 dark:bg-indigo-500 dark:hover:bg-indigo-600"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </div>
  );
}

export default AsylumNearYou; 