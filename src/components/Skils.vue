<template>
  <div class="boss">
    <h2 class="skills">SKILLS</h2>
    <div class="contenedor-padre">
      <div class="w3-container">
        <p class="p-skills">CSS3</p>

        <div class="w3-light-grey">
          <div id="css" class="w3-green w3-center" style="width: 0%"></div>
        </div>

        <p class="p-skills">HTML5</p>
        <div class="w3-light-grey">
          <div id="html" class="w3-green w3-center" style="width: 0%"></div>
        </div>

        <p class="p-skills">BOOSTRAP4</p>
        <div class="w3-light-grey">
          <div id="boostrap" class="w3-green w3-center" style="width: 0%"></div>
        </div>

        <p class="p-skills">JAVASCRIPT</p>
        <div class="w3-light-grey">
          <div
            id="javaSCript"
            class="w3-green w3-center"
            style="width: 0%"
          ></div>
        </div>
        <p class="p-skills">VUE.JS</p>
        <div class="w3-light-grey">
          <div id="Vuejs" class="w3-green w3-center" style="width: 0%"></div>
        </div>
      </div>

      <div class="w3-container">
        <p class="p-skills">PHP</p>
        <div class="w3-light-grey">
          <div id="php" class="w3-green w3-center" style="width: 0%"></div>
        </div>

        <p class="p-skills">GIT</p>
        <div class="w3-light-grey">
          <div id="git" class="w3-green w3-center" style="width: 0%"></div>
        </div>

        <p class="p-skills">JAVA</p>
        <div class="w3-light-grey">
          <div id="java" class="w3-green w3-center" style="width: 0%"></div>
        </div>

        <p class="p-skills">MVC & CRUD</p>
        <div class="w3-light-grey">
          <div id="mvc" class="w3-green w3-center" style="width: 0%"></div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "Skils",
  components: {},

  mounted: function () {
    this.move();
    this.moveDos();
    this.moveTres();
    this.moveCuatro();
    this.moveCinco();
    this.moveSeis();
    this.moveSiete();
    this.moveOcho();
    this.moveNueve();
  },

  methods: {
    move() {
      var elem = document.getElementById("css");

      var width = 0;
      // ejecutar el metodo frame dentro periodo
      var id = setInterval(frame, 10);

      function frame() {
        if (width >= 60) {
          clearInterval(id);
        } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width * 1 + "%";
        }
      }
    },
    moveDos() {
      var elem = document.getElementById("html");

      var width = 0;
      // ejecutar el metodo frame dentro periodo
      var id = setInterval(frame, 10);

      function frame() {
        if (width >= 70) {
          clearInterval(id);
        } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width * 1 + "%";
        }
      }
    },
    moveTres() {
      var elem = document.getElementById("boostrap");

      var width = 0;
      // ejecutar el metodo frame dentro periodo
      var id = setInterval(frame, 10);

      function frame() {
        if (width >= 50) {
          clearInterval(id);
        } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width * 1 + "%";
        }
      }
    },
    moveCuatro() {
      var elem = document.getElementById("javaSCript");

      var width = 0;
      // ejecutar el metodo frame dentro periodo
      var id = setInterval(frame, 10);

      function frame() {
        if (width >= 35) {
          clearInterval(id);
        } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width * 1 + "%";
        }
      }
    },
    moveCinco() {
      var elem = document.getElementById("Vuejs");

      var width = 0;
      // ejecutar el metodo frame dentro periodo
      var id = setInterval(frame, 10);

      function frame() {
        if (width >= 35) {
          clearInterval(id);
        } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width * 1 + "%";
        }
      }
    },
    moveSeis() {
      var elem = document.getElementById("php");

      var width = 0;
      // ejecutar el metodo frame dentro periodo
      var id = setInterval(frame, 10);

      function frame() {
        if (width >= 30) {
          clearInterval(id);
        } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width * 1 + "%";
        }
      }
    },
    moveSiete() {
      var elem = document.getElementById("git");

      var width = 0;
      // ejecutar el metodo frame dentro periodo
      var id = setInterval(frame, 10);

      function frame() {
        if (width >= 35) {
          clearInterval(id);
        } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width * 1 + "%";
        }
      }
    },
    moveOcho() {
      var elem = document.getElementById("java");

      var width = 0;
      // ejecutar el metodo frame dentro periodo
      var id = setInterval(frame, 10);

      function frame() {
        if (width >= 40) {
          clearInterval(id);
        } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width * 1 + "%";
        }
      }
    },
    moveNueve() {
      var elem = document.getElementById("mvc");

      var width = 0;
      // ejecutar el metodo frame dentro periodo
      var id = setInterval(frame, 10);

      function frame() {
        if (width >= 45) {
          clearInterval(id);
        } else {
          width++;
          elem.style.width = width + "%";
          elem.innerHTML = width * 1 + "%";
        }
      }
    },
  },
};
</script>

<style lang="scss" scoped>
</style>
