import LOGO_URL from "../utils/constants"
import { useState,useEffect } from "react"
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
const Header =()=>{
    const [loginBtn,setLoginBtn]=useState("Login")
    useEffect(()=>{
        console.log('use effect called');
    },[])
    const status = useOnlineStatus()
    return (
        <div className="flex justify-between items-center bg-red-300 ">
            <div >
                <img className="w-10" src={LOGO_URL}></img>
            </div>
            <div >
                <ul className="flex space-x-4 px-4 ">
                    <li className="">Status:{(status==true)?" Online 🟢": " Offline 🔴"
} </li>
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/about">About us</Link></li>
                    <li><Link to="/contact">Contact us</Link></li>
                    <li><Link to="/grocery">Grocery</Link></li>
                    <li>Cart</li>
                    {/* <button className="login-button" onClick={()=>{
                        loginBtn==="login"?setLoginBtn("logout"):setLoginBtn("login")
                    }}>{loginBtn}</button> */}
                    <li><Link to="/signup">Signup</Link></li>

                </ul>

            </div>
            
        </div>
    )
}

export default Header