import LOGO_URL from "../utils/constants"
import { useState,useEffect, useContext } from "react"
import {Link} from "react-router-dom"
import useOnlineStatus from "../utils/useOnlineStatus"
import UserContext from "../utils/UserContext"
import { useSelector } from "react-redux"
const Header =()=>{
    const [loginBtn,setLoginBtn]=useState("Login")
    const user =useContext(UserContext)
    console.log("header user", user);
    useEffect(()=>{
        console.log('use effect called');
    },[])
    const status = useOnlineStatus()
    const cartItems = useSelector(store=>{return store.cart.items})
    console.log(cartItems);
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
                    <li className="font-bold"><Link to="/cart">Cart</Link>({cartItems.length}items)</li>
                    <li><Link to="/signup">Signup</Link></li>
                    <li className="font-bold">{user.username}</li>

                </ul>

            </div>
            
        </div>
    )
}

export default Header