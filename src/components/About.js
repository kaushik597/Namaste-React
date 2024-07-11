import React, { useContext } from "react";
import User from "./User";
import UserContext from "../utils/UserContext";

class About extends React.Component {
  constructor(props) {
    super(props);
    console.log("parent constructor");
  }
  async componentDidMount() {
    console.log("Parent component did mount");
  }

  render() {
    console.log("Parent render");

    return (
      <div>
        <h1>This is about us page</h1>
        <div>
          <UserContext.Consumer>
          {
            ({username})=><h1>{username}</h1>
          }
          </UserContext.Consumer>
        </div>
        <User />
      </div>
    );
  }
}
export default About;
