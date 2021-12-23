import react, { useEffect, useState } from 'react';
import { useStateValue } from './StateProvider'
import '../compcss/product.css'

const Product = ({ id, title,img, price, max_price ,rating , quantity, category }) => {

    // const { id, title,img, price, max_price ,rating , quantity, category } = props.data; 

    // console.log(props.data);

    const [state, dispatch] = useStateValue();
   
    const addtobasket = () => {
        dispatch({
            type: 'ADD_TO_BASKET',
            item: {
                id: id,
                title: title,
                img: img,
                price: price,
                quantity: quantity,
                category:category,
            },
        });
    }
  
    return (
        <>

            <div className="product" key={{id}}>
                <div className="product-info">{title}</div>
                <div className="product-info">{category}</div>
                <div className="product-price"><small>$</small><strong>{price}</strong></div>
                <div className="product-rating"> {Array(rating).fill().map(() => (
                    <p> star </p>
                ))} </div>
                <img className="product-img" src={img}/>

                <button className="product-button" onClick={addtobasket}>add to basket</button>
            </div>
        </>
    )
}
export default Product;