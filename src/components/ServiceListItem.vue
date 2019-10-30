<template>
    <v-hover v-slot:default="{ hover }">
        <v-card
            :elevation="hover ? 24 : 0"
            class="py-8 px-6"
            tile
            :color="hover ? 'gray' : 'dark'"
            :height="cardSize.height"
        >
            <v-card-title>
                <h2 class="title-card">{{
            title
          }}</h2>

            </v-card-title>
            <v-card-text class="aling-self-end">
                <p class="description-text">
                    {{description}}
                </p>

            </v-card-text>

        </v-card>
    </v-hover>
</template>

<script>
export default {
    name: "ServiceListItem",
    props: {
        title: { type: String, default: "" },
        description: { type: String, default: "" }
    },
    data: () => ({
        loading: true,
        show: false
    }),
    computed: {
        cardSize() {
            if (this.$vuetify.breakpoint.xlOnly) {
                return { height: 500, width: 450 };
            }
        }
    }
};
</script>

<style lang="scss">
</style>

<style scoped lang="scss">
.title-card {
    text-transform: capitalize;
    font-weight: 100;
}
.description-text {
    font-size: 1.15rem;
    line-height: 2rem;
}
</style>