<template>

    <v-card
        :elevation="active ? 12 : 2"
        class="mx-12 my-12"
        tile
        @click="clickMe"
    >
        <v-img
            class="white--text"
            :src="imageUrl"
        >

        </v-img>
        <v-card-title>
            {{
            title
          }}
        </v-card-title>
        <v-card-text>{{ description }}</v-card-text>

    </v-card>

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
        }
    },
    data: () => ({
        loading: true,
        show: false
    }),
    methods: {
        clickMe() {
            this.$emit("click", this.id);
        }
    }
};
</script>

<style>
</style>