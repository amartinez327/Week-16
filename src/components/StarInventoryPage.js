import React, { useState } from 'react';
import { FaStar } from 'react-icons/fa';//here is my star page. 

function StarInventoryPage() {

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