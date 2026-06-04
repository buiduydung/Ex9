import { Component } from "react";

class Image extends Component {
  render() {
    return (
      <div className="imageBox">
        {this.props.url ? (
          <img src={this.props.url} alt="card" />
        ) : (
          <span>IMG</span>
        )}
      </div>
    );
  }
}

export default Image;
