<template>
    <v-container>
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
                <project-item
                    :title="project.title"
                    :image-url="cover(project)"
                    :description="project.description"
                />
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
    mounted() {
        this.getProjects();
    },
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
        },
      cover( project){
        let cover = project.images.length - 1;
        return project.images[cover].file['gallery_large']
      }
    }
};
</script>

<style lang="sass" scoped>

</style>