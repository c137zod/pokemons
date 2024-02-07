<template>
  <v-container class="d-flex justify-center align-center h-100">
    <PokemonDetailCard :name="pokemonName" />
  </v-container>
</template>

<script lang="ts">
import { useRoute } from "vue-router"
import { computed } from "vue"
import PokemonDetailCard from "@/components/PokemonDetailCard.vue"

export default {
  components: {
    PokemonDetailCard,
  },
  setup() {
    const route = useRoute()
    const pokemonName = computed(() => {
      const routeName = route.params.name
      return Array.isArray(routeName) ? routeName[0] : routeName
    })
    return { pokemonName }
  },
}
</script>

<style scoped lang="scss">
.v-container.d-flex {
  display: flex;
}

.v-container.justify-center {
  justify-content: center;
}

.v-container.align-center {
  align-items: center;
}

.v-container.h-100 {
  height: 100vh;
}
</style>
