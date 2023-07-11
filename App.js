import React from "react";
import  ReactDOM  from "react-dom/client";
import logo from "./assets/logo.jpg"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCoffee, faSearch, faUser } from '@fortawesome/free-solid-svg-icons'
const jsxHeading = <h1 className="heading">Hello from React using jsx</h1>

const JsxHeadingReturn =()=>{
    return <h1>Jsx Heading component with return</h1>
}

const JsxHeadingWithoutReturn =()=><h1>Jsx heading without return</h1>

const Test = () => {
   return  <div>
        <JsxHeadingReturn/>
        <JsxHeadingWithoutReturn/>
        {jsxHeading}
        <h1>{JsxHeadingReturn()}</h1>
    </div>
}

const header = React.createElement(
    "div",{className:"title"},[React.createElement("h1",{},"I am h1 from react.createElement"),
React.createElement("h2",{},"Iam h2"),
React.createElement("h3",{},"test")
]
)

console.log(header);

const headerUsingJSX = (
<div className="title">
    <h1>Iam h1 from jsx</h1>
    <h2>Iam h2</h2>
    <h3>Iam h3</h3>


</div>)

const HeadingComponent =() => {
    return <div className="title">
    <h1 className="heading">Iam h1 from heading component</h1>
    <h2 style={{color:"red"}}>Iam h2</h2>
    <h3>Iam h3</h3>


</div>
}

const AnotherComponent = () =>{
return (
    <>
    <h1>This is another component we are embedding heading component below</h1>
    <HeadingComponent/></>
)
}
const Logo =()=> <img src={logo} width={50} height={50}></img>
const SearchBar =()=>{
    return (
        <>
        <input id="inp"></input>
         <FontAwesomeIcon icon={faSearch} id="icon"/>
         </>

    )
}
const UserIcon =() =>{
    return (
        <FontAwesomeIcon icon={faUser} id="usr"></FontAwesomeIcon>
    )
}
const Header =() =>{
    return (
        <div className="test">
        <Logo  />
        <SearchBar  />
        <UserIcon  />

        </div>
    )
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Header />);