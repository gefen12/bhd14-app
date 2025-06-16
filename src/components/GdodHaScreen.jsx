import React from "react";
import "../styles/GdodHaScreen.css";

function GdodHaScreen() {
  const items = [
    'גרף',
    'גאנט',
    'מבנה הגדוד',
    'ישיבות',
    'תיקי מדריך',
    '"כשיר להכשיר"',
    'הכנת סגל',
    'סיכום הכשרה',
    'אישורי תקה"ד',
    'פקאות',
    'עיקרי עשייה'
  ].sort((a, b) => a.localeCompare(b, 'he'));

  return (
    <div className="GdodHa">
      {items.map((item, index) => (
        <div className="item2" key={index}>{item}</div>
      ))}
    </div>
  );
}

export default GdodHaScreen;
