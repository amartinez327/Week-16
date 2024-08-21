import React from 'react';
import img1 from '../images/Vehicle_Inventory.avif';
import TitlePage from './TitlePage';
import IntroductionPage from './IntroductionPage';


function HomePage() {//Here we are calling the Title page and Introduction page. Also placing an image in the center of the page. 
    return (
        <div className="HomePage container">
            <main>                
                <TitlePage />
                <br />
                <img src={img1} className="center" alt="Img1" />
                <br/>
                <IntroductionPage />
                <br />
            </main>
        </div>
    );
}

export default HomePage;