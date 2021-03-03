import React from "react";
import "./Topbar.css";

function Topbar() {
  return (
    <div>
      <div className="topbar">
        <div className="topbar-maintext">
          <span className="material-icons"> shopping_bag </span>
          <h5>Play Cyberpunk 2077 on Stadia!</h5>
        </div>
        <div className="topbar-subtext">
          <p>
            <a href="">Click here to Buy Now.</a>No subscription required.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
