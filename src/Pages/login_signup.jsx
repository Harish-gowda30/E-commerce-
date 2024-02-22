
import React, { useState } from "react";
import './CSS/login_signup.css'

let LoginSignup=()=>{

    const [state,setState] = useState("Sign Up")
    const [formData, setformData] = useState({
        username:"",
        password:"",
        email:"",
    });  

    const changeHandler = (e)=>{
        setformData({...formData,[e.target.name]:e.target.value})
    }

    const login = async ()=>{
        console.log("Login function executed",formData)
        let responseData;
        await fetch('http://localhost:4000/login',{
            method:"POST",
            headers:{ 
            Accept:'application/form-data',
            'Content-Type':'application/json',
        },
        body: JSON.stringify(formData),
        }).then((response)=>response.json()).then((data)=>responseData=data);
    
        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace('/');
        }
        else{
            alert(responseData.errors)
        }
    }

    const sign_up = async ()=>{
        console.log("Sign up function executed",formData)
        let responseData;
        await fetch('http://localhost:4000/signup',{
            method:"POST",
            headers:{ 
            Accept:'application/form-data',
            'Content-Type':'application/json',
        },
        body: JSON.stringify(formData),
        }).then((response)=>response.json()).then((data)=>responseData=data);

        if(responseData.success){
            localStorage.setItem('auth-token',responseData.token);
            window.location.replace('/');
        }
        else{
            alert(responseData.errors)
        }
    }

    return(
        <div className="loginsignup">
           <div className="loginsignup-container">
            <h1>{state}</h1>
            <div className="loginsignup-fields">
               {state ==="Sign Up" ? <input type="text" name="username" value={formData.username} onChange={changeHandler} placeholder="Your Name" required/>: <></>}
                <input name="email" value={formData.email} onChange={changeHandler} type="email" placeholder="Email address" required />
                <input name="password" value={formData.password} onChange={changeHandler} type="password" placeholder="password" required />
            </div>
            <button onClick={()=>{state==="Login"?login():sign_up()}}>Continue</button>
            {state==="Sign Up"? 
            <p className="loginsignup-login">Already have an account? <span onClick={()=>{setState("Login")}}>Login here</span> </p> :
            <p className="loginsignup-login">Create an account? <span onClick={()=>{setState("Sign Up")}}>Click here</span> </p> }
            <div className="loginsignup-agree">
                <input type="checkbox" name="" id="" />
                <p>By continuing, i agree to the terms of use and privacy policy</p>
            </div>
           </div>
        </div>
    )
}
export default LoginSignup