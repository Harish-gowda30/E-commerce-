
import React from "react";
import { Link } from "react-router-dom";
import './address.css'


let Address=()=>{
    return(
        <div>
            <div className="address">
            <h1>Enter the Address</h1>
            <div className="address-entry">
                <div className="address-container"> 
                <div className="address-fields"> 
                <label  for="flat">Your Name</label>
                <input type="text" placeholder="Your Name" />
                <label  for="flat">Mobile Number</label>
                <input type="phone" placeholder="Mobile number" />
                <label  for="flat">Flat, House no, Building</label>
                <input type="text" placeholder="Flat no" id="flat"/>
                <label  for="Area">Area, Street, Sector, Village</label>
                <input type="text"  id="Area"/>
                <label  for="landmark">Landmark</label>
                <input type="text" placeholder="Landmark" id="landmark"/>
                <label for="flat">Pincode</label>
                <input type="text" placeholder="Pincode" id="pincode"/>
                </div>
                </div>
            </div>
            <Link to="/payment" ><button>Proceed</button></Link>
            </div>
        </div>
    )
}
export default Address