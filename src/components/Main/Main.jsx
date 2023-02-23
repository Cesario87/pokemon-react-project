import React, { useState, useEffect, useRef } from "react";
import Card from "./Card";

const Main = () => {
  const [inputValue, setInputValue] = useState("");
  const [pokemonData, setPokemonData] = useState(null);
  const [pokemonList, setPokemonList] = useState([]);

  const debounceTimeoutRef = useRef(null);

  const handleInputChange = async (event) => {
    const value = event.target.value;
    setInputValue(value);

    // Clear any existing timeout
    if (debounceTimeoutRef.current) {
      clearTimeout(debounceTimeoutRef.current);
    }

    // Set a new timeout to make the fetch request
    debounceTimeoutRef.current = setTimeout(async () => {
      try {
        const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${value}`);
        const data = await response.json();

        // Check if the new Pokemon is already present in pokemonList
        const pokemonAlreadyInList = pokemonList.find(pokemon => pokemon.id === data.id);
        if (!pokemonAlreadyInList) {
          // Add the new Pokemon to the list if it's not already present
          setPokemonList((prevPokemonList) => [...prevPokemonList, data]);
        }

        // Set the Pokemon data for the current input value
        setPokemonData(null);

      } catch (error) {
        console.error(error);
        setPokemonData(null);
      }
    }, 1500);
  };

  useEffect(() => {
    setInputValue("");
  }, [pokemonList]);

  return (
    <div data-testid="mainRenders">
      <input type="text" data-testid="inputText" placeholder="Your pokemon name here" value={inputValue} onChange={handleInputChange} />
      {pokemonData && <Card pokemon={pokemonData} />}
      {pokemonList.map((pokemon) => (
        <Card key={pokemon.id} pokemon={pokemon} />
      ))}
    </div>
  );
};

export default Main;



