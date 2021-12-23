import react from 'react';
import '../compcss/checkout.css';
import CheckBoxOutlineBlankIcon from '@material-ui/icons/CheckBoxOutlineBlank';
import Button from '@material-ui/core/Button';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';
import '../compcss/CheckoutProduct.css';
import { useStateValue } from './StateProvider'
import AddIcon from '@material-ui/icons/Add';
import RemoveIcon from '@material-ui/icons/Remove';


const CheckoutProduct = ({ id, title, img, price, rating, quantity, tAmt}) => {


    const [{ basket, totalQty }, dispatch] = useStateValue();

    const deletefrombasket = () => {
     
            dispatch({
                type: 'REMOVE_TO_BASKET',
                item: {
                    id: id,
                },
            })
    
    }
    const increaseItem = () => {
        dispatch({
            type: "ADD_QUANTITY",
            item: {
                id: id,
            },
        })
    }

    const decreaseItem = () => {
        dispatch({
            type: "SUB_QUANTITY",
            item: {
                id: id,
            },
        })
    }

    return (
        <div className="checkout-left checkout-bg_white col-9">



            <div className="checkout-left-inside row">
                <div className="col-2">
                    <img className="checkout-left-img" src={img}></img>
                </div>
                <div className="col-10">
                    <div className="checkout-left-inside-info-price  row">
                        <div className="col-9"><strong>{title}</strong></div>
                        <div className="col-3  align-items-end d-flex justify-content-end"><strong>{price}</strong></div>
                    </div>
                    <div><small>In stock</small></div>
                    <div>Eligible for FREE Shipping</div>
                    <img src="https://m.media-amazon.com/images/G/31/marketing/fba/fba-badge_18px._CB485936079_.png"></img>


                    <div className="checkout-left-inside-checkbox d-flex mt-2">
                        <CheckBoxOutlineBlankIcon />
                        <div>This will be a gift</div>
                        <a href="Learn more">Learn more</a>
                    </div>

                    <div className="checkout-left-inside-button mt-2 d-flex">
                        <div className=" mt-2 d-flex">
                            <div className="" onClick={decreaseItem}>
                                <RemoveIcon />
                            </div>
                            <div className="ps-2 pe-2">{quantity}</div>
                            <div className="" onClick={increaseItem}>
                                <AddIcon />
                            </div>
                        </div>
                    

                        <button onClick={deletefrombasket}>Delete</button>
                        <button>Save for Later</button>
                        <button>See more like this</button>
                    </div>
                </div>
                <div><hr></hr></div>
                <div className="d-flex flex-row-reverse">{tAmt}</div>

            </div>
        </div>
    )
}
export default CheckoutProduct;