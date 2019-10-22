<template>
    <v-container
        fluid
        class="px-0 py-0 fill-height"
    >
        <v-row
            no-gutters
            justify="end"
            class="h-100vh layer-0"
        >
            <v-col
                xl="4"
                lg="4"
                md="5"
                class="hidden-sm-and-down"
                :style="styleObject"
            >

            </v-col>

        </v-row>
        <div class="layer-1 h-100vh">

            <slot></slot>
        </div>
    </v-container>

</template>

<script>
export default {
    name: "header-image",
    props: {
        image_url: {
            type: String,
            required: true,
            default: ""
        }
    },
    computed: {
        styleObject() {
            return {
                height: "100%",
                width: "100%",
                backgroundRepeat: "no-repeat",
                background: "url(" + this.image_url + ")",
                backgroundSize: "cover",
            };
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.layer-0 {
    z-index: 0;
}
.layer-1 {
    z-index: 1;
    position: absolute;
    top: 0;
    width: 100%;
}
.h-100vh {
  height: 100vh;
}
</style>
