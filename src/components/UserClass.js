import React from "react";

class UserClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      userInfo: {
        name: "",
        location: "",
      },
    };
  }
  async componentDidMount() {
    const data = await fetch("https://api.github.com/users/patilpooja2427");
    const json = await data.json();
    this.setState({
      userInfo: json,
    });
  }
  render() {
    return (
      <div className="user-card">
        <h1>Name Live API: {this.state.userInfo.name}</h1>
        <h2>Location:{this.state.userInfo.location}</h2>
      </div>
    );
  }
}
export default UserClass;
