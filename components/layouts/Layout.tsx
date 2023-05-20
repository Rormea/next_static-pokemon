import Head from 'next/head'
import { FC } from 'react'
import { NavBar } from '../ui'


interface Props {

    children: any,

    title?: string,

}


export const Layout: FC<Props> = ({ children, title }) => {


    return (
        <>
            <Head>
                <title>{title}</title>
                <meta name='author' content='Ronald Ormea' />
                <meta name='description' content={`Detalle del pokemon ${title}`} />
                <meta name='keywords' content={`${title}, pokemon, pokedex`} />
            </Head>

            <NavBar />

            <main style={{ padding: '0 2rem' }} >
                {children}
            </main>


        </>
    )
}