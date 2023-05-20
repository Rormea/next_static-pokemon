export interface PokemonList {
    count: number;
    next: string;
    previous: string;
    results: smallPokemon[];
}

export interface smallPokemon {
    name: string;
    url: string;
    id: number;
    img: string;
}

