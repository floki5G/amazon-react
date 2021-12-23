import react, { useEffect } from 'react';
import '../compcss/home.css';
import ArrowForwardIosRoundedIcon from '@material-ui/icons/ArrowForwardIosRounded';
import ArrowBackIosRoundedIcon from '@material-ui/icons/ArrowBackIosRounded';
import { useState } from 'react';
import HomeItems from './home_item/homeItems'
import { Link } from "react-router-dom";
import Footer from './footer'
import BackToTop from './backtotop'
import {FilterDropDown} from './navbar'
const MyCollection = [

    {
        imgPath: 'https://m.media-amazon.com/images/I/81xmtlfSSIL._SX3000_.jpg'
    },
    {
        imgPath: 'https://images-eu.ssl-images-amazon.com/images/G/31/AmazonVideo/2021/X-site/Events/prime_day/Hostel-daze-2/1500x600_EN_JPN-2._CB644074809_.jpg'
    },
    {
        imgPath: 'https://images-eu.ssl-images-amazon.com/images/G/31/img20/PC/Mayactivation/Accessoriesday1/D23140543_IN_CEPC_Electronicsaccessories_underRs999_3000x12000.5x._CB669031984_.jpg'
    },
    {
        imgPath: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/cnnjpp/Desk_Nord_2__1500x600._CB645385681_.jpg'
    },
    {
        imgPath: 'https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/WLA/July/Headsets/OnePlusBudsPro/Intrigue/Ingress/P50167046_ConfidentialWLA_OnePlus_Buds_Pro_Tall_hero_1500x600._CB663475496_.jpg'
    },
];
const Home = () => {


    const CollectionSize = MyCollection.length;
    const [index, setActiveStep] = useState(0);

    const goToPrePicture = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
    const goToNextPicture = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
    return (
        <>
            <div>
            
                <button className='home-arrow img1' disabled={index === 0} onClick={goToPrePicture}>
                    <ArrowBackIosRoundedIcon />
                </button>
                <button className='home-arrow img2' disabled={index === CollectionSize - 1} onClick={goToNextPicture}>
                    < ArrowForwardIosRoundedIcon />
                </button>
            </div>
            <div className="home">
                <img className='home-img' src={MyCollection[index].imgPath} />
                <HomeItems />
            </div>


            <div>
                <div className='d-flex justify-content-center pt-3'>
                    <div>See personalized recommendations</div>
                </div>
                <Link to="/signin">
                    <div className='singInAccount-button d-flex justify-content-center pt-3'>
                        <button>Sign in</button>
                    </div>
                </Link>
                <div className='d-flex justify-content-center pt-3 pb-1'>
                    <div>New customer..?</div>
                    <Link to="/loginpage">
                        <div>start here</div>
                    </Link>
                </div>
            </div>


            <div>
                <BackToTop />
            </div>

            <div>
                <Footer />
            </div>



        </>
    )
}
export default Home;

