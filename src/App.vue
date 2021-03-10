<template>
  <div id="app">
    <main-page/>
  </div>
</template>

<script>
import MainPage from './components/MainPage.vue'

export default {
  name: 'App',

  components: {
    MainPage
  }
}
</script>

<style>
body {
  margin: 0;
  padding: 0;
}
#app {
  width: 100%;
  height: 100%;
  position: relative;
}
</style>
