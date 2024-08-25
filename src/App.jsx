
import React from 'react';
import AddSchool from './components/AddSchool';
import ListSchoolsByProximity from './components/ListSchoolsByProximity';
import ListAllSchools from './components/ListAllSchools';

function App() {
  return (
    <div className=" w-full ">  
      <div className="mx-auto p-4   xl:w-3/4 md:space-x-96 ">
        <div>
        <h1 className="text-3xl font-bold mb-8 
        ">School Management System</h1>

        <AddSchool />
        <ListSchoolsByProximity />
        <ListAllSchools />
        </div>
      
      </div>
    </div>
  );
}

export default App;
