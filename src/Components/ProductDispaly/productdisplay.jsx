

import React, { useContext } from "react";
import './productdisplay.css'
import { Shopcontext } from "../../Context/shopcontext";

let Productdisplay=(props)=>{
    const {product}=props;
    const {addToCart}=useContext(Shopcontext)
    return(
        <div className="productdisplay">
            <div className="productdisplay-left">
                <div className="productdisplay-img-list">
                    <img src={product.image} />
                    <img src={product.image} />
                    <img src={product.image} />
                    <img src={product.image} />
                </div>
                <div className="productdisplay-img">
                    <img className="productdisplay-main-img" src={product.image} alt="" />
                </div>
            </div>
            <div className="productdisplay-right">
                    <h1>{product.name}</h1>
                    <div className="productdisplay-right-star">
                        <img src="" alt="" />
                    </div>
                    <div className="productdisplay-right-prices">
                        <div className="productdisplay-right-price-old">
                            ${product.old_price}
                        </div>
                        <div className="productdisplay-right-price-new">
                            ${product.new_price}
                        </div>
                    </div>
                    <div className="productdisplay-right-description">Amazing Product</div>
                        <button onClick={()=>{addToCart(product.id)}} >Add To Cart</button>
            </div>
        </div>
    )
}
export default Productdisplay