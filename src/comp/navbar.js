import React, { useState } from 'react';
import '../compcss/navbar.css';
import { AiOutlineSearch, AiOutlineShoppingCart, AiOutlineArrowDown } from 'react-icons/ai';
import { ImCoinPound, ImLocation } from 'react-icons/im';
import { MdArrowDropDown } from 'react-icons/md';
import logo from '../logo/india.png';
import { Link } from "react-router-dom";
import { useStateValue } from './StateProvider';
import SingInAccount from './signInAccount'
import { Amazonprodcts } from './Api/amazonproducts'
import Product from './product'
import ArrowDropDownIcon from '@material-ui/icons/ArrowDropDown';
import Inputsearch from './search/inputSearch'
const searchClick = () => {

}

const Navbar = () => {
    





    const [filteredData, setfilteredData] = useState([]);
    const [] = useState([]);

    const [style, setStyle] = useState({ display: 'none' });
    const [count, setCount] = useState();
    const setMouseOver = (event) => {
        setCount({ border: '1px solid white' });
    }
    const setMouseOut = (event) => {
        setCount({ border: '1px solid black' })
    }
    const MouseOver = (event) => {
        setStyle({ display: 'block' });
    }
    const MouseOut = (event) => {
        setStyle({ display: 'none' })
    }

  
    return (
        <>

            <div className="container-fluid  navbar d-flex">
                <div onMouseOver={setMouseOver} onMouseOut={setMouseOut} style={count} className='navbar-logo  col-1'>  <Link to='/'>
                    <img src="http://pngimg.com/uploads/amazon/small/amazon_PNG28.png" />
                </Link>
                </div>
                <div className='navbar-location d-flex col-2'>
                    <div ><ImLocation /></div>
                    <div>
                        <div>Hello</div>
                        <div> Select your address</div>
                    </div>
                </div>
                <div className='navbar-search d-flex col-6'>

                    {/* <input className='navbar-searchInp' type="text" /> */}
           <Inputsearch/>


                    {/* <button className='navbar-searchIcon'><AiOutlineSearch /></button> */}
                    <div className='ms-3'>

                        <img className="navbar-lang" src={logo} />
                        <MdArrowDropDown />

                    </div>

                </div>

                <div className='justify-content-around d-flex col-3'>

                    <div onMouseOver={MouseOver} onMouseOut={MouseOut} className="hvcdc navbar-option-header">
                        <div className="navbar-location-one"><small>Hello,sign IN</small></div>
                        <div className="navbar-location-two"><strong>Account & List</strong></div>
                    </div>

                    <div className="navbar-option-header">
                        <span className="navbar-location-one">Return</span>
                        <span className="navbar-location-two">  & Orders</span>
                    </div>


                    <Link to="/checkout">
                        <div className="navbar-option-header" id='navbar-cart'>
                            <span ><AiOutlineShoppingCart />
                            </span>
                        </div>
                    </Link>
                </div>

            </div>
            <div onMouseOver={MouseOver} onMouseOut={MouseOut} className='SingInAccount' style={style}> <SingInAccount /></div>



        </>
    )
}
export default Navbar;