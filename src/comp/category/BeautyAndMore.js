import react from 'react'
import Product from '../product'
import Category_main from './category_main'

import { Amazonprodcts } from '../Api/amazonproducts'

const BeautyAndMore= () => {
    return (
        <>
            <div> welcome to amazon Travel ......</div>


            <Category_main
                img1="https://images-eu.ssl-images-amazon.com/images/G/31/IMG15/Irfan/ICICI-PC-1.jpg"
                img2="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/naireshm_LA/Monsoon-COOP-Banners_LIfestyle_1500-x-300-02.jpg"
                img3="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/Toshiba/Amazon_Creative_Fridge_Range._CB663165313_SY250_.jpg"
                img4="https://images-eu.ssl-images-amazon.com/images/G/31/img17/Home/LA/Monica/Ref/Monsoon/Header-1500x300--ref-----reasons.jpg"
            />
            <div style={{ display: 'grid', gridTemplateColumns: 'auto auto', justifyContent: 'space-around' }}>

                {Amazonprodcts.filter(prod => prod.category === 'beautyandmore').map(product => <Product {...product} />)}
            </div>



        </>

    )
}
export default BeautyAndMore;