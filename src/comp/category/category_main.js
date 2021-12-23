import react, { useState, useEffect, useContext } from 'react'
import Product from '../product'
import { Homeitem_2 } from '../Api/homeitemleftApi'
import { Homeitem_3 } from '../Api/Homeitem_3'
import { LeftArrow, RightArrow } from '../scrollbar'
import { ScrollMenu, VisibilityContext } from "react-horizontal-scrolling-menu";
import Scrollbaritem from './Scrollbaritem'
import { Amazonprodcts } from '../Api/amazonproducts'


const getItems1 = Homeitem_2.map((x) => ({ x: x }));
const getItems2 = Homeitem_3.map((x) => ({ x: x }));


const Category_main = ({ img1, img2, img3, img4 }) => {

    const [count, setCount] = useState()
    const [items, setItems] = useState(getItems1);
    const [items1, setItems1] = useState(getItems2);


    return (
        <>

            <div className="appliances " style={{ display: 'grid', gridTemplateColumns: '21% 79%' }}>
                <div>
                    <div>
                        <div>Amazon Prime</div>
                    </div>

                    <div>
                        <div>Pay On Delivery</div>
                    </div>
                    <div>
                        <div>Brands</div>
                        <div>
                            <div>Samsung</div>
                            <div>Redmi</div>
                            <div>iQOO</div>
                            <div>MI</div>
                            <div>Oppo</div>
                            <div>Vivo</div>
                        </div>
                    </div>
                    <div>
                        <div>Avg. Customer Review</div>
                        <div>1</div>
                        <div>2</div>
                        <div>3</div>
                        <div>4</div>
                        <div>5</div>
                    </div>
                    <div>
                        <div>Price</div>
                        <div>₹5,000 - ₹10,000</div>
                        <div>₹10,000 - ₹20,00</div>
                    </div>

                </div>
                <div>
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

                    <div>
                        <img style={{ width: '100%', objectFit: 'cover' }} src={img1}></img>
                        <img style={{ width: '100%', objectFit: 'cover' }} src={img2}></img>
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
                    <div>
                        <img style={{ width: '100%', objectFit: 'cover' }} src={img3}></img>
                        <img style={{ width: '100%', objectFit: 'cover' }} src={img4}></img>
                    </div>
           
                </div>
            </div>
        </>
    )
}
export default Category_main