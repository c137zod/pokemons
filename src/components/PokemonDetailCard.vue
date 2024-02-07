<template>
  <v-col cols="12" sm="6" md="4" lg="3">
    <Loader :loading="loading" />
    <v-card v-if="pokemon" class="pokemon-card">
      <div class="pokemon-type-circle" :style="{ backgroundColor: PokemonTypeColors[pokemon.type as keyof typeof PokemonTypeColors] }"></div>
      <v-img :src="pokemon.imageUrl" class="pokemon-image" height="200"></v-img>
      <div class="pokemon-hp">HP: {{ pokemon.hp }}</div>
      <v-card-title class="headline">{{ capitalize(pokemon.name) }}</v-card-title>
      <div class="pokemon-type-container">
        <div class="pokemon-type" :style="{ backgroundColor: PokemonTypeColors[pokemon.type as keyof typeof PokemonTypeColors] }">{{ pokemon.type }}</div>
      </div>
      <v-row>
        <v-col cols="4">
          <div class="pokemon-stat">{{ pokemon.attack }}</div>
          <div class="pokemon-stat-name">Attack</div>
        </v-col>
        <v-col cols="4">
          <div class="pokemon-stat">{{ pokemon.defense }}</div>
          <div class="pokemon-stat-name">Defense</div>
        </v-col>
        <v-col cols="4">
          <div class="pokemon-stat">{{ pokemon.speed }}</div>
          <div class="pokemon-stat-name">Speed</div>
        </v-col>
      </v-row>
    </v-card>
    <div class="button-wrapper">
      <ButtonFavourites v-if="pokemon" :name="pokemon.name" />
    </div>
    <Empty v-if="!pokemon && !loading" />
  </v-col>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue"
import Loader from "@/components/UI/Loader.vue"
import Empty from "@/components/UI/Empty.vue"
import { usePokemon } from "@/hooks/usePokemon"
import ButtonFavourites from "@/components/UI/ButtonFavourites.vue"
import { capitalize, PokemonTypeColors } from "@/utils/"

export default defineComponent({
  components: {
    Loader,
    Empty,
    ButtonFavourites,
  },
  props: {
    name: {
      type: String as PropType<string>,
      required: true,
    },
  },
  setup(props) {
    const { pokemon, loading, error } = usePokemon(props.name)

    return { pokemon, loading, error, capitalize, PokemonTypeColors }
  },
})
</script>

<style scoped lang="scss">
.pokemon-card {
  position: relative;
  text-align: center;
  padding-bottom: 20px;
}
.headline {
  text-align: center;
  font-size: 24px;
  font-weight: bold;
}
.pokemon-type-circle {
  width: 200px;
  height: 100px;
  border-radius: 100px 100px 0 0;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%) rotateX(180deg);
}

.pokemon-image {
  position: relative;
  z-index: 1;
}

.pokemon-hp {
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: white;
  border-radius: 4px;
  padding: 5px;
}

.pokemon-type-container {
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
}
.pokemon-type {
  color: white;
  font-weight: bold;
  border-radius: 4px;
  text-align: center;
  padding: 5px 10px;
  display: inline-block;
}

.pokemon-stat {
  text-align: center;
}

.stat-value {
  font-size: 20px;
  font-weight: bold;
}

.stat-name {
  font-size: 14px;
}
.pokemon-stat {
  text-align: center;
  font-weight: bold;
}

.pokemon-stat-name {
  text-align: center;
  color: #666;
}
.button-wrapper {
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
}
</style>
