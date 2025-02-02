import React from 'react';
import { usePokemon } from '../context/PokemonContext';
import LoadingSpinner from './LoadingSpinner';
import { RefreshCw } from 'lucide-react';
import { PokemonDetails } from '../types/pokemon';

const PokemonDisplay: React.FC = () => {
  const { pokemonData, loading, error, fetchPokemon, uniqueNumber } = usePokemon();

  if (loading) {
    return <LoadingSpinner />;
  }

  if (error) {
    return (
      <div className="text-center">
        <p className="text-red-500 mb-4">{error}</p>
        <button
          onClick={() => uniqueNumber !== null && fetchPokemon(uniqueNumber)}
          className="inline-flex items-center px-4 py-2 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
        >
          <RefreshCw className="w-4 h-4 mr-2" />
          Retry
        </button>
      </div>
    );
  }

  if (!pokemonData) {
    return null;
  }

  return (
    <div className="text-center animate-fade-in">
      <img
        src={pokemonData.sprites.other['official-artwork'].front_default}
        alt={pokemonData.name}
        className="w-48 h-48 mx-auto mb-4"
        loading="lazy"
      />
      <h2 className="text-2xl font-bold capitalize mb-2">{pokemonData.name}</h2>
      <div className="flex justify-center gap-2">
        {pokemonData.types.map((type) => (
          <span
            key={type.type.name}
            className="px-3 py-1 rounded-full text-sm font-medium bg-blue-100 text-blue-800"
          >
            {type.type.name}
          </span>
        ))}
      </div>
    </div>
  );
};

export default PokemonDisplay