<template>
    <v-hover v-slot:default="{ hover }">
            <v-card
                :elevation="hover ? 12 : 2"
                class="mx-auto"
    
            >
                <v-img
                    class="white--text"
                   height="250px"
                    :src="imageUrl"
                >
                    
                </v-img>
                <v-card-title class="align-end fill-height">
                        {{
            title
          }}
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
        description: { type: String, default: "" }
    },
    data: () => ({
        loading: true,
        show: false
    })
};
</script>

<style>
</style>