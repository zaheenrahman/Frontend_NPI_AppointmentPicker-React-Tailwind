import React, { useState } from 'react';
import axios from 'axios';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';

const Search = ({ setAppointments }) => {
    const [startDate, setStartDate] = useState(null);
    const [endDate, setEndDate] = useState(null);
    const get_url = process.env.REACT_APP_API_URL;

    const handleFilterSubmit = (e) => {
        e.preventDefault();
        let filterUrl = get_url;
        const params = new URLSearchParams();
        
        if (startDate) params.append('start', startDate.toISOString());
        if (endDate) params.append('end', endDate.toISOString());
        
        if (params.toString()) filterUrl += `?${params.toString()}`;
        
        axios.get(filterUrl)
          .then(response => {
            setAppointments(response.data);
          })
          .catch(error => {
            console.error('There was an error fetching the appointments:', error);
          });
    };

    return (
        <div className="mb-4">
            <form onSubmit={handleFilterSubmit} className="flex gap-4">
                <DatePicker
                    selected={startDate}
                    onChange={date => setStartDate(date)}
                    selectsStart
                    startDate={startDate}
                    endDate={endDate}
                    placeholderText="Start Date"
                    className="border p-2"
                    dateFormat="MM/dd/yyyy"
                    showYearDropdown
                    scrollableYearDropdown
                />
                <DatePicker
                    selected={endDate}
                    onChange={date => setEndDate(date)}
                    selectsEnd
                    startDate={startDate}
                    endDate={endDate}
                    placeholderText="End Date"
                    className="border p-2"
                    dateFormat="MM/dd/yyyy"
                    showYearDropdown
                    scrollableYearDropdown
                />
                <button type="submit" className="bg-blue-500 text-white p-2">Filter</button>
            </form>
        </div>
    )
}

export default Search;