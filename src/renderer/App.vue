<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>
<script setup lang="ts">
</script>
<style>
html,
body,
#app {
  height: 100%;
  box-sizing: border-box;
  background-color: rgb(239, 239, 245);
}
#app {
  display: flex;
  flex-direction: column;
}
</style>
