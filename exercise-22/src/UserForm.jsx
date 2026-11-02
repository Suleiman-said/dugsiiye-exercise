import React, { useState } from 'react';

function UserForm() {
  // 1. Manage form data using a single state object
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'user', // default value for select dropdown
    subscribe: false, // boolean for checkbox
  });

  // State to store and display submitted data
  const [submittedData, setSubmittedData] = useState(null);

  // 2. Handle change for all inputs
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? checked : value,
    }));
  };

  // 3. Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Prevent page reload
    setSubmittedData(formData);
  };

  return (
    <div style={{ maxWidth: '400px', margin: '20px auto', fontFamily: 'sans-serif' }}>
      <h2>Registration Form</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        {/* Username Input */}
        <div>
          <label>Username:</label>
          <input
            type="text"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        {/* Email Input */}
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        {/* Password Input */}
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          />
        </div>

        {/* Select Dropdown */}
        <div>
          <label>Role:</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            style={{ width: '100%', padding: '8px', boxSizing: 'border-box' }}
          >
            <option value="user">User</option>
            <option value="admin">Admin</option>
            <option value="guest">Guest</option>
          </select>
        </div>

        {/* Checkbox */}
        <div>
          <label style={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
            <input
              type="checkbox"
              name="subscribe"
              checked={formData.subscribe}
              onChange={handleChange}
            />
            Subscribe to newsletter
          </label>
        </div>

        {/* Submit Button */}
        <button type="submit" style={{ padding: '10px', backgroundColor: '#007bff', color: '#white', border: 'none', cursor: 'pointer' }}>
          Submit
        </button>
      </form>

      {/* Display Entered Data */}
      {submittedData && (
        <div style={{ marginTop: '20px', padding: '12px', backgroundColor: '#f4f4f4', border: '1px solid #ddd' }}>
          <h3>Submitted Information:</h3>
          <p><strong>Username:</strong> {submittedData.username}</p>
          <p><strong>Email:</strong> {submittedData.email}</p>
          <p><strong>Password:</strong> {submittedData.password}</p>
          <p><strong>Role:</strong> {submittedData.role}</p>
          <p><strong>Subscribed:</strong> {submittedData.subscribe ? 'Yes' : 'No'}</p>
        </div>
      )}
    </div>
  );
}

export default UserForm;
