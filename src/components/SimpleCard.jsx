import { Component } from "react";
import Title from "./Title";
import Description from "./Description";
import Image from "./Image";

class SimpleCard extends Component {
  render() {
    const item = this.props.item;

    return (
      <div className="simpleCard">
        <Image url={item.imageUrl} />

        <div className="cardContent">
          <Title text={item.title} />
          <Description text={item.description} />
        </div>
      </div>
    );
  }
}

export default SimpleCard;
