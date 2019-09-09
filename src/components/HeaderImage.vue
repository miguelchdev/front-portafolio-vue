<template>
  <div :style="style" class="img-header"></div>
</template>

<script>
export default {
  name: "header-imagse",
  
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.img-header {
  position: absolute;
  filter: grayscale(100%) contrast(110%);
  right: 0;
  background: black;
  background: url("https://images.pexels.com/photos/1092671/pexels-photo-1092671.jpeg?dl&fit=crop&crop=entropy&w=1920&h=1280") no-repeat;
  background-size: cover;
  height: 100%;
  width: 45%;
}
</style>
