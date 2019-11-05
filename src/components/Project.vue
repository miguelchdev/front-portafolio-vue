<template>
    <div class="bg-light full-view">
        <v-container class="px-sm-12 px-5 padding-y parent-height d-flex flex-column">
            <div class="d-flex justify-space-between">
                <h1 class=" text-sm-justify text-center description-services">{{myWork}}</h1>
                <ul class="d-inline">
                    <li
                        v-for="(category,index) in categories"
                        :key="index"
                    >{{category}}</li>
                </ul>
            </div>

            <project-list
                v-if="projects"
                :projects="filterProjects"
                :page="page"
                class="fill-height mt-auto"
            />

            <v-pagination
                v-model="page"
                :length="pages"
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
        pageCount: 3,
        categories: ["All", "Mobile", "Web"]
    }),
    methods: {
        getProjects() {
            portfolioApi
                .getProjects({ fields: "id,title,images,description" })
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
    },
    computed: {
        filterProjects() {
            let start = (this.page - 1) * this.pageCount;
            let end = start + this.pageCount;

            return this.projects.slice(start, end);
        },
        pages() {
            return Math.ceil(this.count / this.pageCount);
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