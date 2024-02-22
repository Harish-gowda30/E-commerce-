import React, { createContext, useState } from "react";
import all_products from "../Components/Assets/all-products";

export const Shopcontext = createContext("null");

const getDefaultCart = ()=>{
    let cart={};
    for(let i=0;i<all_products.length+1;i++){
        cart[i]=0;
    }
    return cart
}

const ShopcontextProvider=(props)=>{
    const[cartItems,setcartItems]=useState(getDefaultCart())
        

        const addToCart = (itemId)=>{
            setcartItems((prev)=>({...prev,[itemId]:prev[itemId]+1}))
        }
        // console.log(cartItems)
        const removeFromCart = (itemId)=>{
            setcartItems((prev)=>({...prev,[itemId]:prev[itemId]-1}))
        }

        const getcartTotal=()=>{
            let totalAmount=0
            for(let item in cartItems){
                if(cartItems[item]>0){
                    let itemInfo=all_products.find((product)=>product.id===Number(item))
                    totalAmount += itemInfo.new_price * cartItems[item]
                }
            }
            return totalAmount
        }
        let totalCartitems=()=>{
            let totalItem=0;
            for(let item in cartItems){
                if(cartItems[item]>0){
                    totalItem+=cartItems[item]
                }
            }
            return totalItem
        }

        const contextValue={totalCartitems,getcartTotal,all_products,cartItems,addToCart,removeFromCart}

        return(
            <Shopcontext.Provider value={contextValue}>
                {props.children}
            </Shopcontext.Provider>
        )
}
export default ShopcontextProvider