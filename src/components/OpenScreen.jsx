import React from "react";
import "../styles/OpenScreen.css";
import searchIcon from "../assets/icons/searchIcon.svg";


function OpenScreen({ onStart }) {
    return (
      <div className="welcome-screen">
        <div className="search-bar">
          <img src={searchIcon} alt="Search" className="search-icon" />
          <input type="text" placeholder="חפש באתר..." />
      </div>
      <div className="saying">
        <h3>דבר המפקד</h3>
        <p>
        {/* <span className="quote">"</span> */}
      חיילי ומפקדי בית הספר להנדסה צבאית – ברוכים הבאים,<br/>

בית הספר להנדסה צבאית הוא המקום שבו הערכים - ניצחון, מקצועיות, מצוינות ואנשים נפגשים על מנת להכין אתכם כמי שניצב בלב העשייה בתחומי ההכשרות, אימונים של חיל ההנדסה הקרבית – דור ההווה והעתיד – למשימות המורכבות ביותר בשדה הקרב בכל הזירות במסגרת המלחמה.

האתר שלפניכם נועד לשמש אתכם ככלי ללמידה עצמית ורוחבית, ארגון וניהול ידע, תכנון וככלי עבודה עיקרי זמין ונגיש – להכיר וללמוד נהלים, לעקוב אחר ההכשרות, להתעדכן בפעילויות השונות בגרף ובגאנט ולהיות מחוברים אל העשייה ובעיקר באתגר התכנון שמאחוריה. 
 <br/>זכרו – ידע הוא כוח, השתמשו בו באופן מושכל ונכון למען עמידה במשימה!
<br/>

בברכת שימוש מועיל ופורה באתר,

מפקד בית הספר להנדסה צבאית
      {/* <span className="quote">"</span> */}
        </p>
      </div>
      </div>
    );
  }
  
  export default OpenScreen;