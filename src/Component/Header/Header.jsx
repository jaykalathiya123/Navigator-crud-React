import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
  return (
<header className="bg-gradient-to-r from-indigo-600 to-blue-800 text-white py-4 shadow-lg">
  <nav className="flex items-center justify-between max-w-7xl mx-auto px-4">
    <h1 className="text-2xl font-extrabold tracking-wide">
      <Link to="/" className="hover:text-blue-300 transition duration-300">
        Student Registration
      </Link>
    </h1>
    <ul className="flex space-x-8 text-lg font-semibold">
      <li>
        <Link
          to="/"
          className="hover:text-blue-300 transition duration-300 underline-offset-4 hover:underline"
        >
          Home
        </Link>
      </li>
      <li>
        <Link
          to="/view-data"
          className="hover:text-blue-300 transition duration-300 underline-offset-4 hover:underline"
        >
          View Data
        </Link>
      </li>
    </ul>
  </nav>
</header>

  );
};

export default Header;
