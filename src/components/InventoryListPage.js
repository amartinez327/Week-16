import React, { useState, useEffect } from 'react';
import InventoryItemPage from './InventoryItemPage';
import InventoryFormPage from './InventoryFormPage';

const InventoryListPage = () => {
  const [items, setItems] = useState([]);//here we use useState

  // const addItem = (item) => {
  //   setItems([...items, item]);
  // };

  //perform get request to get all vehicle and inventory data from api
  // https://669a8f1c9ba098ed61001030.mockapi.io/Week_15_API/vehicles

  async function getData() {
    const apiEndpoint = "https://669a8f1c9ba098ed61001030.mockapi.io/Week_15_API/vehicles"; //Mock API url
    try {
      const response = await fetch(apiEndpoint);
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const apiResponse = await response.json();
      console.log("api get data:",apiResponse);
      setItems(apiResponse)
    } catch (error) {
      console.error("Uh oh! Things broke!!!!",error);
    } 
  }

  //POST API REQUEST
  async function postData(newVehicle) {
    console.log("Posting data to the api...", newVehicle);
    

    const apiEndpoint = "https://669a8f1c9ba098ed61001030.mockapi.io/Week_15_API/vehicles"; //Mock API url
    try {
      const response = await fetch(apiEndpoint, {
        method: "POST",
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(newVehicle),
      });
      if (!response.ok) {
        throw new Error(`Response status: ${response.status}`);
      }
  
      const apiResponse = await response.json();
      console.log("api post data:",apiResponse);

    } catch (error) {
      console.error("Uh oh! Things broke!!!!",error);
    } 
  }

  useEffect(() => {//here we use useEffect
    getData();
  }, []);

console.log("Inventory Items:", items);//console.log items 
  return (
    <div>
      <h2>Inventory List</h2>                                        
      <InventoryFormPage  getData={getData} postData={postData} />     
      {items.map((item, index) => (
      <InventoryItemPage key={index} item={item} getData={getData} />
      ))}
    </div>
  );
};

export default InventoryListPage;
