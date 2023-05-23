import { useEffect, useState } from 'react';
import { NoFavorites } from '../../components/ui';
import { Layout } from '../../components/layouts';
import { localFavorites } from '../../utils';
import { FavPokes } from '../../components/pokemon';


const FavoritesPage = () => {

    const [favPoke, setFavPoke] = useState<number[]>([]);

    useEffect(() => {

        setFavPoke(localFavorites.pokemons);

    }, [])


    return (
        <Layout title='Poke-Favoritos'>

            {
                favPoke.length == 0
                    ? <NoFavorites />
                    : <FavPokes favPoke={favPoke} />
            }
        </Layout>
    )
};
7

export default FavoritesPage