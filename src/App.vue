<template>
  <div id="app">
    <div class="header">
      <img alt="Vue logo" src="./assets/ernesto.png" />
      <h1>Ernesto Díaz</h1>
      <h2>Developer</h2>
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
  background: #092756;
  background: -moz-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -moz-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4)
          100%),
    -moz-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -webkit-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -webkit-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(
            42,
            60,
            87,
            0.4
          )
          100%),
    -webkit-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -o-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -o-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4)
          100%),
    -o-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -ms-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    -ms-linear-gradient(top, rgba(57, 173, 219, 0.25) 0%, rgba(42, 60, 87, 0.4)
          100%),
    -ms-linear-gradient(-45deg, #670d10 0%, #092756 100%);
  background: -webkit-radial-gradient(
      0% 100%,
      ellipse cover,
      rgba(104, 128, 138, 0.4) 10%,
      rgba(138, 114, 76, 0) 40%
    ),
    linear-gradient(
      to bottom,
      rgba(57, 173, 219, 0.25) 0%,
      rgba(42, 60, 87, 0.4) 100%
    ),
    linear-gradient(135deg, #670d10 0%, #092756 100%);
  filter: progid: DXImageTransform.Microsoft.gradient(startColorstr='#3E1D6D', endColorstr='#092756', GradientType=1);
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app > .header {
  background-color: rgba(0, 0, 0, 0.3);

  margin: auto;
  padding-top: 40px;
  padding-bottom: 10px;
  margin-bottom: 5px;
}

#app > .header > img {
  width: 15%;
  position: relative;
  width: 200px;
  height: 200px;
  overflow: hidden;
  border-radius: 50%;

  border: 3px solid #4a77d4;
}

.tab {
  padding: 10px;
  width: 75%;
  margin: auto;
  background-color: #4a77d4;
  border-radius: 10px;
}

.tab-buttom {
  margin: 60px;
  background-color: #4a77d4;
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
  border: 2px solid #4a77d4;
  box-shadow: 10px 10px black;
  background-color: rgba(0, 0, 0, 0.3);
}
.contenedor-secundario {
  width: 500px;
  height: 245px;
  margin: auto;
  color: white;
  border: 2px solid #4a77d4;
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
  border: 2px solid #4a77d4;
  box-shadow: 10px 10px black;
}
.imginfo {
  width: 500px;
  height: 245px;
  margin: 0;
}
</style>
