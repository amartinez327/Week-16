import React, { useState } from 'react';
import StarInventoryPage from './StarInventoryPage';//here is my review form page

const ReviewInventoryPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    rating: '',
    comment: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to backend)
    console.log(formData); // For demo purposes
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Name:
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Rating:
        <input
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Comment:
        <textarea
          name="comment"
          value={formData.comment}
          onChange={handleInputChange}
        />
      </label>
      <br />      
      <button type="submit">Submit</button>
    </form>
  );
};

export default ReviewInventoryPage;