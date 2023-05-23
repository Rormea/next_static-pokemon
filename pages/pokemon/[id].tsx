import { useState } from 'react';
import { Layout } from '../../components/layouts';
import { GetStaticPaths, GetStaticProps, NextPage } from 'next';
import { pokeApi } from '../../api';
import { Pokemon } from '../../interfaces';
import { Button, Card, Container, Grid, Image, Text } from '@nextui-org/react';
import { localFavorites } from '../../utils';

import confetti from 'canvas-confetti'



interface Props {
    pokemon: Pokemon;
}


const PokemonPage: NextPage<Props> = ({ pokemon }) => {


    const [isInFavorites, setIsInFavorites] = useState(localFavorites.existingFavorites(pokemon.id));

    // console.log(pokemon)

    const onToggleFavorite = () => {
        // console.log('Funcionando', 'ID:', pokemon.id)
        localFavorites.toggleFavorites(pokemon.id);
        setIsInFavorites(!isInFavorites)

        if (isInFavorites) return

        confetti({
            zIndex: 999,
            particleCount: 200,
            spread: 160,
            angle: -120,
            origin: {
                x: 1,
                y: 0,
            },
        });

    };



    return (

        <Layout title={pokemon.name}>

            <Grid.Container css={{ mt: '5px' }} gap={2}>

                <Grid xs={12} sm={4} md={3}>
                    <Card isHoverable isPressable css={{ p: '30px' }}>
                        <Card.Body>
                            <Card.Image
                                src={pokemon.sprites.other?.dream_world.front_default || '/no image'}
                                alt={pokemon.name}
                                width='100%'
                                height={200}
                            />
                        </Card.Body>
                    </Card>
                </Grid>

                <Grid xs={12} sm={8}>
                    <Card>
                        <Card.Header css={{ display: 'flex', justifyContent: 'space-between' }}>

                            <Text h1 transform='capitalize'>{pokemon.name}</Text>

                            <Button
                                color='gradient'
                                ghost={!isInFavorites}
                                onClick={onToggleFavorite}
                            >
                                {isInFavorites ? 'Favorite' : 'Add to Favorites'}
                            </Button>
                        </Card.Header>

                        <Card.Body>
                            <Text transform='capitalize' size={30}>Sprites:</Text>

                            <Container display='flex' direction='row' gap={3}>
                                <Image
                                    src={pokemon.sprites.front_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />

                                <Image
                                    src={pokemon.sprites.back_default}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />

                                <Image
                                    src={pokemon.sprites.front_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />

                                <Image
                                    src={pokemon.sprites.back_shiny}
                                    alt={pokemon.name}
                                    width={100}
                                    height={100}
                                />

                            </Container>
                        </Card.Body>
                    </Card>
                </Grid>


            </Grid.Container>

        </Layout >
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


