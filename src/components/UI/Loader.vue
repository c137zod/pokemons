<template>
  <div v-show="loading" class="loader"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue"

export default defineComponent({
  props: {
    loading: Boolean,
  },
})
</script>

<style scoped lang="scss">
.loader {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #7b2ff7 50%, #4a44f2 50%);
  background-size: 200% 100%;
  animation: move 2s linear infinite;
  z-index: 9999;
}

@keyframes move {
  0% {
    background-position: 100% 0;
  }
  100% {
    background-position: 0 0;
  }
}
</style>
