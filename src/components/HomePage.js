import React from 'react';
import img1 from '../images/Vehicle_Inventory.avif';
import TitlePage from './TitlePage';
import IntroductionPage from './IntroductionPage';


function HomePage() {
    return (
        <div className="HomePage">
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