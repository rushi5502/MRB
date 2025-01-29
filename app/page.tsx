'use client';

import Link from 'next/link';
import Image from 'next/image'; // Import the Image component

export default function HomePage() {
  return (
    <div className="flex items-center justify-center h-screen bg-gray-50">
      <div className="p-8 text-center bg-white rounded shadow-md">
        <h1 className="text-3xl font-bold mb-4">Hindi Rashtrabhasha Exam sysytem</h1>
        <h2 className="text-3xl font-bold mb-4">हिंदी राष्ट्रभाषा परीक्षा प्रणाली</h2>
        <p className="mb-6">Welcome! Please log in to continue.</p>
        
        {/* Add an Image */}
        <div className="mb-6">
          <Image 
            src="/path-to-your-image.jpg" // Replace with your image path
            alt="Welcome Image" 
            width={200} // Set the width as needed
            height={200} // Set the height as needed
            className="mx-auto"
          />
        </div>

        <Link
          href="/login"
          className="px-4 py-2 text-white bg-blue-600 rounded hover:bg-blue-700"
        >
          Go to Login
        </Link>
      </div>
    </div>
  );
}
