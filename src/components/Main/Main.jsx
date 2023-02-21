import React, { useState, useEffect } from "react";
import Card from "./Card";

const Main = () => {
  const [inputValue, setInputValue] = useState("");
  const [pokemonData, setPokemonData] = useState(null);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`);
      const data = await response.json();
      setPokemonData(data);
    } catch (error) {
      console.error(error);
      setPokemonData(null);
    }
  };

  useEffect(() => {
    setInputValue("");
  }, [pokemonData]);

  return (
    <div>
      <input type="text" value={inputValue} onChange={handleInputChange} />
      <button onClick={handleButtonClick}>Search</button>
      {pokemonData && <Card pokemon={pokemonData} />}
    </div>
  );
};

export default Main;

