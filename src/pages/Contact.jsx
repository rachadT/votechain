import React, { useState } from 'react';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    alert('Thank you for your message!'); // Optional feedback
    setFormData({ name: '', email: '', message: '' }); // Reset form
  };

  return (
    <div className="container">
      <h2 className="text-primary fw-bold text-center">Contact Us</h2>
      <p className="lead text-center mt-2">
        We'd love to hear from you. Fill out the form below and we'll get back to you soon.
      </p>
      <form onSubmit={handleSubmit} className="mt-4 mx-auto" style={{ maxWidth: '600px' }}>
        <div className="mb-3">
          <label className="form-label">Name</label>
          <input
            type="text"
            name="name"
            className="form-control"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Email</label>
          <input
            type="email"
            name="email"
            className="form-control"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-3">
          <label className="form-label">Message</label>
          <textarea
            name="message"
            className="form-control"
            rows="4"
            value={formData.message}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="btn btn-primary w-100">Send Message</button>
      </form>
    </div>
  );
};

export default Contact;