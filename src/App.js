import React from "react";
import  ReactDOM  from "react-dom/client";
import Header from "./components/Header"
import Body from "./components/Body";


const Footer =()=>{
    return (
        <div>
            <h1>Footer</h1>
        </div>
    )
}

const AppComponent =() => {
return (
    <div>
        <Header />
        <Body />
        <Footer />
    </div>
)
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<AppComponent />);