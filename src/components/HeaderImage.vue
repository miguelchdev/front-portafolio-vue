<template>
    <v-container
        fluid
        class="px-0 py-0 h-100"
    >
        <v-row
            no-gutters
            justify="end"
            class="h-100 layer-0"
        >
            <v-col
                xl="6"
                lg="6"
                md="6"
                :style="style"
                class="img-header  dos hidden-sm-and-down"
            >

            </v-col>

        </v-row>
        <div class="layer-1 h-100 d-flex align-center">

            <slot></slot>
        </div>
    </v-container>

</template>

<script>
export default {
    name: "header-imagse"
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.img-header {
    // filter: grayscale(100%) contrast(110%);
    right: 0;
    background: black;
    background: url("../assets/4k-wallpaper-afterglow-bird-s-eye-view-2093323.jpg")
        no-repeat;
    background-size: cover;
    height: 100%;
    width: 100%;
    background-repeat: no-repeat;
}
.h-100 {
    height: 100vh;
}
.layer-0 {
    z-index: 0;
}
.layer-1 {
    z-index: 1;
    position: absolute;
    top: 0;
    width: 100%;
}
</style>
