import React from 'react';
import Card from 'react-bootstrap/Card';
import InventoryFormPage from './InventoryFormPage';
//Funtion using Card
const AboutPage = () => {
  return (
    <Card>
    <Card.Body>
        <InventoryFormPage />
        <h2>Here are some used vehicles that will be coming in</h2>
    </Card.Body>
    </Card>

  )
}



export  default AboutPage;