import React, { useState } from "react";

function ContactForm() {
  const [state, setState] = useState({
    fname: "",
    email: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState({ ...state, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(JSON.stringify(state, null, 2));
  };

  return (
    <form id="contact-form" onSubmit={handleSubmit}>
      <label htmlFor="fname">Full Name</label>
      <input
        name="fname"
        type="text"
        placeholder="Enter full name..."
        onChange={handleChange}
        value={state.fname}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        name="email"
        type="email"
        placeholder="Enter email..."
        onChange={handleChange}
        value={state.email}
        required
      />

      <label htmlFor="message">Message</label>
      <textarea
        name="message"
        rows="6"
        placeholder="Enter message..."
        onChange={handleChange}
        value={state.message}
        required
      ></textarea>

      <button type="submit">Send Message</button>
    </form>
  );
}

export default ContactForm;
