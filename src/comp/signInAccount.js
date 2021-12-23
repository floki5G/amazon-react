import React from 'react';
import '../compcss/signInAccount.css'
import { Link } from "react-router-dom";

const SingInAccount = () => {
  
    return (
        <>
            <div className="singInAccount col-5">
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
                <div className='d-flex border-top pt-1'>
                    <div className='col-6 ps-5'>
                        <h1> Your Lists  </h1>
                        <div>Create a Wish List</div>
                        <div>Wish from Any Website</div>
                        <div>Baby Wish List</div>
                        <div>Discover Your Style</div>
                        <div>Explore Showroom</div>
                    </div>
                    <div className='col-6 ps-5'>
                        <h1>   Your Account</h1>
                        <div>Your Account</div>
                        <div>Your Orders</div>
                        <div>Your Wish List</div>
                        <div>Your Recommendations</div>
                        <div>Your Prime Membership</div>
                        <div>Your Prime Video</div>
                        <div>Your Subscribe & Save Items</div>
                        <div>Memberships & Subscriptions</div>
                        <div>Your Amazon Business Account</div>
                        <div>Your Seller Account</div>
                        <div>Manage Your Content and Devices</div>
                    </div>
                </div>
            </div>
        </>
    )
}
export default SingInAccount;