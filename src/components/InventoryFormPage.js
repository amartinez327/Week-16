import React, { useState } from 'react';

const InventoryFormPage = ({  getData, postData }) => {//calling Inventory form to get data from useState
  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');
  const [comment, setComment] = useState('');

console.log("ABOUT RAN")
  const handleSubmit = async (e) => {
    e.preventDefault();
    // addItem({ year, make, model, comment });
  
    let yearNum = parseInt(year)
    console.log("Year to Number:", yearNum);
    

    await postData({
      "vehicleMake": make,
      "vehicleModel": model,
      "vehicleYear": yearNum,
      "comment": comment,
    })

    setYear('');
    setMake('');
    setModel('');
    setComment('');

//once post request has completed, get the new data
    getData()
  };

  return (//Here we have a form asking for Year, Make, Model and Comment from the Resources Page. 
    <form onSubmit={handleSubmit}>
      <div>
        <label>Year:</label>
        <input
          type="text"
          value={year}
          onChange={(e) => setYear(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Make:</label>
        <input
          type="text"
          value={make}
          onChange={(e) => setMake(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Model:</label>
        <input
          type="text"
          value={model}
          onChange={(e) => setModel(e.target.value)}
          required
        />
      </div>
      <div>
        <label>Comment:</label>
        <input
          type="text"
          value={comment}
          onChange={(e) => setComment(e.target.value)}
          required
        />
      </div>
      <button type="submit">Add your comment about vehicle</button>
    </form>
  );
};

export default InventoryFormPage;//export Inventory form. 

