import React from "react";
import { useNavigate } from "react-router-dom";
import "../styles/TopNav.css"; 
import bhd14logo from "../assets/bhd14logo.svg"; 
import peleLogo from "../assets/pelelogo.svg";
import bhd14Graphic from "../assets/Graphicbhd14.svg";


function TopNav({ onNavigate, activePage }) {
    const navigate = useNavigate();

    const handlePeleClick = () => {
      navigate("/pelesite"); // Navigate to the PeleSite page
    };
    
    return (
      <>
        <img
          src={peleLogo}
          alt="Pele Logo"
          className="peleLogo"
          onClick={handlePeleClick}
          style={{ cursor: "pointer" }}
        />
        <div className="top-nav">
          <div
            className={`item ${activePage === "bach" ? "active" : ""}`}
            onClick={() => onNavigate("bach")}
          >
            בא"ח
          </div>
          <div
            className={`item ${activePage === "gdodha" ? "active" : ""}`}
            onClick={() => onNavigate("gdodha")}
          >
            גדוד הפיקוד
          </div>
          <div
            className={`bhd14 ${activePage === "home" ? "active" : ""}`}
            onClick={() => onNavigate("home")}
          >    
                  <img
        src={bhd14Graphic}
        alt="bhd14Graphic"
        className="bhd14Graphic" 
      />    </div>
          <div
            className={`item ${activePage === "miktzot" ? "active" : ""}`}
            onClick={() => onNavigate("miktzot")}
          >
            מקצועות
          </div>
          <div
            className={`item ${activePage === "mifkada" ? "active" : ""}`}
            onClick={() => onNavigate("mifkada")}
          >
            מפקדה
          </div>
        </div>
        <img src={bhd14logo} alt="bhd14logo" className="bhd14logo" />
      </>
    );
}

export default TopNav;