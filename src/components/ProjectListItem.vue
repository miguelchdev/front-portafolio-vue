<template>
    <v-hover v-slot:default="{ hover }">
        <v-card
            :elevation="hover ? 12 : 4"
            tile
            @click="clickMe"
        >
            <v-img
                class="white--text"
                :src="imageUrl"
                :aspect-ratio="16 / 9"
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
    name: 'ProjectItem',
    props: {
        title: { type: String, default: '' },
        imageUrl: { type: String, default: '' },
        description: { type: String, default: '' },
        id: { type: Number, required: true },
        active: {
            type: Boolean,
            default: false
        }
    },
    data: () => ({
        loading: true,
        show: false
    }),
    methods: {
        clickMe() {
            this.$emit('click', 5)
        }
    }
}
</script>

<style></style>
