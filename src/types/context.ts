import { PokemonState } from './pokemon';

export interface NumberGeneratorContextType {
  generateNumber: (date: string) => number;
  uniqueNumber: number | null;
}

export interface PokemonContextType extends PokemonState {
  fetchPokemon: (number: number) => Promise<void>;
  clearPokemon: () => void;
}