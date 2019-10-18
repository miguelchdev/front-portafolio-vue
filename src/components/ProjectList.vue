<template>
    <v-container class="gray lighten-5">
        <!-- Stack the columns on mobile by making one full-width and the other half-width -->

        <v-row>
            <v-col
                v-for="project in projects"
                :key="project.id"
                xl="4"
                lg="4"
                md="4"
                sm="6"
                xs="12"
            >
                <project-item
                    :title="project.title"
                    :image_url="project.images[0].file['gallery_large']"
                    :description="project.description"
                ></project-item>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
import portfolioApi from "@/services/portfolioApi";
import ProjectItem from "./ProjectListItem.vue";
export default {
    name: "ProjectList",
    components: { ProjectItem },
    data: () => ({
        projects: null,
        count: null,
        loading: true,
        show: false
    }),
    methods: {
        getProjects() {
            portfolioApi
                .getProjects({ fields: "title,images,description" })
                .then(data => {
                    this.projects = data.results;
                    this.count = data.count;
                    this.loading = false;
                })
                .catch(error => {
                    console.log(error);
                });
        }
    },
    mounted() {
        this.getProjects();
    }
};
</script>

<style lang="sass" scoped>

</style>