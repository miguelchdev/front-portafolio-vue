<template>
    <v-container class="px-0">
        <v-row>
            <v-col
                v-for="project in projects"
                :key="project.id"
                xl="4"
                lg="4"
                md="4"
                sm="6"
                cols="12"
            >
                <v-slide-y-transition mode="out-in" appear>
                    <project-item
                        :title="project.title"
                        :image-url="cover(project)"
                        :description="project.description"
                    />
                </v-slide-y-transition>

            </v-col>
        </v-row>
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
        }
    },
    methods: {
        cover(project) {
            let cover = project.images.length - 1;
            return project.images[cover].file["gallery_large"];
        }
    }
};
</script>

<style lang="sass" scoped>

</style>