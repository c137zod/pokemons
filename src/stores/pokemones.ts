import { defineStore } from "pinia"
import { provideApolloClient, useQuery } from "@vue/apollo-composable"
import { ApolloError } from "@apollo/client/errors"
import { watch, ref } from "vue"
import { apolloClient } from "@/graphql/apollo-client"
import { getPokemonImageUrl } from "@/utils/"
import { GET_POKEMONS_QUERY } from "@/graphql/queries"

type Pokemon = {
  name: string
  id: number
  imageUrl: string
}

export const usePokemonStore = defineStore("pokemones", {
  state: () => ({
    pokemons: [] as Pokemon[],
    loading: false,
    error: null as ApolloError | null,
    limit: 10,
    offset: 0,
  }),
  actions: {
    fetchPokemons() {
      provideApolloClient(apolloClient)
      if (this.loading) return
      this.loading = true
      const variables = ref({
        type: ["type"],
        offset: this.offset,
        limit: this.limit,
      })
      const { result, loading, error } = useQuery(GET_POKEMONS_QUERY, variables)
      watch(
        () => loading.value,
        (newLoading) => {
          this.loading = newLoading
        }
      )

      watch(
        () => error.value,
        (newError) => {
          if (error.value) {
            this.error = newError
            return
          }
        }
      )
      watch(
        () => result.value,
        (newValue) => {
          if (newValue && newValue.pokemons) {
            const pokemonsWithImages = newValue.pokemons.map((pokemon: Pokemon) => ({
              ...pokemon,
              imageUrl: getPokemonImageUrl(pokemon.id),
            }))

            this.pokemons = [...this.pokemons, ...pokemonsWithImages]
            this.offset += this.limit
            this.loading = false
          }
        }
      )
    },
  },
})
