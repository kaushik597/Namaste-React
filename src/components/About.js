import React from "react"
import User from "./User"
// import UserFc from "./UserFc"
// const About = ()=>{
//     return (
//     <div>
//     <h1>This is about us page</h1>
//         <User name={"Kaushik"}  location={"abc"} contact={"test"}/>
//         <UserFc name={"Kaushik"}  location={"abc"} contact={"test"}/>

//     </div>)
// }


class About extends React.Component {
    constructor(props){
        super(props)
        console.log("parent constructor");
    
    }
    async componentDidMount()
{
    console.log("Parent component did mount");
  
    

}    render(){
        console.log('Parent render');
     
        return (
    <div>
    <h1>This is about us page</h1>
        <User  />
    </div>
    )
    }
}
export default About