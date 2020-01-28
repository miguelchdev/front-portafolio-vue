<template>
    <div class="bg-light full-view">
        <v-container class="px-sm-12 px-5 padding-y parent-height d-flex flex-column ">
            <v-row no-gutters>
                <v-col
                    xl="8"
                    lg="6"
                    md="6"
                    cols="12"
                    class="mb-md-0 mb-5"
                >
                    <h1 class=" text-sm-justify text-center description-services mins">
                        {{ myWork }}
                    </h1>
                </v-col>
                <v-col
                    xl="4"
                    lg="6"
                    md="6"
                    cols="12"
                >
                    <v-tabs
                        v-if="categories"
                        v-model="tab"
                        fixed-tabs
                        background-color="light"
                        show-arrows
                    >
                        <v-tab
                            v-for="(category,index) in categories"
                            :key="index"
                        >{{ category}}</v-tab>
                    </v-tabs>
                </v-col>
            </v-row>

            <project-list
                v-if="projects"
                :projects="projects"
            />

            <v-pagination
                v-if="projects"
                v-model="page"
                :length="pages"
                class="mt-auto"
            ></v-pagination>
        </v-container>
    </div>
</template>

<script>
import ProjectList from "@/components/ProjectList.vue";


export default {
    name: "Projects",
    components: { ProjectList },
    data: () => ({
        myWork: "my work",
        page: 1,
        current: 0,
        tab: 0,
        loading: true
    }),
    methods: {
        getProjects() {
          this.$store.dispatch("fetchProjects")
        },
        getTechnologys() {
           this.$store.dispatch("fetchProjectsTechnologys")
        }
    },
    created() {
        this.getProjects();
        this.getTechnologys();
    },
    computed: {
        selectedCategory(){
            return this.categories[this.tab]
        },
        projects(){
            return this.$store.getters.portfolioProjects(this.selectedCategory)
        },
        count(){
            return this.$store.getters.portfolioProjectsTotal
        },
        categories(){
            return ['All'].concat(this.$store.state.projectsTechnologys)
        },
        pageCount() {
            return this.$vuetify.breakpoint.smAndDown ? 3 : 4;
        },
        paginateProjects() {
            let start = (this.page - 1) * this.pageCount;
            let end = start + this.pageCount;

            return this.projects.slice(start, end);
        },
        size() {
            return this.projects.length;
        },
        pages() {
            return Math.ceil(this.size / this.pageCount);
        }
    }
};
</script>

<style lang="scss"></style>
<style scoped lang="scss">
.description-services {
    padding-bottom: 3%;
}
</style>
