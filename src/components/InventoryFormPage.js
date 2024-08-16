import React, { useState } from 'react';

const InventoryFormPage = ({  getData, postData }) => {//calling Inventory form to get data from useState
  const [year, setYear] = useState('');
  const [make, setMake] = useState('');
  const [model, setModel] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    // addItem({ year, make, model });
  
    let yearNum = parseInt(year)
    console.log("Year to Number:", yearNum);
    

    await postData({
      "vehicleMake": make,
      "vehicleModel": model,
      "vehicleYear": yearNum, 
    })

    setYear('');
    setMake('');
    setModel('');

//once post request has completed, get the new data
    getData()
  };

  return (
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
      <button type="submit">Add to Inventory</button>
    </form>
  );
};

export default InventoryFormPage;//export Inventory form. 

