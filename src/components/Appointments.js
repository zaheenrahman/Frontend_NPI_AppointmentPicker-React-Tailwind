import React, { useState, useEffect } from 'react';
import axios from 'axios';
import Search from './Search';
import { FaUserClock } from 'react-icons/fa';

function AppointmentsList() {
  const [appointments, setAppointments] = useState([]);
  const get_url = process.env.REACT_APP_API_URL;
  useEffect(() => {
    // Fetch appointments from the API
    axios.get(get_url)
      .then(response => {
        setAppointments(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the appointments:', error);
      });
  }, [get_url]); // Include get_url in the dependency array

  return (
    <div className="mt-8 px-4">
      <h2 className="text-2xl font-semibold mb-4">Appointments <FaUserClock className="inline-block text-blue-500" /></h2>
      <Search setAppointments={setAppointments} />
      <div className="overflow-x-auto">
        <table className="table-auto w-full bg-gray-100 rounded-lg shadow-lg">
        <thead>
          <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
            <th className="py-3 px-6 text-left">Appointment Time</th>
            <th className="py-3 px-6 text-left">Patient Name</th>
            <th className="py-3 px-6 text-left">Status</th>
          </tr>
        </thead>
        <tbody className="text-gray-600 text-sm font-light">
          {appointments.map(appointment => (
            <tr key={appointment.id} className="border-b border-gray-200 hover:bg-gray-200 transition-colors duration-300">
              <td className="py-3 px-6 text-left whitespace-nowrap">{new Date(appointment.appointment_date).toLocaleString()}</td>
              <td className="py-3 px-6 text-left">{appointment.patient_name}</td>
              <td className="py-3 px-6 text-left">{appointment.status}</td>
            </tr>
          ))}
        </tbody>
        </table>
      </div>
    </div>
  );
}

export default AppointmentsList;