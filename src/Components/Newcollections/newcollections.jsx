
import React from "react";
import './newcollections.css' 
import Item from "../item/items"; 
import new_collections from "../Assets/new-collections";

let Newcollections=()=>{
    return(
        <div className="newcollections">
            <h1>New Collections</h1>
            <hr />
            <div className="collections">
                {new_collections.map((item,i)=>{
                    return <Item key={i} id={item.id} name={item.name} image={item.image} new_price={item.new_price} old_price={item.old_price}/>
                })}
            </div>
        </div>
    )
}
export default Newcollections