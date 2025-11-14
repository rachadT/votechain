// src/components/Footer.js
import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-dark text-white text-center py-3 mt-5">
      <p>&copy; {new Date().getFullYear()} VoteChain Election Portal. All rights reserved.</p>
    </footer>
  );
};

export default Footer;