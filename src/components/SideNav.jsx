import React, { useState } from "react";
import "../styles/SideNav.css";
import calendarIcon from "../assets/icons/calendarIcon.svg";
import filesIcon from "../assets/icons/filesIcon.svg";
import graphIcon from "../assets/icons/graphIcon.svg";
import inspoIcon from "../assets/icons/inspoIcon.svg";
import privacyIcon from "../assets/icons/privacyIcon.svg";
import warIcon from "../assets/icons/war.svg";  
import arrow from "../assets/arrow.svg";

function SideNav() {
    const [showFilesOptions, setShowFilesOptions] = useState(false);
    const [showInspoOptions, setShowInspoOptions] = useState(false);
  return (
    <div className="side-nav">
      <div className="item-side">
        <img src={calendarIcon} alt="Calendar" />
        <span>גאנט</span>
      </div>
      <div className="item-side">
        <img src={graphIcon} alt="Graph" />
        <span>גרף</span>
      </div>
      <div
        className="item-side files-item"
        onMouseEnter={() => setShowFilesOptions(true)}
        onMouseLeave={() => setShowFilesOptions(false)}
      >
        <img src={filesIcon} alt="Files" />
        <span>תיקי יסוד</span>
        {showFilesOptions && (
          <div className="dropdown">
            <div className="dropdown-item">
            <span><img className="arrow" src={arrow} alt="arrow"/></span> בא"ח 
            </div>
            <div className="dropdown-item">
            <span ><img className="arrow" src={arrow} alt="arrow"/></span> גדוד הפיקוד 
            </div>
            <div className="dropdown-item">
            <span><img className="arrow" src={arrow} alt="arrow"/></span> מקצועות 
            </div>
          </div>
        )}
      </div>
      <div className="item-side">
        <img src={privacyIcon} alt="Privacy" />
        <span>הוראות ונהלים</span>
      </div>
      <div
        className="item-side inspo-item"
        onMouseEnter={() => setShowInspoOptions(true)}
        onMouseLeave={() => setShowInspoOptions(false)}
      >
        <img src={inspoIcon} alt="Inspo" />
        <span>חזון ויעדים</span>
        {showInspoOptions && (
          <div className="dropdown">
            <div className="dropdown-item">
            <span ><img className="arrow" src={arrow} alt="arrow"/></span> מצפן 
            </div>
            <div className="dropdown-item">
            <span><img className="arrow" src={arrow} alt="arrow"/></span> יעוד 
            </div>
            <div className="dropdown-item">
            <span><img className="arrow" src={arrow} alt="arrow"/></span> תכנית עבודה 
            </div>
            <div className="dropdown-item">
            <span><img className="arrow" src={arrow} alt="arrow"/></span> ערכי ליבה 
            </div>
          </div>
        )}
      </div>
        <div className="item-side">
        <img src={warIcon} alt="Calendar" />
        <span>חרבות ברזל</span>
      </div>
    </div>
  );
}

export default SideNav;