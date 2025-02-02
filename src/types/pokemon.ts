export interface PokemonListResponse {
    count: number;
    next: string | null;
    previous: string | null;
    results: {
      name: string;
      url: string;
    }[];
  }
  
  export interface PokemonDetails {
    id: number;
    name: string;
    sprites: {
      front_default: string;
      other: {
        'official-artwork': {
          front_default: string;
        };
      };
    };
    types: {
      slot: number;
      type: {
        name: string;
      };
    }[];
  }
  
  export interface PokemonState {
    pokemonData: PokemonDetails | null;
    loading: boolean;
    error: string | null;
    uniqueNumber: number | null;
  }