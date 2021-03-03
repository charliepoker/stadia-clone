import React from "react";
import "./Featuredgames.css";
import Card from "./Card";
import { featuredGames } from "../data";

function Featuredgames() {
  return (
    <div>
      <div className="featured-games">
        <p>Featured games</p>
      </div>
      <div className="card-container">
        {featuredGames.map((card, key) => {
          return <Card key={key} image={card.image} title={card.title} />;
        })}
      </div>
    </div>
  );
}

export default Featuredgames;
