import React from 'react';
import { Link } from 'react-router-dom';

const Services = () => {
  return (
    <div className="text-center">
      <h2 className="text-primary fw-bold">Our Services</h2>
      <p className="lead mt-3">
        VoteChain provides a suite of tools to modernize and secure the election process.
      </p>
      <hr className="my-4" />

      <ul className="list-group list-group-flush">
        <li className="list-group-item">🗳️ Voter Registration and Verification</li>
        <li className="list-group-item">🔐 Secure Online Voting Platform</li>
        <li className="list-group-item">📊 Real-Time Vote Counting and Results</li>
        <li className="list-group-item">📁 Candidate Profiles and Campaign Info</li>
        <li className="list-group-item">📅 Election Calendar and Notifications</li>
      </ul>

      <div className="mt-4">
        <Link to="/candidate/1" className="btn btn-outline-primary">View Candidate</Link>
      </div>
    </div>
  );
};

export default Services;