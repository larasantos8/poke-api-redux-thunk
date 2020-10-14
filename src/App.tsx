import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { GetPokemon } from './actions/pokemonActions';
import { rootStore } from './Store';

function App() {
  const dispatch = useDispatch();
  const [ pokemonName, setPokemonName ] = useState('');
  const pokemonState = useSelector((state: rootStore) => state.pokemon);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => setPokemonName(event.target.value);

  const handleSearch = () => {
    dispatch(GetPokemon(pokemonName))
  }

  return (
    <div className="App">
      <input type="text" onChange={handleChange}></input>
      <button onClick={handleSearch}>Search</button>

      {pokemonState.pokemon && (
        <div>
          <img src={pokemonState.pokemon.sprites.front_default} alt=""/>
          {pokemonState.pokemon.abilities.map(ability => {
            return <p>{ability.ability.name}</p>
          })}
        </div>
      )}
    </div>
  );
}

export default App;
