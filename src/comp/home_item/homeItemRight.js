import React from 'react'
import { Link } from "react-router-dom";

import './homeItems.css'
const HomeItemRight = () => {
    return (
        <>
      
                    <div className='homeitems-right-in'>
                        <div className="d-flex justify-content-start"><strong>Sign in for your best experience</strong></div>
<Link to="signin">
                        <button className='homeitems-right-btn m-3'> Sign in securely</button>
                        </Link>
                    </div>

                    <div className="homeitems-right-img d-flex justify-content-center mt-3 mb-3">
                        <img src="https://m.media-amazon.com/images/G/31/img19/AMS/Houseads/Laptops-Sept2019._CB436595915_.jpg"></img>
                    </div>

        </>
    )
}
export default HomeItemRight