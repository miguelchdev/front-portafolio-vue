<template>
  <div id="app">
    <HeaderPort></HeaderPort>
    <main role="main">
      <AboutMe></AboutMe>
    </main>

  </div>
</template>

<script>
import HeaderPort from "./components/Header.vue";
import AboutMe from "./components/About.vue"

export default {
  name: "app",
  components: {
    HeaderPort,AboutMe
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
