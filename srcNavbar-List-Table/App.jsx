// src/App.js
import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import About from './pages/About';
import TablePage from './pages/TablePage';
import ListPage from './pages/ListPage';
import './styles/App.css';  // Import global styles

const App = () => {
  return (
    <Router>
      <div>
        {/* Navbar Component */}
        <Navbar />

        <div className="container">
          <hr />
          
          {/* Routes */}
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/table" element={<TablePage />} />
            <Route path="/list" element={<ListPage />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
