import { FC } from 'react';
import { Grid } from '@nextui-org/react';
import { FavCardPoke } from './FavCardPoke';

interface Props {
    favPoke: number[];
}



export const FavPokes: FC<Props> = ({ favPoke }) => {
    return (
        <Grid.Container gap={2} direction='row' justify='flex-start'>
            {
                favPoke.map(el => (
                    <FavCardPoke pokeId={el} key={el} />
                ))
            }
        </Grid.Container>
    )
}
