<template>
    <v-hover v-slot:default="{ hover }">
        <!-- Se necesita establecer un ancho fijo para evitar los issues al redimensionar -->
        <v-card
            :elevation="hover ? 10 : elevation"
            tile
            :width="elementWidth"
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

    </v-hover>
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
        elementWidth: {
            type: String,
            default: "auto"
        }
    },
    data: () => ({
        loading: true,
        show: false
    }),
    methods: {},
    computed: {
        elevation() {
            return this.$vuetify.breakpoint.smAndDown ? 4 : 2;
        }
    }
};
</script>

<style scoped lang="scss">
</style>
