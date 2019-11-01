<template>
    <div class="bg-light full-view">
        <v-container class="px-sm-12 px-5 padding-y parent-height d-flex flex-column">
            <h1 class="text-sm-justify text-center description-services">{{myWork}}</h1>

            <project-list v-if="projects" :projects="filterProyects" class="mt-auto fill-height" />
            <v-pagination
                v-model="page"
                :length="count"
                class="mt-auto"
            ></v-pagination>
        </v-container>

    </div>
</template>

<script>
import ProjectList from "@/components/ProjectList.vue";
import portfolioApi from "@/services/portfolioApi";

export default {
    name: "Projects",
    components: { ProjectList },
    data: () => ({
        myWork: "my work",
        page: 1,
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
    mounted(){
        this.getProjects();
    },computed:{
        filterProyects(){
            return [this.projects[this.page - 1],];
        }
    }
};
</script>

<style lang="scss">
</style>
<style scoped lang="scss">
.description-services {
    padding-bottom: 3%;
}
</style>