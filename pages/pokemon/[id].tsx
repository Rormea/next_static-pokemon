import { useRouter } from 'next/router';
import { Layout } from '../../components/layouts';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { pokeApi } from '../../api';
import { Pokemon } from '../../interfaces';


interface Props {
    pokemon: Pokemon;
}


const PokemonPage: NextPage<Props> = ({ pokemon }) => {

    // console.log(pokemon)

    return (

        <Layout title='un pokemon'>
            <h1> {pokemon.name} </h1>
        </Layout>
    )
};

export default PokemonPage;


// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes


export const getStaticPaths: GetStaticPaths = async (ctx) => {

    const poke151 = [...Array(151)].map((el, i) => `${i + 1}`)
    // poke151 = [ '1','2','3','4','5','6','7','8','9', ...'151'];

    return {
        paths: poke151.map(el => ({
            params: { id: el }
        })),

        fallback: false
    }
}




export const getStaticProps: GetStaticProps = async ({ params }) => {

    // console.log(ctx.params)

    const { id } = params as { id: string };

    const { data } = await pokeApi.get<Pokemon>(`/pokemon/${id}`);


    return {
        props: {
            pokemon: data
        }
    }
}


