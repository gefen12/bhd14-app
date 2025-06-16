import React, { useState, useEffect } from "react";
import { HashRouter as Router, Routes, Route, HashRouter } from "react-router-dom";
import './App.css';
import TopNav from './components/TopNav.jsx';
import PeleSite from './components/PeleSite.jsx';
import BackGround from './assets/background.jpg';
import BackGround2 from './assets/background2.jpg';
import BackGround3 from './assets/background3.jpg';
import BackGround4 from './assets/background4.jpg';
import BackGround5 from './assets/background5.jpg';
import BackGround6 from './assets/background6.jpg';
import bhd14Graphic from './assets/graphicbhd14.svg';

import SideNav from './components/SideNav.jsx';
import OpenScreen from "./components/OpenScreen.jsx";
import BachScreen from "./components/BachScreen.jsx";
import GdodHaScreen from "./components/GdodHaScreen.jsx";
import MiktzotScreen from "./components/MiktzotScreen.jsx";
import MifkadaScreen from "./components/MifkadaScreen.jsx";
import BottomNav from "./components/BottomNav.jsx";

function App() {
  const [showContent, setShowContent] = useState(true);
  const [page, setPage] = useState("home");
  const [currentBackground, setCurrentBackground] = useState(0);
  const [showAnimation, setShowAnimation] = useState(true);
  const backgrounds = [BackGround, BackGround2, BackGround3, BackGround4, BackGround5, BackGround6];

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowContent(true);
    }, 2500);

    return () => clearTimeout(timer);
  }, []);
  useEffect(() => {
    const hasAnimated = sessionStorage.getItem('hasAnimatedBhd14');

    if (!hasAnimated) {
      setShowAnimation(true);
      sessionStorage.setItem('hasAnimatedBhd14', 'true');
      setTimeout(() => {
        setShowAnimation(false);
      }, 3000); 
    }
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentBackground((prevIndex) => (prevIndex + 1) % backgrounds.length);
    }, 10000);

    return () => clearInterval(interval);
  }, [backgrounds.length]);

  const handlePageChange = (newPage) => {
    setPage(newPage);
  };

  return (
    <HashRouter>
      <Routes>
        <Route
          path="/"
          element={
            <div className="App">
              <div className="mask"  ></div>
              <img src={backgrounds[currentBackground]} alt="Background" className="background" />
        {/* <img
        src={bhd14Graphic}
        alt="bhd14Graphic"
        className={`bhd14Graphic ${showAnimation ? "animate" : ""}`} 
      /> */}

              {showContent && (
                <>
                  <SideNav />
                  <TopNav onNavigate={handlePageChange} activePage={page} />

                  <h1 className="sentence">תמיד בחזית, הנדסה צבאית</h1>
                  {page === "home" && <OpenScreen />}
                  {page === "bach" && <BachScreen />}
                  {page === "gdodha" && <GdodHaScreen />}
                  {page === "miktzot" && <MiktzotScreen />}
                  {page === "mifkada" && <MifkadaScreen />}

                  <BottomNav />
           
                </>
              )}
            </div>
          }
        />
        <Route path="/pelesite" element={<PeleSite />} />
      </Routes>
      </HashRouter>
  );
}

export default App;
