import React from "react";
import "../styles/BottomNav.css";
import Elipse from "../assets/ellipse.png";

function BottomNav({ }) {


  return (
    <div className="bottom-nav">
        <img src={Elipse} alt="ellipse" className="ellipse" />
        <img src={Elipse} alt="ellipse" className="ellipse" />
        <img src={Elipse} alt="ellipse" className="ellipse" />
        <img src={Elipse} alt="ellipse" className="ellipse" />
        <img src={Elipse} alt="ellipse" className="ellipse" />
    </div>
  );
}

export default BottomNav;