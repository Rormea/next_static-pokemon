
import { Spacer, Text, useTheme, Link } from '@nextui-org/react';
import Image from 'next/image';





export const NavBar = () => {

    const { theme } = useTheme();

    // console.log(theme)

    return (
        <div style={{
            display: 'flex',
            width: '100%',
            flexDirection: 'row',
            alignItems: 'center',
            justifyContent: 'start',
            padding: '0 20px',
            backgroundColor: theme?.colors.gray800.value
        }}>

            <Link href='/'>
                <Image
                    src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'}
                    alt="icono"
                    width={70}
                    height={70}
                />

                <Text color='white' h2>P</Text>
                <Text color='white' h3>okemón</Text>
            </Link>


            <Spacer css={{ flex: 1 }} />


            <Link href='/favorites'>
                <Text color='white' h3>Favoritos</Text>
            </Link>


        </div>

    )
};
