import React from 'react';
import { Link } from 'react-router-dom';

const About = () => {
  return (
    <div className="text-center">
      <h2 className="text-primary fw-bold">About VoteChain</h2>
      <p className="lead mt-3">
        VoteChain is a modern election portal designed to bring transparency, security, and accessibility to the voting process.
      </p>
      <hr className="my-4" />
      <p>
        Our mission is to ensure that every vote counts and every voice is heard.
      </p>
      <div className="mt-4">
        <Link to="/contact" className="btn btn-primary">Contact Us</Link>
      </div>
    </div>
  );
};

export default About;