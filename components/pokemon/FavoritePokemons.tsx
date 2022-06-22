import { Grid } from "@nextui-org/react"
import { FavoriteCardPokemon } from "./"


interface FavoritePokemonsProps{
  pokemons: number[]
}

export const FavoritePokemons = ({pokemons}: FavoritePokemonsProps) => {
  return (
    <Grid.Container gap={2} justify="flex-start">
					{
        pokemons.map(pokeId => (
          <FavoriteCardPokemon key={pokeId} id={pokeId} />
        ))
      }
		</Grid.Container>
   
  )
}
