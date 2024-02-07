<template>
  <v-container>
    <Loader :loading="store.loading" />
    <h1>Pokemons</h1>
    <div v-if="store.error">Error: {{ store.error.message }}</div>
    <div v-else>
      <v-row justify="center" class="mb-4">
        <PokemonCard v-for="pokemon in store.pokemons" :key="pokemon.id" :pokemon="pokemon" />
      </v-row>
    </div>
    <div v-intersection="store.fetchPokemons" class="observer"></div>
  </v-container>
</template>

<script lang="ts">
import { usePokemonStore } from "@/stores/pokemones"
import { useScrollPosition } from "@/hooks/useScrollPosition"
import Loader from "@/components/UI/Loader.vue"
import PokemonCard from "@/components/PokemonCard.vue"

export default {
  components: {
    Loader,
    PokemonCard,
  },
  setup() {
    useScrollPosition()
    const store = usePokemonStore()
    return { store }
  },
}
</script>

<style scoped lang="scss">
.observer {
  height: 1px;
}
</style>
