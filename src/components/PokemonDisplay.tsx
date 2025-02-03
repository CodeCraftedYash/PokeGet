import React from 'react';
import { usePokemon } from '../context/PokemonContext';
import LoadingSpinner from './LoadingSpinner';
import { RefreshCw } from 'lucide-react';
import { PokemonDetails } from '../types/pokemon';
import { useDisplayContext } from '../context/DisplayContext';

const PokemonDisplay: React.FC = () => {
  const {display} = useDisplayContext();
  const { pokemonData, loading, error, fetchPokemon, uniqueNumber } = usePokemon() as{
    pokemonData:PokemonDetails | null;
    loading:boolean;
    error : string | null;
    fetchPokemon:(id:number) => void;
    uniqueNumber:number | null;
  };

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
    <>
    {display && <div className="text-center animate-fade-in">
    
      <img
        src={pokemonData.sprites.other['official-artwork'].front_default}
        alt={pokemonData.name}
        className="w-48 h-48 mx-auto mb-4 bg-[rgba(0,0,0,0)]"
        loading="lazy"
        style={{
          backgroundImage: "radial-gradient(circle, rgba(255,255,255,1.5) 0%,rgba(255 ,250 ,255 , 0.1) 50%, transparent 75%)"
        }}
      />
    
      <h2 className="text-3xl font-bold capitalize mb-2 text-white p-2 -tracking-tighter">{pokemonData.name}</h2>
      <div className="flex justify-center gap-2">
        {pokemonData.types.map((type) => (
          <span
            key={type.type.name}
            className="px-3 py-1 rounded-full text-lg font-medium bg-blue-400 text-white "
          >
            {type.type.name}
          </span>
        ))}
      </div>
    </div>}
    </>
  );
};

export default PokemonDisplay