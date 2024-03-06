// NavBar.js
import React from 'react';

function NavBar({ currentPage, onNavigate }) {
  return (
    <nav className="bg-blue-500 text-white p-4 flex justify-center">
      <ul className="flex gap-4">
        <li className="inline-block">
          <button
            onClick={() => onNavigate('home')}
            className={`px-4 py-2 rounded outline-none focus:outline-none ${currentPage === 'home' ? 'bg-blue-600 text-white' : 'bg-transparent text-blue-200 hover:bg-blue-600 hover:text-white'}`}
          >
            Home
          </button>
        </li>
        <li className="inline-block">
          <button
            onClick={() => onNavigate('appointments')}
            className={`px-4 py-2 rounded outline-none focus:outline-none ${currentPage === 'appointments' ? 'bg-blue-600 text-white' : 'bg-transparent text-blue-200 hover:bg-blue-600 hover:text-white'}`}
          >
            Appointment List
          </button>
        </li>
        {/* Add more navigation items as needed */}
      </ul>
    </nav>
  );
}

export default NavBar;