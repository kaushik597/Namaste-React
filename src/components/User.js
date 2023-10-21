import React from "react"

class User extends React.Component {
    constructor(props){
        super(props);
        this.state={
            count:0,
            count1:1
        }
    }
    render(){
        return (
            <div className="user-card">
                <h1>Count:{this.state.count}</h1>
                <button onClick={()=>{
                    this.setState({
                        count:this.state.count+1

                    }

                    )
                }}>increment</button>
                <h2>Name: {this.props.name}</h2>
                <h2>Location: {this.props.location}</h2>
                <h2>contact: {this.props.contact}</h2>
            </div>
        )
    }
}
export default User;