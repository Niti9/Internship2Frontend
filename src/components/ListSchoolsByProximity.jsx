import React, { useState } from 'react';
import axios from 'axios';

const ListSchoolsByProximity = () => {
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');
  const [schools, setSchools] = useState([]);

  const handleFetch = async () => {
    try {
      // const response = await axios.get('http://localhost:3000/listSchools', {
      const response = await axios.get('https://internship-task2again.vercel.app/listSchools', {
        params: { latitude, longitude }
      });
      setSchools(response.data);
    } catch (error) {
      alert('Error fetching schools');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">List Schools by Proximity</h2>
      <div className="mb-4">
        <input
          type="number"
          step="any"
          placeholder="Latitude"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          className="p-2 border rounded mr-2"
          required
        />
        <input
          type="number"
          step="any"
          placeholder="Longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          className="p-2 border rounded mr-2"
          required
        />
        <button onClick={handleFetch} className="bg-slate-800 text-white p-2 rounded text-[18px]">Fetch Schools</button>
      </div>
      <ul className='w-2/4  '>
        {schools.map(school => (
          <li key={school.id} className="border border-gray-900 bg-slate-800 text-yellow-100 p-2 mb-2 rounded-xl px-4 py-4">
            <h3 className="font-bold text-xl">School name: {school.name}</h3>
            <p className='font-semibold text-xl'>School address:  {school.address}</p>
            <p className='font-semibold text-xl'>Latitude: {school.latitude}</p>
            <p className='font-semibold text-xl'>Longitude: {school.longitude}</p>
            <p className='font-semibold text-xl'>Distance: {school.distance.toFixed(2)} miles</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ListSchoolsByProximity;
