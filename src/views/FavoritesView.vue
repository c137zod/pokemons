<template>
  <div v-if="favoritesStore.favoriteNames.length > 0">
    <v-container>
      <v-row justify="center" class="mb-4">
        <PokemonDetailCard v-for="name in favoritesStore.favoriteNames" :key="name" :name="name" />
      </v-row>
    </v-container>
  </div>
  <v-container v-else class="d-flex justify-center align-center h-100">
    <v-col cols="12" sm="6" md="4" lg="3">
      <Empty />
    </v-col>
  </v-container>
</template>

<script lang="ts">
import { useFavoritesStore } from "@/stores/favorites"
import PokemonDetailCard from "@/components/PokemonDetailCard.vue"
import Empty from "@/components/UI/Empty.vue"

export default {
  components: { PokemonDetailCard, Empty },
  setup() {
    const favoritesStore = useFavoritesStore()
    return { favoritesStore }
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
