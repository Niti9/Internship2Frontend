import React, { useState } from 'react';
import axios from 'axios';

const UpdateSchool = () => {
  const [id, setId] = useState('');
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // await axios.put(`http://localhost:3000/updateSchool/${id}`, {
      await axios.put(`https://internship-task2again.vercel.app/updateSchool/${id}`, {
        name,
        address,
        latitude,
        longitude
      });
      alert('School updated successfully');
      setId('');
      setName('');
      setAddress('');
      setLatitude('');
      setLongitude('');
    } catch (error) {
      alert('Error updating school');
    }
  };

  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Update School</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          placeholder="School ID"
          value={id}
          onChange={(e) => setId(e.target.value)}
          className="p-2 border rounded w-full"
          required
        />
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          className="p-2 border rounded w-full"
          required
        />
        <input
          type="text"
          placeholder="Address"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
          className="p-2 border rounded w-full"
          required
        />
        <input
          type="number"
          step="any"
          placeholder="Latitude"
          value={latitude}
          onChange={(e) => setLatitude(e.target.value)}
          className="p-2 border rounded w-full"
          required
        />
        <input
          type="number"
          step="any"
          placeholder="Longitude"
          value={longitude}
          onChange={(e) => setLongitude(e.target.value)}
          className="p-2 border rounded w-full"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">Update School</button>
      </form>
    </div>
  );
};

export default UpdateSchool;
