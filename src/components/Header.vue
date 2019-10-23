<template>
  <header class="dark-zone">
    <b-container
      fluid
      class="h-100"
    >
      <b-row
        align-v="center"
        class="h-100"
      >
        <b-col
          lg="7"
          md="7"
          class="padding-title"
        >
          <b-row align-v="end">
            <b-col
              col
              cols="6"
              md="5"
              lg="5"
            >
              <h1>Prueba</h1>
              <b-button
                size="lg"
                variant="primary"
                block
              >
                Home
              </b-button>
            </b-col>
            <b-col
              col
              cols="6"
              md="5"
              lg="5"
            >
              <b-button
                size="lg"
                variant="outline-light"
                block
              >
                About
              </b-button>
            </b-col>
          </b-row>
        </b-col>
        <b-col
          lg="5"
          md="5"
          class="d-none d-md-block d-lg-block h-100 px-0"
        >
          <HeaderImage
            img-url="https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?dl&fit=crop&crop=entropy&w=1920&h=1280"
          />
        </b-col>
      </b-row>
    </b-container>
  </header>
</template>

<script>
import HeaderImage from "./HeaderImage.vue";

export default {
  name: "HeaderPort",
  components: {
    HeaderImage
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "../assets/custom-bootstrap.scss";
@import "../../node_modules/bootstrap/scss/bootstrap.scss";
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
.padding-title {
  padding-left: 105px;
}

// Extra small devices (portrait phones, less than 576px) Nexus 4, Pixel 2
@include media-breakpoint-only(xs) {
  header {
    height: 40%;
  }
  .padding-title {
    padding: 25px;
  }
}
// Medium devices (tablets, 768px and up) IPAD Kindle etc
@include media-breakpoint-only(md) {
  header {
    height: 40%;
  }
  .padding-title {
    padding-left: 40px;
  }
}
</style>
