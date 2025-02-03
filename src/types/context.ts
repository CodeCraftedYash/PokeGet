import { Dispatch, SetStateAction } from 'react';
import { PokemonState } from './pokemon';

export interface NumberGeneratorContextType {
  generateNumber: (date: string) => number;
  uniqueNumber: number | null;
}

export interface PokemonContextType extends PokemonState {
  fetchPokemon: (number: number) => Promise<void>;
  clearPokemon: () => void;
}

export interface DisplayContextType {
  display:boolean;
  setDisplay:Dispatch<SetStateAction<boolean>>;
}