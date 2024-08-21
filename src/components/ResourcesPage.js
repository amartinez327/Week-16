import React from 'react';
import Card from 'react-bootstrap/Card';
import InventoryListPage from './InventoryListPage';
//Funtion using Card for this url https://www.carprosabq.com/
const ResourcesPage = () => {
  return (
    <Card>
    <Card.Body>
        <h2>Leave a comment about the vehicle</h2>
        <InventoryListPage />
    </Card.Body>
    </Card>

  )
}



export  default ResourcesPage;