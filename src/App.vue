<template>
<div id="app">
  <header class="dark-zone">
    <b-container fluid>
      <b-row class="align-items-center">
        <b-col lg="7" md="12">
          <b-row>
            <b-col col md="5">
              <b-button size="lg" variant="primary" block>
                Home
              </b-button>
            </b-col>
            <b-col md="5">
              <b-button size="lg" variant="outline-light" block>
                About
              </b-button>
            </b-col>
          </b-row>
        </b-col>
        <b-col lg="5" md="12">
          <p>prueba</p>
        </b-col>
      </b-row>
    </b-container>
  </header>
</div>
</template>

<script>
import HeaderImage from "./components/HeaderImage.vue";

export default {
  name: "app",
  components: {
    HeaderImage
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
header {
    height: 100%;
}
.dark-zone {
    background-color: $black;
    color: $white;
}
// Extra small devices (portrait phones, less than 576px)
@media (max-width: 575.98px) {
    header {
        height: 40%;
    }
}
// Medium devices (tablets, 768px and up) IPAD Kindle etc
@media (min-width: 768px) and (max-width: 991.98px) {
    header {
        height: 40%;
    }
}
</style>
