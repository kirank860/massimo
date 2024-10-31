import React from 'react';
import { MdOutlineClose } from "react-icons/md";
const Navbar = () => {
  return (
    <div style={{ position:"relative", width: "100%", height: "30px", background: "black" }}>
      <div style={{ display: "flex", alignItems: "center", justifyContent: "center" }}>
        <h1 style={{ color: "white", fontSize: "11px", fontFamily: "Roboto, sans-serif" }}>
          HAPPYDIWALI
        </h1>
      </div>
    <div style={{position:"absolute",top:"5px",right:"5px"}}>
        sdklkdl
    <MdOutlineClose  style={{color:"white"}}/>
    </div>
     
    </div>
  );
}

export default Navbar;
