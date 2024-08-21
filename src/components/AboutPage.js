import React from 'react';
import Card from 'react-bootstrap/Card';
import img1 from '../images/HandShake.avif';
//Funtion using Card
const AboutPage = () => {//Here on this card, I have the About page information.
  return (
    <Card>
    <Card.Body>
        <h2>Here at Aaron's Used Vehicle's we want to give another chance of used vehicles to have the right owner.</h2>
        <p>Vehicel inspection on each vehicle from our Certified Technicians.</p>
        <p>Customers will receive quality experience from staff.</p>
        <p>Focus on customers wants and needs.</p>
        <p>We are devoted to our customers and want them to know it is all about them.</p>
        <img src={img1} className="center" alt="Img1" />      
    </Card.Body>
    </Card>

  )
}



export  default AboutPage;