<template>
  <div id="app">
    <div id="parte1" class="dark-zone">
      <header-image
      />
       <header-image
      />
      <div class="prueba">
        <b-container>
          <h1>sdfklsjdfljsdflsjdflsdjflsdjfslfjsdlkfjsdlf</h1>
        </b-container>
      </div>
    </div>
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
#parte1 {
  height: 100%;
}
.prueba {
  position: absolute;
  height: 100%;
  width: 100%;
}
.dark-zone {
  background-color: $white;
  color:$black ;
}


// Extra small devices (portrait phones, less than 576px)
@include media-breakpoint-only(xs) {
 
}
// Medium devices (tablets, 768px and up) IPAD Kindle etc
@include media-breakpoint-only(md) {
 
}
</style>
