import { useState, useEffect } from "react";

const pokemon = () => {
  const [pokemon, setPokemon] = useState({ nombre: "", tipo: "", imagen: "" });

  useEffect(() => {
    const URL_DITTO = "https://pokeapi.co/api/v2/pokemon/ditto";
    fetch(URL_DITTO)
      .then((res) => res.json())
      .then((data) => {
        setPokemon({
          nombre: data.name,
          tipo: data.types[0].type.name,
          imagen: data.sprites.front_default,
        });
      });
  }, []);

  return (
    <div>
      <h1>{pokemon.nombre}</h1>
      <h2>{pokemon.tipo}</h2>
      <img src={pokemon.imagen} />
    </div>
  );
};

export default pokemon;
