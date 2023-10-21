import React from "react"
import User from "./User"
import UserFc from "./UserFc"
const About = ()=>{
    return (
    <div>
    <h1>This is about us page</h1>
        <User name={"Kaushik"}  location={"abc"} contact={"test"}/>
        <UserFc name={"Kaushik"}  location={"abc"} contact={"test"}/>

    </div>)
}

export default About