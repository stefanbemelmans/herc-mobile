import React from "react";
import "../App.css";
//import {Component} from "react";

export default function Header_LogoButtons() {
  return (
  <div className="appHead">
    <div className="buttons">
      <button><img id="back"className="icon" src='./images/icon_backarrow.png' alt="logo" /></button>
      <button><img id="logout" className="icon" src='./images/icon_logout.png' alt="logo" /></button>
    </div>

    <img className="applogo" src='./images/hercules logo breakdown.png' alt="logo" />
    
</div>)
}