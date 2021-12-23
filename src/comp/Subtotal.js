import react from 'react';
import '../compcss/checkout.css';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import Button from '@material-ui/core/Button';
import { useStateValue } from './StateProvider';
import '../compcss/Subtotal.css'
const Subtotal = () => {
    const [{ basket }, dispatch] = useStateValue();
    console.log(basket)
    const totalAmount = basket.map((price) => {
        return (
            price.price * price.quantity 
        )
    });
const totalAmo = totalAmount.reduce(
    (prevValue, currentValue,index) => prevValue + currentValue,
    0
);
    return (
        <>
        
            <div className="checkout-right col-2">
                <div className="p-3 checkout-bg_white mt-4">
                    <div>Your order is eligible for FREE Delivery. Select this option at checkout.</div>
                    <div className="d-flex">
                        <div ><strong> Subtotal  : </strong></div>
                        <div><strong>  {totalAmo} </strong></div>
                        <div> <strong> </strong></div>
                    </div>
                    <div className="checkout-left-inside-checkbox d-flex mt-2">
                        <CheckBoxOutlineBlankIcon />
                        <div>This will be a gift</div>
                        <a href="Learn more">Learn more</a>
                    </div>
                    <Button className="checkout-right-btn mt-3 mb-3" variant="contained" color="waining">Proceed To Buy</Button>
                </div>
            </div>
        </>
    )
}
export default Subtotal;