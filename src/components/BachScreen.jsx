import React from "react";
import "../styles/BachScreen.css";

function BachScreen() {
  const topItems = [
    "אישורי תקה\"ד",
    "הכנת סגל",
    "הוראות ונהלים",
    "גאנט",
    "גרף",
    "מבנה הבא\"ח",
    "עיקרי עשייה",
    "פקאות",
    "ישיבות",
  ].sort((a, b) => a.localeCompare(b, 'he'));

  const bottomItems = [
    "גרף פרטי",
    "סיכומי הכשרה",
    "תיקי מדריך",
    "תיקי תרגיל",
  ].sort((a, b) => a.localeCompare(b, 'he'));

  return (
    <div className="bach">
      <div className="bach-top-square">
        {topItems.map((item, index) => (
          <div className="item2" key={index}>{item}</div>
        ))}
      </div>
      <div className="bottom-row">
        <div className="bach-square">
          <div className="sub-header">הכש”י</div>
          <div className="bach-square-items">
            {bottomItems.map((item, index) => (
              <div className="item2" key={`h1-${index}`}>{item}</div>
            ))}
          </div>
        </div>
        <div className="bach-square">
          <div className="sub-header">הכש”מ</div>
          <div className="bach-square-items">
            {bottomItems.map((item, index) => (
              <div className="item2" key={`h2-${index}`}>{item}</div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default BachScreen;
