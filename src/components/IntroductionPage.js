import React from 'react';
import img1 from '../images/2016_Ford_150_2.webp';
import img2 from '../images/2020_Ford_Fusion.avif';
import img3 from '../images/2018_Toyota_4Runner.jpeg';
import img4 from '../images/2021_Toyota_Corolla.webp';
import img5 from '../images/2021_Dodge_1500.avif';
import img6 from '../images/2016_Dodge_Dart.jpg';
import img7 from '../images/2023_Chevrolet_Malibu.jpg';
import img8 from '../images/2023_Chevrolet_1500.avif';
import img9 from '../images/2021_Honda_CRV.webp';
import img10 from '../images/2022_Honda_Civic.webp';
import StarInventoryPage from './StarInventoryPage';
import ReviewInventoryPage from './ReviewInventoryPage';


const IntroductionPage = () => {//Here we have the introduction page. Review Inventory page and Stars Inventory page. with images of all vehicles we have in stock. 
  return (
    <div className="p-8">
      <section>
        <h2 className="text-2xl font- bold">
          Here are some used vehicles with some Pros/Cons</h2>
        <h3>You can also leave your own reviews and star rating of each vehicle</h3>
        <img src={img1} className="img-thumbnail" alt="Img1" width="200" height="110" /> <StarInventoryPage /> 
        <p>
          2016 Ford F-150 V6        85000 miles     Pros: Best-in-class crash-test scores, Cons: Aluminum body panels can be more expensive to repair than steel (3.5 star rating)          
        </p>
        <ReviewInventoryPage />

        <img src={img2} className="img-thumbnail" alt="Img2" width="200" height="110" /> <StarInventoryPage />
        <p>
          2020 Ford Fusion V6       45000 miles     Pros: Adept combination of sharp handling and a composed ride, Cons: Underwhelming acceleration from base engine (4.5 star rating)
        </p>
        <ReviewInventoryPage />
        <img src={img3} className="img-thumbnail" alt="Img3" width="200" height="110" /> <StarInventoryPage />
        <p>
          2018 Toyota 4Runner V6	65000 miles     Pros: Serious off-road capability few other competitors can match, Cons: Standard V6 is not particularly fuel-efficient (4.5 star rating)
        </p>
        <ReviewInventoryPage />
        <img src={img4} className="img-thumbnail" alt="Img4" width="200" height="110" /> <StarInventoryPage />
        <p>
          2021 Toyota Corolla V6	32000 miles     Pros: High fuel economy, Cons: Less rear headroom than most rivals (4.5 star rating)
        </p>
        <ReviewInventoryPage />
        <img src={img5} className="img-thumbnail" alt="Img5" width="200" height="110" /> <StarInventoryPage />
        <p>
          2021 Dodge RAM 1500 V8	30000 miles     Pros: Cabin is roomy, quiet and laden with useful storage and tech features, Cons: Common driver assist features are limited to higher trims (3.5 star rating)
        </p>
        <ReviewInventoryPage />
        <img src={img6} className="img-thumbnail" alt="Img6" width="200" height="110" /> <StarInventoryPage />
        <p>
          2016 Dodge Dart V6		80000 miles     Pros: Responsive steering and handling makes the Dart relatively fun to drive, Cons: Shifting from Aero model's automated transmission can be slow and unrefined (3.5 star rating)
        </p>
        <ReviewInventoryPage />
        <img src={img7} className="img-thumbnail" alt="Img7" width="200" height="110" /> <StarInventoryPage />
        <p>
          2023 Chevy Malibu V6      45000 miles     Pros: Spacious interior with lots of front headroom, Cons: Limited outward visibility (4.5 star rating)
        </p>
        <ReviewInventoryPage />
        <img src={img8} className="img-thumbnail" alt="Img8" width="200" height="110" /> <StarInventoryPage />
        <p>
          2023 Chevrolet Silverado 1500 V6      11000 miles     Pros: Long cabin provides excellent rear legroom, Cons: Most versions ride a little rougher than primary rivals (3.5 star rating)
        </p>
        <ReviewInventoryPage />
        <img src={img9} className="img-thumbnail" alt="Img9" width="200" height="110" /> <StarInventoryPage />
        <p>
          2021 Honda CR-V       30000 miles     Pros: Roomy interior with cavernous cargo capacity, Cons: Below-average towing capability (4.5 star rating)
        </p>
        <ReviewInventoryPage />
        <img src={img10} className="img-thumbnail" alt="Img10" width="200" height="110" /> <StarInventoryPage />
        <p>
          2022 Honda Civic		21000 miles     Pros: Feature Sets are Auto High Beams, Lane Departure, Adaptive Cruise, Blind Spot Detection, Collision, Cons: Inability to default Auto Engine Stop to Off (4.5 star rating)
        </p>
        <ReviewInventoryPage />
      </section>
    </div>
  );
};

export default IntroductionPage;
