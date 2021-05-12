<template>
  <div id="app">
    <div class="header img-nav">
      <h1 class="titulo">ERNESTO DÍAZ</h1>
      <h2 class="titulo">PROTOTYPER & FRONTEND DEVELOPER</h2>

      <img class="foto" alt="Vue logo" src="./assets/ernesto.png" />
    </div>
    <h2>PERFIL PROFESIONAL</h2>
    <p>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque
      felis mauris, tempus condimentum lacus ut, luctus ullamcorper justo. Donec
      vel rhoncus mauris. Proin vestibulum consequat felis vitae porta. Aenean
      est sapien, porttitor vestibulum felis eu, convallis euismod turpis. Nunc
      vitae tellus felis. Cras quis sodales dolor. Suspendisse vulputate vitae
      tellus felis. Cras quis sodales dolor. Suspendisse vulputate ultricies
      tortor, ac sollicitudin dolor commodo vitae. Nam sodales vestibulum
      feugiat. Nullam tincidunt eleifend imperdiet. Integer vulputate, turpis
      non blandit fermentum, diam lectus dignissim lorem, sit amet lacinia sem
      ligula quis ex. Praesent condimentum erat in nulla dictum, sit amet rutrum
      magna commodo. Etiam nec nisl sit amet nulla pellentesque mattis.
    </p>

    <div class="tab">
      
        <router-link class="boton-uno" to="/skils">SKILS</router-link>
        <router-link class="boton-dos" to="/proyectos">PROYECTOS</router-link>
        <router-link class="boton-tres" to="/hobby">HOBBIES</router-link>
               
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

body {
  margin: 0;
  width: 100%;
  height: 100%;

  background-color: rgb(211, 211, 211);
}

#app {
  font-family: "Roboto", sans-serif;

  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

#app > .header {
  background-color: rgba(0, 0, 0, 0.486);
  margin: auto;
  padding-top: 100px;
  padding-bottom: 300px;
  margin-bottom: 120px;
  position: relative;
}
.titulo {
  color: white;
}

#app > .header > .foto {
  width: 200px;
  height: 200px;
  border-radius: 50%;
  position: absolute;
  bottom: -196px;
  transform: translate(-50%, -50%);
  border: 5px solid #ffff;
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
  top: 30%;
  left: 50%;
  transform: translate(-50%, -50%);
}
#app > .header > h2 {
  font-weight: 100;
  font-size: 22px;
  position: absolute;
  top: 40%;
  left: 50%;
  transform: translate(-50%, -50%);
}

/** bototones de skill/proyecto/hobbie */
.boton-uno,.boton-tres{
  width: 7%;
}

a:link, a:visited {
  margin:3px;
  background-color: #31313100;
  color: rgb(0, 0, 0);
  padding: 14px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin-top: 40px;
  margin-bottom: 20px;
  border:1px solid rgb(0, 0, 0);
}

a:hover, a:active {
  background-color: rgb(0, 0, 0);
  color: white;
}




p {
  font-family: "Roboto", sans-serif;
  width: 60%;
  margin: auto;
  font-weight: 100;
  color: #000000;
}
</style>
