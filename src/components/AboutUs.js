import User from "./User";
import UserClass from "./UserClassPractice";
import { Component } from "react";
import UserClassPractice from "./UserClassPractice";
import UserContext from "../utils/UserContext";
class AboutUs extends Component {
  constructor() {
    super();
    console.log("Parent constructor");
  }

  componentDidMount() {
    console.log("Parent componentDidMount");
  }
  render() {
    console.log("Parent render");
    return (
      <div className="about-container">
        <h1>About</h1>
        <User name={"Pooja Patil (function based)"} />
        <UserClassPractice
          name={"Pooja Patil (class based)"}
          location={"Pune"}
          contact="@Pooja"
        />
        <UserClass />
        <UserContext.Consumer>
          {({ loggedInUser }) => <h1>{loggedInUser}</h1>}
        </UserContext.Consumer>
      </div>
    );
  }
}
export default AboutUs;
