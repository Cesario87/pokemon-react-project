import React from "react";

const Card = ({ pokemon }) => {
  const { name, id, height, weight, types, sprites } = pokemon;

  return (
    <div>
      <h2>{name}</h2>
      <img src={sprites.front_default} alt={name} />
      <p>ID: {id}</p>
      <p>Height: {height}</p>
      <p>Weight: {weight}</p>
      <p>Types: {types.map((type) => type.type.name).join(", ")}</p>
    </div>
  );
};

export default Card;
