import { GraphQLResponse } from "@/graphql/queries"
import { Pokemon } from "@/hooks/usePokemon"

export function getPokemonImageUrl(pokemonId: number): string {
  return `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`
}

export function capitalize(value: string): string {
  if (!value) return ""
  return value.charAt(0).toUpperCase() + value.slice(1)
}

export function transformPokemonData(data: GraphQLResponse): Pokemon | null {
  if (!data.species || data.species.length === 0) return null

  const speciesData = data.species[0]
  const pokemonData = speciesData.pokemon_v2_pokemons[0]
  const stats: { [key: string]: number } = {}

  pokemonData.pokemon_v2_pokemonstats.forEach((statItem) => {
    stats[statItem.stat.name] = statItem.base_stat
  })

  const type = pokemonData.pokemon_v2_pokemontypes[0]?.type.name

  return {
    id: speciesData.id,
    name: speciesData.name,
    hp: stats.hp,
    attack: stats.attack,
    defense: stats.defense,
    specialAttack: stats["special-attack"],
    specialDefense: stats["special-defense"],
    speed: stats.speed,
    type,
    imageUrl: getPokemonImageUrl(speciesData.id),
  }
}

export enum PokemonTypeColors {
  normal = "#A8A878",
  fire = "#F08030",
  water = "#6890F0",
  electric = "#F8D030",
  grass = "#78C850",
  ice = "#98D8D8",
  fighting = "#C03028",
  poison = "#A040A0",
  ground = "#E0C068",
  flying = "#A890F0",
  psychic = "#F85888",
  bug = "#A8B820",
  rock = "#B8A038",
  ghost = "#705898",
  dragon = "#7038F8",
  dark = "#705848",
  steel = "#B8B8D0",
  fairy = "#EE99AC",
}
