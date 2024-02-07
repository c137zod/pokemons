import { ref, watch } from "vue"
import { useQuery } from "@vue/apollo-composable"
import { GET_POKEMON_DETAILS_QUERY } from "@/graphql/queries"
import { transformPokemonData } from "@/utils/index"
import { loadFromIndexedDB, saveToIndexedDB } from "@/utils/DB"

export interface Pokemon {
  id: number
  name: string
  hp: number
  attack: number
  defense: number
  specialAttack: number
  specialDefense: number
  speed: number
  type: string
  imageUrl: string
}

export function usePokemon(name: string) {
  const variables = ref({ name })
  const pokemon = ref<Pokemon | null>(null)
  const loading = ref(false)
  const error = ref<Error | null>(null)

  function isPokemon(obj: any): obj is Pokemon {
    return obj && typeof obj === "object" && "name" in obj && "id" in obj
  }

  ;(async function fetchPokemon() {
    if (loading.value) return
    loading.value = true
    try {
      const storedPokemon = await loadFromIndexedDB(name)
      if (storedPokemon && isPokemon(storedPokemon)) {
        pokemon.value = storedPokemon
      } else {
        const { result, refetch } = useQuery(GET_POKEMON_DETAILS_QUERY, variables, { fetchPolicy: "no-cache" })
        watch(result, (newValue: any) => {
          const newPokemon = transformPokemonData(newValue)
          if (newPokemon) {
            pokemon.value = newPokemon
            saveToIndexedDB(newPokemon)
          } else {
            pokemon.value = null
          }
        })
        await refetch()
      }
    } catch (e) {
      error.value = e as Error
    } finally {
      loading.value = false
    }
  })()

  return { pokemon, loading, error }
}
