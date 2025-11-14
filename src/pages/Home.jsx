import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="text-center">
      <h1 className="display-4 text-primary fw-bold">Welcome to VoteChain</h1>
      <p className="lead mt-3">
        Your trusted platform for secure, transparent, and modern elections.
      </p>
      <hr className="my-4" />
      <p>
        Explore candidate profiles, learn about our services, and stay informed about upcoming elections.
      </p>
      <Link to="/services" className="btn btn-outline-primary btn-lg mt-3">Explore Services</Link>
    </div>
  );
};

export default Home;