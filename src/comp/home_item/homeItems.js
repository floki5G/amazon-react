import React, { useState, useContext } from 'react'
import './homeItems.css'
import HomeItemLeft from './homeItemLeft'
import HomeItemRight from './homeItemRight'
import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import { Homeitem_2 } from '../Api/homeitemleftApi'
import { Homeitem_3 } from '../Api/Homeitem_3'
import Scrollbaritem from '../category/Scrollbaritem';
const getItems1 = Homeitem_2.map((x) => ({ x: x }));
const getItems2 = Homeitem_3.map((x) => ({ x: x }));
const HomeItems = () => {


    const [items, setItems] = useState(getItems1);
    const [items1, setItems1] = useState(getItems2);

    function LeftArrow() {
        const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext)
        return (
            <button className='left-arrow' disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
                <ArrowBackIosIcon />
            </button>
        );
    }

    function RightArrow() {
        const { isLastItemVisible, scrollNext } = useContext(VisibilityContext)
        return (
            <button className='right-arrow' disabled={isLastItemVisible} onClick={() => scrollNext()}>
                <ArrowForwardIosIcon />
            </button>
        );
    }

    return (
        <>
            <div className="homeitems container-fluid">
                <div className="homeitems-left ">
                    <HomeItemLeft
                        titel='Top picks for your home sameer'
                        link_1="/appliances"
                        link_2="/beautyAndMore"
                        link_3="/fashion"
                        link_4="/grocery"
                        img1_1="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                        img1_2="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
                        img2_1="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"
                        img2_2="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"
                        category_1="Appliances"
                        category_2="Beauty And More"
                        category_3="Fashion"
                        category_4="Grocery"
                    />
                    <HomeItemLeft
                        titel='Styles for Men | Up to 70% off'
                        link_1="/appliances"
                        link_2="/beautyAndMore"
                        link_3="/fashion"
                        link_4="/grocery"
                        img1_1="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                        img1_2="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
                        img2_1="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"
                        img2_2="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"
                        category_1="Appliances"
                        category_2="Beauty And More"
                        category_3="Fashion"
                        category_4="Grocery"
                    />
                    <HomeItemLeft
                        titel='Top rated, premium quality | Amazon Brands & more'
                        link_1="/appliances"
                        link_2="/beautyAndMore"
                        link_3="/fashion"
                        link_4="/grocery"
                        img1_1="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                        img1_2="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
                        img2_1="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"
                        img2_2="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"
                        category_1="Appliances"
                        category_2="Beauty And More"
                        category_3="Fashion"
                        category_4="Grocery"
                    />
                </div>
                <div className="homeitems-right ">
                    <HomeItemRight />
                </div>
            </div>
            <div className="homeitems-1">
                <HomeItemLeft
                    titel='Top picks for your home sameer'
                    link_1="/appliances"
                    link_2="/beautyAndMore"
                    link_3="/fashion"
                    link_4="/grocery"
                    img1_1="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    img1_2="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08345R1ZW._SY116_CB667322346_.jpg"
                    img2_1="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B07G5J5FYP._SY116_CB667322346_.jpg"
                    img2_2="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/186x116---wm._SY116_CB667322346_.jpg"
                    category_1="Appliances"
                    category_2="Beauty And More"
                    category_3="Fashion"
                    category_4="Grocery"
                />
                <HomeItemLeft
                    titel="Top picks for your home"
                    img1_1="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    img1_2="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    img2_1="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    img2_2="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    category="HomeItem"
                />
                <HomeItemLeft
                    titel="Top picks for your home"
                    img1_1="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    img1_2="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    img2_1="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    img2_2="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    category="Mobile"
                />
                <HomeItemLeft
                    titel="Top picks for your home"
                    img1_1="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    img1_2="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    img2_1="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    img2_2="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    category="Travel"
                />
            </div>

            <div className="homeitems-2 ">
                <div className="homeitems-2-titel m-3"><strong>Today’s Deals</strong>
                    <span><small>See all Deals</small></span>
                </div>
                <ScrollMenu
                    LeftArrow={LeftArrow}
                    RightArrow={RightArrow} >
                    {items.map(({ x }) => (
                        <Scrollbaritem
                            img={x.img}
                            itemId={x.id} // NOTE: itemId is required for track items
                            price={x.price}
                        />))}
                </ScrollMenu>
            </div>

            <div className="homeitems-2 ">
                <div className="homeitems-2-titel m-3"><strong>4+ star rated | Refurbished products</strong>
                    <span><small>See all Deals</small></span>
                </div>
                <ScrollMenu
                    LeftArrow={LeftArrow}
                    RightArrow={RightArrow} >
                    {items1.map(({ x }) => (
                        <Scrollbaritem
                            img={x.img}
                            itemId={x.id} // NOTE: itemId is required for track items
                        />))}
                </ScrollMenu>
            </div>
            <div className="homeitems-1">
                <HomeItemLeft
                    titel="Top picks for your home"
                    img1_1="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    img1_2="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    img2_1="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    img2_2="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    category="Ac"
                />
                <HomeItemLeft
                    titel="Top picks for your home"
                    img1_1="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    img1_2="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    img2_1="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    img2_2="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    category="Ac"
                />
                <HomeItemLeft
                    titel="Top picks for your home"
                    img1_1="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    img1_2="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    img2_1="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    img2_2="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    category="Ac"
                />
                <HomeItemLeft
                    titel="Top picks for your home"
                    img1_1="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    img1_2="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    img2_1="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    img2_2="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    category="Ac"
                />
            </div>

            <div className="homeitems-2 ">
                <div className="homeitems-2-titel m-3"><strong>4+ star rated | Refurbished products</strong>
                    <span><small>See all Deals</small></span>
                </div>
                <ScrollMenu
                    LeftArrow={LeftArrow}
                    RightArrow={RightArrow} >
                    {items1.map(({ x }) => (
                        <Scrollbaritem
                            img={x.img}
                            itemId={x.id} // NOTE: itemId is required for track items
                        />))}
                </ScrollMenu>
            </div>

            <div className="homeitems-2 ">
                <div className="homeitems-2-titel m-3"><strong>4+ star rated | Refurbished products</strong>
                    <span><small>See all Deals</small></span>
                </div>
                <ScrollMenu
                    LeftArrow={LeftArrow}
                    RightArrow={RightArrow} >
                    {items1.map(({ x }) => (
                        <Scrollbaritem
                            img={x.img}
                            itemId={x.id} // NOTE: itemId is required for track items
                        />))}
                </ScrollMenu>
            </div>

            <div className="img-foot d-flex justify-content-center">
                <img src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg"></img>
            </div>

            <div className="homeitems-1">
                <HomeItemLeft
                    titel="Top picks for your home"
                    img1_1="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    img1_2="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    img2_1="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    img2_2="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    category="Ac"
                />
                <HomeItemLeft
                    titel="Top picks for your home"
                    img1_1="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    img1_2="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    img2_1="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    img2_2="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    category="Ac"
                />
                <HomeItemLeft
                    titel="Top picks for your home"
                    img1_1="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    img1_2="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    img2_1="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    img2_2="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    category="Ac"
                />
                <HomeItemLeft
                    titel="Top picks for your home"
                    img1_1="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    img1_2="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    img2_1="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    img2_2="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/GATEWAY/MSO/Appliances-QC-PC-186x116--B08RDL6H79._SY116_CB667322346_.jpg"
                    category="Ac"
                />
            </div>
        </>



    )
}
export default HomeItems