<template>
  <v-container fill-height>
    <v-layout align-center justify-center column>
      <v-icon size="64">mdi-alert-outline</v-icon>
      <span class="title">No data</span>
    </v-layout>
  </v-container>
</template>

<script lang="ts">
export default {
  name: "Empty",
}
</script>

<style scoped>
.title {
  margin-top: 20px;
  font-size: 20px;
  font-weight: bold;
}

.subtitle-1 {
  margin-top: 10px;
  color: grey;
}
</style>
