import react from 'react'
import React, { useState, useContext } from 'react'
import './home_item/homeItems.css'

import ArrowBackIosIcon from '@material-ui/icons/ArrowBackIos';
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import { VisibilityContext } from "react-horizontal-scrolling-menu";
import { Homeitem_2 } from './Api/homeitemleftApi'
import { Homeitem_3 } from './Api/Homeitem_3'
import BeautyAndMore from './category/Scrollbaritem'

const getItems1 = Homeitem_2.map((x) => ({ x: x }));
const getItems2 = Homeitem_3.map((x) => ({ x: x }));


export const LeftArrow=()=> {
    const { isFirstItemVisible, scrollPrev } = useContext(VisibilityContext)
    return (
        <button className='left-arrow' disabled={isFirstItemVisible} onClick={() => scrollPrev()}>
            <ArrowBackIosIcon />
        </button>
    );
}

export const RightArrow=()=>{
    const { isLastItemVisible, scrollNext } = useContext(VisibilityContext)
    return (
        <button className='right-arrow' disabled={isLastItemVisible} onClick={() => scrollNext()}>
            <ArrowForwardIosIcon />
        </button>
    );
}
const Scrollbar = () => {

    
const [items, setItems] = useState(getItems1);
const [items1, setItems1] = useState(getItems2);

    return(
    <>
        <div> welcome to amazon Mobile ......</div>
    </>
    )
}
export default Scrollbar