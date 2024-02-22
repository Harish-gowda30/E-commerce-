
import React, { useContext, useRef, useState } from "react"
import './Navbar.css' 
import logo from "../Assets/logo.png"
import cart from "../Assets/cart.png"
import { Link } from "react-router-dom";
import { Shopcontext } from "../../Context/shopcontext";

let Navbar=()=>{
    let [menu,setMenu]=useState("shop")
    const{totalCartitems}=useContext(Shopcontext)
    const menuRef=useRef();

    return(
    <div className="navbar">
        <div className="nav-logo">
            <img  src={logo} />
            <p>Shop Here</p>
        </div>
        <ul ref={menuRef} className="nav-menu"> 
          <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration:"none"}} to="/">Home</Link> {menu==="shop"?<hr/>:<></>} </li>
          <li onClick={()=>{setMenu("mobile")}}><Link style={{textDecoration:"none"}} to="/mobile">Mobile</Link> {menu==="mobile"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("laptop")}}><Link style={{textDecoration:"none"}} to="/laptop">Laptop</Link>  {menu==="laptop"?<hr/>:<></>}</li>
          <li onClick={()=>{setMenu("tv")}}><Link style={{textDecoration:"none"}} to="/tv">TV</Link> {menu==="tv"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-login-cart">
            <Link to="/login"> <button>Login</button></Link> 
           <Link to="/cart">  <img style={{height:"80px", width:"80px"}} src={cart} /></Link>
            <div className="nav-cart-count">{totalCartitems()}</div>    
        </div> 
    </div>            
    )
}
export default Navbar