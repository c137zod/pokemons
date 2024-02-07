<template>
  <v-sheet class="search-container mx-auto" v-show="!isPokemonRoute">
    <v-text-field
      v-model="searchQuery"
      dense
      clearable
      label="Enter pokemon name"
      variant="underlined"
      append-icon="mdi-magnify"
      @click:append="onSearch"
      @keyup.enter="onSearch"
      class="search-input"
    ></v-text-field>
  </v-sheet>
</template>

<script lang="ts">
import { ref, computed } from "vue"
import { useRouter, useRoute } from "vue-router"

export default {
  setup() {
    const router = useRouter()
    const route = useRoute()
    const searchQuery = ref("")

    const isPokemonRoute = computed(() => {
      return route.path.startsWith("/pokemon/")
    })

    const onSearch = () => {
      if (searchQuery.value) {
        router.push(`/pokemon/${searchQuery.value}`)
        searchQuery.value = ""
      }
    }

    return { searchQuery, onSearch, isPokemonRoute }
  },
}
</script>

<style scoped lang="scss">
.search-container {
  height: 100%;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
}

.search-input {
  flex-grow: 1;
  flex-shrink: 1;
}
</style>
