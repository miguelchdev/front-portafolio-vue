<template>
    <!-- <v-hover v-slot:default="{ hover }"> -->
    <!-- Se necesita establecer un ancho fijo para evitar los issues al redimensionar -->
    <v-card
        tile
        @click="clickMe"
        :height="cardSize['height']"
        :width="cardSize['width']"
        ref="card"
    >
        <v-img
            class="white--text"
            :src="imageUrl"
            :aspect-ratio="16/9"
        >
        </v-img>
        <v-card-title>
            {{ title }}
        </v-card-title>
        <v-card-text>{{ description }}</v-card-text>
    </v-card>
    <!-- </v-hover> -->
</template>

<script>
export default {
    name: "ProjectItem",
    props: {
        title: { type: String, default: "" },
        imageUrl: { type: String, default: "" },
        description: { type: String, default: "" },
        id: { type: Number, required: true },
        active: {
            type: Boolean,
            default: false
        },
        parentWidth: {
            type: Number
        }
    },
    data: () => ({
        loading: true,
        show: false
    }),
    methods: {
        clickMe() {
            console.log(this.$refs.card.$parent);
            this.$emit("click", 5);
        }
    },
    computed: {
        cardSize() {
            switch (this.$vuetify.breakpoint.name) {
                case "xs":
                    return { height: "auto", width: this.parentWidth };
                case "sm":
                    return { height: "376", width: "auto" };
                case "md":
                    return { height: "378", width: "527" };
                case "lg":
                    return { height: "265", width: "331" };
                case "xl":
                    return { height: "375", width: "525" };
            }
            return { height: "auto", width: "525" };
        }
    }
};
</script>

<style scoped lang="scss">
</style>
