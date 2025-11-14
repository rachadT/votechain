// Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/add-doctor-info">Submit Doctor Info</Link></li>
        <li><Link to="/view-doctor-submissions">View Doctor Submissions</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;