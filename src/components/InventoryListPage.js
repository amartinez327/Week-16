import React, { useState, useEffect } from 'react';
import InventoryItemPage from './InventoryItemPage';
import InventoryFormPage from './InventoryFormPage';

const InventoryListPage = () => {
  const [items, setItems] = useState([]);//here we use useState
  console.log("items on inventory list", items)


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
      console.log("api get data:", apiResponse);
      setItems(apiResponse)
    } catch (error) {
      console.error("Uh oh! Things broke!!!!", error);
    }
  }
  useEffect(() => {//here we use useEffect
    getData();
  }, []);

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
      console.log("api post data:", apiResponse);

    } catch (error) {
      console.error("Uh oh! Things broke!!!!", error);
    }
  }




  const Removefunction = (id) => {
    if (window.confirm('Do you really want to Delete?')) {
      fetch("https://669a8f1c9ba098ed61001030.mockapi.io/Week_15_API/vehicles" + id, {
        method: "DELETE",
      }).then((res) => {
        alert('Saved Removed Successfully')
        window.location.reload();
      }).catch((err) => {
        console.log(err.message);
      }, [])
    }
  }




  console.log("Inventory Items:", items);//console.log items 
  return (
    <div>
      {/* TODO: implement search functionality to look up vehicles */}
      <InventoryFormPage getData={getData} postData={postData} />
      <br />
      <a onClick={() => { Removefunction(items.id) }} className='btn btn-danger'>Remove comment</a>
      <br />
      {items.map((item, index) => (
        <InventoryItemPage key={index} item={item} getData={getData} />
      ))}

    </div>
  );
};

export default InventoryListPage;
