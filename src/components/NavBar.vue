<template>
  <v-app-bar app>
    <div class="navbar">
      <Search />
      <div class="navbar-buttons">
        <v-btn color="primary" class="navbar-button-view" @click="$router.push('/')">Pokemons</v-btn>
        <v-btn color="primary" class="navbar-button-favorites" @click="$router.push('/favorites')">Favorites</v-btn>
      </div>
    </div>
  </v-app-bar>
</template>

<script lang="ts">
import Search from "@/components/Search.vue"
export default {
  name: "NavBar",
  components: {
    Search,
  },
}
</script>

<style scoped lang="scss">
.navbar {
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding-left: 10px;
  padding-right: 10px;
}

.navbar-buttons {
  margin-left: auto;
  display: flex;
}

@media (max-width: 600px) {
  .navbar-buttons {
    display: block;
  }
  .navbar-button-view,
  .navbar-button-favorites {
    font-size: 10px;
    width: 100%;
  }
}
</style>
