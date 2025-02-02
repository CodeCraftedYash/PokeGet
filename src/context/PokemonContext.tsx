import React, { createContext, useContext, useState, useCallback } from 'react';
import { PokemonContextType } from '../types/context';
import { PokemonDetails } from '../types/pokemon';

const PokemonContext = createContext<PokemonContextType | undefined>(undefined);

export const PokemonProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [state, setState] = useState<Omit<PokemonContextType, 'fetchPokemon' | 'clearPokemon'>>({
    pokemonData: null,
    loading: false,
    error: null,
    uniqueNumber: null,
  });

  const fetchPokemon = useCallback(async (number: number) => {
    setState(prev => ({ ...prev, loading: true, error: null }));
    try {
      const listResponse = await fetch('https://pokeapi.co/api/v2/pokemon?limit=151');
      const listData = await listResponse.json();
      const pokemonUrl = listData.results[number].url;
      
      const pokemonResponse = await fetch(pokemonUrl);
      const pokemonData: PokemonDetails = await pokemonResponse.json();
      
      setState(prev => ({
        ...prev,
        pokemonData,
        loading: false,
        uniqueNumber: number,
      }));
    } catch (error) {
      setState(prev => ({
        ...prev,
        error: 'Failed to fetch Pokemon. Please try again.',
        loading: false,
      }));
    }
  }, []);

  const clearPokemon = useCallback(() => {
    setState({
      pokemonData: null,
      loading: false,
      error: null,
      uniqueNumber: null,
    });
  }, []);

  return (
    <PokemonContext.Provider value={{ ...state, fetchPokemon, clearPokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemon = () => {
  const context = useContext(PokemonContext);
  if (!context) {
    throw new Error('usePokemon must be used within a PokemonProvider');
  }
  return context;
};