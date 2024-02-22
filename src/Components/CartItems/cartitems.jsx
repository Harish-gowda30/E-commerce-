
import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import './cartitems.css'
// import { useHistory } from "react-router-dom";
import { Shopcontext } from "../../Context/shopcontext";
import Product from "../../Pages/product";
import Payment from "../Payment/payment";

let Cartitems=(props)=>{
    const [showImage, setShowImage] = useState(false);
    // const history = useHistory();
    const {getcartTotal,all_products,cartItems,removeFromCart}=useContext(Shopcontext)
    console.log(getcartTotal())
    console.log(all_products)
    console.log(cartItems)

    const openImageInNewWindow = () => {
        window.open("/new_image", "_blank");
    };

    // const handleProceed = () => {
    //     // Navigate to the new page
    //     window.location.href = "/newpage";
    //   };
    

    return(
        <div className="cartitems">
            <div className="cartitems-format-main">
                <p>Products</p>
                <p>Title</p>
                <p>Price</p>
                <p>Quantity</p>
                <p>Total</p>
                <p>Remove</p>
            </div>
            <hr />
            {all_products.map((e)=>{
                if(cartItems[e.id]>0){
                    return <div>
                        <div className="cartitems-format cartitems-format-main">
                    <img src={e.image} alt="" className="carticon-product-icon"/>
                    <p>{e.name}</p>
                    <p>${e.new_price}</p>
                    <button className="cartitems-quantity">{cartItems[e.id]}</button>
                    <p>${e.new_price*cartItems[e.id]}</p>
                    <img className="cartitems-remove" src="https://i.pinimg.com/564x/89/4f/2a/894f2a76de15504fe6a668548cdae846.jpg" alt="" onClick={()=>{removeFromCart(e.id)}} />
                </div>
                <hr />
                    </div>
                }
                return null;
            })}
            <div className="cartitems-down">
                <div className="cartitems-total">
                    <h1>Cart Total</h1>
                    <div>
                        
                        <div className="cartitems-total-item">
                            <h3>Total</h3>
                            <h3>${getcartTotal()}</h3>
                        </div>
                    </div>
                     <Link to="/address"><button>Buy Now</button> </Link>  

                </div>
                
            </div>
            <div>
                
            </div>
        </div>
    )
}
export default Cartitems