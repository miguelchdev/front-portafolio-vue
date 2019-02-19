<template>
<div :style="style" class="img-header">

</div>
</template>

<script>

export default {
  name: 'HeaderImage',
  props: {
    imgUrl: String
  },
  computed: {
    style() {
      return 'background: url(' + this.imgUrl + ') no-repeat center center; background-size: cover; height: 100%;  width: 100%;';
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

</style>
