import React, { useState } from 'react';
import axios from 'axios';

const ApiForm = () => {
  const [formData, setFormData] = useState({
    base: 0,
    exponent: 0
  });

  const handleSubmit = async (e) => {
    e.preventDefault();

    const apiUrl = 'https://2wydlxf26l.execute-api.us-east-2.amazonaws.com/staging';

    try {
      const response = await axios.post(apiUrl, JSON.stringify(formData));

      console.log('API Response:', response.data);
    } catch (error) {
      console.error('API Error:', error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    const numericValue = parseFloat(value);

    setFormData({ ...formData, [name]: numericValue });
  };

  return (
    <div>
      <h2>API Form</h2>
      <form onSubmit={handleSubmit} className="ApiForm">
        <div>
          <label>Base:</label>
          <input
            type="number"
            name="base"
            value={formData.base}
            onChange={handleChange}
          />
        </div>
        <div>
          <label>Exponent:</label>
          <input
            type="number"
            name="exponent"
            value={formData.exponent}
            onChange={handleChange}
          />
        </div>
        <button type="submit">Submit</button>
      </form>
    </div>
    
  );
};

export default ApiForm;
