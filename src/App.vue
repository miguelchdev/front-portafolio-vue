<template>
  <div id="app">

    <HeaderPort></HeaderPort>

  </div>
</template>

<script>
import HeaderPort from "./components/Header.vue";

export default {
  name: "app",
  components: {
    HeaderPort,
  }
};
</script>

<style lang="scss">
@import "./assets/custom-bootstrap.scss";
@import "../node_modules/bootstrap/scss/bootstrap.scss";
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  height: 100%;
}

body,
html {
    height: 100%;
    width: 100%;
    background-color: $primary;
}

</style>
