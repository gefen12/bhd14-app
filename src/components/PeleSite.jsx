import React from "react";
import "../styles/peleSite.css";
import PeleImg from "../assets/peleSite/background.png";
import PeleCenter2 from "../assets/peleSite/peleCenter2.svg";

import contact from "../assets/peleSite/contact.svg"; 
import textp from "../assets/peleSite/textp.svg";
import bsd from "../assets/peleSite/bsd.svg";


function PeleSite() {
  return (
    <div className="pele-site">
        {/* <img src={bsd} alt="BSD" className="pele-bsd" /> */}
        <img src={contact} alt="Contact" className="pele-contact" />
        <img src={textp} alt="Text" className="pele-textp" />

    </div>
  );
}

export default PeleSite;
