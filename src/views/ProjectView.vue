<template>
    <div class="bg-dark d-flex flex-grow-1">
        <v-container class="px-sm-12 px-5 padding-y parent-height ">
            <h1 class="text-sm-center text-center">{{project.title}}</h1>
            <v-carousel
                cycle
                height="400"
                class="my-5"
                hide-delimiter-background
                show-arrows-on-hover
            >
                <v-carousel-item
                    v-for="image in project.images"
                    :key="image.id"
                    :src="image.file['1366']"
                    transition="fade-transition"
                >

                </v-carousel-item>
            </v-carousel>
            <p>{{project.description}}</p>
        </v-container>

    </div>
</template>

<script>
export default {
    name: "ProjectView",
    props: {
        project: { type: Object, required: true }
    }
};
</script>
<style lang="scss" scoped>
.full-view {
    min-height: 100vh;
}
</style>