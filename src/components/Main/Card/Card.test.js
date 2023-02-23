import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';

test('Card renders', () => {
  const pokemonData = { name:"ditto", id:"132", height:"3", weight:"40", types:[{type: {name:"normal"}}], sprites:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" };
  render(<Card pokemon={pokemonData} />);
  const cardElement = screen.getByTestId('cardRenders');
  expect(cardElement).toBeVisible();
});

test('Title exists', () => {
  const pokemonData = { name:"ditto", id:"132", height:"3", weight:"40", types:[{type: {name:"normal"}}], sprites: { front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" }};
  render(<Card pokemon={pokemonData} />);
  const titleElement = screen.getByTestId('Card__title');
  expect(titleElement).toBeInTheDocument();
  const imgElement = screen.getByTestId('Card__img');
  expect(imgElement).toBeInTheDocument();
});

test('Card renders the name from props in the title', () => {
  const pokemonData = { name:"ditto", id:"132", height:"3", weight:"40", types:[{type: {name:"normal"}}], sprites: { front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" }};
  render(<Card pokemon={pokemonData} />);
  const titleElement = screen.getByTestId('Card__title');
  expect(titleElement).toHaveTextContent(pokemonData.name);
});

test('Card renders the sprite image from props', () => {
  const pokemonData = { name:"ditto", id:"132", height:"3", weight:"40", types:[{type: {name:"normal"}}], sprites: { front_default:"https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" }};
  render(<Card pokemon={pokemonData} />);
  const imgElement = screen.getByTestId('Card__img');
  expect(imgElement).toHaveAttribute('src', pokemonData.sprites.front_default);
});

// describe("Card component", () => {
//   const pokemonData = { 
//     name: "ditto", 
//     id: "132", 
//     height: "3", 
//     weight: "40", 
//     types: [{ type: { name: "normal" } }], 
//     sprites: { front_default: "https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png" }
//   };

//   it("renders the sprite image from props", () => {
//     render(<Card pokemon={pokemonData} />);
//     const imgElement = screen.getByTestId("Card__img");
//     expect(imgElement).toHaveAttribute("src", pokemonData.sprites.front_default);
//   });
// });