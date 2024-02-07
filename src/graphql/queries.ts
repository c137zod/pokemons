import gql from "graphql-tag"

export const GET_POKEMONS_QUERY = gql`
  query getPokemons($limit: Int!, $offset: Int!) {
    pokemons: pokemon_v2_pokemon(limit: $limit, offset: $offset) {
      name
      id
    }
  }
`

export const GET_POKEMON_DETAILS_QUERY = gql`
  query pokemonDetails($name: String) {
    species: pokemon_v2_pokemonspecies(where: { name: { _eq: $name } }) {
      name
      id
      pokemon_v2_pokemons {
        pokemon_v2_pokemonstats {
          base_stat
          stat: pokemon_v2_stat {
            name
          }
        }
        pokemon_v2_pokemontypes {
          type: pokemon_v2_type {
            name
          }
        }
      }
    }
  }
`
interface PokemonStatsData {
  base_stat: number
  stat: {
    name: string
  }
}

interface PokemonTypeData {
  type: {
    name: string
  }
}

interface PokemonVariationData {
  pokemon_v2_pokemonstats: PokemonStatsData[]
  pokemon_v2_pokemontypes: PokemonTypeData[]
}

interface PokemonSpeciesData {
  id: number
  name: string
  pokemon_v2_pokemons: PokemonVariationData[]
}

export interface GraphQLResponse {
  species: PokemonSpeciesData[]
}
