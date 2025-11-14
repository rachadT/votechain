// App.js
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './Navbar';
import DoctorForm from './DoctorForm';
import ViewSubmissions from './ViewSubmissions';
import logo from '../assets/images/image.png';

const App = () => {
  const [doctors, setBooks] = useState([]);

  const addDoctor = (doctor) => {
    setBooks([...doctors, doctor]);
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<h1>Welcome to the Doctor Information Portal</h1>} />
        <img src={logo} alt="image" />
        <Route path="/add-doctor-info" element={<DoctorForm addDoctor={addDoctor} />} />
        <Route path="/view-doctor-submissions" element={<ViewSubmissions doctor={doctors} />} />
      </Routes>
    </Router>
  );
};

export default App;