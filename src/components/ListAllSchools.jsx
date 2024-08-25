import React, { useState, useEffect } from 'react';
import axios from 'axios';

const ListAllSchools = () => {
  const [schools, setSchools] = useState([]);

  useEffect(() => {
    const fetchSchools = async () => {
      try {
        // const response = await axios.get('http://localhost:3000/getAllSchools');
        const response = await axios.get('https://internship-task2again.vercel.app/getAllSchools');
        setSchools(response.data);
      } catch (error) {
        alert('Error fetching schools');
      }
    };

    fetchSchools();
  }, []);



  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:3000/deleteSchool/${id}`);
      setSchools(schools.filter(school => school.id !== id));
      alert('School deleted successfully');
    } catch (error) {
      alert('Error deleting school');
    }
  };

  return (
    <div className="p-4 ">
      <h2 className="text-2xl font-bold mb-4 ">List All Schools</h2>
      <div className="">
      <ul className='flex flex-wrap gap-4'>
        {schools.map(school => (
          <li key={school.id} className="border p-3  mb-2 text-justify rounded-lg
           hover:bg-slate-800 hover:text-yellow-100
          
          transition-all duration-200">
            <h3 className="font-bold text-xl">School Name : {school.name}</h3>
            <p className='font-semibold text-xl'>Address: {school.address}</p>
            <p className='font-semibold text-xl'>Latitude: {school.latitude}</p>
            <p className='font-semibold text-xl'>Longitude: {school.longitude}</p>
            <button onClick={() => handleDelete(school.id)} className="bg-red-500 text-white p-2 rounded mt-2">Delete</button>
          </li>
        ))}
      </ul>

      </div>
    </div>
  );
};

export default ListAllSchools;
