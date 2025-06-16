import React from "react";
import "../styles/MiktzotScreen.css";

function MiktzotScreen() {
  const topRowItems = [
    "צמ״ה",
    "רק״מ",
    "לת״ק",
    "חבלה"
  ].sort((a, b) => a.localeCompare(b, 'he'));

  const bottomRowItems = [
    "גרף",
    "גאנט",
    "הוראות מקצועיות",
    "ישיבות",
    "סיכומים",
    "הכנת סגל",
    "שעון הדרכה",
    "קמד חה״ן",
    "אישורי תקה\"ד"
  ].sort((a, b) => a.localeCompare(b, 'he'));

  return (
    <div className="Miktzot">
      <div className="miktzot-top-row">
        {topRowItems.map((item, index) => (
          <div className="item2" key={`top-${index}`}>{item}</div>
        ))}
      </div>
      <div className="miktzot-bottom-row">
        {bottomRowItems.map((item, index) => (
          <div className="item2" key={`bottom-${index}`}>{item}</div>
        ))}
      </div>
    </div>
  );
}

export default MiktzotScreen;
