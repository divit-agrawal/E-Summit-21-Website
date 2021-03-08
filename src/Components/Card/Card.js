import React from "react";
import "../Home/Home.css";

function Card() {
  return (
    <div class="card">
      <div class="gradient">
        <img
          src="https://mathurinchung.github.io/hosted-assets/oversize-card/strawberry.png"
          alt="strawberry"
        />
      </div>

      <h2 class="title">Strawberries</h2>

      <p class="info">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ratione, minus
        saepe, voluptatum delectus veniam nostrum incidunt assumenda ducimus rem
        at deserunt voluptas libero. Magni, aspernatur?
      </p>
    </div>
  );
}

export default Card;
