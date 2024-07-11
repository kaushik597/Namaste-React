import React from "react"

class User extends React.Component {
    constructor(props){
        super(props);
        this.state={
            userInfo:{
                name:"",
                location:""
            }
        }
    }
    async componentDidMount(){
        const response = await fetch("https://api.github.com/users/kaushik597")
        const data = await response.json();
        this.setState({
            userInfo:data
        })
    }

    componentDidUpdate(){
        console.log("component did update")
    }

    componentWillUnmount(){
        console.log("component will unmount")
    }
    render(){
        const {name,location,avatar_url} = this.state.userInfo

        return (
            <div className="user-card">
          
                <h2>Name: {name}</h2>
                <h2>Location: {location}</h2>
                <img src={avatar_url}></img>
            </div>
        )
    }
}
export default User;