
import { Spacer, Text, useTheme } from '@nextui-org/react';
import Image from 'next/image';
import React from 'react'



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
            padding: '0x 20px',
            backgroundColor: theme?.colors.gray800.value
        }}>

            <Image
                src={'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/132.png'}
                alt="icono"
                width={70}
                height={70}
            />

            <Text color='white' h2>P</Text>
            <Text color='white' h3>okemón</Text>

            <Spacer css={{ flex: 1 }} />
            <Text color='white' h3>Favoritos</Text>
        </div>

    )
};
