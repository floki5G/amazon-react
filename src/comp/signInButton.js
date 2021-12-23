import React from 'react';
import '../compcss/signInButton.css'
import { Link } from "react-router-dom";

const SignInButton = () => {

    return (
        <>
            <div className="signInButton">
                <div className='col-3 border'>
                    <img src='http://pngimg.com/uploads/amazon/small/amazon_PNG7.png'></img>
                    <div className='m-3'>
                        <h1>Sign In</h1>
                        <div><b>Email or mobile phone number</b></div>
                    </div>
                    <form className='m-3'>
                        <input type="text" />
                        <button>continue</button>
                    </form>
                    <div className='m-3'><small>By continuing, you agree to Amazon's Conditions of Use and Privacy Notice.</small></div>
                    <div className='m-3'>need help</div>

                </div>

                <div className="border ps-5 pe-4 " >

                        <div className="ps-5 pe-5 pt-2 pb-2">New to Amazon?</div>
                        <Link to="/loginpage">

                    <div className='ps-5 pe-5 pt-2 pb-2'>
                        <button className='border-0' >Create Your Amazon Account</button>
                    </div>
                    </Link>
                </div>
            </div>
        </>
    )
}
export default SignInButton;