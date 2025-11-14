// src/pages/Candidate.jsx
import React from 'react';
import { useParams, Link } from 'react-router-dom';

const Candidate = () => {
  const { id } = useParams();

  // Placeholder data — later you can fetch real data based on `id`
  const candidateData = {
    1: {
      name: 'Layla Haddad',
      party: 'Progressive Alliance',
      bio: 'Layla is a tech-savvy reformist focused on transparency and youth empowerment.',
    },
    2: {
      name: 'Omar Khalil',
      party: 'Unity Front',
      bio: 'Omar is a seasoned diplomat advocating for national unity and economic growth.',
    },
  };

  const candidate = candidateData[id] || {
    name: 'Unknown Candidate',
    party: 'N/A',
    bio: 'No information available for this candidate.',
  };

  return (
    <div className="text-center">
      <h2 className="text-primary fw-bold">Candidate Profile</h2>
      <p className="lead mt-3">{candidate.name}</p>
      <p><strong>Party:</strong> {candidate.party}</p>
      <p>{candidate.bio}</p>

      <div className="mt-4">
        <Link to="/services" className="btn btn-outline-primary me-2">Back to Services</Link>
        <Link to="/" className="btn btn-primary">Home</Link>
      </div>
    </div>
  );
};

export default Candidate;