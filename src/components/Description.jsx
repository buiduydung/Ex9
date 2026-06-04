import { Component } from "react";

class Description extends Component {
  render() {
    return <p className="cardDescription">{this.props.text}</p>;
  }
}

export default Description;
