<template>
  <div id="app">
    <div class="container">
      <h1>Kumpi asia on parempi?</h1>
      <ButtonContainer />
      <p class="standings"><a href="https://airtable.com/shrGkje9DPdJukNt9">Tilanne</a></p>
    </div>
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
}
.container {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 80vh;
  flex-direction: column;
}
.standings {
  position: fixed;     
  text-align: center;    
  bottom: 0px; 
  width: 100%;
}
</style>
