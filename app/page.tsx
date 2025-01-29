'use client';

import Link from 'next/link';
import { FaChalkboardTeacher, FaUserShield } from 'react-icons/fa';

export default function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-sky-500 to-sky-100 flex flex-col items-center justify-center">
      {/* Add Header and Welcome Message */}
      <h1 className="text-4xl font-serif mb-4">Hindi Rashtrabhasha Exam System</h1>
      <h2 className="text-4xl font-serif mb-4">हिंदी राष्ट्रभाषा परीक्षा प्रणाली</h2>
      <p className="text-lg text-gray-700 mb-6">Welcome! Please log in to continue.</p>

      <h1 className="text-3xl font-bold mb-6">Login / Register</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Teacher Login / Register */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <FaChalkboardTeacher className="text-5xl mb-4" />
          <h2 className="text-xl font-semibold mb-4">Teacher Portal</h2>
          
          {/* Login Form */}
          <input type="text" placeholder="Username" className="p-2 border rounded mb-2 w-full" />
          <input type="password" placeholder="Password" className="p-2 border rounded mb-2 w-full" />
          <button className="bg-blue-500 text-white px-4 py-2 rounded mb-2 w-full">Login</button>

          {/* Registration Button */}
          <Link href="/register-teacher">
            <button className="bg-green-500 text-white px-4 py-2 rounded w-full">Register</button>
          </Link>
        </div>

        {/* Admin Login / Register */}
        <div className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center">
          <FaUserShield className="text-5xl mb-4" />
          <h2 className="text-xl font-semibold mb-4">Admin Portal</h2>
          
          {/* Login Form */}
          <input type="text" placeholder="Username" className="p-2 border rounded mb-2 w-full" />
          <input type="password" placeholder="Password" className="p-2 border rounded mb-2 w-full" />
          <button className="bg-blue-500 text-white px-4 py-2 rounded mb-2 w-full">Login</button>

          {/* Registration Button */}
          <Link href="/register-admin">
            <button className="bg-green-500 text-white px-4 py-2 rounded w-full">Register</button>
          </Link>
        </div>
      </div>
    </div>
  );
}
