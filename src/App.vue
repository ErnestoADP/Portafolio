<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/ernesto.png">
    <h1>Ernesto Díaz</h1>
    <h2>Developer</h2>

    <router-link to="/">Informacion</router-link>
    <router-link to="/skils">Skils</router-link>
    <router-link to="/proyectos">Proyectos</router-link>
    <router-link to="/hobby">Hobby</router-link>
    <router-link to="/contacto">Contacto</router-link>
    <hr>
    <router-view></router-view>
  
  </div>
</template>

<script>


export default {
  name: 'App',
  components: {
   
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
#app > img{
  width: 15%;
   position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;

}
</style>
