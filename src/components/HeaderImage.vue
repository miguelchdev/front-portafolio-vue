<template>
    <v-container
        fluid
        class="px-0 py-0 fill-height"
    >
        <v-row
            no-gutters
            justify="end"
            class="full-height layer-0"
        >
            <v-col
                xl="4"
                lg="4"
                md="4"
                sm="4"
                class="hidden-xs-only"
                :style="styleObject"
            />
        </v-row>
        <div class="layer-1 full-height">
            <slot />
        </div>
    </v-container>
</template>

<script>
export default {
    name: "HeaderImage",
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
                height: "100%",
                width: "100%",
                backgroundRepeat: "no-repeat",
                background: "url(" + this.imageUrl + ")  15% 0%",
                backgroundSize: "cover"
            };
        }
    }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
@import "@/assets/responsive-breakpoints.scss";
//Tables pequeñas y hacia arriba
@include respond-above(sm) {
    .layer-0 {
        z-index: 0;
    }
    .layer-1 {
        z-index: 1;
        position: absolute;
        width: 100%;
    }
    .full-height {
        height: 100%;
    }
}
.bg-white{
    background-color: #fafafa;
}

// Tablet grandes,laptops y pa arriba
@include respond-above(md) {
    .full-height {
        height: 100vh;
    }
}
</style>
