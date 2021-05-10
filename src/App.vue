<template>
  <div id="app">
    <div class="header img-nav">
      <h1>HOLA, SOY ERNESTO DÍAZ,</h1>
      <h2>Y SOY DEVELOPER Y PROTOTYPE.</h2>
      <img class="foto" alt="Vue logo" src="./assets/ernesto.png" />
    </div>
    <div class="tab">
      <router-link class="tab-buttom" to="/">INFORMACIÓN</router-link>
      <router-link class="tab-buttom" to="/skils">SKILS</router-link>
      <router-link class="tab-buttom" to="/proyectos">PROYECTOS</router-link>
      <router-link class="tab-buttom" to="/hobby">HOBBIES</router-link>
      <router-link class="tab-buttom" to="/contacto">CONTACTO</router-link>
    </div>
    <router-view></router-view>
  </div>
</template>

<script>
export default {
  name: "App",
  components: {},
};
</script>

<style>
html {
}
body {
  margin: 0;
  width: 100%;
  height: 100%;
  font-family: "Open Sans", sans-serif;
  background: rgb(80, 89, 156);
  background: linear-gradient(
    297deg,
    rgba(80, 89, 156, 1) 0%,
    rgba(14, 15, 69, 1) 100%
  );
  background-image: rgb(0, 0, 0);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app > .header {
  background-color: rgba(0, 0, 0, 0.486);
  margin: auto;
  padding-top: 100px;
  padding-bottom: 200px;
  margin-bottom: 160px;
  position: relative;
}

#app > .header > .foto {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  bottom: -196px;
  transform: translate(-50%, -50%);
  border: 3px solid #000000;
}

.img-nav:after {
  content: "";
  background-image: url("./assets/2.jpg");
  background-size: cover;
  background-position: center;
  opacity: 0.5;
  top: 0;
  left: 0;
  bottom: 0;
  right: 0;
  position: absolute;
  z-index: -1;
}

#app > .header > h1 {
  position: absolute;
  top: 10%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#app > .header > h2 {
  position: absolute;
  top: 25%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.tab {
  padding: 10px;
  width: 1499px;
  margin: auto;
  background-color: #000000;
  
  position: absolute;
  bottom: 384px;
  box-shadow: 0 8px 16px 0 rgb(255, 255, 255), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
}

.tab-buttom {
  margin: 60px;
  background-color: #000000;
  color: white;
  text-decoration: none;
  border-radius: 10%;
}

h1,
h2 {
  color: white;
}

p {
  color: white;
}
.div-boss {
  display: flex;
  justify-content: center;
}
.contenedorsecundario {
  width: 500px;
  height: 245px;
  margin: 40px;

  color: white;
  border: 2px solid #000000;
  box-shadow: 10px 10px black;
  background-color: rgba(0, 0, 0, 0.3);
}
.contenedor-secundario {
  width: 600px;
  height: 300px;
  margin: 40px;
  color: white;
  border: 2px solid #000000;
  box-shadow: 10px 10px black;
  background-color: rgba(0, 0, 0, 0.3);
}
.text {
  padding: 15px;
  margin: 10px;
}

p {
  display: block;
  margin-block-start: 1em;
  margin-block-end: 1em;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.contenedor {
  width: 500px;
  height: 245px;
  margin: 40px;
  border: 2px solid #000000;
  box-shadow: 10px 10px black;
}
.imginfo {
  width: 500px;
  height: 245px;
  margin: 0;
}

/**iconos */
.icons {
  width: 30px;
  height: 30px;
}

.contactos {
  display: flex;
  flex-direction: row;
  height: 55px;
}
h3 {
  margin: 0;
}

</style>
