import React, { useState, useEffect } from "react";
import Card from "./Card";

const Main = () => {
  const [inputValue, setInputValue] = useState("");
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonList, setPokemonList] = useState([]);

  const handleInputChange = (event) => {
    setInputValue(event.target.value);
  };

  const handleButtonClick = async () => {
    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${inputValue}`);
      const data = await response.json();

      // Add the new Pokemon to the list
      setPokemonList((prevPokemonList) => [...prevPokemonList, data]);

      // Clear the old Pokemon data
      setPokemonData(null);

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
      {pokemonList.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default Main;



