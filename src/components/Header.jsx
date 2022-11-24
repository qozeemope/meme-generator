import React from "react";
import icon from "../assets/Troll Face.svg";

export default function header() {
  return (
    <div className="header">
      <div className="left">
        <img src={icon} alt="logo" width="50px" className="logo" />
        <h1 className="title">Meme Generator</h1>
      </div>
      <p>React Course - Project 3</p>
    </div>
  );
}
