import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa'; 

function StarInventoryPage() {//Here we have the star page that shows up on the home page. 

    const [rating, setRating] = useState(null)
    const [rateColor, setColor] = useState(null)
    const [hover, setHover] = useState(false)
    return (

        <>

            {[...Array(5)].map((star, index) => {
                const currentRate = index + 1
                return (

                    <>
                        <label >

                            <input type="radio" name="rate"
                                value={currentRate}
                                onClick={() => setRating(currentRate)}
                            />

                            <FaStar size={35}
                                onMouseEnter={() => setHover(true)}
                                onMouseLeave={() => setHover(false)}
                                style={{ color: hover || currentRate <= (rateColor || rating) ? "yellow" : "grey", transition: 'color 0.3s' }}
                            />

                        </label>

                    </>

                )

            })}

        </>

    )

}

export default StarInventoryPage;