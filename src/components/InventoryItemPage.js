import React from 'react';//here we are importing React from react
// import InventoryFormPage from './InventoryFormPage';
// import InventoryListPage from './InventoryListPage';

const InventoryItemPage = ({ item, getData }) => {//here we have Inventory Item being called. 
console.log("Inventory Item Data:", item);

  console.log("Inventory Item property data:", item, "get data property?",getData);//console log to retreive the data
  
  return (
 
  <div className="inventory-item">
    <h3>{item.vehicleYear} {item.vehicleMake} {item.vehicleModel} {item.comment}</h3>
    <br />
    Item Id: {item.id}
  </div>
);
}

export default InventoryItemPage;// export Inventory Item
