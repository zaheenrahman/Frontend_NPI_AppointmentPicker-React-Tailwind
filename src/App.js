// App.js
import React, { useState } from 'react';
import NavBar from './components/Navbar';
import AppointmentsList from './components/Appointments';
import Home from './components/Home';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  return (
    <div className="App">
      <NavBar onNavigate={handleNavigate} />
      <div className="container mx-auto mt-8">
        {currentPage === 'home' && <Home />}
        {currentPage === 'appointments' && <AppointmentsList />}
      </div>
    </div>
  );
}

export default App;