<template>
    <v-hover v-slot:default="{ hover }">
        <v-card
            :elevation="hover ? 12 : 2"
            class="mx-auto"
        >
            <v-img
                class="white--text"
                height="250px"
                :src="image_url"
            >
                <v-card-title class="align-end fill-height">
                    {{
            title
          }}
                </v-card-title>
            </v-img>
            <v-card-actions>
                <v-btn text>
                    Share
                </v-btn>

                <v-btn
                    text
                    color="purple"
                >
                    Explore
                </v-btn>

                <div class="flex-grow-1" />

                <v-btn
                    icon
                    @click="show = !show"
                >
                    <v-icon>
                        {{
              show ? "mdi-chevron-up" : "mdi-chevron-down"
            }}
                    </v-icon>
                </v-btn>
            </v-card-actions>
            <v-expand-transition>
                <div v-show="show">
                    <v-card-text>{{ description }}</v-card-text>
                </div>
            </v-expand-transition>
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