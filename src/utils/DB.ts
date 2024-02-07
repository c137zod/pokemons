import { Pokemon } from "@/hooks/usePokemon"

export async function loadFromIndexedDB(name: string) {
  return new Promise((resolve, reject) => {
    const open = indexedDB.open("PokemonDatabase", 1)

    open.onupgradeneeded = function () {
      const db = open.result
      db.createObjectStore("PokemonStore", { keyPath: "name" })
    }

    open.onsuccess = function () {
      const db = open.result
      const tx = db.transaction("PokemonStore", "readonly")
      const store = tx.objectStore("PokemonStore")
      const request = store.get(name)

      request.onsuccess = function () {
        resolve(request.result)
      }

      request.onerror = function () {
        reject(request.error)
      }
    }

    open.onerror = function () {
      reject(open.error)
    }
  })
}

export async function saveToIndexedDB(pokemonData: Pokemon): Promise<void> {
  const clone = {
    name: pokemonData.name,
    id: pokemonData.id,
    hp: pokemonData.hp,
    attack: pokemonData.attack,
    defense: pokemonData.defense,
    specialAttack: pokemonData.specialAttack,
    specialDefense: pokemonData.specialDefense,
    speed: pokemonData.speed,
    imageUrl: pokemonData.imageUrl,
    type: pokemonData.type,
  }

  const open = indexedDB.open("PokemonDatabase", 1)

  open.onsuccess = function () {
    const db = open.result
    const tx = db.transaction("PokemonStore", "readwrite")
    const store = tx.objectStore("PokemonStore")
    store.put(clone)
  }
}
