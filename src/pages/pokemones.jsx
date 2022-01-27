import { useState, useEffect } from "react"

const pokemones = () => {

    const [inputUser, setInputUser] = useState(1);
    const [pokemon, setPokemon] = useState({ nombre: "", tipo1: "", imagen: "" });
    useEffect(() => {
        const PKMNURL = "https://pokeapi.co/api/v2/pokemon/" + inputUser
        fetch(PKMNURL).
            then(res => res.json()).
            then(data => setPokemon(
                {
                    nombre: data.name,
                    tipo1: data.types[0].type.name,
                    imagen: data.sprites.front_default
                }));
    },
    [inputUser]);


return (<div>
    <h1>{pokemon.nombre}</h1>
    <h2>{pokemon.tipo1}</h2>
    <img src={pokemon.imagen} />
    <input type="number" name="" id="" onChange={(eve) => setInputUser(eve.target.value ? eve.target.value : 1)} />
    <button>go</button>
    <h1>wena rolito en docker men</h1>
</div>);
}

export default pokemones;
