// BookForm.js
import React, { useState } from 'react';

const DoctorForm = ({ addData }) => {
  const [formData, setFormData] = useState({ Name: '', Speciality: '',ContactInfo:'', Bio:'' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newData = {
      Name: formData.Name,
      Speciality: formData.Speciality,
      ContactInfo: formData.ContactInfo,
      Bio:formData.Bio,
    };
    addData(newData);
    alert(`Data added: \nName: ${formData.Name} \nSpeciality: ${formData.Speciality} \nContact Info: ${formData.ContactInfo} \nBio: ${formData.Bio} `);
    setFormData({ Name: '', Speciality: '', ContactInfo:'', Bio:'', });
  };

  return (
    <div>
      <h1>Doctor Information Form</h1>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Full Name: </label>
          <input
            type="text"
            name="name"
            value={formData.Name}
            onChange={handleChange}
            required
          />
        </div>
        <div>
          <label>Speciality: </label>
          <input
            type="text"
            name="speciality"
            value={formData.Speciality}
            onChange={handleChange}
            required
          />
        </div>
         <div>
          <label>ContactInfo: </label>
          <input
            type="text"
            name="contact info"
            value={formData.ContactInfo}
            onChange={handleChange}
            required
          />
        </div>
         <div>
          <label>Bio: </label>
          <input
            type="text"
            name="bio"
            value={formData.Bio}
            onChange={handleChange}
            required
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default DoctorForm;