import LOGO_URL from "../utils/constants"
import { useState,useEffect } from "react"
import {Link} from "react-router-dom"
const Header =()=>{
    const [loginBtn,setLoginBtn]=useState("Login")
    useEffect(()=>{
        console.log('use effect called here');
    },[])
    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL}></img>
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li>Cart</li>
                    <button className="login-button" onClick={()=>{
                        loginBtn==="login"?setLoginBtn("logout"):setLoginBtn("login")
                    }}>{loginBtn}</button>

                </ul>

            </div>
            
        </div>
    )
}

export default Header