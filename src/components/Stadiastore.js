import React from "react";
import "./Stadiastore.css";
import Button from "./Button"

function Stadiastore() {
  return (
    <>
      <div className="stadiastore">
        <div className="stadiastore-btn">
          <Button btnStlye={"btn-lg"} text="Try Stadia Pro free for 1 month" />
          <p>
            <sup>1</sup>$9.99/mo after trial, cancel anytime.
          </p>
        </div>
        <div className="stadiastore-text">
          <p className="maintext">
            More great games are waiting in the Stadia store
          </p>
          <p className="subtext">
            The games you buy go from screen… to screen… to screen.
            <a href=""> Compatible </a>laptops and phones. TVs. You have what it
            takes.
          </p>
        </div>
      </div>
    </>
  );
}

export default Stadiastore;
