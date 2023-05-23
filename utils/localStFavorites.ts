


// si existen favoritos darme un arreglo de esos id que no se repitan (filter ) pero si no hay pushealo
const toggleFavorites = (id: number) => {

    // console.log('llamando a toggle')


    let favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]')

    if (favorites.includes(id)) {

        favorites = favorites.filter(pokeId => pokeId !== id)
    } else {
        favorites.push(id)
    };

    localStorage.setItem('favorites', JSON.stringify(favorites))
};

const toggleFavoritesName = (name: string) => {

    // console.log('llamando a toggle')


    let favorites: string[] = JSON.parse(localStorage.getItem('favorites') || '[]')

    if (favorites.includes(name)) {

        favorites = favorites.filter(pokeName => pokeName !== name)
    } else {
        favorites.push(name)
    };

    localStorage.setItem('favorites', JSON.stringify(favorites))
};


//// Para saber si existen favoritos o no
const existingFavorites = (id: number): boolean => {

    if (typeof window === 'undefined') return false;

    const favorites: number[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    return favorites.includes(id);
};


const existingFavoritesName = (name: string): boolean => {

    if (typeof window === 'undefined') return false;

    const favorites: string[] = JSON.parse(localStorage.getItem('favorites') || '[]');

    return favorites.includes(name);
};

// llenar un arreglo llamado pokemons con los pokemos que agregamos a favoritos , pero todo atraves de localStorage
const pokemons = (): number[] => {

    return JSON.parse(localStorage.getItem('favorites') || '[]');
};



export default {
    toggleFavorites,
    existingFavorites,
    toggleFavoritesName,
    existingFavoritesName,
    pokemons,
}