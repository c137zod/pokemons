<template>
  <v-col cols="12" sm="6" md="4" lg="3">
    <v-card>
      <v-img :src="pokemon.imageUrl" height="200"></v-img>
      <v-card-title class="headline">{{ pokemon.name }}</v-card-title>
    </v-card>
    <div class="button-wrapper">
      <ButtonFavourites v-if="pokemon" :name="pokemon.name" />
      <v-btn class="button-view" color="info" @click="viewPokemonInfo(pokemon.name)">View info</v-btn>
    </div>
  </v-col>
</template>

<script lang="ts">
import ButtonFavourites from "@/components/UI/ButtonFavourites.vue"

export default {
  components: {
    ButtonFavourites,
  },
  props: {
    pokemon: {
      type: Object,
      required: true,
    },
  },
  methods: {
    viewPokemonInfo(name: string) {
      this.$router.push({ name: "Detail", params: { name } })
    },
  },
}
</script>

<style scoped lang="scss">
.headline {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
}
.button-wrapper {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
}
.button-view {
  width: 100%;
  margin-top: 10px;
  margin-bottom: 10px;
}
</style>
