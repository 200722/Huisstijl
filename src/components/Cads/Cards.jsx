import React, { Component } from "react";
import Card from "./CardUI";
import "./Cards.css";
import img1 from "../assets/heils.jpg";
import img2 from "../assets/Leger.jpg";
import img3 from "../assets/samenwerken.jpg";

class Cards extends Component {
  render() {
    return (
      <div className="container-fluid d-flex justify-content-center ">
        <div className="row">
          <div className="col-md-4">
            <Card
              className="img1"
              imgsrc={img1}
              back_img={img1}
              title="Het huisstijl front"
              text="Richtlijnen, alternative en aanvullende fonts"
              bu="Lees meer"
            />
          </div>
          <div className="col-md-4">
            <Card
              imgsrc={img2}
              title="ldh LOGO"
              text="Download hier hey logo in verschillende bestands-formaten"
              bu="Lees meer"
            />
          </div>
          <div className="col-md-4">
            <Card
              imgsrc={img3}
              title="Powerpoint Sjabloon"
              text="Download hier het sjabloon waarmee je je PowerPoint in het huisstijl maakt"
              bu="Lees meer"
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Cards;
