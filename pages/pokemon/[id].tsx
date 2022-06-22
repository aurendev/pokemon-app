import { GetStaticProps, NextPage } from 'next'
import React, { useEffect, useState } from 'react'
import { MainLayout } from '../../components/layouts'
import { GetStaticPaths } from 'next'
import { Pokemon } from '../../interfaces'
import { Button, Card, Container, Grid, Text } from '@nextui-org/react'
import Image from 'next/image'
import { getPokemonInfo, localFavorites } from '../../utils'

import confetti from 'canvas-confetti'

interface Props{
  pokemon: Pokemon
}

const  PokemonPage: NextPage<Props> = ({pokemon}) => {

  const [isFavorite, setIsFavorite] = useState(false)

  const onToggleFavorites = () => {
    localFavorites.toggleFavorites(pokemon.id)
    setIsFavorite(!isFavorite)

    if(isFavorite) return false

    confetti({
      zIndex: 999,
      particleCount: 100,
      spread: 160,
      angle: -100,
      origin: {
        x:1,
        y:0
      }
    })
  }

  useEffect(() => {
    setIsFavorite(localFavorites.existsInFavorites(pokemon.id))
  }, [pokemon])
  


  return (
    <MainLayout title={pokemon.name}>
      <Grid.Container css={{marginTop: '5px'}} gap={2} >
        <Grid xs={12} sm={4} >
          <Card isHoverable css={{padding: '30px'}} >
            <Card.Body>
              <Card.Image
                alt={pokemon.name}
                width="100%" 
                height={200}
                src={pokemon.sprites.other?.dream_world.front_default ?? '/no-image'} />
            </Card.Body>
          </Card>
        </Grid>

        <Grid xs={12} sm={8} >
          <Card>
            <Card.Header css={{display:'flex', justifyContent: 'space-between'}} >
              <Text h1 transform="capitalize" >{pokemon.name}</Text>
              <Button
                onClick={onToggleFavorites}
                color={'gradient'}
                ghost={!isFavorite}
              >
                {isFavorite ? 'Remove from favorites' : 'Add to favorites'}
              </Button>
            </Card.Header>
            <Card.Body>
              <Text  size={30} >Sprites:</Text>
              <Container>
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
    </MainLayout>
  )
}

// You should use getStaticPaths if you’re statically pre-rendering pages that use dynamic routes
export const getStaticPaths: GetStaticPaths = async (ctx) => {

  const pokemons151 = [...Array(151)].map((value, index) => `${index + 1}`)

  return {
    paths: pokemons151.map( id => ({ params: { id } })),
    fallback: false
  }
}

export const getStaticProps: GetStaticProps = async (ctx) => {

  const id = ctx.params?.id as string

	return {
		props: {
      pokemon: await getPokemonInfo(id)
		},
	};
};




export default PokemonPage;