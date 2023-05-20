import { FC } from "react"
import { smallPokemon } from "../../interfaces"
import { Card, Grid, Row, Text } from '@nextui-org/react'
import { useRouter } from "next/router"


interface Props {
    pokemons: smallPokemon,
};



export const PokemonCard: FC<Props> = ({ pokemons }) => {

    const router = useRouter();


    const onClick = () => {

        router.push(`/pokemon/${pokemons.id}`)
    };

    return (


        <Grid xs={6} sm={3} md={2} xl={1} key={pokemons.id}>

            <Card isHoverable isPressable onClick={onClick}>
                <Card.Body css={{ p: 1 }}>
                    <Card.Image
                        src={pokemons.img}
                        width="100%"
                        height={140}
                    />
                </Card.Body>
                <Card.Footer>
                    <Row justify='space-between'>
                        <Text>#{pokemons.id}</Text>
                        <Text transform='capitalize'>{pokemons.name}</Text>
                    </Row>
                </Card.Footer>
            </Card>
        </Grid>

    )
}
