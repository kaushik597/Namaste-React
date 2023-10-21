import { useState } from "react"
const UserFc =(props)=>{
    const [count]=useState(0)
    return(
      
             <div className="user-card">
                <h1>count: {count}</h1>
                <h2>Name: {props.name}</h2>
                <h2>Location: {props.location}</h2>
                <h2>contact: {props.contact}</h2>
        </div>
    )
}
export default UserFc