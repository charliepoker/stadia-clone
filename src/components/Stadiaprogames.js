import React from "react";
import "./Stadiapro.css";
import Card from "./Card";
import { stadiaPro } from "../data";

function Stadiaprogames() {
  return (
    <>
      <div className="card-container">
        {stadiaPro.map((card, key) => {
          return <Card image={card.image} title={card.title} key={key} />;
        })}
      </div>
    </>
  );
}

export default Stadiaprogames;
