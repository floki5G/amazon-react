import React, { useState } from 'react';
import { ImMenu3 } from "react-icons/im";
import '../compcss/subnavbar.css'
import SideNav, { MenuIcon } from 'react-simple-sidenav';
import { Link } from 'react-router-dom';
const Subnavbar = () => {
    const [showNav, setShowNav] = useState();
    const navItems = [
        <Link to="/homeitem">
            HomeItem
        </Link>,
        <Link to="/homeitem">
            HomeItem
        </Link>,
        <Link to="/homeitem">
            HomeItem
        </Link>,
    ];

    const title = <h1>Hello octo </h1>;
    return (
        <>
            <div className="subnavbar d-flex">


                <div>
                    <MenuIcon onClick={() => setShowNav(true)} />
                    <SideNav showNav={showNav} onHideNav={() => setShowNav(false)} title={title} items={navItems} />
                </div>
                <div className="subnavbar-titel">
                    <div>Best Saller</div>
                    <div> Mobiles</div>
                    <div>Amazon Pay</div>
                    <div>Fashion</div>
                    <div>Electronics</div>
                    <div>Prime</div>
                    <div>New Releases</div>
                    <div>Customer Service</div>
                    <div>Computers</div>
                    <div>Home & Kitchen </div>
                    <div>Toys & Games</div>
                </div>
            </div>
        </>
    )
}
export default Subnavbar;
