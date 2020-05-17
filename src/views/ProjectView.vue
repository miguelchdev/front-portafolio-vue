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
            <v-row class="my-5">
                <v-col>
                    <p class="text-uppercase font-weight-bold">Date</p>
                    <p>-{{project.date}}</p>
                </v-col>
                <v-col>
                    <p class="text-uppercase font-weight-bold">Technologys</p>
                    <div class="d-flex mx-auto">
                        <p
                            :key="key"
                            class="pr-2"
                            v-for="(item,key) in project.technologys"
                        >{{item}} </p>
                    </div>

                </v-col>
            </v-row>
            <p>{{project.description}}</p>
            <h1 class="text-sm-center text-center">{{project.title}}</h1>
            <v-row class="mx-auto">
                <v-col
                    v-for="image in project.images"
                    :key="image.id"
                    cols="4"
                >
                    <v-card
                        flat
                        tile
                        class="d-flex"
                    >
                        <v-img
                            :src="image.file['1366']"
                            :lazy-src="image.file['1366']"
                            :aspect-ratio="4/3"
                        ></v-img>
                    </v-card>
                </v-col>
            </v-row>
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