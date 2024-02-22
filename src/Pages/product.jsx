
import React, { useContext } from "react";
import { Shopcontext } from "../Context/shopcontext";
import { useParams } from "react-router-dom";
import Breadcrum from "../Components/Breadcrums/breadcrum";
import Productdisplay from "../Components/ProductDispaly/productdisplay";
import Descriptionbox from "../Components/DescriptionBox/descriptionbox";
import Relatedproducts from "../Components/RelatedProducts/relatedproducts";
import Cartitems from "../Components/CartItems/cartitems";
import Payment from "../Components/Payment/payment";

let Product=()=>{
    const {all_products}= useContext(Shopcontext)
    const {productId} = useParams()
    if (!all_products || all_products.length === 0) {
        return <div>Loading...</div>; 
    }
    const product = all_products.find((e)=>e.id===Number(productId))
    if (!product) {
        return <div>Product not found</div>; 
    }
    return(
        <div>
            <Breadcrum product={product}/>
            <Productdisplay product={product} />
            <Relatedproducts />
            
            
        </div>
    )
}
export default Product