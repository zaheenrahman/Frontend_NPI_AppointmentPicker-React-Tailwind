import React from 'react';
import { FaCheckCircle, FaDatabase, FaCalendarAlt, FaCode } from 'react-icons/fa';

const Home = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg p-6 mb-8">
        <h1 className="text-3xl font-bold mb-4">Appointment Management Project</h1>
        <p className="text-lg mb-4">This application allows you to manage appointments between clinicians and patients.</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-2 flex items-center">
            <FaDatabase className="mr-2 text-blue-500" />
            Backend Information
          </h2>
          <p className="text-lg mb-4">
            The backend for this project implements endpoints to create, read, update, and delete resources such as clinicians, patients, and appointments. It uses an SQLite database to store the data and validates incoming request data. The clinicians table includes an NPI number, which is validated using the NPPES API provided by the US Centers for Medicare & Medicaid Services.
          </p>
        </div>

        <div className="bg-white rounded-lg shadow-lg p-6">
          <h2 className="text-xl font-semibold mb-2 flex items-center">
            <FaCalendarAlt className="mr-2 text-green-500" />
            Frontend Development
          </h2>
          <p className="text-lg mb-4">
            The frontend for this project is built using React.js and communicates with the backend API to fetch appointments data and display it to the user. Users can view appointments, filter them by date range, and perform other actions as necessary.
          </p>
        </div>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
        <h2 className="text-xl font-semibold mb-2 flex items-center">
          <FaCode className="mr-2 text-purple-500" />
          Contributing
        </h2>
        <p className="text-lg mb-4">
          Contributions are welcome! If you'd like to contribute to this project, please follow the steps outlined in the README.md file.
        </p>
      </div>

      <div className="bg-white rounded-lg shadow-lg p-6 mt-8">
        <h2 className="text-xl font-semibold mb-2 flex items-center">
          <FaCheckCircle className="mr-2 text-blue-500" />
          Acknowledgements
        </h2>
        <p className="text-lg">
          - [React.js](https://reactjs.org/)<br />
          - [Axios](https://axios-http.com/)<br />
          - [Tailwind CSS](https://tailwindcss.com/)<br />
          - [NPPES API](https://npiregistry.cms.hhs.gov/)
        </p>
      </div>
    </div>
  );
}

export default Home;