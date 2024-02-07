<template>
  <v-btn class="button-favorites" color="primary" @click="toggleFavorite(name)">
    {{ isFavorite(name) ? "Remove from Favorites" : "Add to Favorites" }}
  </v-btn>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import { useFavoritesStore } from "@/stores/favorites"

export default defineComponent({
  props: {
    name: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup() {
    const favoritesStore = useFavoritesStore()

    const toggleFavorite = (name: string) => {
      if (favoritesStore.isFavorite(name)) {
        favoritesStore.removeFavorite(name)
      } else {
        favoritesStore.addFavorite(name)
      }
    }

    const isFavorite = (name: string) => {
      return favoritesStore.isFavorite(name)
    }

    return { toggleFavorite, isFavorite }
  },
})
</script>

<style scoped lang="scss">
.button-favorites {
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
