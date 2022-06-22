


const toggleFavorites = (id: number): void => {

  console.log('ToggleFavorite llaamndo')

  let favorites: number[] = JSON.parse(localStorage.getItem('favorites') ?? '[]')

  if (favorites.includes(id)) {
    favorites = favorites.filter(favorite => favorite !== id)
  } else {
    favorites.push(id)
  }

  localStorage.setItem('favorites', JSON.stringify(favorites))


}

const existsInFavorites = (id: number): boolean => {

  if (typeof localStorage === 'undefined') return false

  const favorites = JSON.parse(localStorage.getItem('favorites') ?? '[]')
  return favorites.includes(id)

}

const pokemons = () => {
  return JSON.parse(localStorage.getItem('favorites') ?? '[]')
}

export default {
  toggleFavorites,
  existsInFavorites,
  pokemons
}