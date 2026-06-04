import { Component } from "react";

class Title extends Component {
  render() {
    return <h2 className="cardTitle">{this.props.text}</h2>;
  }
}

export default Title;
