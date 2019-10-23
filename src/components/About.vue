<template lang="html">
  <b-container
    fluid
    class="light-zone"
  >
    <b-row>
      <b-col
        lg="7"
        order-xs="2"
        class="padding-title"
      >
        <h1>About Me</h1>
        <p>Description Description  Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description Description</p>
      </b-col>
      <b-col
        lg="4"
        order-xs="1"
        class="padding-title"
      >
        <b-img
          fluid-grow
          src="https://raw.githubusercontent.com/miguelangelchgz/portafolio/master/images/coding.jpg"
        />
      </b-col>
    </b-row>
  </b-container>
</template>

<script>
export default {
  name: 'AboutMe'
}
</script>

<style lang="scss" scoped>
@import "../assets/custom-bootstrap.scss";
@import "../../node_modules/bootstrap/scss/bootstrap.scss";
.light-zone {
    background-color: $white;
    color: $black;
}
.padding-title {
    padding: 105px;


}
// Extra small devices (portrait phones, less than 576px) Nexus 4, Pixel 2
@include media-breakpoint-only(xs) {
    .padding-title {
        padding: 25px;
    }
}
</style>
