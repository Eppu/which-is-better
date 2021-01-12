<template>
  <div id="app">
    <h1>Kumpi asia on parempi?</h1>
    <ButtonContainer />
  </div>
</template>

<script>
import ButtonContainer from './components/ButtonContainer.vue'

export default {
  name: 'App',
  components: {
    ButtonContainer
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
