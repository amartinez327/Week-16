import React, { useState } from 'react';
import StarInventoryPage from './StarInventoryPage';//here is my review form page


const ReviewInventoryPage = () => {
  const [formData, setFormData] = useState({
    name: '',
    rating: 0,
    comment: ''
  });

  const handleInputChange = (e) => {
    let { name, value } = e.target;
    if( name === "rating"){
      value = parseInt(value)
    }
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here (e.g., send data to backend)
    console.log(formData); // For demo purposes
    //Call the API Post Request Function and pass in formData
  };

//API Post Request function
// const ApiURL = "https://669a8f1c9ba098ed61001030.mockapi.io/Week_15_API/review-inventory"

async function getData() {//Here I have added a fetch to request data from URL as instructed. 
  const url = "https://669a8f1c9ba098ed61001030.mockapi.io/Week_15_API/review-inventory";
  try {
    const response = await fetch(url);
    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

    const json = await response.json();
    console.log(json);
  } catch (error) {
    console.error(error.message);
  }
}
  


  return (
    <form className='flex flex-wrap' onSubmit={handleSubmit}>
      <label>
        Email:
        <input
          type="text"
          className='form-control'
          name="email"
          value={formData.name}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label>
        Rating 1-10:
        <input
        className='form-control'
          type="number"
          name="rating"
          value={formData.rating}
          onChange={handleInputChange}
        />
      </label>
      <br />
      <label >
        Comment:
        <textarea
          name="comment"
          className='form-control'
          value={formData.comment}
          onChange={handleInputChange}
        />
      </label>
      <br />      
      <button type="submit">Contact Salesmen</button>
    </form>
  );
};

export default ReviewInventoryPage;