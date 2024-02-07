import { defineStore } from "pinia"

export const useFavoritesStore = defineStore("favorites", {
  state: (): { favoriteNames: string[] } => ({
    favoriteNames: [],
  }),
  actions: {
    addFavorite(pokemonName: string) {
      if (!this.favoriteNames.includes(pokemonName)) {
        this.favoriteNames.push(pokemonName)
      }
    },
    removeFavorite(pokemonName: string) {
      this.favoriteNames = this.favoriteNames.filter((name) => name !== pokemonName)
    },
    isFavorite(pokemonName: string): boolean {
      return this.favoriteNames.includes(pokemonName)
    },
  },
})
