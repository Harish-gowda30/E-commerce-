
import React, { useContext } from "react";
import './CSS/shopcategory.css'
import { Shopcontext } from "../Context/shopcontext";
import Item from "../Components/item/items";

let Shopcategory=(props)=>{
    const {all_products}=useContext(Shopcontext)
    return(
        <div className="shopcategory">
            <img className="shopcategory-banner" src={props.banner} />
            <div className="shopcategory-indexsort">

                <div className="shopcategory-products">
                    {all_products && all_products.map((item,i)=>{
                        if(props.category===item.category){
                            return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                        }
                        else{
                            return null;
                        }
                    })}
                </div>
            </div>
        </div>
    )
}
export default Shopcategory