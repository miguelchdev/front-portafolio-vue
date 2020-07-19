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
            <transition name="fade">

                <v-col
                    v-if="show"
                    xl="4"
                    lg="4"
                    md="4"
                    sm="4"
                    class="hide-only-xs"
                    :style="styleObject"
                >
                </v-col>
            </transition>
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
        image: {
            type: Object,
            required: true,
            default() {
                return {
                    file: null,
                    alt: ""
                };
            }
        },
        
    },
    data() {
        return {
            imageInner: "",
            imageUrl: "",
            show: false
        };
    },
    computed: {
        background() {
            return this.imageInner
                ? "url(" + this.imageInner + ")  15% 0%"
                : "transparent";
        },
        styleObject() {
            return {
                height: "auto",
                width: "100%",
                backgroundRepeat: "no-repeat",
                background: this.background,
                backgroundSize: "cover"
            };
        }
    },
    watch: {
        image() {
           this.image.file && this.setImage();
        }
    },
    methods: {
        setImage() {
            let highResImage = new Image();
            highResImage.onload = () => {
                this.imageInner = this.image.file;
                this.show = true;
                this.$emit('load-banner');
            };
            highResImage.src = this.image.file;
        }
    },
    mounted(){
         this.image.file &&  this.setImage();
    }
};
</script>




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
}

.fade-enter-active,
.fade-leave-active {
    transition: opacity .8s;
}
.fade-enter, .fade-leave-to /* .fade-leave-active below version 2.1.8 */ {
    opacity: 0;
}
</style>
