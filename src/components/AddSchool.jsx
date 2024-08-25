import React, { useState } from 'react';
import axios from 'axios';
import ListAllSchools from './ListAllSchools';

const AddSchool = () => {
  const [name, setName] = useState('');
  const [address, setAddress] = useState('');
  const [latitude, setLatitude] = useState('');
  const [longitude, setLongitude] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // const response = await axios.post('http://localhost:3000/addSchool', {
      const response = await axios.post('https://internship-task2again.vercel.app/addSchool', {
        name,
        address,
        latitude,
        longitude
      });
      alert('School added successfully');
      setName('');
      setAddress('');
      setLatitude('');
      setLongitude('');
    } catch (error) {
      alert('Error adding school');
    }
  };

  return (
 
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-4">Add School</h2>
      <form onSubmit={handleSubmit} className="space-y-4 w-4/6">
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
        <button type="submit" className="bg-slate-800 text-white p-2 rounded text-[18px]">Add School</button>
      </form>
    </div>
 
  );
};

export default AddSchool;
