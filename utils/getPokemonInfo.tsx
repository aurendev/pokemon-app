import { pokeapi } from "../api"
import { Pokemon } from "../interfaces"



export const getPokemonInfo = async  (nameOrId: string) => {

  const { data:{name,id, sprites } } = await pokeapi.get<Pokemon>(`/pokemon/${nameOrId}`)

  return {name,id, sprites}

}