<template>
  <div id="app">
    <div class="header img-nav">
      <h1 class="titulo">ERNESTO DÍAZ</h1>
      <h2 class="titulo">PROTOTYPER & FRONTEND DEVELOPER</h2>

      <img class="foto" alt="Vue logo" src="./assets/ernesto.png" />
    </div>
    <h2>PERFIL PROFESIONAL</h2>
    <p>
      Titulado de Técnico Analista en Programación, con un año de experiencia en
      proyectos freelance y académicos. Usando las tegnologias de HTML5,
      CSS3(BOOSTRAP4), javaSCript, PHP, VUE.JS, GIT, JAVA, MVC & CRUD.
    </p>

    <div class="tab">
      <router-link class="rutas boton-uno" to="/skils">SKILLS</router-link>
      <router-link class="rutas boton-dos" to="/proyectos"
        >PROYECTOS</router-link
      >
      <router-link class="rutas boton-tres" to="/hobby">HOBBIES</router-link>
    </div>

    <router-view></router-view>

    <footer class="footer">
      <div class="caja-footer">
        <div class="caja">
          <h4>CONTACTO</h4>
          <ul>
            <li>Gmail: Ernesto.adp1@gmail.com</li>
            <li><a href="https://wa.me/56936618654">WhatsApp</a></li>
            <li>
              <a
                href="https://drive.google.com/file/d/1chKEQPv0iXCmmspfI2BxC6o-LP8DJW_d/view?usp=sharing"
                >Curriculum Vitae</a
              >
            </li>
          </ul>
        </div>
        <div class="caja">
          <h4>ENLACES UTILES</h4>

          <a
            class="enlaces"
            href="https://www.facebook.com/ernestoandres.diazplaza"
            ><i class="bi bi-facebook"></i>
          </a>

          <a
            class="enlaces"
            href="https://www.instagram.com/ernesthordiaz/?hl=es-la"
            ><i class="bi bi-instagram"></i
          ></a>

          <a
            class="enlaces"
            href="https://www.linkedin.com/in/ernesto-andres-diaz-plaza-b824351a6/"
            ><i class="bi bi-linkedin"></i
          ></a>

          <a class="enlaces" href="https://github.com/ErnestoADP"
            ><i class="bi bi-github"></i
          ></a>

          <a class="enlaces" href="https://wa.me/56936618654"
            ><i class="bi bi-whatsapp"></i
          ></a>
        </div>
        <div class="caja">
          <div class="logo">
            <img class="img-logo" src="./assets/logo.png" alt="" />
            <span>Portafolio desarrolado en Vue.Js</span>
          </div>
        </div>
      </div>
    </footer>
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
  background-color: lightgrey;
  font-family: sans-serif;
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
  opacity: 0.9;
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

/** ---------------------------------------bototones de skill/proyecto/hobbie ----------------------------------*/
.boton-uno,
.boton-tres {
  width: 9%;
}

.rutas:link,
.rutas:visited {
  margin: 3px;
  background-color: #31313100;
  color: rgb(0, 0, 0);
  padding: 14px 25px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  margin-top: 40px;
  margin-bottom: 20px;
  border: 1px solid rgb(0, 0, 0);
  border-radius: 4px;
}

.rutas:hover,
.rutas:active {
  background-color: rgb(0, 0, 0);
  color: white;
}

/**------------------------------------------------------fin------------------------------------------------------------------------- */

p {
  font-family: "Roboto", sans-serif;
  width: 60%;
  margin: auto;
  font-weight: 100;
  color: #000000;
  /**  animate__bounceInRight*/
}
/**----------------------------barras de skills---------------------------------------------------- */
.boss {
  background-image: url("./assets/8.jpg");
  width: 100%;
  background-size: cover;
}
.contenedor-padre {
  display: flex;
  flex-direction: row;
  width: 100%;
  height: 100%;
  padding: 20px;
  padding-bottom: 100px;
}

.w3-caja {
  padding-top: 20px;
}

.w3-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.w3-light-grey {
  background-color: #ffffff9f !important;
  width: 80%;
  border: 3px solid rgb(0, 0, 0);
  border-radius: 4px;
}

.w3-green {
  background-color: #000000fd !important;
}

.skills {
  color: white;
}
.p-skills {
  color: white;
  font-weight: bolder;
}
.p-skills-dos {
  color: rgb(0, 0, 0);
  font-weight: bolder;
}
/**-------------------------------------------------------fin----------------------------------- */

/**--------------------------------------------------footer----------------------------------------------------- */
.footer {
  background-color: #0000002e;
}
.caja-footer {
  display: flex;
  flex-direction: row;
  margin-top: 100px;
}
.caja {
  width: 100%;
  height: 100%;
  margin-bottom: 40px;
  margin-top: 50px;
}
.caja > ul {
  list-style-type: none;
  margin: 0;
  padding: 0;
}

.enlaces {
  padding: 7px;
}

.logo {
  display: flex;
  align-items: center;
  flex-direction: column;
  margin: auto;
}

.img-logo {
  width: 20%;
}

/**----------------------------------------------fin-footer----------------------------------------------------- */
.container-dos {
  margin: auto;

  display: flex;
  flex-direction: column;

  align-items: center;
  padding: 40px;
}

ul,
li {
  padding: 0;
  margin: 0;
  list-style: none;
}

ul.slider {
  position: relative;
  width: 800px;
  height: 300px;
}

ul.slider li {
  position: absolute;
  left: 0px;
  top: 0px;
  opacity: 0;
  width: inherit;
  height: inherit;
  transition: opacity 0.5s;
  background: #fff;
}

ul.slider li img {
  display: block;
  margin: auto;
  width: 100%;
  height: 122%;
  object-fit: cover;
}

ul.slider li:first-child {
  opacity: 1; /*Mostramos el primer <li>*/
}

ul.slider li:target {
  opacity: 1; /*Mostramos el <li> del enlace que pulsemos*/
}

.menu {
  text-align: center;
  margin: 70px;
}

.menu li {
  display: inline-block;
  text-align: center;
}

.menu li a {
  display: inline-block;
  color: white;
  text-decoration: none;
  background-color: grey;

  width: 20px;
  height: 20px;

  border-radius: 100%;
}

.div-boss {
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.contenedor {
  width: 500px;
  height: 245px;
  margin: auto;

  box-shadow: 10px 10px;
}

.text {
  padding: 15px;
}
.imginfo {
  width: 500px;
  height: 245px;
}
</style>
