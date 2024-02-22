

import React from "react";
import './payment.css'


let Payment=({showImage})=>{
    return(
        <div>
            <div className="payment"> 
            <h1>Make a payment</h1>
            <button>Place order</button>
            <p>We accept </p>
          <img src="https://t4.ftcdn.net/jpg/04/73/84/61/360_F_473846184_0k637f6855ZJqaulKqAmgJTEVGVibR1P.jpg" alt="" />
          </div>   
        </div>
    )
}
export default Payment