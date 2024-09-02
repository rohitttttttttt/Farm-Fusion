import React, { useState } from 'react';

// Sample data for video tutorials
const tutorials = [
  { id: 1, title: 'Introduction to React', description: 'Learn the basics of React.', videoUrl: 'https://www.youtube.com/embed/dQw4w9WgXcQ' },
  { id: 2, title: 'Advanced CSS Techniques', description: 'Deep dive into CSS features.', videoUrl: 'https://www.youtube.com/embed/3J4CpY76IqA' },
  { id: 3, title: 'JavaScript ES6 Features', description: 'Explore new features of JavaScript ES6.', videoUrl: 'https://www.youtube.com/embed/PkJESxb9Kxk' },
];

const VideoTutorials = () => {
  const [selectedVideo, setSelectedVideo] = useState(tutorials[0].videoUrl);

  const handleVideoSelect = (url) => {
    setSelectedVideo(url);
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <div className="max-w-4xl mx-auto">
        {/* Video Player */}
        <div className="mb-6">
          <iframe
            src={selectedVideo}
            frameBorder="0"
            allowFullScreen
            className="w-full h-64 md:h-80 lg:h-96 rounded-lg shadow-lg"
            title="Video Tutorial"
          ></iframe>
        </div>

        {/* Tutorials List */}
        <div className="flex flex-col md:flex-row md:space-x-6">
          <div className="md:w-1/3">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">Tutorials</h2>
            <ul className="space-y-4">
              {tutorials.map((tutorial) => (
                <li
                  key={tutorial.id}
                  className="bg-white p-4 rounded-lg shadow-md cursor-pointer hover:bg-gray-100 transition duration-300 ease-in-out"
                  onClick={() => handleVideoSelect(tutorial.videoUrl)}
                >
                  <h3 className="text-lg font-semibold text-gray-900">{tutorial.title}</h3>
                  <p className="text-gray-600 mt-1">{tutorial.description}</p>
                </li>
              ))}
            </ul>
          </div>

          {/* Additional Information (optional) */}
          <div className="md:w-2/3 mt-6 md:mt-0">
            <h2 className="text-2xl font-bold text-gray-800 mb-4">About This Feature</h2>
            <p className="text-gray-700">
              This section contains video tutorials that will help you understand various features and functionalities of our app. Click on a tutorial from the list to watch it here.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VideoTutorials;
