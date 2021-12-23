import React from 'react'
import './homeItems.css'
import { Link } from "react-router-dom";

const HomeItemLeft = ({ titel, link_1, link_2, link_3, link_4, img1_1, img1_2, img2_1, img2_2, category_1, category_2, category_3, category_4 }) => {

    return (
        <>

            <div className="homeitems-left-in border ">
                <div className=""><strong>{titel}</strong></div>
                <div className="homeitems-left-img">
                    <div className='d-flex m-2'>
                        <div className="homeitems-img me-2" >
                            <Link to={link_1}>
                                <img src={img1_1} ></img>
                            </Link>

                            <div>{category_1}</div>
                        </div>
                        <div className="homeitems-img ms-2" >
                            <Link to={link_2}>
                                <img src={img1_2}></img>
                            </Link>
                            <div>{category_2}</div>
                        </div>
                    </div>
                    <div className='d-flex mt-4 ms-2'>
                        <div className="homeitems-img me-2" >
                            <Link to={link_3}>
                                <img src={img2_1} ></img>
                            </Link>
                            <div>{category_3}</div>
                        </div>
                        <div className="homeitems-img ms-2" >
                            <Link to={link_4}>
                                <img src={img2_2} ></img>
                            </Link>
                            <div className=''>{category_4}</div>
                        </div>
                    </div>
                </div>
                <div className='m-2'>see More</div>
            </div>
        </>
    )
}
export default HomeItemLeft