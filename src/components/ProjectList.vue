<template>
    <v-container class="px-0 max-s">
        <v-scroll-x-transition group class="row"  tag="div" leave-absolute mode="out-in">

            <v-col
                v-for="project in projects"
                :key="project.id"
                xl="4"
                lg="4"
                md="4"
                sm="6"
                cols="12"
                class="flex-grow-0"
            >

                <project-item
                    :title="project.title"
                    :image-url="cover(project)"
                    :description="project.description"
                />

            </v-col>

        </v-scroll-x-transition>
    </v-container>
</template>

<script>
import ProjectItem from "@/components/ProjectListItem.vue";

export default {
    name: "ProjectList",
    components: { ProjectItem },
    props: {
        projects: {
            type: Array,
            required: true
        },
        page: {
            type: Number
        }
    },
    methods: {
        cover(project) {
            let cover = project.images.length - 1;
            return project.images[cover].file["gallery_large"];
        },
        
    }
};
</script>

<style lang="scss" scoped>
</style>