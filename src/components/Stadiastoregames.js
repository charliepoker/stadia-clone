import React from "react";
import "./Stadiastore.css";
import Card from "./Card";
import { stadiaStore } from "../data";

function Stadiastoregames() {
  return (
    <>
      <div className="card-container">
        {stadiaStore.map((card, key) => {
          return <Card key={key} image={card.image} title={card.title} />;
        })}
      </div>
    </>
  );
}

export default Stadiastoregames;
