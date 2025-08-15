import React from "react";

class UserClassPractice extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
      count2: 1,
      userInfo: {
        name: "",
        location: "",
      },
    };
    console.log(this.props.name, +"child constructor");
  }
  async componentDidMount() {
    console.log(this.props.name, +"child componentDidMount");
  }
  render() {
    const { name, location, contact } = this.props;
    {
      console.log(this.props.name, +"child render");
    }
    return (
      <div className="user-card">
        <h1>count: {this.state.count} </h1>
        <h1>count: {this.state.count2} </h1>
        <button
          onClick={() => {
            this.setState({ count: this.state.count + 1 });
          }}
        >
          Increase
        </button>
        <h1>Name: {name}</h1>
        <h2>Location: {location}</h2>
        <h2>Contact: {contact}</h2>
      </div>
    );
  }
}
export default UserClassPractice;
