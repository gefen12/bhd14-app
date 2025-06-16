import React from "react";
import "../styles/MifkadaScreen.css";
import bhd14logo from "../assets/bhd14logo.svg";

function MifkadaScreen() {
  const mifkadaItems = [
    "אג״מ",
    "בטיחות",
    "ברה״ן",
    "גפ״ה",
    "טנ״א",
    "לוגיסטיקה",
    "מרפאה",
    "משא״ן",
    "פסיכולוגיה",
    "פלחי״ק"
  ].sort((a, b) => a.localeCompare(b, 'he'));

  return (
    <div className="Mifkada">
      {mifkadaItems.map((item, index) => (
        <div className="item3" key={index}>
          {/* <img src={bhd14logo} alt="" className="mifkada-logo" /> */}
          <span className="item2">{item}</span>
        </div>
      ))}
    </div>
  );
}

export default MifkadaScreen;
