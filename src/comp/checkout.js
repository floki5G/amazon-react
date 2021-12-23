import react from 'react';
import '../compcss/checkout.css';
import { useStateValue } from './StateProvider';
import CheckoutProduct from './CheckoutProduct';
import Subtotal from './Subtotal'

const Checkout = () => {

    const [{ basket }, dispath] = useStateValue();
    return (
        <>
            <div className="checkout container-fluid">
                <div className="d-flex ">
                    <div className='col-9 d-flex justify-content-between pt-2 pb-2'>
                        <div className="h1 align-items-center">Shopping Cart</div>
                        <div className="align-self-end" >price</div>

                    </div>
                    <div className='col-3  align-items-center d-flex justify-content-center'>
                        <img className="checkout-left-ad  " src="https://images-eu.ssl-images-amazon.com/images/G/31/checkout/assets/TM_desktop._CB443006202_.png" />

                    </div>
                </div>
                <div className='col-9'><hr></hr></div>
            
                {basket.map(item => (
                    <CheckoutProduct
                        id={item.id}
                        title={item.title}
                        img={item.img}
                        price={item.price}
                        rating={item.rating}
                        quantity={item.quantity}
                        tAmt = {item.price * item.quantity}
                    />
                ))
                }
                <Subtotal />
                <div className="d-flex justify-content-end col-9">
                    <div>Subtotal</div>
                    <div>(1):</div>
                    <div> <strong> 7878 </strong></div>
                </div>
            </div>
        </>
    )
}
export default Checkout;