// ViewAllBooks.js
import React from 'react';

const ViewSubmissions = ({ info }) => {
  return (
    <div>
      <h1>Doctor Information Form</h1>
      {info.length === 0 ? (
        <p>No information available.</p>
      ) : (
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Speciality</th>
              <th>Contact</th>
              <th>Bio</th>
            </tr>
          </thead>
          <tbody>
            {info.map((info, index) => (
              <tr key={index}>
                <td>{info.Name}</td>
                <td>{info.Speciality}</td>
                <td>{info.Contact}</td>
                <td>{info.Bio}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default ViewSubmissions;