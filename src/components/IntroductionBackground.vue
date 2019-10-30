<template>
    <v-container
        fluid
        class="px-0 py-0 full-view"
    >
        <v-row
            no-gutters
            justify="end"
            class="parent-height layer-0"
        >
            <v-col
                xl="4"
                lg="4"
                md="4"
                sm="4"
                class="hide-only-xs"
                :style="styleObject"
            />
        </v-row>
        <div class="layer-1 parent-height">
            <slot></slot>
        </div>
    </v-container>
</template>

<script>
export default {
    name: "IntroductionBackground",
    props: {
        imageUrl: {
            type: String,
            required: true,
            default: ""
        }
    },
    computed: {
        styleObject() {
            return {
                height: "auto",
                width: "100%",
                backgroundRepeat: "no-repeat",
                background: "url(" + this.imageUrl + ")  15% 0%",
                backgroundSize: "cover"
            };
        }
    }
};
</script>


<style lang="scss">
/* global styles */
@import "@/assets/styles/base.scss";
</style>


<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/styles/responsive-breakpoints.scss";


// Telefonos moviles en landscape
@include respond-between(xs, md) {
    @media (orientation: landscape) {
        .layer-1 {
            top: 0;
            z-index: 1;
            position: absolute;
            width: 100%;
            left: 0;
        }
        .full-view {
            min-height: 150vh;
        }
    }
}
//Tables pequeñas y hacia arriba
@include respond-above(sm) {
    .layer-0 {
        z-index: 0;
        position: relative;
    }
    .layer-1 {
        top: 0;
        z-index: 1;
        position: absolute;
        width: 100%;
        left: 0;
    }
    @media (orientation: portrait) {
        .full-view {
            height: 70vh;
        }
    }
}

// Tablet grandes,laptops y pa arriba
@include respond-above(md) {
    .full-view {
        height: 100vh;
        min-height: 100vh;
    }
}
</style>
