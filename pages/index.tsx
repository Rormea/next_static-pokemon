import { Grid } from '@nextui-org/react'
import type { NextPage, GetStaticProps } from 'next'
import { Layout } from '../components/layouts'
import { pokeApi } from '../api';
import { PokemonList, smallPokemon } from '../interfaces';
import { PokemonCard } from '../components/pokemon/PokemonCard';





interface Props {
  pokemons: smallPokemon[],
};


const HomePage: NextPage<Props> = ({ pokemons }) => {

  // console.log(pokemons)
  return (

    <Layout title='Lista de Pokemons'>


      <Grid.Container gap={2} justify='flex-start'>
        {
          pokemons.map((el) =>

            <PokemonCard
              key={el.id}
              pokemons={el}
            />
          )
        }
      </Grid.Container >


    </Layout>
  )
};

// You should use getStaticProps when:
//- The data required to render the page is available at build time ahead of a user’s request.
//- The data comes from a headless CMS.
//- The data can be publicly cached (not user-specific).
//- The page must be pre-rendered (for SEO) and be very fast — getStaticProps generates HTML and JSON files, both of which can be cached by a CDN for performance.

export const getStaticProps: GetStaticProps = async (ctx) => {

  const { data } = await pokeApi.get<PokemonList>('/pokemon?limit=151');

  const pokemons: smallPokemon[] = data.results.map((el, i) => ({

    ...el,
    id: i + 1,
    img: `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${i + 1}.svg`
  }));

  return {
    props: {
      pokemons
    }
  }
}

export default HomePage
