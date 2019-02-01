<template>
<div id="app">
  <header class="dark-zone">
    <b-container fluid class="h-100">
      <b-row class="align-items-center h-100">
        <b-col lg="7" md="5">
          <b-row align-v="end">
            <b-col col cols="6" lg="5">
              <b-button size="lg" variant="primary" block>
                Home
              </b-button>
            </b-col>
            <b-col col cols="6" lg="5">
              <b-button size="lg" variant="outline-light" block>
                About
              </b-button>
            </b-col>
          </b-row>
        </b-col>
        <b-col lg="5" md="5" class="d-none d-md-block d-lg-block h-100 px-0">
          <HeaderImage imgUrl="https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?dl&fit=crop&crop=entropy&w=1920&h=1280"></HeaderImage>
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
@include media-breakpoint-down(xs) {
    header {
        height: 40%;
    }
}
// Medium devices (tablets, 768px and up) IPAD Kindle etc
@include media-breakpoint-down(md) {
    header {
        height: 40%;
    }
}
</style>
